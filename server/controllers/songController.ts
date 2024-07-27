const Song = require("../models/songModel");
//const APIFeature = require("../utils/apiFeature");
import APIFeatures from "../utils/apiFeature";
const catchAsync = require("../utils/catchAsync");
import AppError from "../utils/appError";

// Fetch Son
export const getAllSongs = catchAsync(async (req: any, res: any, next: any) => {
  const features = new APIFeatures(Song.find(), req.query as any)
    .filter()
    .sort()
    .limitFields()
    .paginate();

  const songs = await features.getQuery();
  const count = await Song.countDocuments();
  res.status(200).json({
    status: "success",
    count: count,
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
