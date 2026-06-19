import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

const HeroSection = () => {
    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden">
            <div className="absolute inset-0 z-0">
                <div className="absolute top-[20%] left-[10%] w-[30vw] h-[30vw] bg-primary/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[20%] right-[10%] w-[30vw] h-[30vw] bg-accent/10 rounded-full blur-[120px]" />
            </div>

            <div className="container max-w-6xl mx-auto relative z-10">
                <div className="flex flex-col items-center text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="px-4 py-1.5 rounded-full border border-border bg-background/50 backdrop-blur-md text-sm font-medium mb-8 flex items-center gap-2"
                    >
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        Available for Work
                    </motion.div>

                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8"
                    >
                        Full-Stack <br />
                        <span className="text-gradient">Web Engineering</span>
                    </motion.h1>

                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-12 leading-relaxed"
                    >
                        Hi, I'm Muhammad Arslan. A Full-Stack Developer specialized in building
                        <span className="text-foreground"> high-performance web applications</span> using the MERN stack and Next.js.
                    </motion.p>

                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-wrap justify-center gap-4"
                    >
                        <a href="#projects" className="btn-primary flex items-center gap-2">
                            Latest Projects <ArrowRight size={18} />
                        </a>
                        <a href="/resume/Arslan.pdf" download className="btn-outline flex items-center gap-2">
                            Download CV <Download size={18} />
                        </a>
                    </motion.div>
                </div>
            </div>

            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block"
            >
                <div className="w-6 h-10 rounded-full border-2 border-border flex justify-center p-1">
                    <motion.div 
                        animate={{ y: [0, 12, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="w-1 h-2 bg-primary rounded-full"
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default HeroSection;