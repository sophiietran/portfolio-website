import useInView from "../hooks/useInView";

export default function ProjectCard(props) {

  const { ref, inView } = useInView({ threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={`group flex flex-col mx-3 lg:mx-0 lg:w-full lg:flex-row lg:gap-5 items-center lg:items-start
        transition-all duration-700 ease-out
        ${inView ? "opacity-100 translate-x-0" : `opacity-0 ${props.reverse ? "translate-x-24" : "-translate-x-24"}`}
        ${props.reverse ? "lg:flex-row-reverse" : "lg:flex-row"}`}
    >
      {/* Image */}
      <div className="relative w-full md:max-w-2xl lg:w-145 lg:h-90 shrink-0">
        <img
          src={props.img}
          alt={`${props.title} screenshot`}
          className="w-full h-full object-cover lg:grayscale lg:brightness-75 lg:transition-all lg:duration-200 lg:group-hover:grayscale-0 lg:group-hover:brightness-90"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col text-center md:max-w-xl">
        <h1
          className={`font-semibold text-2xl ${props.reverse ? "lg:text-left" : "lg:text-right"} pt-4 pb-3 lg:pt-15`}
        >
          {props.title}
        </h1>

        <div
          className={`bg-[#29354a] text-sm p-3 lg:px-5 text-center ${props.reverse ? "lg:text-left lg:-mr-14 z-10 lg:shadow-[4px_5px_6px_rgba(0,0,0,0.5)] " : "lg:text-right lg:-ml-14 z-10 shadow-[-4px_5px_6px_rgba(0,0,0,0.5)]"}`}
        >
          {props.desc}
        </div>

        <div className="flex justify-between items-center pt-2">
          {/* icon links */}
          <div className="flex flex-row gap-3">
            <a href={props.github}>
              <img
                src="/github.svg"
                alt="github"
                className="w-8 h-8"
              />
            </a>

            {props.link && (
              <a href={props.link}>
                <img src="/link.svg" alt="link" className="w-8 h-8" />
              </a>
            )}
          </div>

          {/* skills */}
          {props.skills && (
            <div className="flex flex-wrap gap-2 p-1 justify-start">
              {props.skills.split(",").map((skill, index) => (
                <span
                  key={index}
                  className="font-medium rounded-md py-1 px-1.5 text-xs text-[#6efaff] border"
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
