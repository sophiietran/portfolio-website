import SectionTitle from "../SectionTitle";
export default function Contact(props) {
  return (
    <section
      id="contact"
      class="w-screen px-4 flex flex-col justify-center items-center"
    >
      <SectionTitle name={props.name} />
    </section>
  );
}
