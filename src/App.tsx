// src/App.tsx
import { useState, useEffect } from "react";
import Navbar from "./components/my_components/Navbar";
import Home from "./components/my_components/Home";
import About from "./components/my_components/About";
import Experience from "./components/my_components/Experience";
import Projects from "./components/my_components/Projects";
import Skills from "./components/my_components/Skills";
import Contact from "./components/my_components/Contact";
import { profile } from "./Data/Profile";

function getInitialTheme(): boolean {
  try {
    const saved = localStorage.getItem("theme");
    if (saved) return saved === "dark";
  } catch {
    // Storage unavailable (e.g. private mode); fall back to the OS preference
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

function App() {
  const [dark, setDark] = useState<boolean>(getInitialTheme);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    try {
      localStorage.setItem("theme", dark ? "dark" : "light");
    } catch {
      // Ignore: theme just won't persist across visits
    }
  }, [dark]);

  return (
    <>
      <Navbar dark={dark} toggleMode={() => setDark((prev) => !prev)} />
      <main>
        <Home />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="border-t border-slate-200 py-8 text-center text-sm text-slate-500 dark:border-slate-800 dark:text-slate-400">
        © {new Date().getFullYear()} {profile.name}. Built with React &amp; Tailwind CSS.
      </footer>
    </>
  );
}

export default App;
