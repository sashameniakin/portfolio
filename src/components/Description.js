import DescriptionStyle from "./styles/Description.styled";

export default function Description() {
  return (
    <DescriptionStyle>
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
    </DescriptionStyle>
  );
}
