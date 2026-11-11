import React, { useState } from 'react';
import { Layers, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { luxuryEase } from '../../utils/motion';

interface MaterialSample {
  id: string;
  name: string;
  category: string;
  provenance: string;
  description: string;
  colorHex: string;
  application: string;
  image: string;
}

export const MaterialExplorer: React.FC = () => {
  const materials: MaterialSample[] = [
    {
      id: 'mat-1',
      name: 'Roman Navona Travertine',
      category: 'Natural Stone',
      provenance: 'Tivoli, Italy',
      description: 'Unfilled honed architectural travertine with natural acoustic porosity and warm earthen undertones.',
      colorHex: '#D8CEBF',
      application: 'Monolithic fireplaces, cantilevered plinths, and primary bathroom vanities.',
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 'mat-2',
      name: 'Smoked European Walnut',
      category: 'Timber & Millwork',
      provenance: 'Austria & France',
      description: 'Naturally fumed European walnut with deep caramel depth and silk-touch open-grain matte finish.',
      colorHex: '#4A3B32',
      application: 'Bespoke acoustic wall ribs, walk-in dressing wardrobes, and kitchen cabinetry.',
      image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 'mat-3',
      name: 'Mineral Slaked Lime Plaster',
      category: 'Wall Systems',
      provenance: 'Veneto, Italy',
      description: 'Hand-troweled mineral finish that gently diffuses incoming daylight with subtle cloudy tonal shifts.',
      colorHex: '#F4EFE6',
      application: 'Continuous living salon envelopes, vaulted ceilings, and gallery corridors.',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 'mat-4',
      name: 'Unlacquered Living Bronze',
      category: 'Hardware & Metals',
      provenance: 'Artisan Castings',
      description: 'Hand-cast patinated brass designed to gracefully react with daily human touch, growing richer with time.',
      colorHex: '#877051',
      application: 'Pivot door hardware, custom lighting armatures, and fluted glass frames.',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 'mat-5',
      name: 'Heavyweight Belgian Flax Linen',
      category: 'Textiles',
      provenance: 'Flanders, Belgium',
      description: 'Undyed organic woven flax offering tactile softness, breathability, and natural drape.',
      colorHex: '#EAE5DB',
      application: 'Floor-to-ceiling wave curtains, custom lounge upholstery, and bed headboards.',
      image: 'https://images.unsplash.com/photo-1540518614846-7ede433c4ef4?auto=format&fit=crop&w=1200&q=80'
    }
  ];

  const [activeMaterial, setActiveMaterial] = useState<MaterialSample>(materials[0]);

  return (
    <section className="py-24 md:py-32 bg-[#1A1A18] text-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: luxuryEase }}
          className="space-y-4 max-w-2xl mb-16"
        >
          <div className="flex items-center gap-3">
            <span className="w-8 h-[1px] bg-[#C5A880]" />
            <span className="text-xs tracking-[0.28em] uppercase text-[#C5A880] font-medium">
              Materiality & Tactility
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#FAF8F5]">
            The Atelier Finish Palette
          </h2>
          <p className="text-sm md:text-base text-[#C9BEAD] font-light leading-relaxed">
            We reject synthetic imitations. Every Studio X Cross project is grounded in genuine stones, authentic woods, and natural metals curated to mature gracefully over decades.
          </p>
        </motion.div>

        {/* Interactive Material Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Material Selector List */}
          <div className="lg:col-span-5 space-y-3">
            {materials.map((mat, idx) => {
              const isSelected = activeMaterial.id === mat.id;
              return (
                <motion.div
                  key={mat.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08, duration: 0.5, ease: luxuryEase }}
                  onClick={() => setActiveMaterial(mat)}
                  className={`p-5 rounded-none border cursor-pointer transition-all duration-300 ${
                    isSelected
                      ? 'bg-[#2E2D2A] border-[#C5A880] translate-x-2'
                      : 'bg-[#141413]/60 border-white/10 hover:border-white/20 hover:bg-[#222220]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3.5">
                      <span
                        className="w-4 h-4 rounded-full border border-white/20"
                        style={{ backgroundColor: mat.colorHex }}
                      />
                      <div>
                        <span className="text-[10px] tracking-widest uppercase text-[#8C8880] block">
                          {mat.category}
                        </span>
                        <h4 className="text-sm font-medium text-white">
                          {mat.name}
                        </h4>
                      </div>
                    </div>
                    {isSelected && (
                      <span className="text-[10px] tracking-widest uppercase text-[#C5A880] flex items-center gap-1 font-medium">
                        Active <Check className="w-3 h-3" />
                      </span>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right Column: Active Material Spotlight Card with AnimatePresence */}
          <div className="lg:col-span-7 bg-[#222220] border border-white/10 p-6 md:p-10 shadow-2xl min-h-[460px] flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeMaterial.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.45, ease: luxuryEase }}
                className="space-y-6"
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-[#141413]">
                  <motion.img
                    initial={{ scale: 1.05 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.8, ease: luxuryEase }}
                    src={activeMaterial.image}
                    alt={activeMaterial.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-[#141413]/80 backdrop-blur-md px-3 py-1.5 text-[10px] tracking-[0.2em] uppercase text-[#C5A880]">
                    {activeMaterial.provenance}
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span
                      className="w-5 h-5 rounded-full border border-white/20"
                      style={{ backgroundColor: activeMaterial.colorHex }}
                    />
                    <h3 className="font-serif text-2xl md:text-3xl font-light text-white">
                      {activeMaterial.name}
                    </h3>
                  </div>

                  <p className="text-sm text-[#DFD8CC] leading-relaxed font-light">
                    {activeMaterial.description}
                  </p>

                  <div className="pt-4 border-t border-white/10 flex items-start gap-3">
                    <Layers className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                    <div className="text-xs text-[#AFA18E]">
                      <span className="text-white font-medium uppercase tracking-wider block mb-0.5">
                        Recommended Architectural Usage
                      </span>
                      {activeMaterial.application}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
