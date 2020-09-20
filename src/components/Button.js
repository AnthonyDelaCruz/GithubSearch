import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: var(--green);
  color: #fff;
  border-radius: 0.3125rem;
  padding: 5px;
  width: 150px;
  border: none;
  &:focus {
    outline: none;
  }
`;

export default function Button({ children, ...rest }) {
  return <StyledButton {...rest}>{children}</StyledButton>;
}
