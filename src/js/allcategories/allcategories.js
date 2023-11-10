import { getCategories } from "./fetchcategories";

const listCategories = document.querySelector('.list-categories');

getCategories().then(data => {
    if (data.length !== 0) {
        createMarkup(data);
    } else {
        console.log("Sorry, there are no categories here. Please try again.");
    }
});

function createMarkup(arr) {
    const markup = arr.map(({ list_name }) => `
        <li>${list_name}</li>
    `).join("");
    listCategories.insertAdjacentHTML('beforeend', markup);
}





