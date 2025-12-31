import SectionTitle from "../SectionTitle";
import ProjectCard from "../ProjectCard";

export default function Project(props) {
  return (
    <section
      id="projects"
      class="w-screen pt-25 pb-5 px-4 flex flex-col justify-center items-center"
    >
      <SectionTitle name={props.name} />

      {/* project cards  */}
      <div class="flex flex-wrap justify-center gap-10 px-6 w-full max-w-7xl">
        <ProjectCard
          title="ForkCast"
          desc="Web application that generates recipes using Gemini AI based on ingredients users already have on hand"
          github="https://github.com/sophiietran/forkcast.git"
          skills={["React", "Gemini AI"]}
        />
        <ProjectCard
          title="GAS - Grader Assignment System"
          desc="Web application that automates grader selection using resume parsing and matching algorithm to create course assignments for UTD."
          github="https://github.com/cs4485-s25-alagar-t7/gas.git"
          skills={["Typescript", "Docker"]}
        />
        <ProjectCard
          title="Scaffold: RL for Agent Behavior"
          desc="AI driven reinforcement learning project that trains a simulated airplane agent to learn controlled, goal-oriented behaviors through a custom reward system."
          github="https://github.com/ACM-Research/Scaffold.git"
          skills={["Unreal Engine", "Python"]}
        />
      </div>
    </section>
  );
}
