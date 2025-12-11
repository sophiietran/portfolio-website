import SectionTitle from "../SectionTitle";
import Job from "../Job";
export default function Experience(props) {
  return (
    <section
      id="experience"
      class="w-screen py-20 px-4 flex flex-col justify-center items-center"
    >
      <SectionTitle name={props.name} />

      <div class="w-full mx-12 px-8 max-w-4xl">
        <Job
          company="COMERICA BANK"
          title="Software Engineer Intern"
          date="May-August 2025"
        />
      </div>
    </section>
  );
}
