import Notiflix from 'notiflix';
import { fetchBestsellers } from './fetchbestseller';
import { createCategoryMarkup } from './fetchbestseller';

const booksCategoryDiv = document.querySelector('.best-categories'); 

fetchBestsellers()
    .then(categories => {        
        booksCategoryDiv.insertAdjacentHTML('afterbegin', createCategoryMarkup(categories));        
    })
    .catch((err) => {
        console.error(err);
        Notiflix.Notify.failure('Sorry, there are no books found. Please try again!');
    });




