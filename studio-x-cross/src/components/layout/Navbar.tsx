import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteConfig } from '../../config/siteConfig';
import { luxuryEase } from '../../utils/motion';

interface NavbarProps {
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Services', href: '#services' },
    { label: 'Process', href: '#process' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-out ${
          isScrolled
            ? 'bg-[#FAF8F5]/95 backdrop-blur-md py-4 border-b border-[#ECE7DE] shadow-sm text-[#141413]'
            : 'bg-gradient-to-b from-black/60 via-black/20 to-transparent py-6 text-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Left: STUDIO X CROSS text wordmark */}
          <a
            href="#home"
            className="group flex items-center gap-3 tracking-[0.25em] text-sm md:text-base font-medium uppercase transition-colors"
          >
            <span className="font-serif tracking-widest text-lg md:text-xl font-normal">
              STUDIO
            </span>
            <span className="inline-block w-2.5 h-[1px] bg-current opacity-60 group-hover:w-4 transition-all" />
            <span className="font-serif tracking-widest text-lg md:text-xl font-normal">
              X
            </span>
            <span className="inline-block w-2.5 h-[1px] bg-current opacity-60 group-hover:w-4 transition-all" />
            <span className="font-serif tracking-widest text-lg md:text-xl font-normal">
              CROSS
            </span>
          </a>

          {/* Desktop Right Navigation */}
          <nav className="hidden lg:flex items-center gap-8 text-[13px] tracking-[0.16em] uppercase font-medium">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className={`transition-colors duration-200 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-current hover:after:w-full after:transition-all after:duration-300 ${
                  isScrolled
                    ? 'text-[#2E2D2A] hover:text-black'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}

            {/* START A PROJECT CTA */}
            <button
              onClick={onOpenConsultation}
              className={`ml-3 px-5 py-2.5 text-xs tracking-[0.18em] uppercase font-medium transition-all duration-300 flex items-center gap-2 border ${
                isScrolled
                  ? 'border-[#141413] bg-[#141413] text-[#FAF8F5] hover:bg-transparent hover:text-[#141413]'
                  : 'border-white bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-[#141413]'
              }`}
            >
              <span>Start A Project</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </nav>

          {/* Mobile Right: Menu button + WhatsApp shortcut */}
          <div className="flex items-center gap-3 lg:hidden">
            <a
              href={siteConfig.getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className={`p-2 rounded-full border transition-colors ${
                isScrolled
                  ? 'border-[#ECE7DE] text-[#141413] hover:bg-[#F3EFEA]'
                  : 'border-white/30 text-white hover:bg-white/10'
              }`}
            >
              <MessageCircle className="w-4 h-4" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className={`p-2 transition-colors ${
                isScrolled ? 'text-[#141413]' : 'text-white'
              }`}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer with AnimatePresence */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.4, ease: luxuryEase }}
            className="fixed inset-0 z-50 bg-[#FAF8F5] flex flex-col justify-between p-8 pt-24 lg:hidden"
          >
            <button
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
              className="absolute top-6 right-6 p-2 text-[#141413] hover:opacity-70 transition-opacity"
            >
              <X className="w-7 h-7" />
            </button>

            <div className="space-y-6">
              <div className="text-[11px] tracking-[0.25em] text-[#8C7A6B] uppercase font-medium">
                Navigation
              </div>
              <nav className="flex flex-col space-y-4">
                {navLinks.map((link, idx) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link.href);
                    }}
                    className="text-2xl font-serif text-[#141413] hover:text-[#8C7A6B] transition-colors flex items-center justify-between py-1 border-b border-[#ECE7DE]"
                  >
                    <span>{link.label}</span>
                    <span className="text-xs font-sans tracking-widest text-[#8C7A6B]">
                      0{idx + 1}
                    </span>
                  </a>
                ))}
              </nav>
            </div>

            <div className="space-y-6 pt-6 border-t border-[#ECE7DE]">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full py-3.5 bg-[#141413] text-[#FAF8F5] text-xs tracking-[0.2em] uppercase font-medium flex items-center justify-center gap-2 hover:bg-[#2B2A27] transition-colors"
              >
                <span>Start A Project</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-between text-xs text-[#696660]">
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-black transition-colors"
                >
                  Instagram {siteConfig.social.instagramHandle}
                </a>
                <a
                  href={siteConfig.getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#8C7A6B] font-medium hover:underline"
                >
                  WhatsApp Inquiry
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
