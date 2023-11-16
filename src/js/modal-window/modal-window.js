const bookElements = document.querySelectorAll('.book');
const modal = document.getElementById('bookModal');
const bookInfo = document.getElementById('bookInfoModal');
let currentBookData;

bookElements.forEach(bookElement => {
  bookElement.addEventListener('click', () => {
    currentBookData = getBookData();
    updateModalContent(currentBookData);
    modal.style.display = 'block';
    document.addEventListener('keydown', handleEscKeyPress);
  });
});

const bestCategories = document.querySelector('.best-categories');

bestCategories.addEventListener('click', event => {
  const bookCoverTop = event.target.closest('.book-cover-top');

  if (bookCoverTop) {
    const bookId = bookCoverTop.dataset.id;
    fetchBookData(bookId);
  }
});
modal.classList.add('modal-open');

function updateModalContentNew(bookData) {
  const title = bookData.list_name;
  const author = bookData.author;
  const description = bookData.description;
  const image = bookData.book_image;

  const links = new Map(bookData.buy_links.map(link => [link.name, link.url]));
  const amazon = links.get('Amazon');
  const appleBooks = links.get('Apple Books');

  bookInfo.innerHTML = `
    <img class="modal-img" src="${image}" alt="${title}">
    <h3 class="modal-title">${title}</h3>
    <p class="modal-author">Author: ${author}</p>
    <p class="modal-description">${description}</p>
    <a href="${amazon}" target="_blank" rel="noopener noreferrer" class="modal-link">Amazon</a>
    <a href="${appleBooks}" target="_blank" rel="noopener noreferrer" class="modal-link">Apple Books</a>
  `;
}

function handleEscKeyPress(event) {
  if (event.key === 'Escape') {
    modal.style.display = 'none';
    document.removeEventListener('keydown', handleEscKeyPress);
  }
}

const closeButton = document.querySelector('.close-modal-btn');

function closeModal() {
  modal.style.display = 'none';
  document.removeEventListener('keydown', handleEscKeyPress);
}

closeButton.addEventListener('click', closeModal);

// function openModal() {
//   document.getElementById('modalOverlay').style.display = 'block';
//   modalOverlay.style.display = 'none';
// }

// Обробник натискання на кнопку додавання в Shoping List
const shoppingButton = document.getElementById('shoppingButton');
const successMessage = document.getElementById('successMessage');
let inShoppingList = false;

shoppingButton.addEventListener('click', () => {
  toggleShoppingList();
});

function toggleShoppingList() {
  if (inShoppingList) {
    shoppingButton.textContent = 'Add to shopping list';
    successMessage.style.display = 'none';
    inShoppingList = false;
  } else {
    shoppingButton.textContent = 'Remove from the shopping list';
    successMessage.textContent =
      'Congratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.';
    successMessage.style.display = 'block';
    inShoppingList = true;

    const selectedBook = currentBookData;

    // Додав обрану книгу у localStorage
    addToShoppingList(selectedBook);
  }
}
function addToShoppingList(book) {
  const shoppingList = JSON.parse(localStorage.getItem('shoppingList')) || [];
  shoppingList.push(book);
  localStorage.setItem('shoppingList', JSON.stringify(shoppingList));
}

function removeFromShoppingList(book) {
  const shoppingList = JSON.parse(localStorage.getItem('shoppingList')) || [];
  const updatedShoppingList = shoppingList.filter(
    item => item.title !== book.title
  );
  localStorage.setItem('shoppingList', JSON.stringify(updatedShoppingList));
}
