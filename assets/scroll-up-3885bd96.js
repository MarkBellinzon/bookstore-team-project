import{a as i,N as b}from"./vendor-eaaef1dd.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function s(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerpolicy&&(r.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?r.credentials="include":o.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(o){if(o.ep)return;o.ep=!0;const r=s(o);fetch(o.href,r)}})();i.defaults.baseURL="https://books-backend.p.goit.global/books";async function S(e){try{const{data:t}=await i.get("/category-list",{params:{list_name:e}});return t}catch(t){console.log(t.message)}}async function T(e){try{const t=await i.get(`/category?category=${e}`);return console.log(e),t.data}catch(t){console.log(t.message)}}const C=document.querySelector(".list-categories"),w=document.querySelector("h1"),v=document.querySelector(".wrapper-categories"),$=document.querySelector(".best-categories"),B=document.querySelector(".bestseller-title");function q(e,t){const s=e.textContent.split(" "),n=s.pop(),o=s.join(" ")+` <span style="color: ${t};">${n}</span>`;e.innerHTML=o}S().then(e=>{e&&H(e)}).catch(e=>{console.log(e.message)});function H(e){const t=e.map(({list_name:n})=>`
        <li class="categories-item">${n}</li>
    `).join("");C.insertAdjacentHTML("beforeend",t),document.querySelectorAll(".categories-item").forEach(n=>{n.addEventListener("click",I)})}function I(e){const t=e.target.textContent;v.innerHTML="",$.innerHTML="",B.innerHTML="",w.innerHTML="";const s=document.createElement("h1");s.textContent=t,s.classList.add("container"),w.appendChild(s),q(s,"#4F2EE8"),T(t).then(n=>{n&&A(n)}).catch(n=>{console.log(n.message)})}function A(e){const t=e.map(({book_image:s,title:n,author:o})=>`
        <div>
            <ul class="list-wrapper-categories">
                <li class="wrapper-categories-item">
                    <img src="${s}" alt="${n}" class="wrapper-categories-img" width="335" height="485" >
                    <h2>${n}</h2>
                    <p class="wrapper-categories-author">${o}</p>
                </li>
            </ul>
        </div>
    `).join("");v.insertAdjacentHTML("beforeend",t)}async function x(){return await i.get("https://books-backend.p.goit.global/books/top-books").then(e=>{if(!e.status)throw new Error(e.status||e.statusText);return e.data})}async function R(e){return await i.get(`https://books-backend.p.goit.global/books/category?category=${e}`).then(t=>{if(!t.status)throw new Error(t.status||t.statusText);return t.data})}function U(e){return e.map(({list_name:t,books:s})=>`<div class="category-div">
                <h3 class="category-title">${t}</h3>
                <ul class="book-list-top">
                ${L(s)}                  
                </ul>
                <button type="button" class="js-see-more-btn">See more</button>             
            </div>`).join("")}function L(e){return e.map(({_id:t,book_image:s,author:n,title:o})=>`<li class="book-list-top-item">
            <img
            class="book-cover-top"
            data-book-id="${t}"            
            src="${s}"
            alt="book-cover"
            />
            <p class="book-title-top">${o}</p>
            <p class="book-author-top">${n}</p>
        </li>`).join("")}const a=document.querySelector(".bestseller"),j=document.querySelector(".best-categories");x().then(e=>{j.innerHTML=U(e)}).catch(e=>{console.error(e),b.Notify.failure("Sorry, there are no books found. Please try again!")});a.addEventListener("click",N);function N(e){const s=e.target.parentElement.querySelector(".category-title").textContent;a.innerHTML="",R(s).then(n=>{a.innerHTML=`<h1 class='bestseller-title'>${s}</h1>
                <div class="category-wrapper">
                <ul class="books-category-list">
                ${L(n)}                  
                </ul>                             
            </div>`,a.querySelectorAll(".book-list-top-item").forEach(o=>o.style.display="block")}).catch(n=>{console.error(n),b.Notify.failure("Sorry, there are no books found. Please try again!")})}new URL("../img/support/savechld.png",self.location).href,new URL("../img/support/2.svg",self.location).href,new URL("../img/support/3.svg",self.location).href,new URL("../img/support/4.svg",self.location).href,new URL("../img/support/5.svg",self.location).href,new URL("../img/support/6.svg",self.location).href,new URL("../img/support/7.svg",self.location).href,new URL("../img/support/8.svg",self.location).href,new URL("../img/support/9.svg",self.location).href;const E=new Swiper(".swiper-container",{slidesPerView:2,navigation:{nextEl:".show-button",prevEl:".hide-button"},loop:!1}),P=document.querySelector(".show-button"),O=document.querySelector(".hide-button");P.addEventListener("click",()=>E.slideNext());O.addEventListener("click",()=>E.slidePrev());const _=document.querySelectorAll(".book"),g=document.getElementById("bookModal");document.getElementById("bookInfoModal");_.forEach(e=>{e.addEventListener("click",()=>{const t=getBookData();z(t),g.style.display="block",document.addEventListener("keydown",f)})});function z(e){const t=e.list_name,s=e.author,n=e.description,o=e.book_image,r=new Map(e.buy_links.map(y=>[y.name,y.url])),l=r.get("Amazon"),M=r.get("Apple Books");bookInfoModal.innerHTML=`
    <img class="modal-img" src="${o}" alt="${t}">
    <h3 class="modal-title">${t}</h3>
    <p class="modal-author">Author: ${s}</p>
    <p class="modal-description">${n}</p>
    <a href="${l}" target="_blank" rel="noopener noreferrer" class="modal-link">Amazon</a>
    <a href="${M}" target="_blank" rel="noopener noreferrer" class="modal-link">Apple Books</a>
  `}function f(e){(e.key==="Escape"||e.keyCode===27)&&(g.style.display="none",document.removeEventListener("keydown",f))}const D=document.querySelector(".close-modal-btn");function F(){g.style.display="none",document.removeEventListener("keydown",f)}D.addEventListener("click",F);const d=document.getElementById("shoppingButton"),p=document.getElementById("successMessage");let h=!1;d.addEventListener("click",()=>{h?(d.textContent="Add to shopping list",p.style.display="none",h=!1):(d.textContent="Remove from the shopping list",p.textContent="Congratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.",p.style.display="block",h=!0)});fetch("https://books-backend.p.goit.global/books").then(e=>{if(!e.ok)throw new Error("Network response was not ok");return e.json()}).then(e=>{updateModalContent(e)}).catch(e=>{console.error("There has been a problem with your fetch operation:",e)});const m={LIGHT:"light-theme",DARK:"dark-theme"},u=document.querySelector("body"),c=document.querySelector(".js-switch-theme");c.addEventListener("click",K);function K(e){e.currentTarget.checked?(u.classList.add("dark-theme"),localStorage.setItem("saveTheme",m.DARK),c.checked=!0):(u.classList.remove("dark-theme"),localStorage.setItem("saveTheme",m.LIGHT),c.checked=!1)}const W=localStorage.getItem("saveTheme");W===m.LIGHT?(u.classList.remove("dark-theme"),c.checked=!1):(u.classList.add("dark-theme"),c.checked=!0);const k=document.querySelector(".scroll-up"),Y=document.documentElement.scrollHeight;function G(){k.classList.remove("scroll-hide")}function V(){k.classList.add("scroll-hide")}function Z(){window.addEventListener("scroll",function(){(window.scrollY||document.documentElement.scrollTop)>.5*Y&&window.innerWidth>=768?G():V()}),k.onclick=function(){window.scrollTo({top:0,left:0,behavior:"smooth"})}}Z();
//# sourceMappingURL=scroll-up-3885bd96.js.map
