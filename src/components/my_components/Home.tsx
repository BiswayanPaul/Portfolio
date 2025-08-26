import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa"; // Social Media Icons
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiPython,
} from "react-icons/si"; // Tech Icons
import Avatar from "../../../public/avatar.png";

interface HomeProps {
  dark: boolean; // Accept the dark prop
}

function Home({ dark }: HomeProps) {
  return (
    <section
      id="home"
      className={`min-h-screen flex flex-col md:flex-row items-center justify-between p-16 transition-colors duration-300 ${dark ? "bg-gray-900 text-gray-100" : "bg-gray-100 text-gray-800"
        }`}
    >
      {/* Left Section: Introduction */}
      <div className="md:w-1/2 p-8 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 transition-colors duration-500">
          Hi, I'm Biswayan Paul
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl mb-12 transition-colors duration-300">
          A passionate software developer focused on building modern web
          applications using cutting-edge technologies.
        </p>
        {/* Social Media Links */}
        <div className="flex justify-center md:justify-start space-x-8 mb-16">
          <a
            href="https://github.com/BiswayanPaul"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-125 transition-transform"
          >
            <FaGithub
              size={40}
              className={`hover:text-blue-500 transition-colors duration-300 ${dark ? "text-gray-200" : "text-gray-800"
                }`}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/biswayan-paul-8852411ba/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-125 transition-transform"
          >
            <FaLinkedin
              size={40}
              className={`hover:text-blue-700 transition-colors duration-300 ${dark ? "text-gray-200" : "text-gray-800"
                }`}
            />
          </a>
          <a
            href="https://x.com/paul_biswayan"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-125 transition-transform"
          >
            <FaTwitter
              size={40}
              className={`hover:text-blue-400 transition-colors duration-300 ${dark ? "text-gray-200" : "text-gray-800"
                }`}
            />
          </a>
          <a
            href="mailto:biswayanpaulju@example.com" // Replace with your actual email
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-125 transition-transform"
          >
            <FaEnvelope
              size={40}
              className={`hover:text-red-500 transition-colors duration-300 ${dark ? "text-gray-200" : "text-gray-800"
                }`}
            />
          </a>
        </div>
        {/* Download CV Button */}
        <a
          href="https://drive.google.com/file/d/11oSJwDhVjHJXdk8IVGIqL_x26g5Scjsv/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white py-3 px-6 md:py-4 md:px-8 lg:py-5 lg:px-10 rounded-lg hover:bg-blue-500 transition-colors duration-300 text-lg md:text-xl lg:text-2xl"
        >
          Download CV
        </a>
      </div>

      {/* Right Section: Avatar and Technology Logos */}
      <div className="md:w-1/2 flex flex-col items-center px-8 mt-12 md:mt-0">
        {/* Avatar with contrasting background */}
        <div className="relative rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-3 md:p-4 lg:p-6 hover:scale-105 transition-transform duration-300 shadow-2xl">
          <img
            src={Avatar}
            alt="Avatar"
            className="rounded-full h-48 w-48 md:h-64 md:w-64 lg:h-80 lg:w-80 object-cover bg-gray-200 dark:bg-gray-800 transition-colors duration-500"
          />
        </div>

        {/* Technology Logos */}
        <div className="flex flex-wrap justify-center mt-12 space-x-6 max-w-full">
          <div className="flex items-center mb-4">
            <SiHtml5
              size={50}
              className={`md:text-5xl lg:text-6xl text-orange-600 hover:text-orange-500 hover:scale-110 transition-transform duration-300 hover:drop-shadow-md ${dark ? "text-orange-400" : "text-orange-600"
                }`}
            />
          </div>
          <div className="flex items-center mb-4">
            <SiCss3
              size={50}
              className={`md:text-5xl lg:text-6xl text-blue-600 hover:text-blue-500 hover:scale-110 transition-transform duration-300 hover:drop-shadow-md ${dark ? "text-blue-400" : "text-blue-600"
                }`}
            />
          </div>
          <div className="flex items-center mb-4">
            <SiJavascript
              size={50}
              className={`md:text-5xl lg:text-6xl text-yellow-400 hover:text-yellow-300 hover:scale-110 transition-transform duration-300 hover:drop-shadow-md ${dark ? "text-yellow-300" : "text-yellow-400"
                }`}
            />
          </div>
          <div className="flex items-center mb-4">
            <SiReact
              size={50}
              className={`md:text-5xl lg:text-6xl text-blue-400 hover:text-blue-300 hover:scale-110 transition-transform duration-300 hover:drop-shadow-md ${dark ? "text-blue-300" : "text-blue-400"
                }`}
            />
          </div>
          <div className="flex items-center mb-4">
            <SiNextdotjs
              size={50}
              className={`md:text-5xl lg:text-6xl text-black hover:text-gray-700 dark:text-gray-200 dark:hover:text-gray-400 hover:scale-110 transition-transform duration-300 hover:drop-shadow-md ${dark ? "text-gray-200" : "text-black"
                }`}
            />
          </div>
          <div className="flex items-center mb-4">
            <SiPython
              size={50}
              className={`md:text-5xl lg:text-6xl hover:scale-110 transition-transform duration-300 hover:drop-shadow-md ${dark ? "text-yellow-500" : "text-blue-500"
                }`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
