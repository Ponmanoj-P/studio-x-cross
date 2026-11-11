import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { processData } from '../../data/processData';
import { luxuryEase } from '../../utils/motion';

interface ProcessSectionProps {
  onOpenConsultation: () => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onOpenConsultation }) => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const activeStep = processData[activeStepIndex];

  return (
    <section id="process" className="py-24 md:py-36 bg-[#F5F2EB] text-[#141413] border-b border-[#ECE7DE] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: luxuryEase }}
          className="max-w-3xl space-y-4 mb-20"
        >
          <div className="flex items-center gap-3">
            <span className="w-8 h-[1px] bg-[#8C7A6B]" />
            <span className="text-xs tracking-[0.28em] uppercase text-[#8C7A6B] font-medium">
              Architectural Methodology
            </span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-[#141413]">
            From First Conversation <br />
            <span className="italic font-light text-[#5C5043]">to Final Detail.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#696660] font-light leading-relaxed">
            Our structured five-stage methodology ensures complete clarity, budget control, and aesthetic fidelity throughout the journey of shaping your home.
          </p>
        </motion.div>

        {/* Interactive Steps Bar with Motion */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 sm:grid-cols-5 gap-2 sm:gap-4 mb-12 border-b border-[#DFD8CC] pb-6"
        >
          {processData.map((step, idx) => {
            const isActive = idx === activeStepIndex;
            return (
              <button
                key={step.number}
                onClick={() => setActiveStepIndex(idx)}
                className={`text-left p-4 transition-all duration-300 border-l-2 relative ${
                  isActive
                    ? 'border-[#141413] bg-[#EAE5DB]'
                    : 'border-transparent hover:border-[#8C7A6B] hover:bg-[#EAE5DB]/50'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-serif text-lg font-light text-[#8C7A6B]">
                    {step.number}
                  </span>
                  <span className="text-[10px] tracking-widest uppercase font-medium text-[#696660]">
                    {step.phase}
                  </span>
                </div>
                <div className="text-xs font-medium text-[#141413] truncate">
                  {step.title}
                </div>
              </button>
            );
          })}
        </motion.div>

        {/* Active Step Spotlight Card with AnimatePresence */}
        <div className="bg-white border border-[#ECE7DE] p-8 md:p-12 shadow-xl min-h-[380px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep.number}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4, ease: luxuryEase }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start"
            >
              {/* Left Stage Details */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-4">
                  <span className="font-serif text-4xl sm:text-5xl font-light text-[#8C7A6B]">
                    {activeStep.number}
                  </span>
                  <div>
                    <span className="text-xs tracking-[0.22em] uppercase text-[#8C7A6B] font-medium block">
                      Phase: {activeStep.phase}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl text-[#141413] font-normal">
                      {activeStep.title}
                    </h3>
                  </div>
                </div>

                <p className="text-base text-[#2E2D2A] font-light leading-relaxed">
                  {activeStep.description}
                </p>

                <div className="pt-2 flex items-center gap-2 text-xs text-[#8C7A6B] font-medium">
                  <Clock className="w-4 h-4" />
                  <span>Typical Phase Duration: {activeStep.duration}</span>
                </div>
              </div>

              {/* Right Deliverables Checklist */}
              <div className="lg:col-span-5 bg-[#FAF8F5] p-6 sm:p-8 border border-[#ECE7DE] space-y-4">
                <h4 className="text-xs tracking-[0.2em] uppercase font-semibold text-[#141413]">
                  Tangible Deliverables in Phase {activeStep.number}
                </h4>
                <ul className="space-y-3">
                  {activeStep.deliverables.map((deliv, i) => (
                    <li key={i} className="flex items-start gap-3 text-xs text-[#484641] font-light leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-[#8C7A6B] shrink-0 mt-0.5" />
                      <span>{deliv}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-[#ECE7DE]">
                  <button
                    onClick={onOpenConsultation}
                    className="w-full py-3 bg-[#141413] text-[#FAF8F5] text-xs tracking-widest uppercase font-medium hover:bg-[#8C7A6B] transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Book Phase 01 Consultation</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
