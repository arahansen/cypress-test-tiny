import React, { Component } from "react";
import cxs from "cxs";
import styled from "styled-components";

const buttonStyles = cxs({
  padding: "20px",
  backgroundColor: "purple",
  borderRadius: "20px",
  border: "4px solid pink",
  color: "white",
  height: "200px",
  width: "200px"
});

const BigButton = styled.button`
  color: white;
  background-color: blue;
  padding: 80px;
`;

class App extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <button className={buttonStyles}>(CXS) Click me!</button>
        <BigButton>(styled-components) Click me!</BigButton>
      </div>
    );
  }
}

export default App;
