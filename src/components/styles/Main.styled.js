import styled from "styled-components";

export const StyledMain = styled.main`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.main};
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
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
    width: 95%;
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

export const Nav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 auto;
  width: 80%;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.tablet}) {
    width: 90%;
    margin: 0 auto;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 95%;
    margin: 0 auto;
  }

  p:nth-child(1) {
    color: ${({ theme }) => theme.colors.mainwhite};
    font-weight: bold;
    font-size: 88px;

    @media (max-width: ${({ theme }) => theme.tablet}) {
      font-size: 72px;
    }

    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 40px;
    }
  }

  p:nth-child(2) {
    font-size: 16px;
    color: ${({ theme }) => theme.colors.mainwhite};
    text-decoration: underline 3px ${({ theme }) => theme.colors.active};
    text-underline-offset: 17px;
    font-weight: bold;

    :hover,
    :focus {
      color: ${({ theme }) => theme.colors.active};
      cursor: pointer;
    }
  }
`;

export const Projects = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 80%;
  gap: 2%;

  @media (max-width: ${({ theme }) => theme.tablet}) {
    width: 90%;
    margin: 0 auto;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 95%;
    margin: 0 auto;
    grid-template-columns: repeat(1, 1fr);
  }
`;
