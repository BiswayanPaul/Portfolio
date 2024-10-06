// src/components/About.tsx

interface AboutProps {
  dark: boolean; // Accept the dark prop
}

const About = ({ dark }: AboutProps) => {
  return (
    <section
      id="about"
      className={`min-h-screen flex flex-col items-center justify-center p-8 transition-colors duration-500 ${
        dark ? "bg-gray-900 text-gray-100" : "bg-gray-100 text-gray-900" // Light mode: dark text, dark mode: light text
      }`}
    >
      <h2 className="text-6xl font-bold mb-6 text-center transition-colors duration-500">
        About Me
      </h2>
      <p
        className={`text-2xl max-w-3xl text-center px-4 mb-4 leading-relaxed transition-colors duration-500 ${
          dark ? "text-gray-200" : "text-gray-900" // Light text in dark mode, dark text in light mode
        }`}
      >
        I am a passionate software developer who thrives on the challenge of
        creating innovative web applications. My journey in technology has
        equipped me with a diverse skill set, allowing me to tackle complex
        problems with creativity and precision.
      </p>
      <p
        className={`mt-4 text-2xl max-w-3xl text-center px-4 mb-8 leading-relaxed transition-colors duration-500 ${
          dark ? "text-gray-200" : "text-gray-900" // Light text in dark mode, dark text in light mode
        }`}
      >
        I am dedicated to building impactful software solutions that not only
        meet user needs but also enhance their lives. With experience in modern
        technologies such as React and Next.js, I am excited to contribute to
        technological advancements and make a positive difference through my
        work.
      </p>
      <div className="flex justify-center space-x-8 mt-6">
        {/* Optional: You can uncomment the social links if you want to include them in the future. */}
        {/* <a
          href="https://github.com/your-github"
          target="_blank"
          rel="noopener noreferrer"
          className={`hover:scale-125 transition-transform ${
            dark ? "text-gray-200" : "text-gray-800"
          }`}
        >
          <FaGithub size={40} />
        </a>
        <a
          href="https://linkedin.com/in/your-linkedin"
          target="_blank"
          rel="noopener noreferrer"
          className={`hover:scale-125 transition-transform ${
            dark ? "text-gray-200" : "text-gray-800"
          }`}
        >
          <FaLinkedin size={40} />
        </a>
        <a
          href="https://twitter.com/your-twitter"
          target="_blank"
          rel="noopener noreferrer"
          className={`hover:scale-125 transition-transform ${
            dark ? "text-gray-200" : "text-gray-800"
          }`}
        >
          <FaTwitter size={40} />
        </a> */}
      </div>
    </section>
  );
};

export default About;
