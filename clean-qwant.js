// ==UserScript==
// @name     Clean Qwant
// @description This scipt will result in a more minimalistic version of the Qwant website.
// @include http*://*.qwant.*
// @version  2.1
// @run-at document-start

// @namespace https://greasyfork.org/users/213191
// ==/UserScript==

//create a new style node
var style = document.createElement('style');
style.type = 'text/css';

//sets style content (see style_change.css)
style.innerHTML = '.wrapper{background-color:#181a1b!important}.all_content,.header_content.header_content--classic :not(.header__item--appmenu),.home__snippet__extension,.sidebar__item.sidebar__item--maps,.sidebar__item.sidebar__item--music,.sidebar__item.sidebar__item--shopping,.verticals__container,footer,.result-smart__news{display:none!important}.header__item--appmenu *{display:block!important}.header__item--appmenu{border-left:none}';

//append style to document
document.getElementsByTagName('head')[0].appendChild(style);
