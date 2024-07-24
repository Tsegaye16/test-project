import { createSlice } from "@reduxjs/toolkit";
import { songsData, Song } from "../data/data";

interface SongsState {
  songs: Song[];
  statistics: {
    totalSongs: number;
    totalArtists: number;
    totalAlbums: number;
    totalGenres: number;
    genreCount: Record<string, number>;
    artistCount: Record<string, { songs: number; albums: number }>;
    albumCount: Record<string, number>;
  };
}

const calculateStatistics = (songsData: Song[]) => {
  const totalSongs = songsData.length;
  const artists = new Set<string>();
  const albums = new Set<string>();
  const genres = new Set<string>();

  const genreCount: Record<string, number> = {};
  const artistCount: Record<string, { songs: number; albums: Set<string> }> =
    {};
  const albumCount: Record<string, number> = {};

  songsData.forEach((song) => {
    artists.add(song.artist);
    albums.add(song.album);
    genres.add(song.genre);

    genreCount[song.genre] = (genreCount[song.genre] || 0) + 1;

    if (!artistCount[song.artist]) {
      artistCount[song.artist] = { songs: 0, albums: new Set() };
    }
    artistCount[song.artist].songs += 1;
    artistCount[song.artist].albums.add(song.album);

    albumCount[song.album] = (albumCount[song.album] || 0) + 1;
  });

  return {
    totalSongs,
    totalArtists: artists.size,
    totalAlbums: albums.size,
    totalGenres: genres.size,
    genreCount,
    artistCount: Object.fromEntries(
      Object.entries(artistCount).map(([key, value]) => [
        key,
        { songs: value.songs, albums: value.albums.size },
      ])
    ),
    albumCount,
  };
};

const initialState: SongsState = {
  songs: songsData,
  statistics: calculateStatistics(songsData),
};

const songsSlice = createSlice({
  name: "songs",
  initialState,
  reducers: {
    // addSong(state, action: PayloadAction<Song>) {
    //   state.songs.push(action.payload);
    //   state.statistics = calculateStatistics(state.songs);
    // },
    // removeSong(state, action: PayloadAction<number>) {
    //   state.songs = state.songs.filter((song) => song.id !== action.payload);
    //   state.statistics = calculateStatistics(state.songs);
    // },
  },
});

export default songsSlice.reducer;
