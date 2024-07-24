// src/data/songData.ts
import tedy from "../assets/tedy.jpg";
import tilahun from "../assets/tilahun.jpg";
import alemayehu from "../assets/alemayehu.jpg";

export interface Song {
  artist: string;
  image: string;
  title: string;
  album: string;
  genre: string;
}

export const songsData: Song[] = [
  // Example data
  {
    artist: "Tedy",
    image: tedy,
    title: "ፊዮሪና",
    album: "ኢትዮጲያ",
    genre: "ሬጌ",
  },
  {
    artist: "Abebe",
    image: tilahun,
    title: "ፊዮሪና",
    album: "ኢትዮጲያ",
    genre: "ሬጌ",
  },
  {
    artist: "Tilahun",
    image: alemayehu,
    title: "ፊዮሪና",
    album: "ኢትዮጲያ",
    genre: "ሬጌ",
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
