loginHelper
---
1password-like chrome extension to easily login with multiple credentials.

How to use
---
- `git clone https://github.com/yukotakagi/loginHelper.git`
- Modify popup.html so that each div contains credentials you want to easily access.
 - e.g.
 ```
 <div id="test@example.com" data-password="foobar">QA</div>
 ```
- Add extension to your Chrome (see below)
- When you are on the login page (https://home.{blah}.com/login/), click on the icon
- Click on the credential you want to use. It'll pre-populate the form for you.

How to install on Chrome
---
- Go to chrome://extensions/
- Check 'Developer mode'
- Click on 'Load unpacked extension...'
- Select the directory that contains your files

Misc
---
- You could package the extension instead, but if you update popup.html often as you should, this is the easiest.
- Once you made change, make sure to reload.
