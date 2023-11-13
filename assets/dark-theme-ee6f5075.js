import{a,N as y,S as b}from"./vendor-5057f8db.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerpolicy&&(r.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?r.credentials="include":o.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}})();a.defaults.baseURL="https://books-backend.p.goit.global/books";async function w(e){try{const{data:t}=await a.get("/category-list",{params:{list_name:e}});return t}catch(t){console.log(t.message)}}async function v(e){try{const t=await a.get(`/category?category=${e}`);return console.log(e),t.data}catch(t){console.log(t.message)}}const L=document.querySelector(".list-categories"),p=document.querySelector(".wrapper-categories");w().then(e=>{e&&E(e)}).catch(e=>{console.log(e.message)});function E(e){const t=e.map(({list_name:s})=>`
        <li class="categories-item">${s}</li>
    `).join("");L.insertAdjacentHTML("beforeend",t),document.querySelectorAll(".categories-item").forEach(s=>{s.addEventListener("click",S)})}function S(e){const t=e.target.textContent;p.innerHTML="";const n=document.createElement("h1");n.textContent=t,p.appendChild(n),v(t).then(s=>{s&&M(s)}).catch(s=>{console.log(s.message)})}function M(e){const t=e.map(({book_image:n,title:s,author:o})=>`
        <div>
            <ul class="list-wrapper-categories">
                <li>
                    <img src="${n}" alt="">
                    <h2>${s}</h2>
                    <p>${o}</p>
                </li>
            </ul>
        </div>
    `).join("");p.insertAdjacentHTML("beforeend",t)}async function I(){return await a.get("https://books-backend.p.goit.global/books/top-books").then(e=>{if(!e.status)throw new Error(e.status||e.statusText);return e.data})}function T(e){return e.map(({list_name:t,books:n})=>`<div class="category-div">
                <h3 class="category-title">${t}</h3>
                <ul class="book-list">
                ${C(n)}                  
                </ul>
                <button type="button" class="js-see-more-btn">See more</button>             
            </div>`).join("")}function C(e){return e.map(({_id:t,book_image:n,author:s,title:o})=>`<li class="book-list-item">
            <img
            class="book-cover"
            data-book-id="${t}"            
            src="${n}"
            alt="book-cover"
            />
            <p class="book-title">${o}</p>
            <p class="book-author">${s}</p>
        </li>`).join("")}const $=document.querySelector(".best-categories");I().then(e=>{$.insertAdjacentHTML("afterbegin",T(e))}).catch(e=>{console.error(e),y.Notify.failure("Sorry, there are no books found. Please try again!")});new URL("../img/support/savechld.png",self.location).href,new URL("../img/support/2.svg",self.location).href,new URL("../img/support/3.svg",self.location).href,new URL("../img/support/4.svg",self.location).href,new URL("../img/support/5.svg",self.location).href,new URL("../img/support/6.svg",self.location).href,new URL("../img/support/7.svg",self.location).href,new URL("../img/support/8.svg",self.location).href,new URL("../img/support/9.svg",self.location).href;const k=new b(".swiper-container",{slidesPerView:2,navigation:{nextEl:".show-button",prevEl:".hide-button"},loop:!1}),B=document.querySelector(".show-button"),R=document.querySelector(".hide-button");B.addEventListener("click",()=>k.slideNext());R.addEventListener("click",()=>k.slidePrev());const A=document.querySelectorAll(".book"),h=document.getElementById("bookModal");document.getElementById("bookInfoModal");A.forEach(e=>{e.addEventListener("click",()=>{const t=getBookData();j(t),h.style.display="block",document.addEventListener("keydown",f)})});function j(e){const t=e.list_name,n=e.author,s=e.description,o=e.book_image,r=e.buyLinks[0],i=e.buyLinks[1];bookInfoModal.innerHTML=`
  <img class="modal-img" src="${o}" alt="${t}">
    <h3 class="modal-title">${t}</h3>
    <p class="modal-author">Author: ${n}</p>
    <p class="modal-description">${s}</p>
    <a href="${r}" target="_blank" rel="noopener noreferrer" class="modal-link">Amazon</a>
    <a href="${i}" target="_blank" rel="noopener noreferrer" class="modal-link">Apple Books</a>
  `}function f(e){(e.key==="Escape"||e.keyCode===27)&&(h.style.display="none",document.removeEventListener("keydown",f))}const x=document.querySelector(".close-modal-btn");function q(){h.style.display="none",document.removeEventListener("keydown",f)}x.addEventListener("click",q);const u=document.getElementById("shoppingButton"),d=document.getElementById("successMessage");let m=!1;u.addEventListener("click",()=>{m?(u.textContent="Add to shopping list",d.style.display="none",m=!1):(u.textContent="Remove from the shopping list",d.textContent="Congratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.",d.style.display="block",m=!0)});fetch(`https://books-backend.p.goit.global/books/${bookId}`).then(e=>e.json()).then(e=>{const t=e;t?(renderStats(t),updateButton(bookId,t.title,t.author,t.description,t.book_image,t.publisher)):console.error("The book object is empty.")}).catch(e=>console.error(e));const g={LIGHT:"light-theme",DARK:"dark-theme"},c=document.querySelector("body"),l=document.querySelector(".js-switch-theme");l.addEventListener("click",U);function U(e){e.currentTarget.checked?(c.classList.add("dark-theme"),localStorage.setItem("saveTheme",g.DARK),l.checked=!0):(c.classList.remove("dark-theme"),localStorage.setItem("saveTheme",g.LIGHT),l.checked=!1)}const H=localStorage.getItem("saveTheme");H===g.LIGHT?(c.classList.remove("dark-theme"),l.checked=!1):(c.classList.add("dark-theme"),l.checked=!0);
//# sourceMappingURL=dark-theme-ee6f5075.js.map
