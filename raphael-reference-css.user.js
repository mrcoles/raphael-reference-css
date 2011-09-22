// ==UserScript==
// @name FixRaphaelCSS
// @namespace http://mrcoles.com
// @description Makes the Raphael docs more usable by having the TOC fixed on the side.
// @version 0.0.1
// @match http://raphaeljs.com/reference.html
// ==/UserScript==


var w = window,
    d = document,
    styles = '#content #column-1 { width: 78%; }'
             + '#content #column-2 { width: 20%; }'
             + 'ul#contents {'
             + 'position: fixed;'
             + 'top: 0;'
             + 'right: 0;'
             + 'margin: 0;'
             + 'padding: 0 10px;'
             + 'height: 100%;'
             + 'list-style: none;'
             + 'overflow-y: scroll;'
             + 'background: #f6f6f6;'
             + 'box-shadow: -1px -1px 5px rgba(0,0,0,.5);'
             + 'font-size: 12px;'
             + '}'
             + 'ul#contents li:first-child { margin-top: 10px; }'
             + 'ul#contents li:last-child { margin-bottom: 10px; }'
             + '#column-2 h2:nth-child(2) { display: none; }'
             + 'ul#contents a { display: block; }',
    tag = d.createElement('style'),
    elt, top = 0;

tag.innerHTML = styles;

d.getElementsByTagName('head')[0].appendChild(tag);

// fix scroll position if we have a hash (since the CSS messes it up)...
if (w.location.hash) {
    if ((elt = d.getElementById(w.location.hash.slice(1)))) {
        do { top += elt.offsetTop; } while ((elt = elt.offsetParent));
        w.scrollTo(w.offsetX, top);
    }
}
