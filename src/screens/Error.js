import React from "react";
import { Link } from "react-router-dom";

import Wrapper from "../components/Wrapper";

export default function ErrorScreen() {
  return (
    <Wrapper>
      <h1>404</h1>
      <h3>Page does not exist</h3>
      <Link to="/">Go back to Home</Link>
    </Wrapper>
  );
}
