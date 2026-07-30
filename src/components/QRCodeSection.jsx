import { QRCodeSVG } from 'qrcode.react';
import { useLanguage } from '../context/LanguageContext';
import { Smartphone } from 'lucide-react';

const SITE_URL = 'https://injera-two.vercel.app/';

export default function QRCodeSection() {
  const { t } = useLanguage();

  return (
    <section className="relative z-10 py-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">

        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-gold-500/10 text-gold-400 border border-gold-500/20 mb-6">
          <Smartphone className="w-3.5 h-3.5" />
          {t('qr.badge')}
        </span>

        <h2 className="text-3xl md:text-4xl font-extrabold mb-3">
          {t('qr.heading1')}{' '}
          <span className="text-gold-500">{t('qr.headingGold')}</span>
        </h2>

        <p className="text-slate-400 max-w-md mb-10">
          {t('qr.subtitle')}
        </p>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-gold-500/30 via-gold-500/10 to-amber-600/30 rounded-3xl blur-2xl" />
          <div className="relative p-[2px] rounded-3xl bg-gradient-to-br from-gold-500 via-gold-400 to-amber-600 shadow-2xl shadow-gold-500/20">
            <div className="rounded-[22px] bg-white p-6 shadow-inner">
              <QRCodeSVG
                value={SITE_URL}
                size={220}
                bgColor="#ffffff"
                fgColor="#D4AF37"
                level="H"
                imageSettings={{
                  src: "/images/Logo.png",
                  height: 48,
                  width: 48,
                  excavate: true,
                }}
              />
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center gap-2 px-4 py-2 rounded-full bg-black/10 dark:bg-white/5 border border-gold-500/20 text-xs text-slate-500 dark:text-slate-400">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-lg shadow-green-500/50 animate-pulse" />
          <span>{SITE_URL}</span>
          <span className="text-gold-500 font-semibold">Scan me</span>
        </div>

      </div>
    </section>
  );
}
