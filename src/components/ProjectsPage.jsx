import arrowImg from "/src/assets/Arrow.png";

const projects = [
  {
    title: "Glassy Tube",
    category: "YouTube UI Clone",
    description:
      "A modern YouTube clone built with React that evolved from static HTML into a fully functional application powered by live API data.",
    link: "https://itsmethaj.github.io/glassy-tube/",
  },
  {
    title: "Hospital Management System",
    category: "CLI Application",
    description:
      "A C-based hospital management system built to strengthen my understanding of data structures and file handling through practical implementation.",
    link: "https://drive.google.com/file/d/103iFRL1LKLy7hxfRZrvajhxV3IBMkH0S/view",
  },
  {
    title: "Gym Membership System",
    category: "Database Design",
    description:
      "A complete relational database project featuring seven interconnected tables, normalization, and real-world data relationships.",
    link: "https://drive.google.com/file/d/1pW7xIoTICTCj0ZfJt-rcK1XjAqawtC9r/view",
  },
  {
    title: "Notebookfolio",
    category: "React Website",
    description:
      "My first attempt at building a personal portfolio. Created for fun while exploring React and Vite, and experimenting with creative Notebook Inspired UI design.",
    link: "https://notebookfolio.netlify.app/",
  },
  {
    title: "Task Tracker",
    category: "Django Web App",
    description:
      "A lightweight productivity application built with Django featuring task creation, completion tracking, and deletion.",
    link: "https://github.com/itsmethaj/task_tracker",
  },
  {
    title: "Thudipp",
    category: "Blood Donor Platform",
    description:
      "A privacy-focused blood donor platform with donor search, volunteer coordination, and administration tools.",
    link: "https://thudipp.netlify.app/",
  },
  {
    title: "Portfolio",
    category: "Portfolio Website",
    description:
      "My professional portfolio showcasing projects, technical expertise, and continuous learning. Developed with React, Vite, and Tailwind CSS, focusing on clean design and a seamless user experience.",
    link: "https://itsmethaj.netlify.app/",
  },
];

export default function ProjectsPage({ scrollRef }) {
  return (
    <section className="w-full h-full px-4 sm:px-6 lg:px-10 py-8 sm:py-12 lg:py-20 flex flex-col">
      <div className="mb-4 sm:mb-10 lg:mb-14 flex-shrink-0">
        <h1 className="text-3xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-neutral-300 uppercase">
          Projects
        </h1>
      </div>
      <div
        ref={scrollRef}
        className="flex-1 overflow-y-auto pr-2 custom-scrollbar scroll-smooth touch-pan-y "
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-5 w-full pb-40">
          {projects.map((project, index) => (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden w-full min-h-[220px] sm:min-h-[250px] md:min-h-[270px] lg:min-h-[274px] mt-5 rounded-2xl sm:rounded-3xl border border-neutral-200 bg-white p-4 sm:p-5 md:p-6 lg:p-7 flex flex-col transition-all duration-500 hover:-translate-y-2 hover:border-neutral-400 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] before:absolute before:left-0 before:top-0 before:h-1 before:w-0 before:bg-red-400 before:transition-all before:duration-500 hover:before:w-full"
            >
              <div className="absolute left-4 sm:left-5 top-0 h-full w-px bg-red-200" />

              <span className="absolute right-3 top-3 sm:right-4 sm:top-4 text-4xl sm:text-5xl md:text-6xl font-black text-red-200 md:text-neutral-100 select-none transition-colors duration-500 group-hover:text-red-500">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="relative z-10 pl-3 sm:pl-4 h-full flex flex-col">
                <span className="inline-flex items-center rounded-full bg-neutral-100 px-2.5 py-1 text-[9px] sm:text-[10px] md:text-[11px] font-medium uppercase tracking-widest text-neutral-600 w-fit">
                  {project.category}
                </span>

                <h2 className="mt-3 text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-neutral-900">
                  {project.title}
                </h2>

                <p className="mt-3 text-xs sm:text-sm md:text-[15px] leading-5 sm:leading-6 md:leading-7 text-neutral-600 line-clamp-3">
                  {project.description}
                </p>

                <div className="mt-auto flex items-center gap-2 text-xs sm:text-sm md:text-base font-semibold text-neutral-900">
                  View Project
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">
                    <img
                      src={arrowImg}
                      alt="Arrow"
                      className="h-4 w-4 object-contain"
                    />
                  </span>
                </div>
              </div>

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-transparent via-transparent to-neutral-50" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
