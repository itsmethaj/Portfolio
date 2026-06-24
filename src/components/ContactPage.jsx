import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import arrowImg from "/src/assets/Arrow.png";
export default function Contact() {
  const socials = [
    {
      name: "GitHub",
      icon: <FaGithub size={28} />,
      link: "https://github.com/itsmethaj",
      caption: "where my projects live",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin size={28} />,
      link: "https://linkedin.com/in/mohammad-thaj",
      caption: "professional side of me",
    },
    {
      name: "Instagram",
      icon: <FaInstagram size={28} />,
      link: "https://instagram.com/am_thaj",
      caption: "catch me posting fits",
    },
  ];
  return (
    <section className="w-full px-4 sm:px-6 lg:px-12 py-8 sm:py-12 lg:py-20">
      <div className="mb-6 sm:mb-10 lg:mb-14">
        <h1 className="text-3xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-neutral-300 uppercase">
          Contact
        </h1>
      </div>
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-start">
        <div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Let's
            <span className="bg-gradient-to-r from-red-500 to-orange-600 bg-clip-text text-transparent">
              Build
            </span>
            <br />
            <span className="bg-gradient-to-r from-red-500 to-orange-600 bg-clip-text text-transparent">
              Something
            </span>{" "}
            Cool.
          </h2>

          <p className="mt-6 max-w-lg text-sm sm:text-base lg:text-lg text-neutral-600 leading-7">
            Whether it's a project, internship opportunity, collaboration,
            freelance work, or just a conversation about technology, feel free
            to reach out.
          </p>
        </div>
        <div className="grid gap-4">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-3xl border border-neutral-200 bg-white p-5 sm:p-6 flex items-center justify-between transition-all duration-300 hover:-translate-y-1 hover:border-red-400 hover:shadow-lg"
            >
              <div className="flex items-center gap-4">
                <div className="text-neutral-800">{social.icon}</div>
                <div>
                  <h3 className="font-semibold text-lg">{social.name}</h3>
                  <p className="text-sm text-neutral-500">{social.caption}</p>
                </div>
              </div>
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">
                <img
                  src={arrowImg}
                  alt="Arrow"
                  className="h-4 w-4 object-contain"
                />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
