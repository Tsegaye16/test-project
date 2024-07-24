/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import {
  addSongFormStyle,
  inputFieldStyle,
  buttonStyle,
} from "../styles/addSongStyle"; //
import { addSongs } from "../redux/songReducer";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const AddSong: React.FC = () => {
  const [artist, setArtist] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [album, setAlbum] = useState<string>("");
  const [genre, setGenre] = useState<string>("");

  const dispatch = useDispatch();
  const handleSave = () => {
    //event.preventDefault();
    dispatch(addSongs({ artist, title, album, genre }));
    //console.log({ artist, title, album, genre, photo });
  };
  const handleCancel = () => {};

  return (
    <div css={addSongFormStyle}>
      <h2>Add New Song</h2>
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

export default AddSong;
