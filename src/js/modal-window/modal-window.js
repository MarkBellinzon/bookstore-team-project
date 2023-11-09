// const modal = document.querySelector('#modal');
// const isLoggedIn = localStorage.getItem('isLoggedIn');
// modal.addEventListener("open", () => {
//     if (isLoggedIn === 'true') {
//         const addButton = modal.querySelector(".add-to-list");
//         addButton.style.display = "block";
//     } else {
//         const addButton = modal.querySelector(".add-to-list");
//         addButton.style.display = "none";
//     }
// });

// const bookElements = document.querySelectorAll('.book');


// const modal = document.getElementById('bookModal');
// const bookInfo = document.getElementById('bookInfo');


// bookElements.forEach((bookElement) => {
//   bookElement.addEventListener('click', () => {

//     const bookData = getBookData(); 

//     updateModalContent(bookData);

//       modal.style.display = 'block';
//        document.addEventListener('keydown', handleEscKeyPress);
//   });
// });

// function updateModalContent(bookData) {
//     const title = bookData.title;
//     const author = bookData.author;
//     const description =bookData.description;
//     const image = bookData.image;
     
//     bookInfo.innerHTML =
//         `<h2>${title}</h2>
//         <p>Author: ${author}</p>
//         <p>${description}</p>
//         <img src="${image}" alt="${title}">
//         `;
// }

// function handleEscKeyPress(event) {
//   if (event.key === 'Escape') {
//     modal.style.display = 'none';
//     document.removeEventListener('keydown', handleEscKeyPress);
//   }
// }

// const closeButton = document.querySelector('.close');

// closeButton.addEventListener('click', () => {
//   modal.style.display = 'none';
//   document.removeEventListener('keydown', handleEscKeyPress);
// });