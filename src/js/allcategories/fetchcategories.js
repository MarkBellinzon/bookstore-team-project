import axios from "axios";

axios.defaults.baseURL = "https://books-backend.p.goit.global/books";

export async function getCategories(list_name) {
    try {
        const { data } = await axios.get('/category-list', { params: { list_name } });
        return data;
        
    } catch (error) {
        console.log(error.message);
    }
}
