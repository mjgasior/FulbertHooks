import styled from "styled-components";
import React, { useState } from "react";
import Nickname from "./Nickname";
import { Modal } from "./Modal";
import { Conversation } from "./Conversation";

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
  width: 15%;
`;

const Content = styled.div`
  width: 40%;
  padding: 20px;

  @media (max-width: 700px) {
    background: red;
  }
`;

const Chat = () => {
  const [nickname, setNickname] = useState("DENIS");

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
              <Conversation nickname={nickname} />
            </Content>
          </>
        )}
      </Body>
    </Container>
  );
};

export default Chat;
