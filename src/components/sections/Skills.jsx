import SectionTitle from "../SectionTitle";
export default function Skills(props) {
  return (
    <section
      id="skills"
      class="w-screen py-20 px-4 flex flex-col justify-center items-center"
    >
      <SectionTitle name={props.name} />

      <div class="max-w-4xl w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 text-[#9d9c91] justify-items-center">
        {/* languages */}
        <div class>
          <h1 class="text-[#778069] text-lg font-semibold mb-3">LANGUAGES</h1>
          <ul class="text-center md:text-left space-y-0.5">
            <li>C</li>
            <li>C++</li>
            <li>CSS</li>
            <li>Java</li>
            <li>Javascript</li>
            <li>HTML</li>
            <li>SQL</li>
          </ul>
        </div>

        {/* frameworks */}
        <div class>
          <h1 class="text-[#778069] text-lg font-semibold mb-3">FRAMEWORKS</h1>

          <ul class="text-center md:text-left space-y-0.5">
            <li>React</li>
            <li>Tailwind</li>
            <li>Node.js</li>
          </ul>
        </div>

        {/* Tools */}
        <div class>
          <h1 class="text-[#778069] text-lg text-center md:text-left font-semibold mb-3">
            TOOLS
          </h1>

          <ul class="text-center md:text-left space-y-0.5">
            <li>Figma</li>
            <li>Git</li>
            <li>Github</li>
            <li>JIRA</li>
            <li>Salesforce</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
