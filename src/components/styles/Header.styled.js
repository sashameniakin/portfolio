import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.main};
  padding-bottom: 5%;

  @media (max-width: ${({ theme }) => theme.tablet}) {
    padding-bottom: 9%;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    padding-bottom: 15%;
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

export const Foto = styled.picture`
  margin-top: -110px;
  width: 40%;

  img {
    width: 100%;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 50%;
    margin-top: -20%;
  }
`;

export const Circle = styled.div`
  margin-top: 0%;
  /*   position: absolute; */
  margin-left: 0%;
  z-index: 1;

  @media (max-width: ${({ theme }) => theme.tablet}) {
    margin-top: 40%;
    margin-left: 90%;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-top: 20%;
  }
`;

export const StyledSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 auto;
  width: 80%;

  @media (max-width: ${({ theme }) => theme.tablet}) {
    width: 95%;
    margin-right: 0;
    margin-left: 5%;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin: 0 auto;
    flex-direction: column-reverse;
    align-items: center;
  }
`;
