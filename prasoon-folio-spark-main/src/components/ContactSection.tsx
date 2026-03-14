import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Linkedin, Github, Send } from "lucide-react";
import contactImg from "@/assets/contact-illustration.png";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:pathakprasoon702@gmail.com?subject=Portfolio Contact from ${form.name}&body=${encodeURIComponent(form.message)}%0A%0AFrom: ${form.email}`;
    window.open(mailtoLink);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-6xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="section-subtitle mb-2">Get in touch</p>
          <h2 className="section-title">
            Contact<span className="text-primary">.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-[1fr_1fr] gap-12 items-start">
          {/* Contact form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass rounded-2xl p-6 md:p-8 space-y-5"
          >
            <div>
              <label className="text-sm text-muted-foreground mb-1.5 block">Your Name</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-secondary/50 border border-border rounded-xl px-4 py-3 text-foreground text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition"
                placeholder="What's your name?"
                required
              />
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-1.5 block">Your Email</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-secondary/50 border border-border rounded-xl px-4 py-3 text-foreground text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition"
                placeholder="What's your email?"
                required
              />
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-1.5 block">Your Message</label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={5}
                className="w-full bg-secondary/50 border border-border rounded-xl px-4 py-3 text-foreground text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition resize-none"
                placeholder="What do you want to say?"
                required
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 glow-purple transition-all duration-300"
            >
              <Send size={16} /> Send
            </button>
          </motion.form>

          {/* Right side - illustration + social links */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col items-center"
          >
            <img
              src={contactImg}
              alt="Contact"
              className="w-48 h-48 object-contain mb-8 animate-float"
            />
            <p className="text-foreground font-semibold text-lg mb-6 text-center">
              Let's Connect! Reach Out and Say Hello
            </p>

            <div className="grid grid-cols-1 gap-4 w-full max-w-xs">
              <a
                href="mailto:pathakprasoon702@gmail.com"
                className="glass rounded-xl p-4 flex items-center gap-4 hover:glow-purple transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center">
                  <Mail size={18} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Email</p>
                  <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                    pathakprasoon702@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="https://github.com/prasoonpathak967"
                target="_blank"
                rel="noopener noreferrer"
                className="glass rounded-xl p-4 flex items-center gap-4 hover:glow-purple transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center">
                  <Github size={18} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">GitHub</p>
                  <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                    GitHub
                  </p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/prasoon-pathak-559846360/"
                target="_blank"
                rel="noopener noreferrer"
                className="glass rounded-xl p-4 flex items-center gap-4 hover:glow-purple transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center">
                  <Linkedin size={18} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">LinkedIn</p>
                  <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                    LinkedIn
                  </p>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
