import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, BookOpen, Calendar } from "lucide-react";

const education = [
  {
    icon: GraduationCap,
    degree: "Masters of Computer Applications",
    institution: "JSS Academy of Technical Education, Noida",
    coursework: "Data Structures & Algorithms, Computer Networks, Object Oriented Programming, Database Management Systems, Software Engineering, Web Technologies.",
    period: "Currently Pursuing",
    current: true,
  },
  {
    icon: BookOpen,
    degree: "Bachelor of Science (B.Sc.) in Mathematics",
    institution: "Bundelkhand University, Jhansi",
    coursework: "Mathematics, Computer Science Fundamentals, Analytical Skills, Problem Solving.",
    period: "Completed",
    current: false,
  },
];

const EducationSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="education" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-6xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="section-subtitle mb-2">My academic journey so far</p>
          <h2 className="section-title">
            Education<span className="text-primary">.</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-border" />

          <div className="space-y-12">
            {education.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.2 }}
                className="relative pl-16 md:pl-24"
              >
                {/* Timeline dot */}
                <div className="absolute left-2.5 md:left-6.5 top-2 w-3.5 h-3.5 rounded-full bg-primary glow-purple z-10" />

                <div className="glass rounded-2xl p-6 md:p-8 hover:glow-purple transition-all duration-500">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <edu.icon size={22} className="text-primary" />
                    <h3 className="text-lg md:text-xl font-bold text-foreground">
                      {edu.degree}
                    </h3>
                  </div>
                  <p className="text-primary/80 font-medium text-sm mb-3">
                    {edu.institution}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    <span className="text-foreground/80 font-medium">Coursework:</span>{" "}
                    {edu.coursework}
                  </p>
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar size={14} className="text-primary" />
                    <span className={edu.current ? "text-primary font-medium" : "text-muted-foreground"}>
                      {edu.period}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
