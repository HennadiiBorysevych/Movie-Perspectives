import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const MovieHeader = styled.header`
  display: flex;
  justify-content: space-between;
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

export const MovieNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const MovieImg = styled.img`
  object-fit: cover;
  background-color: #f5c518;
`;

export const SearchWrapper = styled.div`
  width: 500px;
  height: 55px;
`;
