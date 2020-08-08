import axios from "axios";
import { TV_SHOWS, RANDOM } from "../constants/ApiRoutes";

const AUTH = {
  auth: {
    username: process.env.username,
    password: process.env.password,
  },
};

export const listAllTvShows = () => axios.get(`${TV_SHOWS.BASE_URL}`, AUTH);

export const getRandom = (id) => axios.get(`${RANDOM.BASE_URL}/${id}`, AUTH);
