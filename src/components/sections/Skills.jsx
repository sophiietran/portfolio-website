import SkillsIcon from "../SkillsIcon";

export default function Skills() {
  return (
    <section
      id="skills"
      className="w-screen py-30 flex flex-col md:flex-row bg-linear-to-b from-[rgba(190,98,41,0.1)] via-transparent via-50%"
    >
      {/* Left - Title */}
      <div className="w-full md:w-2/5 flex items-center justify-center md:justify-end px-8 md:pr-10 md:px-0 pb-10 md:pb-0">
        <h1 className="text-6xl md:text-8xl font-medium leading-tight text-center md:text-right">
          MY <span className="md:hidden">SKILLS</span>
          <span className="hidden md:inline">
            <br />
            SKILLS
          </span>
        </h1>
      </div>

      {/* Right - Categories */}
      <div className="w-full md:w-3/5 flex flex-col px-12 md:pl-16 md:pr-36 gap-8 md:gap-10">
        {/* Frontend */}
        <div className="border-b border-[#6efaff] pb-10">
          <h2 className="text-2xl font-semibold mb-5">FRONTEND</h2>
          <div className="flex flex-wrap gap-8">
            <SkillsIcon name="HTML" img="src/assets/HTML5.svg" />
            <SkillsIcon name="CSS" img="src/assets/CSS3.svg" />
            <SkillsIcon name="JS" img="src/assets/JavaScript.svg" />
            <SkillsIcon name="React" img="src/assets/React.svg" />
            <SkillsIcon name="Tailwind" img="src/assets/Tailwind.svg" />
            <SkillsIcon name="TypeScript" img="src/assets/TypeScript.svg" />
          </div>
        </div>

        {/* Backend */}
        <div className="border-b border-[#6efaff] pb-9">
          <h2 className="text-2xl font-semibold mb-5">BACKEND</h2>
          <div className="flex flex-wrap gap-8">
            <SkillsIcon name="Python" img="src/assets/Python.svg" />
            <SkillsIcon name="Java" img="src/assets/Java.svg" />
            <SkillsIcon name="FastAPI" img="src/assets/FastAPI.svg" />
            <SkillsIcon name="SQL" img="src/assets/SQL.svg" />
            <SkillsIcon name="NodeJS" img="src/assets/Node.js.svg" />
          </div>
        </div>

        {/* SWD */}
        <div>
          <h2 className="text-2xl font-semibold mb-5">
            SOFTWARE DEVELOPMENT
          </h2>
          <div className="flex flex-wrap gap-8">
            <SkillsIcon name="Git" img="src/assets/Git.svg" />
            <SkillsIcon name="Jira" img="src/assets/Jira.svg" />
            <SkillsIcon name="Docker" img="src/assets/Docker.svg" />
          </div>
        </div>
      </div>
    </section>
  );
}
