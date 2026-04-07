"use client";
import { useLocale } from '@/lib/i18n';

export default function Footer() {
  const { t } = useLocale();

  return (
    <footer className="bg-bg-dark text-white/70 py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8 mb-12">
        
        <div className="col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 rounded bg-accent flex items-center justify-center text-primary font-bold text-lg">M</div>
            <span className="font-bold text-xl text-white tracking-tight">MIK RENHOLD</span>
          </div>
          <p className="max-w-sm text-sm mb-6">
            Oslo's høyest rangerte renholdsbyrå. Vi leverer kvalitet, trygghet og skinnende rene resultater for private og bedrifter.
          </p>
          <div className="flex gap-4">
            <a href="https://www.facebook.com/MIKRENHOLD" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="https://www.instagram.com/mik_renhold/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Tjenester</h4>
          <ul className="space-y-3 text-sm">
            <li><a href="#services" className="hover:text-white transition-colors">Flyttevask</a></li>
            <li><a href="#services" className="hover:text-white transition-colors">Fast Husvask</a></li>
            <li><a href="#services" className="hover:text-white transition-colors">Kontorvask</a></li>
            <li><a href="#services" className="hover:text-white transition-colors">Fasadevask</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Selskap</h4>
          <ul className="space-y-3 text-sm">
            <li><a href="#about" className="hover:text-white transition-colors">Om Oss</a></li>
            <li><a href="#calculator" className="hover:text-white transition-colors">Priser</a></li>
            <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
            <li><a href="#contact" className="hover:text-white transition-colors">Kontakt</a></li>
          </ul>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-xs">
        <p suppressHydrationWarning>&copy; {new Date().getFullYear()} MIK Renhold Service. {t('footer.rights')}</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-white">Personvern</a>
          <a href="#" className="hover:text-white">Vilkår</a>
        </div>
      </div>
    </footer>
  );
}
