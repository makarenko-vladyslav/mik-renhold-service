"use client";
import { useLocale } from '@/lib/i18n';

export default function WhyUs() {
  const { t } = useLocale();
  const items = t('whyUs.items') as any[];

  return (
    <section className="py-24 bg-primary text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary-light transform skew-x-12 translate-x-32 hidden lg:block"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-12 relative inline-block">
              {t('whyUs.title')}
              <span className="absolute -bottom-4 left-0 w-20 h-1 bg-accent"></span>
            </h2>
            
            <div className="space-y-8">
              {items.map((item, i) => (
                <div key={i} className="flex gap-6">
                  <div className="w-12 h-12 shrink-0 rounded-full bg-white/10 flex items-center justify-center text-accent font-bold text-xl">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-white/70 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative h-[600px] rounded-2xl overflow-hidden hidden lg:block">
            <img 
              src="https://mikrenhold.no/wp-content/uploads/2021/10/Foto-58-scaled.jpg" 
              alt="Professional Cleaning Team" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
          </div>

        </div>
      </div>
    </section>
  );
}