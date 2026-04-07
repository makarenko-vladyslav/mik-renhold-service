"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocale } from '@/lib/i18n';

export default function FAQ() {
  const { t } = useLocale();
  const items = t('faq.items') as any[];
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-bg-pearl">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-primary text-center mb-16">{t('faq.title')}</h2>
        
        <div className="space-y-4">
          {items.map((item, i) => (
            <div key={i} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
              >
                <span className="font-bold text-primary pr-8">{item.q}</span>
                <span className={`transform transition-transform duration-300 flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${openIndex === i ? 'bg-primary text-white rotate-180' : 'bg-gray-100 text-text-muted'}`}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
                </span>
              </button>
              
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-5 text-text-muted leading-relaxed border-t border-gray-50 pt-4">
                      {item.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}