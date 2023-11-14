import Notiflix from 'notiflix';
import { fetchBestsellers } from './fetchbestseller';
import { createCategoryMarkup } from './fetchbestseller';
import { createBookMarkup } from './fetchbestseller';
import { fetchCategoryBooks } from './fetchbestseller';

const bestsellerDiv = document.querySelector('.bestseller')
const booksCategoryDiv = document.querySelector('.best-categories');

fetchBestsellers()
    .then(categories => {
        booksCategoryDiv.innerHTML = createCategoryMarkup(categories);     
    })
    .catch((err) => {
        console.error(err);
        Notiflix.Notify.failure('Sorry, there are no books found. Please try again!');
    });


bestsellerDiv.addEventListener('click', seeMoreHandler);

function seeMoreHandler(evt) {
    const seeMore = evt.target;
    const categoryName = seeMore.parentElement.querySelector('.category-title').textContent;
    bestsellerDiv.innerHTML = "";
    
    fetchCategoryBooks(categoryName)
        .then(books => {
            bestsellerDiv.innerHTML = 
                `<h1>${categoryName}</h1>
                <div class="category-wrapper">
                <ul class="books-category-list">
                ${createBookMarkup(books)}                  
                </ul>                             
            </div>`
        })
        .catch((err) => {
            console.error(err);
            Notiflix.Notify.failure('Sorry, there are no books found. Please try again!');
        }); 
};

