import { Code, Layout, Server, Award, Laptop, Globe } from "lucide-react";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6 relative bg-muted/30 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center mb-16 text-center">
            <motion.h4 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-primary font-bold tracking-widest uppercase text-sm mb-4"
            >
                My Story
            </motion.h4>
            <motion.h2 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
            >
                Bridging Design & Engineering
            </motion.h2>
            <motion.p 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-muted-foreground text-lg max-w-3xl font-light"
            >
                I'm a Full-Stack Developer with a background in mathematics and logic, 
                specializing in building scalable web applications that prioritize user experience without compromising on performance.
            </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Layout className="text-primary" size={28} />,
              title: "Frontend Development",
              description: "Crafting pixel-perfect, accessible interfaces with React, Next.js, and Tailwind CSS."
            },
            {
              icon: <Server className="text-accent" size={28} />,
              title: "Backend Engineering",
              description: "Building robust APIs and scalable server-side logic using Node.js and Python."
            },
            {
              icon: <Globe className="text-blue-500" size={28} />,
              title: "Full Stack Solutions",
              description: "Delivering end-to-end applications with secure databases and seamless integrations."
            }
          ].map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-background border border-border/50 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300"
            >
              <div className="mb-6 p-4 rounded-xl bg-muted/50 w-fit">{card.icon}</div>
              <h3 className="text-xl font-bold mb-4">{card.title}</h3>
              <p className="text-muted-foreground font-light leading-relaxed">{card.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-16 p-8 rounded-3xl glass-card flex flex-col md:flex-row items-center justify-between gap-8"
        >
            <div className="flex gap-12">
                <div>
                    <p className="text-3xl font-bold text-primary">2+</p>
                    <p className="text-xs uppercase tracking-widest font-bold text-muted-foreground">Years Exp.</p>
                </div>
                <div>
                    <p className="text-3xl font-bold text-accent">15+</p>
                    <p className="text-xs uppercase tracking-widest font-bold text-muted-foreground">Projects Done</p>
                </div>
            </div>
            <a href="#contact" className="btn-primary">Let's Work Together</a>
        </motion.div>
      </div>
    </section>
  );
};
export default AboutSection;