import SkillsIcon from "../SkillsIcon";

export default function Skills() {
  return (
    <section
      id="skills"
      className="w-screen py-30 flex flex-col lg:flex-row bg-linear-to-b from-[rgba(190,98,41,0.1)] via-transparent via-50%"
    >
      {/* Left - Title */}
      <div className="w-full lg:w-2/5 flex items-center justify-center lg:justify-end px-8 lg:pr-10 lg:px-0 pb-10 lg:pb-0">
        <h1 className="text-6xl md:text-8xl font-semibold tracking-tight leading-tight text-center lg:text-right">
          MY <span className="lg:hidden">SKILLS</span>
          <span className="hidden lg:inline">
            <br />
            SKILLS
          </span>
        </h1>
      </div>

      {/* Right - Categories */}
      <div className="w-full lg:w-3/5 flex flex-col px-8 md:px-16 lg:pl-16 lg:pr-36 gap-8 lg:gap-10">
        {/* Frontend */}
        <div className="border-b border-[#6efaff] pb-10">
          <h2 className="text-2xl font-semibold mb-5">FRONTEND</h2>
          <div className="flex flex-wrap gap-6 md:gap-8">
            <SkillsIcon name="HTML" img="/HTML5.svg" />
            <SkillsIcon name="CSS" img="/CSS3.svg" />
            <SkillsIcon name="JS" img="/JavaScript.svg" />
            <SkillsIcon name="React" img="/React.svg" />
            <SkillsIcon name="Tailwind" img="/Tailwind.svg" />
            <SkillsIcon name="TypeScript" img="/TypeScript.svg" />
          </div>
        </div>

        {/* Backend */}
        <div className="border-b border-[#6efaff] pb-9">
          <h2 className="text-2xl font-semibold mb-5">BACKEND</h2>
          <div className="flex flex-wrap gap-6 md:gap-8">
            <SkillsIcon name="Python" img="/Python.svg" />
            <SkillsIcon name="Java" img="/Java.svg" />
            <SkillsIcon name="FastAPI" img="/FastAPI.svg" />
            <SkillsIcon name="SQL" img="/SQL.svg" />
            <SkillsIcon name="NodeJS" img="/Node.js.svg" />
          </div>
        </div>

        {/* SWD */}
        <div>
          <h2 className="text-2xl font-semibold mb-5">SOFTWARE DEVELOPMENT</h2>
          <div className="flex flex-wrap gap-6 md:gap-8">
            <SkillsIcon name="Git" img="/Git.svg" />
            <SkillsIcon name="Jira" img="/Jira.svg" />
            <SkillsIcon name="Docker" img="/Docker.svg" />
          </div>
        </div>
      </div>
    </section>
  );
}
