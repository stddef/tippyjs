!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("popper.js")):"function"==typeof define&&define.amd?define(["popper.js"],t):e.Tippy=t(e.Popper)}(this,function(e){"use strict";function t(){C.touchUser=!0,/(iPad|iPhone|iPod)/g.test(navigator.userAgent)&&!window.MSStream&&document.body.classList.add("tippy-touch"),document.removeEventListener("touchstart",t)}function n(e){var t=o(e.target,H.el),n=o(e.target,H.popper);if(n){if(a(I.refs,function(e){return e.popper===n}).settings.interactive)return}if(t){var i=a(I.refs,function(e){return e.el===t}),r=i.popper,s=i.settings,l=s.hideOnClick,u=s.multiple,c=s.trigger;if(!0!==l||C.touchUser||clearTimeout(r.getAttribute("data-delay")),!u&&C.touchUser||!u&&-1!==c.indexOf("click"))return E(i);if(!0!==l||-1!==c.indexOf("click"))return}!o(e.target,H.controller)&&document.querySelector(H.popper)&&E()}function i(e){for(var t=[!1,"webkit"],n=e.charAt(0).toUpperCase()+e.slice(1),i=0;i<t.length;i++){var r=t[i],o=r?""+r+n:e;if(void 0!==window.document.body.style[o])return o}return null}function r(e){return e.replace(/-.+/,"")}function o(e,t){return Element.prototype.matches||(Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||function(e){for(var t=(this.document||this.ownerDocument).querySelectorAll(e),n=t.length;--n>=0&&t.item(n)!==this;);return n>-1}),Element.prototype.closest||(Element.prototype.closest=function(e){for(var t=this;t;){if(t.matches(e))return t;t=t.parentElement}}),e.closest(t)}function a(e,t){return Array.prototype.find?e.find(t):e.filter(t)[0]}function s(t){var n=t.el,i=t.popper,o=t.settings,a=o.position,s=o.popperOptions,l=o.offset,u=o.distance,c=i.querySelector(H.tooltip),p=S({placement:a},s||{},{modifiers:S({},s?s.modifiers:{},{flip:S({padding:u+5},s&&s.modifiers?s.modifiers.flip:{}),offset:S({offset:l},s&&s.modifiers?s.modifiers.offset:{})}),onUpdate:function(){c.style.top="",c.style.bottom="",c.style.left="",c.style.right="",c.style[r(i.getAttribute("x-placement"))]=-(u-M.distance)+"px"}});return new e(n,i,p)}function l(e,t,n){var i=n.position,o=n.distance,a=n.arrow,s=n.animateFill,l=n.inertia,u=n.animation,c=n.arrowSize,p=n.size,d=n.theme,f=n.html,m=n.zIndex,h=document.createElement("div");h.setAttribute("class","tippy-popper"),h.setAttribute("role","tooltip"),h.setAttribute("aria-hidden","true"),h.setAttribute("id","tippy-tooltip-"+e),h.style.zIndex=m;var v=document.createElement("div");if(v.setAttribute("class","tippy-tooltip tippy-tooltip--"+p+" "+d+"-theme leave"),v.setAttribute("data-animation",u),a){var y=document.createElement("div");y.setAttribute("class","arrow-"+c),y.setAttribute("x-arrow",""),v.appendChild(y)}if(s){v.setAttribute("data-animatefill","");var b=document.createElement("div");b.setAttribute("class","leave"),b.setAttribute("x-circle",""),v.appendChild(b)}l&&v.setAttribute("data-inertia","");var g=document.createElement("div");if(g.setAttribute("class","tippy-tooltip-content"),f){var w=void 0;f instanceof Element?(g.innerHTML=f.innerHTML,w=f.id||"tippy-html-template"):(g.innerHTML=document.getElementById(f.replace("#","")).innerHTML,w=f),h.classList.add("html-template"),h.setAttribute("tabindex","0"),v.setAttribute("data-template-id",w)}else g.innerHTML=t;return v.style[r(i)]=-(o-M.distance)+"px",v.appendChild(g),h.appendChild(v),h}function u(e,t,n){var i=[];return"manual"===e?i:(t.addEventListener(e,n.handleTrigger),i.push({event:e,handler:n.handleTrigger}),"mouseenter"===e&&(t.addEventListener("mouseleave",n.handleMouseleave),i.push({event:"mouseleave",handler:n.handleMouseleave})),"focus"===e&&(t.addEventListener("blur",n.handleBlur),i.push({event:"blur",handler:n.handleBlur})),i)}function c(e){I.refs.push(e)}function p(e){var t=e.title;e.setAttribute("data-original-title",t||"html"),e.removeAttribute("title")}function d(e){var t=e.getBoundingClientRect();return t.top>=0&&t.left>=0&&t.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&t.right<=(window.innerWidth||document.documentElement.clientWidth)}function f(e){var t=this,n=a(I.refs,function(e){return e.el===t}),o=n.popper,s=r(o.getAttribute("x-placement")),l=Math.round(o.offsetWidth/2),u=Math.round(o.offsetHeight/2),c=document.documentElement.offsetWidth||document.body.offsetWidth,p=e.pageX,d=e.pageY,f=void 0,m=void 0;"top"===s?(f=p-l,m=d-2.5*u):"left"===s?(f=p-2*l-15,m=d-u):"right"===s?(f=p+u,m=d-u):"bottom"===s&&(f=p-l,m=d+u/1.5),"top"!==s&&"bottom"!==s||(p+5+l>c?f=c-5-2*l:p-5-l<0&&(f=5)),o.style[i("transform")]="translate3d("+f+"px, "+m+"px, 0)"}function m(e,t){t?window.getComputedStyle(t)[i("transform")]:window.getComputedStyle(e).opacity}function h(e,t){e.forEach(function(e){e&&t(e.classList)})}function v(e,t){var n=t;e.forEach(function(e){e&&(n=t,e.hasAttribute("x-circle")&&(n=Math.round(n/1.2)),e.style[i("transitionDuration")]=n+"ms")})}function y(e,t,n){var i=e.popper.querySelector(H.tooltip),r=!1,o=function e(t){t.target===i&&(r=!0,i.removeEventListener("webkitTransitionEnd",e),i.removeEventListener("transitionend",e),n())};i.addEventListener("webkitTransitionEnd",o),i.addEventListener("transitionend",o),clearTimeout(e.transitionendTimeout),e.transitionendTimeout=setTimeout(function(){!r&&n()},t)}function b(e,t){var n=e.style.visibility;return"show"===t?"visible"===n:"hidden"===n}function g(e){var t=e.el,n=(e.popper,e.settings.appendTo),i=e.settings.followCursor;n.appendChild(e.popper),e.popperInstance?(e.popperInstance.update(),!i&&e.popperInstance.enableEventListeners()):(e.popperInstance=s(e),i&&!C.touchUser&&(t.addEventListener("mousemove",f),e.popperInstance.disableEventListeners()))}function w(e){var t=e.popper,n=e.popperInstance,r=e.settings.stickyDuration,o=function(){return t.style[i("transitionDuration")]=r+"ms"},a=function(){return t.style[i("transitionDuration")]=""},s=function e(){n&&n.scheduleUpdate(),o();var i="visible"===t.style.visibility;window.requestAnimationFrame?i?window.requestAnimationFrame(e):a():i?setTimeout(e,20):a()};setTimeout(s,0)}function E(e){I.refs.forEach(function(t){var n=t.popper,i=t.tippyInstance,r=t.settings,o=r.hideOnClick,a=r.hideDuration,s=r.trigger;if(r.appendTo.contains(n)){var l=!0===o||-1!==s.indexOf("focus"),u=!e||n!==e.popper;l&&u&&i.hide(n,a)}})}function A(e){return e instanceof Element?[e]:[].slice.call(document.querySelectorAll(e))}function T(e,t,n){if(!t.getAttribute("x-placement"))return!1;var i=e.clientX,o=e.clientY,a=n.interactiveBorder,s=n.distance,l=t.getBoundingClientRect(),u=r(t.getAttribute("x-placement")),c=a+s,p=l.top-o>a,d=o-l.bottom>a,f=l.left-i>a,m=i-l.right>a;return"top"===u?p=l.top-o>c:"bottom"===u?d=o-l.bottom>c:"left"===u?f=l.left-i>c:"right"===u&&(m=i-l.right>c),p||d||f||m}e="default"in e?e.default:e;var k=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},L=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},x="undefined"!=typeof window&&(!("addEventListener"in window)||/MSIE 9/i.test(navigator.userAgent)||void 0!==window.operamini),C={touchUser:!1,idCounter:1},I={refs:[]},M=!x&&Object.freeze({html:!1,position:"top",animation:"shift",animateFill:!0,arrow:!1,arrowSize:"regular",delay:0,hideDelay:0,trigger:"mouseenter focus",duration:375,hideDuration:375,interactive:!1,interactiveBorder:2,theme:"dark",size:"regular",distance:10,offset:0,hideOnClick:!0,multiple:!1,followCursor:!1,inertia:!1,flipDuration:300,sticky:!1,stickyDuration:200,appendTo:"undefined"!=typeof document?document.body:null,zIndex:9999,popperOptions:{}}),O=!x&&Object.keys(M),H={popper:".tippy-popper",tooltip:".tippy-tooltip",content:".tippy-tooltip-content",circle:"[x-circle]",arrow:"[x-arrow]",el:"[data-tooltipped]",controller:"[data-tippy-controller]"};return"undefined"!=typeof window&&"undefined"!=typeof document&&(x||(document.addEventListener("click",n),document.addEventListener("touchstart",t))),function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(k(this,e),!x){this.selector=t,this.settings=Object.freeze(S({},M,n)),this.callbacks={wait:n.wait,beforeShown:n.beforeShown||new Function,shown:n.shown||new Function,beforeHidden:n.beforeHidden||new Function,hidden:n.hidden||new Function};var i=A(t);this._createTooltips(i)}}return L(e,[{key:"_applyIndividualSettings",value:function(e){var t=this,n={};return O.forEach(function(i){var r=e.getAttribute("data-"+i.toLowerCase())||t.settings[i];"false"===r?r=!1:"true"===r&&(r=!0),isNaN(parseFloat(r))||(r=parseFloat(r)),n[i]=r}),n.arrow&&(n.animateFill=!1),S({},this.settings,n)}},{key:"_getEventListenerHandlers",value:function(e,t,n){var i=this,r=(n.position,n.delay),a=n.hideDelay,s=n.hideDuration,l=n.duration,u=n.interactive,c=(n.interactiveBorder,n.distance,n.hideOnClick),p=n.trigger,d=function(){clearTimeout(t.getAttribute("data-delay")),clearTimeout(t.getAttribute("data-hidedelay"))},f=function(){if(d(),"visible"!==t.style.visibility)if(r){var e=setTimeout(function(){return i.show(t,l)},r);t.setAttribute("data-delay",e)}else i.show(t,l)},m=function(e){return i.callbacks.wait?i.callbacks.wait.call(t,f,e):f()},h=function(){if(d(),a){var e=setTimeout(function(){return i.hide(t,s)},a);t.setAttribute("data-hidedelay",e)}else i.hide(t,s)};return{handleTrigger:function(e){var n="click"===e.type,i="visible"===t.style.visibility,r="persistent"!==c;n&&i&&r?h():m(e)},handleMouseleave:function(i){if(u){var r=function i(r){var a=function(){document.removeEventListener("mousemove",i),h()},s=o(r.target,H.el),l=o(r.target,H.popper)===t,u=s===e,c=-1!==p.indexOf("click");if(s&&s!==e)return a();l||u||c||T(r,t,n)&&a()};return document.addEventListener("mousemove",r)}h()},handleBlur:function(e){!C.touchUser&&e.relatedTarget&&(o(e.relatedTarget,H.popper)||h())}}}},{key:"_createTooltips",value:function(t){var n=this;t.forEach(function(e){var t=n._applyIndividualSettings(e),i=t.html,r=t.trigger,o=e.title;if(o||i){var a=C.idCounter;e.setAttribute("data-tooltipped",""),e.setAttribute("aria-describedby","tippy-tooltip-"+a),p(e);var s=l(a,o,t),d=n._getEventListenerHandlers(e,s,t),f=[];r.trim().split(" ").forEach(function(t){return f=f.concat(u(t,e,d))}),c({id:a,el:e,popper:s,settings:t,listeners:f,tippyInstance:n}),C.idCounter++}}),e.store=I}},{key:"getPopperElement",value:function(e){try{return a(I.refs,function(t){return t.el===e}).popper}catch(e){throw new Error("[Tippy error]: Element does not exist in any Tippy instances")}}},{key:"getTooltippedElement",value:function(e){try{return a(I.refs,function(t){return t.popper===e}).el}catch(e){throw new Error("[Tippy error]: Popper does not exist in any Tippy instances")}}},{key:"show",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.settings.duration;this.callbacks.beforeShown.call(e);var i=a(I.refs,function(t){return t.popper===e}),r=e.querySelector(H.tooltip),o=e.querySelector(H.circle),s=i.el,l=i.settings,u=l.appendTo,c=l.sticky,p=l.interactive,d=l.followCursor,f=l.flipDuration;v([e,r,o],0),!u.contains(e)&&g(i),e.style.visibility="visible",e.setAttribute("aria-hidden","false");var E=function(){b(e,"show")&&(!d&&i.popperInstance.update(),v([r,o],n),!d&&v([e],f),p&&s.classList.add("active"),c&&w(i),m(r,o),h([r,o],function(e){e.remove("leave"),e.add("enter")}),y(i,n,function(){b(e,"show")&&!i.onShownFired&&(p&&e.focus(),r.classList.add("tippy-notransition"),i.onShownFired=!0,t.callbacks.shown.call(e))}))};window.requestAnimationFrame?window.requestAnimationFrame(function(){setTimeout(E,0)}):setTimeout(E,0)}},{key:"hide",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.settings.duration;this.callbacks.beforeHidden.call(e);var r=a(I.refs,function(t){return t.popper===e}),o=e.querySelector(H.tooltip),s=e.querySelector(H.circle),l=(e.querySelector(H.content),r.el),u=r.settings,c=u.appendTo,p=(u.sticky,u.interactive),f=(u.followCursor,u.html),m=u.trigger;r.onShownFired=!1,p&&r.el.classList.remove("active"),o.classList.remove("tippy-notransition"),e.style.visibility="hidden",e.setAttribute("aria-hidden","true"),n===M.hideDuration?n=parseInt(o.style[i("transitionDuration")]):v([o,s],n),h([o,s],function(e){e.remove("enter"),e.add("leave")}),f&&-1!==m.indexOf("click")&&d(l)&&l.focus(),y(r,n,function(){b(e,"hide")&&c.contains(e)&&(r.popperInstance.disableEventListeners(),c.removeChild(e),t.callbacks.hidden.call(e))})}},{key:"destroy",value:function(e){var t=a(I.refs,function(t){return t.popper===e}),n=t.el,i=t.popperInstance;t.listeners.forEach(function(e){return n.removeEventListener(e.event,e.handler)}),n.removeAttribute("data-tooltipped"),n.removeAttribute("aria-describedby"),i&&i.destroy(),I.refs.splice(I.refs.map(function(e){return e.popper}).indexOf(e),1)}},{key:"update",value:function(e){var t=a(I.refs,function(t){return t.popper===e}),n=e.querySelector(H.content),i=t.el,r=t.settings.html;r?n.innerHTML=r instanceof Element?r.innerHTML:document.getElementById(r.replace("#","")).innerHTML:(n.innerHTML=i.title||i.getAttribute("data-original-title"),p(i))}}]),e}()});
