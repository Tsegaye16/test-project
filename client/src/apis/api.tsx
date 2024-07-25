import axios from "axios";
interface Song {
  id: string;
  artist: string;
  title: string;
  album: string;
  genre: string;
}

axios.defaults.baseURL = "http://127.0.0.1:4000";

export const getSongsAPI = async () => axios.get("/songs"); // Plural for listing
export const createSongAPI = async (song: Song) => axios.post(`/songs`, song);
export const updateSongAPI = async (song: Song) =>
  axios.put(`/songs/${song.id}`, song);
export const deleteSongByIdAPI = async (id: string) =>
  axios.delete(`/songs/${id}`);
