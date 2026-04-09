
"use client";
import { useLocale } from '@/lib/i18n';

export default function Contact() {
  const { t } = useLocale();
  const data = t('contact') as any;

  return (
    <section id="contact" className="py-24 bg-bg-light relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <span className="text-accent-dark font-bold tracking-wider uppercase text-sm mb-4 block">
            {data.badge}
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 heading-accent heading-accent-center">
            {data.title}
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Info & Map */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent-dark">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-text-muted">Telefon</p>
                    <a href={`tel:${data.info.phone}`} className="text-lg font-bold text-primary hover:text-accent-dark transition-colors">{data.info.phone}</a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent-dark">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-text-muted">E-post</p>
                    <a href={`mailto:${data.info.email}`} className="text-lg font-bold text-primary hover:text-accent-dark transition-colors">{data.info.email}</a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent-dark">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-text-muted">Adresse</p>
                    <p className="text-lg font-bold text-primary">{data.info.address}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Embed */}
            <div className="h-64 rounded-3xl overflow-hidden shadow-sm border border-gray-100">
              <iframe 
                src="https://www.google.com/maps?q=Helgesens+gate+30B,+1461+Oslo&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-[0_20px_40px_hsl(222_47%_11%/0.05)] border border-gray-100">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-text-main mb-2">{data.form.name}</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl bg-bg-light border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-text-main mb-2">{data.form.phone}</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-xl bg-bg-light border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-text-main mb-2">{data.form.email}</label>
                <input type="email" className="w-full px-4 py-3 rounded-xl bg-bg-light border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all" />
              </div>

              <div>
                <label className="block text-sm font-semibold text-text-main mb-2">{data.form.service}</label>
                <select className="w-full px-4 py-3 rounded-xl bg-bg-light border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all appearance-none">
                  <option>Husvask</option>
                  <option>Flyttevask</option>
                  <option>Kontorvask</option>
                  <option>Annet</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-text-main mb-2">{data.form.message}</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-xl bg-bg-light border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all resize-none"></textarea>
              </div>

              <button className="w-full py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary-light transition-colors">
                {data.form.submit}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
