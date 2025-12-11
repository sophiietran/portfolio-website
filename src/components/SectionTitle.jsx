export default function SectionTitle(props) {
  return (
    <div class="flex items-center w-full m-8 max-w-4xl text-lg text-[#b9b3ab] ">
      <div>
        <h1 class=" ml-8 uppercase">{props.name}</h1>
      </div>
      <div class="grow h-0.5 bg-[#b9b3ab] mx-10 "></div>
    </div>
  );
}
