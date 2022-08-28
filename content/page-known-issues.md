# Known Issues

## Tab focusing anchors in firefox

In Firefox, type "about:config" in the URL bar. There is no accessibility.tabfocus preference on the mac, so you'll have to make one. Right click in the window, create a new "integer" pref, and set it to 7.
[Source](https://stackoverflow.com/questions/11704828/how-to-allow-keyboard-focus-of-links-in-firefox#answer-72306905)