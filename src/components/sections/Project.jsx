import ProjectCard from "../ProjectCard";

export default function Project(props) {
  return (
    <section
      id="projects"
      className="w-screen py-16 lg:py-30 flex flex-col items-center"
    >
      <div className="flex pb-15 lg:pb-25">
        <h1 className="text-4xl lg:text-8xl font-medium leading-tight">
          MY PROJECTS
        </h1>
      </div>

      {/* project cards  */}
      <div className="w-full max-w-5xl px-9 lg:px-0 flex flex-col gap-30 ">
        <ProjectCard
          title="NextFlick"
          img="src/assets/nextflick-screenshot.png"
          desc="Movie Recommender System that uses LLMs to generate embeddings and cosine similarity to find recommendations for users based on queried movie"
          github="https://github.com/sophiietran/forkcast.git"
          link="https://next-flick-phi.vercel.app/"
          skills="Python, FastAPI, React, LLMs"
        />
        <ProjectCard
          title="ForkCast"
          img="src/assets/forkcast-screenshot.png"
          desc="Web application that generates recipes using Gemini AI based on ingredients users already have on hand"
          github="https://github.com/sophiietran/forkcast.git"
          skills="React, Gemini AI"
          reverse
        />
        <ProjectCard
          title="GAS - Grader Assignment System"
          img="src/assets/gas-screenshot.png"
          desc="Web application that automates grader selection using resume parsing and matching algorithm to create course assignments for UTD."
          github="https://github.com/cs4485-s25-alagar-t7/gas.git"
          skills="Typescript, React, Docker"
        />
        <ProjectCard
          title="Scaffold: RL for Agent Behavior"
          img="src/assets/scaffold-screenshot.png"
          desc="AI driven reinforcement learning project that trains a simulated airplane agent to learn controlled, goal-oriented behaviors through a custom reward system."
          github="https://github.com/ACM-fResearch/Scaffold.git"
          skills="Unreal Engine, Python"
          reverse
        />
      </div>
    </section>
  );
}
