const Song = require("../models/songModel");
//const APIFeature = require("../utils/apiFeature");
import APIFeatures from "../utils/apiFeature";
import catchAsync from "../utils/catchAsync";
import AppError from "../utils/appError";

// Fetch Son
export const getAllSongs = catchAsync(async (req: any, res: any, next: any) => {
  const features = new APIFeatures(Song.find(), req.query)
    .filter()
    // .sort()
    .limitFields();
  //.paginate();

  const songs = await features.getQuery(); // Using a getter method if the query is private

  res.status(200).json({
    status: "success",
    results: songs.length,
    data: {
      songs,
    },
  });
});

// Create song
export const createSong = catchAsync(async (req: any, res: any, next: any) => {
  const newSong = await Song.create(req.body);
  res.status(201).json({
    status: "success",
    data: {
      song: newSong,
    },
  });
});

// Update Song
export const updateSong = catchAsync(async (req: any, res: any, next: any) => {
  const song = await Song.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!song) {
    return next(new AppError("No song found with that ID", 404));
  }

  res.status(200).json({
    status: "success",
    data: {
      song,
    },
  });
});

// Delete Song
export const deleteSong = catchAsync(async (req: any, res: any, next: any) => {
  const song = await Song.findByIdAndDelete(req.params.id);

  if (!song) {
    return next(new AppError("No song found with that ID", 404));
  }

  res.status(204).json({
    status: "success",
    data: null,
  });
});
