import styled, { css } from "styled-components";

const Message = styled.div`
  padding: 10px;
  margin: 2px;
  border-radius: 0px;

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
    transform: translateY(-50%);
  }

  &:hover:before {
    position: absolute;
    content: "";
    width: 0;
    height: 0;
    border: 10px transparent solid;

    top: 50%;
    transform: translateY(-50%);
  }
`;

export const RightMessage = styled(Message)`
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  background: #cc8400;
  color: #fff;
  max-width: 70%;

  &:hover:after {
    right: calc(100% + 17px);
  }

  &:hover:before {
    right: calc(100%);
    border-left-color: #777;
  }

  ${props =>
    props.isFirst &&
    css`
      border-top-right-radius: 5px;
      margin-top: 5px;
    `}

  ${props =>
    props.isLast &&
    css`
      border-bottom-right-radius: 5px;
      margin-bottom: 5px;
    `}
`;

export const LeftMessage = styled(Message)`
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  background: #fff;
  color: #282c34;
  max-width: 70%;

  &:hover:after {
    left: calc(100% + 17px);
  }

  &:hover:before {
    left: calc(100%);
    border-right-color: #777;
  }

  ${props =>
    props.isFirst &&
    css`
      border-top-left-radius: 5px;
      margin-top: 5px;
    `}

  ${props =>
    props.isLast &&
    css`
      border-bottom-left-radius: 5px;
      margin-bottom: 5px;
    `}
`;

