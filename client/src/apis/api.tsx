import axios from "axios";
import { Song } from "../types/songsType";

axios.defaults.baseURL = process.env.REACT_APP_PROD_API_BASE_URL as string;

export const getSongsAPI = async (
  currentPage: number,
  pageSize: number,
  sort: string
) => axios.get(`/songs?page=${currentPage}&limit=${pageSize}&sort=${sort}`);
export const createSongAPI = async (song: Song) => axios.post(`/songs`, song);
export const updateSongAPI = async (song: Song) =>
  axios.patch(`/songs/${song._id}`, song);
export const deleteSongByIdAPI = async (id: string) =>
  axios.delete(`/songs/${id}`);
