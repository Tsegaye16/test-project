// src/data/songData.ts
import tedy from "../assets/tedy.jpg";
import tilahun from "../assets/tilahun.jpg";
import alemayehu from "../assets/alemayehu.jpg";

export interface Song {
  id: number;
  artist: string;
  image: string;
  title: string;
  album: string;
  genre: string;
  duration: string;
}

export const songsData: Song[] = [
  // Example data
  {
    id: 1,
    artist: "Tedy",
    image: tedy,
    title: "ፊዮሪና",
    album: "ኢትዮጲያ",
    genre: "ሬጌ",
    duration: "2:32",
  },
  {
    id: 2,
    artist: "Abebe",
    image: tilahun,
    title: "ፊዮሪና",
    album: "ኢትዮጲያ",
    genre: "ሬጌ",
    duration: "2:32",
  },
  {
    id: 3,
    artist: "Tilahun",
    image: alemayehu,
    title: "ፊዮሪና",
    album: "ኢትዮጲያ",
    genre: "ሬጌ",
    duration: "2:32",
  },
  // {
  //   id: 4,
  //   artist: "Tedy",
  //   image: tedy,
  //   title: "ፊዮሪና",
  //   album: "ኢትዮጲያ",
  //   genre: "ሬጌ",
  //   duration: "2:32",
  // },
  // {
  //   id: 5,
  //   artist: "Abebe",
  //   image: tedy,
  //   title: "ፊዮሪና",
  //   album: "ኢትዮጲያ",
  //   genre: "ሬጌ",
  //   duration: "2:32",
  // },
  // {
  //   id: 6,
  //   artist: "Tilahun",
  //   image: tedy,
  //   title: "ፊዮሪና",
  //   album: "ኢትዮጲያ",
  //   genre: "ሬጌ",
  //   duration: "2:32",
  // },
  // {
  //   id: 7,
  //   artist: "Tedy",
  //   image: tedy,
  //   title: "ፊዮሪና",
  //   album: "ኢትዮጲያ",
  //   genre: "ሬጌ",
  //   duration: "2:32",
  // },
  // {
  //   id: 8,
  //   artist: "Abebe",
  //   image: tedy,
  //   title: "ፊዮሪና",
  //   album: "ኢትዮጲያ",
  //   genre: "ሬጌ",
  //   duration: "2:32",
  // },
  // {
  //   id: 9,
  //   artist: "Tilahun",
  //   image: tedy,
  //   title: "ፊዮሪና",
  //   album: "ኢትዮጲያ",
  //   genre: "ሬጌ",
  //   duration: "2:32",
  // },
  // {
  //   id: 10,
  //   artist: "Tedy",
  //   image: tedy,
  //   title: "ፊዮሪና",
  //   album: "ኢትዮጲያ",
  //   genre: "ሬጌ",
  //   duration: "2:32",
  // },
];
