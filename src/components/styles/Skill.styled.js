import styled from "styled-components";

const StyledSkill = styled.p`
  color: ${({ theme }) => theme.colors.mainwhite};
  font-size: 48px;
  word-break: break-word;
  letter-spacing: -1.5px;
  line-height: 56px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    font-size: 32px;
    text-align: center;
  }

  span {
    color: ${({ theme }) => theme.colors.secwhite};
    font-size: 18px;
    line-height: 28px;
    letter-spacing: 0px;

    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 16px;
    }
  }
`;

export default StyledSkill;
