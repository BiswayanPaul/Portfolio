import { FaGithub } from 'react-icons/fa6'
import { FiExternalLink } from 'react-icons/fi'
import Section from './Section'
import { projectList } from '@/Data/Projects'

const Projects = () => {
  return (
    <Section id="projects" eyebrow="Projects" title="Things I've built">
      <div className="grid gap-8 md:grid-cols-2">
        {projectList.map((project) => (
          <article
            key={project.title}
            className="card group flex flex-col overflow-hidden transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/5 dark:hover:shadow-black/30"
          >
            <div className="aspect-video overflow-hidden border-b border-slate-200 bg-slate-100 dark:border-slate-800 dark:bg-slate-800">
              <img
                src={project.image}
                alt={`${project.title} screenshot`}
                loading="lazy"
                className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="mt-3 leading-relaxed">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span key={tech} className="chip">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-auto flex gap-3 pt-6">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary px-4 py-2"
                  >
                    <FiExternalLink /> Live demo
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary px-4 py-2"
                  >
                    <FaGithub /> Code
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}

export default Projects
