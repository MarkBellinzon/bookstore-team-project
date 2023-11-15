import{a as d,N as B,S as ee}from"./vendor-5057f8db.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function s(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerpolicy&&(i.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?i.credentials="include":n.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(n){if(n.ep)return;n.ep=!0;const i=s(n);fetch(n.href,i)}})();d.defaults.baseURL="https://books-backend.p.goit.global/books";async function te(e){try{const{data:t}=await d.get("/category-list",{params:{list_name:e}});return t}catch(t){console.log(t.message)}}async function oe(e){try{const t=await d.get(`/category?category=${e}`);return console.log(e),t.data}catch(t){console.log(t.message)}}const ne=document.querySelector(".list-categories"),x=document.querySelector("h1"),$=document.querySelector(".wrapper-categories"),se=document.querySelector(".best-categories"),ie=document.querySelector(".bestseller-title"),re=document.querySelector(".container.bestseller");function ce(e,t){const s=e.textContent.split(" "),o=s.pop(),n=s.join(" ")+` <span style="color: ${t};">${o}</span>`;e.innerHTML=n}te().then(e=>{e&&ae(e)}).catch(e=>{console.log(e.message)});function ae(e){const t=e.map(({list_name:o})=>`
        <li class="categories-item">${o}</li>
    `).join("");ne.insertAdjacentHTML("beforeend",t),document.querySelectorAll(".categories-item").forEach(o=>{o.addEventListener("click",le)})}function le(e){const t=e.target.textContent;$.innerHTML="",se.innerHTML="",ie.innerHTML="",x.innerHTML="",re.innerHTML="";const s=document.createElement("h1");s.textContent=t,s.classList.add("container"),x.appendChild(s),ce(s,"#4F2EE8"),oe(t).then(o=>{o&&de(o)}).catch(o=>{console.log(o.message)})}function de(e){const t=e.map(({book_image:s,title:o,author:n})=>`
        <div>
            <ul class="list-wrapper-categories">
                <li class="wrapper-categories-item">
                    <img src="${s}" alt="${o}" class="wrapper-categories-img" width="335" height="485" >
                    <h2>${o}</h2>
                    <p class="wrapper-categories-author">${n}</p>
                </li>
            </ul>
        </div>
    `).join("");$.insertAdjacentHTML("beforeend",t)}async function ue(){return await d.get("https://books-backend.p.goit.global/books/top-books").then(e=>{if(!e.status)throw new Error(e.status||e.statusText);return e.data})}async function me(e){return await d.get(`https://books-backend.p.goit.global/books/category?category=${e}`).then(t=>{if(!t.status)throw new Error(t.status||t.statusText);return t.data})}function pe(e){return e.map(({list_name:t,books:s})=>`<div class="category-div">
                <h3 class="category-title">${t}</h3>
                <ul class="book-list-top">
                ${I(s)}                  
                </ul>
                <button type="button" class="js-see-more-btn">See more</button>             
            </div>`).join("")}function I(e){return e.map(({_id:t,book_image:s,author:o,title:n})=>`<li class="book-list-top-item">
            <img
            class="book-cover-top"
            data-book-id="${t}"            
            src="${s}"
            alt="book-cover"
            />
            <p class="book-title-top">${n}</p>
            <p class="book-author-top">${o}</p>
        </li>`).join("")}const p=document.querySelector(".bestseller"),ge=document.querySelector(".best-categories");ue().then(e=>{ge.innerHTML=pe(e)}).catch(e=>{console.error(e),B.Notify.failure("Sorry, there are no books found. Please try again!")});p.addEventListener("click",he);function he(e){const s=e.target.parentElement.querySelector(".category-title").textContent;p.innerHTML="",me(s).then(o=>{p.innerHTML=`<h1 class='bestseller-title'>${s}</h1>
                <div class="category-wrapper">
                <ul class="books-category-list">
                ${I(o)}                  
                </ul>                             
            </div>`,p.querySelectorAll(".book-list-top-item").forEach(n=>n.style.display="block")}).catch(o=>{console.error(o),B.Notify.failure("Sorry, there are no books found. Please try again!")})}const ke=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:"./img/support/1.svg"},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:"./img/support/2.svg"},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:"./img/support/3.svg"},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:"./img/support/4.svg"},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:"./img/support/5.svg"},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:"./img/support/6.svg"},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:"./img/support/7.svg"},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:"./img/support/8.svg"},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:"./img/support/9.svg"}],H=new ee(".swiper-container",{slidesPerView:1,spaceBetween:10,loop:!1,pagination:{el:".swiper-pagination",clickable:!0}}),ye=document.querySelector(".swiper-wrapper");ke.forEach((e,t)=>{const s=document.createElement("div");s.classList.add("swiper-slide"),t>=7&&s.classList.add("hidden-slide");const o=document.createElement("img");o.src=e.img,o.alt=e.title,o.addEventListener("click",()=>{console.log("Image clicked:",e.url),window.location.href=e.url}),s.appendChild(o);const n=document.createElement("div");n.classList.add("slide-number"),n.textContent=`0 ${t+1}`,s.appendChild(n),ye.appendChild(s)});H.updateSize();const fe=document.querySelectorAll(".swiper-slide.hidden-slide"),b=document.querySelector(".show-button"),w=document.querySelector(".hide-button");b.addEventListener("click",z);w.addEventListener("click",z);function z(){fe.forEach(e=>{e.classList.toggle("hidden-slide")}),H.updateSize(),b.style.display=b.style.display==="none"?"block":"none",w.style.display=w.style.display==="none"?"block":"none"}const ve=document.querySelectorAll(".book"),S=document.getElementById("bookModal");document.getElementById("bookInfoModal");ve.forEach(e=>{e.addEventListener("click",()=>{const t=getBookData();updateModalContent(t),S.style.display="block",document.addEventListener("keydown",C)})});function C(e){e.key==="Escape"&&(S.style.display="none",document.removeEventListener("keydown",C))}const be=document.querySelector(".close-modal-btn");function we(){S.style.display="none",document.removeEventListener("keydown",C)}be.addEventListener("click",we);const y=document.getElementById("shoppingButton"),f=document.getElementById("successMessage");let v=!1;y.addEventListener("click",()=>{v?(y.textContent="Add to shopping list",f.style.display="none",v=!1):(y.textContent="Remove from the shopping list",f.textContent="Congratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.",f.style.display="block",v=!0)});fetch("https://books-backend.p.goit.global/books").then(e=>{if(!e.ok)throw new Error("Network response was not ok");return e.json()}).then(e=>{updateModalContent(e)}).catch(e=>{console.error("There has been a problem with your fetch operation:",e)});document.addEventListener("DOMContentLoaded",function(){const e=JSON.parse(localStorage.getItem("savedBooks"))||[],t=4;let s=Math.ceil(e.length/t),o=1;const n=document.querySelector(".pagination-content"),i=document.querySelector(".prev-page"),a=document.querySelector(".next-page"),R=document.querySelector(".page-num");function u(m){const T=(m-1)*t,F=T+t,K=e.slice(T,F);n.innerHTML="",K.forEach(W=>{const k=document.createElement("div");k.classList.add("kard-in");const{webformatURL:G,title:V,description:J,author:Z,linkAmazon:Q,linkBook:X}=W;k.innerHTML=Le({webformatURL:G,title:V,description:J,author:Z,linkAmazon:Q,linkBook:X}),n.appendChild(k)}),R.textContent=m,i.disabled=m===1,a.disabled=m===s}function Y(){s=Math.ceil(e.length/t),u(o)}checkLocalStorage(),u(o),i.addEventListener("click",function(){o>1&&(o--,u(o))}),a.addEventListener("click",function(){o<s&&(o++,u(o))}),Y()});function Le({webformatURL:e,title:t,description:s,author:o,linkAmazon:n,linkBook:i}){return`<div class="kart-local-stor container">
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
          ${s}
        </p>
        <div class="link-in-websites">
          <p class="author-title">${o}</p>
          <div class="link-amazon-book">
            <a class="book-link" href="${n}">
              <img class="amazon" srcset="./img/amazon1@1x.png 1x, ./img/amazon@2x.png 2x" src="./img/amazon1@1x.png" alt="amazon" />
            </a>
            <a class="book-link" href="${i}">
              <img class="book-link" srcset="./img/book-image@1x.png 1x, ./img/book-image@2x.png 2x" src="./img/book-image@1x.png" alt="book" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>`}const Ee="Escape",Se=document.querySelector("[data-modal-open]"),A=document.querySelector("[data-modal-close]"),P=document.querySelector("[data-modal]");document.querySelector(".authorization_form");document.querySelector("#user_name");document.querySelector("#user_email");document.querySelector("#user_password");const N=document.querySelector(".authorization_button_submit"),Ce=document.querySelector(".sign-up-button-burger"),r=document.querySelector('[data-action="sign-up"]'),c=document.querySelector('[data-action="sign-in"]'),j=document.querySelector(".authorization_backdrop"),D=document.querySelector("#sign-in"),M=document.querySelector("#sign-up");Se.addEventListener("click",U);Ce.addEventListener("click",U);function O(e){e.currentTarget===e.target&&h()}function U(){M.reset(),P.classList.remove("is-hidden"),document.body.style.overflow="hidden",A.addEventListener("click",h),j.addEventListener("click",O),window.addEventListener("keydown",_)}function h(){P.classList.add("is-hidden"),document.body.style.overflow="",A.removeEventListener("click",h),j.removeEventListener("click",O),window.removeEventListener("keydown",_)}function _(e){e.key===Ee&&h()}r.disabled=!0;c.addEventListener("click",e=>{e.preventDefault(),r.classList.remove("active-link"),r.classList.add("desactive-link"),c.classList.remove("desactive-link"),c.classList.add("active-link"),N.textContent="Sign in",D.classList.remove("display-form"),M.classList.add("display-form"),r.disabled=!1,c.disabled=!0});r.addEventListener("click",e=>{e.preventDefault(),r.classList.add("active-link"),r.classList.remove("desactive-link"),c.classList.add("desactive-link"),c.classList.remove("active-link"),N.textContent="Sign Up",D.classList.add("display-form"),M.classList.remove("display-form"),r.disabled=!0,c.disabled=!1});const L=document.querySelector(".button-to-top");window.addEventListener("scroll",Me);L.addEventListener("click",qe);function Me(){const e=window.pageYOffset,t=document.documentElement.clientHeight;e>t&&L.classList.add("button-to-top--visible"),e<t&&L.classList.remove("button-to-top--visible")}function qe(){window.pageYOffset>0&&window.scrollTo({top:0,behavior:"smooth"})}const E={LIGHT:"light-theme",DARK:"dark-theme"},g=document.querySelector("body"),l=document.querySelector(".js-switch-theme");l.addEventListener("click",Te);function Te(e){e.currentTarget.checked?(g.classList.add("dark-theme"),localStorage.setItem("saveTheme",E.DARK),l.checked=!0):(g.classList.remove("dark-theme"),localStorage.setItem("saveTheme",E.LIGHT),l.checked=!1)}const xe=localStorage.getItem("saveTheme");xe===E.LIGHT?(g.classList.remove("dark-theme"),l.checked=!1):(g.classList.add("dark-theme"),l.checked=!0);const q=document.querySelector(".scroll-up"),Be=document.documentElement.scrollHeight;function $e(){q.classList.remove("scroll-hide")}function Ie(){q.classList.add("scroll-hide")}function He(){window.addEventListener("scroll",function(){(window.scrollY||document.documentElement.scrollTop)>.5*Be&&window.innerWidth>=768?$e():Ie()}),q.onclick=function(){window.scrollTo({top:0,left:0,behavior:"smooth"})}}He();function ze(){document.body.classList.add("loader-hide"),window.setTimeout(function(){document.body.classList.add("full-load"),document.body.classList.remove("loader-hide")},1e3)}window.addEventListener("load",ze);
//# sourceMappingURL=loader-6f6c9385.js.map
