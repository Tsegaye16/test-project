import axios from "axios";
import { Song } from "../types/songsType";

axios.defaults.baseURL = "https://song-app-f3vs.onrender.com" as string;

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
