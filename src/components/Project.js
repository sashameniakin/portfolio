import ProjectStyle from "./styles/Project.styled";

export default function Project({ src_large, src_small, name, techstack }) {
  return (
    <ProjectStyle>
      <picture>
        <source media="(min-width:415px)" srcSet={src_large} />
        <img src={src_small} alt="foto" />
        <p>VIEW PROJECT</p>
        <p>VIEW CODE</p>
        <span />
      </picture>

      <p>{name}</p>
      <p>{techstack}</p>
      <div>
        <p>VIEW PROJECT</p>
        <p>VIEW CODE</p>
      </div>
    </ProjectStyle>
  );
}
