export default function SectionTitle(props) {
  return (
    <div class="flex items-center w-full max-w-4xl text-lg text-[#b9b3ab] mb-12">
      {/* title */}
      <h1 class=" font-mono ml-8 uppercase">{props.name}</h1>
      {/* line */}
      <div class="grow h-0.5 bg-[#b9b3ab] mx-10 "></div>
    </div>
  );
}
