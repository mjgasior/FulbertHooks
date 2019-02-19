import React from "react";
import styled from "styled-components";
import { Message } from "./Message";
import moment from "moment";

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-shrink: 0;
`;

const Content = styled(Message)`
  background: #cc8400;
  color: white;
  max-width: 70%;

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
    left: -60px;
    bottom: 46%;
  }

  &:hover:before {
    position: absolute;
    content: "";
    width: 0;
    height: 0;
    border: 10px transparent solid;
    border-left-color: #777;
    left: -15px;
    bottom: 50%;
  }
`;

export const MyMessage = ({ message, date }) => {
  return (
    <Container>
      <Content data-date={moment(date).format("HH:mm")}>
        {message}
      </Content>
    </Container>
  );
};
