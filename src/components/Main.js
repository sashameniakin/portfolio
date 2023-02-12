import {
  StyledMain,
  SkillContainer,
  Container,
  Rings,
} from "./styles/Main.styled";

export default function Main() {
  return (
    <StyledMain>
      <Container>
        <SkillContainer>
          HTML
          <br />
          <p>4 Years Experience</p>
        </SkillContainer>
        <SkillContainer>
          CSS
          <br />
          <p>4 Years Experience</p>
        </SkillContainer>
        <SkillContainer>
          Javascript
          <br />
          <p>4 Years Experience</p>
        </SkillContainer>
        <SkillContainer>
          Accessibility
          <br />
          <p>4 Years Experience</p>
        </SkillContainer>
        <SkillContainer>
          React
          <br />
          <p>3 Years Experience</p>
        </SkillContainer>
        <SkillContainer>
          Sass
          <br />
          <p>3 Years Experience</p>
        </SkillContainer>
      </Container>

      <Rings>
        <img src="./images/pattern-rings.svg" alt="rings" />
      </Rings>
    </StyledMain>
  );
}
