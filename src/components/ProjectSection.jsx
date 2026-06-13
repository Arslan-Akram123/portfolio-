import { motion } from "framer-motion";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Modern Lesson Planner",
    description: "Streamlining educational workflows with intuitive scheduling and dynamic resource management.",
    video: "/videos/lessonplanner.webm", 
    tags: ["React", "JavaScript", "UI Design"],
    demoUrl: "https://the-lesson-planner.vercel.app/",
    githubUrl: "https://arslan-akram123.github.io/The-Lesson-Planner/",
    highlight: "Featured"
  },
  {
    id: 2,
    title: "Battle Arena",
    description: "A fast-paced card battle system built with vanilla JavaScript and advanced DOM manipulation.",
    video: "/videos/project2.mp4",
    tags: ["JavaScript", "Gaming", "Animations"],
    demoUrl: "https://battle-team-arena.vercel.app/",
    githubUrl: "https://arslan-akram123.github.io/Battle-Arena/",
  },
  {
    id: 3,
    title: "Forecast Atlas",
    description: "Real-time global weather tracker with sophisticated data visualization and geolocation.",
    image: "/images/project3.png",
    tags: ["React", "API", "Tailwind"],
    demoUrl: "https://weather-forecast-app-coral-kappa.vercel.app/",
    githubUrl: "https://github.com/Arslan-Akram123/weather-forecast-app/",
  },
  {
    id: 4,
    title: "Foodies",
    description: "A comprehensive MERN stack food delivery platform featuring real-time tracking and secure checkout.",
    video: "/videos/foodies.webm", 
    tags: ["MERN", "Tailwind", "Full Stack"],
    demoUrl: "https://foodies-mern.vercel.app/",
    githubUrl: "https://github.com/Arslan-Akram123/foodies-mern",
  },
];

const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div className="max-w-xl">
            <h2 className="text-sm font-bold tracking-[0.2em] text-primary uppercase mb-4">Case Studies</h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight">Recent Projects</h3>
          </div>
          <p className="text-muted-foreground max-w-sm">
            Focusing on clean code, polished UI, and meaningful user interactions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-muted">
                {project.video ? (
                  <video 
                    src={project.video} 
                    autoPlay loop muted playsInline 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                ) : (
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                )}
                
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a href={project.demoUrl} target="_blank" className="p-3 rounded-full bg-white text-black hover:scale-110 transition-transform">
                    <ExternalLink size={20} />
                  </a>
                  <a href={project.githubUrl} target="_blank" className="p-3 rounded-full bg-white/20 text-white backdrop-blur-md hover:scale-110 transition-transform">
                    <Github size={20} />
                  </a>
                </div>
              </div>

              <div className="mt-6 flex justify-between items-start">
                <div>
                  <div className="flex gap-2 mb-3">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground px-2 py-1 bg-muted rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h4 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h4>
                  <p className="text-muted-foreground font-light leading-relaxed">{project.description}</p>
                </div>
                <div className="p-2 rounded-full border border-border group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                  <ArrowUpRight size={20} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
