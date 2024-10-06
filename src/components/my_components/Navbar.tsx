import { useState } from "react";
import { cn } from "@/lib/utils";

interface NavbarProps {
  dark: boolean;
  toggleMode: () => void;
}

function Navbar({ dark, toggleMode }: NavbarProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Smooth Scroll when clicking on links
  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    target: string
  ) => {
    e.preventDefault();
    const element = document.getElementById(target);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setSidebarOpen(false); // Close sidebar on link click
  };

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <nav
        className={cn(
          "w-full py-4 px-12 flex justify-between items-center transition-colors duration-500 shadow-md sticky top-0 z-50",
          dark ? "bg-[#1C1C1E] text-[#E5E5E5]" : "bg-white text-[#2D2D2D]"
        )}
      >
        {/* Brand Logo */}
        <div className="text-2xl font-bold md:block hidden">
          {" "}
          {/* Show only on larger screens */}
          <a
            href="#home"
            onClick={(e) => handleScroll(e, "home")}
            className={dark ? "text-[#0A84FF]" : "text-[#007AFF]"}
          >
            Biswayan Paul
          </a>
        </div>

        {/* Hamburger Menu for Small Screens */}
        <div className="block md:hidden">
          <button
            onClick={toggleSidebar}
            className="text-2xl focus:outline-none"
          >
            {/* Hamburger Icon */}
            <span className={cn(dark ? "text-[#0A84FF]" : "text-[#007AFF]")}>
              &#9776; {/* Unicode for hamburger icon */}
            </span>
          </button>
        </div>

        {/* Navigation Links - Hidden on small screens */}
        <ul className="hidden md:flex space-x-14 text-lg">
          {["home", "about", "projects", "skills", "contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                onClick={(e) => handleScroll(e, item)}
                className={cn(
                  "hover:underline transition-colors duration-300",
                  dark ? "hover:text-[#FF453A]" : "hover:text-[#FF5E5B]"
                )}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}
        </ul>

        {/* Dark Mode Switch */}
        <div
          className={`relative inline-flex items-center h-6 w-12 cursor-pointer rounded-full p-1 transition-colors duration-300 ${
            dark ? "bg-[#0A84FF]" : "bg-[#007AFF]"
          }`}
          onClick={toggleMode}
        >
          <div
            className={`absolute h-4 w-4 rounded-full bg-white shadow-md transform transition-transform duration-300 ${
              dark ? "translate-x-6" : "translate-x-0"
            }`}
          />
        </div>
      </nav>

      {/* Sidebar for Small Screens */}
      <div
        className={`fixed top-0 left-0 h-full w-64 ${
          dark ? "bg-[#1C1C1E]" : "bg-white"
        } z-50 transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out shadow-lg`}
      >
        <div className="p-6 flex justify-between items-center">
          <div className="text-2xl font-bold">
            <a
              href="#home"
              onClick={(e) => handleScroll(e, "home")}
              className={dark ? "text-[#0A84FF]" : "text-[#007AFF]"}
            >
              Biswayan Paul
            </a>
          </div>
          <button
            className="text-2xl focus:outline-none"
            onClick={toggleSidebar}
          >
            &#x2716; {/* Unicode for close icon (X) */}
          </button>
        </div>

        <ul className="flex flex-col space-y-4 text-xl p-6">
          {" "}
          {/* Changed to text-xl */}
          {["home", "about", "projects", "skills", "contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                onClick={(e) => handleScroll(e, item)}
                className={cn(
                  "hover:underline transition-colors duration-300",
                  dark ? "hover:text-[#FF453A]" : "hover:text-[#FF5E5B]"
                )}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Backdrop for Sidebar */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
}

export default Navbar;
