import styled from "styled-components";

const StyledSkill = styled.p`
  color: ${({ theme }) => theme.colors.mainwhite};
  font-size: 48px;
  word-break: break-word;
  /*  padding: 5%; */

  @media (max-width: ${({ theme }) => theme.mobile}) {
    font-size: 32px;
    text-align: center;
  }

  span {
    color: ${({ theme }) => theme.colors.secwhite};
    font-size: 18px;

    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 16px;
    }
  }
`;

export default StyledSkill;
