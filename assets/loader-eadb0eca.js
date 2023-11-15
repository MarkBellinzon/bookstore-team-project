import{a,N as B,S as K}from"./vendor-1d124a32.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();a.defaults.baseURL="https://books-backend.p.goit.global/books";async function R(e){try{const{data:t}=await a.get("/category-list",{params:{list_name:e}});return t}catch(t){console.log(t.message)}}async function J(e){try{const t=await a.get(`/category?category=${e}`);return console.log(e),t.data}catch(t){console.log(t.message)}}const V=document.querySelector(".list-categories"),M=document.querySelector("h1"),T=document.querySelector(".wrapper-categories"),Z=document.querySelector(".best-categories"),G=document.querySelector(".bestseller-title"),Q=document.querySelector(".container.bestseller");function X(e,t){const n=e.textContent.split(" "),o=n.pop(),s=n.join(" ")+` <span style="color: ${t};">${o}</span>`;e.innerHTML=s}R().then(e=>{e&&ee(e)}).catch(e=>{console.log(e.message)});function ee(e){const t=e.map(({list_name:o})=>`
        <li class="categories-item">${o}</li>
    `).join("");V.insertAdjacentHTML("beforeend",t),document.querySelectorAll(".categories-item").forEach(o=>{o.addEventListener("click",te)})}function te(e){const t=e.target.textContent;T.innerHTML="",Z.innerHTML="",G.innerHTML="",M.innerHTML="",Q.innerHTML="";const n=document.createElement("h1");n.textContent=t,n.classList.add("container"),M.appendChild(n),X(n,"#4F2EE8"),J(t).then(o=>{o&&oe(o)}).catch(o=>{console.log(o.message)})}function oe(e){const t=e.map(({book_image:n,title:o,author:s})=>`
        <div>
            <ul class="list-wrapper-categories">
                <li class="wrapper-categories-item">
                    <img src="${n}" alt="${o}" class="wrapper-categories-img" width="335" height="485" >
                    <h2>${o}</h2>
                    <p class="wrapper-categories-author">${s}</p>
                </li>
            </ul>
        </div>
    `).join("");T.insertAdjacentHTML("beforeend",t)}async function ne(){return await a.get("https://books-backend.p.goit.global/books/top-books").then(e=>{if(!e.status)throw new Error(e.status||e.statusText);return e.data})}async function se(e){return await a.get(`https://books-backend.p.goit.global/books/category?category=${e}`).then(t=>{if(!t.status)throw new Error(t.status||t.statusText);return t.data})}function ie(e){return e.map(({list_name:t,books:n})=>`<div class="category-div">
                <h3 class="category-title">${t}</h3>
                <ul class="book-list-top">
                ${$(n)}                  
                </ul>
                <button type="button" class="js-see-more-btn">See more</button>             
            </div>`).join("")}function $(e){return e.map(({_id:t,book_image:n,author:o,title:s})=>`<li class="book-list-top-item">
            <img
            class="book-cover-top"
            data-book-id="${t}"            
            src="${n}"
            alt="book-cover"
            />
            <p class="book-title-top">${s}</p>
            <p class="book-author-top">${o}</p>
        </li>`).join("")}const p=document.querySelector(".bestseller"),ce=document.querySelector(".best-categories");ne().then(e=>{ce.innerHTML=ie(e)}).catch(e=>{console.error(e),B.Notify.failure("Sorry, there are no books found. Please try again!")});p.addEventListener("click",re);function re(e){const n=e.target.parentElement.querySelector(".category-title").textContent;p.innerHTML="",se(n).then(o=>{p.innerHTML=`<h1 class='bestseller-title'>${n}</h1>
                <div class="category-wrapper">
                <ul class="books-category-list">
                ${$(o)}                  
                </ul>                             
            </div>`,p.querySelectorAll(".book-list-top-item").forEach(s=>s.style.display="block")}).catch(o=>{console.error(o),B.Notify.failure("Sorry, there are no books found. Please try again!")})}const le=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:"./img/support/1.svg"},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:"./img/support/2.svg"},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:"./img/support/3.svg"},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:"./img/support/4.svg"},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:"./img/support/5.svg"},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:"./img/support/6.svg"},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:"./img/support/7.svg"},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:"./img/support/8.svg"},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:"./img/support/9.svg"}],I=new K(".swiper-container",{slidesPerView:1,spaceBetween:10,loop:!1,pagination:{el:".swiper-pagination",clickable:!0}}),ae=document.querySelector(".swiper-wrapper");le.forEach((e,t)=>{const n=document.createElement("div");n.classList.add("swiper-slide"),t>=7&&n.classList.add("hidden-slide");const o=document.createElement("img");o.src=e.img,o.alt=e.title,o.addEventListener("click",()=>{console.log("Image clicked:",e.url),window.location.href=e.url}),n.appendChild(o);const s=document.createElement("div");s.classList.add("slide-number"),s.textContent=`0 ${t+1}`,n.appendChild(s),ae.appendChild(n)});I.updateSize();const de=document.querySelectorAll(".swiper-slide.hidden-slide"),y=document.querySelector(".show-button"),v=document.querySelector(".hide-button");y.addEventListener("click",H);v.addEventListener("click",H);function H(){de.forEach(e=>{e.classList.toggle("hidden-slide")}),I.updateSize(),y.style.display=y.style.display==="none"?"block":"none",v.style.display=v.style.display==="none"?"block":"none"}const ue=document.querySelectorAll(".book"),L=document.getElementById("bookModal");document.getElementById("bookInfoModal");ue.forEach(e=>{e.addEventListener("click",()=>{const t=getBookData();updateModalContent(t),L.style.display="block",document.addEventListener("keydown",S)})});function S(e){e.key==="Escape"&&(L.style.display="none",document.removeEventListener("keydown",S))}const pe=document.querySelector(".close-modal-btn");function ge(){L.style.display="none",document.removeEventListener("keydown",S)}pe.addEventListener("click",ge);const b=document.getElementById("shoppingButton"),k=document.getElementById("successMessage");let f=!1;b.addEventListener("click",()=>{me()});function me(){if(f)b.textContent="Add to shopping list",k.style.display="none",f=!1;else{b.textContent="Remove from the shopping list",k.textContent="Congratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.",k.style.display="block",f=!0;const e={title,author,description,image,amazon,appleBooks};he(e)}}function he(e){const t=JSON.parse(localStorage.getItem("shoppingList"))||[];t.push(e),localStorage.setItem("shoppingList",JSON.stringify(t))}fetch(`https://books-backend.p.goit.global/books/${bookId}`).then(e=>e.json()).then(e=>{const t=e;t?(renderStats(t),updateButton(bookId,t.list_name,t.author,t.description,t.book_image)):console.error("The book object is empty.")}).catch(e=>console.error(e));document.addEventListener("DOMContentLoaded",function(){const e=JSON.parse(localStorage.getItem("savedBooks"))||[],t=4;let n=Math.ceil(e.length/t),o=1;const s=document.querySelector(".pagination-content"),i=document.querySelector(".prev-page"),l=document.querySelector(".next-page"),D=document.querySelector(".page-num");function d(u){const C=(u-1)*t,Y=C+t,F=e.slice(C,Y);s.innerHTML="",F.forEach(W=>{const h=document.createElement("div");h.classList.add("kard-in"),h.innerHTML=ke(W),s.appendChild(h)}),D.textContent=u,i.disabled=u===1,l.disabled=u===n}function U(){n=Math.ceil(e.length/t),d(o)}checkLocalStorage(),d(o),i.addEventListener("click",function(){o>1&&(o--,d(o))}),l.addEventListener("click",function(){o<n&&(o++,d(o))}),U()});function ke({webformatURL:e,title:t,description:n,author:o,linkAmazon:s,linkBook:i}){return`<div class="kart-local-stor container">
    <div class="kard-in">
      <div class="img-in-kard">
        <img class="book-list-img" src="${e}" alt="Book-in-shopping-list" />
      </div>
      <div class="title-book-in-shopList">
        <h2 class="title-kard">${t}</h2>
        <div class="button-delete">
        <a class="delete-shoping-list">
          <svg class="elypse" width="28" height="28">
            <use href="./img/sprite.svg#icon-ellipse"></use>
          </svg>
          <svg class="delete-icon" width="16" height="16">
            <use href="./img/sprite.svg#icon-trash"></use>
          </svg></a>
        </div>
        <p class="under-title-kard">Hardcover fiction</p>
        <p class="deskription-book">
          ${n}
        </p>
        <div class="link-in-websites">
          <p class="author-title">${o}</p>
          <div class="link-amazon-book">
            <a class="book-link" href="${s}">
              <img class="amazon" srcset="./img/amazon1@1x.png 1x, ./img/amazon@2x.png 2x" src="./img/amazon1@1x.png" alt="amazon" />
            </a>
            <a class="book-link" href="${i}">
              <img class="book-link" srcset="./img/book-image@1x.png 1x, ./img/book-image@2x.png 2x" src="./img/book-image@1x.png" alt="book" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>`}const fe="Escape",ye=document.querySelector("[data-modal-open]"),z=document.querySelector("[data-modal-close]"),A=document.querySelector("[data-modal]");document.querySelector(".authorization_form");document.querySelector("#user_name");document.querySelector("#user_email");document.querySelector("#user_password");const N=document.querySelector(".authorization_button_submit"),c=document.querySelector('[data-action="sign-up"]'),r=document.querySelector('[data-action="sign-in"]'),P=document.querySelector(".authorization_backdrop"),O=document.querySelector("#sign-in"),E=document.querySelector("#sign-up");ye.addEventListener("click",ve);function j(e){e.currentTarget===e.target&&m()}function ve(){E.reset(),A.classList.remove("is-hidden"),document.body.style.overflow="hidden",z.addEventListener("click",m),P.addEventListener("click",j),window.addEventListener("keydown",_)}function m(){A.classList.add("is-hidden"),document.body.style.overflow="",z.removeEventListener("click",m),P.removeEventListener("click",j),window.removeEventListener("keydown",_)}function _(e){e.key===fe&&m()}c.disabled=!0;r.addEventListener("click",e=>{e.preventDefault(),c.classList.remove("active-link"),c.classList.add("desactive-link"),r.classList.remove("desactive-link"),r.classList.add("active-link"),N.textContent="Sign in",O.classList.remove("display-form"),E.classList.add("display-form"),c.disabled=!1,r.disabled=!0});c.addEventListener("click",e=>{e.preventDefault(),c.classList.add("active-link"),c.classList.remove("desactive-link"),r.classList.add("desactive-link"),r.classList.remove("active-link"),N.textContent="Sign Up",O.classList.add("display-form"),E.classList.remove("display-form"),c.disabled=!0,r.disabled=!1});const w=document.querySelector(".button-to-top");window.addEventListener("scroll",be);w.addEventListener("click",we);function be(){const e=window.pageYOffset,t=document.documentElement.clientHeight;e>t&&w.classList.add("button-to-top--visible"),e<t&&w.classList.remove("button-to-top--visible")}function we(){window.pageYOffset>0&&window.scrollTo({top:0,behavior:"smooth"})}function g(e){document.documentElement.setAttribute("data-theme",e),localStorage.setItem("theme",e),document.querySelectorAll('.common-toggle input[type="checkbox"]').forEach(function(n){e==="dark"?n.checked=!0:n.checked=!1})}const x=localStorage.getItem("theme");g(x||"light");const Le=document.querySelectorAll('.common-toggle input[type="checkbox"]');Le.forEach(function(e){e.addEventListener("change",function(t){t.target.checked?g("dark"):g("light")},!1)});const q=document.querySelector(".scroll-up"),Se=document.documentElement.scrollHeight;function Ee(){q.classList.remove("scroll-hide")}function qe(){q.classList.add("scroll-hide")}function Ce(){window.addEventListener("scroll",function(){(window.scrollY||document.documentElement.scrollTop)>.5*Se&&window.innerWidth>=768?Ee():qe()}),q.onclick=function(){window.scrollTo({top:0,left:0,behavior:"smooth"})}}Ce();function Me(){document.body.classList.add("loader-hide"),window.setTimeout(function(){document.body.classList.add("full-load"),document.body.classList.remove("loader-hide")},1e3)}window.addEventListener("load",Me);
//# sourceMappingURL=loader-eadb0eca.js.map
