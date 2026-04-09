
"use client";
import { motion } from 'framer-motion';
import { useLocale } from '@/lib/i18n';

export default function Process() {
  const { t } = useLocale();
  const data = t('process') as any;

  return (
    <section className="py-24 bg-bg-light relative">
      <div className="max-w-5xl mx-auto px-6">
        
        <div className="text-center mb-20">
          <span className="text-accent-dark font-bold tracking-wider uppercase text-sm mb-4 block">
            {data.badge}
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 heading-accent heading-accent-center">
            {data.title}
          </h2>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent/0 via-accent to-accent/0 transform md:-translate-x-1/2" />

          <div className="space-y-12">
            {data.steps.map((step: any, idx: number) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 ${
                  idx % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Number Circle */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-white border-4 border-bg-light shadow-[0_0_20px_hsl(190_90%_45%/0.3)] flex items-center justify-center z-10">
                  <span className="text-primary font-display font-bold">{step.number}</span>
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-1/2 pl-24 md:pl-0 ${idx % 2 === 0 ? 'md:pr-16 text-left md:text-right' : 'md:pl-16 text-left'}`}>
                  <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <h3 className="text-2xl font-display font-bold text-primary mb-3">{step.title}</h3>
                    <p className="text-text-muted leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
