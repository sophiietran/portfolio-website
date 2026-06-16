export default function ProjectCard(props) {
  return (
    <div
      className={`flex flex-col lg:w-full lg:flex-row lg:gap-5 items-center lg:items-start ${props.reverse ? "lg:flex-row-reverse" : "lg:flex-row"}`}
    >
      {/* Image */}
      <div className="relative w-full lg:w-145 lg:h-90 shrink-0">
        <img
          src={props.img}
          alt={`${props.title} screenshot`}
          className="w-full h-full object-cover lg:grayscale lg:brightness-75 lg:transition-all lg:duration-200 lg:hover:grayscale-0 lg:hover:brightness-100"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col text-center">
        <h1 className={`font-semibold text-2xl ${props.reverse ? "lg:text-left" : "lg:text-right"} pt-4 pb-3 lg:pt-15`}>{props.title}</h1>

        <div className={`bg-[#29354a] text-sm p-2 text-center ${props.reverse ? "lg:-mr-14 z-10" : "lg:-ml-14 z-10"}`}>{props.desc}</div>

        <div className="flex justify-between items-center">
          {/* icon links */}
          <div className="flex flex-row gap-3 p-2">

            <a href={props.github}>
              <img
                src="src/assets/github.svg"
                alt="github"
                className="w-7 h-7"
              />
            </a>

            {props.link && (
              <a href={props.link}>
                <img src="src/assets/link.svg" alt="link" className="w-8 h-8" />
              </a>
            )}
          </div>

          {/* skills */}
          {props.skills && (
            <div className="flex flex-wrap gap-2 p-1 justify-start">
              {props.skills.split(",").map((skill, index) => (
                <span
                  key={index}
                  className="font-medium rounded-md py-1 px-1.5 text-xs text-[#6efaffc7] border"
                >
                  {skill.trim()}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
