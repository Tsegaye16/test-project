import { css } from "@emotion/react";

// Base button style
export const buttonStyle = css`
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 1em;
  border-radius: 0.5rem;
  color: #fff;
  font-weight: bold;
  /* background-color: transparent;
  border: none;
  color: black;
  cursor: pointer;
  font-size: 1.2em;
  transition: color 0.3s ease;
  padding-right: 30px;

  &:focus {
    outline: none;
  } */
`;

// Edit button style
export const editButtonStyle = css`
  ${buttonStyle};
  padding: 0.3rem 0.55rem;
  background-color: #7dd3fc;
  margin-right: 10px;
`;

// Delete button style
export const deleteButtonStyle = css`
  ${buttonStyle};
  padding: 0.3rem 0.55rem;
  background-color: #ef4444;
`;

export const addButtonStyle = css`
  background-color: #007bff;
  border: none;

  outline: none;
  color: white;
  padding: 5px 10px;
  border-radius: 0.5em;
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
  border-radius: 0.5em;
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
