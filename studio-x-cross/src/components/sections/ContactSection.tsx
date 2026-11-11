import React, { useState } from 'react';
import { ArrowUpRight, MessageCircle, CheckCircle, AlertCircle, Phone, Mail, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteConfig } from '../../config/siteConfig';
import { ConsultationFormData } from '../../types';
import { luxuryEase } from '../../utils/motion';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ConsultationFormData>({
    fullName: '',
    phone: '',
    email: '',
    projectType: siteConfig.projectTypes[0],
    approxBudget: siteConfig.budgetRanges[1],
    location: '',
    message: '',
    timeline: 'Within 3 Months'
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Please enter your full name';
    if (!formData.phone.trim()) {
      errs.phone = 'Please enter your contact phone number';
    } else if (!/^[0-9+() -]{8,15}$/.test(formData.phone.trim())) {
      errs.phone = 'Please enter a valid phone number';
    }
    if (!formData.email.trim()) {
      errs.email = 'Please enter your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.location.trim()) {
      errs.location = 'Please mention your property city / neighborhood';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      projectType: siteConfig.projectTypes[0],
      approxBudget: siteConfig.budgetRanges[1],
      location: '',
      message: '',
      timeline: 'Within 3 Months'
    });
  };

  const whatsAppDirectMessage = `Hello Studio X Cross, I would like to schedule an interior design consultation for my ${formData.projectType || 'space'} in ${formData.location || 'India'}.`;

  return (
    <section id="contact" className="relative py-24 md:py-36 bg-[#141413] text-[#FAF8F5] overflow-hidden">
      {/* Background Architectural Atmosphere */}
      <div className="absolute inset-0 z-0 opacity-20">
        <img
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2400&q=90"
          alt="Studio X Cross architectural atmosphere"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#141413]/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: luxuryEase }}
          className="max-w-3xl space-y-5 mb-16"
        >
          <div className="inline-flex items-center gap-3">
            <span className="w-8 h-[1px] bg-[#C5A880]" />
            <span className="text-xs tracking-[0.28em] uppercase text-[#C5A880] font-medium">
              Start The Conversation
            </span>
          </div>
          <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal leading-[1.08] text-white">
            Let's Create a Space <br />
            <span className="italic font-light text-[#E4DDD4]">You'll Love Coming Home To.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#C9BEAD] font-light leading-relaxed">
            Have a project in mind? Let's turn your ideas into a thoughtfully designed space.
          </p>

          {/* Quick Action Badges */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <a
              href={siteConfig.getWhatsAppLink(whatsAppDirectMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#25D366]/20 border border-[#25D366]/50 text-[#76E79D] hover:bg-[#25D366] hover:text-[#141413] text-xs tracking-[0.2em] uppercase font-medium transition-all duration-300 flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Connect on WhatsApp</span>
            </a>

            <a
              href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, '')}`}
              className="px-6 py-3 border border-white/20 text-[#FAF8F5] hover:bg-white/10 text-xs tracking-[0.2em] uppercase font-medium transition-colors flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#C5A880]" />
              <span>Call The Atelier</span>
            </a>
          </div>
        </motion.div>

        {/* Main Grid: Form on Left, Studio Atelier Info on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Form Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: luxuryEase }}
            className="lg:col-span-8 bg-[#1A1A18]/90 backdrop-blur-md p-8 md:p-12 border border-white/10 shadow-2xl"
          >
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  key="submitted"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: luxuryEase }}
                  className="py-12 text-center space-y-6"
                >
                  <div className="w-16 h-16 bg-[#C5A880]/20 rounded-full flex items-center justify-center mx-auto text-[#C5A880]">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-serif text-3xl font-light text-white">
                      Consultation Request Received
                    </h3>
                    <p className="text-sm text-[#DFD8CC] max-w-md mx-auto font-light leading-relaxed">
                      Thank you, <span className="text-white font-medium">{formData.fullName}</span>. An architectural design partner from STUDIO X CROSS will review your requirements for <span className="text-white font-medium">{formData.location}</span> and reach out within 24 business hours.
                    </p>
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                      href={siteConfig.getWhatsAppLink(`Hi Studio X Cross, I just submitted an inquiry for ${formData.projectType} in ${formData.location}. My name is ${formData.fullName}.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-[#25D366] text-black text-xs tracking-widest uppercase font-medium hover:opacity-90 transition-opacity flex items-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Instant WhatsApp Follow-up</span>
                    </a>

                    <button
                      onClick={resetForm}
                      className="px-6 py-3 border border-white/30 text-white text-xs tracking-widest uppercase font-medium hover:bg-white/10 transition-colors"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="border-b border-white/10 pb-4 mb-6">
                    <h3 className="font-serif text-2xl font-light text-white">
                      Schedule An Initial Design Consultation
                    </h3>
                    <p className="text-xs text-[#8C8880] mt-1 font-light">
                      Share preliminary details about your property to help us prepare the right architectural discussion.
                    </p>
                  </div>

                  {/* Row 1: Full Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[11px] tracking-[0.18em] uppercase text-[#C9BEAD] block">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Siddharth Mehra"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className={`w-full px-4 py-3 bg-[#141413] border text-sm text-white placeholder-stone-600 focus:outline-none transition-colors ${
                          errors.fullName ? 'border-red-400 focus:border-red-400' : 'border-white/15 focus:border-[#C5A880]'
                        }`}
                      />
                      {errors.fullName && (
                        <p className="text-[11px] text-red-300 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.fullName}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <label className="text-[11px] tracking-[0.18em] uppercase text-[#C9BEAD] block">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        placeholder="e.g. +91 98100 00000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className={`w-full px-4 py-3 bg-[#141413] border text-sm text-white placeholder-stone-600 focus:outline-none transition-colors ${
                          errors.phone ? 'border-red-400 focus:border-red-400' : 'border-white/15 focus:border-[#C5A880]'
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-[11px] text-red-300 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Row 2: Email & Property Location */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[11px] tracking-[0.18em] uppercase text-[#C9BEAD] block">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        placeholder="e.g. smehra@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full px-4 py-3 bg-[#141413] border text-sm text-white placeholder-stone-600 focus:outline-none transition-colors ${
                          errors.email ? 'border-red-400 focus:border-red-400' : 'border-white/15 focus:border-[#C5A880]'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-red-300 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.email}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <label className="text-[11px] tracking-[0.18em] uppercase text-[#C9BEAD] block">
                        Project Location / City *
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Golf Links, New Delhi / Worli, Mumbai"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className={`w-full px-4 py-3 bg-[#141413] border text-sm text-white placeholder-stone-600 focus:outline-none transition-colors ${
                          errors.location ? 'border-red-400 focus:border-red-400' : 'border-white/15 focus:border-[#C5A880]'
                        }`}
                      />
                      {errors.location && (
                        <p className="text-[11px] text-red-300 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.location}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Row 3: Project Type & Approximate Budget */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[11px] tracking-[0.18em] uppercase text-[#C9BEAD] block">
                        Type of Project
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full px-4 py-3 bg-[#141413] border border-white/15 text-sm text-white focus:outline-none focus:border-[#C5A880]"
                      >
                        {siteConfig.projectTypes.map((type) => (
                          <option key={type} value={type} className="bg-[#141413]">
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[11px] tracking-[0.18em] uppercase text-[#C9BEAD] block">
                        Approximate Project Budget
                      </label>
                      <select
                        value={formData.approxBudget}
                        onChange={(e) => setFormData({ ...formData, approxBudget: e.target.value })}
                        className="w-full px-4 py-3 bg-[#141413] border border-white/15 text-sm text-white focus:outline-none focus:border-[#C5A880]"
                      >
                        {siteConfig.budgetRanges.map((range) => (
                          <option key={range} value={range} className="bg-[#141413]">
                            {range}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message / Brief */}
                  <div className="space-y-2">
                    <label className="text-[11px] tracking-[0.18em] uppercase text-[#C9BEAD] block">
                      Message or Vision (Optional)
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Tell us about the property (e.g. 4BHK bare-shell, handover timeline, preferred aesthetics, specific rooms of interest)..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 bg-[#141413] border border-white/15 text-sm text-white placeholder-stone-600 focus:outline-none focus:border-[#C5A880]"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-[#FAF8F5] text-[#141413] text-xs tracking-[0.22em] uppercase font-medium hover:bg-[#E4DDD4] transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-50"
                    >
                      <span>{isSubmitting ? 'Submitting Details...' : 'Request A Consultation'}</span>
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </button>
                    <p className="text-[11px] text-[#8C8880] text-center mt-3 font-light">
                      Confidentiality assured. We never share client property information with third parties.
                    </p>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Right Column: Studio Atelier Presence */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.2, ease: luxuryEase }}
            className="lg:col-span-4 space-y-8"
          >
            <div className="p-8 bg-[#1A1A18] border border-white/10 space-y-6">
              <h4 className="text-xs tracking-[0.22em] uppercase text-[#C5A880] font-medium">
                Atelier Location
              </h4>
              
              <div className="space-y-4 text-sm text-[#DFD8CC]">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white font-medium">{siteConfig.contact.address.line1}</p>
                    <p>{siteConfig.contact.address.line2}</p>
                    <p>{siteConfig.contact.address.city} — {siteConfig.contact.address.postalCode}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#C5A880] shrink-0" />
                  <a href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-white transition-colors">
                    {siteConfig.contact.phoneDisplay}
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#C5A880] shrink-0" />
                  <a href={`mailto:${siteConfig.contact.consultationEmail}`} className="hover:text-white transition-colors">
                    {siteConfig.contact.consultationEmail}
                  </a>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 text-xs text-[#8C8880] font-light leading-relaxed">
                Studio visits and physical sample reviews are scheduled by prior appointment.
              </div>
            </div>

            {/* Configurable Note Box */}
            <div className="p-6 border border-white/10 text-xs text-[#8C8880] space-y-2 bg-[#141413]/50">
              <span className="text-[#C5A880] uppercase tracking-wider block font-medium">
                Project Geographies:
              </span>
              <p className="font-light leading-relaxed">
                Our studio undertakes complete residential architecture & turnkey interiors in Delhi NCR, Mumbai, Hyderabad, Bengaluru, and destination holiday homes across India.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
