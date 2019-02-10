import styled from "styled-components";
import React, { Component } from "react";
import { Link } from "react-router-dom";

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
`;

const Button = styled(Link)`
  border: 1px solid orange;
  padding: 3px 10px;
  border-radius: 3px;
  background: orange;
  color: white;
  box-shadow: 0px 2px 5px #aaa;
`;

class Styleds extends Component {
  render() {
    return (
      <Container>
        <Title>Styled Components</Title>
        <Body>
          <Menu>Menu</Menu>
          <Content>
            Content <Button to="/styled">Show me Styled</Button>
          </Content>
        </Body>
      </Container>
    );
  }
}

export default Styleds;
