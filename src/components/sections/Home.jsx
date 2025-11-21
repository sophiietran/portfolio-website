export default function HomeSection() {
  return (
    <section class="h-screen w-screen flex items-center justify-center">
      <div class="text-left m-12">
        <h3 class="text-[#9D9C91] text-2xl mb-6">hello! my name is </h3>
        <h1 class="text-[#778069] font-semibold text-7xl mb-9">Sophie Tran</h1>
        <h4 class="text-[#9D9C91] text-xl max-w-4xl">
          software engineer. front-end developer. located in
          <strong class="text-[#778069] font-medium"> dallas, texas</strong>.
          passionate about creating impactful solutions.
        </h4>

        {/* email */}
        <div class="flex items-center mt-26">
          <h3 class="text-[#9D9C91] text-lg font-medium mr-2">
            Get in touch:{" "}
          </h3>
          <a
            href="mailto:sophietrann01@gmail.com"
            class="text-[#778069] font-semibold text-lg underline"
          >
            sophietrann01@gmail.com
          </a>
        </div>

        {/* download resume */}
        <a
          href="src/assets/sophie-tran-resume.pdf"
          download
          className="inline-flex items-center bg-[#f2f2f4] px-4 py-1 rounded-md mt-5 border-2 border-[#778069]
                     text-[#778069] font-medium text-lg
                     hover:bg-[#dddcd8] hover:border-[#778069] transition-all duration-200"
          aria-label="Download Sophie Tran's Resume"
        >
          <img
            src="src/assets/download-green.png"
            alt="Download icon"
            className="mr-2 h-6"
          />
          Resume
        </a>
      </div>
    </section>
  );
}
