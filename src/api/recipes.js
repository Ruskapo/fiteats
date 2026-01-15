import axios from "axios";

const API_URL = "https://69690f1169178471522c7377.mockapi.io/recipes"

 export const fetchRecipes = async () => {
    const {data} = await axios.get(API_URL);
    return data;
}

