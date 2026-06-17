// props: name nad image link
export default function SkillsIcon(props) {
  return (
    <div className="flex flex-col items-center gap-2 text-[#ffffffae] transition-transform duration-200 hover:scale-107 cursor-pointer">
      <img
        src={props.img}
        alt={`${props.name} icon`}
        className="w-10 h-10 md:w-15 md:h-15"
      />
      <p className="text-xs md:text-sm">{props.name}</p>
    </div>
  );
}
