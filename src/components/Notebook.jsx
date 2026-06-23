import { useState } from "react";
import HeroPage from "./HeroPage";
import AboutPage from "./AboutPage";
import ProjectsPage from "./ProjectsPage";
import BlogPage from "./BlogPage";
import ContactPage from "./ContactPage";

const positions = ["-8px", "-5px", "-2px", "2px", "8px"];
const activePosition = "-10.5px";

export default function Notebook() {
  const [page, setPage] = useState("hero");
  const [selectedBlogId, setSelectedBlogId] = useState("starting");

  const pages = {
    hero: <HeroPage />,
    about: <AboutPage />,
    projects: <ProjectsPage />,
    blog: (
      <BlogPage selectedId={selectedBlogId} onNavigate={setSelectedBlogId} />
    ),
    contact: <ContactPage />,
  };

  return (
    <div className="mx-auto max-w-[96svw] flex gap-3 p-3">
      <div className="relative min-h-[96svh] flex-1">
        <div className="absolute top-1 bottom-1 right-[-4px] w-2 rounded-r-xl border bg-[#f8f5eb]" />
        <div className="absolute top-2 bottom-2 right-[-8px] w-2 rounded-r-xl border bg-[#f8f5eb]" />
        <div className="absolute top-3 bottom-3 right-[-12px] w-2 rounded-r-xl border bg-[#f8f5eb]" />
        <div className="absolute top-4 bottom-4 right-[-16px] w-2 rounded-r-xl border bg-[#f8f5eb]" />
        <div className="absolute top-5 bottom-5 right-[-20px] w-2 rounded-r-xl border bg-[#f8f5eb]" />
        <div className="relative z-10 min-h-[96svh] rounded-xl border bg-white p-0 mb-0 shadow-lg">
          {pages[page]}
        </div>
      </div>
      <div className="flex flex-col gap-2 sm:gap-3 md:gap-5 pt-6 sm:pt-8 md:pt-10">
        {Object.keys(pages).map((key, index) => (
          <button
            key={key}
            onClick={() => setPage(key)}
            className={`
              px-1 py-3
              sm:px-4 sm:py-2.5
              md:px-6 md:py-3
              text-xs sm:text-sm md:text-base
              capitalize
              transition-all duration-300
              rounded-tr-lg rounded-br-lg
              ${
                page === key
                  ? "z-20 bg-white text-red-500 shadow-lg"
                  : "z-10 bg-neutral-200"
              }
            `}
            style={{
              transform:
                page === key
                  ? `translateX(${activePosition}) scale(1.05)`
                  : `translateX(${positions[index]})`,
            }}
          >
            {key}
          </button>
        ))}
      </div>
    </div>
  );
}
