import { motion } from "framer-motion";
import heroImage from "@/assets/project-hero.jpg";
import heroSectionImage from "@/assets/hero-section.png";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 max-w-xl mx-auto">
            <span className="tag-badge">n8n</span>
            <span className="tag-badge">Workflow Automation</span>
            <span className="tag-badge">Telegram Bot</span>
            <span className="tag-badge">2025</span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight mb-6">
            Telegram Recruitment Automation
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            This project automates the handling of job applications for a
            Ukrainian recruitment agency.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mx-auto max-w-full"
        >
          <img
            src={heroSectionImage}
            alt="Project Hero"
            className="w-full h-auto max-w-3xl mx-auto"
            style={{ objectFit: "contain" }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
