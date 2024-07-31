import axios from "axios";
import { Song } from "../types/songsType";

// Determine if the app is running locally
const isLocal = window.location.hostname === "localhost";

axios.defaults.baseURL = isLocal
  ? process.env.REACT_APP_LOCAL_API_BASE_URL
  : process.env.REACT_APP_PROD_API_BASE_URL;

console.log("Axios base URL:", axios.defaults.baseURL);

export const getSongsAPI = async (
  currentPage: number,
  pageSize: number,
  sortAttribute: string,
  sortOrder: string
) =>
  axios.get(
    `/songs?page=${currentPage}&limit=${pageSize}&sort=${sortAttribute}&order=${sortOrder}`
  );

export const createSongAPI = async (song: Song) => axios.post(`/songs`, song);

export const updateSongAPI = async (song: Song) =>
  axios.patch(`/songs/${song._id}`, song);

export const deleteSongByIdAPI = async (id: string) =>
  axios.delete(`/songs/${id}`);
