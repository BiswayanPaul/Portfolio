import { FiArrowRight, FiDownload, FiMapPin } from "react-icons/fi";
import { profile, socialLinks } from "@/Data/Profile";

function Home() {
  return (
    <section
      id="home"
      className="relative scroll-mt-16 overflow-hidden"
    >
      {/* Soft background glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[880px] -translate-x-1/2 rounded-full bg-gradient-to-r from-indigo-400/25 via-sky-400/20 to-fuchsia-400/25 blur-3xl dark:from-indigo-600/20 dark:via-sky-600/10 dark:to-fuchsia-600/20"
      />

      <div className="relative mx-auto grid min-h-[calc(100svh-4rem)] max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 md:grid-cols-[1.4fr_1fr]">
        {/* Introduction */}
        <div className="text-center md:text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-sm font-medium text-slate-700 dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            {profile.role} @ {profile.company}
          </span>

          <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-fuchsia-500 bg-clip-text text-transparent dark:from-indigo-400 dark:to-fuchsia-400">
              {profile.name}
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-slate-600 dark:text-slate-400 md:mx-0 md:text-xl">
            Full-stack engineer working with React, Next.js, Node.js, FastAPI
            and PostgreSQL. I ship production features at TCS Digital while
            independently building and deploying full-stack products
            end-to-end.
          </p>

          <p className="mt-4 inline-flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400">
            <FiMapPin /> {profile.location}
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row md:justify-start">
            <a href="#projects" className="btn-primary">
              View my work <FiArrowRight />
            </a>
            <a
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <FiDownload /> Download resume
            </a>
          </div>

          <div className="mt-8 flex justify-center gap-2 md:justify-start">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="icon-link"
              >
                <Icon size={22} />
              </a>
            ))}
          </div>
        </div>

        {/* Avatar */}
        <div className="order-first flex justify-center md:order-last">
          <div className="rounded-full bg-gradient-to-tr from-indigo-500 via-sky-400 to-fuchsia-500 p-1.5 shadow-2xl shadow-indigo-500/20">
            <img
              src="/avatar.png"
              alt={profile.name}
              className="h-44 w-44 rounded-full bg-slate-100 object-cover sm:h-56 sm:w-56 lg:h-72 lg:w-72 dark:bg-slate-900"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
