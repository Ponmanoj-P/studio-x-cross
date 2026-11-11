import React, { useState } from 'react';
import { Quote, ChevronLeft, ChevronRight, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { testimonialsData, testimonialDisclaimer } from '../../data/testimonialsData';
import { luxuryEase } from '../../utils/motion';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prevIdx) => (prevIdx === 0 ? testimonialsData.length - 1 : prevIdx - 1));
  };

  const next = () => {
    setCurrentIndex((prevIdx) => (prevIdx === testimonialsData.length - 1 ? 0 : prevIdx + 1));
  };

  const activeTestimonial = testimonialsData[currentIndex];

  return (
    <section className="py-24 md:py-36 bg-[#FAF8F5] text-[#141413] border-b border-[#ECE7DE] overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: luxuryEase }}
          className="text-center space-y-4 mb-16"
        >
          <div className="inline-flex items-center gap-3">
            <span className="w-6 h-[1px] bg-[#8C7A6B]" />
            <span className="text-xs tracking-[0.28em] uppercase text-[#8C7A6B] font-medium">
              Client Perspectives
            </span>
            <span className="w-6 h-[1px] bg-[#8C7A6B]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#141413]">
            Voices From Our Spaces
          </h2>
        </motion.div>

        {/* Testimonial Quote Box with AnimatePresence */}
        <div className="bg-white border border-[#ECE7DE] p-8 md:p-16 shadow-lg relative min-h-[300px]">
          <Quote className="w-12 h-12 text-[#E4DDD4] absolute top-8 left-8 -z-0 opacity-80" />

          <div className="relative z-10 space-y-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4, ease: luxuryEase }}
                className="space-y-6"
              >
                <p className="font-serif text-xl sm:text-2xl md:text-3xl text-[#141413] leading-relaxed font-light italic">
                  "{activeTestimonial.quote}"
                </p>

                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-sm text-[#141413]">
                      Client Residence ({activeTestimonial.clientInitials})
                    </span>
                    <span className="text-xs text-[#8C7A6B]">
                      • Completed {activeTestimonial.completionYear}
                    </span>
                  </div>
                  <p className="text-xs text-[#696660] font-light">
                    {activeTestimonial.residenceType} — {activeTestimonial.location}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="pt-6 border-t border-[#ECE7DE] flex items-center justify-between">
              <span className="text-xs text-[#8C7A6B] font-mono">
                0{currentIndex + 1} / 0{testimonialsData.length}
              </span>

              {/* Navigation Arrows */}
              <div className="flex items-center gap-2">
                <button
                  onClick={prev}
                  aria-label="Previous testimonial"
                  className="w-10 h-10 border border-[#ECE7DE] hover:border-[#141413] hover:bg-[#141413] hover:text-white transition-colors flex items-center justify-center text-[#141413]"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={next}
                  aria-label="Next testimonial"
                  className="w-10 h-10 border border-[#ECE7DE] hover:border-[#141413] hover:bg-[#141413] hover:text-white transition-colors flex items-center justify-center text-[#141413]"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Clear Demonstration Notice Badge */}
        <div className="mt-6 flex items-center justify-center gap-2 text-xs text-[#8C7A6B]">
          <Info className="w-3.5 h-3.5 shrink-0" />
          <span className="font-light">{testimonialDisclaimer}</span>
        </div>
      </div>
    </section>
  );
};
