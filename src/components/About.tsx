import { Code, Layout, LineChart, Sparkles } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const About = () => {
  const skills = [
    {
      icon: <Layout size={24} />,
      title: "Frontend Development",
      description:
        "Creating responsive, intuitive interfaces with NextJs, React, JavaScript, TypeScript, and modern CSS.",
    },
    {
      icon: <Code size={24} />,
      title: "Backend Engineering",
      description:
        "Building scalable APIs and services with Node.js, Express Js ,EJS and Next.js.",
    },
    {
      icon: <Sparkles size={24} />,
      title: "Databases",
      description:
        "For storage of data, I use MongoDB, PostgreSQL, with ORM libraries like Mongoose, Prisma and Drizzle",
    },
    {
      icon: <LineChart size={24} />,
      title: "Data Visualization",
      description:
        "Creating interactive charts and dashboards to reveal insights from complex data.",
    },
  ];

  return (
    <section id="about" className="section-padding px-6 md:px-12 relative">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            About Me
          </h2>
          <p className="text-foreground/70 text-lg leading-relaxed">
            I'm a passionate developer with a deep commitment to crafting
            elegant, efficient solutions. With a focus on both functionality and
            aesthetics, I strive to create digital experiences that are not only
            powerful but also a joy to use.
          </p>
        </AnimatedSection>

        <div className="flex flex-col md:flex-row gap-12 md:gap-8 lg:gap-16">
          <AnimatedSection animation="slideInFromLeft" className="md:w-1/2">
            <div className="aspect-square overflow-hidden rounded-2xl">
              <img
                src={"saurav1.jpg"}
                alt="Portrait photograph"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </AnimatedSection>

          <AnimatedSection
            animation="slideInFromRight"
            className="md:w-1/2 flex flex-col justify-center"
          >
            <h3 className="text-2xl font-display font-bold mb-6">
              My Approach
            </h3>
            <p className="text-foreground/70 mb-8 leading-relaxed">
              I believe in simplicity, functionality, and attention to detail.
              My work combines technical expertise with a keen eye for design,
              resulting in products that not only work flawlessly but look and
              feel amazing to use.
            </p>
            <p className="text-foreground/70 mb-8 leading-relaxed">
              Every project is an opportunity to create something meaningful
              that serves both users and business goals effectively. I'm
              constantly learning and evolving my skills to stay at the
              forefront of technology.
            </p>

            <div>
              <h4 className="font-display font-semibold mb-4">Core Values</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                  <span>Simplicity and clarity in design</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                  <span>Meticulous attention to detail</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                  <span>Continuous learning and improvement</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                  <span>User-centered approach to all projects</span>
                </li>
              </ul>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection className="mt-24">
          <h3 className="text-2xl md:text-3xl font-display font-bold mb-12 text-center">
            My Expertise
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <AnimatedSection
                key={skill.title}
                animation="slideUp"
                delay={index * 100}
              >
                <div className="p-6 rounded-xl border bg-card hover:shadow-md transition-all h-full">
                  <div className="mb-4 text-primary">{skill.icon}</div>
                  <h4 className="text-lg font-display font-semibold mb-2">
                    {skill.title}
                  </h4>
                  <p className="text-foreground/70 text-sm">
                    {skill.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default About;
