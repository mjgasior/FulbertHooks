import React, { useRef, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  height: 40px;
`;

const Input = styled.input`
  flex-grow: 8;
  border-radius: 5px 0px 0px 5px;
  border: 0;
  outline: none;
  padding-left: 10px;
`;

const Button = styled.button`
  flex-grow: 1;
  margin: 0;
  padding: 0;
  border: 0;
  background: orange;
  border-radius: 0px 5px 5px 0px;
  color: white;
  line-height: 30px;
  outline: none;
`;

export const SendMessage = ({ publish, startTyping }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef) {
      inputRef.current.focus();
    }
  }, [inputRef]);

  const onSendMessage = () => {
    const message = inputRef.current.value;
    if (message && message !== "") {
      publish(message);
      inputRef.current.value = "";
      return;
    }
    alert("Empty message!");
  };

  const onKeyDown = event => {
    if (event.key === "Enter") {
      onSendMessage();
    } else {
      startTyping();
    }
  };

  return (
    <Container>
      <Input ref={inputRef} type="text" onKeyDown={onKeyDown} />
      <Button onClick={onSendMessage}>Send</Button>
    </Container>
  );
};
