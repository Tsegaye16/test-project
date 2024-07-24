// CalculateStatistics.ts
import { songsData } from "../../data/data";

export const calculateStatistics = () => {
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
    artistCount,
    albumCount,
  };
};
