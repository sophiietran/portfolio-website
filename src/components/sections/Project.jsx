import SectionTitle from "../SectionTitle";
import Project from "../ProjectCard";

export default function ProjectSection(props) {
  return (
    <section id="#projects">
      <SectionTitle name={props.name} />

      <Project
        name="ForkCast"
        desc="AI recipe generator"
        github="https://github.com/sophiietran/forkcast.git"
        img=""
      />
      <Project
        name="ForkCast"
        desc="AI recipe generator"
        github="https://github.com/sophiietran/forkcast.git"
        img=""
      />
      <Project
        name="ForkCast"
        desc="AI recipe generator"
        github="https://github.com/sophiietran/forkcast.git"
        img=""
      />
    </section>
  );
}
