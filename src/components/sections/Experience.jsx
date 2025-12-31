import SectionTitle from "../SectionTitle";
import Job from "../Job";
export default function Experience(props) {
  return (
    <section
      id="experience"
      class="w-screen pt-25 pb-5  px-4 flex flex-col justify-center items-center"
    >
      <SectionTitle name={props.name} />

      <div class="w-full max-w-4xl">
        <Job
          company="Comerica bank"
          title="Software Engineer Intern"
          date="May-August 2025"
        />
      </div>
    </section>
  );
}
