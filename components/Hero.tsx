
"use client";
import { motion } from 'framer-motion';
import { useLocale } from '@/lib/i18n';

export default function Hero() {
  const { t } = useLocale();
  const stats = t('hero.stats') as { value: string; label: string }[];

  return (
    <section className="relative min-h-[100svh] flex items-center pt-20 bg-primary overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-accent/20 blur-[120px] mix-blend-screen animate-aurora" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-blue-500/20 blur-[150px] mix-blend-screen animate-aurora" style={{ animationDelay: '-5s' }} />
        
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid lg:grid-cols-12 gap-12 items-center">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-7 pt-10 lg:pt-0"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-xs font-medium text-white/90 tracking-wide uppercase">{t('hero.badge')}</span>
          </div>
          
          <h1 
            className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-[1.1] tracking-tight mb-6"
            dangerouslySetInnerHTML={{ __html: t('hero.title') }}
          />
          
          <p className="text-lg md:text-xl text-white/70 max-w-xl mb-10 leading-relaxed font-light">
            {t('hero.subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#calculator"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-accent text-primary font-semibold text-lg hover:bg-accent-light transition-all hover:scale-105 shadow-[0_0_30px_hsl(190_90%_45%/0.3)]"
            >
              {t('hero.ctaPrimary')}
            </a>
            <a 
              href="#services"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white/5 text-white font-semibold text-lg hover:bg-white/10 border border-white/10 transition-all backdrop-blur-sm"
            >
              {t('hero.ctaSecondary')}
            </a>
          </div>
        </motion.div>

        {/* Bento Grid Visuals */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, type: "spring" }}
          className="lg:col-span-5 grid grid-cols-2 gap-4 relative"
        >
          {/* Main Image Card */}
          <div className="col-span-2 rounded-3xl overflow-hidden relative h-64 group">
            <img 
              src="https://mikrenhold.no/wp-content/uploads/2021/10/fasadevask-1-tekstas-scaled.jpg" 
              alt="Professional Cleaning" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="flex -space-x-2">
                  {[1,2,3].map(i => (
                    <img key={i} src={`https://picsum.photos/seed/face${i}/40/40`} className="w-8 h-8 rounded-full border-2 border-primary" alt="avatar" />
                  ))}
                </div>
                <span className="text-white text-sm font-medium">Over 500+ oppdrag i år</span>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          {stats.slice(0, 2).map((stat, idx) => (
            <div key={idx} className="glass-panel p-6 rounded-3xl flex flex-col justify-center items-center text-center">
              <span className="text-3xl font-display font-bold text-accent mb-1">{stat.value}</span>
              <span className="text-sm text-white/70 font-medium">{stat.label}</span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
