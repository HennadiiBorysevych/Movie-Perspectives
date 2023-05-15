import styled from "@emotion/styled";
import { Link, NavLink } from "react-router-dom";

export const MovieHeader = styled.header`
  display: flex;
  gap: 1rem;
  background-color: #1c1c1c;
`;

export const MovieHeaderLink = styled(Link)`
  display: block;
  font-size: 20px;
  color: #000;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;
`;
export const Main = styled.main`
  display: grid;
  grid-template-columns: 1fr 4fr;
`;
export const Aside = styled.aside`
  height: 100vh;
  padding: 1rem;
  border-right: 7px solid #1c1c1c;
`;
export const MovieNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
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

export const MovieImg = styled.img`
  object-fit: cover;
  background-color: #f5c518;
`;
