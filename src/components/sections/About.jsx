import SectionTitle from "../SectionTitle";
export default function Skill(props) {
  return (
    <section
      id="#skills"
      class="w-screen px-4 flex flex-col justify-center items-center"
    >
      <SectionTitle name={props.name} />

      <h1>this is my about section</h1>
    </section>
  );
}
