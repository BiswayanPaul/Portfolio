import { projectList } from '@/Data/Projects'
import type { Project } from '@/Data/Projects'

interface ProjectsProps {
  dark: boolean
}

const Projects = ({ dark }: ProjectsProps) => {
  return (
    <section
      id="projects"
      className={`min-h-screen flex flex-col items-center justify-center p-60 transition-colors duration-500 ${dark ? 'bg-gray-900 text-gray-100' : 'bg-gray-100 text-gray-800'
        }`}
    >
      <h2 className="text-5xl font-bold mb-10 transition-colors duration-500">
        My Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-4">
        {projectList.map((project: Project, index) => (
          <div
            key={index}
            className={`relative rounded-lg overflow-hidden shadow-lg transition-shadow duration-300 transform hover:scale-105 hover:shadow-xl ${dark ? 'bg-gray-800' : 'bg-white'
              }`}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p className="text-sm mb-4">{project.description}</p>
              <div className="flex space-x-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`py-2 px-4 text-white font-semibold rounded-lg transition-all duration-300 ${dark
                      ? 'bg-blue-600 hover:bg-blue-700'
                      : 'bg-blue-500 hover:bg-blue-600'
                      }`}
                  >
                    GitHub
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`py-2 px-4 text-white font-semibold rounded-lg transition-all duration-300 ${dark
                      ? 'bg-green-600 hover:bg-green-700'
                      : 'bg-green-500 hover:bg-green-600'
                      }`}
                  >
                    Live
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
