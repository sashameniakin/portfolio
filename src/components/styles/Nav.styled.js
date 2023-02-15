import styled from "styled-components";

const NavStyle = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 20px;
  margin: 0 auto;
  width: 80%;
  border-top: ${(props) => (props.footer ? "solid 1px white" : "")};
  padding-bottom: ${(props) => (props.footer ? "6%" : "3%")};
  padding-top: ${(props) => (props.footer ? "2%" : "1%")};
  margin-top: ${(props) => (props.footer ? "3%" : "")};

  @media (max-width: ${({ theme }) => theme.tablet}) {
    width: 90%;
    margin: 0 auto;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
    margin: 0 auto;
    flex-direction: column;
    align-items: center;
    margin-top: ${(props) => (props.footer ? "6%" : "")};
    padding-top: ${(props) => (props.footer ? "8%" : "1%")};
    padding-bottom: ${(props) => (props.footer ? "8%" : "3%")};
  }

  div:first-child {
    color: ${({ theme }) => theme.colors.mainwhite};
    font-weight: bold;
    font-size: 32px;
    margin: 0;

    @media (max-width: ${({ theme }) => theme.tablet}) {
      font-size: 24px;
    }

    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 24px;
      z-index: 1;
    }
  }

  div:last-child {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 24px;
    z-index: 1;
    margin: 0;

    @media (max-width: ${({ theme }) => theme.mobile}) {
      padding: 0px;
    }

    img {
      width: 24px;
      height: 24px;
    }
  }
`;

export default NavStyle;
