import { useState } from "react";

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
      className="w-full py-20 px-10 flex flex-col md:flex-row gap-10 md:gap-20 justify-center items-start md:items-center"
    >
      {/* title, socials */}
      <div className="flex flex-col gap-4 w-full md:w-auto">
        <h1 className="text-6xl md:text-7xl font-semibold text-[#f1821a] tracking-tight">
          CONTACT ME
        </h1>
        <p className="text-gray-400 text-sm max-w-xs">
          Have a question or want to work together? Drop me a message!
        </p>

        {/* SOCIAL MEDIA */}
        <div className="flex items-center gap-4">
          <h4 className="text-sm text-gray-300 uppercase tracking-widest">
            Socials:
          </h4>
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/sophiietran"
              className="opacity-70 hover:opacity-100 transition-opacity duration-200"
            >
              <img src="/github.svg" alt="github icon" className="h-10 w-10" />
            </a>
            <a
              href="https://www.linkedin.com/in/sophiietran"
              className="opacity-70 hover:opacity-100 transition-opacity duration-200"
            >
              <img
                src="/linkedin.svg"
                alt="linkedin icon"
                className="h-13 w-13"
              />
            </a>
          </div>
        </div>
      </div>

      {/* message form */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3 w-full md:max-w-sm"
      >
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            name="first name"
            placeholder="first name"
            required
            className="w-full sm:w-1/2 rounded-lg border border-[#6efaff] bg-transparent px-4 py-2 text-sm outline-none focus:border-[#f1821a] transition-colors duration-200 placeholder:text-gray-500"
          />
          <input
            type="text"
            name="last name"
            placeholder="last name"
            required
            className="w-full sm:w-1/2 rounded-lg border border-[#6efaff] bg-transparent px-4 py-2 text-sm outline-none focus:border-[#f1821a] transition-colors duration-200 placeholder:text-gray-500"
          />
        </div>

        <input
          type="email"
          name="email"
          placeholder="your email"
          required
          className="w-full rounded-lg border border-[#6efaff] bg-transparent px-4 py-2 text-sm outline-none focus:border-[#f1821a] transition-colors duration-200 placeholder:text-gray-500"
        />

        <textarea
          name="message"
          placeholder="your message"
          required
          rows={5}
          className="w-full rounded-lg border border-[#6efaff] bg-transparent px-4 py-2 text-sm outline-none focus:border-[#f1821a] transition-colors duration-200 placeholder:text-gray-500 resize-none"
        />

        <button
          type="submit"
          className="flex items-center justify-center gap-2 rounded-lg border border-[#6efaff] px-6 py-2 text-sm font-medium hover:bg-[#6efaff] hover:text-black transition-all duration-200 cursor-pointer"
        >
          send message <span>&rarr;</span>
        </button>

        {result && (
          <p
            className={`text-sm text-center ${
              result.startsWith("Thank")
                ? "text-[#6efaff]"
                : result === "sending..."
                  ? "text-gray-400"
                  : "text-red-400"
            }`}
          >
            {result}
          </p>
        )}
      </form>
    </section>
  );
}
