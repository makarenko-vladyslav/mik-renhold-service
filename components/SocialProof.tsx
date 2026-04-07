"use client";
import { useLocale } from '@/lib/i18n';

export default function SocialProof() {
  const { t } = useLocale();
  
  return (
    <section className="py-12 bg-slate-800 border-b border-gray-100 bg-transparent">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-sm font-semibold text-text-muted uppercase tracking-wider mb-8">
          {t('socialProof.title')}
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {/* Simulated Logos using SVG text for reliability */}
          <div className="text-xl font-bold flex items-center gap-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 21h18M5 21V7l8-4v18M13 3l8 4v14M9 11v2M9 15v2M17 11v2M17 15v2"/></svg>
            OSLO KOMMUNE
          </div>
          <div className="text-xl font-black italic flex items-center gap-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
            ARBEIDSTILSYNET
          </div>
          <div className="text-xl font-serif font-bold flex items-center gap-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            IF FORSIKRING
          </div>
          <div className="text-xl font-bold tracking-widest flex items-center gap-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>
            REN KVALITET
          </div>
        </div>
      </div>
    </section>
  );
}