// document.addEventListener('DOMContentLoaded', function () {
//   const cards = JSON.parse(localStorage.getItem('savedBooks')) || [];
//   const itemsPerPage = 4;
//   let totalPages = Math.ceil(cards.length / itemsPerPage);
//   let currentPage = 1;

//   const paginationContent = document.querySelector('.pagination-content');
//   const prevButton = document.querySelector('.prev-page');
//   const nextButton = document.querySelector('.next-page');
//   const pageNum = document.querySelector('.page-num');

//   function checkLocalStorage() {
//     const emptyImgTitle = document.querySelector('.empty-img-title');
//     if (!localStorage || !localStorage.getItem('savedBooks')) {
//       emptyImgTitle.innerHTML = `<p class="shoping-text">
//         This page is empty, add some books and proceed to order.
//       </p>
//       <img
//         class="img-shoping-list"
//         srcset="./img/IMG_9606@1x.png 1x, ./img/IMG_9606@2x.png 2x"
//         src="./img/IMG_96061@1x.png"
//         alt="Books"
//         width="322"
//       />`;
//       paginationContent.style.display = 'none';
//     } else {
//       emptyImgTitle.innerHTML = '';
//       paginationContent.style.display = 'block';
//     }
//   }
//   checkLocalStorage();

//   function showPage(page) {
//     const startIndex = (page - 1) * itemsPerPage;
//     const endIndex = startIndex + itemsPerPage;
//     const visibleCards = cards.slice(startIndex, endIndex);
//     paginationContent.innerHTML = '';

//     visibleCards.forEach(card => {
//       const cardContainer = document.createElement('div');
//       cardContainer.classList.add('kard-in');

//       const { webformatURL, title, description, author, linkAmazon, linkBook } =
//         card;

//       cardContainer.innerHTML = cardListMarkup({
//         webformatURL,
//         title,
//         description,
//         author,
//         linkAmazon,
//         linkBook,
//       });

//       paginationContent.appendChild(cardContainer);
//     });

//     pageNum.textContent = page;

//     prevButton.disabled = page === 1;
//     nextButton.disabled = page === totalPages;
//   }

//   function updatePagination() {
//     totalPages = Math.ceil(cards.length / itemsPerPage);
//     showPage(currentPage);
//   }
//   checkLocalStorage();
//   showPage(currentPage);

//   prevButton.addEventListener('click', function () {
//     if (currentPage > 1) {
//       currentPage--;
//       showPage(currentPage);
//     }
//   });

//   nextButton.addEventListener('click', function () {
//     if (currentPage < totalPages) {
//       currentPage++;
//       showPage(currentPage);
//     }
//   });
//   updatePagination();
// });
// function cardListMarkup({
//   webformatURL,
//   title,
//   description,
//   author,
//   linkAmazon,
//   linkBook,
// }) {
//   return `<div class="kart-local-stor container">
//     <div class="kard-in">
//       <div class="img-in-kard">
//         <img class="book-list-img" src="${webformatURL}" alt="Book-in-shopping-list" />
//       </div>
//       <div class="title-book-in-shopList">
//         <h2 class="title-kard">${title}</h2>
//         <div class="button-delete">
//           <svg class="elypse" width="28" height="28">
//             <use href="./img/sprite.svg#icon-ellipse"></use>
//           </svg>
//           <svg class="delete-icon" width="16" height="16">
//             <use href="./img/sprite.svg#icon-trash"></use>
//           </svg>
//         </div>
//         <p class="under-title-kard">Hardcover fiction</p>
//         <p class="deskription-book">
//           ${description}
//         </p>
//         <div class="link-in-websites">
//           <p class="author-title">${author}</p>
//           <div class="link-amazon-book">
//             <a class="book-link" href="${linkAmazon}">
//               <img class="amazon" srcset="./img/amazon1@1x.png 1x, ./img/amazon@2x.png 2x" src="./img/amazon1@1x.png" alt="amazon" />
//             </a>
//             <a class="book-link" href="${linkBook}">
//               <img class="book-link" srcset="./img/book-image@1x.png 1x, ./img/book-image@2x.png 2x" src="./img/book-image@1x.png" alt="book" />
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>`;
// }
