/** @jsxImportSource @emotion/react */
import React, { useEffect } from "react";
import {
  addSongFormStyle,
  inputFieldStyle,
  buttonStyle,
  errorSpan,
} from "../styles/addSongStyle";
import { Song } from "../types/songsType";
import { useDispatch } from "react-redux";
import { Formik, Field, Form } from "formik";
import { UPDATE_SONG_BY_ID } from "../types/actionType";

interface UpdateSongProps {
  song: Song | null;
  onClose: () => void;
}

const UpdateSong: React.FC<UpdateSongProps> = ({ song, onClose }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (song) {
    }
  }, [song]);

  const handleSave = (values: Song) => {
    if (song) {
      const updatedSong: Song = {
        ...song,
        artist: values.artist,
        title: values.title,
        album: values.album,
        genre: values.genre,
      };
      dispatch({ type: UPDATE_SONG_BY_ID, payload: updatedSong });
      onClose(); // Close the popup after saving
    }
  };

  return (
    <div css={addSongFormStyle}>
      <h2>Update Song</h2>
      {song && (
        <Formik
          initialValues={{
            artist: song.artist,
            title: song.title,
            album: song.album,
            genre: song.genre,
          }}
          validate={(values) => {
            const errors: Partial<Song> = {};
            if (!values.artist) errors.artist = "Artist is required";
            if (!values.title) errors.title = "Song Title is required";
            if (!values.album) errors.album = "Album is required";
            if (!values.genre) errors.genre = "Genre is required";
            return errors;
          }}
          onSubmit={(values: any, { setSubmitting }) => {
            handleSave(values);
            setSubmitting(false);
          }}
        >
          {({ errors, touched, isSubmitting }) => (
            <Form>
              <div css={inputFieldStyle}>
                <Field type="text" name="artist" placeholder="Artist name" />
                {errors.artist && touched.artist && (
                  <span css={errorSpan}>{errors.artist}</span>
                )}
              </div>
              <div css={inputFieldStyle}>
                <Field type="text" name="title" placeholder="Song title" />
                {errors.title && touched.title && (
                  <span css={errorSpan}>{errors.title}</span>
                )}
              </div>
              <div css={inputFieldStyle}>
                <Field type="text" name="album" placeholder="Album name" />
                {errors.album && touched.album && (
                  <span css={errorSpan}>{errors.album}</span>
                )}
              </div>
              <div css={inputFieldStyle}>
                <Field type="text" name="genre" placeholder="Genre" />
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
            </Form>
          )}
        </Formik>
      )}
    </div>
  );
};

export default UpdateSong;
