import{a as m}from"./vendor-26fe51b3.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function c(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerpolicy&&(r.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?r.credentials="include":o.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(o){if(o.ep)return;o.ep=!0;const r=c(o);fetch(o.href,r)}})();m.defaults.baseURL="https://books-backend.p.goit.global/books";async function u(e){try{const{data:t}=await m.get("/category-list",{params:{list_name:e}});return t}catch(t){console.log(t.message)}}async function h(e){try{const t=await m.get(`/category?category=${e}`);return console.log(e),t.data}catch(t){console.log(t.message)}}const f=document.querySelector(".list-categories"),l=document.querySelector(".wrapper-categories");u().then(e=>{e&&g(e)}).catch(e=>{console.log(e.message)});function g(e){const t=e.map(({list_name:s})=>`
        <li class="categories-item">${s}</li>
    `).join("");f.insertAdjacentHTML("beforeend",t),document.querySelectorAll(".categories-item").forEach(s=>{s.addEventListener("click",p)})}function p(e){const t=e.target.textContent;l.innerHTML="";const c=document.createElement("h1");c.textContent=t,l.appendChild(c),h(t).then(s=>{s&&y(s)}).catch(s=>{console.log(s.message)})}function y(e){const t=e.map(({book_image:c,title:s,author:o})=>`
        <div>
            <ul class="list-wrapper-categories">
                <li>
                    <img src="${c}" alt="">
                    <h2>${s}</h2>
                    <p>${o}</p>
                </li>
            </ul>
        </div>
    `).join("");l.insertAdjacentHTML("beforeend",t)}const d={LIGHT:"light-theme",DARK:"dark-theme"},a=document.querySelector("body"),n=document.querySelector(".js-switch-theme");n.addEventListener("click",k);function k(e){e.currentTarget.checked?(a.classList.add("dark-theme"),localStorage.setItem("saveTheme",d.DARK),n.checked=!0):(a.classList.remove("dark-theme"),localStorage.setItem("saveTheme",d.LIGHT),n.checked=!1)}const L=localStorage.getItem("saveTheme");L===d.LIGHT?(a.classList.remove("dark-theme"),n.checked=!1):(a.classList.add("dark-theme"),n.checked=!0);
//# sourceMappingURL=dark-theme-c7e06e26.js.map
