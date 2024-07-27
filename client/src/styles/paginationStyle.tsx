import styled from "styled-components";
export const PageSize = styled.select`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  padding: 10px 38px 10px 16px;
  background: #fff url("select-arrows.svg") no-repeat right 16px center;
  background-size: 10px;
  transition: border-color 0.1s ease-in-out, box-shadow 0.1s ease-in-out;
  border: 1px solid #ddd;
  border-radius: 3px;
  &:hover {
    border: 1px solid #999;
  }
  &:focus {
    border: 1px solid #999;
    box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.2);
    outline: none;
  }
`;
export const SelectOption = styled.option`
  border-radius: none;
  &:hover {
    background-color: lightgray;
  }
  &:focus {
    background-color: lightgray;
  }
  &:active {
    background-color: lightgray;
  }
`;
export const PaginationContainer = styled.ul`
  display: flex;
  list-style-type: none;
  justify-content: center;
`;

export const PaginationItem = styled.li`
  padding: 0 12px;
  height: 32px;
  text-align: center;
  margin: auto 4px;
  color: rgba(0, 0, 0, 0.87);
  display: flex;
  box-sizing: border-box;
  align-items: center;
  letter-spacing: 0.01071em;
  border-radius: 16px;
  line-height: 1.43;
  font-size: 13px;
  min-width: 32px;
  cursor: pointer;

  &.dots:hover {
    background-color: transparent;
    cursor: default;
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.04);
  }

  &.selected {
    background-color: rgba(0, 0, 0, 0.08);
  }

  &.disabled {
    pointer-events: none;
    .arrow::before {
      border-right: 0.12em solid rgba(0, 0, 0, 0.43);
      border-top: 0.12em solid rgba(0, 0, 0, 0.43);
    }
    &:hover {
      background-color: transparent;
      cursor: default;
    }
  }
`;

export const Arrow = styled.div`
  &::before {
    position: relative;
    content: "";
    display: inline-block;
    width: 0.4em;
    height: 0.4em;
    border-right: 0.12em solid rgba(0, 0, 0, 0.87);
    border-top: 0.12em solid rgba(0, 0, 0, 0.87);
  }

  &.left {
    transform: rotate(-135deg) translate(-50%);
  }

  &.right {
    transform: rotate(45deg);
  }
`;
