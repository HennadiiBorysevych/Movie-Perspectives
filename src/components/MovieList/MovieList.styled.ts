import styled from "@emotion/styled";

export const Aside = styled.aside`
  height: 100vh;
  padding: 1rem;
  border-right: 7px solid #1c1c1c;
`;

export const MovieLink = styled.button`
  display: block;
  font-size: 14px;
  color: #fff;
  background-color: transparent;\
  outline: none;
  font-weight: bold;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
  letter-spacing: 2px;
  padding: 0.8rem;
  transition: background-color 0.4s ease-out, color 0.4s ease-out;
  &:hover {
    background-color: #f5c518;
    color: #000;
  }
  &:active {
    background-color: #f5c518;
    color: #000;
  }
  
`;
