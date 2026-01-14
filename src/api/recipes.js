import axios from "axios";

const API_URL = "https://6963b45e2d146d9f58d42df3.mockapi.io/items"

 export const fetchRecipes = async () => {
    const {data} = await axios.get(API_URL);
    return data;
}

