import React from "react";
import styled from "styled-components";
import { breakpoints } from "../constants";

const StyledCardInfo = styled.div`
  background-color: #ffffff;
  color: #334045;
  flex: 1;
  max-height: 450px;
  overflow: auto;
  @media only screen and (max-width: ${breakpoints.tablet}) {
    height: 500px;
    max-height: 500px;
  }
`;
export default function CardInfo({ cardTitle, children, scrollable }) {
  return (
    <div className="card-container h-100 d-flex flex-column">
      <h5
        className="m-0 align-self-start d-inline-block py-2 px-3"
        style={{ backgroundColor: "#ffffff" }}
      >
        {cardTitle}
      </h5>
      <StyledCardInfo className="p-3">{children}</StyledCardInfo>
    </div>
  );
}
