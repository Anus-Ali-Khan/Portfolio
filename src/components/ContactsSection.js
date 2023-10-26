import Link from "next/link";

export const ContactsSection = () => {
  return (
    <section
      id="contact"
      className="container m-auto px-5 mt-20 pb-20 border-b border-b-black flex flex-col justify-center items-center"
    >
      <p className="text-[#C4CFDE] text-6xl font-bold mt-4 text-center">
        Contact Me
      </p>
      <p className="text-[#FF014F] text-xl text-center mt-2">
        Let's connect and turn your dream website/app into reality
      </p>

      <Link
        href={"mailto:anusalikhan1405@gmail.com"}
        target="_blank"
        className="text-white bg-[#FF014F] px-4 py-3 rounded-lg mt-20"
      >
        Connect
      </Link>
    </section>
  );
};
