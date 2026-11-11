import React, { useState, useEffect } from 'react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, luxuryEase } from '../../utils/motion';

interface HeroSectionProps {
  onOpenConsultation: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenConsultation }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  // High-res architectural living space with warm minimal palette, travertine plinth, and natural light
  const heroImageSrc = 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2600&q=90';

  useEffect(() => {
    const img = new Image();
    img.src = heroImageSrc;
    img.onload = () => setImageLoaded(true);
  }, [heroImageSrc]);

  const scrollToWorks = () => {
    const el = document.querySelector('#projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative h-screen min-h-[700px] w-full flex items-end pb-16 md:pb-24 overflow-hidden bg-[#141413]">
      {/* Background Architectural Photograph */}
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={imageLoaded ? { scale: 1, opacity: 1 } : { scale: 1.1, opacity: 0 }}
        transition={{ duration: 1.6, ease: luxuryEase }}
        className="absolute inset-0 z-0"
      >
        <img
          src={heroImageSrc}
          alt="Contemporary luxury interior architectural space designed with natural travertine and bespoke woodwork"
          className="w-full h-full object-cover object-center"
        />
        {/* Subtle architectural vignette overlay for elegant legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/30" />
        <div className="absolute inset-0 bg-black/15" />
      </motion.div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full text-white">
        <motion.div
          variants={staggerContainer(0.18, 0.3)}
          initial="hidden"
          animate="visible"
          className="max-w-4xl space-y-6 md:space-y-8"
        >
          {/* Subtle Studio Label */}
          <motion.div variants={fadeUp} className="inline-flex items-center gap-3">
            <span className="w-8 h-[1px] bg-[#C5A880]" />
            <span className="text-[11px] md:text-xs tracking-[0.3em] uppercase text-[#E4DDD4] font-medium">
              Architectural & Interior Design Atelier
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={fadeUp}
            className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal leading-[1.08] tracking-tight text-[#FAF8F5]"
          >
            Spaces That Reflect <br />
            <span className="italic font-light text-[#EFECE6]">The Way You Live.</span>
          </motion.h1>

          {/* Supporting Text */}
          <motion.p
            variants={fadeUp}
            className="text-base sm:text-lg md:text-xl text-[#DFD8CC] font-light max-w-2xl leading-relaxed"
          >
            Thoughtfully designed interiors. Timeless aesthetics. Spaces created around you.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeUp}
            className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5"
          >
            <button
              onClick={scrollToWorks}
              className="px-8 py-4 bg-[#FAF8F5] text-[#141413] text-xs tracking-[0.22em] uppercase font-medium hover:bg-[#E4DDD4] transition-all duration-300 flex items-center justify-center gap-2 group shadow-xl"
            >
              <span>Explore Our Work</span>
              <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
            </button>

            <button
              onClick={onOpenConsultation}
              className="px-8 py-4 bg-transparent border border-white/40 text-white text-xs tracking-[0.22em] uppercase font-medium hover:bg-white/10 hover:border-white transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-sm"
            >
              <span>Let's Discuss Your Project</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        </motion.div>

        {/* Vertical Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute right-6 md:right-12 bottom-12 hidden md:flex flex-col items-center gap-3"
        >
          <span className="text-[10px] tracking-[0.3em] uppercase text-white/60 -rotate-90 origin-bottom select-none">
            Scroll
          </span>
          <div className="w-[1px] h-12 bg-white/30 relative overflow-hidden">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
              className="w-full h-1/2 bg-[#C5A880]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
