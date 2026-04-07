"use client";
import { useLocale } from '@/lib/i18n';

export default function Process() {
  const { t } = useLocale();
  const steps = t('process.steps') as any[];

  return (
    <section className="py-24 bg-bg-light">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">{t('process.title')}</h2>
          <p className="text-text-muted text-lg">{t('process.subtitle')}</p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[27px] top-4 bottom-4 w-0.5 bg-gray-200 md:left-1/2 md:-ml-[1px]"></div>

          <div className="space-y-12">
            {steps.map((step, i) => (
              <div key={i} className={`relative flex items-center md:justify-between ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Number Circle */}
                <div className="absolute left-0 md:left-1/2 md:-ml-7 w-14 h-14 rounded-full bg-white border-4 border-primary flex items-center justify-center font-black text-xl text-primary z-10 shadow-lg">
                  {i + 1}
                </div>

                {/* Content Card */}
                <div className={`ml-20 md:ml-0 md:w-[45%] bg-white p-8 rounded-2xl border border-gray-100 premium-shadow relative ${i % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                  {/* Arrow pointer */}
                  <div className={`hidden md:block absolute top-6 w-4 h-4 bg-white border-t border-r border-gray-100 transform ${i % 2 === 0 ? '-left-2 -rotate-135' : '-right-2 rotate-45'}`}></div>
                  
                  <h3 className="text-xl font-bold text-primary mb-3">{step.title}</h3>
                  <p className="text-text-muted">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}