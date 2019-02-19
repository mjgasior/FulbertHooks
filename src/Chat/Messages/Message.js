import styled, { css } from "styled-components";

export const Message = styled.div`
  padding: 10px;
  margin: 5px;
  border-radius: 5px;

  &:hover {
    position: relative;
  }

  &:hover:after {
    position: absolute;
    content: attr(data-date);
    background-color: #777;
    padding: 3px 5px;
    color: white;
    border-radius: 2px;
    max-height: 30px;
    white-space: nowrap;

    top: 50%;
    ${props =>
      props.left
        ? css`
            left: calc(100% + 17px);
          `
        : css`
            right: calc(100% + 17px);
          `}
    transform: translateY(-50%);
  }

  &:hover:before {
    position: absolute;
    content: "";
    width: 0;
    height: 0;
    border: 10px transparent solid;

    top: 50%;
    ${props =>
      props.left
        ? css`
            left: calc(100%);
            border-right-color: #777;
          `
        : css`
            right: calc(100%);
            border-left-color: #777;
          `}
    transform: translateY(-50%);
  }
`;
