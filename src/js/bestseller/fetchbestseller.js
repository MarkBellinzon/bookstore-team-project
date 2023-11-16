import axios from "axios";

export async function fetchBestsellers() {
    return await axios.get('https://books-backend.p.goit.global/books/top-books')
        .then(resp => {
            if (!resp.status) {
                throw new Error(resp.status || resp.statusText);
            }
            return resp.data;                                             
        });
};

export async function fetchCategoryBooks(category) {
    return await axios.get(`https://books-backend.p.goit.global/books/category?category=${category}`)
        .then(resp => {
            if (!resp.status) {
                throw new Error(resp.status || resp.statusText);
            }
            return resp.data;                                             
        });
};

export function createCategoryMarkup(categories) {
    return categories.map(({ list_name, books }) => {              
        return `<div class="category-div">
                <h3 class="category-title">${list_name}</h3>
                <ul class="book-list-top">
                ${createBookMarkup(books)}                  
                </ul>
                <button type="button" class="js-see-more-btn">See more</button>             
            </div>`
    }).join('');
};

export function createBookMarkup(books) {
    return books.map(({ _id, book_image, author, title }) =>
            `<li class="book-list-top-item">
            <img
            class="book-cover-top"
            data-book-id="${_id}"            
            src="${book_image}"
            alt="book-cover"
            />
            <p class="book-title-top">${title}</p>
            <p class="book-author-top">${author}</p>
        </li>`
        ).join('');
};