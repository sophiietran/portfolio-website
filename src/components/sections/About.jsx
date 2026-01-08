import SectionTitle from "../SectionTitle";
export default function Skill(props) {
  return (
    <section
      id="about"
      class="w-screen pt-25 pb-5 px-4 flex flex-col justify-center items-center"
    >
      <SectionTitle name={props.name} />

      <div>
        {/* insert a little icon */}

        <div class="text-[#778069] leading-relaxed mx-12 max-w-3xl ">
          <p class="text-md">
            <span class="font-semibold text-lg">Hello!</span> I am currently a
            Master's student in Data Science at the University of Texas with a
            Bachelor's degree in Computer Science from the Univeristy of Texas
            at Dallas. Last summer, I've had the priviledge to work at Comerica
            Bank as a software developer intern where I was on the Digital
            Engineering team.
          </p>

          <div class="flex justify-center items-center">
            <img src="public/snoopy.png" alt="image of snoopy" class="h-60" />
          </div>

          <p class="mt-2">
            These days, my main focus is in web and frontend development where I
            can combine my creativity with building accessible and user-friendly
            pages. I love to learn and develop new skills and I love to find new
            opportunities for me to apply and grow my knowledge every day.
          </p>
          <p class="mt-4">
            When I am not behind the computer, I find joy in cooking, sketching,
            bartending, running, traveling, and meeting new people!
          </p>
        </div>
      </div>
    </section>
  );
}
