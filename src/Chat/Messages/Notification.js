import React from "react";
import styled from "styled-components";
import { useAutoScroll } from "./scrollHook";

const Content = styled.div`
  padding: 10px;
  color: #ccc;
  text-align: center;
`;

export const Notification = ({ children, canTriggerAutoScroll }) => {
  const containerRef = useAutoScroll(canTriggerAutoScroll);
  return (
    <Content ref={containerRef}>{children}</Content>
  );
};