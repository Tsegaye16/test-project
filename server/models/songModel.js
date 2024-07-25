const mongoose = require("mongoose");

const songSchema = new mongoose.Schema(
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
module.exports = Song;
