/* empty css                      */import{A as s,S as l}from"./assets/vendor-9bf2616b.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();document.addEventListener("DOMContentLoaded",function(){const n=document.querySelector("#burger-toggle"),o=document.querySelector(".nav-toggle");document.querySelector(".nav-list"),o.addEventListener("click",()=>{n.checked=!n.checked}),document.querySelectorAll(".nav-link").forEach(i=>{i.addEventListener("click",function(e){e.preventDefault();const t=this.getAttribute("href").substring(1),r=document.getElementById(t);r&&r.scrollIntoView({behavior:"smooth"}),n.checked&&(n.checked=!1)})})});document.addEventListener("DOMContentLoaded",()=>{new s(".accordion-container",{duration:300,showMultiple:!1,openOnInit:[0]})});new l(".swiper",{navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev",enabled:!0},pagination:{el:".swiper-pagination",clickable:!0},spaceBetween:20,breakpoints:{320:{slidesPerView:1},1200:{slidesPerView:3}}});
//# sourceMappingURL=commonHelpers.js.map
