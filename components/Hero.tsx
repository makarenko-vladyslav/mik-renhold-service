"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLocale } from '@/lib/i18n';
import { useRef } from "react";

export default function Hero() {
  const { t } = useLocale();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const stats = t('hero.stats') as any[] || [];

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-bg-dark"
    >
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="https://picsum.photos/seed/mik-cleaning-hero/1920/1080" 
          alt="Premium Cleaning Service Oslo" 
          className="w-full h-full object-cover opacity-60"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/40 to-primary/90"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-transparent to-transparent"></div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 backdrop-blur-md border border-accent/30 text-accent text-sm font-bold mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                </span>
                {t('hero.badge')}
              </div>

              <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.1] mb-6">
                {t('hero.title1')} <br />
                <span className="text-accent">{t('hero.title2')}</span>
              </h1>

              <p className="text-xl text-white/80 mb-10 max-w-xl leading-relaxed">
                {t('hero.subtitle')}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-16">
                <a 
                  href="#calculator" 
                  className="px-8 py-4 bg-accent text-primary font-bold text-lg rounded-xl hover:bg-accent-hover transition-all hover:scale-105 text-center shadow-lg shadow-accent/20"
                >
                  {t('hero.ctaPrimary')}
                </a>
                <a 
                  href="#services" 
                  className="px-8 py-4 bg-white/10 backdrop-blur-md text-white border border-white/20 font-bold text-lg rounded-xl hover:bg-white/20 transition-all text-center"
                >
                  {t('hero.ctaSecondary')}
                </a>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-8 border-t border-white/10 pt-10">
                {stats.map((stat, i) => (
                  <div key={i} className="flex flex-col">
                    <span className="text-3xl font-black text-white mb-1">{stat.value}</span>
                    <span className="text-sm text-white/60 font-medium uppercase tracking-wider">{stat.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Visual Element / Floating Card */}
          <div className="lg:col-span-5 hidden lg:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10 rounded-3xl overflow-hidden premium-shadow border border-white/10">
                <img 
                  src="https://picsum.photos/seed/cleaning-pro/600/800" 
                  alt="Professional Cleaner" 
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent/20 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-primary-light/30 rounded-full blur-3xl"></div>
              
              {/* Floating Trust Card */}
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-8 bottom-20 bg-white p-6 rounded-2xl shadow-2xl z-20 max-w-[200px]"
              >
                <div className="flex text-yellow-400 mb-2">
                  {[1,2,3,4,5].map(s => (
                    <svg key={s} width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                  ))}
                </div>
                <p className="text-xs font-bold text-primary leading-tight">
                  "Beste renholdstjenesten i Oslo!"
                </p>
                <p className="text-[10px] text-text-muted mt-2">— Google Review</p>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        style={{ opacity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2"
      >
        <span className="text-[10px] text-white/40 uppercase tracking-[0.2em] font-bold">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-accent to-transparent"></div>
      </motion.div>
    </section>
  );
}