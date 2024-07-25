/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from "react";
import {
  addSongFormStyle,
  inputFieldStyle,
  buttonStyle,
} from "../styles/addSongStyle";
import { Song } from "../data/data";
import { useDispatch } from "react-redux";
import { UPDATE_SONG_BY_ID } from "../redux/types/type";
interface UpdateSongProps {
  song: Song | null;
  onClose: () => void;
}
const UpdateSong: React.FC<UpdateSongProps> = ({ song, onClose }) => {
  const [artist, setArtist] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [album, setAlbum] = useState<string>("");
  const [genre, setGenre] = useState<string>("");

  const dispatch = useDispatch();

  // Set state when song prop changes
  useEffect(() => {
    if (song) {
      setArtist(song.artist);
      setTitle(song.title);
      setAlbum(song.album);
      setGenre(song.genre);
    }
  }, [song]);

  const handleSave = () => {
    if (song) {
      const updatedSong: Song = {
        ...song,
        artist,
        title,
        album,
        genre,
      };
      dispatch({ type: UPDATE_SONG_BY_ID, payload: updatedSong });
      onClose(); // Close the popup after saving
    }
  };

  const handleCancel = () => {
    onClose(); // Close the popup without saving
  };

  return (
    <div css={addSongFormStyle}>
      <h2>Update Song</h2>
      <div css={inputFieldStyle}>
        <input
          type="text"
          placeholder="Artist name"
          value={artist}
          onChange={(e) => setArtist(e.target.value)}
        />
      </div>
      <div css={inputFieldStyle}>
        <input
          type="text"
          placeholder="Song title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div css={inputFieldStyle}>
        <input
          type="text"
          placeholder="Album name"
          value={album}
          onChange={(e) => setAlbum(e.target.value)}
        />
      </div>
      <div css={inputFieldStyle}>
        <input
          type="text"
          placeholder="Genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />
      </div>

      <div>
        <button css={buttonStyle} onClick={handleSave}>
          Save
        </button>
        <button css={buttonStyle} onClick={handleCancel}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default UpdateSong;
