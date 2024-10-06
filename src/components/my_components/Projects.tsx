interface ProjectsProps {
  dark: boolean; // Accept the dark prop
}

const Projects = ({ dark }: ProjectsProps) => {
  return (
    <section
      id="projects"
      className={`min-h-screen flex flex-col items-center justify-center py-16 transition-colors duration-500 ${
        dark ? "bg-gray-900 text-gray-100" : "bg-gray-100 text-gray-800"
      }`}
    >
      <h2 className="text-5xl font-bold mb-10 transition-colors duration-500">
        My Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-4">
        {/* RealTime Collaborative Drawing App */}
        <div
          className={`relative rounded-lg overflow-hidden shadow-lg transition-shadow duration-300 transform hover:scale-105 hover:shadow-xl ${
            dark ? "bg-gray-800" : "bg-white"
          }`}
        >
          <img
            src="./src/assets/drawapp.jpeg" // Replace with your image path
            alt="RealTime Collaborative Drawing App"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-bold">
              RealTime Collaborative Drawing App
            </h3>
            <p className="text-sm mb-4">
              Collaborate in real-time on a shared canvas.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/BiswayanPaul/drawapp-Frontend"
                target="_blank"
                rel="noopener noreferrer"
                className={`py-2 px-4 text-white font-semibold rounded-lg transition-all duration-300 ${
                  dark
                    ? "bg-blue-600 hover:bg-blue-700"
                    : "bg-blue-500 hover:bg-blue-600"
                }`}
              >
                GitHub
              </a>
              <a
                href="https://drawapp-frontend.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className={`py-2 px-4 text-white font-semibold rounded-lg transition-all duration-300 ${
                  dark
                    ? "bg-green-600 hover:bg-green-700"
                    : "bg-green-500 hover:bg-green-600"
                }`}
              >
                Live
              </a>
            </div>
          </div>
        </div>

        {/* Flash Card Project */}
        <div
          className={`relative rounded-lg overflow-hidden shadow-lg transition-shadow duration-300 transform hover:scale-105 hover:shadow-xl ${
            dark ? "bg-gray-800" : "bg-white"
          }`}
        >
          <img
            src="./src/assets/card.jpeg" // Replace with your image path
            alt="Flash Card Project"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-bold">Flash Card Project</h3>
            <p className="text-sm mb-4">
              Create and manage your own flash cards.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/BiswayanPaul/Flash-Card"
                target="_blank"
                rel="noopener noreferrer"
                className={`py-2 px-4 text-white font-semibold rounded-lg transition-all duration-300 ${
                  dark
                    ? "bg-blue-600 hover:bg-blue-700"
                    : "bg-blue-500 hover:bg-blue-600"
                }`}
              >
                GitHub
              </a>
              <a
                href="https://flash-card-one.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className={`py-2 px-4 text-white font-semibold rounded-lg transition-all duration-300 ${
                  dark
                    ? "bg-green-600 hover:bg-green-700"
                    : "bg-green-500 hover:bg-green-600"
                }`}
              >
                Live
              </a>
            </div>
          </div>
        </div>

        {/* BlinkIt Backend Project */}
        <div
          className={`relative rounded-lg overflow-hidden shadow-lg transition-shadow duration-300 transform hover:scale-105 hover:shadow-xl ${
            dark ? "bg-gray-800" : "bg-white"
          }`}
        >
          <img
            src="./src/assets/blinkit.png" // Replace with your image path
            alt="BlinkIt Backend Project"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-bold">BlinkIt Backend Project</h3>
            <p className="text-sm mb-4">
              Node.js/Express backend for an e-commerce platform.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/BiswayanPaul/BlinkIt-Backend-Xempla"
                target="_blank"
                rel="noopener noreferrer"
                className={`py-2 px-4 text-white font-semibold rounded-lg transition-all duration-300 ${
                  dark
                    ? "bg-blue-600 hover:bg-blue-700"
                    : "bg-blue-500 hover:bg-blue-600"
                }`}
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Pizza Sales Report */}
        <div
          className={`relative rounded-lg overflow-hidden shadow-lg transition-shadow duration-300 transform hover:scale-105 hover:shadow-xl ${
            dark ? "bg-gray-800" : "bg-white"
          }`}
        >
          <img
            src="./src/assets/pizzasales.png" // Replace with your image path
            alt="Pizza Sales Report"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-bold">Pizza Sales Report</h3>
            <p className="text-sm mb-4">
              Analyze pizza sales data with PowerBI.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/BiswayanPaul/Pizza-Sales-Analysis-Report"
                target="_blank"
                rel="noopener noreferrer"
                className={`py-2 px-4 text-white font-semibold rounded-lg transition-all duration-300 ${
                  dark
                    ? "bg-blue-600 hover:bg-blue-700"
                    : "bg-blue-500 hover:bg-blue-600"
                }`}
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
