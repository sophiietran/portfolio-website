export default function Job(props){
    return (
      <div class="flex justify-between items-start pb-9 ">
        {/* company + title */}
        <div class="flex flex-col">
          <h3 class="text-[#778069] text-lg font-semibold uppercase">{props.company}</h3>
          <h4 class="text-[#9d9c91]">{props.title}</h4>
        </div>

        {/* date */}
        <div class="flex text-right">
          <p class="italic text-[#b9b3ab] text-md">{props.date}</p>
        </div>
      </div>
    );
}