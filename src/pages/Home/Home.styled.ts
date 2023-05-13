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
  background-color: #f5c518;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;
  padding: 0.8rem;
`;
export const Main = styled.main`
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 1rem;
`;
export const Aside = styled.aside`
  height: 100vh;
  padding: 1rem;
  border-right: 4px solid #1c1c1c;
`;
export const MovieNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
export const MovieLink = styled(NavLink)`
  display: block;
  font-size: 14px;
  color: #fff;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;
  padding: 0.8rem;
  trasition: background-color 1s ease;
  &.active {
    background-color: #f5c518;
    color: #000;
    text-decoration: underline;
  }
  &:hover {
    background-color: #f5c518;
    color: #000;
  }
`;
