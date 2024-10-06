import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";

Chart.register(ArcElement, Tooltip, Legend);

interface Skill {
  name: string;
  score: number; // Score should be a value between 0 and 100
}

const skills: Skill[] = [
  { name: "HTML", score: 90 },
  { name: "CSS", score: 85 },
  { name: "JavaScript", score: 80 },
  { name: "React", score: 75 },
  { name: "Next.js", score: 70 },
  { name: "Python", score: 60 },
  { name: "WebSocket", score: 75 }, // New Skill
  { name: "MongoDB", score: 70 }, // New Skill
  { name: "SQL", score: 80 }, // New Skill
  { name: "PowerBI", score: 65 }, // New Skill
  { name: "Excel", score: 90 }, // New Skill
];

const colors = [
  {
    skill: "HTML",
    color: "rgba(255, 99, 132, 1)",
    remaining: "rgba(255, 99, 132, 0.2)",
  },
  {
    skill: "CSS",
    color: "rgba(54, 162, 235, 1)",
    remaining: "rgba(54, 162, 235, 0.2)",
  },
  {
    skill: "JavaScript",
    color: "rgba(255, 206, 86, 1)",
    remaining: "rgba(255, 206, 86, 0.2)",
  },
  {
    skill: "React",
    color: "rgba(75, 192, 192, 1)",
    remaining: "rgba(75, 192, 192, 0.2)",
  },
  {
    skill: "Next.js",
    color: "rgba(153, 102, 255, 1)",
    remaining: "rgba(153, 102, 255, 0.2)",
  },
  {
    skill: "Python",
    color: "rgba(255, 159, 64, 1)",
    remaining: "rgba(255, 159, 64, 0.2)",
  },
  {
    skill: "WebSocket",
    color: "rgba(255, 99, 132, 1)",
    remaining: "rgba(255, 99, 132, 0.2)",
  },
  {
    skill: "MongoDB",
    color: "rgba(54, 162, 235, 1)",
    remaining: "rgba(54, 162, 235, 0.2)",
  },
  {
    skill: "SQL",
    color: "rgba(255, 206, 86, 1)",
    remaining: "rgba(255, 206, 86, 0.2)",
  },
  {
    skill: "PowerBI",
    color: "rgba(75, 192, 192, 1)",
    remaining: "rgba(75, 192, 192, 0.2)",
  },
  {
    skill: "Excel",
    color: "rgba(153, 102, 255, 1)",
    remaining: "rgba(153, 102, 255, 0.2)",
  },
];

function Skills({ dark }: { dark: boolean }) {
  return (
    <section
      id="skills"
      className={`p-[10%] transition-colors duration-500 ${
        dark ? "bg-gray-900 text-gray-100" : "bg-gray-100 text-gray-800"
      }`}
    >
      <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>
      <div className="flex flex-wrap justify-center gap-12">
        {" "}
        {/* Increased gap to gap-12 */}
        {skills.map((skill, index) => {
          const data = {
            labels: [skill.name],
            datasets: [
              {
                label: skill.name,
                data: [skill.score, 100 - skill.score],
                backgroundColor: [colors[index].color, colors[index].remaining],
                borderColor: dark
                  ? "rgba(255, 255, 255, 1)"
                  : "rgba(0, 0, 0, 1)",
                borderWidth: 1,
              },
            ],
          };

          const options = {
            cutout: "70%", // Makes the doughnut appear like a ring
            responsive: true,
            plugins: {
              legend: {
                display: false,
              },
              tooltip: {
                callbacks: {
                  label: (tooltipItem: any) => {
                    return `${tooltipItem.label}: ${tooltipItem.raw}%`;
                  },
                },
              },
            },
          };

          return (
            <div
              key={skill.name}
              className="w-32 h-32 flex flex-col items-center space-y-4" // Increased vertical gap between chart and label to space-y-4
            >
              <Doughnut data={data} options={options} />
              <span className="mt-2 text-lg font-semibold">{skill.name}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Skills;
