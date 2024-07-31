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

export const tableContainer = css`
  display: inline-block;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 10px;
  padding: 10px;
`;

export const tableStyle = css`
  width: 80%;
  border-collapse: collapse;
  margin-top: 10px;
`;

export const tableHeaderStyle = css`
  background-color: #f8f8f8;
  border-bottom: 2px solid #ddd;
  font-weight: border;
  font-size: 1.5em;
  th {
    padding: 10px;
    text-align: center;
    font-size: 1.2em;
  }
`;

export const tableRowStyle = css`
  &:hover {
    background-color: #f1f1f1;
  }
`;

export const tableCellStyle = css`
  padding: 10px;
  text-align: center;
  border-bottom: 1px solid #ddd;
  font-size: 1.3em;
`;

export const actionCellStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-bottom: 1px solid #ddd;
`;

export const actionBarStyle = css`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
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
  width: 30%;
  margin-left: 20px;
  padding: 10px 10px;

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
  flex-direction: column;
  align-items: stretch;
  background: #fff;
  max-height: 80vh;
  border-radius: 8px;
  position: relative;
  overflow-y: scroll;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

export const labelStyle = css`
  margin-right: -120px;
  font-size: 16px;
  font-weight: bold;
  //margin-left: 100px;
`;

export const selectStyle = css`
  padding: 8px;
  font-size: 16px;
  border-radius: 4px;
  border: 1px solid #ccc;
  outline: none;
`;

export const confirmationOverlayStyle = css`
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

export const confirmationPopupStyle = css`
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 300px;
  text-align: center;
`;
