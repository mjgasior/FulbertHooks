import React from "react";
import styled from "styled-components";

const Typer = styled.div`
  bottom: 50px;
  right: 50%;
  position: absolute;
  padding: 10px;
  margin: 2px;
  border-radius: 5px;
  background: #a0a0a0;
  color: #282c34;
`;

export const TypingPopup = ({ users }) => {
  return (
    <>
      {users.map((nickname, index) => (
        <Typer key={index + nickname}>{nickname} is typing...</Typer>
      ))}
    </>
  );
};
