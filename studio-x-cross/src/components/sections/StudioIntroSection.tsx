import React from 'react';
import { ArrowUpRight, Compass, Layers, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, luxuryEase } from '../../utils/motion';

interface StudioIntroSectionProps {
  onOpenConsultation: () => void;
}

export const StudioIntroSection: React.FC<StudioIntroSectionProps> = ({ onOpenConsultation }) => {
  return (
    <section id="about" className="py-24 md:py-36 bg-[#FAF8F5] text-[#141413] border-b border-[#ECE7DE] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: luxuryEase }}
          className="mb-12 flex items-center gap-3"
        >
          <span className="w-8 h-[1px] bg-[#8C7A6B]" />
          <span className="text-xs tracking-[0.28em] uppercase text-[#8C7A6B] font-medium">
            About The Studio
          </span>
        </motion.div>

        {/* Asymmetric Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Architectural Photo with subtle frame */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: luxuryEase }}
            className="lg:col-span-6 relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden bg-[#ECE8DF] shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=85"
                alt="Studio X Cross architectural interior salon highlighting quiet luxury materials"
                className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-1000"
                loading="lazy"
              />
            </div>
            
            {/* Architectural caption pill */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="absolute -bottom-6 right-6 bg-[#141413] text-[#FAF8F5] p-5 max-w-xs shadow-xl hidden sm:block"
            >
              <p className="text-[11px] tracking-[0.18em] uppercase text-[#C5A880] mb-1 font-medium">
                Design Philosophy
              </p>
              <p className="text-xs font-light text-[#D8CEBF] leading-relaxed">
                Subtlety over spectacle. Natural textures, acoustic balance, and enduring materiality.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Column: Editorial Text */}
          <motion.div
            variants={staggerContainer(0.15, 0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="lg:col-span-6 space-y-8 lg:pl-6"
          >
            <motion.div variants={fadeUp} className="space-y-4">
              <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal leading-[1.12] text-[#141413]">
                Designing Spaces. <br />
                <span className="italic font-light text-[#5C5043]">Creating Experiences.</span>
              </h2>
            </motion.div>

            <motion.p variants={fadeUp} className="text-base sm:text-lg text-[#484641] leading-relaxed font-light">
              Every space has a story waiting to unfold. We believe great interior design goes beyond aesthetics — it brings together functionality, individuality and thoughtful detailing to create environments that feel truly personal.
            </motion.p>

            <motion.p variants={fadeUp} className="text-sm text-[#696660] leading-relaxed font-light">
              At STUDIO X CROSS, our creative process is deeply collaborative and rooted in architectural rigor. Rather than imposing pre-packaged design trends, we sculpt bespoke spatial narratives where daylight, authentic materials, and quiet luxury form the canvas for modern living.
            </motion.p>

            {/* Architectural Tenets */}
            <motion.div variants={fadeUp} className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-[#ECE7DE]">
              <div className="space-y-2">
                <Compass className="w-5 h-5 text-[#8C7A6B]" />
                <h4 className="text-xs tracking-[0.16em] uppercase font-medium text-[#141413]">
                  Spatial Precision
                </h4>
                <p className="text-xs text-[#696660] font-light leading-relaxed">
                  Circulation and proportion optimized for unhindered movement.
                </p>
              </div>

              <div className="space-y-2">
                <Layers className="w-5 h-5 text-[#8C7A6B]" />
                <h4 className="text-xs tracking-[0.16em] uppercase font-medium text-[#141413]">
                  Honest Textures
                </h4>
                <p className="text-xs text-[#696660] font-light leading-relaxed">
                  Authentic natural stones, hand-troweled plasters, and solid woods.
                </p>
              </div>

              <div className="space-y-2">
                <ShieldCheck className="w-5 h-5 text-[#8C7A6B]" />
                <h4 className="text-xs tracking-[0.16em] uppercase font-medium text-[#141413]">
                  Turnkey Rigor
                </h4>
                <p className="text-xs text-[#696660] font-light leading-relaxed">
                  Strict tolerance checks from initial drawings to the final styling snag.
                </p>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div variants={fadeUp} className="pt-2">
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-3 text-xs tracking-[0.22em] uppercase font-medium text-[#141413] hover:text-[#8C7A6B] transition-colors py-2 border-b border-[#141413] hover:border-[#8C7A6B]"
              >
                <span>Initiate A Design Conversation</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
