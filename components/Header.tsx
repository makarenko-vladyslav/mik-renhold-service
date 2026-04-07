"use client";
import { useState, useEffect } from 'react';
import { useLocale } from '@/lib/i18n';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const { t } = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#services', label: t('nav.services') },
    { href: '#calculator', label: t('nav.calculator') },
    { href: '#gallery', label: t('nav.about') },
    { href: '#faq', label: t('nav.faq') },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-white font-bold text-xl transition-transform group-hover:scale-105">
            M
          </div>
          <span className={`font-bold text-xl tracking-tight ${scrolled ? 'text-primary' : 'text-white'}`}>
            MIK RENHOLD
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className={`text-sm font-medium transition-colors hover:text-accent ${scrolled ? 'text-text-main' : 'text-white/90'}`}>
              {link.label}
            </a>
          ))}
          <a href="#contact" className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${scrolled ? 'bg-primary text-white hover:bg-primary-light' : 'bg-white text-primary hover:bg-bg-pearl'}`}>
            {t('nav.book')}
          </a>
        </nav>

        <button className="md:hidden text-2xl" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} style={{ color: scrolled ? 'var(--color-primary)' : 'white' }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 12h18M3 6h18M3 18h18"/></svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-xl p-6 flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-text-main border-b border-gray-100 pb-2">
                {link.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="mt-4 w-full py-3 bg-primary text-white text-center rounded-lg font-semibold">
              {t('nav.book')}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}