import AnimatedSection from "./AnimatedSection";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "AI Course Generator",
      description:
        "It is an AI-powered platform that dynamically generates educational courses based on user preferences. It leverages modern web technologies and AI tools to provide an interactive learning experience.",
      imageSrc: "/ai-course-generator.png",
      tags: ["Nextjs", "Gemini API", "Tailwind CSS", "Clerk", "PostgreSQL"],
      liveUrl: "https://edvance-blush.vercel.app/",
      repoUrl: "https://github.com/sauravney/ai-local",
    },
    {
      title: "TravelNote",
      description:
        "It allows users to track their travel experiences around the world and never miss documenting memorable moments.",
      imageSrc: "/TravelNote.png",
      tags: ["React", "Leaflet", "MongoDB", "Bootstrap"],
      liveUrl: "https://saurav-travel.netlify.app/",
      repoUrl: "https://github.com/sauravney/TravelNote",
    },
    {
      title: "Task Management App",
      description:
        "A productivity application for managing tasks, with features like drag-and-drop organization, priority levels, and deadline notifications.",
      imageSrc:
        "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      tags: ["React", "Redux", "Firebase"],
      liveUrl: "#",
      repoUrl: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="section-padding px-6 md:px-12 relative bg-secondary"
    >
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Projects
          </h2>
          <p className="text-foreground/70 text-lg max-w-3xl mx-auto">
            A selection of projects that showcase my skills and approach to
            design and development. Each project represents a unique challenge
            and solution.
          </p>
        </AnimatedSection>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <AnimatedSection key={project.title} animation="fadeIn">
              <ProjectCard {...project} reverse={index % 2 !== 0} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
