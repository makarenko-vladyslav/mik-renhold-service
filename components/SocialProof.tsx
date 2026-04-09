
"use client";
import { useLocale } from '@/lib/i18n';

export default function SocialProof() {
  const { t } = useLocale();
  const items = t('socialProof.items') as string[];

  return (
    <section className="py-8 bg-primary border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-6">
        <p className="text-white/60 font-medium text-sm whitespace-nowrap">
          {t('socialProof.title')}
        </p>
        
        <div className="relative w-full overflow-hidden flex items-center">
          {/* Fading edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-primary to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-primary to-transparent z-10" />
          
          <div className="flex gap-12 animate-marquee whitespace-nowrap">
            {/* Double the items for seamless loop */}
            {[...items, ...items, ...items].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 opacity-50 hover:opacity-100 transition-opacity">
                <svg className="w-4 h-4 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span className="text-white font-display font-bold tracking-wider uppercase text-sm">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
