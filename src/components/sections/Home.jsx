export default function HomeSection() {
  return (
    <section
      id="home"
      class="relative h-screen w-screen flex justify-center items-center bg-linear-to-t from-[rgba(190,98,41,0.1)] via-transparent via-20% to-transparent"
    >
      <div class="text-center m-12 -mt-7">
        <p class="text-xl">hello! my name is</p>

        <h1 class="font-bold text-[10rem] tracking-wider ">SOPHIE TRAN</h1>

        <p class="text-2xl max-w-4xl mx-auto">
          software engineer. front-end developer. located in
          <span class="text-[#f1821a]"> dallas, texas</span>. passionate about
          creating impactful solutions.
        </p>

        {/* email + resume */}
        <div class="group absolute bottom-45 left-0 right-0 flex flex-col items-center gap-4 text-[#797979] ">
          <div class="flex flex-wrap justify-center items-center font-medium text-lg sm:flex-nowrap group-hover:text-[#ffffff]">
            <p class="mr-2 transition-colors duration-300 ">get in touch: </p>
            <a
              href="mailto:sophietrann01@gmail.com"
              class="transition-colors duration-300 hover:text-[#f1821a]"
            >
              sophietrann01@gmail.com
            </a>
          </div>

          <a
            href="/sophie-tran-resume-swe.pdf"
            download
            class="inline-flex items-center px-4 py-1 border-2 border-[#797979]
            font-medium text-lg transition-all duration-300 group-hover:text-[#ffffff] group-hover:border-[#ffffff] hover:text-[#f1821a] hover:border-[#f1821a]"
            aria-label="Download Sophie Tran's Resume"
          >
            <img
              src="/download-green.png"
              alt="Download icon"
              class="mr-2 h-6"
            />
            Resume
          </a>
        </div>
      </div>
    </section>
  );
}
