import axios from "axios";
import {API_URL} from "./config";

export const getMealByID = async (mealID: string | undefined) => {
    const response = await axios.get(API_URL + 'lookup.php?i=' + mealID);
    return response.data
}

export const getAllCategories = async () => {
    const response = await axios.get(API_URL + 'categories.php');

    return response.data
}

export const getFilteredCategory = async (categoryName: string | undefined) => {
    const response = await axios.get(API_URL + 'filter.php?c=' + categoryName);

    return response.data
}