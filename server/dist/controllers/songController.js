"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteSong = exports.updateSong = exports.createSong = exports.getAllSongs = void 0;
const Song = require("../models/songModel");
//const APIFeature = require("../utils/apiFeature");
const apiFeature_1 = __importDefault(require("../utils/apiFeature"));
const catchAsync = require("../utils/catchAsync");
const appError_1 = __importDefault(require("../utils/appError"));
// Fetch Son
exports.getAllSongs = catchAsync((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const features = new apiFeature_1.default(Song.find(), req.query)
        .filter()
        .sort()
        .limitFields()
        .paginate();
    const songs = yield features.getQuery();
    const count = yield Song.countDocuments();
    res.status(200).json({
        status: "success",
        count: count,
        data: {
            songs,
        },
    });
}));
// Create song
exports.createSong = catchAsync((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const newSong = yield Song.create(req.body);
    res.status(201).json({
        status: "success",
        data: {
            song: newSong,
        },
    });
}));
// Update Song
exports.updateSong = catchAsync((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const song = yield Song.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
    });
    if (!song) {
        return next(new appError_1.default("No song found with that ID", 404));
    }
    res.status(200).json({
        status: "success",
        data: {
            song,
        },
    });
}));
// Delete Song
exports.deleteSong = catchAsync((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const song = yield Song.findByIdAndDelete(req.params.id);
    if (!song) {
        return next(new appError_1.default("No song found with that ID", 404));
    }
    res.status(204).json({
        status: "success",
        data: null,
    });
}));
