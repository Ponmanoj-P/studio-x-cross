import React, { useState } from 'react';
import { SlidersHorizontal, ArrowLeftRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeUp, luxuryEase } from '../../utils/motion';

export const BeforeAfterInteractive: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percent);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const touch = e.touches[0];
    const x = Math.max(0, Math.min(touch.clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percent);
  };

  return (
    <section className="py-24 md:py-32 bg-[#FAF8F5] text-[#141413] border-b border-[#ECE7DE] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: luxuryEase }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
        >
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="w-8 h-[1px] bg-[#8C7A6B]" />
              <span className="text-xs tracking-[0.28em] uppercase text-[#8C7A6B] font-medium">
                Concept to Turnkey Reality
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#141413]">
              Fidelity to the Approved Vision
            </h2>
            <p className="text-sm md:text-base text-[#696660] font-light leading-relaxed">
              Drag the interactive slider below to witness how the studio preserves 100% material fidelity from photorealistic architectural 3D simulations to final turnkey handover.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs text-[#8C7A6B]">
            <ArrowLeftRight className="w-4 h-4" />
            <span>Drag slider horizontally</span>
          </div>
        </motion.div>

        {/* Interactive Comparison Container with Motion Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, ease: luxuryEase }}
          className="relative w-full aspect-[16/9] sm:aspect-[21/9] max-h-[560px] overflow-hidden select-none cursor-ew-resize border border-[#ECE7DE] shadow-2xl"
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
        >
          {/* Base Image (Completed Turnkey Reality) */}
          <img
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2200&q=85"
            alt="Completed Turnkey Reality"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Top Clipped Image (3D Render Concept Simulation) */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ width: `${sliderPosition}%` }}
          >
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2200&q=85"
              alt="3D Spatial Concept Study"
              className="absolute inset-0 w-full h-full object-cover max-w-none"
              style={{
                width: '100%',
                filter: 'contrast(1.08) brightness(1.02) sepia(0.08)'
              }}
            />
            {/* Concept Label */}
            <div className="absolute top-6 left-6 bg-[#141413]/85 backdrop-blur-md px-3.5 py-1.5 text-[10px] tracking-[0.25em] uppercase text-[#FAF8F5] border border-white/20">
              01 • 3D Architectural Simulation
            </div>
          </div>

          {/* Completed Label on Right */}
          <div className="absolute top-6 right-6 bg-[#141413]/85 backdrop-blur-md px-3.5 py-1.5 text-[10px] tracking-[0.25em] uppercase text-[#C5A880] border border-[#C5A880]/30 pointer-events-none">
            02 • Handed-Over Reality
          </div>

          {/* Divider Line & Handle */}
          <div
            className="absolute top-0 bottom-0 w-[2px] bg-[#FAF8F5] shadow-2xl pointer-events-none transition-transform"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#141413] border-2 border-[#FAF8F5] flex items-center justify-center text-white shadow-xl">
              <SlidersHorizontal className="w-4 h-4 text-[#C5A880]" />
            </div>
          </div>
        </motion.div>

        {/* Feature footnote */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#8C7A6B] gap-4"
        >
          <span className="flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
            <span>Zero-Deviation Guarantee: What is approved in 3D is precisely what is fabricated.</span>
          </span>
          <span className="text-[#696660]">
            Current Split: {Math.round(sliderPosition)}% Concept / {100 - Math.round(sliderPosition)}% Execution
          </span>
        </motion.div>
      </div>
    </section>
  );
};
