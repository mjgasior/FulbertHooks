import React from "react";
import styled from "styled-components";
import { useAutoScroll } from "./scrollHook";

const Content = styled.div`
  height: 1px;
  width: 1px;
`;

export const ScrollToBottom = () => {
  const ref = useAutoScroll();
  return (
    <Content ref={ref}>a</Content>
  );
};