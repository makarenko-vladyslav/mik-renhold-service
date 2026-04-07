"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocale } from '@/lib/i18n';

const icons: Record<string, React.ReactNode> = {
  home: <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />,
  sparkles: <path d="M12 3l2 5h5l-4 4 2 5-5-3-5 3 2-5-4-4h5z" />,
  eye: <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />,
  building: <path d="M4 22h16 M4 2v20 M20 2v20 M8 2v20 M12 2v20 M16 2v20 M4 6h16 M4 10h16 M4 14h16 M4 18h16" />,
  stairs: <path d="M3 21h18 M3 17h4v4 M7 13h4v8 M11 9h4v12 M15 5h4v16" />,
  "hard-hat": <path d="M2 18h20 M12 2a6 6 0 0 0-6 6v10h12V8a6 6 0 0 0-6-6z" />,
  droplet: <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />,
  sofa: <path d="M20 9V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v2 M2 14v5a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z M6 12v-3 M18 12v-3" />,
  window: <path d="M3 3h18v18H3z M12 3v18 M3 12h18" />
};

export default function Services() {
  const { t } = useLocale();
  const categories = t('services.categories') as string[];
  const items = t('services.items') as any[];
  const [activeTab, setActiveTab] = useState(categories[0]);

  const filteredItems = items.filter(item => item.category === activeTab);

  return (
    <section id="services" className="py-24 bg-bg-pearl relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="max-w-2xl mx-auto mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 relative bg-black bg-transparent inline-flex justify-start items-start">
            {t('services.title')}
            <span className="absolute -bottom-2 left-1/4 right-1/4 h-1 bg-accent rounded-full text-left inline-block"></span>
          </h2>
          <p className="text-lg text-text-muted mt-6">{t('services.subtitle')}</p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-2 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-6 py-2.5 rounded-full font-medium transition-all ${
                activeTab === cat 
                  ? 'bg-primary text-white shadow-lg' 
                  : 'bg-white text-text-muted hover:bg-gray-50 border border-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-white p-8 rounded-2xl border border-gray-100 premium-shadow group hover:-translate-y-1 transition-transform"
              >
                <div className="w-14 h-14 rounded-xl bg-bg-pearl text-primary flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-colors">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {icons[item.icon]}
                  </svg>
                </div>
                <h3 className="text-amber-400 mb-3">{item.title}</h3>
                <p className="text-text-muted leading-relaxed mb-6">{item.desc}</p>
                <a href="#calculator" className="inline-flex items-center gap-2 text-sm font-bold text-accent hover:text-primary transition-colors">
                  Beregn pris
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </a>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}