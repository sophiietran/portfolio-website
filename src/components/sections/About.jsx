import SectionTitle from "../SectionTitle";
export default function Skill(props) {
  return (
    <section
      id="about"
      class="w-screen py-20 px-4 flex flex-col justify-center items-center"
    >
      <SectionTitle name={props.name} />

      <div>
        {/* insert a little icon */}

        <div class="text-[#778069] leading-relaxed mx-12 max-w-3xl ">
          <div class>
            <p>
              <span class="font-semibold text-lg">Hello!</span> I am currently a Master's student in Data
              Science at the University of Texas with a Bachelor's degree in
              Computer Science at the Univeristy of Texas at Dallas. Last
              summer, I've had the priviledge to work at Comerica Bank as a
              software developer intern where I was on the Digital Engineering
              team.
            </p>
          </div>
          <p class="mt-4">
            These days, my main focus is in web and frontend development where I
            can combine my creativity with building accessible, user-friendly
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
