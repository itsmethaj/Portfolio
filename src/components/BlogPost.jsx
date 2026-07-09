export default function BlogPost({ post, onBack, scrollRef }) {
  return (
    <section className="w-full h-full px-4 sm:px-6 lg:px-10 py-8 sm:py-12 flex flex-col">
      <button
        onClick={onBack}
        className="mb-8 w-fit rounded-xl border border-neutral-200 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-neutral-500 transition-all duration-300 hover:border-red-400 hover:text-red-500"
      >
        ← Back to Articles
      </button>

      <article
        ref={scrollRef}
        className="flex-1 overflow-y-auto pr-2 custom-scrollbar"
      >
        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-400">
          {post.date}
        </span>

        <h1 className="mt-3 text-4xl md:text-6xl font-black tracking-tight text-neutral-900">
          {post.title}
        </h1>

        <div className="mt-8 border-t border-neutral-200 pt-8 space-y-6 text-base md:text-lg leading-8 text-neutral-600">
          {post.content
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
