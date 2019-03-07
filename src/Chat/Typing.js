import React from "react";
import styled from "styled-components";
import { TypingMessage } from "./Messages/TypingMessage";

const Container = styled.div`
  position: relative;
`;

const Typer = styled.div`
  position: absolute;
  top: -100px;
  background: red;
`;

export const Typing = ({ offset, mode, users }) => {
  console.log(offset + "use this offset to change the top value in typer");
  return (
    <Container>
      {mode
        ? users.map((nickname, index) => (
            <TypingMessage key={index + nickname} nickname={nickname} />
          ))
        : users.map((nickname, index) => (
            <Typer key={index + nickname} >{nickname}</Typer>
          ))}
    </Container>
  );
};
