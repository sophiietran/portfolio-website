import SectionTitle from "../SectionTitle";
import SkillsIcon from "../SkillsIcon";
export default function About(props) {
  return (
    <section id="#about">
      <SectionTitle name={props.name} />

      <p>
        recent graduate at the universtity of texas at dallas with a bachelor’s
        in computer science. current student at the university of texas pursuing
        a master’s in data science. i have an interest in frontend and web
        development.
      </p>

      <h4>skills:</h4>
      <SkillsIcon name="React" />
      <SkillsIcon name="Java" />
      <SkillsIcon name="C++" />
      <SkillsIcon name="C" />
      <SkillsIcon name="Linux" />
      <SkillsIcon name="CSS" />
      <SkillsIcon name="HTML" />
    </section>
  );
}
