import { QRCodeSVG } from 'qrcode.react';
import { useLanguage } from '../context/LanguageContext';
import { Smartphone } from 'lucide-react';

const SITE_URL = 'https://injera-two.vercel.app/';

export default function QRCodeSection() {
  const { t } = useLanguage();

  return (
    <section className="relative z-10 py-20 lg:px-6">
      <div className="max-w-6xl mx-auto px-3 lg:px-0 flex flex-col items-center text-center">

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
          <div className="absolute inset-0 bg-gradient-to-br from-gold-500/30 via-gold-500/10 to-gold-500/30 rounded-3xl blur-xl" />
          <div className="relative p-1 rounded-3xl bg-gradient-to-br from-gold-500/40 via-gold-500/10 to-gold-500/40">
            <div className="rounded-[22px] bg-white dark:bg-slate-900 p-5 shadow-2xl">
              <QRCodeSVG
                value={SITE_URL}
                size={200}
                bgColor="#ffffff"
                fgColor="#000000"
                level="M"
              />
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/40 border border-slate-700/40 text-xs text-slate-400">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          {SITE_URL}
        </div>

      </div>
    </section>
  );
}
