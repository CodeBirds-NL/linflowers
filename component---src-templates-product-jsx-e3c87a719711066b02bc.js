(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"6Zrx":function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("q1tI");function a(e){var t=Object(r.useState)(!1),n=t[0],a=t[1];function i(t){t.keyCode===e&&a(!0)}var o=function(t){t.keyCode===e&&a(!1)};return Object(r.useEffect)((function(){return document.addEventListener("keydown",i),document.addEventListener("keyup",o),function(){document.removeEventListener("keydown",i),document.removeEventListener("keyup",o)}}),[]),n}},Awfr:function(e,t,n){e.exports={hero:"page_default_layout-module--hero--ktcpi",contentWrapper:"page_default_layout-module--contentWrapper--3NvPh",break_out:"page_default_layout-module--break_out--KcorV"}},HEuv:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),i=n("qby4"),o=n("8k0H"),c=n("Awfr"),u=n.n(c),l=n("vrFN");t.a=function(e){var t=e.data,n=e.children,r=e.breakOut;return void 0!==r&&r?a.a.createElement(a.a.Fragment,null,a.a.createElement(i.a,{customClass:u.a.hero,backgroundImage:t.featured_media||t.image}),a.a.createElement(i.a,null,a.a.createElement("div",{className:[u.a.contentWrapper,u.a.break_out].join(" ")},a.a.createElement("h1",null,t.title),n))):a.a.createElement(o.a,{pageContext:t},a.a.createElement(l.a,{title:t.title}),a.a.createElement(i.a,{customClass:u.a.hero,backgroundImage:t.featured_media||t.image}),a.a.createElement(i.a,null,a.a.createElement("div",{className:u.a.contentWrapper},a.a.createElement("h1",null,t.title),n)))}},TaYw:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),i=n("9eSz"),o=n.n(i),c=n("Wbzz"),u=n("d0u/"),l=n.n(u);t.a=function(e){var t=e.actions,n=e.color,r=void 0===n?"red":n;return a.a.createElement("div",{className:l.a.actions},t.map((function(e){var t=e.title,n=e.url,i=e.image;return a.a.createElement(c.Link,{to:n,key:t,className:[l.a.action,l.a[r]].join(" ")},a.a.createElement("div",{className:[l.a.imageWrapper,l.a.ma].join(" ")},a.a.createElement("div",{className:l.a.circle},a.a.createElement(o.a,{className:l.a.image,fluid:i.localFile.childImageSharp.fluid}))),a.a.createElement("div",{className:l.a.text},t))})))}},"d0u/":function(e,t,n){e.exports={actions:"actions-module--actions--3Xj1L",action:"actions-module--action--1UUmr",white:"actions-module--white--1w9e7",circle:"actions-module--circle--37Rmj",imageWrapper:"actions-module--imageWrapper--1dAYC",ma:"actions-module--ma--2EE73",image:"actions-module--image--28klT",text:"actions-module--text--kl1p0"}},iWaP:function(e,t,n){!function(e,t){"use strict";function n(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,i=void 0;try{for(var o,c=e[Symbol.iterator]();!(r=(o=c.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){a=!0,i=e}finally{try{r||null==c.return||c.return()}finally{if(a)throw i}}return n}}(e,t)||c(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e){return function(e){if(Array.isArray(e))return u(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||c(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){if(e){if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(e,t):void 0}}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function l(e){var t,n,r,i,c,u,l,s,m,v,p,h,g,b,y,w,E,j,O,S,k,M,x,A,N,_,P,C,T,I,L,W,q=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},z="data-keen-slider-moves",D="data-keen-slider-v",H=[],Y=null,F=!1,K=!1,R=0,X=[];function V(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};e.addEventListener(t,n,r),H.push([e,t,n,r])}function J(e){if(j&&O===G(e)&&ce()){var n=Q(e).x;if(!te(e)&&A)return Z(e);A&&(Fe(),S=n,t.setAttribute(z,!0),A=!1),e.cancelable&&e.preventDefault(),Ie(x(S-n,Ue)*(le()?-1:1),e.timeStamp),S=n}}function U(e){j||!ce()||ee(e.target)||(j=!0,A=!0,O=G(e),te(e),me(),E=v,S=Q(e).x,Ie(0,e.timeStamp),ie("dragStart"))}function Z(e){j&&O===G(e,!0)&&ce()&&(t.removeAttribute(z),j=!1,he(),ie("dragEnd"))}function B(e){return e.changedTouches}function G(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=t?B(e):$(e);return n?n[0]?n[0].identifier:"error":"default"}function $(e){return e.targetTouches}function Q(e){var t=$(e);return{x:fe()?t?t[0].screenY:e.pageY:t?t[0].screenX:e.pageX,timestamp:e.timeStamp}}function ee(e){return e.hasAttribute(w.preventEvent)}function te(e){var t=$(e);if(!t)return!0;var n=t[0],r=fe()?n.clientY:n.clientX,a=fe()?n.clientX:n.clientY,i=void 0!==k&&void 0!==M&&Math.abs(M-a)<=Math.abs(k-r);return k=r,M=a,i}function ne(e){ce()&&j&&e.preventDefault()}function re(){V(window,"orientationchange",Ne),V(window,"resize",(function(){return Ae()})),V(t,"dragstart",(function(e){ce()&&e.preventDefault()})),V(t,"mousedown",U),V(w.cancelOnLeave?t:window,"mousemove",J),w.cancelOnLeave&&V(t,"mouseleave",Z),V(window,"mouseup",Z),V(t,"touchstart",U,{passive:!0}),V(t,"touchmove",J,{passive:!1}),V(t,"touchend",Z,{passive:!0}),V(t,"touchcancel",Z,{passive:!0}),V(window,"wheel",ne,{passive:!1})}function ae(){H.forEach((function(e){e[0].removeEventListener(e[1],e[2],e[3])})),H=[]}function ie(e){w[e]&&w[e](Ue)}function oe(){return w.centered}function ce(){return void 0!==n?n:w.controls}function ue(){return w.loop&&r>1}function le(){return w.rtl}function se(){return!w.loop&&w.rubberband}function fe(){return!!w.vertical}function de(){N=window.requestAnimationFrame(ve)}function me(){N&&(window.cancelAnimationFrame(N),N=null),_=null}function ve(e){_||(_=e);var t=e-_,n=pe(t);if(t>=C)return Ie(P-I,!1),W?W():void ie("afterChange");var r=Le(n);if(0===r||ue()||se()||L){if(0!==r&&se()&&!L)return Ee();I+=n,Ie(n,!1),de()}else Ie(n-r,!1)}function pe(e){return P*T(e/C)-I}function he(){switch(ie("beforeChange"),w.mode){case"free":ye();break;case"free-snap":we();break;case"snap":default:ge()}}function ge(){be((1===l&&0!==p?E:v)+Math.sign(p))}function be(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:w.duration,r=arguments.length>3&&void 0!==arguments[3]&&arguments[3],a=arguments.length>4&&void 0!==arguments[4]&&arguments[4],i=function(e){return 1+--e*e*e*e*e};je(De(e=ze(e,r,a)),n,i,t)}function ye(){if(0===g)return!(!Le(0)||ue())&&be(v);var e=w.friction/Math.pow(Math.abs(g),-.5);je(Math.pow(g,2)/e*Math.sign(g),6*Math.abs(g/e),(function(e){return 1-Math.pow(1-e,5)}))}function we(){if(0===g)return be(v);var e=w.friction/Math.pow(Math.abs(g),-.5),t=Math.pow(g,2)/e*Math.sign(g),n=6*Math.abs(g/e),r=(R+t)/(u/l);je((-1===p?Math.floor(r):Math.ceil(r))*(u/l)-R,n,(function(e){return 1-Math.pow(1-e,5)}))}function Ee(){if(me(),0===g)return be(v,!0);var e=.04/Math.pow(Math.abs(g),-.5),t=Math.pow(g,2)/e*Math.sign(g),n=function(e){return--e*e*e+1},r=g;je(t,3*Math.abs(r/e),n,!0,(function(){je(De(ze(v)),500,n,!0)}))}function je(e,t,n,r,a){me(),P=e,I=0,C=t,T=n,L=r,W=a,_=null,de()}function Oe(n){var r=f(e);r.length&&(t=r[0],Ae(n),re(),ie("mounted"))}function Se(){var e,t=q.breakpoints||[];for(var n in t)window.matchMedia(n).matches&&(e=n);if(e===Y)return!0;var r=(Y=e)?t[Y]:q;r.breakpoints&&Y&&delete r.breakpoints,w=a(a(a({},Je),q),r),F=!0,m=null,xe()}function ke(e){return"function"==typeof e?e():d(e,1,Math.max(ue()?r-1:r,1))}function Me(){Se(),K=!0,ie("created")}function xe(e,t){e&&(q=e),t&&(Y=null),_e(),Oe(t)}function Ae(e){var n=window.innerWidth;if(Se()&&(n!==m||e)){m=n;var a=w.slides;"number"==typeof a?(c=null,r=a):(c=f(a,t),r=c?c.length:0);var o=w.dragSpeed;x="function"==typeof o?o:function(e){return e*o},u=fe()?t.offsetHeight:t.offsetWidth,l=ke(w.slidesPerView),s=d(w.spacing,0,u/(l-1)-1),u+=s,i=oe()?(u/2-u/l/2)/u:0,Ce();var p=!K||F&&w.resetSlide?w.initial:v;Ve(ue()?p:We(p)),fe()&&t.setAttribute(D,!0),F=!1}}function Ne(e){Ae(),setTimeout(Ae,500),setTimeout(Ae,2e3)}function _e(){ae(),Te(),t&&t.hasAttribute(D)&&t.removeAttribute(D),ie("destroyed")}function Pe(){c&&c.forEach((function(e,t){var n=b[t].distance*u-t*(u/l-s/l-s/l*(l-1)),r=fe()?0:n,a=fe()?n:0,i="translate3d(".concat(r,"px, ").concat(a,"px, 0)");e.style.transform=i,e.style["-webkit-transform"]=i}))}function Ce(){c&&c.forEach((function(e){var t="calc(".concat(100/l,"% - ").concat(s/l*(l-1),"px)");fe()?(e.style["min-height"]=t,e.style["max-height"]=t):(e.style["min-width"]=t,e.style["max-width"]=t)}))}function Te(){if(c){var e=["transform","-webkit-transform"];e=[].concat(o(e),fe?["min-height","max-height"]:["min-width","max-width"]),c.forEach((function(t){e.forEach((function(e){t.style.removeProperty(e)}))}))}}function Ie(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Date.now();Ye(e,n),t&&(e=Re(e)),R+=e,Ke()}function Le(e){var t=u*(r-1*(oe()?1:l))/l,n=R+e;return n>t?n-t:n<0?n:0}function We(e){return d(e,0,r-1-(oe()?0:l-1))}function qe(){var e=Math.abs(y),t=R<0?1-e:e;return{direction:p,progressTrack:t,progressSlides:t*r/(r-1),positions:b,position:R,speed:g,relativeSlide:(v%r+r)%r,absoluteSlide:v,size:r,slidesPerView:l,widthOrHeight:u}}function ze(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return ue()?t?He(e,n):e:We(e)}function De(e){return-(-u/l*e+R)}function He(e,t){var n=(v%r+r)%r,a=n<(e=(e%r+r)%r)?-n-r+e:-(n-e),i=n>e?r-n+e:e-n,o=t?Math.abs(a)<=i?a:i:e<n?a:i;return v+o}function Ye(e,t){clearTimeout(h);var n=Math.sign(e);if(n!==p&&Fe(),p=n,X.push({distance:e,time:t}),h=setTimeout((function(){X=[],g=0}),50),(X=X.slice(-6)).length<=1||0===p)return g=0;var r=X.slice(0,-1).reduce((function(e,t){return e+t.distance}),0),a=X[X.length-1].time,i=X[0].time;g=d(r/(a-i),-10,10)}function Fe(){X=[]}function Ke(){y=ue()?R%(u*r/l)/(u*r/l):R/(u*r/l),Xe();for(var e=[],t=0;t<r;t++){var n=(1/r*t-(y<0&&ue()?y+1:y))*r/l+i;ue()&&(n+=n>(r-1)/l?-r/l:n<-r/l+1?r/l:0);var a=1/l,o=n+a,c=o<a?o/a:o>1?1-(o-1)*l/1:1;e.push({portion:c<0||c>1?0:c,distance:le()?-1*n+1-a:n})}b=e,Pe(),ie("move")}function Re(e){if(ue())return e;var t,n=Le(e);return se()?0===n?e:e*(t=n/u,(1-Math.abs(t))*(1-Math.abs(t))):e-n}function Xe(){var e=Math.round(R/(u/l));e!==v&&(!ue()&&(e<0||e>r-1)||(v=e,ie("slideChanged")))}function Ve(e){ie("beforeChange"),Ie(De(e),!1),ie("afterChange")}var Je={centered:!1,breakpoints:null,controls:!0,dragSpeed:1,friction:.0025,loop:!1,initial:0,duration:500,preventEvent:"data-keen-slider-pe",slides:".keen-slider__slide",vertical:!1,resetSlide:!1,slidesPerView:1,spacing:0,mode:"snap",rtl:!1,rubberband:!0,cancelOnLeave:!0},Ue={controls:function(e){n=e},destroy:_e,refresh:function(e){xe(e,!0)},next:function(){be(v+1,!0)},prev:function(){be(v-1,!0)},moveToSlide:function(e,t){be(e,!0,t)},moveToSlideRelative:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2?arguments[2]:void 0;be(e,!0,n,!0,t)},resize:function(){Ae(!0)},details:function(){return qe()},options:function(){var e=a({},w);return delete e.breakpoints,e}};return Me(),Ue}function s(e){return Array.prototype.slice.call(e)}function f(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document;return"function"==typeof e?s(e()):"string"==typeof e?s(t.querySelectorAll(e)):e instanceof HTMLElement!=0?[e]:e instanceof NodeList!=0?e:[]}function d(e,t,n){return Math.min(Math.max(e,t),n)}Math.sign||(Math.sign=function(e){return(e>0)-(e<0)||+e});var m=function e(t,n){var r=Object.prototype.toString.call(t);if(r!==Object.prototype.toString.call(n))return!1;if(["[object Array]","[object Object]"].indexOf(r)<0)return!1;var a="[object Array]"===r?t.length:Object.keys(t).length;if(a!==("[object Array]"===r?n.length:Object.keys(n).length))return!1;var i=function(t,n){var r=Object.prototype.toString.call(t);if(["[object Array]","[object Object]"].indexOf(r)>=0){if(!e(t,n))return!1}else{if(r!==Object.prototype.toString.call(n))return!1;if("[object Function]"===r){if(t.toString()!==n.toString())return!1}else if(t!==n)return!1}};if("[object Array]"===r){for(var o=0;o<a;o++)if(!1===i(t[o],n[o]))return!1}else for(var c in t)if(t.hasOwnProperty(c)&&!1===i(t[c],n[c]))return!1;return!0};e.default=l,e.useKeenSlider=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.useRef(),r=t.useRef();function a(e){return m(r.current,e)||(r.current=e),r.current}var o=t.useState(null),c=i(o,2),u=c[0],s=c[1];return t.useEffect((function(){var e=new l(n.current,r.current);return s(e),function(){e.destroy()}}),[a(e)]),[n,u]},Object.defineProperty(e,"__esModule",{value:!0})}(t,n("q1tI"))},sKKC:function(e,t,n){},zIa3:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),i=n("iWaP"),o=n("9eSz"),c=n.n(o),u=n("HEuv"),l=n("qby4"),s=n("8k0H"),f=n("TaYw"),d=n("6Zrx"),m=n("zqoS"),v=n.n(m),p=(n("sKKC"),n("hwdJ")),h=n.n(p),g=function(){return a.a.createElement("div",{className:h.a.spacer})};t.default=function(e){var t=e.pageContext,n=e.data,o=Object(r.useState)(0),m=o[0],p=o[1],h=Object(i.useKeenSlider)({initial:0,loop:!0,slideChanged:function(e){p(e.details().relativeSlide)}}),b=h[0],y=h[1],w=Object(d.a)(39),E=Object(d.a)(37);Object(r.useEffect)((function(){y&&E&&y.prev()}),[E]),Object(r.useEffect)((function(){y&&w&&y.next()}),[w]);var j=n.wordpressWpProducts.acf.product,O=j.title,S=j.name,k=j.image,M=j.content,x=j.gallery,A=n.wordpressPage.acf.products_archive.actions,N=n.wordpressPage.polylang_translations;return t.parentSlugTranslations=N,a.a.createElement(s.a,{pageContext:t},a.a.createElement(u.a,{breakOut:!0,data:Object.assign({},t,{title:O,image:k})},a.a.createElement("div",{className:v.a.grid},a.a.createElement("div",{className:v.a.gallery},a.a.createElement("div",{className:v.a.slider,ref:b},x.map((function(e,t){return a.a.createElement("div",{key:t,className:"keen-slider__slide number-slide"+t},a.a.createElement(c.a,{className:v.a.image,fluid:e.localFile.childImageSharp.fluid}))}))),a.a.createElement("div",{className:v.a.track},x.map((function(e,t){return a.a.createElement("div",{key:"track"+t,onClick:function(){y.moveToSlideRelative(t)},className:[v.a.container,m===t&&v.a.active].join(" ")},a.a.createElement(c.a,{className:v.a.image,fluid:e.localFile.childImageSharp.fluid}))})))),a.a.createElement("div",{className:v.a.content},a.a.createElement("div",{className:v.a.name},S),a.a.createElement("div",{className:v.a.html,dangerouslySetInnerHTML:{__html:M}})))),a.a.createElement(l.a,{backgroundColor:"antra"},a.a.createElement("div",{className:v.a.actions_section},a.a.createElement(f.a,{color:"white",actions:A}))),a.a.createElement(g,null))}},zqoS:function(e,t,n){e.exports={grid:"product-module--grid--3nGnN",gallery:"product-module--gallery--3XEGW",slider:"product-module--slider--3SIiv",image:"product-module--image--NjpYN",track:"product-module--track--3qjTv",container:"product-module--container--3nBZO",active:"product-module--active--153x6",content:"product-module--content--Bo5DS",name:"product-module--name--RMYnH",actions_section:"product-module--actions_section--1o-Mc"}}}]);
//# sourceMappingURL=component---src-templates-product-jsx-e3c87a719711066b02bc.js.map