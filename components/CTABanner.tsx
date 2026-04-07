"use client";
import { useLocale } from '@/lib/i18n';
import { motion } from 'framer-motion';

export default function CTABanner() {
  const { t } = useLocale();

  return (
    <section className="relative overflow-hidden py-24 md:py-32 bg-bg-dark">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/seed/cleaning-cta-banner/1920/800" 
          alt="" 
          className="w-full h-full object-cover opacity-40"
          onError={(e) => { e.currentTarget.style.display='none'; }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-bg-dark via-bg-dark/95 to-bg-dark/80"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-transparent to-bg-dark/50"></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-light/20 rounded-full blur-[80px] pointer-events-none"></div>
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-20 pointer-events-none"></div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Content */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 backdrop-blur-sm border border-accent/30 text-accent text-sm font-bold mb-6">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <path d="M22 4L12 14.01l-3-3"/>
                </svg>
                100% Fornøydgaranti
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-6">
                Klar for et <br />
                <span className="text-accent">skinnende rent</span><br />
                resultat?
              </h2>
              
              <p className="text-lg md:text-xl text-white/70 mb-10 max-w-lg leading-relaxed">
                Få et uforpliktende tilbud i dag. Rask respons og konkurransedyktige priser.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <a 
                  href="#contact" 
                  className="group inline-flex items-center justify-center gap-3 px-8 py-5 bg-accent text-primary font-bold text-lg rounded-xl hover:bg-accent-hover transition-all hover:scale-105 shadow-lg shadow-accent/25"
                >
                  {t('ctaBanner.btn')}
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:translate-x-1 transition-transform">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
                <a 
                  href="tel:+4746392053" 
                  className="inline-flex items-center justify-center gap-3 px-8 py-5 bg-white/10 backdrop-blur-sm text-white border border-white/20 font-bold text-lg rounded-xl hover:bg-white/20 transition-all"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                  +47 46 39 20 53
                </a>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap items-center gap-6 pt-8 border-t border-white/10">
                <div className="flex items-center gap-2 text-white/60 text-sm">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                  Godkjent av Arbeidstilsynet
                </div>
                <div className="flex items-center gap-2 text-white/60 text-sm">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  Fullt forsikret
                </div>
                <div className="flex items-center gap-2 text-white/60 text-sm">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-yellow-400">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                  4.9/5 Google Rating
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side - Floating Card */}
          <div className="lg:col-span-5 hidden lg:block">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              {/* Main Card */}
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 premium-shadow">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-accent/20 flex items-center justify-center">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent">
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                      <path d="M9 22V12h6v10"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-white font-bold text-lg">Fast Husvask</div>
                    <div className="text-white/50 text-sm">Anbefalt for de fleste</div>
                  </div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3 text-white/80 text-sm">
                    <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-accent">
                        <path d="M20 6L9 17l-5-5"/>
                      </svg>
                    </div>
                    Profesjonelt renholdspersonale
                  </div>
                  <div className="flex items-center gap-3 text-white/80 text-sm">
                    <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-accent">
                        <path d="M20 6L9 17l-5-5"/>
                      </svg>
                    </div>
                    Miljøvennlige produkter
                  </div>
                  <div className="flex items-center gap-3 text-white/80 text-sm">
                    <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-accent">
                        <path d="M20 6L9 17l-5-5"/>
                      </svg>
                    </div>
                    Fleksible avtaler uten binding
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10">
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-3xl font-black text-white">fra 1 500</span>
                    <span className="text-white/50 font-medium">kr</span>
                  </div>
                  <p className="text-white/40 text-xs">Pris avhenger av boligens størrelse</p>
                </div>
              </div>

              {/* Floating Review Card */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 bg-white rounded-2xl p-5 shadow-2xl max-w-[220px]"
              >
                <div className="flex text-yellow-400 mb-2">
                  {[1,2,3,4,5].map(s => (
                    <svg key={s} width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                  ))}
                </div>
                <p className="text-xs font-bold text-primary leading-tight mb-2">
                  "Beste renholdstjenesten i Oslo! Anbefales på det sterkeste."
                </p>
                <p className="text-[10px] text-text-muted">— Kristine V.</p>
              </motion.div>

              {/* Decorative Elements */}
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-accent/20 rounded-full blur-2xl pointer-events-none"></div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
