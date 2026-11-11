import React, { useState } from 'react';
import { X, ArrowUpRight, MessageCircle, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteConfig } from '../../config/siteConfig';
import { modalBackdrop, modalContent } from '../../utils/motion';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({ isOpen, onClose }) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [projectType, setProjectType] = useState(siteConfig.projectTypes[0]);
  const [approxBudget, setApproxBudget] = useState(siteConfig.budgetRanges[1]);
  const [location, setLocation] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!fullName.trim()) errs.fullName = 'Name is required';
    if (!phone.trim()) errs.phone = 'Phone number is required';
    if (!email.trim() || !email.includes('@')) errs.email = 'Valid email is required';
    if (!location.trim()) errs.location = 'Project location is required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFullName('');
    setPhone('');
    setEmail('');
    setLocation('');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={modalBackdrop}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
        >
          <motion.div
            variants={modalContent}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="bg-[#1A1A18] text-[#FAF8F5] border border-white/15 max-w-xl w-full p-8 md:p-10 shadow-2xl relative"
          >
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {submitted ? (
              <div className="text-center py-8 space-y-5">
                <div className="w-14 h-14 bg-[#C5A880]/20 rounded-full flex items-center justify-center mx-auto text-[#C5A880]">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-3xl font-light text-white">
                  Thank You, {fullName}
                </h3>
                <p className="text-xs sm:text-sm text-[#C9BEAD] font-light leading-relaxed max-w-md mx-auto">
                  Your consultation request has been received. Our architectural team will review the details for your <span className="text-white">{projectType}</span> in <span className="text-white">{location}</span> and reach out promptly.
                </p>
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={siteConfig.getWhatsAppLink(`Hi Studio X Cross, I submitted an initial consultation form for my ${projectType} in ${location}. My name is ${fullName}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-6 py-3 bg-[#25D366] text-black text-xs tracking-widest uppercase font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Instant WhatsApp</span>
                  </a>
                  <button
                    onClick={handleReset}
                    className="w-full sm:w-auto px-6 py-3 border border-white/20 text-white text-xs tracking-widest uppercase hover:bg-white/10 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2">
                    <span className="w-6 h-[1px] bg-[#C5A880]" />
                    <span className="text-[10px] tracking-[0.25em] uppercase text-[#C5A880] font-medium">
                      Studio X Cross Atelier
                    </span>
                  </div>
                  <h3 className="font-serif text-3xl font-normal text-white">
                    Initiate Your Project
                  </h3>
                  <p className="text-xs text-[#8C8880] font-light">
                    Tell us about your space. We'll connect with you to review feasibility, aesthetic direction, and scheduling.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1">
                    <label className="text-[10px] tracking-wider uppercase text-[#C9BEAD] block">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-[#141413] border border-white/15 text-sm text-white focus:outline-none focus:border-[#C5A880]"
                    />
                    {errors.fullName && <p className="text-[10px] text-red-300">{errors.fullName}</p>}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="text-[10px] tracking-wider uppercase text-[#C9BEAD] block">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        placeholder="+91 98000 00000"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-[#141413] border border-white/15 text-sm text-white focus:outline-none focus:border-[#C5A880]"
                      />
                      {errors.phone && <p className="text-[10px] text-red-300">{errors.phone}</p>}
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] tracking-wider uppercase text-[#C9BEAD] block">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        placeholder="email@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-[#141413] border border-white/15 text-sm text-white focus:outline-none focus:border-[#C5A880]"
                      />
                      {errors.email && <p className="text-[10px] text-red-300">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="text-[10px] tracking-wider uppercase text-[#C9BEAD] block">
                        Project Type
                      </label>
                      <select
                        value={projectType}
                        onChange={(e) => setProjectType(e.target.value)}
                        className="w-full px-3 py-2.5 bg-[#141413] border border-white/15 text-xs text-white focus:outline-none focus:border-[#C5A880]"
                      >
                        {siteConfig.projectTypes.map((t) => (
                          <option key={t} value={t} className="bg-[#141413]">
                            {t}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] tracking-wider uppercase text-[#C9BEAD] block">
                        Approx Budget
                      </label>
                      <select
                        value={approxBudget}
                        onChange={(e) => setApproxBudget(e.target.value)}
                        className="w-full px-3 py-2.5 bg-[#141413] border border-white/15 text-xs text-white focus:outline-none focus:border-[#C5A880]"
                      >
                        {siteConfig.budgetRanges.map((b) => (
                          <option key={b} value={b} className="bg-[#141413]">
                            {b}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] tracking-wider uppercase text-[#C9BEAD] block">
                      Project Location / City *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. New Delhi / Mumbai / Gurgaon"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-[#141413] border border-white/15 text-sm text-white focus:outline-none focus:border-[#C5A880]"
                    />
                    {errors.location && <p className="text-[10px] text-red-300">{errors.location}</p>}
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 bg-[#FAF8F5] text-[#141413] text-xs tracking-[0.2em] uppercase font-medium hover:bg-[#E4DDD4] transition-colors flex items-center justify-center gap-2"
                    >
                      <span>Submit Consultation Request</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="pt-2 text-center">
                    <a
                      href={siteConfig.getWhatsAppLink("Hello Studio X Cross, I would like to speak directly with your principal designer regarding my new project.")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-[#C5A880] hover:underline inline-flex items-center gap-1.5"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Or connect immediately on WhatsApp</span>
                    </a>
                  </div>
                </form>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
