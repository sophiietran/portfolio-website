import { useState } from "react";
import SectionTitle from "../SectionTitle";

export default function Contact(props) {

  const [result, setResult] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent the default page reload
    setResult("sending...");

    const formData = new FormData(e.target);
    formData.append("access_key", "891e5531-ba4d-40ae-84a9-94d4f97a6969");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Thank you! I’ll be in touch shortly");
      e.target.reset(); // clear the form
    } else {
      setResult("Oops! Something went wrong. Please try again.");
    }
  };


  return (
    <section
      id="contact"
      class="w-screen h-screen py-20 px-4 flex flex-col justify-start items-center"
    >
      <SectionTitle name={props.name} />

      <h1 class="text-xl font-semibold text-[#778069] mb-5">
        send me a message!
      </h1>

      <form onSubmit={handleSubmit} class="flex flex-col items-center ">
        <input
          type="text"
          name="first name"
          placeholder="first name"
          required
          class="bg-[#fefefe] text-[#515b42] w-md p-1.5 px-4 rounded-md m-3 border border-[#b9b3ab] focus:outline-none focus:ring-1 focus:ring-[#778069]"
        />

        <input
          type="text"
          name="last name"
          placeholder="last name"
          required
          class="bg-[#fefefe] text-[#515b42] w-md p-1.5 px-4 rounded-md m-3 border border-[#b9b3ab] focus:outline-none focus:ring-1 focus:ring-[#778069]"
        />

        <input
          type="email"
          name="email"
          placeholder="your email"
          required
          class="bg-[#fefefe] text-[#515b42] w-md p-1.5 px-4 rounded-md m-3 border border-[#b9b3ab] focus:outline-none focus:ring-1 focus:ring-[#778069]"
        />

        <textarea
          name="message"
          placeholder="your message"
          required
          class="bg-[#fefefe] text-[#515b42] w-md p-1.5 px-4 rounded-md m-3 border h-40 border-[#b9b3ab] focus:outline-none focus:ring-1 focus:ring-[#778069]"
        ></textarea>

        <button
          type="submit"
          class="bg-[#778069] text-[#fefefe] p-2 px-6 mt-5 rounded-md hover:bg-[#576245] transition-all duration-200"
        >
          <div class="flex justify-center items-center gap-3">
            <h1 class="text-base font-medium">send message </h1>
            <p class="font-bold text-xl">&rarr;</p>
          </div>
        </button>
      </form>

      {/* Success / Error Message */}
      {result && (
        <p className="text-[#778069] mt-4 font-medium text-center">{result}</p>
      )}
    </section>
  );
}

