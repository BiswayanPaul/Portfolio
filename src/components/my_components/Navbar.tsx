import { useEffect, useState } from "react";
import { FiMenu, FiMoon, FiSun, FiX } from "react-icons/fi";
import { cn } from "@/lib/utils";
import { profile } from "@/Data/Profile";

interface NavbarProps {
  dark: boolean;
  toggleMode: () => void;
}

const sections = ["home", "about", "experience", "projects", "skills", "contact"];

function Navbar({ dark, toggleMode }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  // Highlight the link of the section currently in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const linkClass = (item: string) =>
    cn(
      "rounded-md px-3 py-2 text-sm font-medium transition-colors",
      active === item
        ? "text-indigo-600 dark:text-indigo-400"
        : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
    );

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-slate-50/80 backdrop-blur-md transition-colors duration-300 dark:border-slate-800/70 dark:bg-slate-950/80">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#home" className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">
          {profile.name}
          <span className="text-indigo-600 dark:text-indigo-400">.</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {sections.map((item) => (
            <li key={item}>
              <a href={`#${item}`} className={cn(linkClass(item), "capitalize")}>
                {item}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary hidden px-4 py-2 sm:inline-flex"
          >
            Resume
          </a>
          <button
            onClick={toggleMode}
            aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
            className="icon-link"
          >
            {dark ? <FiSun size={20} /> : <FiMoon size={20} />}
          </button>
          <button
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            className="icon-link lg:hidden"
          >
            {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-slate-200 bg-slate-50 px-4 pb-4 pt-2 dark:border-slate-800 dark:bg-slate-950 lg:hidden">
          <ul className="flex flex-col">
            {sections.map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  onClick={() => setMenuOpen(false)}
                  className={cn(linkClass(item), "block text-base capitalize")}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-3 w-full sm:hidden"
          >
            Resume
          </a>
        </div>
      )}
    </header>
  );
}

export default Navbar;
