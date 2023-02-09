import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.main};

  /*  overflow: hidden; */
`;

export const Nav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0px 165px;

  @media (max-width: ${({ theme }) => theme.tablet}) {
    margin: 0px 30px;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin: 0 16px;
    flex-direction: column;
    align-items: center;
  }

  div {
    color: ${({ theme }) => theme.colors.mainwhite};
    font-weight: bold;
    font-size: 32px;
    margin-top: 20px;
    margin-bottom: 25px;
    min-width: 585px;

    @media (max-width: ${({ theme }) => theme.tablet}) {
      font-size: 24px;
      min-width: 500px;
    }

    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 24px;
      min-width: 0px;
    }
  }
`;

export const LogoContainer = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 24px;
  z-index: 1;
  margin-top: -15px;
  padding-right: 20px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    padding: 0px;
  }
`;

export const Circle = styled.img`
  width: 129px;
  height: 129px;
  margin-top: 400px;
  /*margin-left: 665px; */
  z-index: 1;

  @media (max-width: ${({ theme }) => theme.tablet}) {
    margin-top: 365px;
  }
`;

export const Rings = styled.img`
  margin-left: -90px;
  margin-bottom: -110px;
  width: 530px;
  height: 129px;

  @media (max-width: ${({ theme }) => theme.tablet}) {
    margin-left: -255px;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-left: -350px;
  }
`;

export const TextContainer = styled.section`
  display: flex;
  flex-direction: column;
  /*   overflow: hidden; */
  /*  margin-right: -28px; */

  br {
    content: "";
  }

  br:after {
    content: " ";
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    align-items: center;
    /*  width: 343px; */
  }

  p:nth-child(1) {
    font-size: 88px;
    color: ${({ theme }) => theme.colors.mainwhite};
    font-weight: bold;
    margin-right: -150px;
    margin-top: 40px;
    z-index: 1;
    word-break: break-word;
    line-height: 1;

    span:nth-child(2) {
      text-decoration: underline ${({ theme }) => theme.colors.active};
      text-underline-offset: 17px;
    }

    @media (max-width: ${({ theme }) => theme.tablet}) {
      font-size: 72px;

      span {
        white-space: nowrap;
      }
      span:nth-child(2) {
        text-underline-offset: 15px;
      }
    }

    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 40px;
      margin-right: 0px;
      text-align: center;
      br {
        content: normal;
      }

      span:nth-child(2) {
        text-underline-offset: 8px;
      }
    }
  }

  p:nth-child(2) {
    font-size: 18px;
    color: ${({ theme }) => theme.colors.secwhite};
    width: 445px;
    margin-top: 0;
    margin-bottom: 100px;
    word-break: break-word;

    @media (max-width: ${({ theme }) => theme.tablet}) {
      margin-bottom: 41px;
    }

    @media (max-width: ${({ theme }) => theme.mobile}) {
      width: 343px;
      text-align: justify;
      text-align-last: center;
    }
  }

  p:nth-child(3) {
    font-size: 16px;
    color: ${({ theme }) => theme.colors.mainwhite};
    text-decoration: underline 3px ${({ theme }) => theme.colors.active};
    text-underline-offset: 17px;
    width: 120px;
    font-weight: bold;

    :hover,
    :focus {
      color: ${({ theme }) => theme.colors.active};
      cursor: pointer;
    }
  }
`;

export const Foto = styled.picture`
  margin-top: -110px;
`;

export const StyledSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 165px;

  @media (max-width: ${({ theme }) => theme.tablet}) {
    margin: 0px 0px 0px 30px;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin: 0 16px;
    flex-direction: column-reverse;
    align-items: center;
  }
`;
