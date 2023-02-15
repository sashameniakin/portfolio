import styled from "styled-components";

export const FooterStyle = styled.section`
  background-color: ${({ theme }) => theme.colors.footer};
  width: 100%;
  margin-top: 5%;

  @media (max-width: ${({ theme }) => theme.tablet}) {
    margin-top: 7%;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-top: 85%;
  }

  div:first-child {
    margin-top: 3%;

    @media (max-width: ${({ theme }) => theme.tablet}) {
      text-align: center;
      margin-top: 5%;
    }

    @media (max-width: ${({ theme }) => theme.mobile}) {
      margin-top: 8%;
    }

    p:nth-child(1) {
      color: ${({ theme }) => theme.colors.mainwhite};
      font-weight: bold;
      font-size: 88px;
      margin: 0;

      @media (max-width: ${({ theme }) => theme.tablet}) {
        font-size: 72px;
      }

      @media (max-width: ${({ theme }) => theme.mobile}) {
        font-size: 40px;
      }
    }

    p:nth-child(2) {
      color: ${({ theme }) => theme.colors.secwhite};
      font-size: 18px;
      text-align: justify;
      text-align-last: left;

      @media (max-width: ${({ theme }) => theme.tablet}) {
        text-align-last: center;
      }

      @media (max-width: ${({ theme }) => theme.mobile}) {
        font-size: 16px;
      }
    }

    form {
      width: 100%;
      align-self: center;
      text-align: right;
      margin-top: 7%;

      span {
        display: block; /* ${(props) => (props.error ? "block" : "none")}; */
        color: #ff6f5b;
        font-size: 12px;
        margin-top: -3%;

        text-align: right;
      }

      input,
      textarea {
        width: 100%;
        background-color: ${({ theme }) => theme.colors.footer};
        border: none;
        border-bottom: 1px solid ${({ theme }) => theme.colors.mainwhite};
        margin-bottom: 5%;
        padding-bottom: 3%;
        padding-left: 5%;
        font-family: "Space Grotesk", sans-serif;
        resize: none;
        color: ${({ theme }) => theme.colors.mainwhite};
        outline: none;

        :focus:invalid {
          border-bottom: 1px solid #ff6f5b;
          background: url(./images/invalid.svg) no-repeat top right;
        }

        :focus:valid {
          border-bottom: 1px solid ${({ theme }) => theme.colors.active};
        }
      }

      textarea {
        padding-bottom: 15%;
      }

      button {
        background-color: ${({ theme }) => theme.colors.footer};
        border: none;
        color: ${({ theme }) => theme.colors.mainwhite};
        font-family: "Space Grotesk", sans-serif;
        text-decoration: underline 1px ${({ theme }) => theme.colors.active};
        text-underline-offset: 15px;
        padding: 0;

        :hover,
        :focus {
          color: ${({ theme }) => theme.colors.active};
          cursor: pointer;
        }
      }
    }
  }
`;

export const Flex = styled.div`
  display: flex;
  width: 80%;
  margin: 0 auto;
  gap: 10%;

  @media (max-width: ${({ theme }) => theme.tablet}) {
    flex-direction: column;
    width: 60%;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 95%;
  }
`;

export const Rings = styled.div`
  margin-left: -20%;
  margin-top: 0%;
  padding-top: 0;

  @media (max-width: ${({ theme }) => theme.tablet}) {
    margin-left: -50%;
    margin-top: -5%;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-left: -85%;
    margin-top: -20%;
  }
`;

export const Nav = styled.div`
  display: flex;
  justify-content: space-between;
`;
