import styled from "styled-components";

const NavStyle = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 auto;
  width: 80%;

  @media (max-width: ${({ theme }) => theme.tablet}) {
    width: 90%;
    margin: 0 auto;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
    margin: 0 auto;
    flex-direction: column;
    align-items: center;
  }

  div:nth-child(1) {
    color: ${({ theme }) => theme.colors.mainwhite};
    font-weight: bold;
    font-size: 32px;

    @media (max-width: ${({ theme }) => theme.tablet}) {
      font-size: 24px;
    }

    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 24px;
      z-index: 1;
    }
  }

  div:nth-child(2) {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 24px;
    z-index: 1;
    /*   margin-top: -15px; */
    padding-right: 20px;

    @media (max-width: ${({ theme }) => theme.mobile}) {
      padding: 0px;
    }
  }
`;

export default NavStyle;
