import React, { useState } from 'react';
import { ArrowUpRight, Check, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { servicesData } from '../../data/servicesData';
import { accordionMotion, luxuryEase } from '../../utils/motion';

interface ServicesSectionProps {
  onOpenConsultation: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenConsultation }) => {
  const [expandedServiceId, setExpandedServiceId] = useState<string | null>(servicesData[0].id);

  const toggleExpand = (id: string) => {
    setExpandedServiceId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="services" className="py-24 md:py-36 bg-[#FAF8F5] text-[#141413] border-b border-[#ECE7DE] overflow-hidden">
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
              Studio Offerings
            </span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-[#141413]">
            Designed Around Your Needs.
          </h2>
          <p className="text-base sm:text-lg text-[#696660] font-light leading-relaxed">
            From comprehensive residential turnkeys to targeted spatial styling, our services are calibrated to balance architectural discipline with everyday living ease.
          </p>
        </motion.div>

        {/* Services List with Expandable Editorial Cards */}
        <div className="space-y-6">
          {servicesData.map((service, idx) => {
            const isExpanded = expandedServiceId === service.id;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: idx * 0.08, ease: luxuryEase }}
                className={`border transition-all duration-500 bg-white ${
                  isExpanded ? 'border-[#8C7A6B] shadow-xl' : 'border-[#ECE7DE] hover:border-[#DFD8CC]'
                }`}
              >
                {/* Header Row */}
                <div
                  onClick={() => toggleExpand(service.id)}
                  className="p-6 md:p-8 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-6 select-none"
                >
                  <div className="flex items-start md:items-center gap-6">
                    <span className="font-serif text-xl md:text-2xl text-[#8C7A6B] font-light w-8">
                      {service.number}
                    </span>
                    <div>
                      <h3 className="font-serif text-2xl md:text-3xl text-[#141413] font-normal">
                        {service.title}
                      </h3>
                      <p className="text-xs text-[#8C7A6B] tracking-wider uppercase font-medium mt-1">
                        {service.tagline}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between md:justify-end gap-6 pt-2 md:pt-0 border-t md:border-t-0 border-[#ECE7DE]">
                    <p className="text-xs text-[#696660] font-light hidden lg:block max-w-sm line-clamp-1">
                      {service.description}
                    </p>

                    <div className="flex items-center gap-3">
                      <span className="text-[11px] tracking-widest uppercase font-medium text-[#141413]">
                        {isExpanded ? 'Collapse' : 'Explore Scope'}
                      </span>
                      <div className="w-8 h-8 rounded-full border border-[#ECE7DE] flex items-center justify-center text-[#141413]">
                        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Expanded Details Body with Framer Motion AnimatePresence */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      variants={accordionMotion}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                    >
                      <div className="px-6 pb-8 md:px-8 md:pb-10 pt-2 border-t border-[#ECE7DE] bg-[#FAF8F5]/60">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                          {/* Left: Service Image */}
                          <div className="lg:col-span-5 relative aspect-[16/10] overflow-hidden bg-[#ECE8DF]">
                            <img
                              src={service.image}
                              alt={service.title}
                              className="w-full h-full object-cover"
                            />
                          </div>

                          {/* Right: Deliverables & Details */}
                          <div className="lg:col-span-7 space-y-6">
                            <p className="text-base text-[#2E2D2A] font-light leading-relaxed">
                              {service.description}
                            </p>

                            <div className="space-y-3">
                              <h4 className="text-xs tracking-[0.2em] uppercase font-semibold text-[#8C7A6B]">
                                Scope of Work & Deliverables
                              </h4>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {service.deliverables.map((item, dIdx) => (
                                  <div key={dIdx} className="flex items-start gap-2.5 text-xs text-[#484641] font-light">
                                    <Check className="w-3.5 h-3.5 text-[#8C7A6B] shrink-0 mt-0.5" />
                                    <span>{item}</span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            <div className="p-4 bg-white border border-[#ECE7DE] text-xs text-[#696660]">
                              <span className="font-medium text-[#141413] uppercase tracking-wider block mb-1">
                                Signature Materiality:
                              </span>
                              {service.materialsFocus}
                            </div>

                            <div className="pt-2">
                              <button
                                onClick={onOpenConsultation}
                                className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#141413] text-[#FAF8F5] text-xs tracking-widest uppercase font-medium hover:bg-[#8C7A6B] transition-colors"
                              >
                                <span>Inquire for {service.title}</span>
                                <ArrowUpRight className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
