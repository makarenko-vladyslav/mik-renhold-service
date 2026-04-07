"use client";
import { useLocale } from '@/lib/i18n';

export default function Gallery() {
  const { t } = useLocale();
  const items = t('gallery.items') as any[];

  return (
    <section id="gallery" className="py-24 bg-bg-light">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">{t('gallery.title')}</h2>
          <p className="text-text-muted text-lg">{t('gallery.subtitle')}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[250px]">
          {items.map((item, i) => (
            <div 
              key={i} 
              className={`relative rounded-xl overflow-hidden group ${i === 0 || i === 3 ? 'md:col-span-2 md:row-span-2' : ''}`}
            >
              <img 
                src={item.url} 
                alt={item.alt} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
                onError={(e) => { e.currentTarget.style.display='none'; e.currentTarget.parentElement?.classList.add('img-fallback') }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-white font-semibold text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {item.alt}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}