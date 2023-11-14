import{a as c,N as w}from"./vendor-77e6b4aa.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function s(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerpolicy&&(r.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?r.credentials="include":n.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(n){if(n.ep)return;n.ep=!0;const r=s(n);fetch(n.href,r)}})();c.defaults.baseURL="https://books-backend.p.goit.global/books";async function M(e){try{const{data:t}=await c.get("/category-list",{params:{list_name:e}});return t}catch(t){console.log(t.message)}}async function S(e){try{const t=await c.get(`/category?category=${e}`);return console.log(e),t.data}catch(t){console.log(t.message)}}const T=document.querySelector(".list-categories"),y=document.querySelector("h1"),b=document.querySelector(".wrapper-categories"),C=document.querySelector(".best-categories"),$=document.querySelector(".bestseller-title");function B(e,t){const s=e.textContent.split(" "),o=s.pop(),n=s.join(" ")+` <span style="color: ${t};">${o}</span>`;e.innerHTML=n}M().then(e=>{e&&I(e)}).catch(e=>{console.log(e.message)});function I(e){const t=e.map(({list_name:o})=>`
        <li class="categories-item">${o}</li>
    `).join("");T.insertAdjacentHTML("beforeend",t),document.querySelectorAll(".categories-item").forEach(o=>{o.addEventListener("click",H)})}function H(e){const t=e.target.textContent;b.innerHTML="",C.innerHTML="",$.innerHTML="",y.innerHTML="";const s=document.createElement("h1");s.textContent=t,s.classList.add("container"),y.appendChild(s),B(s,"#4F2EE8"),S(t).then(o=>{o&&q(o)}).catch(o=>{console.log(o.message)})}function q(e){const t=e.map(({book_image:s,title:o,author:n})=>`
        <div>
            <ul class="list-wrapper-categories">
                <li class="wrapper-categories-item">
                    <img src="${s}" alt="${o}" class="wrapper-categories-img" width="335" height="485" >
                    <h2>${o}</h2>
                    <p class="wrapper-categories-author">${n}</p>
                </li>
            </ul>
        </div>
    `).join("");b.insertAdjacentHTML("beforeend",t)}async function x(){return await c.get("https://books-backend.p.goit.global/books/top-books").then(e=>{if(!e.status)throw new Error(e.status||e.statusText);return e.data})}async function A(e){return await c.get(`https://books-backend.p.goit.global/books/category?category=${e}`).then(t=>{if(!t.status)throw new Error(t.status||t.statusText);return t.data})}function R(e){return e.map(({list_name:t,books:s})=>`<div class="category-div">
                <h3 class="category-title">${t}</h3>
                <ul class="book-list">
                ${v(s)}                  
                </ul>
                <button type="button" class="js-see-more-btn">See more</button>             
            </div>`).join("")}function v(e){return e.map(({_id:t,book_image:s,author:o,title:n})=>`<li class="book-list-item">
            <img
            class="book-cover"
            data-book-id="${t}"            
            src="${s}"
            alt="book-cover"
            />
            <p class="book-title">${n}</p>
            <p class="book-author">${o}</p>
        </li>`).join("")}const h=document.querySelector(".bestseller"),j=document.querySelector(".best-categories");x().then(e=>{j.innerHTML=R(e)}).catch(e=>{console.error(e),w.Notify.failure("Sorry, there are no books found. Please try again!")});h.addEventListener("click",N);function N(e){const s=e.target.parentElement.querySelector(".category-title").textContent;h.innerHTML="",A(s).then(o=>{h.innerHTML=`<h1>${s}</h1>
                <div class="category-wrapper">
                <ul class="books-category-list">
                ${v(o)}                  
                </ul>                             
            </div>`}).catch(o=>{console.error(o),w.Notify.failure("Sorry, there are no books found. Please try again!")})}new URL("../img/support/savechld.png",self.location).href,new URL("../img/support/2.svg",self.location).href,new URL("../img/support/3.svg",self.location).href,new URL("../img/support/4.svg",self.location).href,new URL("../img/support/5.svg",self.location).href,new URL("../img/support/6.svg",self.location).href,new URL("../img/support/7.svg",self.location).href,new URL("../img/support/8.svg",self.location).href,new URL("../img/support/9.svg",self.location).href;const L=new Swiper(".swiper-container",{slidesPerView:2,navigation:{nextEl:".show-button",prevEl:".hide-button"},loop:!1}),U=document.querySelector(".show-button"),P=document.querySelector(".hide-button");U.addEventListener("click",()=>L.slideNext());P.addEventListener("click",()=>L.slidePrev());const O=document.querySelectorAll(".book"),p=document.getElementById("bookModal");document.getElementById("bookInfoModal");O.forEach(e=>{e.addEventListener("click",()=>{const t=getBookData();_(t),p.style.display="block",document.addEventListener("keydown",f)})});function _(e){const t=e.list_name,s=e.author,o=e.description,n=e.book_image,r=new Map(e.buy_links.map(k=>[k.name,k.url])),a=r.get("Amazon"),E=r.get("Apple Books");bookInfoModal.innerHTML=`
    <img class="modal-img" src="${n}" alt="${t}">
    <h3 class="modal-title">${t}</h3>
    <p class="modal-author">Author: ${s}</p>
    <p class="modal-description">${o}</p>
    <a href="${a}" target="_blank" rel="noopener noreferrer" class="modal-link">Amazon</a>
    <a href="${E}" target="_blank" rel="noopener noreferrer" class="modal-link">Apple Books</a>
  `}function f(e){(e.key==="Escape"||e.keyCode===27)&&(p.style.display="none",document.removeEventListener("keydown",f))}const z=document.querySelector(".close-modal-btn");function D(){p.style.display="none",document.removeEventListener("keydown",f)}z.addEventListener("click",D);const u=document.getElementById("shoppingButton"),d=document.getElementById("successMessage");let g=!1;u.addEventListener("click",()=>{g?(u.textContent="Add to shopping list",d.style.display="none",g=!1):(u.textContent="Remove from the shopping list",d.textContent="Congratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.",d.style.display="block",g=!0)});fetch("https://books-backend.p.goit.global/books").then(e=>{if(!e.ok)throw new Error("Network response was not ok");return e.json()}).then(e=>{updateModalContent(e)}).catch(e=>{console.error("There has been a problem with your fetch operation:",e)});const m={LIGHT:"light-theme",DARK:"dark-theme"},l=document.querySelector("body"),i=document.querySelector(".js-switch-theme");i.addEventListener("click",F);function F(e){e.currentTarget.checked?(l.classList.add("dark-theme"),localStorage.setItem("saveTheme",m.DARK),i.checked=!0):(l.classList.remove("dark-theme"),localStorage.setItem("saveTheme",m.LIGHT),i.checked=!1)}const K=localStorage.getItem("saveTheme");K===m.LIGHT?(l.classList.remove("dark-theme"),i.checked=!1):(l.classList.add("dark-theme"),i.checked=!0);
//# sourceMappingURL=dark-theme-0bf6daef.js.map
