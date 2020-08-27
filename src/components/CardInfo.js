import React from "react";
import styled from "styled-components";

const StyledCardInfo = styled.div`
  background-color: #ffffff;
  color: #334045;
  height: 390px;
  max-height: 390px;
  overflow: hidden;
`;
export default function CardInfo({ cardTitle, children }) {
  return (
    <div className="card-container">
      <h5
        className="m-0 d-inline-block py-2 px-3"
        style={{ backgroundColor: "#ffffff" }}
      >
        {cardTitle}
      </h5>
      <StyledCardInfo className="p-3">{children}</StyledCardInfo>
    </div>
  );
}
