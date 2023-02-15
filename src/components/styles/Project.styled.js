import styled from "styled-components";

const ProjectStyle = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: start;

  picture {
    position: relative;
    display: flex;
    justify-content: center;
    margin-bottom: -1%;

    p:nth-child(3),
    p:nth-child(4) {
      display: none;
      position: absolute;
      color: ${({ theme }) => theme.colors.mainwhite};
      text-decoration: underline 3px ${({ theme }) => theme.colors.active};
      text-underline-offset: 17px;
      font-size: 16px;
      font-weight: bold;
      z-index: 1;
    }

    :hover {
      span {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        background: black;
        opacity: 0.7;

        @media (max-width: ${({ theme }) => theme.tablet || theme.mobile}) {
          display: none;
        }
      }
      p:nth-child(3) {
        display: block;
        top: 35%;

        :hover,
        :focus {
          color: ${({ theme }) => theme.colors.active};
          cursor: pointer;
        }

        @media (max-width: ${({ theme }) => theme.tablet || theme.mobile}) {
          display: none;
        }
      }
      p:nth-child(4) {
        display: block;
        top: 45%;

        :hover,
        :focus {
          color: ${({ theme }) => theme.colors.active};
          cursor: pointer;
        }

        @media (max-width: ${({ theme }) => theme.tablet || theme.mobile}) {
          display: none;
        }
      }
    }

    img {
      width: 100%;
    }
  }

  p:nth-child(2) {
    color: ${({ theme }) => theme.colors.mainwhite};
    font-size: 24px;
    font-weight: bold;
    /*   margin-top: 3%; */
    margin-bottom: 2%;
  }
  p:nth-child(3) {
    color: ${({ theme }) => theme.colors.secwhite};
    font-size: 18px;
    margin-top: 0;
  }
  div {
    display: none;
    justify-content: start;
    gap: 10%;

    @media (max-width: ${({ theme }) => theme.tablet || theme.mobile}) {
      display: flex;
    }

    p:nth-child(1),
    p:nth-child(2) {
      color: ${({ theme }) => theme.colors.mainwhite};
      font-size: 16px;
      font-weight: bold;
      text-decoration: underline 3px ${({ theme }) => theme.colors.active};
      text-underline-offset: 17px;
      letter-spacing: 2.28px;

      :hover,
      :focus {
        color: ${({ theme }) => theme.colors.active};
        cursor: pointer;
      }
    }
  }
`;

export default ProjectStyle;
