(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"2Zix":function(e,t,a){var r=a("NC/Y");e.exports=/MSIE|Trident/.test(r)},"5C+7":function(e,t,a){e.exports={products:"assortiment-module--products--1VRW8",product:"assortiment-module--product--1Oh1d",caption:"assortiment-module--caption--39cyP"}},Awfr:function(e,t,a){e.exports={hero:"page_default_layout-module--hero--ktcpi",contentWrapper:"page_default_layout-module--contentWrapper--3NvPh",break_out:"page_default_layout-module--break_out--KcorV"}},BNF5:function(e,t,a){var r=a("NC/Y").match(/firefox\/(\d+)/i);e.exports=!!r&&+r[1]},HEuv:function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r),o=a("qby4"),c=a("8k0H"),u=a("Awfr"),i=a.n(u),l=a("vrFN");t.a=function(e){var t=e.data,a=e.children,r=e.breakOut;return void 0!==r&&r?n.a.createElement(n.a.Fragment,null,n.a.createElement(o.a,{customClass:i.a.hero,backgroundImage:t.featured_media||t.image}),n.a.createElement(o.a,null,n.a.createElement("div",{className:[i.a.contentWrapper,i.a.break_out].join(" ")},n.a.createElement("h1",null,t.title),a))):n.a.createElement(c.a,{pageContext:t},n.a.createElement(l.a,{meta:t.yoast_head_json,lang:t.lang_code}),n.a.createElement(o.a,{customClass:i.a.hero,backgroundImage:t.featured_media||t.image}),n.a.createElement(o.a,null,n.a.createElement("div",{className:i.a.contentWrapper},n.a.createElement("h1",null,t.title),a)))}},ToJy:function(e,t,a){"use strict";var r=a("I+eb"),n=a("HAuM"),o=a("ewvW"),c=a("UMSQ"),u=a("0Dky"),i=a("rdv8"),l=a("pkCn"),s=a("BNF5"),d=a("2Zix"),f=a("LQDL"),p=a("USzg"),m=[],v=m.sort,h=u((function(){m.sort(void 0)})),g=u((function(){m.sort(null)})),E=l("sort"),k=!u((function(){if(f)return f<70;if(!(s&&s>3)){if(d)return!0;if(p)return p<603;var e,t,a,r,n="";for(e=65;e<76;e++){switch(t=String.fromCharCode(e),e){case 66:case 69:case 70:case 72:a=3;break;case 68:case 71:a=4;break;default:a=2}for(r=0;r<47;r++)m.push({k:t+r,v:a})}for(m.sort((function(e,t){return t.v-e.v})),r=0;r<m.length;r++)t=m[r].k.charAt(0),n.charAt(n.length-1)!==t&&(n+=t);return"DGBEFHACIJK"!==n}}));r({target:"Array",proto:!0,forced:h||!g||!E||!k},{sort:function(e){void 0!==e&&n(e);var t=o(this);if(k)return void 0===e?v.call(t):v.call(t,e);var a,r,u=[],l=c(t.length);for(r=0;r<l;r++)r in t&&u.push(t[r]);for(a=(u=i(u,function(e){return function(t,a){return void 0===a?-1:void 0===t?1:void 0!==e?+e(t,a)||0:String(t)>String(a)?1:-1}}(e))).length,r=0;r<a;)t[r]=u[r++];for(;r<l;)delete t[r++];return t}})},USzg:function(e,t,a){var r=a("NC/Y").match(/AppleWebKit\/(\d+)\./);e.exports=!!r&&+r[1]},niCR:function(e,t,a){"use strict";a.r(t);a("ToJy");var r=a("q1tI"),n=a.n(r),o=a("9eSz"),c=a.n(o),u=a("Wbzz"),i=a("HEuv"),l=a("5C+7"),s=a.n(l);t.default=function(e){var t=e.pageContext,a=e.data,r=t.acf,o=a.allWordpressWpProducts.edges.sort((function(e,t){return new Date(t.node.date)-new Date(e.node.date)}));return n.a.createElement(i.a,{data:Object.assign({},t,{title:r.products_archive.title})},n.a.createElement("div",{className:s.a.products},o.map((function(e){var t=e.node;return t.acf.product.thumbnail&&n.a.createElement(u.Link,{key:t.slug,to:t.slug,className:s.a.product},n.a.createElement(c.a,{fluid:t.acf.product.thumbnail.localFile.childImageSharp.fluid}),n.a.createElement("div",{className:s.a.caption},t.acf.product.title))}))))}},rdv8:function(e,t){var a=Math.floor,r=function(e,t){var c=e.length,u=a(c/2);return c<8?n(e,t):o(r(e.slice(0,u),t),r(e.slice(u),t),t)},n=function(e,t){for(var a,r,n=e.length,o=1;o<n;){for(r=o,a=e[o];r&&t(e[r-1],a)>0;)e[r]=e[--r];r!==o++&&(e[r]=a)}return e},o=function(e,t,a){for(var r=e.length,n=t.length,o=0,c=0,u=[];o<r||c<n;)o<r&&c<n?u.push(a(e[o],t[c])<=0?e[o++]:t[c++]):u.push(o<r?e[o++]:t[c++]);return u};e.exports=r}}]);
//# sourceMappingURL=component---src-templates-assortiment-jsx-795af58617a82d842605.js.map