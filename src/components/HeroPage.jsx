import { Download, FileText } from "lucide-react"; 

export default function HeroPage() {
  return (
    <section className="w-full max-w-[96svw] mx-auto px-4 sm:px-6 lg:px-12 py-8 sm:py-12 lg:py-20 h-full flex-1 flex flex-col justify-center">
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="max-w-xl relative lg:col-span-7">
          <div className="space-y-1">
            <h1 className="text-4xl md:text-7xl font-extrabold tracking-tighter text-neutral-500 uppercase">
              Mohammad Thaj
            </h1>
          </div>

          <h3 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-res-200 text-red-500 tracking-tighter">
            Computer Science Student & Frontend Developer
          </h3>

          <p className="mt-6 max-w-2xl text-sm sm:text-base md:text-lg text-neutral-600 leading-relaxed font-normal tracking-tighter">
            I build modern web applications with React, JavaScript, Tailwind
            CSS, PostgreSQL, and Supabase. Passionate about creating clean user
            experiences and solving real-world problems through software.
          </p>

          <div className="mt-10 pt-6 border-t border-neutral-100">
            <div className="flex flex-wrap gap-2 max-w-2xl">
              {[
                "React",
                "JavaScript",
                "Tailwind CSS",
                "PostgreSQL",
                "Supabase",
                "Python",
                "C/C++",
                "HTML & CSS",
              ].map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center rounded-full bg-white border border-red-200 px-3.5 py-1.5 text-xs font-medium text-red-500 shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-3 flex justify-center lg:justify-end w-full -mt-8 sm:mt-0 lg:pt-0">
          <div className="relative group w-full max-w-[270px] sm:max-w-[320px]">
            <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-20 sm:w-24 h-5 sm:h-6 bg-amber-100/60 border border-amber-200/40 shadow-xs rotate-[-1.5deg] z-20 flex items-center justify-center after:content-[''] after:absolute after:inset-y-0 after:left-0 after:border-l after:border-dashed after:border-amber-300/50 before:content-[''] before:absolute before:inset-y-0 before:right-0 before:border-r before:border-dashed before:border-amber-300/50" />
            <div className="relative bg-[#fbfbfa] border border-neutral-200 rounded-sm p-4 sm:p-6 shadow-[4px_4px_12px_rgba(0,0,0,0.04)] transition-all duration-300 group-hover:shadow-[10px_10px_20px_rgba(0,0,0,0.06)] group-hover:-translate-y-1 rotate-[1.5deg] group-hover:rotate-0">
              <div className="absolute inset-0 opacity-[0.12] pointer-events-none rounded-sm bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:16px_24px]" />

              <div className="relative z-10 flex flex-col justify-between gap-4 sm:gap-6">
                <div className="flex items-start justify-between">
                  <div className="p-2 bg-neutral-100 border border-neutral-200/60 rounded text-neutral-600">
                    <FileText size={20} strokeWidth={1.5} />
                  </div>
                  <span className="text-[9px] sm:text-[10px] font-mono tracking-widest text-neutral-400 uppercase bg-neutral-100/80 px-2 py-0.5 rounded border border-neutral-200/40">
                    RESUME.PDF
                  </span>
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-neutral-700 tracking-tight">
                    Looking for the full story?
                  </h4>
                  <p className="text-[11px] sm:text-xs text-neutral-500 mt-1 leading-normal tracking-tight">
                    Grab a clean, printable overview of my academic background
                    and core technical skill set.
                  </p>
                </div>
                <a
                  href="src/assets/Mohammad Thaj_resume (1).pdf"
                  download="Mohammad_Thaj_Resume.pdf"
                  className="w-full flex items-center justify-center gap-2 bg-neutral-900 hover:bg-red-500 text-white font-medium text-xs py-2.5 sm:py-3 px-4 rounded transition-all duration-300 shadow"
                >
                  <Download size={12} />
                  Download CV
                </a>
              </div>
            </div>
            <div className="absolute inset-0 bg-white border border-neutral-200/80 shadow-xs rounded-sm -z-10 translate-x-1 translate-y-1.5 rotate-[-1deg]" />
            <div className="absolute inset-0 bg-neutral-50 border border-neutral-200/60 rounded-sm -z-20 translate-x-1.5 translate-y-2 rotate-[2deg]" />
          </div>
        </div>
      </div>
    </section>
  );
}