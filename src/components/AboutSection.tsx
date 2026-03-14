import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import aboutImg from "@/assets/about-illustration.png";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-6xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="section-subtitle mb-2">Introduction</p>
          <h2 className="section-title">
            Overview<span className="text-primary">.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-[1fr_auto] gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-muted-foreground leading-[1.8] text-base md:text-lg">
              I'm Prasoon Pathak, an MCA student and aspiring Full Stack Developer passionate
              about building scalable applications with JavaScript (React.js, Node.js) and
              Java (Spring Boot), backed by databases such as MySQL and MongoDB.
            </p>
            <p className="text-muted-foreground leading-[1.8] text-base md:text-lg mt-4">
              I am currently pursuing my Master of Computer Applications (MCA) from JSS Academy
              of Technical Education, Noida. I completed my Bachelor of Science in Mathematics
              from Bundelkhand University, Jhansi.
            </p>
            <p className="text-muted-foreground leading-[1.8] text-base md:text-lg mt-4">
              My goal is to become a skilled Full Stack Developer and contribute to innovative
              software solutions. I love turning ideas into impactful digital
              experiences — code, create, and innovate ✨
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="hidden md:block"
          >
            <img
              src={aboutImg}
              alt="Developer illustration"
              className="w-72 h-72 object-contain animate-float"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
