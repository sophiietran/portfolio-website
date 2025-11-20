export default function HomeSection() {
  return (
    <section class="h-screen w-screen flex items-center justify-center">
      <div class="text-left m-12">
        <h3 class="text-[#9D9C91] text-2xl mb-7">hello! my name is </h3>
        <h1 class="text-[#778069] font-semibold text-7xl mb-9">Sophie Tran</h1>
        <h4 class="text-[#9D9C91] text-xl max-w-4xl">
          software engineer. front-end developer. passionate about creating
          impactful tings huzzah blah blah blah blah blah blah dallas, tx
          contact: email name location contact experience
        </h4>

        <div class="flex items-center mt-33">
          <h3 class="text-[#9D9C91] text-lg font-medium mr-2">Get in touch: </h3>
          <a
            href="mailto:sophietrann01@gmail.com"
            class="text-[#778069] font-semibold text-lg underline"
          >
            sophietrann01@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}
