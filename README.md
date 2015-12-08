loginHelper
---
1password-like chrome extension to easily login with multiple credentials.

How to use
---
- `git clone https://github.com/yukotakagi/loginHelper.git`
- Modify popup.html so that each div contains credential you want to easily access.
 - e.g.
 ```
 <div id="test@example.com" data-password="foobar">QA</div>
 ```
- Add extension to your Chrome (see below)
- When you are on the login page (https://home.{blah}.com/login/), click on the icon

![Select](images/selectCredential.png?raw=true "Select")

How to install on Chrome
---
- Go to chrome://extensions/
- Check 'Developer mode'
- Click on 'Load unpacked extension...'
- Select the directory that contains your files

Misc
---
- You could package the extension instead, but if you update popup.html often, this is the easiest.
- Once you made change, make sure to reload.
![Reload extension](images/reload.png?raw=true "Reload extension")
