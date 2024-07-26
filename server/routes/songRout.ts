const express = require("express");
const songController = require("../controllers/songController");
const router = express.Router();

router
  .route("/")
  .get(songController.getAllSongs)
  .post(songController.createSong);

router
  .route("/:id") // Adjusted to match the base path `/songs`
  .patch(songController.updateSong)
  .delete(songController.deleteSong);

export default router;
