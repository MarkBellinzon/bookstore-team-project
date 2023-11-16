import{a as d,N as U,S as K}from"./vendor-1d124a32.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();d.defaults.baseURL="https://books-backend.p.goit.global/books";async function V(e){try{const{data:t}=await d.get("/category-list",{params:{list_name:e}});return t}catch(t){console.log(t.message)}}async function Z(e){try{const t=await d.get(`/category?category=${e}`);return console.log(e),t.data}catch(t){console.log(t.message)}}const G=document.querySelector(".list-categories"),Q=document.querySelector("h1"),N=document.querySelector(".wrapper-categories"),X=document.querySelector(".best-categories"),ee=document.querySelector(".bestseller-title"),I=document.querySelector(".container.bestseller");function te(e,t){const n=e.textContent.split(" "),o=n.pop(),s=n.join(" ")+` <span style="color: ${t};">${o}</span>`;e.innerHTML=s}V().then(e=>{e&&oe(e)}).catch(e=>{console.log(e.message)});function oe(e){const t=e.map(({list_name:o})=>`
        <li class="categories-item">${o}</li>
    `).join("");G.insertAdjacentHTML("beforeend",t),document.querySelectorAll(".categories-item").forEach(o=>{o.addEventListener("click",ne)})}function ne(e){const t=e.target.textContent;N.innerHTML="",X.innerHTML="",ee.innerHTML="",Q.innerHTML="",I.innerHTML="";const n=document.createElement("h1");n.textContent=t,n.classList.add("h1category"),I.appendChild(n),te(n,"#4F2EE8"),Z(t).then(o=>{o&&se(o)}).catch(o=>{console.log(o.message)})}function se(e){const t=e.map(({book_image:n,title:o,author:s})=>`
        <div>
            <ul class="list-wrapper-categories">
                <li class="wrapper-categories-item">
                    <img src="${n}" alt="${o}" class="wrapper-categories-img" width="335" height="485" >
                    <h2>${o}</h2>
                    <p class="wrapper-categories-author">${s}</p>
                </li>
            </ul>
        </div>
    `).join("");N.insertAdjacentHTML("beforeend",t)}async function ie(){return await d.get("https://books-backend.p.goit.global/books/top-books").then(e=>{if(!e.status)throw new Error(e.status||e.statusText);return e.data})}async function ce(e){return await d.get(`https://books-backend.p.goit.global/books/category?category=${e}`).then(t=>{if(!t.status)throw new Error(t.status||t.statusText);return t.data})}function re(e){return e.map(({list_name:t,books:n})=>`<div class="category-div">
                <h3 class="category-title">${t}</h3>
                <ul class="book-list-top">
                ${P(n)}                  
                </ul>
                <button type="button" class="js-see-more-btn">See more</button>             
            </div>`).join("")}function P(e){return e.map(({_id:t,book_image:n,author:o,title:s})=>`<li class="book-list-top-item">
      <div class="thumb">      
        <img
          class="book-cover-top"
          data-book-id="${t}"
          src="${n}"
          alt="book-cover"
        />
        <div class="anim-card">
          <p class="quick-view">quick view</p>
        </div>
      </div>
            <p class="book-title-top">${s}</p>
            <p class="book-author-top">${o}</p>
          </li>`).join("")}const m=document.querySelector(".bestseller"),le=document.querySelector(".best-categories");ie().then(e=>{le.innerHTML=re(e)}).catch(e=>{console.error(e),U.Notify.failure("Sorry, there are no books found. Please try again!")});m.addEventListener("click",ae);function ae(e){const t=e.target;if(!e.target.classList.contains("js-see-more-btn"))return;const n=t.parentElement.querySelector(".category-title").textContent;m.innerHTML="",ce(n).then(o=>{const s=n.split(" "),i=s.pop(),c=s.join(" ");m.innerHTML=`<h1 class='bestseller-title'>${c} <span style='color: #4F2EE8'>${i}</span></h1>
                <div class="category-wrapper">
                <ul class="books-category-list">
                ${P(o)}                  
                </ul>                             
            </div>`,m.querySelectorAll(".book-list-top-item").forEach(y=>y.style.display="block")}).catch(o=>{console.error(o),U.Notify.failure("Sorry, there are no books found. Please try again!")})}const de=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:new URL("./img/support/logo1.png",self.location).href},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:new URL("./img/support/logo2.png",self.location).href},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:new URL("./img/support/logo3.png",self.location).href},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:new URL("./img/support/logo4.png",self.location).href},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:new URL("./img/support/logo5.png",self.location).href},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:new URL("./img/support/logo6.png",self.location).href},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:new URL("./img/support/logo7.png",self.location).href},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:new URL("./img/support/logo8.png",self.location).href},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:new URL("./img/support/logo9.png",self.location).href}],z=new K(".swiper-container",{slidesPerView:1,spaceBetween:15,loop:!1,pagination:{el:".swiper-pagination",clickable:!0}}),ue=document.querySelector(".swiper-wrapper");de.forEach((e,t)=>{const n=document.createElement("div");n.classList.add("swiper-slide"),t>=6&&n.classList.add("hidden-slide");const o=document.createElement("img");o.src=e.img,o.alt=e.title,o.addEventListener("click",()=>{console.log("Image clicked:",e.url),window.open(e.url,"_blank")}),n.appendChild(o);const s=document.createElement("div");s.classList.add("slide-number"),s.textContent=`0 ${t+1}`,n.appendChild(s),ue.appendChild(n)});z.updateSize();const pe=document.querySelectorAll(".swiper-slide.hidden-slide"),L=document.querySelector(".show-button"),S=document.querySelector(".hide-button");L.addEventListener("click",A);S.addEventListener("click",A);function A(){pe.forEach(e=>{e.classList.toggle("hidden-slide")}),z.updateSize(),L.style.display=L.style.display==="none"?"block":"none",S.style.display=S.style.display==="none"?"block":"none"}const ge=document.querySelectorAll(".book"),f=document.getElementById("bookModal");document.getElementById("bookInfoModal");let E;ge.forEach(e=>{e.addEventListener("click",()=>{E=getBookData(),updateModalContent(E),f.style.display="block",document.addEventListener("keydown",M)})});const me=document.querySelector(".best-categories");me.addEventListener("click",e=>{const t=e.target.closest(".book-cover-top");if(t){const n=t.dataset.id;fetchBookData(n)}});f.classList.add("modal-open");function M(e){e.key==="Escape"&&(f.style.display="none",document.removeEventListener("keydown",M))}const he=document.querySelector(".close-modal-btn");function fe(){f.style.display="none",document.removeEventListener("keydown",M)}he.addEventListener("click",fe);const q=document.getElementById("shoppingButton"),b=document.getElementById("successMessage");let w=!1;q.addEventListener("click",()=>{ke()});function ke(){w?(q.textContent="Add to shopping list",b.style.display="none",w=!1):(q.textContent="Remove from the shopping list",b.textContent="Congratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.",b.style.display="block",w=!0,ye(E))}function ye(e){const t=JSON.parse(localStorage.getItem("shoppingList"))||[];t.push(e),localStorage.setItem("shoppingList",JSON.stringify(t))}document.addEventListener("DOMContentLoaded",function(){const e=JSON.parse(localStorage.getItem("savedBooks"))||[],t=4;let n=Math.ceil(e.length/t),o=1;const s=document.querySelector(".pagination-content"),i=document.querySelector(".prev-page"),c=document.querySelector(".next-page"),y=document.querySelector(".page-num");function u(a){const p=(a-1)*t,v=p+t,J=e.slice(p,v);s.innerHTML="",J.forEach($=>{const g=document.createElement("div");g.classList.add("kard-in"),g.innerHTML=ve($),g.querySelector(".delete-shoping-list").addEventListener("click",()=>W($)),s.appendChild(g)}),y.textContent=a,i.disabled=a===1,c.disabled=a===n}function W(a){const p=e.filter(v=>v.title!==a.title);localStorage.setItem("savedBooks",JSON.stringify(p)),T()}function T(){n=Math.ceil(e.length/t),u(o)}u(o),i.addEventListener("click",function(){o>1&&(o--,u(o))}),c.addEventListener("click",function(){o<n&&(o++,u(o))}),T()});function ve({webformatURL:e,title:t,description:n,author:o,linkAmazon:s,linkBook:i}){return`<div class="kart-local-stor container">
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
  </div>`}const be="Escape",we=document.querySelector("[data-modal-open]"),O=document.querySelector("[data-modal-close]"),R=document.querySelector("[data-modal]");document.querySelector(".authorization_form");document.querySelector("#user_name");document.querySelector("#user_email");document.querySelector("#user_password");const j=document.querySelector(".authorization_button_submit"),r=document.querySelector('[data-action="sign-up"]'),l=document.querySelector('[data-action="sign-in"]'),D=document.querySelector(".authorization_backdrop"),_=document.querySelector("#sign-in"),B=document.querySelector("#sign-up");we.addEventListener("click",Le);function F(e){e.currentTarget===e.target&&k()}function Le(){B.reset(),R.classList.remove("is-hidden"),document.body.style.overflow="hidden",O.addEventListener("click",k),D.addEventListener("click",F),window.addEventListener("keydown",Y)}function k(){R.classList.add("is-hidden"),document.body.style.overflow="",O.removeEventListener("click",k),D.removeEventListener("click",F),window.removeEventListener("keydown",Y)}function Y(e){e.key===be&&k()}r.disabled=!0;l.addEventListener("click",e=>{e.preventDefault(),r.classList.remove("active-link"),r.classList.add("desactive-link"),l.classList.remove("desactive-link"),l.classList.add("active-link"),j.textContent="Sign in",_.classList.remove("display-form"),B.classList.add("display-form"),r.disabled=!1,l.disabled=!0});r.addEventListener("click",e=>{e.preventDefault(),r.classList.add("active-link"),r.classList.remove("desactive-link"),l.classList.add("desactive-link"),l.classList.remove("active-link"),j.textContent="Sign Up",_.classList.add("display-form"),B.classList.remove("display-form"),r.disabled=!0,l.disabled=!1});const C=document.querySelector(".button-to-top");window.addEventListener("scroll",Se);C.addEventListener("click",Ee);function Se(){const e=window.pageYOffset,t=document.documentElement.clientHeight;e>t&&C.classList.add("button-to-top--visible"),e<t&&C.classList.remove("button-to-top--visible")}function Ee(){window.pageYOffset>0&&window.scrollTo({top:0,behavior:"smooth"})}function h(e){document.documentElement.setAttribute("data-theme",e),localStorage.setItem("theme",e),document.querySelectorAll('.common-toggle input[type="checkbox"]').forEach(function(n){e==="dark"?n.checked=!0:n.checked=!1})}const H=localStorage.getItem("theme");h(H||"light");const qe=document.querySelectorAll('.common-toggle input[type="checkbox"]');qe.forEach(function(e){e.addEventListener("change",function(t){t.target.checked?h("dark"):h("light")},!1)});const x=document.querySelector(".scroll-up"),Ce=document.documentElement.scrollHeight;function Me(){x.classList.remove("scroll-hide")}function Be(){x.classList.add("scroll-hide")}function xe(){window.addEventListener("scroll",function(){(window.scrollY||document.documentElement.scrollTop)>.5*Ce&&window.innerWidth>=768?Me():Be()}),x.onclick=function(){window.scrollTo({top:0,left:0,behavior:"smooth"})}}xe();function Te(){document.body.classList.add("loader-hide"),window.setTimeout(function(){document.body.classList.add("full-load"),document.body.classList.remove("loader-hide")},1e3)}window.addEventListener("load",Te);
//# sourceMappingURL=loader-e422eb4f.js.map
