import mongoose from "mongoose";

interface SongInterface {
  title: string;
  artist: string;
  genre: string;
  album: string;
  createdAt: Date;
  updatedAt: Date;
}

const songSchema = new mongoose.Schema<SongInterface>(
  {
    title: {
      type: String,
      required: [true, "Please enter a title for the song."],
    },
    artist: {
      type: String,
      required: [true, "Please enter the artist for the song."],
    },
    genre: {
      type: String,
      required: [true, "Please enter the genre for the song."],
    },
    album: {
      type: String,
      required: [true, "Please enter the album for the song."],
    },
  },
  {
    timestamps: true,
  }
);

const Song = mongoose.model("Song", songSchema);
export default Song;
