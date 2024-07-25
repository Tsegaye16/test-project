import { css } from "@emotion/react";

export const buttonStyle = css`
  background-color: transparent;
  border: none;
  color: black;
  cursor: pointer;
  font-size: 1.2em;
  //margin-left: 50px;
  transition: color 0.3s ease;
  padding-right: 30px;
  /* &:hover {
    color: #ffcc00;
  } */

  &:focus {
    outline: none;
  }
`;
export const addButtonStyle = css`
  background-color: #007bff;
  border: none;
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 1em;

  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
    width: 60%;
  }
`;
export const seeDetailsButtonStyle = css`
  display: flex;
  align-items: center;
  padding: 10px 15px;
  background: #28a745;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background: #218838;
  }
  & svg {
    margin-right: 5px;
  }
  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
    margin-top: 10px;
    width: 60%;
  }
`;
