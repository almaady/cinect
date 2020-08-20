import axios from "axios";
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();
const {
  MOVIE_API_URL,
} = publicRuntimeConfig;

const instance = url => axios.create({
  baseURL: `${MOVIE_API_URL}`,
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
