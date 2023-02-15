import {
  StyledHeader,
  Circle,
  Rings,
  Foto,
  StyledSection,
} from "./styles/Header.styled";
import Nav from "./Nav";
import Description from "./Description";

export default function Header() {
  return (
    <StyledHeader>
      <Nav />
      <Rings src="./images/pattern-rings.svg" alt="rings" />
      <StyledSection>
        <Description />
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
  );
}
