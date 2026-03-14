import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const [displayedName, setDisplayedName] = useState("");
  const fullName = "Prasoon";
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    if (typing) {
      if (displayedName.length < fullName.length) {
        const timeout = setTimeout(() => {
          setDisplayedName(fullName.slice(0, displayedName.length + 1));
        }, 120);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => setTyping(false), 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      if (displayedName.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayedName(displayedName.slice(0, -1));
        }, 60);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => setTyping(true), 500);
        return () => clearTimeout(timeout);
      }
    }
  }, [displayedName, typing]);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 -z-10">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      </div>

      {/* Decorative vertical line */}
      <div className="absolute left-[12%] top-[18%] hidden lg:block">
        <div className="w-px h-20 bg-primary" />
        <div className="w-3 h-3 rounded-full bg-primary -ml-[5px] mt-1" />
      </div>

      <div className="container mx-auto px-6 max-w-6xl pt-24">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl"
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-[1.05] mb-6">
            Helloo, I'm{" "}
            <span className="gradient-text">{displayedName}</span>
            <span className="animate-blink text-primary">|</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mb-2">
            ✨ Aspiring Full Stack Developer
          </p>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mb-8">
            passionate about building modern web
            <br className="hidden sm:block" />
            applications and learning new technologies.
          </p>

          {/* Social icons */}
          <div className="flex items-center gap-5">
            <a
              href="mailto:pathakprasoon702@gmail.com"
              className="w-11 h-11 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
            >
              <Mail size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/prasoon-pathak-559846360/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://github.com/prasoonpathak967"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
            >
              <Github size={18} />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#about" className="flex flex-col items-center text-muted-foreground hover:text-primary transition">
          <div className="w-7 h-11 rounded-full border-2 border-muted-foreground/50 flex items-start justify-center p-1.5">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1.5 h-1.5 rounded-full bg-muted-foreground"
            />
          </div>
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
