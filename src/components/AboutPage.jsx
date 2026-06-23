export default function About() {
  return (
    <section className="w-full max-w-7xl px-4 sm:px-6 lg:px-12 py-8 sm:py-12 lg:py-20">
      <div className="mb-4 sm:mb-10 lg:mb-14">
        <h1 className="text-3xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-neutral-300 uppercase">
          ABOUT ME
        </h1>
      </div>
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start">
        <div className="lg:col-span-8 space-y-8 max-w-9xl">
          <div className="mb-1">
            <h2 className="text-3xl md:text-7xl font-extrabold tracking-tighter text-neutral-900 leading-none">
              Hi, I'm
            </h2>
            <h2 className="text-4xl md:text-7xl font-extrabold tracking-tighter mt-0 bg-gradient-to-r from-red-500 to-orange-600 bg-clip-text text-transparent leading-tight">
              Mohammad Thaj.
            </h2>
          </div>

          <div className="space-y-2 tracking-tighter md:text-lg lg:text-2xl leading-relaxed text-neutral-600 font-base">
            <p>
              I'm Mohammad Thaj, a 3rd year Computer Science student under
              Calicut University. I got into tech out of curiosity and ended up
              enjoying it far more than I expected.
            </p>

            <p>
              My favorite part of coding is seeing an idea turn into something
              real,that moment when everything finally works the way you
              imagined. I started with HTML and C++, and over time moved into
              JavaScript, React, PostgreSQL, and Supabase.
            </p>

            <p>
              Most of what I know comes from building things, breaking things,
              and figuring out how to fix them. I try to learn from everywhere I
              can like from friends and sometimes by
              exploring projects that catch my attention.
            </p>

            <p>
              Right now, I'm focused on building meaningful projects, improving
              my skills, and growing as a developer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
