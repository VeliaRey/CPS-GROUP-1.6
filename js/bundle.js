!function(e){var t={};function n(o){if(t[o])return t[o].exports;var c=t[o]={i:o,l:!1,exports:{}};return e[o].call(c.exports,c,c.exports,n),c.l=!0,c.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)n.d(o,c,function(t){return e[t]}.bind(null,c));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";n.r(t);n(2);new Swiper(".swiper",{slidesPerView:"auto",spaceBetween:16,pagination:{el:".swiper-pagination"},breakpoints:{320:{enable:!0},768:{enabled:!1}}});var o=document.querySelector(".brands--show-all"),c=document.querySelector(".slider__wrapper"),r=!1;o.addEventListener("click",(function(){o.classList.toggle("button--show-all--opened"),c.classList.toggle("change--height"),r?(o.textContent="Показать все",r=!1):(o.textContent="Скрыть",r=!0)}));var i=document.querySelector(".technique--show-all"),a=document.querySelector(".technique > .slider > .slider__wrapper"),l=!1;i.addEventListener("click",(function(){i.classList.toggle("button--show-all--opened"),a.classList.toggle("change--height"),l?(i.textContent="Показать все",l=!1):(i.textContent="Скрыть",l=!0)}));var s=document.querySelector(".text__buttons"),d=document.querySelector(".text__content"),u=!1;s.addEventListener("click",(function(){console.log("i love you"),s.classList.toggle("button--show-all--opened"),d.classList.toggle("change--height"),u?(s.textContent="Показать все",u=!1):(s.textContent="Скрыть",u=!0)}));var p=document.querySelector(".header__burger"),f=document.querySelector(".burger"),y=document.querySelector(".page"),v=document.querySelector(".burger-header__buttons > .round-button__close"),L=document.querySelector(".round-button__chat"),g=document.querySelector(".modal-chat"),m=document.querySelector(".modal-chat__button > .round-button__close"),_=document.querySelector(".header__chat"),b=document.querySelector(".round-button__chatcopy"),h=document.querySelector(".modal-call"),S=document.querySelector(".modal-call__button > .round-button__close"),q=document.querySelector(".header__call"),k=document.querySelector(".overlay"),w=!1;p.addEventListener("click",(function(e){e.stopPropagation(),f.classList.add("opened"),y.classList.add("opacity"),w=!0})),v.addEventListener("click",(function(){f.classList.remove("opened"),y.classList.remove("opacity")})),y.addEventListener("click",(function(){w&&(v.click(),w=!1)}));var x=!1;L.addEventListener("click",(function(){g.classList.add("opened"),k.classList.add("opacity"),v.click(),x=!0})),m.addEventListener("click",(function(e){e.stopPropagation(),g.classList.remove("opened"),k.classList.remove("opacity"),x=!1})),y.addEventListener("click",(function(){x&&(m.click(),x=!1)})),_.addEventListener("click",(function(e){e.stopPropagation(),g.classList.add("opened"),k.classList.add("opacity"),x=!0}));var E=!1;b.addEventListener("click",(function(e){e.stopPropagation(),h.classList.add("opened"),k.classList.add("opacity"),f.classList.remove("opened"),v.click(),E=!0})),S.addEventListener("click",(function(){h.classList.remove("opened"),k.classList.remove("opacity"),x=!1})),y.addEventListener("click",(function(){E&&(S.click(),E=!1)})),q.addEventListener("click",(function(e){e.stopPropagation(),h.classList.add("opened"),k.classList.add("opacity"),E=!0}))},function(e,t,n){}]);
//# sourceMappingURL=bundle.js.map