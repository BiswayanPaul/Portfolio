import { FiAward, FiBookOpen } from 'react-icons/fi'
import Section from './Section'
import { experienceList, education, achievements } from '@/Data/Experience'

const Experience = () => {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Where I've worked"
      className="bg-white dark:bg-slate-900/40"
    >
      <ol className="relative space-y-10 border-l border-slate-200 dark:border-slate-800 md:ml-3">
        {experienceList.map((job) => (
          <li key={`${job.company}-${job.period}`} className="relative pl-8">
            <span className="absolute -left-[7px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-white bg-indigo-600 dark:border-slate-950 dark:bg-indigo-400" />
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="text-lg font-semibold">
                {job.role}{' '}
                <span className="text-indigo-600 dark:text-indigo-400">@ {job.company}</span>
              </h3>
              <span className="shrink-0 text-sm font-medium text-slate-500 dark:text-slate-400">
                {job.period}
              </span>
            </div>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{job.location}</p>
            <ul className="mt-4 space-y-2">
              {job.points.map((point) => (
                <li key={point} className="flex gap-3">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400 dark:bg-slate-500" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        <div className="card p-6">
          <div className="flex items-center gap-3">
            <FiBookOpen className="text-indigo-600 dark:text-indigo-400" size={20} />
            <h3 className="text-lg font-semibold">Education</h3>
          </div>
          <p className="mt-4 font-medium text-slate-900 dark:text-white">{education.institution}</p>
          <p className="mt-1">{education.degree}</p>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            {education.period} · {education.grade}
          </p>
        </div>
        <div className="card p-6">
          <div className="flex items-center gap-3">
            <FiAward className="text-indigo-600 dark:text-indigo-400" size={20} />
            <h3 className="text-lg font-semibold">Achievements</h3>
          </div>
          <ul className="mt-4 space-y-2">
            {achievements.map((achievement) => (
              <li key={achievement} className="flex gap-3">
                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400 dark:bg-slate-500" />
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}

export default Experience
