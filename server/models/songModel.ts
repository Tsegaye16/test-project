import mongoose, { Document, Model, Schema } from "mongoose";

// Define the interface for the song document
interface ISong extends Document {
  title: string;
  artist: string;
  album: string;
  genre: string;
}

// Define the schema
const songSchema: Schema<ISong> = new Schema({
  title: {
    type: String,
    required: true,
  },
  artist: {
    type: String,
    required: true,
  },
  album: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
});

// Create and export the model
const Song: Model<ISong> = mongoose.model("Song", songSchema);
module.exports = Song;
