
"use client";
import { useLocale } from '@/lib/i18n';

export default function CTABanner() {
  const { t } = useLocale();
  const data = t('ctaBanner') as any;

  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto bg-primary rounded-[2.5rem] p-12 md:p-20 relative overflow-hidden text-center">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-50%] left-[-10%] w-[50%] h-[150%] bg-accent/20 rounded-full blur-[100px] transform rotate-45" />
          <div className="absolute bottom-[-50%] right-[-10%] w-[50%] h-[150%] bg-blue-500/20 rounded-full blur-[100px] transform -rotate-45" />
        </div>

        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            {data.title}
          </h2>
          <p className="text-xl text-white/80 mb-10">
            {data.subtitle}
          </p>
          <a 
            href="#contact"
            className="inline-flex items-center justify-center px-10 py-5 rounded-xl bg-accent text-primary font-bold text-lg hover:bg-accent-light transition-all hover:scale-105 shadow-[0_0_40px_hsl(190_90%_45%/0.4)]"
          >
            {data.button}
          </a>
        </div>
      </div>
    </section>
  );
}
