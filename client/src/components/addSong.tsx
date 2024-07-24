/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
//import { useDispatch } from "react-redux";
//import { addSong } from "../redux/songSlice";
import {
  addSongFormStyle,
  inputFieldStyle,
  buttonStyle,
} from "../styles/addSongStyle";

const AddSong: React.FC = () => {
  const [artist, setArtist] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [album, setAlbum] = useState<string>("");
  const [genre, setGenre] = useState<string>("");
  const [photo, setPhoto] = useState<string>("");
  // const dispatch = useDispatch();

  const handleSave = () => {
    // const newSong = { artist, photo, title, album, genre }; // Assuming id is generated this way
    //dispatch(addSong(newSong));
    // Reset form fields
    setArtist("");
    setTitle("");
    setAlbum("");
    setGenre("");
    setPhoto("");
  };

  const handleCancel = () => {
    setArtist("");
    setTitle("");
    setAlbum("");
    setGenre("");
    setPhoto("");
  };

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
      <div css={inputFieldStyle}>
        <input
          type="file"
          placeholder="Photo"
          value={photo}
          onChange={(e) => setPhoto(e.target.value)}
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
