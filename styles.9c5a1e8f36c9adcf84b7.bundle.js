webpackJsonp([1,2],{417:function(e,n,t){var r=t(681);"string"==typeof r&&(r=[[e.i,r,""]]);t(965)(r,{});r.locals&&(e.exports=r.locals)},681:function(e,n,t){n=e.exports=t(682)(),n.push([e.i,"@import url(https://fonts.googleapis.com/css?family=Cookie|Indie+Flower|Open+Sans);",""]),n.push([e.i,"*{\n  box-sizing:border-box;\n}\n\nbody{\n  background-color:white;\n  max-width:960px;\n  margin-left:auto;\n  margin-right:auto;\n}\n.box{\n  margin:0.1em;\n  border:0.1em solid black;\n  padding:1em;\n  border-radius:0.3em;\n  text-align:center;\n  overflow:hidden;\n  position:relative;\n  font-family:'Open Sans', regular, sans-serif;\n}\n.box--invisible{\n  margin:0;\n  border:0;\n  padding:0;\n  display:flex;\n  flex-wrap:wrap;\n  align-items:center;\n  justify-content:center;\n}\n.labelAndInputItem{\n  margin:1em;\n  border:0;\n  padding:0;\n}\n.labelItem{\n  text-align:left;\n  width:10em;\n}\n.inputItem{\n  width:15em;\n  height:2em;\n  padding:1em;\n  border-radius:0.3em;\n  border:0.1em solid black;\n}\n.buttonItem{\n  background-color:white;\n  border:0.1em solid black;\n  padding:0 1em 0.1em 1em;\n  text-decoration:none;\n  font-size:1em;\n  border-radius:0.3em;\n  transition-duration:0.4s;\n  width:7em;\n  height:2em;\n}\n.buttonItem:hover{\n  background-color:black;\n  color:white;\n}\n@media only screen and (max-width: 500px){\n  .buttonItem, .labelItem, .inputItem{\n    width:100%;\n    display:inline-block;\n  }\n  .labelAndInputItem{\n    width:100%;\n    margin:0 0 1em 0;\n  }\n}\n",""])},682:function(e,n){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],n=0;n<this.length;n++){var t=this[n];t[2]?e.push("@media "+t[2]+"{"+t[1]+"}"):e.push(t[1])}return e.join("")},e.i=function(n,t){"string"==typeof n&&(n=[[null,n,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<n.length;o++){var a=n[o];"number"==typeof a[0]&&r[a[0]]||(t&&!a[2]?a[2]=t:t&&(a[2]="("+a[2]+") and ("+t+")"),e.push(a))}},e}},965:function(e,n){function t(e,n){for(var t=0;t<e.length;t++){var r=e[t],o=c[r.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](r.parts[i]);for(;i<r.parts.length;i++)o.parts.push(l(r.parts[i],n))}else{for(var a=[],i=0;i<r.parts.length;i++)a.push(l(r.parts[i],n));c[r.id]={id:r.id,refs:1,parts:a}}}}function r(e){for(var n=[],t={},r=0;r<e.length;r++){var o=e[r],i=o[0],a=o[1],s=o[2],l=o[3],d={css:a,media:s,sourceMap:l};t[i]?t[i].parts.push(d):n.push(t[i]={id:i,parts:[d]})}return n}function o(e,n){var t=m(),r=v[v.length-1];if("top"===e.insertAt)r?r.nextSibling?t.insertBefore(n,r.nextSibling):t.appendChild(n):t.insertBefore(n,t.firstChild),v.push(n);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");t.appendChild(n)}}function i(e){e.parentNode.removeChild(e);var n=v.indexOf(e);n>=0&&v.splice(n,1)}function a(e){var n=document.createElement("style");return n.type="text/css",o(e,n),n}function s(e){var n=document.createElement("link");return n.rel="stylesheet",o(e,n),n}function l(e,n){var t,r,o;if(n.singleton){var l=g++;t=b||(b=a(n)),r=d.bind(null,t,l,!1),o=d.bind(null,t,l,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(t=s(n),r=f.bind(null,t),o=function(){i(t),t.href&&URL.revokeObjectURL(t.href)}):(t=a(n),r=u.bind(null,t),o=function(){i(t)});return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else o()}}function d(e,n,t,r){var o=t?"":r.css;if(e.styleSheet)e.styleSheet.cssText=y(n,o);else{var i=document.createTextNode(o),a=e.childNodes;a[n]&&e.removeChild(a[n]),a.length?e.insertBefore(i,a[n]):e.appendChild(i)}}function u(e,n){var t=n.css,r=n.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}function f(e,n){var t=n.css,r=n.sourceMap;r&&(t+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var o=new Blob([t],{type:"text/css"}),i=e.href;e.href=URL.createObjectURL(o),i&&URL.revokeObjectURL(i)}var c={},p=function(e){var n;return function(){return"undefined"==typeof n&&(n=e.apply(this,arguments)),n}},h=p(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),m=p(function(){return document.head||document.getElementsByTagName("head")[0]}),b=null,g=0,v=[];e.exports=function(e,n){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");n=n||{},"undefined"==typeof n.singleton&&(n.singleton=h()),"undefined"==typeof n.insertAt&&(n.insertAt="bottom");var o=r(e);return t(o,n),function(e){for(var i=[],a=0;a<o.length;a++){var s=o[a],l=c[s.id];l.refs--,i.push(l)}if(e){var d=r(e);t(d,n)}for(var a=0;a<i.length;a++){var l=i[a];if(0===l.refs){for(var u=0;u<l.parts.length;u++)l.parts[u]();delete c[l.id]}}}};var y=function(){var e=[];return function(n,t){return e[n]=t,e.filter(Boolean).join("\n")}}()},968:function(e,n,t){e.exports=t(417)}},[968]);
//# sourceMappingURL=styles.9c5a1e8f36c9adcf84b7.bundle.map