import axios from "axios";
import { Song } from "../data/data";

axios.defaults.baseURL = "http://127.0.0.1:4000";

export const getSongsAPI = async () => axios.get("/songs");
export const createSongAPI = async (song: Song) => axios.post(`/songs`, song);
export const updateSongAPI = async (song: Song) =>
  axios.patch(`/songs/${song._id}`, song);
export const deleteSongByIdAPI = async (id: string) =>
  axios.delete(`/songs/${id}`);
