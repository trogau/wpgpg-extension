// Copyright (c) 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 * Get the current URL.
 *
 * @param {function(string)} callback - called when the URL of the current tab
 *   is found.
 */
function getCurrentTabUrl(callback) 
{
	// Query filter to be passed to chrome.tabs.query - see
	// https://developer.chrome.com/extensions/tabs#method-query
	var queryInfo = {
		active: true,
		currentWindow: true
	};

	chrome.tabs.query(queryInfo, function(tabs) 
	{
		// chrome.tabs.query invokes the callback with a list of tabs that match the
		// query. When the popup is opened, there is certainly a window and at least
		// one tab, so we can safely assume that |tabs| is a non-empty array.
		// A window can only have one active tab at a time, so the array consists of
		// exactly one tab.
		var tab = tabs[0];

		// A tab is a plain object that provides information about the tab.
		// See https://developer.chrome.com/extensions/tabs#type-Tab
		var url = tab.url;

		// tab.url is only available if the "activeTab" permission is declared.
		// If you want to see the URL of other tabs (e.g. after removing active:true
		// from |queryInfo|), then the "tabs" permission is required to see their
		// "url" properties.
		console.assert(typeof url == 'string', 'tab.url should be a string');

		/* NOPE
		// http://stackoverflow.com/questions/19758028/chrome-extension-get-dom-content
		chrome.tabs.sendMessage(tab.id, {text: 'report_back'}, doStuffWithDom);
		*/

		callback(url);
	});
}

function renderStatus(statusText) 
{
	document.getElementById('status').innerHTML += statusText + "<br />";
}

function doStuffWithDom(domContent) 
{
	console.log('I received the following DOM content:\n' + domContent);
}


// When the browser-action button is clicked...
chrome.browserAction.onClicked.addListener(function (tab) 
{
});	

function decryptPage(content)
{
	//alert(content);
	chrome.tabs.executeScript({code:"alert(document.getElementById('crypted').innerHTML)"});
}	
	
document.addEventListener('DOMContentLoaded', function() 
{
	chrome.storage.local.get('privkey', function(data) 
	{
		if (data.privkey)
		{
			document.getElementById('privatekey').value = data.privkey;
			document.getElementById('privatekey').style = 'background-color:lightgreen';
		}
		else
		{
			document.getElementById('privatekey').value = 'enter your private key here';
			document.getElementById('privatekey').style = 'color: #cccccc';
		}
	});

	chrome.storage.local.get('passphrase', function(data) 
	{
		if (data.passphrase)
		{
			document.getElementById('passphrase').value = data.passphrase;
			document.getElementById('passphrase').style = 'background-color:lightgreen';
		}
		else
		{
		}
	});


	getCurrentTabUrl(function(url) 
	{
		// Put the image URL in Google search.
		
		var savekey = document.getElementById('btn_savekey');
		var clearkey = document.getElementById('btn_clearkey');
		var keydata = document.getElementById('privatekey');
		var passphrase = document.getElementById('passphrase');
		
		//var decryptpage = document.getElementById('btn_decrypt_page');
		
		savekey.addEventListener('click', function() 
		{
			storePrivateKey(keydata.value, passphrase.value);
		});
		
		//btn_decrypt_page.addEventListener('click', function() {
			//decryptPage(document.documentElement.innerHTML);
		//});
		
		btn_clearkey.addEventListener('click', function() 
		{
			chrome.storage.local.remove( 'privkey' );
			chrome.storage.local.remove( 'passphrase' );
			console.log("Cleared private key & passphrase from local storage!");
			renderStatus("Cleared private key & passphrase from local storage!");
		});

		chrome.storage.local.get('privkey', function(data) 
		{
			if (data.privkey)
			{
				privkey = data.privkey;

				kbpgp.KeyManager.import_from_armored_pgp(
				{	
					armored: privkey 	
				}, function(err, alice) 
				{
					if (!err) 
					{
						console.log("Key is loaded");
					
						if (alice.is_pgp_locked()) 
						{
							console.log("Key is locked!");
						
							chrome.storage.local.get('passphrase', function(data) 
							{
								if (data.passphrase)
								{
									alice.unlock_pgp(
									{
										passphrase: data.passphrase
									}, function(err) 
									{
										if (!err) 
										{
											console.log("Loaded private key with passphrase");
											//console.log("Userid: " + alice.pgp.userids[0].userid.toString());
						
											var material = alice.pgp.key(alice.pgp.primary);
											renderStatus("<span style='display: inline-block;width:110px;margin-right:30px;'>UserID:</span>" + htmlEscape(alice.pgp.userids[0].userid.toString()));
											renderStatus("<span style='display: inline-block;width:110px;margin-right:30px;'>Key fingerprint:</span>" + material.get_fingerprint().toString('hex'));
											renderStatus("<span style='display: inline-block;width:110px;margin-right:30px;'>Key ID:</span>" + material.get_key_id().toString('hex'));
											renderStatus("<span style='display: inline-block;width:110px;margin-right:30px;'>Short key ID:</span>" + material.get_short_key_id().toString('hex'));
										}
										else
										{
											console.log("Error unlocking key?!");
											renderStatus("Error: Couldn't unlock key :(");
										}
									});
								} 
							});
						}
						else 
						{
							console.log("Loaded private key w/o passphrase");
						}
					}
					else 
					{
						console.log("couldn't load alice key:\t" + err);
					}
				});	
			}
			else
			{
				console.log("No key set yet");
			}
		});
	});
});

function storePrivateKey(key, passphrase)
{
	// Check browser support
	if (typeof(Storage) !== "undefined") 
	{
		//localStorage.setItem("privatekey", key);
		console.log("Saving privkey and passphrase");
		chrome.storage.local.set({ 'privkey':key, 'passphrase': passphrase }, function ()
		{
			renderStatus("Key & passphrase saved!");
		});
	}
	else 
	{
		renderStatus("Sorry, your browser does not support Web Storage...");
	}
}



function htmlEscape(str) 
{
    return String(str)
            .replace(/&/g, '&amp;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
}

// I needed the opposite function today, so adding here too:
function htmlUnescape(value)
{
    return String(value)
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'")
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&amp;/g, '&');
}