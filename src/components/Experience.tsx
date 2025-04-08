import React, { useEffect } from "react";
import { Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import AnimatedSection from "./AnimatedSection";

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
  return (
    <section
      id="experience"
      className="section-padding px-6 md:px-12 bg-gray-50 dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Work <span className="text-portfolio-blue">Experience</span>
          </h2>
        </AnimatedSection>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <AnimatedSection key={exp.id} animation="fadeIn">
              <Card className="border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-xl transition-shadow">
                <CardContent className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div className="flex items-start md:items-center gap-3">
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
                    <div className="mt-2 md:mt-0 text-gray-600 dark:text-gray-400 text-sm">
                      {exp.duration}
                    </div>
                  </div>

                  <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-400 mt-4">
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>

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
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
