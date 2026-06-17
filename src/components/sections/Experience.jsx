import Job from "../Job";

export default function Experience() {
  return (
    <section
      id="experience"
      className="w-screen py-30 px-6 flex flex-col justify-start items-center bg-linear-to-b from-[#10151d] to-[#10151d] via-[#f1821a37]"
    >
      <h1 className="text-6xl md:text-8xl font-semibold tracking-tight">
        EXPERIENCE
      </h1>

      <div className="flex flex-col gap-20 border-l-2 mt-15 border-[#f1821a] ">
        <Job
          company="The University of Texas at Austin"
          title="M.S in Data Science"
          date="Jan 2026 - Present"
          desc=""
          skills=""
        />
        <Job
          company="Comerica Bank"
          title="Software Engineer Intern"
          date="May - Aug 2025"
          desc="Delivered Salesforce features across full SDLC environments through Copado CI/CD pipelines, including expanding a complaint management system with automated priority-based due dates."
          skills="Salesforce, Java, SQL, CI/CD"
        />
        <Job
          company="The University of Texas at Dallas"
          title="B.S in Computer Science"
          date="Aug 2022 - May 2025"
          desc=""
          skills=""
        />
      </div>
    </section>
  );
}
