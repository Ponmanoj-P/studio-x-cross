import React from 'react';
import { Eye, Ruler, Palette, Sparkles, Sliders, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, luxuryEase } from '../../utils/motion';

export const WhyUsSection: React.FC = () => {
  const pillars = [
    {
      icon: Users,
      number: '01',
      title: 'Personalized Design Approach',
      description: 'We do not impose repetitive studio templates. Each spatial plan is conceived around your daily rituals, family dynamics, and personal aesthetic identity.'
    },
    {
      icon: Eye,
      number: '02',
      title: 'Attention to Detail',
      description: 'From shadow reveals where stone meets wood, to silent drawer runners and concealed HVAC diffusers — every millimeter is intentionally considered.'
    },
    {
      icon: Ruler,
      number: '03',
      title: 'Functional Space Planning',
      description: 'Beauty without functionality quickly frustrates. We optimize sightlines, natural circulation, and concealed storage to bring genuine serenity to daily living.'
    },
    {
      icon: Palette,
      number: '04',
      title: 'Thoughtful Material Selection',
      description: 'We prioritize authentic stones, honed marbles, tactile linens, and responsibly sourced timbers that grow more characterful as they age.'
    },
    {
      icon: Sparkles,
      number: '05',
      title: 'Aesthetic Consistency',
      description: 'A harmonious visual language flows across every room. Colors, lighting temperatures, and joinery finishes harmonize into a unified residential narrative.'
    },
    {
      icon: Sliders,
      number: '06',
      title: 'Client-Centric Execution',
      description: 'Transparent communication, itemized budgets, and proactive milestone tracking guarantee that the finished space mirrors the approved 3D intent.'
    }
  ];

  return (
    <section className="py-24 md:py-36 bg-[#FAF8F5] text-[#141413] border-b border-[#ECE7DE] overflow-hidden">
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
              The Studio Standard
            </span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-[#141413]">
            Good Design Is Felt, <br />
            <span className="italic font-light text-[#5C5043]">Not Just Seen.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#696660] font-light leading-relaxed">
            Great interiors are an emotional experience — the softness of incoming daylight, the weight of a solid brass handle, and the calm of a home where everything has its designated place.
          </p>
        </motion.div>

        {/* 6 Pillars Staggered Grid */}
        <motion.div
          variants={staggerContainer(0.1, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.number}
                variants={fadeUp}
                className="p-8 bg-white border border-[#ECE7DE] hover:border-[#8C7A6B] transition-all duration-300 group hover:shadow-lg space-y-5"
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-full bg-[#FAF8F5] flex items-center justify-center border border-[#ECE7DE] group-hover:bg-[#141413] group-hover:text-white transition-colors">
                    <Icon className="w-4 h-4 text-[#8C7A6B] group-hover:text-white transition-colors" />
                  </div>
                  <span className="font-serif text-xl font-light text-[#8C7A6B]">
                    {pillar.number}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="font-serif text-xl font-medium text-[#141413] group-hover:text-[#8C7A6B] transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#696660] font-light leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
