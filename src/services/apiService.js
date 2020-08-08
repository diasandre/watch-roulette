import axios from "axios";
import { TV_SHOWS, RANDOM } from "../constants/ApiRoutes";

const AUTH = {
  auth: {
    username: process.env.username,
    password: process.env.password,
  },
};

const API_BASE_URL = "https://wetwa-api.herokuapp.com"

export const listAllTvShows = () => axios.get(`${API_BASE_URL}${TV_SHOWS.BASE_URL}`, AUTH);

export const getRandom = (id) => axios.get(`${API_BASE_URL}${RANDOM.BASE_URL}/${id}`, AUTH);