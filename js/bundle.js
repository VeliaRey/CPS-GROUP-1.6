!function(e){var t={};function n(o){if(t[o])return t[o].exports;var c=t[o]={i:o,l:!1,exports:{}};return e[o].call(c.exports,c,c.exports,n),c.l=!0,c.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)n.d(o,c,function(t){return e[t]}.bind(null,c));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";n.r(t);n(2);new Swiper(".swiper",{slidesPerView:"auto",spaceBetween:16,pagination:{el:".swiper-pagination"},breakpoints:{320:{enable:!0},768:{enabled:!1}}});var o=document.querySelector(".brands--show-all"),c=document.querySelector(".slider__wrapper"),r=!1;o.addEventListener("click",(function(){o.classList.toggle("button--show-all--opened"),c.classList.toggle("change--height"),r?(o.textContent="Показать все",r=!1):(o.textContent="Скрыть",r=!0)}));var a=document.querySelector(".technique--show-all"),i=document.querySelector(".technique > .slider > .slider__wrapper"),s=!1;a.addEventListener("click",(function(){a.classList.toggle("button--show-all--opened"),i.classList.toggle("change--height"),s?(a.textContent="Показать все",s=!1):(a.textContent="Скрыть",s=!0)}));var l=document.querySelector(".text__buttons"),d=document.querySelector(".text__content"),u=!1;l.addEventListener("click",(function(){console.log("i love you"),l.classList.toggle("button--show-all--opened"),d.classList.toggle("change--height"),u?(l.textContent="Показать все",u=!1):(l.textContent="Скрыть",u=!0)}));var p=document.querySelector(".header__burger"),_=document.querySelector(".burger"),g=document.querySelector(".page"),y=document.querySelector(".round-button__close"),f=document.querySelector(".round-button__chat"),L=document.querySelector(".modal-chat"),v=document.querySelector(".modal-chat__button > .round-button__close"),m=document.querySelector(".header__chat"),b=document.querySelector(".round-button__chatcopy"),h=document.querySelector(".modal-call"),S=document.querySelector(".modal-call__button > .round-button__close"),q=document.querySelector(".header__call"),k=!1;p.addEventListener("click",(function(e){e.stopPropagation(),_.classList.add("opened"),g.classList.add("page__opacity"),k=!0})),y.addEventListener("click",(function(){_.classList.remove("opened"),g.classList.remove("page__opacity")})),g.addEventListener("click",(function(){k&&(y.click(),k=!1)}));var w=!1;f.addEventListener("click",(function(){L.classList.add("opened"),g.classList.add("page__opacity"),_.classList.remove("opened"),_.classList.add("page__opacity"),w=!0})),v.addEventListener("click",(function(){L.classList.remove("opened"),g.classList.remove("page__opacity"),_.classList.remove("page__opacity")})),g.addEventListener("click",(function(){w&&(v.click(),w=!1)})),m.addEventListener("click",(function(e){e.stopPropagation(),L.classList.add("opened"),g.classList.add("page__opacity"),w=!0}));var x=!1;b.addEventListener("click",(function(){h.classList.add("opened"),g.classList.add("page__opacity"),_.classList.remove("opened"),_.classList.add("page__opacity"),x=!0})),S.addEventListener("click",(function(){h.classList.remove("opened"),g.classList.remove("page__opacity"),_.classList.remove("page__opacity")})),g.addEventListener("click",(function(){x&&(S.click(),x=!1)})),q.addEventListener("click",(function(e){e.stopPropagation(),h.classList.add("opened"),g.classList.add("page__opacity"),x=!0}))},function(e,t,n){}]);
//# sourceMappingURL=bundle.js.map