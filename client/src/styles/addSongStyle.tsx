import { css } from "@emotion/react";

export const addSongFormStyle = css`
  padding: 20px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  margin: 0 auto;
  color: black;
`;

export const inputFieldStyle = css`
  margin-bottom: 15px;
  margin-top: 30px;

  input {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    outline: none;
  }
`;

export const buttonStyle = css`
  padding: 10px 20px;
  background: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 10px;

  &:hover {
    background: #0056b3;
  }

  &:last-of-type {
    background: #6c757d;

    &:hover {
      background: #5a6268;
    }
  }
`;
