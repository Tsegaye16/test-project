import { css } from "@emotion/react";
export const songContainerStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  width: 90%;
  margin: 10px;
  border-radius: 5px;
  padding: 10px;
`;

export const sharedPadding = css`
  padding-left: 30px;
  padding-right: 30px;
  @media (max-width: 768px) {
    padding-left: 15px;
    padding-right: 15px;
  }
`;

export const songHeaderStyle = css`
  width: 100%;
  border-bottom: black 1px solid;
  display: flex;

  font-size: 1.4em;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 10px;
  ${sharedPadding};

  & > div {
    flex: 1;
    text-align: center;
  }
  @media (max-width: 768px) {
    font-size: 1em;
    //flex-direction: column;
    align-items: flex-start;

    & > div {
      text-align: left;
      padding-bottom: 5px;
    }
  }
`;

export const songListStyle = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: start;
  //background-color: lightgray;
`;

export const songItemStyle = css`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: start;
  border-bottom: 1px lightgray solid;
  font-size: 1.4em;
  padding-top: 5px;
  padding-bottom: 5px;
  border-radius: 3px;
  ${sharedPadding};

  transition: background-color 0.3s ease;
  /* &:hover {
    background-color: #454545;
  } */

  & > div {
    flex: 1;
    text-align: center;
  }
`;

export const songInfoStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;

  & .text {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media (max-width: 768px) {
    flex-direction: column;

    & img {
      margin-bottom: 10px;
    }

    & .text {
      align-items: flex-start;
    }
  }
`;

export const album = css`
  display: flex;
  font-weight: bold;
  margin-bottom: 10px;
  margin-top: 50px;
`;

export const actionBarStyle = css`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  ${sharedPadding};
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const searchInputStyle = css`
  display: flex;
  align-items: center;
  background-color: lightgray;
  border-radius: 5px;
  width: 50%;

  margin-left: 10%;
  padding: 5px 10px;

  & input {
    border: none;

    color: black;
    font-size: 1.2em;
    margin-left: 10px;
    outline: none;
    width: 100%;
  }
  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 10px;
  }
`;

export const mainBody = css`
  display: flex;
  flex-direction: column;
  flex: 6;
`;

export const popupOverlayStyle = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const popupContentStyle = css`
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  position: relative;
  color: black;
  width: 30%;
`;
