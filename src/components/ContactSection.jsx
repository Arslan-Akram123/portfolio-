import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Send,
  ExternalLink
} from "lucide-react";
import { useToast } from "../hooks/use-toast";
import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const notificationTemplateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const autoReplyTemplateID = import.meta.env.VITE_EMAILJS_AUTO_REPLY_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    Promise.all([
      emailjs.send(serviceID, notificationTemplateID, templateParams, publicKey),
      emailjs.send(serviceID, autoReplyTemplateID, templateParams, publicKey)
    ])
      .then(() => {
        toast({ title: "Message Sent!", description: "I will get back to you soon." });
        setFormData({ name: '', email: '', message: '' });
      })
      .catch(() => {
        toast({ title: "Error", description: "Failed to send message.", variant: "destructive" });
      })
      .finally(() => setIsSubmitting(false));
  };

  return (
    <section id="contact" className="py-24 px-6 relative bg-muted/30 overflow-hidden">
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <motion.h4 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-primary font-bold tracking-widest uppercase text-sm mb-4"
            >
                Get In Touch
            </motion.h4>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Let's build something <span className="text-primary">extraordinary.</span>
            </h2>
            <p className="text-muted-foreground text-lg font-light mb-12 max-w-md">
              Whether you have a specific project in mind or just want to chat about tech, I'm always open to new connections.
            </p>

            <div className="space-y-6 mb-12">
              <div className="flex items-center gap-5 p-4 rounded-2xl bg-background border border-border/50 hover:border-primary/30 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">Email</p>
                  <a href="mailto:arslanakramsoftwareengineer@gmail.com" className="text-lg font-bold">arslanakramsoftwareengineer@gmail.com</a>
                </div>
              </div>

              <div className="flex items-center gap-5 p-4 rounded-2xl bg-background border border-border/50 hover:border-primary/30 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-primary-foreground transition-all">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">Location</p>
                  <p className="text-lg font-bold">Punjab, Pakistan</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              {[
                { icon: <Github size={20} />, link: "https://github.com/Arslan-Akram123" },
                { icon: <Linkedin size={20} />, link: "https://www.linkedin.com/in/muhammadarslanakram/" }
              ].map((social, i) => (
                <a 
                  key={i}
                  href={social.link} 
                  target="_blank"
                  className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-10 rounded-3xl glass-card relative"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="w-full px-5 py-4 rounded-xl bg-background border border-border focus:border-primary/50 focus:ring-4 focus:ring-primary/5 outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                    className="w-full px-5 py-4 rounded-xl bg-background border border-border focus:border-primary/50 focus:ring-4 focus:ring-primary/5 outline-none transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can I help you?"
                  required
                  rows="5"
                  className="w-full px-5 py-4 rounded-xl bg-background border border-border focus:border-primary/50 focus:ring-4 focus:ring-primary/5 outline-none transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary py-4 text-lg flex items-center justify-center gap-3 disabled:opacity-50"
              >
                {isSubmitting ? "Sending..." : (
                  <>
                    Send Message <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
