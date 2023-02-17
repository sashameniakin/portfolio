import styled from "styled-components";

const DescriptionStyle = styled.section`
  display: flex;
  flex-direction: column;
  width: 60%;
  margin: 0 auto;

  br {
    content: "";
  }

  br:after {
    content: " ";
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
    align-items: center;
  }

  p:nth-child(1) {
    font-size: 88px;
    color: ${({ theme }) => theme.colors.mainwhite};
    font-weight: bold;
    margin-right: -15%;
    margin-top: 5%;
    z-index: 1;
    word-break: break-word;
    line-height: 1;

    span:nth-child(2) {
      text-decoration: underline ${({ theme }) => theme.colors.active};
      text-underline-offset: 18px;

      color: transparent;
      background: conic-gradient(
        #d9d7f1 12%,
        #baabda 12%,
        #baabda 33%,
        #e7fbbe 33%,
        #e7fbbe 55%,
        #ffcbcb 55%,
        #ffcbcb 70%,
        #b5deff 70%,
        #b5deff 87%,
        #f7d1ba 87%
      );
      background-size: 50%;
      background-clip: text;
      -webkit-background-clip: text;

      animation: expand-rev 0.5s ease forwards;

      cursor: pointer;

      :hover {
        animation: expand 0.5s ease forwards;
      }
      @keyframes expand {
        0% {
          background-size: 50%;
          background-position: 0 0;
        }
        20% {
          background-size: 55%;
          background-position: 0 1em;
        }
        100% {
          background-size: 310%;
          background-position: -10em -4em;
        }
      }

      @keyframes expand-rev {
        0% {
          background-size: 325%;
          background-position: -10em -4em;
        }
        20% {
          background-size: 55%;
          background-position: 0 1em;
        }
        100% {
          background-size: 50%;
          background-position: 0 0;
        }
      }
    }

    @media (max-width: ${({ theme }) => theme.tablet}) {
      font-size: 72px;

      span:nth-child(2) {
        text-underline-offset: 15px;
      }
    }

    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 40px;
      margin-right: 0;
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
    width: 60%;
    margin-bottom: 20%;
    word-break: break-word;
    margin-top: -5%;
    line-height: 28px;

    @media (max-width: ${({ theme }) => theme.tablet}) {
      width: 100%;
      margin-bottom: 5%;
    }

    @media (max-width: ${({ theme }) => theme.mobile}) {
      text-align: justify;
      text-align-last: center;
    }
  }

  p:nth-child(3) {
    font-size: 16px;
    color: ${({ theme }) => theme.colors.mainwhite};
    text-decoration: underline 3px ${({ theme }) => theme.colors.active};
    text-underline-offset: 17px;
    font-weight: bold;
    margin-top: -10%;
    letter-spacing: 2.28571px;

    :hover,
    :focus {
      color: ${({ theme }) => theme.colors.active};
      cursor: pointer;
    }

    @media (max-width: ${({ theme }) => theme.tablet}) {
      margin-top: 4%;
    }
  }
`;

export default DescriptionStyle;
