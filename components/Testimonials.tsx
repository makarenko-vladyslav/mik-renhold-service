"use client";
import { useLocale } from '@/lib/i18n';

export default function Testimonials() {
  const { t } = useLocale();
  const items = t('testimonials.items') as any[];

  return (
    <section id="reviews" className="py-24 bg-bg-pearl">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-4xl font-bold text-primary mb-4">{t('testimonials.title')}</h2>
            <div className="flex items-center gap-3">
              <div className="flex text-yellow-400">
                {[1,2,3,4,5].map(star => (
                  <svg key={star} width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                ))}
              </div>
              <span className="font-bold text-text-main">4.9/5</span>
              <span className="text-text-muted text-sm">{t('testimonials.subtitle')}</span>
            </div>
          </div>
          <a href="https://google.com" target="_blank" rel="noreferrer" className="text-primary font-bold hover:text-accent transition-colors flex items-center gap-2">
            Les alle anmeldelser på Google
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl premium-shadow flex flex-col h-full">
              <div className="flex text-yellow-400 mb-4">
                {[...Array(item.rating)].map((_, j) => (
                  <svg key={j} width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                ))}
              </div>
              <p className="text-text-main mb-6 flex-grow italic">"{item.text}"</p>
              <div className="flex items-center gap-4 mt-auto pt-6 border-t border-gray-100">
                <img src={`https://picsum.photos/seed/${item.name}/40/40`} alt={item.name} className="w-10 h-10 rounded-full" />
                <span className="font-bold text-sm text-primary">{item.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}