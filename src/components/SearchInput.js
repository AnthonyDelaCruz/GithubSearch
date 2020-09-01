import React, { useState } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

import { breakpoints } from "../constants";

const SearchInputContainer = styled.div`
  display: grid;
  grid-column-gap: 10px;
  grid-template-columns: repeat(4, 1fr);

  @media only screen and (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;
const StyledForm = styled.form`
  grid-column: 1 / 4;
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  @media only screen and (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
    grid-column: 1;
  }
`;
const StyledInput = styled.div`
  grid-column: 1 / 5;
  display: grid;
  align-items: center;
  background: #ffffff;
  padding: 0.5rem;
  grid-template-columns: repeat(4, 1fr);
  border-radius: 8px;
  .input-container {
    display: flex;
    align-items: center;
    grid-column: 1 / 4;
    svg {
      margin-left: 5px;
    }
  }
  input {
    font-size: 1.1rem;
    border-color: transparent;
    &:focus {
      border-color: #ffffff;
      outline: none;
      box-shadow: none;
    }
  }
  button {
    padding: 0.5rem 1rem;
    font-size: 1rem;
    border-radius: 8px;
    background-color: var(--blue-gray);
    border-color: #ffffff;
    &:focus {
      border-color: #ffffff;
      outline: none;
      box-shadow: none;
    }
  }
`;
const StyledDiv = styled.div`
  display: grid;
  justify-content: center;
  align-content: center;
`;
export default function SearchInput() {
  const [query, setQuery] = useState("");
  const onChange = (e) => setQuery(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("User to be searched...", query);
  };
  return (
    <SearchInputContainer className="py-md-4">
      <StyledForm onSubmit={onSubmit}>
        <StyledInput>
          <div className="input-container">
            <FaSearch size={20} className="inline-block" />
            <input
              className="form-control"
              value={query}
              onChange={onChange}
              placeHolder="Github username"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Search
          </button>
        </StyledInput>
      </StyledForm>
      <StyledDiv className="py-2 py-md-0">
        <h3 className="m-0">LIMIT 60 / 60</h3>
      </StyledDiv>
    </SearchInputContainer>
  );
}
