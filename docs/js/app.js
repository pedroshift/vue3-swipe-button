(function(e){function t(t){for(var r,u,s=t[0],a=t[1],c=t[2],p=0,f=[];p<s.length;p++)u=s[p],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&f.push(o[u][0]),o[u]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);l&&l(t);while(f.length)f.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,s=1;s<n.length;s++){var a=n[s];0!==o[a]&&(r=!1)}r&&(i.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={app:0},i=[];function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],a=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var l=a;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);var r=n("7a23");const o=Object(r["c"])("span",null,">>>",-1);function i(e,t,n,i,u,s){return Object(r["e"])(),Object(r["b"])("div",{id:"swipe-button",class:"button swipe-button",style:{backgroundColor:n.color}},[Object(r["c"])("span",null,Object(r["f"])(n.text),1),Object(r["c"])("div",{id:"swiper",class:{shake:n.shakeAnimation}},[o],2)],4)}var u={name:"swipeButton",props:{text:{required:!1,type:String,default:"Swipe me :)"},color:{required:!1,type:String,default:"#0271C2"},shakeAnimation:{required:!1,type:Boolean,default:!1}},emits:["submit"],setup(e,t){function n(e,n,r){e?(r.style.transition="all 0.08s ease-in",r.style.marginLeft="0",setTimeout(()=>t.emit("submit"),80)):(r.style.transition="all 0.08s ease-in",r.style.marginLeft=n+"px"),setTimeout(()=>r.style.transition="all 0s ease-in",80)}Object(r["d"])(()=>{const e=document.getElementById("swipe-button"),t=e.clientWidth,r=document.getElementById("swiper"),o=-1*t+55;r.style.width=t+"px",r.style.marginLeft=o+"px";let i=!1;function u(){document.addEventListener("touchmove",a)}function s(){n(i,o,r),document.removeEventListener("touchmove",a)}function a(e){let n=e.changedTouches[0].pageX-55,u=t-55;if(i=!1,n>u)return i=!0,!1;r.style.marginLeft=o+n+"px"}r.addEventListener("touchstart",u,!1),r.addEventListener("touchend",s,!1)})}};n("c9a8");u.render=i;var s=u;Object(r["a"])(s).mount("#app")},"9f48":function(e,t,n){},c9a8:function(e,t,n){"use strict";n("9f48")}});
//# sourceMappingURL=app.js.map