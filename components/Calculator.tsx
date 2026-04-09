
"use client";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocale } from '@/lib/i18n';
import pricingData from '@/lib/pricing.json';

export default function Calculator() {
  const { t } = useLocale();
  const calcData = t('calculator') as any;
  
  const [service, setService] = useState(pricingData.services[0].id);
  const [sqm, setSqm] = useState(70);
  const [frequency, setFrequency] = useState('engangs');
  const [price, setPrice] = useState(0);

  useEffect(() => {
    const selectedService = pricingData.services.find(s => s.id === service);
    if (!selectedService) return;

    const basePrice = selectedService.basePricePerSqm * sqm;
    const multiplier = pricingData.multipliers[frequency as keyof typeof pricingData.multipliers] || 1;
    
    let finalPrice = basePrice * multiplier;
    if (finalPrice < selectedService.minPrice) {
      finalPrice = selectedService.minPrice;
    }

    setPrice(Math.round(finalPrice));
  }, [service, sqm, frequency]);

  return (
    <section id="calculator" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-accent/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        <div className="text-center mb-12">
          <span className="text-accent-dark font-bold tracking-wider uppercase text-sm mb-4 block">
            {calcData.badge}
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 heading-accent heading-accent-center">
            {calcData.title}
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            {calcData.subtitle}
          </p>
        </div>

        <div className="bg-bg-light border border-gray-100 rounded-3xl p-8 md:p-12 shadow-[0_20px_40px_hsl(222_47%_11%/0.05)]">
          <div className="grid md:grid-cols-2 gap-12">
            
            {/* Inputs */}
            <div className="space-y-8">
              {/* Service Select */}
              <div>
                <label className="block text-sm font-semibold text-text-main mb-3">{calcData.serviceLabel}</label>
                <div className="grid grid-cols-2 gap-3">
                  {pricingData.services.map(s => (
                    <button
                      key={s.id}
                      onClick={() => setService(s.id)}
                      className={`px-4 py-3 rounded-xl text-sm font-medium transition-all border ${
                        service === s.id 
                          ? 'bg-primary text-white border-primary shadow-md' 
                          : 'bg-white text-text-main border-gray-200 hover:border-primary/30'
                      }`}
                    >
                      {s.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Range Slider */}
              <div>
                <div className="flex justify-between items-end mb-3">
                  <label className="block text-sm font-semibold text-text-main">{calcData.sizeLabel}</label>
                  <span className="text-2xl font-display font-bold text-primary">{sqm} m²</span>
                </div>
                <input 
                  type="range" 
                  min="20" 
                  max="300" 
                  step="5"
                  value={sqm}
                  onChange={(e) => setSqm(Number(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-text-muted mt-2">
                  <span>20 m²</span>
                  <span>300+ m²</span>
                </div>
              </div>

              {/* Frequency */}
              <div>
                <label className="block text-sm font-semibold text-text-main mb-3">{calcData.frequencyLabel}</label>
                <div className="flex flex-wrap gap-3">
                  {calcData.frequencies.map((f: any) => (
                    <button
                      key={f.id}
                      onClick={() => setFrequency(f.id)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all border ${
                        frequency === f.id 
                          ? 'bg-accent/10 text-accent-dark border-accent' 
                          : 'bg-white text-text-muted border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      {f.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Result Panel */}
            <div className="bg-primary rounded-2xl p-8 text-white flex flex-col justify-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-full blur-2xl" />
              
              <span className="text-white/70 font-medium mb-2 block relative z-10">{calcData.estimatedPrice}</span>
              <div className="flex items-baseline gap-2 mb-6 relative z-10">
                <span className="text-5xl md:text-6xl font-display font-bold text-accent">{price},-</span>
                <span className="text-white/70">NOK</span>
              </div>
              
              <p className="text-sm text-white/50 mb-8 relative z-10 border-l-2 border-accent/50 pl-3">
                {calcData.disclaimer}
              </p>

              <a 
                href="#contact"
                className="w-full py-4 bg-accent hover:bg-accent-light text-primary font-bold rounded-xl text-center transition-colors relative z-10 text-lg shadow-[0_0_20px_hsl(190_90%_45%/0.2)]"
              >
                {calcData.cta}
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
