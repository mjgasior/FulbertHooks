import React, { useContext } from "react";
import styled from "styled-components";
import { getDate } from "./dates";
import { RightMessage } from "./MessageStyles";
import { useAutoScroll } from "./scrollHook";
import ScrollContext from "../ScrollContext";

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-shrink: 0;
`;

export const MyMessage = ({ message, date, isFirst, isLast }) => {
  const { position } = useContext(ScrollContext);
  console.log("MyMessage" + position);
  const containerRef = useAutoScroll();

  return (
    <Container ref={containerRef}>
      <RightMessage data-date={getDate(date)} isFirst={isFirst} isLast={isLast}>
        {message}
      </RightMessage>
    </Container>
  );
};
