import StyledSkill from "./styles/Skill.styled";

export default function Skill({ skill, years }) {
  return (
    <StyledSkill>
      {skill}
      <br />
      <span>{years} Years Experience</span>
    </StyledSkill>
  );
}
