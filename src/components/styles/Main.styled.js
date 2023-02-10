import styled from "styled-components";

export const StyledMain = styled.main`
  height: 100px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.main};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Linie = styled.div`
  width: 80%;
  border-top: solid 2px ${({ theme }) => theme.colors.mainwhite};
`;

export const FlexContainer = styled.div`
  display: flex;
`;

export const SkillContainer = styled.div`
  color: ${({ theme }) => theme.colors.mainwhite};
`;
