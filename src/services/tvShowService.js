import axios from "axios"
import { BASE_URL, MOST_POPULAR_SHOWS } from "../constants/routeConstants"

export const getPopularShows = () => {
    return axios.get(`${BASE_URL}${MOST_POPULAR_SHOWS}`).then(({data}) => data)
}

export default {
    getPopularShows
}