import styled, { css } from "styled-components";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HookSockets, ClassSockets } from "./Sockets";
import Nickname from "./Nickname";
import { Modal } from "./Modal";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Title = styled.div`
  padding-left: 20px;
  font-size: 20px;
  height: 3em;
  line-height: 3em;
  background: linear-gradient(45deg, orange, gold);
`;

const Body = styled.div`
  display: flex;
  flex-direction: row;
`;

const Menu = styled.div`
  flex-grow: 1;
`;

const Content = styled.div`
  flex-grow: 5;
  padding: 20px;

  @media (max-width: 700px) {
    background: red;
  }
`;

const Button = styled(Link)`
  display: inline-block;
  border: 1px solid orange;
  padding: 3px 10px;
  border-radius: 3px;
  background: orange;

  color: white;
  box-shadow: 0px 2px 5px #aaa;
  &:active {
    transform: translateY(2px);
    box-shadow: 0px 1px 1px #aaa;
  }

  ${props =>
    props.primary &&
    css`
      background: white;
      color: black;
    `}
`;

const Chat = () => {
  const [nickname, setNickname] = useState("");

  return (
    <Container>
      <Title>Styled Components</Title>
      <Body>
        {nickname === "" ? (
          <Modal>
            <Nickname set={setNickname} />
          </Modal>
        ) : (
          <>
            <Menu>Menu</Menu>
            <Content>
              Content <Button to="/chat">Show me Styled</Button>
              Content{" "}
              <Button to="/chat" primary="true">
                Show me Styled
              </Button>
              <HookSockets />
              <ClassSockets nickname={nickname} />
            </Content>
          </>
        )}
      </Body>
    </Container>
  );
};

export default Chat;
