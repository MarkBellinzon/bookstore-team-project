import axios from "axios";

axios.defaults.baseURL = "https://books-backend.p.goit.global/books";

export async function getNameCategories(list_name) {
    try {
        const { data } = await axios.get('/category-list', { params: { list_name } });
        return data;
    } catch (error) {
        console.log(error.message);
    }
}

export async function getBooksCategory(categoryName) {
    try {
        const response = await axios.get(`/category?category=${categoryName}`);
        console.log(categoryName);
        return response.data;
    } catch (error) {
        console.log(error.message);
    }
}



