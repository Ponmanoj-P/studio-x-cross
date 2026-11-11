import React from 'react';
import { ArrowUp, Instagram, Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';

interface FooterProps {
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenConsultation }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#141413] text-[#FAF8F5] pt-20 pb-12 border-t border-[#222220]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-6">
            <div className="space-y-2">
              <span className="font-serif tracking-[0.25em] text-2xl md:text-3xl font-light uppercase block">
                STUDIO X CROSS
              </span>
              <p className="text-xs tracking-[0.2em] text-[#C9BEAD] uppercase">
                Architecture & Interior Environments
              </p>
            </div>
            <p className="text-[#AFA18E] text-sm leading-relaxed max-w-sm font-light">
              "{siteConfig.footerTagline}"
            </p>
            <div className="pt-2">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-4 py-2 border border-white/20 text-xs tracking-widest uppercase hover:bg-white hover:text-[#141413] transition-all duration-300"
              >
                <Instagram className="w-3.5 h-3.5" />
                <span>Follow {siteConfig.social.instagramHandle}</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs tracking-[0.22em] text-[#C9BEAD] uppercase font-medium">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-[#AFA18E]">
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About The Studio
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition-colors">
                  Selected Works
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Design Services
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-white transition-colors">
                  Our Process
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenConsultation}
                  className="hover:text-white transition-colors text-left flex items-center gap-1.5"
                >
                  <span>Start A Project</span>
                  <ArrowUpRight className="w-3 h-3 text-[#C5A880]" />
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details (Configurable Placeholders) */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs tracking-[0.22em] text-[#C9BEAD] uppercase font-medium">
              Studio & Inquiries
            </h4>
            <div className="space-y-3 text-sm text-[#AFA18E]">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-normal">{siteConfig.contact.address.line1}</p>
                  <p>{siteConfig.contact.address.line2}</p>
                  <p>{siteConfig.contact.address.city}, {siteConfig.contact.address.country}</p>
                  <p className="text-xs text-[#8E7F6D] mt-1">{siteConfig.contact.address.secondaryLocation}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-1">
                <Mail className="w-4 h-4 text-[#C5A880] shrink-0" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#C5A880] shrink-0" />
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, '')}`}
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.contact.phoneDisplay}
                </a>
              </div>

              <p className="text-xs text-[#8E7F6D] pt-2">
                {siteConfig.contact.hours}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#696660]">
          <div>
            © {new Date().getFullYear()} STUDIO X CROSS. All rights reserved. Architectural concept portfolio.
          </div>

          <div className="flex items-center gap-6">
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Instagram
            </a>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
