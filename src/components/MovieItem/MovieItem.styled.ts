import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const MovieList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);
  padding: 1rem;
  gap: 10px;
`;

export const MovieListItem = styled.li`
  border-radius: 5px;
  background-color: transparent;
`;

export const MovieImg = styled.img`
  border-radius: 5px;
`;

export const MovieLink = styled(NavLink)`
width: 100 %;
height: fit - content;
display: flex;
flex - wrap: wrap;
gap: 1rem;
align - items: center;
border - radius: 5px;
background - color: transparent;
transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);
&:hover,
&:focus {
  transform: scale(1.05);
}
&.active {
  transform: scale(1.05);
  background-color: #f5f5f5;
}
`;
export const MovieTitle = styled.h2`
  width: 300px;
  margin-bottom: 20px;
`;
export const MovieDescription = styled.p`
  width: 300px;
`;

export const MovieSectionTitle = styled.h2`
  padding: 1rem;
  text-decoration: underline;
`;
