import styled from "@emotion/styled";

export const MovieSection = styled.section`
  padding: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);
  gap: 10px;
`;

export const MovieInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  border-radius: 5px;
  background-color: transparent;
  transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);
`;
