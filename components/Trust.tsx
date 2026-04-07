"use client";
import { useLocale } from '@/lib/i18n';

export default function Trust() {
  const { t } = useLocale();
  const items = t('trust.items') as any[];

  return (
    <section className="py-20 bg-bg-light">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">{t('trust.title')}</h2>
          <p className="text-text-muted">{t('trust.subtitle')}</p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {items.map((item, i) => (
            <div key={i} className="text-center group">
              <div className="w-20 h-20 mx-auto bg-bg-pearl rounded-full flex items-center justify-center mb-6 relative">
                <div className="absolute inset-0 bg-accent/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" className="relative z-10">
                  {i === 0 && <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />}
                  {i === 1 && <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />}
                  {i === 2 && <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />}
                  {i === 3 && <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />}
                </svg>
              </div>
              <h3 className="font-bold text-primary mb-2">{item.title}</h3>
              <p className="text-sm text-text-muted">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}