# wpgpg-extension
Proof-of-concept Chrome extension to decrypt GPG-encrypted WordPress pages.

# Warning
In its current state, this extension requires that you have your GPG private key AND your passphrase saved in your browser storage (using chrome.storage.local) UNENCRYPTED. Anyone with access to your computer could easily yoink them both. 

It is not recommended to use this with any 'real' GPG keys, unless you're pretty confident about who has access to your computer. 
# Usage

## Requirements

- WordPress plugin wpgpg (https://github.com/trogau/wpgpg), configured and activated with the GPG public key 
- The private key you'd need to decrypt stuff encrypted with the above key

## What to do

1. Install the extension
2. Click the newly added 'wpgpg' button 
3. Paste in your GPG private key (exported from GnuPG something like: 'gpg -a --export-secret-key [key id]')
4. Paste in your passphrase (noting carefully the 'warning' section above)
5. Hit 'save key' and hope you see 'Key & passphrase saved!'
6. Click the 'wpgpg' button again and make sure it was saved successfully - in the popup, it should show the email/userid for the key, along with the key fingerprint and key ID. If not, some error should show up. (More info in console.)  
7. Load your WordPress site running wpgpg. It should present as a basic plain page with a chunk of ASCII-armoured GPG, with a 'decrypt' button on top.
8. Press the 'decrypt' button! It should think for a second, then the page should be replaced with the correct HTML. 

# Notes

