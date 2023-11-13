import{a as c,N as m,S as h}from"./vendor-5057f8db.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function s(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerpolicy&&(n.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?n.credentials="include":o.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(o){if(o.ep)return;o.ep=!0;const n=s(o);fetch(o.href,n)}})();c.defaults.baseURL="https://books-backend.p.goit.global/books";async function p(e){try{const{data:t}=await c.get("/category-list",{params:{list_name:e}});return t}catch(t){console.log(t.message)}}async function f(e){try{const t=await c.get(`/category?category=${e}`);return console.log(e),t.data}catch(t){console.log(t.message)}}const k=document.querySelector(".list-categories"),u=document.querySelector(".wrapper-categories");p().then(e=>{e&&w(e)}).catch(e=>{console.log(e.message)});function w(e){const t=e.map(({list_name:r})=>`
        <li class="categories-item">${r}</li>
    `).join("");k.insertAdjacentHTML("beforeend",t),document.querySelectorAll(".categories-item").forEach(r=>{r.addEventListener("click",y)})}function y(e){const t=e.target.textContent;u.innerHTML="";const s=document.createElement("h1");s.textContent=t,u.appendChild(s),f(t).then(r=>{r&&b(r)}).catch(r=>{console.log(r.message)})}function b(e){const t=e.map(({book_image:s,title:r,author:o})=>`
        <div>
            <ul class="list-wrapper-categories">
                <li>
                    <img src="${s}" alt="">
                    <h2>${r}</h2>
                    <p>${o}</p>
                </li>
            </ul>
        </div>
    `).join("");u.insertAdjacentHTML("beforeend",t)}async function v(){return await c.get("https://books-backend.p.goit.global/books/top-books").then(e=>{if(!e.status)throw new Error(e.status||e.statusText);return e.data})}function L(e){return e.map(({list_name:t,books:s})=>`<div class="category-div">
                <h3 class="category-title">${t}</h3>
                <ul class="book-list">
                ${S(s)}                  
                </ul>
                <button type="button" class="js-see-more-btn">See more</button>             
            </div>`).join("")}function S(e){return e.map(({_id:t,book_image:s,author:r,title:o})=>`<li class="book-list-item">
            <img
            class="book-cover"
            data-book-id="${t}"            
            src="${s}"
            alt="book-cover"
            />
            <p class="book-title">${o}</p>
            <p class="book-author">${r}</p>
        </li>`).join("")}const T=document.querySelector(".best-categories");v().then(e=>{T.insertAdjacentHTML("afterbegin",L(e))}).catch(e=>{console.error(e),m.Notify.failure("Sorry, there are no books found. Please try again!")});new URL("../img/support/savechld.png",self.location).href,new URL("../img/support/2.svg",self.location).href,new URL("../img/support/3.svg",self.location).href,new URL("../img/support/4.svg",self.location).href,new URL("../img/support/5.svg",self.location).href,new URL("../img/support/6.svg",self.location).href,new URL("../img/support/7.svg",self.location).href,new URL("../img/support/8.svg",self.location).href,new URL("../img/support/9.svg",self.location).href;const d=new h(".swiper-container",{slidesPerView:2,navigation:{nextEl:".show-button",prevEl:".hide-button"},loop:!1}),C=document.querySelector(".show-button"),E=document.querySelector(".hide-button");C.addEventListener("click",()=>d.slideNext());E.addEventListener("click",()=>d.slidePrev());const g={LIGHT:"light-theme",DARK:"dark-theme"},a=document.querySelector("body"),i=document.querySelector(".js-switch-theme");i.addEventListener("click",M);function M(e){e.currentTarget.checked?(a.classList.add("dark-theme"),localStorage.setItem("saveTheme",g.DARK),i.checked=!0):(a.classList.remove("dark-theme"),localStorage.setItem("saveTheme",g.LIGHT),i.checked=!1)}const R=localStorage.getItem("saveTheme");R===g.LIGHT?(a.classList.remove("dark-theme"),i.checked=!1):(a.classList.add("dark-theme"),i.checked=!0);
//# sourceMappingURL=dark-theme-2b337281.js.map
