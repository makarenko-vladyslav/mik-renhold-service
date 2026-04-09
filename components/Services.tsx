
"use client";
import { motion } from 'framer-motion';
import { useLocale } from '@/lib/i18n';

const icons = {
  homeMove: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 14h.01M12 14h.01M16 14h.01" />
    </svg>
  ),
  sparkles: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
    </svg>
  ),
  building: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
    </svg>
  ),
  droplets: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 2.25c-1.5 0-3 2.25-3 4.5s1.5 4.5 3 4.5 3-2.25 3-4.5-1.5-4.5-3-4.5zM12 11.25c-2.5 0-5 3.75-5 7.5s2.5 7.5 5 7.5 5-3.75 5-7.5-2.5-7.5-5-7.5z" />
    </svg>
  )
};

export default function Services() {
  const { t } = useLocale();
  const items = t('services.items') as any[];

  return (
    <section id="services" className="py-24 bg-bg-light relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent-dark font-bold tracking-wider uppercase text-sm mb-4 block">
            {t('services.badge')}
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 heading-accent heading-accent-center">
            {t('services.title')}
          </h2>
          <p className="text-text-muted text-lg">
            {t('services.subtitle')}
          </p>
        </div>

        {/* L-Shape Layout */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Large Image */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative rounded-3xl overflow-hidden min-h-[400px] lg:min-h-full group"
          >
            <img 
              src="https://mikrenhold.no/wp-content/uploads/2021/08/Foto-38-scaled.jpg" 
              alt="Professional Cleaning Service" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-primary mb-4">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-display font-bold text-white mb-2">Presisjon i hver detalj</h3>
              <p className="text-white/80">Vårt team bruker kun miljøvennlige produkter og moderne utstyr for et perfekt resultat.</p>
            </div>
          </motion.div>

          {/* Right: Cards Grid */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
            {items.map((item, idx) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-3xl border border-gray-100 card-hover-effect relative overflow-hidden group"
              >
                {/* Decorative background shape */}
                <div className="absolute -right-10 -top-10 w-32 h-32 bg-accent/5 rounded-full blur-2xl group-hover:bg-accent/10 transition-colors" />
                
                <div className="w-14 h-14 rounded-2xl bg-bg-light border border-gray-100 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform group-hover:bg-accent group-hover:text-white group-hover:border-accent">
                  {icons[item.icon as keyof typeof icons]}
                </div>
                
                <h3 className="text-xl font-display font-bold mb-3">{item.title}</h3>
                <p className="text-text-muted leading-relaxed mb-6">{item.description}</p>
                
                <a href="#calculator" className="inline-flex items-center text-primary font-semibold text-sm group-hover:text-accent transition-colors">
                  Beregn pris 
                  <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
