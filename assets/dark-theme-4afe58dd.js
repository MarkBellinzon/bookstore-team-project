import{a as l,N as b}from"./vendor-eaaef1dd.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerpolicy&&(r.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?r.credentials="include":o.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}})();l.defaults.baseURL="https://books-backend.p.goit.global/books";async function M(e){try{const{data:t}=await l.get("/category-list",{params:{list_name:e}});return t}catch(t){console.log(t.message)}}async function S(e){try{const t=await l.get(`/category?category=${e}`);return console.log(e),t.data}catch(t){console.log(t.message)}}const T=document.querySelector(".list-categories"),y=document.querySelector("h1"),w=document.querySelector(".wrapper-categories"),C=document.querySelector(".best-categories"),$=document.querySelector(".bestseller-title");function B(e,t){const n=e.textContent.split(" "),s=n.pop(),o=n.join(" ")+` <span style="color: ${t};">${s}</span>`;e.innerHTML=o}M().then(e=>{e&&I(e)}).catch(e=>{console.log(e.message)});function I(e){const t=e.map(({list_name:s})=>`
        <li class="categories-item">${s}</li>
    `).join("");T.insertAdjacentHTML("beforeend",t),document.querySelectorAll(".categories-item").forEach(s=>{s.addEventListener("click",q)})}function q(e){const t=e.target.textContent;w.innerHTML="",C.innerHTML="",$.innerHTML="",y.innerHTML="";const n=document.createElement("h1");n.textContent=t,n.classList.add("container"),y.appendChild(n),B(n,"#4F2EE8"),S(t).then(s=>{s&&H(s)}).catch(s=>{console.log(s.message)})}function H(e){const t=e.map(({book_image:n,title:s,author:o})=>`
        <div>
            <ul class="list-wrapper-categories">
                <li class="wrapper-categories-item">
                    <img src="${n}" alt="${s}" class="wrapper-categories-img" width="335" height="485" >
                    <h2>${s}</h2>
                    <p class="wrapper-categories-author">${o}</p>
                </li>
            </ul>
        </div>
    `).join("");w.insertAdjacentHTML("beforeend",t)}async function A(){return await l.get("https://books-backend.p.goit.global/books/top-books").then(e=>{if(!e.status)throw new Error(e.status||e.statusText);return e.data})}async function x(e){return await l.get(`https://books-backend.p.goit.global/books/category?category=${e}`).then(t=>{if(!t.status)throw new Error(t.status||t.statusText);return t.data})}function R(e){return e.map(({list_name:t,books:n})=>`<div class="category-div">
                <h3 class="category-title">${t}</h3>
                <ul class="book-list-top">
                ${v(n)}                  
                </ul>
                <button type="button" class="js-see-more-btn">See more</button>             
            </div>`).join("")}function v(e){return e.map(({_id:t,book_image:n,author:s,title:o})=>`<li class="book-list-top-item">
            <img
            class="book-cover-top"
            data-book-id="${t}"            
            src="${n}"
            alt="book-cover"
            />
            <p class="book-title-top">${o}</p>
            <p class="book-author-top">${s}</p>
        </li>`).join("")}const c=document.querySelector(".bestseller"),j=document.querySelector(".best-categories");A().then(e=>{j.innerHTML=R(e)}).catch(e=>{console.error(e),b.Notify.failure("Sorry, there are no books found. Please try again!")});c.addEventListener("click",N);function N(e){const n=e.target.parentElement.querySelector(".category-title").textContent;c.innerHTML="",x(n).then(s=>{c.innerHTML=`<h1 class='bestseller-title'>${n}</h1>
                <div class="category-wrapper">
                <ul class="books-category-list">
                ${v(s)}                  
                </ul>                             
            </div>`,c.querySelectorAll(".book-list-top-item").forEach(o=>o.style.display="block")}).catch(s=>{console.error(s),b.Notify.failure("Sorry, there are no books found. Please try again!")})}new URL("../img/support/savechld.png",self.location).href,new URL("../img/support/2.svg",self.location).href,new URL("../img/support/3.svg",self.location).href,new URL("../img/support/4.svg",self.location).href,new URL("../img/support/5.svg",self.location).href,new URL("../img/support/6.svg",self.location).href,new URL("../img/support/7.svg",self.location).href,new URL("../img/support/8.svg",self.location).href,new URL("../img/support/9.svg",self.location).href;const L=new Swiper(".swiper-container",{slidesPerView:2,navigation:{nextEl:".show-button",prevEl:".hide-button"},loop:!1}),U=document.querySelector(".show-button"),P=document.querySelector(".hide-button");U.addEventListener("click",()=>L.slideNext());P.addEventListener("click",()=>L.slidePrev());const O=document.querySelectorAll(".book"),m=document.getElementById("bookModal");document.getElementById("bookInfoModal");O.forEach(e=>{e.addEventListener("click",()=>{const t=getBookData();_(t),m.style.display="block",document.addEventListener("keydown",f)})});function _(e){const t=e.list_name,n=e.author,s=e.description,o=e.book_image,r=new Map(e.buy_links.map(k=>[k.name,k.url])),a=r.get("Amazon"),E=r.get("Apple Books");bookInfoModal.innerHTML=`
    <img class="modal-img" src="${o}" alt="${t}">
    <h3 class="modal-title">${t}</h3>
    <p class="modal-author">Author: ${n}</p>
    <p class="modal-description">${s}</p>
    <a href="${a}" target="_blank" rel="noopener noreferrer" class="modal-link">Amazon</a>
    <a href="${E}" target="_blank" rel="noopener noreferrer" class="modal-link">Apple Books</a>
  `}function f(e){(e.key==="Escape"||e.keyCode===27)&&(m.style.display="none",document.removeEventListener("keydown",f))}const z=document.querySelector(".close-modal-btn");function D(){m.style.display="none",document.removeEventListener("keydown",f)}z.addEventListener("click",D);const d=document.getElementById("shoppingButton"),p=document.getElementById("successMessage");let g=!1;d.addEventListener("click",()=>{g?(d.textContent="Add to shopping list",p.style.display="none",g=!1):(d.textContent="Remove from the shopping list",p.textContent="Congratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.",p.style.display="block",g=!0)});fetch("https://books-backend.p.goit.global/books").then(e=>{if(!e.ok)throw new Error("Network response was not ok");return e.json()}).then(e=>{updateModalContent(e)}).catch(e=>{console.error("There has been a problem with your fetch operation:",e)});const h={LIGHT:"light-theme",DARK:"dark-theme"},u=document.querySelector("body"),i=document.querySelector(".js-switch-theme");i.addEventListener("click",F);function F(e){e.currentTarget.checked?(u.classList.add("dark-theme"),localStorage.setItem("saveTheme",h.DARK),i.checked=!0):(u.classList.remove("dark-theme"),localStorage.setItem("saveTheme",h.LIGHT),i.checked=!1)}const K=localStorage.getItem("saveTheme");K===h.LIGHT?(u.classList.remove("dark-theme"),i.checked=!1):(u.classList.add("dark-theme"),i.checked=!0);
//# sourceMappingURL=dark-theme-4afe58dd.js.map
