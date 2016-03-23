/**
 * content.js
  */
var btn = document.createElement("BUTTON");        	// Create a <button> element
var t = document.createTextNode("Decrypt page");    // Create a text node
btn.appendChild(t);                                	// Append the text to <button>
btn.setAttribute('type', 'button'); 				// set the type so it won't submit the form: http://stackoverflow.com/questions/4170557/cant-change-buttons-type-with-javascript

btn.onclick = function() 
{
	var pagecontent = document.getElementById("crypted").innerHTML;
	document.getElementById("crypted").innerHTML = "<span>decrypting!@#</span><style type='text/css'>@-webkit-keyframes uil-default-anim { 0% { opacity: 1} 100% {opacity: 0} }@keyframes uil-default-anim { 0% { opacity: 1} 100% {opacity: 0} }.uil-default-css > div:nth-of-type(1){-webkit-animation: uil-default-anim 1s linear infinite;animation: uil-default-anim 1s linear infinite;-webkit-animation-delay: -0.5s;animation-delay: -0.5s;}.uil-default-css { position: relative;background:none;width:200px;height:200px;}.uil-default-css > div:nth-of-type(2){-webkit-animation: uil-default-anim 1s linear infinite;animation: uil-default-anim 1s linear infinite;-webkit-animation-delay: -0.4166666666666667s;animation-delay: -0.4166666666666667s;}.uil-default-css { position: relative;background:none;width:200px;height:200px;}.uil-default-css > div:nth-of-type(3){-webkit-animation: uil-default-anim 1s linear infinite;animation: uil-default-anim 1s linear infinite;-webkit-animation-delay: -0.33333333333333337s;animation-delay: -0.33333333333333337s;}.uil-default-css { position: relative;background:none;width:200px;height:200px;}.uil-default-css > div:nth-of-type(4){-webkit-animation: uil-default-anim 1s linear infinite;animation: uil-default-anim 1s linear infinite;-webkit-animation-delay: -0.25s;animation-delay: -0.25s;}.uil-default-css { position: relative;background:none;width:200px;height:200px;}.uil-default-css > div:nth-of-type(5){-webkit-animation: uil-default-anim 1s linear infinite;animation: uil-default-anim 1s linear infinite;-webkit-animation-delay: -0.16666666666666669s;animation-delay: -0.16666666666666669s;}.uil-default-css { position: relative;background:none;width:200px;height:200px;}.uil-default-css > div:nth-of-type(6){-webkit-animation: uil-default-anim 1s linear infinite;animation: uil-default-anim 1s linear infinite;-webkit-animation-delay: -0.08333333333333331s;animation-delay: -0.08333333333333331s;}.uil-default-css { position: relative;background:none;width:200px;height:200px;}.uil-default-css > div:nth-of-type(7){-webkit-animation: uil-default-anim 1s linear infinite;animation: uil-default-anim 1s linear infinite;-webkit-animation-delay: 0s;animation-delay: 0s;}.uil-default-css { position: relative;background:none;width:200px;height:200px;}.uil-default-css > div:nth-of-type(8){-webkit-animation: uil-default-anim 1s linear infinite;animation: uil-default-anim 1s linear infinite;-webkit-animation-delay: 0.08333333333333337s;animation-delay: 0.08333333333333337s;}.uil-default-css { position: relative;background:none;width:200px;height:200px;}.uil-default-css > div:nth-of-type(9){-webkit-animation: uil-default-anim 1s linear infinite;animation: uil-default-anim 1s linear infinite;-webkit-animation-delay: 0.16666666666666663s;animation-delay: 0.16666666666666663s;}.uil-default-css { position: relative;background:none;width:200px;height:200px;}.uil-default-css > div:nth-of-type(10){-webkit-animation: uil-default-anim 1s linear infinite;animation: uil-default-anim 1s linear infinite;-webkit-animation-delay: 0.25s;animation-delay: 0.25s;}.uil-default-css { position: relative;background:none;width:200px;height:200px;}.uil-default-css > div:nth-of-type(11){-webkit-animation: uil-default-anim 1s linear infinite;animation: uil-default-anim 1s linear infinite;-webkit-animation-delay: 0.33333333333333337s;animation-delay: 0.33333333333333337s;}.uil-default-css { position: relative;background:none;width:200px;height:200px;}.uil-default-css > div:nth-of-type(12){-webkit-animation: uil-default-anim 1s linear infinite;animation: uil-default-anim 1s linear infinite;-webkit-animation-delay: 0.41666666666666663s;animation-delay: 0.41666666666666663s;}.uil-default-css { position: relative;background:none;width:200px;height:200px;}</style><div class='uil-default-css' style='transform:scale(0.6);'><div style='top:80px;left:93px;width:14px;height:40px;background:#00b2ff;-webkit-transform:rotate(0deg) translate(0,-60px);transform:rotate(0deg) translate(0,-60px);border-radius:10px;position:absolute;'></div><div style='top:80px;left:93px;width:14px;height:40px;background:#00b2ff;-webkit-transform:rotate(30deg) translate(0,-60px);transform:rotate(30deg) translate(0,-60px);border-radius:10px;position:absolute;'></div><div style='top:80px;left:93px;width:14px;height:40px;background:#00b2ff;-webkit-transform:rotate(60deg) translate(0,-60px);transform:rotate(60deg) translate(0,-60px);border-radius:10px;position:absolute;'></div><div style='top:80px;left:93px;width:14px;height:40px;background:#00b2ff;-webkit-transform:rotate(90deg) translate(0,-60px);transform:rotate(90deg) translate(0,-60px);border-radius:10px;position:absolute;'></div><div style='top:80px;left:93px;width:14px;height:40px;background:#00b2ff;-webkit-transform:rotate(120deg) translate(0,-60px);transform:rotate(120deg) translate(0,-60px);border-radius:10px;position:absolute;'></div><div style='top:80px;left:93px;width:14px;height:40px;background:#00b2ff;-webkit-transform:rotate(150deg) translate(0,-60px);transform:rotate(150deg) translate(0,-60px);border-radius:10px;position:absolute;'></div><div style='top:80px;left:93px;width:14px;height:40px;background:#00b2ff;-webkit-transform:rotate(180deg) translate(0,-60px);transform:rotate(180deg) translate(0,-60px);border-radius:10px;position:absolute;'></div><div style='top:80px;left:93px;width:14px;height:40px;background:#00b2ff;-webkit-transform:rotate(210deg) translate(0,-60px);transform:rotate(210deg) translate(0,-60px);border-radius:10px;position:absolute;'></div><div style='top:80px;left:93px;width:14px;height:40px;background:#00b2ff;-webkit-transform:rotate(240deg) translate(0,-60px);transform:rotate(240deg) translate(0,-60px);border-radius:10px;position:absolute;'></div><div style='top:80px;left:93px;width:14px;height:40px;background:#00b2ff;-webkit-transform:rotate(270deg) translate(0,-60px);transform:rotate(270deg) translate(0,-60px);border-radius:10px;position:absolute;'></div><div style='top:80px;left:93px;width:14px;height:40px;background:#00b2ff;-webkit-transform:rotate(300deg) translate(0,-60px);transform:rotate(300deg) translate(0,-60px);border-radius:10px;position:absolute;'></div><div style='top:80px;left:93px;width:14px;height:40px;background:#00b2ff;-webkit-transform:rotate(330deg) translate(0,-60px);transform:rotate(330deg) translate(0,-60px);border-radius:10px;position:absolute;'></div></div>";
	decryptPage(pagecontent);
}

document.getElementById("decryptbtn").appendChild(btn);

function decryptPage(content)
{
	loadKey(function(keyobj) 
	{
		console.log("Key for " + keyobj.pgp.userids[0].userid.toString() + " loaded"); // FIXME: This might not work properly if it's not the index 0 userid?
		//console.dir(keyobj);
		
		var t = document.createTextNode("???");       // Create a text node
		
		var ring = new kbpgp.keyring.KeyRing;
		var kms = [keyobj];
		
		for (var i in kms) 
		{
		  ring.add_key_manager(kms[i]);
		}
		
		decryptedMsg = "";
		
		kbpgp.unbox({strict: false, keyfetch: ring, armored: content }, function(err, literals) 
		{
			if (err != null) 
			{
				console.log("Problem: " + err);
			}
			else 
			{
				console.log("Decrypted message");
				decryptedMsg = literals[0].toString();
				
				//alert(decryptedMsg);
				document.write(decryptedMsg);
			
				var ds = km = null;
				ds = literals[0].get_data_signer();
				if (ds) { km = ds.get_key_manager(); }
				if (km) {
					console.log("Signed by PGP fingerprint: " + km.get_pgp_fingerprint().toString('hex'));
					decryptedUserid = km.get_userids_mark_primary()[0].userid;
					console.log("PGP KeyID: " + decryptedUserid);
				}
				else
				{
					console.log("Content not signed");
				}
			}
		});
		
		return decryptedMsg;
	} );
}

// Literally cannot believe these functions are necessary and not built-in. 
// http://shebang.brandonmintern.com/foolproof-html-escaping-in-javascript/
function htmlEscape(str) {
    return String(str)
            .replace(/&/g, '&amp;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
}

// I needed the opposite function today, so adding here too:
function htmlUnescape(value){
    return String(value)
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'")
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&amp;/g, '&');
}

/**
 * loadKey(uid, callback)
 *
 * Load key for user 'uid'
*/
function loadKey(callback)
{
	chrome.storage.local.get('privkey', function(data) 
	{
		if (data.privkey)
		{
			kbpgp.KeyManager.import_from_armored_pgp({ armored: data.privkey }, function(err, alice) 
			{
				if (!err) 
				{
					console.log("Key loaded");
					
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
								}, 	function(err) 
								{
									if (!err)
									{
										console.log("Key unlocked");
										var material = alice.pgp.key(alice.pgp.primary);
										console.log("Key fingerprint:\t" + material.get_fingerprint().toString('hex'));
										console.log("Key ID: \t\t" + material.get_key_id().toString('hex'));
										console.log("Short key ID: \t\t" + material.get_short_key_id().toString('hex'));
											
										callback(alice);
									}
									else {
										console.log("Error unlocking key?!");
										document.getElementById("crypted").innerHTML = "Error: Couldn't unlock key :(";
									}
								});
							}
						});
						
					}
				}
				else
				{
					console.log("ERROR: Can't open public key for " + uid + ": " + err);
					console.log("Key was: " + keyfile);
				}
			});
		}
		else
		{
			console.log("ERROR: no private key is available.");
			document.getElementById("crypted").innerHTML = "Error: No private key is set :( Hit the wpgpg toolbar button and set one!";
			document.getElementById("crypted").style = "font-size: 14pt";
		}
	});
}

// http://stackoverflow.com/questions/4793604/how-to-do-insert-after-in-javascript-without-using-a-library
function insertAfter(newNode, referenceNode) 
{
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}