import {
  StyledHeader,
  Nav,
  LogoContainer,
  Circle,
  Rings,
  TextContainer,
  Foto,
  StyledSection,
} from "./styles/Header.styled";

export default function Header() {
  return (
    <>
      <StyledHeader>
        <Nav>
          <div>adamkeyes</div>
          <LogoContainer>
            <img src="./images/icon-github.svg" alt="github" />
            <img
              src="./images/icon-frontend-mentor.svg"
              alt="frontend-mentor"
            />
            <img src="./images/icon-linkedin.svg" alt="linkedin" />
            <img src="./images/icon-twitter.svg" alt="twitter" />
          </LogoContainer>
        </Nav>

        <Rings src="./images/pattern-rings.svg" alt="rings" />
        <StyledSection>
          <TextContainer>
            <p>
              Nice to{" "}
              <span>
                meet you!
                <br />
                I'm
              </span>{" "}
              <span>Adam Keyes</span>.
            </p>
            <p>
              Based in the UK, I'm frontend developer passionate about building
              accessible web apps that users love.
            </p>

            <p>CONTACT ME</p>
          </TextContainer>{" "}
          {/*  <Circle src="./images/pattern-circle.svg" alt="rings" /> */}
          <Foto>
            <source
              media="(min-width:769px)"
              srcSet="./images/image-profile-desktop.webp"
            />
            <source
              media="(min-width:415px)"
              srcSet="./images/image-profile-tablet.webp"
            />

            <img src="./images/image-profile-mobile.webp" alt="foto" />
          </Foto>
        </StyledSection>
      </StyledHeader>
    </>
  );
}
