import React, { useState } from 'react';
import { ArrowUpRight, MapPin, Eye } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsData } from '../../data/projectsData';
import { Project, ProjectCategory } from '../../types';
import { ProjectDetailModal } from './ProjectDetailModal';
import { fadeUp, luxuryEase } from '../../utils/motion';

interface SelectedWorksSectionProps {
  onOpenConsultation: () => void;
}

export const SelectedWorksSection: React.FC<SelectedWorksSectionProps> = ({ onOpenConsultation }) => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories: ProjectCategory[] = [
    'All',
    'Residential Interiors',
    'Living Spaces',
    'Modular Kitchens',
    'Bedroom Interiors',
    'Commercial Spaces',
  ];

  const filteredProjects = activeCategory === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 md:py-36 bg-[#F5F2EB] text-[#141413] border-b border-[#ECE7DE] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: luxuryEase }}
            className="space-y-4 max-w-2xl"
          >
            <div className="flex items-center gap-3">
              <span className="w-8 h-[1px] bg-[#8C7A6B]" />
              <span className="text-xs tracking-[0.28em] uppercase text-[#8C7A6B] font-medium">
                Portfolio
              </span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-[#141413]">
              Selected Works
            </h2>
            <p className="text-base sm:text-lg text-[#696660] font-light leading-relaxed">
              A glimpse into spaces shaped by thoughtful design and attention to detail.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs tracking-widest text-[#8C7A6B] uppercase font-light"
          >
            Showing {filteredProjects.length} Architectural Studies
          </motion.div>
        </div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-none border-b border-[#DFD8CC]"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2.5 text-xs tracking-[0.16em] uppercase whitespace-nowrap transition-all duration-300 font-medium relative ${
                activeCategory === cat
                  ? 'bg-[#141413] text-[#FAF8F5]'
                  : 'text-[#696660] hover:text-[#141413] hover:bg-[#EAE5DB]'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Asymmetric Masonry-style Grid with Framer Motion Layout Animations */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => {
              const isWide = idx % 3 === 0;
              const colSpan = isWide ? 'md:col-span-8' : 'md:col-span-4';
              const aspect = isWide ? 'aspect-[16/10]' : 'aspect-[4/5]';

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -10 }}
                  transition={{ duration: 0.5, ease: luxuryEase }}
                  onClick={() => setSelectedProject(project)}
                  className={`group cursor-pointer ${colSpan} flex flex-col space-y-4`}
                >
                  {/* Image Container with Hover Scale and Overlay */}
                  <div className={`relative ${aspect} overflow-hidden bg-[#ECE8DF] shadow-md transition-all duration-500 group-hover:shadow-2xl`}>
                    <img
                      src={project.coverImage}
                      alt={project.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />

                    {/* Dark subtle gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-40 group-hover:opacity-60 transition-opacity duration-300" />

                    {/* Top Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-[#141413]/80 backdrop-blur-sm text-white text-[10px] tracking-[0.2em] uppercase font-medium">
                        {project.category}
                      </span>
                    </div>

                    {/* Hover "View Project" Pill */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="px-5 py-2.5 bg-white/95 text-[#141413] backdrop-blur-sm text-xs tracking-[0.18em] uppercase font-medium flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform shadow-lg">
                        <Eye className="w-3.5 h-3.5" />
                        <span>View Project</span>
                      </div>
                    </div>

                    {/* Bottom Location Indicator */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white/90">
                      <span className="flex items-center gap-1.5 text-xs font-light">
                        <MapPin className="w-3.5 h-3.5 text-[#C5A880]" />
                        {project.location}
                      </span>
                      <span className="text-xs font-serif text-[#C5A880]">
                        {project.year}
                      </span>
                    </div>
                  </div>

                  {/* Project Metadata Text */}
                  <div className="flex items-baseline justify-between pt-1">
                    <div className="space-y-1">
                      <h3 className="font-serif text-2xl md:text-2xl text-[#141413] group-hover:text-[#8C7A6B] transition-colors leading-snug">
                        {project.title}
                      </h3>
                      <p className="text-xs text-[#696660] font-light line-clamp-1 max-w-md">
                        {project.excerpt}
                      </p>
                    </div>
                    <div className="p-2 text-[#141413] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                      <ArrowUpRight className="w-5 h-5 text-[#8C7A6B]" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Portfolio Note & Custom Inquiry */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mt-20 pt-10 border-t border-[#DFD8CC] flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left"
        >
          <div className="space-y-1">
            <h4 className="font-serif text-xl font-light text-[#141413]">
              Have a distinct property or architectural floor plan?
            </h4>
            <p className="text-xs text-[#696660] font-light">
              We provide tailored site feasibility reviews and architectural concept proposals.
            </p>
          </div>

          <button
            onClick={onOpenConsultation}
            className="px-6 py-3 bg-[#141413] text-[#FAF8F5] text-xs tracking-[0.2em] uppercase font-medium hover:bg-[#2E2D2A] transition-colors flex items-center gap-2"
          >
            <span>Request A Project Assessment</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </motion.div>
      </div>

      {/* Project Detail Modal with AnimatePresence */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectDetailModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
            onSelectRelated={(p) => setSelectedProject(p)}
            allProjects={projectsData}
            onOpenConsultation={onOpenConsultation}
          />
        )}
      </AnimatePresence>
    </section>
  );
};
