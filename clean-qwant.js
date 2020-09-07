// ==UserScript==
// @name     Clean Qwant
// @description This scipt will result in a more minimalistic version of the Qwant website.
// @include http*://*.qwant.*
// @version  1.1
// @run-at document-start

// @namespace https://greasyfork.org/users/213191
// ==/UserScript==

//create a new style node
var style = document.createElement('link');
style.rel = 'stylesheet';

//sets style content
style.href = 'https://raw.githubusercontent.com/Toorero/clean-qwant/master/style_change.css';

//append style to document
document.getElementsByTagName('head')[0].appendChild(style);
