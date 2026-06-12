export default function Job(props) {
  return (
    <div className="flex items-start pl-8 relative">
      {/* Circle on the timeline */}
      <div className="absolute -left-1.75 top-2 w-3 h-3 rounded-full bg-[#f1821a] shrink-0" />

      {/* Company, title, desc, skills */}
      <div className="max-w-xl mt-1">
        {/* Date */}
        <p className="text-sm text-[#6efaffc7] mb-1 md:mb-2">{props.date}</p>
        <h3 className="text-lg pb-2 uppercase">{props.company}</h3>
        <h4 className="italic pb-3 font-semibold">{props.title}</h4>
        <p className="pb-2 text-sm text-[#a4a2a2]">{props.desc}</p>

        {props.skills && (
          <div className="flex gap-2 flex-wrap mt-2">
            {props.skills.split(",").map((skill, index) => (
              <span
                key={index}
                className="border border-[#6efaff] px-2 py-1 rounded text-[#6efaff] text-sm"
              >
                {skill.trim()}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
