// ==UserScript==
// @name     Clean Qwant
// @description This scipt will result in a more minimalistic version of the Qwant website.
// @include http*://*.qwant.*
// @version  1.1
// @run-at document-start

// @namespace https://greasyfork.org/users/213191
// ==/UserScript==

//create a new style node
var style = document.createElement('style');
style.type = 'text/css';

//sets style content
style.innerHTML = '.main-background-color, .wrapper, footer {background-color: #181a1b !important} .home__snippet__extension {display: none} .verticals__container {display: none !important} .header_content.header_content--classic :not(.header__item--appmenu) {display: none} .header__item--appmenu * { display: block !important} .header__item--appmenu {border-left: none} footer {display: none}';

//append style to document
document.getElementsByTagName('head')[0].appendChild(style);
