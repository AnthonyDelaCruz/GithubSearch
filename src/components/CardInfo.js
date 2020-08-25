import React from "react";
import styled from "styled-components";

const StyledCardInfo = styled.div`
  background-color: #ffffff;
  color: #334045;
`;
export default function CardInfo({ cardTitle, children }) {
  return (
    <div className="card-container">
      <div
        className="d-inline-block p-2"
        style={{ backgroundColor: "#ffffff" }}
      >
        {cardTitle}
      </div>
      <StyledCardInfo>{children}</StyledCardInfo>
    </div>
  );
}
