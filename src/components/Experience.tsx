import React, { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    id: 1,
    company: "Quaantisc",
    position: "Software Developer Intern",
    duration: "Mar 2025 - Present",
    description: [
      "EduSession – Developing an online platform for 1:1 personalized learning, connecting students with the right teachers based on their preferences in a paid model.",
      "Collaborating with a team to ensure high-quality, tailored education through seamless matchmaking and an intuitive user experience.",
    ],
    technologies: [
      "Git",
      "Next JS",
      "TypeScript",
      "NodeJs",
      "MongoDB",
      "Tailwind CSS",
    ],
  },
  {
    id: 2,
    company: "ZFA Labs Pvt. Ltd.",
    position: "Software Developer Intern",
    duration: "Oct 2024 - Dec 2024",
    description: [
      "Collaborated with a team of developers to implement UI features for websites, including fetching and displaying information, ensuring responsiveness.",
    ],
    technologies: [
      "Git",
      "React JS",
      "NodeJs",
      "Tailwind CSS",
      "API Data Fetching",
    ],
  },
];

const Experience = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".reveal").forEach((el) => {
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="experience" className="bg-gray-50 dark:bg-gray-900">
      <div className="section-container">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center reveal">
          Work <span className="highlight">Experience</span>
        </h2>

        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <Card
              key={exp.id}
              className="reveal border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-shadow"
            >
              <CardContent className="p-0">
                <div className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="bg-portfolio-blue/10 p-2 rounded-full">
                        <Briefcase className="h-5 w-5 text-portfolio-blue" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{exp.company}</h3>
                        <p className="text-portfolio-blue font-medium">
                          {exp.position}
                        </p>
                      </div>
                    </div>
                    <div className="mt-2 md:mt-0 text-gray-600 dark:text-gray-400">
                      {exp.duration}
                    </div>
                  </div>

                  <div className="mt-4">
                    <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-400">
                      {exp.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
