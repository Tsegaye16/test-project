/** @jsxImportSource @emotion/react */
import React from "react";
import {
  addSongFormStyle,
  inputFieldStyle,
  buttonStyle,
  errorSpan,
} from "../styles/addSongStyle";
import { useDispatch } from "react-redux";
import { Formik } from "formik";

import { CREATE_SONG } from "../types/actionType";

interface AddSongProps {
  onClose: () => void;
}
interface Songs {
  artist: string;
  title: string;
  genre: string;
  album: string;
}
const AddSong: React.FC<AddSongProps> = ({ onClose }) => {
  const dispatch = useDispatch();

  const handleSave = (values: Songs) => {
    const newSong = {
      artist: values.artist,
      title: values.title,
      album: values.album,
      genre: values.genre,
    };
    dispatch({ type: CREATE_SONG, payload: newSong });
    onClose();
  };

  return (
    <div css={addSongFormStyle}>
      <h2>Add New Song</h2>
      <Formik
        initialValues={{ artist: "", title: "", album: "", genre: "" }}
        validate={(values) => {
          const errors: Partial<Songs> = {};
          if (!values.artist) errors.artist = "Artist is required";
          if (!values.title) errors.title = "Song Title is required";
          if (!values.album) errors.album = "Album is required";
          if (!values.genre) errors.genre = "Genre is required";
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          handleSave(values);
          setSubmitting(false);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit}>
            <div css={inputFieldStyle}>
              <input
                type="text"
                name="artist"
                placeholder="Artist name"
                value={values.artist}
                onChange={handleChange}
              />
              {errors.artist && touched.artist && (
                <span css={errorSpan}>{errors.artist}</span>
              )}
            </div>
            <div css={inputFieldStyle}>
              <input
                type="text"
                name="title"
                placeholder="Song title"
                value={values.title}
                onChange={handleChange}
              />
              {errors.title && touched.title && (
                <span css={errorSpan}>{errors.title}</span>
              )}
            </div>
            <div css={inputFieldStyle}>
              <input
                type="text"
                name="album"
                placeholder="Album name"
                value={values.album}
                onChange={handleChange}
              />
              {errors.album && touched.album && (
                <span css={errorSpan}>{errors.album}</span>
              )}
            </div>
            <div css={inputFieldStyle}>
              <input
                type="text"
                name="genre"
                placeholder="Genere"
                value={values.genre}
                onChange={handleChange}
              />
              {errors.genre && touched.genre && (
                <span css={errorSpan}>{errors.genre}</span>
              )}
            </div>
            <div>
              <button type="submit" disabled={isSubmitting} css={buttonStyle}>
                Save
              </button>

              <button type="button" css={buttonStyle} onClick={onClose}>
                Cancel
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default AddSong;
