// src/App.tsx
import { useState, useEffect } from "react";
import Navbar from "./components/my_components/Navbar";
import Home from "./components/my_components/Home";
import About from "./components/my_components/About";
import Projects from "./components/my_components/Projects";
import Contact from "./components/my_components/Contact";
import Skills from "./components/my_components/Skills"; // Ensure this is the correct path

function App() {
  const [dark, setDark] = useState<boolean>(false);

  useEffect(() => {
    // Check if the user prefers dark mode
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setDark(prefersDarkMode);
  }, []); // Empty dependency array to run this only once on mount

  function toggleMode() {
    setDark((prevDark) => !prevDark);
  }

  return (
    <main
      className={`${
        dark ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-800"
      } transition-colors duration-500 min-h-screen`}
    >
      <Navbar dark={dark} toggleMode={toggleMode} />
      <Home dark={dark} />
      <About dark={dark} />
      <Projects dark={dark} />
      <Skills dark={dark} />
      <Contact dark={dark} />
    </main>
  );
}

export default App;
