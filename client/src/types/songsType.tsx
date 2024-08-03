// src/data/songData.ts

export interface Song {
  _id: string;
  artist: string;
  title: string;
  album: string;
  genre: string;
}
export interface SongsState {
  songs: Song[];
  totalCount: number;
  pageSize: number;
  sortAttribute: string;
  sortOrder: string;
}
