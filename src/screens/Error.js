import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import Button from "components/Button";

const StyledErrorPage = styled.div`
  display: flex;
  background-color: var(--light-black);
  color: #fff;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

export default function ErrorScreen() {
  const history = useHistory();
  return (
    <StyledErrorPage>
      <h1>404</h1>
      <h3>Page does not exist</h3>
      <br />
      <Button onClick={() => history.push("/")}>Home Page</Button>
    </StyledErrorPage>
  );
}
