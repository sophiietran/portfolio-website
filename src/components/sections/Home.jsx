export default function HomeSection() {
  return (
    <section
      id="home"
      className="relative h-screen w-screen flex justify-center items-center bg-linear-to-t from-[rgba(190,98,41,0.1)] via-20% via-transparent"
    >
      <div className="text-center sm:mx-12 mb-12 -mt-7">
        <p className="text-base sm:text-xl">hello! my name is</p>

        <h1 className="font-semibold text-[clamp(2.5rem,12vw,10rem)] tracking-wider animate-fade-in">
          SOPHIE TRAN
        </h1>

        <p className="text-base sm:text-xl lg:text-2xl max-w-4xl mx-auto">
          software engineer. data scientist. located in
          <span className="text-[#f1821a]"> dallas, texas</span>. passionate
          about creating impactful solutions.
        </p>
      </div>

      {/* email + resume */}
      <div className="group/section absolute bottom-24 sm:bottom-32 lg:bottom-45 left-0 right-0 flex flex-col items-center gap-4 text-[#797979]">
        <div className="flex flex-wrap justify-center items-center font-medium text-base sm:text-lg group-hover/section:text-[#ffffff]">
          <p className="mr-2 transition-colors duration-300">get in touch: </p>
          <a
            href="mailto:sophietrann01@gmail.com"
            className="transition-colors duration-300 hover:text-[#6efaff]"
          >
            sophietrann01@gmail.com
          </a>
        </div>

        <a
          href="/sophie-tran-resume-swe.pdf"
          download
          className="group/btn inline-flex items-center px-4 py-1 border-2 border-[#797979] font-medium text-base sm:text-lg transition-all duration-300 group-hover/section:text-[#ffffff] group-hover/section:border-[#ffffff] hover:text-[#6efaff] hover:border-[#6efaff]"
          aria-label="Download Sophie Tran's Resume"
        >
          <div className="relative mr-2 h-6 w-6">
            <img
              src="/download-before.svg"
              alt="Download icon"
              className="absolute inset-0 h-6 transition-opacity duration-300 opacity-100 group-hover/section:opacity-0"
            />
            <img
              src="/download-white.svg"
              alt="Download icon"
              className="absolute inset-0 h-6 transition-opacity duration-300 opacity-0 group-hover/section:opacity-100 group-hover/btn:opacity-0"
            />
            <img
              src="/download-after.svg"
              alt="Download icon"
              className="absolute inset-0 h-6 transition-opacity duration-300 opacity-0 group-hover/btn:opacity-100"
            />
          </div>
          Resume
        </a>
      </div>
    </section>
  );
}
