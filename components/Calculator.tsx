"use client";
import { useState, useEffect } from 'react';
import { useLocale } from '@/lib/i18n';
import pricingData from '@/lib/pricing.json';

export default function Calculator() {
  const { t } = useLocale();
  const [sqm, setSqm] = useState(70);
  const [serviceId, setServiceId] = useState(pricingData.services?.[0]?.id ?? '');
  const [freqId, setFreqId] = useState(pricingData.frequencies?.[0]?.id ?? '');
  const [price, setPrice] = useState(0);

  useEffect(() => {
    const service = pricingData.services.find(s => s.id === serviceId);
    const freq = pricingData.frequencies.find(f => f.id === freqId);
    if (service && freq) {
      let calc = sqm * service.basePricePerSqm * freq.multiplier;
      if (calc < service.minPrice) calc = service.minPrice;
      setPrice(Math.round(calc));
    }
  }, [sqm, serviceId, freqId]);

  return (
    <section id="calculator" className="py-24 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Side */}
          <div>
            <div className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent text-sm font-bold mb-6">
              Live Prisoverslag
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t('calculator.title')}
            </h2>
            <p className="text-lg text-white/70 mb-8 max-w-md">
              {t('calculator.subtitle')}
            </p>
            
            <ul className="space-y-4 mb-8">
              {['Ingen skjulte gebyrer', 'Utstyr og midler inkludert', 'Fornøydgaranti på alle oppdrag'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-white/90">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17l-5-5"/></svg>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Calculator Card */}
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl relative">
            <div className="absolute top-0 right-10 w-20 h-2 bg-accent rounded-b-lg"></div>
            
            <div className="space-y-8">
              {/* Service Type */}
              <div>
                <label className="block text-sm font-bold text-text-muted mb-3 uppercase tracking-wide">{t('calculator.serviceLabel')}</label>
                <div className="grid grid-cols-2 gap-3">
                  {pricingData.services.map(s => (
                    <button
                      key={s.id}
                      onClick={() => setServiceId(s.id)}
                      className={`p-3 rounded-xl border text-sm font-semibold transition-all ${
                        serviceId === s.id 
                          ? 'border-primary bg-primary text-white' 
                          : 'border-gray-200 text-text-main hover:border-gray-300'
                      }`}
                    >
                      {s.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Slider */}
              <div>
                <div className="flex justify-between items-end mb-3">
                  <label className="block text-sm font-bold text-text-muted uppercase tracking-wide">{t('calculator.sizeLabel')}</label>
                  <span className="text-2xl font-black text-primary">{sqm} m²</span>
                </div>
                <input 
                  type="range" 
                  min="20" 
                  max="300" 
                  step="5"
                  value={sqm} 
                  onChange={(e) => setSqm(Number(e.target.value))}
                />
                <div className="flex justify-between text-xs text-gray-400 mt-2 font-medium">
                  <span>20 m²</span>
                  <span>300+ m²</span>
                </div>
              </div>

              {/* Frequency (only show for fast husvask/kontorvask) */}
              {(serviceId === 'husvask' || serviceId === 'kontorvask') && (
                <div>
                  <label className="block text-sm font-bold text-text-muted mb-3 uppercase tracking-wide">{t('calculator.frequencyLabel')}</label>
                  <select 
                    value={freqId}
                    onChange={(e) => setFreqId(e.target.value)}
                    className="w-full p-4 rounded-xl border border-gray-200 bg-gray-50 text-text-main font-semibold focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                  >
                    {pricingData.frequencies.map(f => (
                      <option key={f.id} value={f.id}>{f.name}</option>
                    ))}
                  </select>
                </div>
              )}

              {/* Result & CTA */}
              <div className="pt-6 border-t border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-text-muted font-medium">{t('calculator.totalLabel')}</span>
                  <div className="text-4xl font-black text-primary flex items-baseline gap-1">
                    {price.toLocaleString('no-NO')} <span className="text-xl text-text-muted font-bold">kr</span>
                  </div>
                </div>
                
                <a href="#contact" className="block w-full py-4 bg-accent text-primary text-center font-bold text-lg rounded-xl hover:bg-accent-hover transition-colors shadow-lg shadow-accent/20">
                  {t('calculator.cta')}
                </a>
                <p className="text-center text-xs text-gray-400 mt-4">{t('calculator.disclaimer')}</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}