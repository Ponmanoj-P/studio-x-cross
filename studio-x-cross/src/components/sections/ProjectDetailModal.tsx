import React, { useState } from 'react';
import { X, ArrowUpRight, MapPin, Calendar, Maximize2, Sparkles, Check, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '../../types';
import { samplePortfolioNotice } from '../../data/projectsData';
import { modalBackdrop, modalContent, luxuryEase } from '../../utils/motion';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
  onSelectRelated: (proj: Project) => void;
  allProjects: Project[];
  onOpenConsultation: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onSelectRelated,
  allProjects,
  onOpenConsultation
}) => {
  const [activeGalleryIndex, setActiveGalleryIndex] = useState<number | null>(null);

  if (!project) return null;

  const relatedProjects = allProjects
    .filter((p) => p.id !== project.id && (p.category === project.category || p.isFeatured))
    .slice(0, 2);

  return (
    <motion.div
      variants={modalBackdrop}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md"
    >
      <motion.div
        variants={modalContent}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="min-h-screen bg-[#FAF8F5] text-[#141413] max-w-5xl mx-auto my-0 sm:my-10 shadow-2xl relative border-x border-[#ECE7DE]"
      >
        {/* Sticky Top Bar with Close */}
        <div className="sticky top-0 z-30 bg-[#FAF8F5]/90 backdrop-blur-md px-6 py-4 border-b border-[#ECE7DE] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-[11px] tracking-[0.22em] uppercase text-[#8C7A6B] font-medium">
              Selected Work / {project.category}
            </span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close project modal"
            className="p-2 -mr-2 text-[#141413] hover:text-[#8C7A6B] hover:rotate-90 transition-all duration-300"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Project Full Hero Banner */}
        <div className="relative w-full h-[55vh] min-h-[380px] bg-[#141413] overflow-hidden">
          <motion.img
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2, ease: luxuryEase }}
            src={project.heroImage}
            alt={project.title}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
          
          <div className="absolute bottom-8 left-6 md:left-12 right-6 md:right-12 text-white">
            <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm text-[10px] tracking-[0.25em] uppercase text-[#FAF8F5] mb-3">
              {project.category}
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-light text-white leading-tight">
              {project.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 mt-4 text-xs text-[#E4DDD4] font-light">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#C5A880]" />
                {project.location}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#C5A880]" />
                Completed {project.year}
              </span>
              <span>Scope: {project.area}</span>
              <span>Timeline: {project.timeline}</span>
            </div>
          </div>
        </div>

        {/* Demonstration Note Banner */}
        <div className="bg-[#F3EFEA] px-6 md:px-12 py-3 border-b border-[#ECE7DE] text-[11px] text-[#6E5D4F] flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-[#C5A880] shrink-0" />
          <span>{samplePortfolioNotice.text}</span>
        </div>

        {/* Modal Main Content */}
        <div className="p-6 md:p-12 space-y-16">
          {/* Overview & Design Concept Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            <div className="md:col-span-7 space-y-6">
              <h2 className="text-xs tracking-[0.25em] uppercase text-[#8C7A6B] font-medium">
                The Architectural Overview
              </h2>
              <p className="text-base sm:text-lg text-[#2E2D2A] leading-relaxed font-light">
                {project.overview}
              </p>
              
              <div className="pt-4 border-t border-[#ECE7DE] space-y-3">
                <h3 className="text-xs tracking-[0.2em] uppercase text-[#8C7A6B] font-medium">
                  Design Concept & Intent
                </h3>
                <p className="text-sm text-[#484641] leading-relaxed font-light italic">
                  "{project.designConcept}"
                </p>
              </div>
            </div>

            {/* Spatial Features Checklist */}
            <div className="md:col-span-5 bg-[#F5F2EB] p-6 border border-[#ECE7DE] space-y-4">
              <h3 className="text-xs tracking-[0.22em] uppercase text-[#141413] font-medium">
                Spatial Interventions
              </h3>
              <ul className="space-y-3">
                {project.spatialFeatures.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-[#484641] leading-relaxed font-light">
                    <Check className="w-4 h-4 text-[#8C7A6B] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Materials & Finishes Palette Section */}
          <div className="space-y-6 border-t border-[#ECE7DE] pt-12">
            <div className="space-y-1">
              <span className="text-xs tracking-[0.25em] uppercase text-[#8C7A6B] font-medium">
                Materiality & Finish Schedule
              </span>
              <h3 className="font-serif text-2xl md:text-3xl font-light">
                Curated Natural Finishes
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {project.materialsPalette.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-white border border-[#ECE7DE] space-y-3 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-3">
                    <span
                      className="w-7 h-7 rounded-full border border-black/10 shrink-0 shadow-inner"
                      style={{ backgroundColor: item.colorCode }}
                    />
                    <div>
                      <p className="text-[10px] tracking-wider uppercase text-[#8C7A6B] font-medium">
                        {item.category}
                      </p>
                      <h4 className="text-xs font-semibold text-[#141413]">
                        {item.name}
                      </h4>
                    </div>
                  </div>
                  <p className="text-[11px] text-[#696660] font-light leading-snug">
                    {item.textureNote}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* High-Resolution Project Image Gallery */}
          <div className="space-y-6 border-t border-[#ECE7DE] pt-12">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <span className="text-xs tracking-[0.25em] uppercase text-[#8C7A6B] font-medium">
                  Visual Documentation
                </span>
                <h3 className="font-serif text-2xl md:text-3xl font-light">
                  Architectural Perspectives
                </h3>
              </div>
              <span className="text-xs text-[#8C7A6B] hidden sm:inline">
                Click any perspective to view fullscreen
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.gallery.map((img, idx) => (
                <div
                  key={idx}
                  onClick={() => setActiveGalleryIndex(idx)}
                  className={`group relative overflow-hidden bg-[#ECE8DF] cursor-pointer ${
                    img.aspectRatio === 'wide' ? 'md:col-span-2 aspect-[16/9]' : 'aspect-[4/3]'
                  }`}
                >
                  <img
                    src={img.url}
                    alt={img.caption}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5 text-white">
                    <div className="flex items-center justify-between w-full">
                      <p className="text-xs font-light text-white/95 max-w-lg">
                        {img.caption}
                      </p>
                      <Maximize2 className="w-4 h-4 text-white/80 shrink-0 ml-4" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Related Projects */}
          {relatedProjects.length > 0 && (
            <div className="space-y-6 border-t border-[#ECE7DE] pt-12">
              <h3 className="text-xs tracking-[0.25em] uppercase text-[#8C7A6B] font-medium">
                Related Works
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {relatedProjects.map((rel) => (
                  <div
                    key={rel.id}
                    onClick={() => {
                      onSelectRelated(rel);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="group cursor-pointer bg-white border border-[#ECE7DE] overflow-hidden hover:shadow-lg transition-all"
                  >
                    <div className="aspect-[16/10] overflow-hidden bg-[#ECE8DF]">
                      <img
                        src={rel.thumbnail}
                        alt={rel.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4 flex items-center justify-between">
                      <div>
                        <span className="text-[10px] tracking-widest uppercase text-[#8C7A6B]">
                          {rel.category}
                        </span>
                        <h4 className="font-serif text-base text-[#141413] group-hover:text-[#8C7A6B] transition-colors">
                          {rel.title}
                        </h4>
                      </div>
                      <ChevronRight className="w-4 h-4 text-[#8C7A6B] group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Project Bottom Conversion CTA */}
          <div className="bg-[#141413] text-[#FAF8F5] p-8 md:p-12 text-center space-y-6">
            <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-light">
              Interested in a Bespoke Space Like This?
            </h3>
            <p className="text-sm text-[#DFD8CC] max-w-lg mx-auto font-light leading-relaxed">
              We collaborate closely with private clients, developers, and brands across India to conceptualize and execute architectural spaces tailored to individual lifestyles.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => {
                  onClose();
                  onOpenConsultation();
                }}
                className="px-8 py-3.5 bg-[#FAF8F5] text-[#141413] text-xs tracking-[0.2em] uppercase font-medium hover:bg-[#E4DDD4] transition-colors flex items-center gap-2"
              >
                <span>Discuss Your Requirements</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={onClose}
                className="px-8 py-3.5 border border-white/30 text-white text-xs tracking-[0.2em] uppercase font-medium hover:bg-white/10 transition-colors"
              >
                Return to Gallery
              </button>
            </div>
          </div>
        </div>

        {/* Fullscreen Lightbox for Gallery Photos with AnimatePresence */}
        <AnimatePresence>
          {activeGalleryIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-60 bg-black/95 flex flex-col items-center justify-center p-4"
            >
              <button
                onClick={() => setActiveGalleryIndex(null)}
                aria-label="Close Lightbox"
                className="absolute top-6 right-6 text-white/80 hover:text-white p-2"
              >
                <X className="w-8 h-8" />
              </button>
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="max-w-5xl max-h-[80vh] overflow-hidden flex flex-col items-center"
              >
                <img
                  src={project.gallery[activeGalleryIndex].url}
                  alt={project.gallery[activeGalleryIndex].caption}
                  className="max-h-[75vh] w-auto object-contain shadow-2xl"
                />
                <p className="text-white/80 text-sm mt-4 text-center font-light">
                  {project.gallery[activeGalleryIndex].caption}
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};
