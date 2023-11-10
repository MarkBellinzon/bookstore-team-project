// const bookElements = document.querySelectorAll('.book');
// const modal = document.getElementById('bookModal');
// const bookInfo = document.getElementById('bookInfoModal');

// bookElements.forEach(bookElement => {
//   bookElement.addEventListener('click', () => {
//     const bookData = getBookData();
//     updateModalContent(bookData);
//     modal.style.display = 'block';
//     document.addEventListener('keydown', handleEscKeyPress);
//   });
// });

// function updateModalContent(bookData) {
//   const title = bookData.list_name;
//   const author = bookData.author;
//   const description = bookData.description;
//   const image = bookData.book_image;

//   bookInfoModal.innerHTML = `
//   <img class="modal-img" src="${image}" alt="${title}">
//     <h3 class="modal-title">${title}</h3>
//     <p class="modal-author">Author: ${author}</p>
//     <p class="modal-description">${description}</p>
//   `;
// }

// function handleEscKeyPress(event) {
//   if (event.key === 'Escape' || event.keyCode === 27) {
//     modal.style.display = 'none';
//     document.removeEventListener('keydown', handleEscKeyPress);
//   }
// }

// const closeButton = document.querySelector('.close-modal-btn');

// function closeModal() {
//   modal.style.display = 'none';
//   document.removeEventListener('keydown', handleEscKeyPress);
// }

// closeButton.addEventListener('click', closeModal);

// // Обробник натискання на кнопку додавання в корзину
// const shoppingButton = document.getElementById('shoppingButton');
// const successMessage = document.getElementById('successMessage');
// let inShoppingList = false;

// shoppingButton.addEventListener('click', () => {
//   if (inShoppingList) {
//     shoppingButton.textContent = 'Add to shopping list';
//     successMessage.style.display = 'none';
//     inShoppingList = false;
//   } else {
//     shoppingButton.textContent = 'Remove from the shopping list';
//     successMessage.textContent =
//       'Congratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.';
//     successMessage.style.display = 'block';
//     inShoppingList = true;
//   }
// });
