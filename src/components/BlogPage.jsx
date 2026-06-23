import { useState } from "react";
import blogs from "./BlogData.jsx";

export default function BlogPage() {
  const [selectedPost, setSelectedPost] = useState(null);

  if (selectedPost) {
    return (
      <section className="w-full max-w-7xl px-4 sm:px-6 lg:px-12 py-8 sm:py-12 lg:py-20 h-full flex-1 flex flex-col justify-center animate-fadeIn">
        <div className="w-full relative">
          <div className="mb-4 sm:mb-6">
            <button
              className="inline-flex items-center text-xs font-semibold uppercase tracking-widest text-neutral-400 hover:text-red-500 transition-colors duration-300 border p-2 rounded-xl border-solid"
              onClick={() => setSelectedPost(null)}
            >
               Back to articles
            </button>
          </div>
          <div className="space-y-1 ">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-neutral-900 leading-tight">
              {selectedPost.title}
            </h1>
            <span className="text-xs font-semibold uppercase tracking-widest text-neutral-400 block">
              {selectedPost.date}
            </span>
          </div>
          <div className="mt-8 space-y-4 tracking-tighter md:text-lg leading-relaxed text-neutral-600 font-normal border-t border-neutral-100 pt-8">
            {selectedPost.content
              .split("\n")
              .map((para, i) => (para.trim() ? <p key={i}>{para}</p> : null))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full max-w-7xl px-4 sm:px-6 lg:px-12 py-8 sm:py-12 lg:py-20">
      <div className="mb-4 sm:mb-10 lg:mb-14">
        <h1 className="text-3xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-neutral-300 uppercase">
          Projects
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 w-full">
        {blogs.map((post) => (
          <div
            key={post.id}
            onClick={() => setSelectedPost(post)}
            className="group cursor-pointer rounded-xl border border-neutral-200 bg-white p-5 shadow-sm transition-all duration-300 hover:border-red-500 hover:shadow-md flex flex-col justify-between"
          >
            <div>
              <span className="text-[10px] font-semibold uppercase tracking-widest text-neutral-400 block mb-2">
                {post.date}
              </span>
              <h2 className="text-xl font-bold tracking-tight text-neutral-900 group-hover:text-red-500 transition-colors duration-300 line-clamp-2">
                {post.title}
              </h2>
              <p className="mt-2 text-sm text-neutral-500 line-clamp-3 tracking-tight font-normal">
                {post.content}
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-neutral-50 flex items-center text-xs font-medium text-red-500 gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Read Article <span>→</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
