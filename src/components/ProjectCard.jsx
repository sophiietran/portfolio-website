export default function ProjectCard(props) {
  return (
    <div class="relative bg-[#f2f2f4] text-[#778069] flex flex-col p-4 h-55 w-[375px] border border-[#b9b3ab] hover:bg-[#e9e7e3] transition-all duration-500 shadow-sm transform hover:-rotate-1 hover:-translate-y-1 hover:shadow-2xl">
      {/* title */}
      <h2 class="font-semibold text-xl mb-2">{props.title}</h2>
      {/* description */}
      <p class="text-[#9d9c91] font-regular text-md my-1">{props.desc}</p>

      {/* skills and github */}
      <div class="absolute bottom-4 left-4 right-5 flex justify-between items-center pt-4">
        <ul class="flex flex-wrap text-sm font-light">
          {props.skills.map((skill, index) => (
            <li
              key={index}
              class="font-mono text-[#778069] px-2 pr-4 rounded-md"
            >
              {skill}
            </li>
          ))}
        </ul>

        <a href={props.github} class="place-self-end mt-auto mb-1 ml-1">
          <img src="src/assets/github-icon.svg" alt="github logo" class="" />
        </a>
      </div>
    </div>
  );
}
