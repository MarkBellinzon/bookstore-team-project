import{a as i,N as m}from"./vendor-77e6b4aa.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const l of c.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function r(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerpolicy&&(c.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?c.credentials="include":o.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(o){if(o.ep)return;o.ep=!0;const c=r(o);fetch(o.href,c)}})();i.defaults.baseURL="https://books-backend.p.goit.global/books";async function g(e){try{const{data:t}=await i.get("/category-list",{params:{list_name:e}});return t}catch(t){console.log(t.message)}}async function h(e){try{const t=await i.get(`/category?category=${e}`);return console.log(e),t.data}catch(t){console.log(t.message)}}const f=document.querySelector(".list-categories"),u=document.querySelector(".wrapper-categories");g().then(e=>{e&&k(e)}).catch(e=>{console.log(e.message)});function k(e){const t=e.map(({list_name:s})=>`
        <li class="categories-item">${s}</li>
    `).join("");f.insertAdjacentHTML("beforeend",t),document.querySelectorAll(".categories-item").forEach(s=>{s.addEventListener("click",p)})}function p(e){const t=e.target.textContent;u.innerHTML="";const r=document.createElement("h1");r.textContent=t,u.appendChild(r),h(t).then(s=>{s&&y(s)}).catch(s=>{console.log(s.message)})}function y(e){const t=e.map(({book_image:r,title:s,author:o})=>`
        <div>
            <ul class="list-wrapper-categories">
                <li>
                    <img src="${r}" alt="">
                    <h2>${s}</h2>
                    <p>${o}</p>
                </li>
            </ul>
        </div>
    `).join("");u.insertAdjacentHTML("beforeend",t)}async function b(){return await i.get("https://books-backend.p.goit.global/books/top-books").then(e=>{if(!e.status)throw new Error(e.status||e.statusText);return e.data})}function L(e){return e.map(({list_name:t,books:r})=>`<div class="category-div">
                <h3 class="category-title">${t}</h3>
                <ul class="book-list">
                ${v(r)}                  
                </ul>
                <button type="button" class="js-see-more-btn">See more</button>             
            </div>`).join("")}function v(e){return e.map(({_id:t,book_image:r,author:s,title:o})=>`<li class="book-list-item">
            <img
            class="book-cover"
            data-book-id="${t}"            
            src="${r}"
            alt="book-cover"
            />
            <p class="book-title">${o}</p>
            <p class="book-author">${s}</p>
        </li>`).join("")}const T=document.querySelector(".best-categories");b().then(e=>{T.insertAdjacentHTML("afterbegin",L(e))}).catch(e=>{console.error(e),m.Notify.failure("Sorry, there are no books found. Please try again!")});const d={LIGHT:"light-theme",DARK:"dark-theme"},a=document.querySelector("body"),n=document.querySelector(".js-switch-theme");n.addEventListener("click",S);function S(e){e.currentTarget.checked?(a.classList.add("dark-theme"),localStorage.setItem("saveTheme",d.DARK),n.checked=!0):(a.classList.remove("dark-theme"),localStorage.setItem("saveTheme",d.LIGHT),n.checked=!1)}const $=localStorage.getItem("saveTheme");$===d.LIGHT?(a.classList.remove("dark-theme"),n.checked=!1):(a.classList.add("dark-theme"),n.checked=!0);
//# sourceMappingURL=dark-theme-eab6eb27.js.map
