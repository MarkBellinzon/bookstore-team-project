document.addEventListener('DOMContentLoaded', function () {
  const cards = JSON.parse(localStorage.getItem('savedBooks')) || [];
  const itemsPerPage = 4;
  let totalPages = Math.ceil(cards.length / itemsPerPage);
  let currentPage = 1;

  const paginationContent = document.querySelector('.pagination-content');
  const prevButton = document.querySelector('.prev-page');
  const nextButton = document.querySelector('.next-page');
  const pageNum = document.querySelector('.page-num');

  function showPage(page) {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const visibleCards = cards.slice(startIndex, endIndex);
    paginationContent.innerHTML = '';

    visibleCards.forEach(card => {
      const cardContainer = document.createElement('div');
      cardContainer.classList.add('kard-in');

      cardContainer.innerHTML = cardListMarkup(card);

      const deleteButton = cardContainer.querySelector('.delete-shoping-list');
      deleteButton.addEventListener('click', () => removeCard(card));

      paginationContent.appendChild(cardContainer);
    });

    pageNum.textContent = page;

    prevButton.disabled = page === 1;
    nextButton.disabled = page === totalPages;
  }

  function removeCard(card) {
    const updatedCards = cards.filter(item => item.title !== card.title);
    localStorage.setItem('savedBooks', JSON.stringify(updatedCards));
    updatePagination();
  }

  function updatePagination() {
    totalPages = Math.ceil(cards.length / itemsPerPage);
    showPage(currentPage);
  }
  showPage(currentPage);

  prevButton.addEventListener('click', function () {
    if (currentPage > 1) {
      currentPage--;
      showPage(currentPage);
    }
  });

  nextButton.addEventListener('click', function () {
    if (currentPage < totalPages) {
      currentPage++;
      showPage(currentPage);
    }
  });
  updatePagination();
});

function cardListMarkup({
  webformatURL,
  title,
  description,
  author,
  linkAmazon,
  linkBook,
}) {
  return `<div class="kart-local-stor container">
    <div class="kard-in">
      <div class="img-in-kard">
        <img class="book-list-img" src="${webformatURL}" alt="Book-in-shopping-list" />
      </div>
      <div class="title-book-in-shopList">
        <h2 class="title-kard">${title}</h2>
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
          ${description}
        </p>
        <div class="link-in-websites">
          <p class="author-title">${author}</p>
          <div class="link-amazon-book">
            <a class="book-link" href="${linkAmazon}">
              <img class="amazon" srcset="./img/amazon1@1x.png 1x, ./img/amazon@2x.png 2x" src="./img/amazon1@1x.png" alt="amazon" />
            </a>
            <a class="book-link" href="${linkBook}">
              <img class="book-link" srcset="./img/book-image@1x.png 1x, ./img/book-image@2x.png 2x" src="./img/book-image@1x.png" alt="book" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>`;
}
