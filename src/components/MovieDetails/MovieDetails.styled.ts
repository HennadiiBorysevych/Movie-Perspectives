import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const MovieSection = styled.section`
  padding: 1rem;
  transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);
  border-bottom: 20px solid #f5c518;
`;

export const DetailsWrapper = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

export const MovieInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  justify-content: flex-start;
  align-items: left;
  border-radius: 5px;
  background-color: transparent;
  transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);
  margin-left: 3rem;
`;
export const Link = styled(NavLink)`
  transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);
  padding: 0.5rem;
  border: 1px solid #f5c518;
  text-transform: uppercase;
  font-weight: 700;
  &:hover,
  &:focus {
    transform: scale(1.05);
    background-color: #f5c518;
  }
  &.active {
    transform: scale(1.05);
    background-color: #f5c518;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  margin-right: 10rem;
`;
export const MoviePoster = styled.img`
  height: 500px;
  margin-left: 1rem;
`;

export const MovieDescription = styled.p`
  width: 70%;
`;
