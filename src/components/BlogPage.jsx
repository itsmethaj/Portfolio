import { useState } from "react";
import blogs from "./BlogData";
import arrowImg from "/src/assets/Arrow.png";

export default function BlogPage({ scrollRef }) {
  const [selectedPost, setSelectedPost] = useState(null);

  if (selectedPost) {
    return (
      <section className="w-full px-4 sm:px-6 lg:px-10 py-8 sm:py-12 animate-fadeIn">
        <button
          onClick={() => setSelectedPost(null)}
          className="self-start mb-8 rounded-xl border border-neutral-200 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-neutral-500 transition-all duration-300 hover:border-red-400 hover:text-red-500"
        >
          ← Back to Articles
        </button>

        <article className="flex-1 overflow-y-auto pr-2">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-400">
            {selectedPost.date}
          </span>

          <h1 className="mt-3 text-4xl md:text-6xl font-black tracking-tight text-neutral-900">
            {selectedPost.title}
          </h1>

          <div className="mt-8 border-t border-neutral-200 pt-8 space-y-6 text-base md:text-lg leading-8 text-neutral-600">
            {selectedPost.content
              .split("\n")
              .filter(Boolean)
              .map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
          </div>
        </article>
      </section>
    );
  }

  return (
    <section className="w-full h-full px-4 sm:px-6 lg:px-10 py-8 sm:py-12 lg:py-20 flex flex-col">
      <div className="mb-4 sm:mb-10 lg:mb-14 flex-shrink-0">
        <h1 className="text-3xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-neutral-300 uppercase">
          Blog
        </h1>
      </div>

      <div
        ref={scrollRef}
        className="flex-1 overflow-y-auto pr-2 custom-scrollbar scroll-smooth "
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-5 w-full pb-40">
          {blogs.map((post, index) => (
            <button
              key={post.id}
              onClick={() => setSelectedPost(post)}
              className="group relative overflow-hidden w-full min-h-[220px] sm:min-h-[250px] md:min-h-[270px] lg:min-h-[274px] mt-4 rounded-2xl sm:rounded-3xl border border-neutral-200 bg-white p-4 sm:p-5 md:p-6 lg:p-7 flex flex-col transition-all duration-500 hover:-translate-y-2 hover:border-neutral-400 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] before:absolute before:left-0 before:top-0 before:h-1 before:w-0 before:bg-red-400 before:transition-all before:duration-500 hover:before:w-full"
              >
              <div className="absolute left-4 sm:left-5 top-0 h-full w-px bg-red-200" />

              <div className="relative z-10 pl-3 sm:pl-4 h-full flex flex-col">
                <span className="inline-flex items-center rounded-full bg-neutral-100 px-2.5 py-1 text-[9px] sm:text-[10px] md:text-[11px] font-medium uppercase tracking-widest text-neutral-600 w-fit">
                  {post.date}
                </span>
                <h2 className="mt-3 text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-neutral-900 transition-colors duration-300 group-hover:text-red-500 line-clamp-2">
                  {post.title}
                </h2>
                <p className="mt-3 text-xs sm:text-sm md:text-[15px] leading-5 sm:leading-6 md:leading-7 text-neutral-600 line-clamp-3">
                  {post.content}
                </p>
                <div className="mt-auto flex items-center gap-2 text-xs sm:text-sm md:text-base font-semibold text-neutral-900  group-hover:text-red-500 ">
                  Read Article
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
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}