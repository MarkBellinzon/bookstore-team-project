import{a as c,N as b}from"./vendor-77e6b4aa.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerpolicy&&(r.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?r.credentials="include":o.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(o){if(o.ep)return;o.ep=!0;const r=s(o);fetch(o.href,r)}})();c.defaults.baseURL="https://books-backend.p.goit.global/books";async function v(e){try{const{data:t}=await c.get("/category-list",{params:{list_name:e}});return t}catch(t){console.log(t.message)}}async function L(e){try{const t=await c.get(`/category?category=${e}`);return console.log(e),t.data}catch(t){console.log(t.message)}}const E=document.querySelector(".list-categories"),p=document.querySelector(".wrapper-categories"),M=document.querySelector(".best-categories"),S=document.querySelector(".bestseller-title");function C(e,t){const s=e.textContent.split(" "),n=s.pop(),o=s.join(" ")+` <span style="color: ${t};">${n}</span>`;e.innerHTML=o}v().then(e=>{e&&T(e)}).catch(e=>{console.log(e.message)});function T(e){const t=e.map(({list_name:n})=>`
        <li class="categories-item">${n}</li>
    `).join("");E.insertAdjacentHTML("beforeend",t),document.querySelectorAll(".categories-item").forEach(n=>{n.addEventListener("click",$)})}function $(e){const t=e.target.textContent;p.innerHTML="",M.innerHTML="",S.innerHTML="";const s=document.createElement("h1");s.textContent=t,p.appendChild(s),C(s,"#4F2EE8"),L(t).then(n=>{n&&B(n)}).catch(n=>{console.log(n.message)})}function B(e){const t=e.map(({book_image:s,title:n,author:o})=>`
        <div>
            <ul class="list-wrapper-categories">
                <li>
                    <img src="${s}" alt="${n}" width="335" height="485" >
                    <h2>${n}</h2>
                    <p class="wrapper-categories-author">${o}</p>
                </li>
            </ul>
        </div>
    `).join("");p.insertAdjacentHTML("beforeend",t)}async function I(){return await c.get("https://books-backend.p.goit.global/books/top-books").then(e=>{if(!e.status)throw new Error(e.status||e.statusText);return e.data})}function A(e){return e.map(({list_name:t,books:s})=>`<div class="category-div">
                <h3 class="category-title">${t}</h3>
                <ul class="book-list">
                ${R(s)}                  
                </ul>
                <button type="button" class="js-see-more-btn">See more</button>             
            </div>`).join("")}function R(e){return e.map(({_id:t,book_image:s,author:n,title:o})=>`<li class="book-list-item">
            <img
            class="book-cover"
            data-book-id="${t}"            
            src="${s}"
            alt="book-cover"
            />
            <p class="book-title">${o}</p>
            <p class="book-author">${n}</p>
        </li>`).join("")}const j=document.querySelector(".best-categories");I().then(e=>{j.insertAdjacentHTML("afterbegin",A(e))}).catch(e=>{console.error(e),b.Notify.failure("Sorry, there are no books found. Please try again!")});new URL("../img/support/savechld.png",self.location).href,new URL("../img/support/2.svg",self.location).href,new URL("../img/support/3.svg",self.location).href,new URL("../img/support/4.svg",self.location).href,new URL("../img/support/5.svg",self.location).href,new URL("../img/support/6.svg",self.location).href,new URL("../img/support/7.svg",self.location).href,new URL("../img/support/8.svg",self.location).href,new URL("../img/support/9.svg",self.location).href;const y=new Swiper(".swiper-container",{slidesPerView:2,navigation:{nextEl:".show-button",prevEl:".hide-button"},loop:!1}),q=document.querySelector(".show-button"),x=document.querySelector(".hide-button");q.addEventListener("click",()=>y.slideNext());x.addEventListener("click",()=>y.slidePrev());const H=document.querySelectorAll(".book"),g=document.getElementById("bookModal");document.getElementById("bookInfoModal");H.forEach(e=>{e.addEventListener("click",()=>{const t=getBookData();U(t),g.style.display="block",document.addEventListener("keydown",f)})});function U(e){const t=e.list_name,s=e.author,n=e.description,o=e.book_image,r=new Map(e.buy_links.map(k=>[k.name,k.url])),i=r.get("Amazon"),w=r.get("Apple Books");bookInfoModal.innerHTML=`
    <img class="modal-img" src="${o}" alt="${t}">
    <h3 class="modal-title">${t}</h3>
    <p class="modal-author">Author: ${s}</p>
    <p class="modal-description">${n}</p>
    <a href="${i}" target="_blank" rel="noopener noreferrer" class="modal-link">Amazon</a>
    <a href="${w}" target="_blank" rel="noopener noreferrer" class="modal-link">Apple Books</a>
  `}function f(e){(e.key==="Escape"||e.keyCode===27)&&(g.style.display="none",document.removeEventListener("keydown",f))}const N=document.querySelector(".close-modal-btn");function P(){g.style.display="none",document.removeEventListener("keydown",f)}N.addEventListener("click",P);const u=document.getElementById("shoppingButton"),d=document.getElementById("successMessage");let m=!1;u.addEventListener("click",()=>{m?(u.textContent="Add to shopping list",d.style.display="none",m=!1):(u.textContent="Remove from the shopping list",d.textContent="Congratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.",d.style.display="block",m=!0)});fetch("https://books-backend.p.goit.global/books").then(e=>{if(!e.ok)throw new Error("Network response was not ok");return e.json()}).then(e=>{updateModalContent(e)}).catch(e=>{console.error("There has been a problem with your fetch operation:",e)});const h={LIGHT:"light-theme",DARK:"dark-theme"},l=document.querySelector("body"),a=document.querySelector(".js-switch-theme");a.addEventListener("click",O);function O(e){e.currentTarget.checked?(l.classList.add("dark-theme"),localStorage.setItem("saveTheme",h.DARK),a.checked=!0):(l.classList.remove("dark-theme"),localStorage.setItem("saveTheme",h.LIGHT),a.checked=!1)}const _=localStorage.getItem("saveTheme");_===h.LIGHT?(l.classList.remove("dark-theme"),a.checked=!1):(l.classList.add("dark-theme"),a.checked=!0);
//# sourceMappingURL=dark-theme-d00caf6b.js.map
