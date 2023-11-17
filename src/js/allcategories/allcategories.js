import { getNameCategories, getBooksCategory } from "./fetchcategories";

const listCategories = document.querySelector('.list-categories');
const h1El = document.querySelector('h1');
const listBooks = document.querySelector(".wrapper-categories");
const booksCategoryDiv = document.querySelector('.best-categories'); 
const bestSellerH1 = document.querySelector('.bestseller-title');
const bestsellerContainer = document.querySelector('.container.bestseller');


// Function to change color of the last word in an h1 element
function changeLastWordColor(element, color) {
    const words = element.textContent.split(' ');
    const lastWord = words.pop();
    const newContent = words.join(' ') + ` <span style="color: ${color};">${lastWord}</span>`;
    element.innerHTML = newContent;
}

// Fetch all categories for the sidebar
getNameCategories().then(data => {
    if (data) {
        createMarkup(data);
    } 
}).catch(error => {
    console.log(error.message);
});

// Render categories in the sidebar
function createMarkup(arr) {
    const markup = arr.map(({ list_name }) => `
        <li class="categories-item">${list_name}</li>
    `).join("");
    listCategories.insertAdjacentHTML('beforeend', markup);

    // Add event listener to each li element
    const listItems = document.querySelectorAll('.categories-item');
    listItems.forEach(item => {
        item.addEventListener('click', handleListItemClick);
    });
}



// Handle click on a category and render books
function handleListItemClick(event) {
    // Remove 'active' class from all li elements
    const listItems = document.querySelectorAll('.categories-item');
    listItems.forEach(item => {
        item.classList.remove('active');
    });

    // Add 'active' class to the clicked li element
    event.target.classList.add('active');

    const categoryName = event.target.textContent;
    listBooks.innerHTML = ''; // Clear previous category
    booksCategoryDiv.innerHTML = ''; // Clear bestseller category
    bestSellerH1.innerHTML = ''; // Clear H1 bestseller category
    h1El.innerHTML = ''; // Clear H1 category
    bestsellerContainer.innerHTML = ''; // Clear Caategory See More

    const h1Element = document.createElement('h1');
    h1Element.textContent = categoryName;
    h1Element.classList.add('h1category');
    bestsellerContainer.appendChild(h1Element);

    // Call the function to change the color of the last word in the h1 element
    changeLastWordColor(h1Element, '#4F2EE8');

    // Fetch books for the selected category
    getBooksCategory(categoryName).then(data => {
        if (data) {
            createMarkupBooks(data);
        } 
    }).catch(error => {
        console.log(error.message);
    });    
}


// Render books for a specific category
function createMarkupBooks(arr) {
    const markup = arr.map(({ book_image, title, author }) => `
        <div>
            <ul class="list-wrapper-categories">
                <li class="wrapper-categories-item">
                    <img src="${book_image}" alt="${title}" class="wrapper-categories-img" width="335" height="485" >
                    <h2>${title}</h2>
                    <p class="wrapper-categories-author">${author}</p>
                </li>
            </ul>
        </div>
    `).join("");
    listBooks.insertAdjacentHTML('beforeend', markup);
}



