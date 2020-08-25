import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  min-height: 100vh;
  margin: auto;
  h1 {
    font-size: 10rem;
  }
`;

export default function Wrapper({ children }) {
  return <StyledWrapper>{children}</StyledWrapper>;
}
