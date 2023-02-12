import styled from "styled-components";

export const StyledMain = styled.main`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.main};
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

export const SkillContainer = styled.p`
  color: ${({ theme }) => theme.colors.mainwhite};
  font-size: 48px;
  word-break: break-word;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    font-size: 32px;
    text-align: center;
  }

  p {
    color: ${({ theme }) => theme.colors.secwhite};
    font-size: 18px;

    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 16px;
    }
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: start;
  width: 80%;
  gap: 2%;
  border-top: solid 2px ${({ theme }) => theme.colors.mainwhite};

  @media (max-width: ${({ theme }) => theme.tablet}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 90%;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    justify-items: center;
    border-bottom: solid 2px ${({ theme }) => theme.colors.mainwhite};
    padding-bottom: 25%;
    margin-bottom: -15%;
  }
`;

export const Rings = styled.div`
  margin-left: 100%;
  margin-top: -8%;

  @media (max-width: ${({ theme }) => theme.tablet}) {
    margin-left: 120%;
    margin-top: -15%;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-left: 150%;
    margin-top: 5%;
  }
`;
