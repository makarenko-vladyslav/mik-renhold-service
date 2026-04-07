"use client";
import { useState } from 'react';
import { useLocale } from '@/lib/i18n';

export default function Contact() {
  const { t } = useLocale();
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => setStatus('success'), 1500);
  };

  return (
    <section id="contact" className="py-24 bg-bg-light">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Info Side */}
          <div>
            <h2 className="text-4xl font-bold text-primary mb-4">{t('contact.title')}</h2>
            <p className="text-text-muted text-lg mb-12">{t('contact.subtitle')}</p>
            
            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center text-primary shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </div>
                <div>
                  <div className="text-sm font-bold text-text-muted uppercase tracking-wider mb-1">Telefon</div>
                  <a href={`tel:${t('contact.info.phone')}`} className="text-xl font-bold text-primary hover:text-accent transition-colors">
                    {t('contact.info.phone')}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center text-primary shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><path d="M22 6l-10 7L2 6"/></svg>
                </div>
                <div>
                  <div className="text-sm font-bold text-text-muted uppercase tracking-wider mb-1">E-post</div>
                  <a href={`mailto:${t('contact.info.email')}`} className="text-xl font-bold text-primary hover:text-accent transition-colors">
                    {t('contact.info.email')}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center text-primary shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div>
                  <div className="text-sm font-bold text-text-muted uppercase tracking-wider mb-1">Adresse</div>
                  <div className="text-xl font-bold text-primary">
                    {t('contact.info.address')}
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="w-full h-64 bg-gray-100 rounded-2xl overflow-hidden relative">
              <iframe 
                src="https://www.google.com/maps?q=Helgesens+gate+30B,+1461+Oslo,+Norge&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-white p-8 md:p-10 rounded-3xl border border-gray-100 premium-shadow">
            {status === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-6">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17l-5-5"/></svg>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">Mottatt!</h3>
                <p className="text-text-muted">{t('contact.form.success')}</p>
                <button onClick={() => setStatus('idle')} className="mt-8 text-accent font-bold hover:underline">Send ny melding</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-text-main mb-2">{t('contact.form.name')}</label>
                    <input required type="text" className="w-full p-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-text-main mb-2">{t('contact.form.phone')}</label>
                    <input required type="tel" className="w-full p-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-text-main mb-2">{t('contact.form.email')}</label>
                  <input required type="email" className="w-full p-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" />
                </div>

                <div>
                  <label className="block text-sm font-bold text-text-main mb-2">{t('contact.form.service')}</label>
                  <select className="w-full p-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors">
                    <option>Fast Husvask</option>
                    <option>Flyttevask</option>
                    <option>Kontorvask</option>
                    <option>Annet</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-text-main mb-2">{t('contact.form.message')}</label>
                  <textarea required rows={4} className="w-full p-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={status === 'loading'}
                  className="w-full py-4 bg-primary text-white font-bold text-lg rounded-xl hover:bg-primary-light transition-all disabled:opacity-70 flex justify-center items-center"
                >
                  {status === 'loading' ? (
                    <svg className="animate-spin h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                  ) : (
                    t('contact.form.submit')
                  )}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}