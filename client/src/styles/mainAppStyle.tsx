import { css } from "@emotion/react";
export const songContainerStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #101048;
  color: white;
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
  border-bottom: #ffffff8a 1px solid;
  display: flex;
  flex: 3;
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
  flex: 6;
  flex-direction: column;
  justify-content: center;
  align-items: start;
`;

export const songItemStyle = css`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.4em;
  padding-top: 5px;
  padding-bottom: 5px;
  border-radius: 3px;
  ${sharedPadding};

  transition: background-color 0.3s ease;
  &:hover {
    background-color: #454545;
  }

  & > div {
    flex: 1;
    text-align: center;
  }
`;

export const songInfoStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;

  & img {
    width: 50%;
    height: 30%;
    border-radius: 5px;
    margin-right: 10px;
  }

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
  background-color: #ffffff1a;
  border-radius: 5px;
  width: 50%;

  margin-left: 10%;
  padding: 5px 10px;

  & input {
    border: none;
    background: transparent;
    color: white;
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
  display: flex;
  flex-direction: column; /* To stack children vertically */
  align-items: stretch; /* Make sure children take full width */
  background: #fff;
  padding: 20px;
  max-height: 80vh; /* Adjust based on your needs */
  border-radius: 8px;
  position: relative;
  width: 40vw; /* Adjust based on your needs */
  overflow-y: auto; /* Enable vertical scrolling */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Optional, for better visibility */
`;
