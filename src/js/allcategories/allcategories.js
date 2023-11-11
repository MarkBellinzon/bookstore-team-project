import { getNameCategories, getBooksCategory } from "./fetchcategories";

const listCategories = document.querySelector('.list-categories');
const listBooks = document.querySelector(".wrapper-categories");

// Отримання всіх категорій для сайдбара
getNameCategories().then(data => {
    if (data) {
        createMarkup(data);
    } 
})
    .catch(error => {
    console.log(error.message);
});

// Відмальовка категорій в сайдбарі
function createMarkup(arr) {
    const markup = arr.map(({ list_name }) => `
        <li class="categories-item">${list_name}</li>
    `).join("");
    listCategories.insertAdjacentHTML('beforeend', markup);

    // Прослуховувач на всі li елементи
    const listItems = document.querySelectorAll('.categories-item');
    listItems.forEach(item => {
        item.addEventListener('click', handleListItemClick);
    });
}

// Отримання книг по категоріях та створення Н1
function handleListItemClick(event) {
    const categoryName = event.target.textContent;

    listBooks.innerHTML = ''; // Очищення попередньої категорії
    const h1Element = document.createElement('h1');
    h1Element.textContent = categoryName;
    listBooks.appendChild(h1Element);

    getBooksCategory(categoryName).then(data => {
           if (data) {
               createMarkupBooks(data);
    } 
    })
    .catch(error => {
        console.log(error.message);
    });    
}

// Відмальовка книг окремої категорії
function createMarkupBooks(arr) {
        const markup = arr.map(({ book_image, title, author }) => `
        <div>
            <ul class="list-wrapper-categories">
                <li>
                    <img src="${book_image}" alt="">
                    <h2>${title}</h2>
                    <p>${author}</p>
                </li>
            </ul>
        </div>
    `).join("");
    listBooks.insertAdjacentHTML('beforeend', markup);
}





