(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"4PZy":function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r),i=n("b+Tz"),a=n.n(i);t.a=function(e){var t=e.color,n=void 0===t?"#F9F4F0":t,r=e.direction,i=void 0===r?"left":r,c=e.clickHandler,u=e.src,l=void 0===u?"":u;return"left"===i?o.a.createElement("div",{className:[a.a.arrow,l&&a.a.contact].join(" ")},o.a.createElement("svg",{width:"21",height:"36",viewBox:"0 0 21 36",fill:"none",xmlns:"http://www.w3.org/2000/svg",onClick:c},o.a.createElement("rect",{width:"21",height:"36",fill:"transparent"}),o.a.createElement("line",{y1:"-2",x2:"25",y2:"-2",transform:"matrix(-0.707107 -0.707107 -0.707107 0.707107 17.6777 35.3553)",stroke:n,strokeWidth:"4px"}),o.a.createElement("line",{y1:"-2",x2:"25",y2:"-2",transform:"matrix(0.707107 -0.707107 -0.707107 -0.707107 0 17.6777)",stroke:n,strokeWidth:"4px"}))):o.a.createElement("div",{className:[a.a.arrow,a.a.right,l&&a.a.contact].join(" ")},o.a.createElement("svg",{width:"21",height:"36",viewBox:"0 0 21 36",fill:"none",xmlns:"http://www.w3.org/2000/svg",onClick:c},o.a.createElement("rect",{width:"21",height:"36",fill:"transparent"}),o.a.createElement("line",{x1:"1.58579",y1:"33.9411",x2:"19.2635",y2:"16.2635",stroke:n,strokeWidth:"4"}),o.a.createElement("line",{x1:"19.2635",y1:"19.0919",x2:"1.58579",y2:"1.41422",stroke:n,strokeWidth:"4"})))}},"6Zrx":function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("q1tI");function o(e){var t=Object(r.useState)(!1),n=t[0],o=t[1];function i(t){t.keyCode===e&&o(!0)}var a=function(t){t.keyCode===e&&o(!1)};return Object(r.useEffect)((function(){return document.addEventListener("keydown",i),document.addEventListener("keyup",a),function(){document.removeEventListener("keydown",i),document.removeEventListener("keyup",a)}}),[]),n}},BwTZ:function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r),i=(n("Wbzz"),n("9eSz")),a=n.n(i),c=n("eSSE"),u=n.n(c);t.a=function(e){var t=e.persons,n=e.customClass,r=void 0===n?"":n,i=e.label,c=void 0===i||i,l=e.showNumber,s=void 0!==l&&l,f=e.role,d=void 0!==f&&f;return o.a.createElement("div",{className:[u.a.persons,u.a[r]].join(" ")},t.map((function(e){var t=e.title,n=e.url,r=e.image,i=e.function;return o.a.createElement("a",{href:"tel:"+n,key:r.id,className:u.a.box},o.a.createElement("div",{className:u.a.imageWrapper},r&&o.a.createElement(a.a,{fixed:r.localFile.childImageSharp.fixed})),c&&o.a.createElement("button",{className:u.a.contact_button},t),s&&o.a.createElement("div",null,o.a.createElement("div",null,t),d&&o.a.createElement("em",null,i),o.a.createElement("div",{className:u.a.url},n)))})))}},"b+Tz":function(e,t,n){e.exports={row:"slider-module--row--Zgzao",white:"slider-module--white--21Z2J",antra:"slider-module--antra--rzAUI",red:"slider-module--red--2n0ft",wrapper:"slider-module--wrapper--2Q199",container:"slider-module--container--2BtDj",grid_2:"slider-module--grid_2--3sTl9",grid_2_gap:"slider-module--grid_2_gap--3eK95",grid_3:"slider-module--grid_3--2MXjR",centered:"slider-module--centered--3nL7T",overlay:"slider-module--overlay--2pqPZ",btn:"slider-module--btn--20VzS",spacer:"slider-module--spacer--1lXZm",arrow:"slider-module--arrow--epMWF",right:"slider-module--right--24a-Z"}},eSSE:function(e,t,n){e.exports={persons:"persons-module--persons--wXb2I",home:"persons-module--home--2PCBj",box:"persons-module--box--MU-EK",imageWrapper:"persons-module--imageWrapper--1cUkd",contact_button:"persons-module--contact_button--3DFNU",contact:"persons-module--contact--ZyJPN"}},iWaP:function(e,t,n){n("E9XD"),function(e,t){"use strict";function n(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}}(e,t)||c(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e){return function(e){if(Array.isArray(e))return u(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||c(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){if(e){if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(e,t):void 0}}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function l(e){var t,n,r,i,c,u,l,s,v,m,h,p,b,g,y,w,E,j,S,M,x,k,O,A,P,T,_,C,I,W,z,D,N=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},F="data-keen-slider-moves",L="data-keen-slider-v",Z=[],X=null,q=!1,B=!1,K=0,U=[];function H(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};e.addEventListener(t,n,r),Z.push([e,t,n,r])}function J(e){if(j&&S===Q(e)&&ce()){var n=G(e).x;if(!te(e)&&A)return V(e);A&&(qe(),M=n,t.setAttribute(F,!0),A=!1),e.cancelable&&e.preventDefault(),We(O(M-n,Re)*(le()?-1:1),e.timeStamp),M=n}}function R(e){j||!ce()||ee(e.target)||(j=!0,A=!0,S=Q(e),te(e),ve(),E=m,M=G(e).x,We(0,e.timeStamp),ie("dragStart"))}function V(e){j&&S===Q(e,!0)&&ce()&&(t.removeAttribute(F),j=!1,pe(),ie("dragEnd"))}function Y(e){return e.changedTouches}function Q(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=t?Y(e):$(e);return n?n[0]?n[0].identifier:"error":"default"}function $(e){return e.targetTouches}function G(e){var t=$(e);return{x:fe()?t?t[0].screenY:e.pageY:t?t[0].screenX:e.pageX,timestamp:e.timeStamp}}function ee(e){return e.hasAttribute(w.preventEvent)}function te(e){var t=$(e);if(!t)return!0;var n=t[0],r=fe()?n.clientY:n.clientX,o=fe()?n.clientX:n.clientY,i=void 0!==x&&void 0!==k&&Math.abs(k-o)<=Math.abs(x-r);return x=r,k=o,i}function ne(e){ce()&&j&&e.preventDefault()}function re(){H(window,"orientationchange",Pe),H(window,"resize",(function(){return Ae()})),H(t,"dragstart",(function(e){ce()&&e.preventDefault()})),H(t,"mousedown",R),H(t,"mousemove",J),H(t,"mouseleave",V),H(t,"mouseup",V),H(t,"touchstart",R,{passive:!0}),H(t,"touchmove",J,{passive:!1}),H(t,"touchend",V,{passive:!0}),H(t,"touchcancel",V,{passive:!0}),H(window,"wheel",ne,{passive:!1})}function oe(){Z.forEach((function(e){e[0].removeEventListener(e[1],e[2],e[3])})),Z=[]}function ie(e){w[e]&&w[e](Re)}function ae(){return w.centered}function ce(){return void 0!==n?n:w.controls}function ue(){return w.loop}function le(){return w.rtl}function se(){return!w.loop&&w.rubberband}function fe(){return!!w.vertical}function de(){P=window.requestAnimationFrame(me)}function ve(){P&&(window.cancelAnimationFrame(P),P=null),T=null}function me(e){T||(T=e);var t=e-T,n=he(t);if(t>=C)return We(_-W,!1),D?D():void ie("afterChange");var r=ze(n);if(0===r||ue()||se()||z){if(0!==r&&se()&&!z)return Ee();W+=n,We(n,!1),de()}else We(n-r,!1)}function he(e){return _*I(e/C)-W}function pe(){switch(ie("beforeChange"),w.mode){case"free":ye();break;case"free-snap":we();break;case"snap":default:be()}}function be(){ge((1===l&&0!==h?E:m)+Math.sign(h))}function ge(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:w.duration,r=arguments.length>3&&void 0!==arguments[3]&&arguments[3],o=arguments.length>4&&void 0!==arguments[4]&&arguments[4],i=function(e){return 1+--e*e*e*e*e};je(Le(e=Fe(e,r,o)),n,i,t)}function ye(){if(0===b)return!(!ze(0)||ue())&&ge(m);var e=w.friction/Math.pow(Math.abs(b),-.5);je(Math.pow(b,2)/e*Math.sign(b),6*Math.abs(b/e),(function(e){return 1-Math.pow(1-e,5)}))}function we(){if(0===b)return ge(m);var e=w.friction/Math.pow(Math.abs(b),-.5),t=Math.pow(b,2)/e*Math.sign(b),n=6*Math.abs(b/e),r=(K+t)/(u/l);je((-1===h?Math.floor(r):Math.ceil(r))*(u/l)-K,n,(function(e){return 1-Math.pow(1-e,5)}))}function Ee(){if(ve(),0===b)return ge(m,!0);var e=.04/Math.pow(Math.abs(b),-.5),t=Math.pow(b,2)/e*Math.sign(b),n=function(e){return--e*e*e+1},r=b;je(t,3*Math.abs(r/e),n,!0,(function(){je(Le(Fe(m)),500,n,!0)}))}function je(e,t,n,r,o){ve(),_=e,W=0,C=t,I=n,z=r,D=o,T=null,de()}function Se(n){var r=f(e);r.length&&(t=r[0],Ae(n),re(),ie("mounted"))}function Me(){var e,t=N.breakpoints||[];for(var n in t)window.matchMedia(n).matches&&(e=n);if(e===X)return!0;var r=(X=e)?t[X]:N;r.breakpoints&&X&&delete r.breakpoints,w=o(o(o({},Je),N),r),q=!0,v=null,Oe()}function xe(e){return"function"==typeof e?e():d(e,1,Math.max(ue()?r-1:r,1))}function ke(){Me(),B=!0,ie("created")}function Oe(e,t){e&&(N=e),t&&(X=null),Te(),Se(t)}function Ae(e){var n=window.innerWidth;if(Me()&&(n!==v||e)){v=n;var o=w.slides;"number"==typeof o?(c=null,r=o):(c=f(o,t),r=c?c.length:0);var a=w.dragSpeed;O="function"==typeof a?a:function(e){return e*a},u=fe()?t.offsetHeight:t.offsetWidth,l=xe(w.slidesPerView),s=d(w.spacing,0,u/(l-1)-1),u+=s,i=ae()?(u/2-u/l/2)/u:0,Ce();var h=!B||q&&w.resetSlide?w.initial:m;He(ue()?h:De(h)),fe()&&t.setAttribute(L,!0),q=!1}}function Pe(e){Ae(),setTimeout(Ae,500),setTimeout(Ae,2e3)}function Te(){oe(),Ie(),t&&t.hasAttribute(L)&&t.removeAttribute(L),ie("destroyed")}function _e(){c&&c.forEach((function(e,t){var n=g[t].distance*u-t*(u/l-s/l-s/l*(l-1)),r=fe()?0:n,o=fe()?n:0,i="translate3d(".concat(r,"px, ").concat(o,"px, 0)");e.style.transform=i,e.style["-webkit-transform"]=i}))}function Ce(){c&&c.forEach((function(e){var t="calc(".concat(100/l,"% - ").concat(s/l*(l-1),"px)");fe()?(e.style["min-height"]=t,e.style["max-height"]=t):(e.style["min-width"]=t,e.style["max-width"]=t)}))}function Ie(){if(c){var e=["transform","-webkit-transform"];e=[].concat(a(e),fe?["min-height","max-height"]:["min-width","max-width"]),c.forEach((function(t){e.forEach((function(e){t.style.removeProperty(e)}))}))}}function We(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Date.now();Xe(e,n),t&&(e=Ke(e)),K+=e,Be()}function ze(e){var t=u*(r-1*(ae()?1:l))/l,n=K+e;return n>t?n-t:n<0?n:0}function De(e){return d(e,0,r-1-(ae()?0:l-1))}function Ne(){var e=Math.abs(y),t=K<0?1-e:e;return{direction:h,progressTrack:t,progressSlides:t*r/(r-1),positions:g,position:K,speed:b,relativeSlide:(m%r+r)%r,absoluteSlide:m,size:r,slidesPerView:l,widthOrHeight:u}}function Fe(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return ue()?t?Ze(e,n):e:De(e)}function Le(e){return-(-u/l*e+K)}function Ze(e,t){var n=(m%r+r)%r,o=n<(e=(e%r+r)%r)?-n-r+e:-(n-e),i=n>e?r-n+e:e-n,a=t?Math.abs(o)<=i?o:i:e<n?o:i;return m+a}function Xe(e,t){clearTimeout(p);var n=Math.sign(e);if(n!==h&&qe(),h=n,U.push({distance:e,time:t}),p=setTimeout((function(){U=[],b=0}),50),(U=U.slice(-6)).length<=1||0===h)return b=0;var r=U.slice(0,-1).reduce((function(e,t){return e+t.distance}),0),o=U[U.length-1].time,i=U[0].time;b=d(r/(o-i),-10,10)}function qe(){U=[]}function Be(){y=ue()?K%(u*r/l)/(u*r/l):K/(u*r/l),Ue();for(var e=[],t=0;t<r;t++){var n=(1/r*t-(y<0&&ue()?y+1:y))*r/l+i;ue()&&(n+=n>(r-1)/l?-r/l:n<-r/l+1?r/l:0);var o=1/l,a=n+o,c=a<o?a/o:a>1?1-(a-1)*l/1:1;e.push({portion:c<0||c>1?0:c,distance:le()?-1*n+1-o:n})}g=e,_e(),ie("move")}function Ke(e){if(ue())return e;var t,n=ze(e);return se()?0===n?e:e*(t=n/u,(1-Math.abs(t))*(1-Math.abs(t))):e-n}function Ue(){var e=Math.round(K/(u/l));e!==m&&(!ue()&&(e<0||e>r-1)||(m=e,ie("slideChanged")))}function He(e){ie("beforeChange"),We(Le(e),!1),ie("afterChange")}var Je={centered:!1,breakpoints:null,controls:!0,dragSpeed:1,friction:.0025,loop:!1,initial:0,duration:500,preventEvent:"data-keen-slider-pe",slides:".keen-slider__slide",vertical:!1,resetSlide:!1,slidesPerView:1,spacing:0,mode:"snap",rtl:!1,rubberband:!0},Re={controls:function(e){n=e},destroy:Te,refresh:function(e){Oe(e,!0)},next:function(){ge(m+1,!0)},prev:function(){ge(m-1,!0)},moveToSlide:function(e,t){ge(e,!0,t)},moveToSlideRelative:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2?arguments[2]:void 0;ge(e,!0,n,!0,t)},resize:function(){Ae(!0)},details:function(){return Ne()}};return ke(),Re}function s(e){return Array.prototype.slice.call(e)}function f(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document;return"function"==typeof e?s(e()):"string"==typeof e?s(t.querySelectorAll(e)):e instanceof HTMLElement!=0?[e]:e instanceof NodeList!=0?e:[]}function d(e,t,n){return Math.min(Math.max(e,t),n)}Math.sign||(Math.sign=function(e){return(e>0)-(e<0)||+e});var v=function e(t,n){var r=Object.prototype.toString.call(t);if(r!==Object.prototype.toString.call(n))return!1;if(["[object Array]","[object Object]"].indexOf(r)<0)return!1;var o="[object Array]"===r?t.length:Object.keys(t).length;if(o!==("[object Array]"===r?n.length:Object.keys(n).length))return!1;var i=function(t,n){var r=Object.prototype.toString.call(t);if(["[object Array]","[object Object]"].indexOf(r)>=0){if(!e(t,n))return!1}else{if(r!==Object.prototype.toString.call(n))return!1;if("[object Function]"===r){if(t.toString()!==n.toString())return!1}else if(t!==n)return!1}};if("[object Array]"===r){for(var a=0;a<o;a++)if(!1===i(t[a],n[a]))return!1}else for(var c in t)if(t.hasOwnProperty(c)&&!1===i(t[c],n[c]))return!1;return!0};e.default=l,e.useKeenSlider=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.useRef(),r=t.useRef();function o(e){return v(r.current,e)||(r.current=e),r.current}var a=t.useState(null),c=i(a,2),u=c[0],s=c[1];return t.useEffect((function(){var e=new l(n.current,r.current);return s(e),function(){e.destroy()}}),[o(e)]),[n,u]},Object.defineProperty(e,"__esModule",{value:!0})}(t,n("q1tI"))},sKKC:function(e,t,n){}}]);
//# sourceMappingURL=3f4ee8b8b91b82e012c508bb4e7a8d622a639784-4395eacff2ba4189a90a.js.map