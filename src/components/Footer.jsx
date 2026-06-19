import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react'; 

const Footer = () => {
  return (
    <footer className='bg-primary/5 border-t border-white/5 px-4 pt-20 pb-10 text-muted-foreground'>
      <div className="container mx-auto max-w-6xl">
        
        <div className="flex flex-col md:flex-row justify-between items-start gap-16 mb-20">
          
          <div className="max-w-sm">
            <h3 className="text-2xl font-black text-foreground mb-4 uppercase tracking-tighter">
              Arslan<span className="text-primary">.</span>
            </h3>
            <p className="text-sm font-light leading-relaxed mb-6">
              A dedicated Full-Stack Engineer focused on building robust, scalable digital products and exceptional user experiences.
            </p>
            <div className="flex gap-4">
              <a href="https://github.com/Arslan-Akram123" target="_blank" className="p-3 rounded-xl bg-white/5 hover:bg-primary/10 hover:text-primary transition-all">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/mdarslan/" target="_blank" className="p-3 rounded-xl bg-white/5 hover:bg-primary/10 hover:text-primary transition-all">
                <Linkedin size={20} />
              </a>
              <a href="mailto:marslan.devtech@gmail.com" className="p-3 rounded-xl bg-white/5 hover:bg-primary/10 hover:text-primary transition-all">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-12 sm:gap-24">
            <div className="space-y-4">
              <h4 className="text-xs uppercase tracking-[0.2em] font-black text-foreground">Navigation</h4>
              <ul className="space-y-2 text-sm font-light">
                <li><a href="#hero" className="hover:text-primary transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
                <li><a href="#projects" className="hover:text-primary transition-colors">Projects</a></li>
                <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-xs uppercase tracking-[0.2em] font-black text-foreground">Legal</h4>
              <ul className="space-y-2 text-sm font-light">
                <li><span className="opacity-50">Privacy Policy</span></li>
                <li><span className="opacity-50">Terms of Service</span></li>
              </ul>
            </div>
          </div>

        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-6">
          <p className='text-xs font-light tracking-wider uppercase opacity-50'>
            &copy; {new Date().getFullYear()} Muhammad Arslan &mdash; Built with React & Tailwind
          </p>
          <a 
            href="#hero" 
            className='group flex items-center gap-3 text-xs uppercase tracking-[0.3em] font-black text-foreground'
          >
            Back to Top <div className="p-2 rounded-full bg-white/5 group-hover:bg-primary group-hover:text-white transition-all"><ArrowUp size={14}/></div>
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;