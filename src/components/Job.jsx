export default function Job(props){
    return (
      <div class="flex justify-between items-start gap-30 mx-10 mb-9">
        {/* company + title */}
        <div class="flex flex-col">
          <h3 class="text-[#778069] text-lg font-semibold">{props.company}</h3>
          <h4 class="text-[#778069]">{props.title}</h4>
        </div>

        {/* date */}
        <div class="flex">
          <p class="italic text-[#b9b3ab] text-md">{props.date}</p>
        </div>
      </div>
    );
}