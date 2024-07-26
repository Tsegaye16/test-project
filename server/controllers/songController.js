const Song = require("../models/songModel");
const APIFeature = require("../utils/apiFeature");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");

// Fetch Song
exports.getAllSongs = catchAsync(async (req, res, next) => {
  // get total number of collection

  const features = new APIFeature(Song.find(), req.query)
    .filter()
    //  .sort()
    .limitFields();
  //.paginate();

  const songs = await features.query;
  //console.log(songs);
  res.status(200).json({
    status: "success",
    results: songs.length,
    data: {
      songs,
    },
  });
});

// Create song
exports.createSong = catchAsync(async (req, res, next) => {
  const newSong = await Song.create(req.body);
  res.status(200).json({
    status: "success",
    data: {
      song: newSong,
    },
  });
});

// Update Song
exports.updateSong = catchAsync(async (req, res, next) => {
  console.log("ID", req.params);
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

//Delete Song
exports.deleteSong = catchAsync(async (req, res, next) => {
  //console.log(req.params);
  const song = await Song.findByIdAndDelete(req.params.id);
  if (!song) {
    return next(new AppError("No song found with that ID", 404));
  }
  res.status(200).json({
    status: "success",
    data: null,
  });
});
