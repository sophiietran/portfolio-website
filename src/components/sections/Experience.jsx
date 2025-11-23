import SectionTitle from "../SectionTitle";
import Job from "../Job";
export default function Experience(props) {
  return (
    <section id="#experience" class="h-screen w-screen">
      <SectionTitle name = {props.name}/>
      <Job
        company = "Comerica Bank"
        title = "Software Engineer Intern"
        date = "May-August 2025"
        desc = "enter in a small description of responsibilities at this company"
        />
    </section>
  );
}
