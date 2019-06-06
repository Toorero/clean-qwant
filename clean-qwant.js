// ==UserScript==
// @name     Clean Qwant
// @description This scipt will result in a more minimalistic version of the Qwant website.
// @include http*://*.qwant.*
// @version  1
// @grant    none
// @run-at document-start

// ==/UserScript==

//create a new style node
var style = document.createElement('style');
style.type = 'text/css';

//sets style content
style.innerHTML = '.verticals__container {display: none !important} .header_content.header_content--classic :not(.header__item--appmenu) {display: none} .header__item--appmenu * { display: block !important} .header__item--appmenu {border-left: none} footer {display: none}';

//append style to document
document.getElementsByTagName('head')[0].appendChild(style);
