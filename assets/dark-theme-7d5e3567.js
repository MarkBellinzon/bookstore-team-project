import{a as l,N as v}from"./vendor-77e6b4aa.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerpolicy&&(r.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?r.credentials="include":o.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(o){if(o.ep)return;o.ep=!0;const r=s(o);fetch(o.href,r)}})();l.defaults.baseURL="https://books-backend.p.goit.global/books";async function L(e){try{const{data:t}=await l.get("/category-list",{params:{list_name:e}});return t}catch(t){console.log(t.message)}}async function E(e){try{const t=await l.get(`/category?category=${e}`);return console.log(e),t.data}catch(t){console.log(t.message)}}const M=document.querySelector(".list-categories"),k=document.querySelector("h1"),y=document.querySelector(".wrapper-categories"),S=document.querySelector(".best-categories"),C=document.querySelector(".bestseller-title");function T(e,t){const s=e.textContent.split(" "),n=s.pop(),o=s.join(" ")+` <span style="color: ${t};">${n}</span>`;e.innerHTML=o}L().then(e=>{e&&$(e)}).catch(e=>{console.log(e.message)});function $(e){const t=e.map(({list_name:n})=>`
        <li class="categories-item">${n}</li>
    `).join("");M.insertAdjacentHTML("beforeend",t),document.querySelectorAll(".categories-item").forEach(n=>{n.addEventListener("click",B)})}function B(e){const t=e.target.textContent;y.innerHTML="",S.innerHTML="",C.innerHTML="",k.innerHTML="";const s=document.createElement("h1");s.textContent=t,s.classList.add("container"),k.appendChild(s),T(s,"#4F2EE8"),E(t).then(n=>{n&&I(n)}).catch(n=>{console.log(n.message)})}function I(e){const t=e.map(({book_image:s,title:n,author:o})=>`
        <div>
            <ul class="list-wrapper-categories">
                <li class="wrapper-categories-item">
                    <img src="${s}" alt="${n}" class="wrapper-categories-img" width="335" height="485" >
                    <h2>${n}</h2>
                    <p class="wrapper-categories-author">${o}</p>
                </li>
            </ul>
        </div>
    `).join("");y.insertAdjacentHTML("beforeend",t)}async function A(){return await l.get("https://books-backend.p.goit.global/books/top-books").then(e=>{if(!e.status)throw new Error(e.status||e.statusText);return e.data})}function R(e){return e.map(({list_name:t,books:s})=>`<div class="category-div">
                <h3 class="category-title">${t}</h3>
                <ul class="book-list">
                ${q(s)}                  
                </ul>
                <button type="button" class="js-see-more-btn">See more</button>             
            </div>`).join("")}function q(e){return e.map(({_id:t,book_image:s,author:n,title:o})=>`<li class="book-list-item">
            <img
            class="book-cover"
            data-book-id="${t}"            
            src="${s}"
            alt="book-cover"
            />
            <p class="book-title">${o}</p>
            <p class="book-author">${n}</p>
        </li>`).join("")}const H=document.querySelector(".best-categories");A().then(e=>{H.insertAdjacentHTML("afterbegin",R(e))}).catch(e=>{console.error(e),v.Notify.failure("Sorry, there are no books found. Please try again!")});new URL("../img/support/savechld.png",self.location).href,new URL("../img/support/2.svg",self.location).href,new URL("../img/support/3.svg",self.location).href,new URL("../img/support/4.svg",self.location).href,new URL("../img/support/5.svg",self.location).href,new URL("../img/support/6.svg",self.location).href,new URL("../img/support/7.svg",self.location).href,new URL("../img/support/8.svg",self.location).href,new URL("../img/support/9.svg",self.location).href;const w=new Swiper(".swiper-container",{slidesPerView:2,navigation:{nextEl:".show-button",prevEl:".hide-button"},loop:!1}),j=document.querySelector(".show-button"),x=document.querySelector(".hide-button");j.addEventListener("click",()=>w.slideNext());x.addEventListener("click",()=>w.slidePrev());const U=document.querySelectorAll(".book"),g=document.getElementById("bookModal");document.getElementById("bookInfoModal");U.forEach(e=>{e.addEventListener("click",()=>{const t=getBookData();N(t),g.style.display="block",document.addEventListener("keydown",h)})});function N(e){const t=e.list_name,s=e.author,n=e.description,o=e.book_image,r=new Map(e.buy_links.map(f=>[f.name,f.url])),i=r.get("Amazon"),b=r.get("Apple Books");bookInfoModal.innerHTML=`
    <img class="modal-img" src="${o}" alt="${t}">
    <h3 class="modal-title">${t}</h3>
    <p class="modal-author">Author: ${s}</p>
    <p class="modal-description">${n}</p>
    <a href="${i}" target="_blank" rel="noopener noreferrer" class="modal-link">Amazon</a>
    <a href="${b}" target="_blank" rel="noopener noreferrer" class="modal-link">Apple Books</a>
  `}function h(e){(e.key==="Escape"||e.keyCode===27)&&(g.style.display="none",document.removeEventListener("keydown",h))}const P=document.querySelector(".close-modal-btn");function O(){g.style.display="none",document.removeEventListener("keydown",h)}P.addEventListener("click",O);const u=document.getElementById("shoppingButton"),d=document.getElementById("successMessage");let p=!1;u.addEventListener("click",()=>{p?(u.textContent="Add to shopping list",d.style.display="none",p=!1):(u.textContent="Remove from the shopping list",d.textContent="Congratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.",d.style.display="block",p=!0)});fetch("https://books-backend.p.goit.global/books").then(e=>{if(!e.ok)throw new Error("Network response was not ok");return e.json()}).then(e=>{updateModalContent(e)}).catch(e=>{console.error("There has been a problem with your fetch operation:",e)});const m={LIGHT:"light-theme",DARK:"dark-theme"},c=document.querySelector("body"),a=document.querySelector(".js-switch-theme");a.addEventListener("click",_);function _(e){e.currentTarget.checked?(c.classList.add("dark-theme"),localStorage.setItem("saveTheme",m.DARK),a.checked=!0):(c.classList.remove("dark-theme"),localStorage.setItem("saveTheme",m.LIGHT),a.checked=!1)}const z=localStorage.getItem("saveTheme");z===m.LIGHT?(c.classList.remove("dark-theme"),a.checked=!1):(c.classList.add("dark-theme"),a.checked=!0);
//# sourceMappingURL=dark-theme-7d5e3567.js.map
