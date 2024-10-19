import { PX_API_KEY } from "../constants/constants.js";
import axios from "axios";

const BASE_URL = "https://pixabay.com/api";
axios.defaults.baseURL = BASE_URL;


export async function getPhotos(query, page) {
    const params = {
        key        : PX_API_KEY,
        q          : query,
        image_type : "photo",
        orientation: "horizontal",
        safesearch : true,
        per_page   : 15,
        page
    };

    try {
        const response = await axios.get("/", { params });
        const { hits, totalHits } = response?.data || {};

        return hits ? { photos: hits, isNext: (15 * page) < totalHits } : {};
    } catch (error) {
        console.error("Fetch pixabay error: ", error instanceof Error ? error.message : error);
        return {};
    }
}