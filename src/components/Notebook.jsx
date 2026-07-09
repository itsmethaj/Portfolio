import { useState, useEffect, useRef } from "react";
import HeroPage from "./HeroPage";
import AboutPage from "./AboutPage";
import ProjectsPage from "./ProjectsPage";
import BlogPage from "./BlogPage";
import BlogPost from "./BlogPost";
import ContactPage from "./ContactPage";

const positions = ["-8px", "-5px", "-2px", "2px", "8px"];
const activePosition = "-10.5px";

export default function Notebook() {
  const [page, setPage] = useState("hero");
  const [selectedPost, setSelectedPost] = useState(null);

  const isScrolling = useRef(false);
  const projectsRef = useRef(null);
  const blogRef = useRef(null);
const touchStartY = useRef(0);
const touchEndY = useRef(0);
  const pagesOrder = ["hero", "about", "projects", "blog", "contact"];
  const currentIndex = pagesOrder.indexOf(page);
const navigatePage = (direction) => {
  const nextIndex = currentIndex + direction;

  if (nextIndex >= 0 && nextIndex < pagesOrder.length) {
    setPage(pagesOrder[nextIndex]);
  }
};

const shouldStayOnCurrentPage = (direction) => {
  if (page === "blog" && selectedPost) {
    return true;
  }

  const scrollablePages = {
    projects: projectsRef,
    blog: blogRef,
  };

  const activeRef = scrollablePages[page];

  if (!activeRef?.current) return false;

  const el = activeRef.current;

  const threshold = 20;

  const atTop = el.scrollTop <= threshold;
  const atBottom =
    el.scrollTop + el.clientHeight >= el.scrollHeight - threshold;

  return (direction > 0 && !atBottom) || (direction < 0 && !atTop);
};

useEffect(() => {
  const handleWheel = (e) => {
    if (Math.abs(e.deltaY) < 20 || isScrolling.current) return;

    const direction = e.deltaY > 0 ? 1 : -1;

    if (shouldStayOnCurrentPage(direction)) return;

    isScrolling.current = true;

    navigatePage(direction);

    setTimeout(() => {
      isScrolling.current = false;
    }, 800);
  };

  window.addEventListener("wheel", handleWheel, { passive: true });

  return () => {
    window.removeEventListener("wheel", handleWheel);
  };
}, [page, selectedPost]);

useEffect(() => {
  const handleTouchStart = (e) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchMove = (e) => {
    touchEndY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = () => {
    const diff = touchStartY.current - touchEndY.current;

    if (Math.abs(diff) < 60 || isScrolling.current) return;

    const direction = diff > 0 ? 1 : -1;

    if (shouldStayOnCurrentPage(direction)) return;

    isScrolling.current = true;

    navigatePage(direction);

    setTimeout(() => {
      isScrolling.current = false;
    }, 800);
  };

  window.addEventListener("touchstart", handleTouchStart, {
    passive: true,
  });

  window.addEventListener("touchmove", handleTouchMove, {
    passive: true,
  });
  window.addEventListener("touchend", handleTouchEnd);
  return () => {
    window.removeEventListener("touchstart", handleTouchStart);
    window.removeEventListener("touchmove", handleTouchMove);
    window.removeEventListener("touchend", handleTouchEnd);
  };
}, [page, selectedPost]);
useEffect(() => {
  if (page !== "blog") {
    setSelectedPost(null);
  }
}, [page]);
  return (
    <div className="min-h-dvh flex items-center justify-center">
      <div className="w-full max-w-[96svw] h-[96svh] flex gap-3 p-1  select-none">
        <div className="relative h-full flex-1 min-w-0">
          <div className="absolute top-1 bottom-1 right-[-4px] w-2 rounded-r-xl border bg-[#f8f5eb]" />
          <div className="absolute top-2 bottom-2 right-[-8px] w-2 rounded-r-xl border bg-[#f8f5eb]" />
          <div className="absolute top-3 bottom-3 right-[-12px] w-2 rounded-r-xl border bg-[#f8f5eb]" />
          <div className="absolute top-4 bottom-4 right-[-16px] w-2 rounded-r-xl border bg-[#f8f5eb]" />
          <div className="absolute top-5 bottom-5 right-[-20px] w-2 rounded-r-xl border bg-[#f8f5eb]" />

          <div className="relative z-10 h-full rounded-xl border bg-white shadow-lg overflow-hidden">
            <div
              className="flex h-full w-[500%] transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 20}%)` }}
            >
              <div className="w-1/5 h-full overflow-hidden flex-shrink-0">
                <HeroPage />
              </div>

              <div className="w-1/5 h-full overflow-hidden flex-shrink-0">
                <AboutPage />
              </div>

              <div className="w-1/5 h-full overflow-hidden flex-shrink-0">
                <ProjectsPage scrollRef={projectsRef} />
              </div>

              <div className="w-1/5 h-full overflow-hidden flex-shrink-0">
                {selectedPost ? (
                  <BlogPost
                    post={selectedPost}
                    onBack={() => setSelectedPost(null)}
                    scrollRef={blogRef}
                  />
                ) : (
                  <BlogPage scrollRef={blogRef} onOpenPost={setSelectedPost} />
                )}
              </div>

              <div className="w-1/5 h-full overflow-hidden flex-shrink-0">
                <ContactPage />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 sm:gap-3 md:gap-5 pt-6 sm:pt-8 md:pt-10">
          {pagesOrder.map((key, index) => (
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
    </div>
  );
}
