// src/components/About.tsx
import { FiBookOpen, FiBriefcase, FiCode, FiMapPin } from "react-icons/fi";
import Section from "./Section";
import { profile } from "@/Data/Profile";

const facts = [
  { icon: FiBriefcase, label: "Currently", value: `${profile.role}, ${profile.company}` },
  { icon: FiMapPin, label: "Based in", value: profile.location },
  { icon: FiBookOpen, label: "Education", value: "B.E., Jadavpur University (2025)" },
  { icon: FiCode, label: "Focus", value: "Full-stack web, real-time systems" },
];

const About = () => {
  return (
    <Section id="about" eyebrow="About" title="A little about me">
      <div className="grid gap-10 md:grid-cols-[1.5fr_1fr]">
        <div className="space-y-5 text-lg leading-relaxed">
          <p>
            I'm a full-stack engineer at Tata Consultancy Services (TCS
            Digital) in Kolkata. There I own the frontend of a 24x7 monitoring
            system, built the access-control layer for a production
            predictive-model service, and am building a point-of-sale
            application end-to-end.
          </p>
          <p>
            Outside work, I independently design, build and deploy full-stack
            products, from schema design and server-side data layers with
            PostgreSQL and Prisma to polished Next.js frontends. I graduated in
            Chemical Engineering from Jadavpur University, and I enjoy turning
            real-world problems into software people actually use.
          </p>
        </div>

        <ul className="card divide-y divide-slate-200 p-2 dark:divide-slate-800">
          {facts.map(({ icon: Icon, label, value }) => (
            <li key={label} className="flex items-center gap-4 p-4">
              <span className="rounded-lg bg-indigo-50 p-2.5 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400">
                <Icon size={18} />
              </span>
              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-slate-500 dark:text-slate-400">
                  {label}
                </p>
                <p className="font-medium text-slate-900 dark:text-white">{value}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default About;
