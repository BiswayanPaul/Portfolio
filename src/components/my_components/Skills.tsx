import type { IconType } from "react-icons";
import { FiCode, FiDatabase, FiLayout, FiServer, FiTool } from "react-icons/fi";
import Section from "./Section";

interface SkillGroup {
  category: string;
  icon: IconType;
  items: string[];
}

const skillGroups: SkillGroup[] = [
  { category: "Languages", icon: FiCode, items: ["Python", "JavaScript", "TypeScript", "C/C++"] },
  { category: "Frontend", icon: FiLayout, items: ["React", "Next.js", "Redux", "Tailwind CSS"] },
  { category: "Backend", icon: FiServer, items: ["Node.js", "Express.js", "FastAPI", "REST APIs"] },
  {
    category: "Databases",
    icon: FiDatabase,
    items: ["PostgreSQL", "MySQL", "MongoDB", "Prisma", "Redis"],
  },
  { category: "Tools", icon: FiTool, items: ["Docker", "Kubernetes", "Git", "GitHub"] },
];

function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="What I work with"
      className="bg-white dark:bg-slate-900/40"
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map(({ category, icon: Icon, items }) => (
          <div key={category} className="card p-6">
            <div className="flex items-center gap-3">
              <span className="rounded-lg bg-indigo-50 p-2.5 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400">
                <Icon size={18} />
              </span>
              <h3 className="text-lg font-semibold">{category}</h3>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {items.map((item) => (
                <span
                  key={item}
                  className="rounded-md border border-slate-200 px-2.5 py-1 text-sm font-medium text-slate-700 dark:border-slate-700 dark:text-slate-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

export default Skills;
