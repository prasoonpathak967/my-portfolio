import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ExternalLink } from "lucide-react";
import projectExpense from "@/assets/project-expense.jpg";
import projectJobPortal from "@/assets/project-jobportal.jpg";

const projects = [
  {
    title: "Expense Tracker",
    description:
      "A full-stack Java web application that allows users to track their income and expenses efficiently. Users can add, update, and delete transactions while viewing their financial balance in real time. Built with a robust Java backend and modern frontend technologies for a seamless user experience.",
    tech: ["Java", "Spring Boot", "React", "JavaScript", "CSS"],
    image: projectExpense,
    github: "https://github.com/prasoonpathak967/Expense_Tracker2",
  },
  {
    title: "Job Portal",
    description:
      "A job portal web application where users can browse job listings and apply for jobs. The platform helps connect job seekers with employers through a structured interface with user registration, login, and database integration for persistent data.",
    tech: ["HTML", "CSS", "JavaScript", "Node.js", "MongoDB"],
    image: projectJobPortal,
    github: "https://github.com/prasoonpathak967/JobPortal",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-6xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <p className="section-subtitle mb-2">My work</p>
          <h2 className="section-title">
            Projects<span className="text-primary">.</span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-muted-foreground text-base leading-relaxed max-w-3xl mb-12"
        >
          The projects below showcase my ability to design and develop impactful software
          solutions. They reflect my skills in backend and frontend development,
          problem-solving and building scalable applications with modern technologies.
        </motion.p>

        <div className="space-y-16">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.2 }}
              className="glass rounded-3xl overflow-hidden group"
            >
              <div className="grid md:grid-cols-[1fr_1fr] gap-0">
                {/* Image */}
                <div className="relative overflow-hidden h-64 md:h-auto">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-background/30 group-hover:bg-background/10 transition-colors duration-500" />
                  {/* Icons overlay */}
                  <div className="absolute top-4 right-4 flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-background/80 backdrop-blur flex items-center justify-center text-foreground hover:text-primary transition"
                    >
                      <Github size={18} />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-foreground mb-3">{project.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-medium px-3 py-1 rounded-full bg-primary/15 text-primary"
                      >
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
