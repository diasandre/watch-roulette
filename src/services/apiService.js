import axios from "axios";
import { TV_SHOWS, RANDOM } from "../constants/ApiRoutes";

const API_BASE_URL = "https://p1v9mu7ici.execute-api.us-east-1.amazonaws.com/dev";

export const listAllTvShows = () =>
  axios.get(`${API_BASE_URL}${TV_SHOWS.BASE_URL}`);

export const getRandom = (id) =>
  axios.get(`${API_BASE_URL}${RANDOM.BASE_URL}/${id}`);
