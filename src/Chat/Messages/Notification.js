import React from "react";
import styled from "styled-components";

const Content = styled.div`
  padding: 10px;
  color: #ccc;
  text-align: center;
`;

export const Notification = ({ children }) => {
  return (
    <Content>{children}</Content>
  );
};