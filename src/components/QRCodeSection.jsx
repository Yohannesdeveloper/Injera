import { QRCodeSVG } from 'qrcode.react';
import { useLanguage } from '../context/LanguageContext';
import { Smartphone } from 'lucide-react';
import { useState, useEffect } from 'react';

const SITE_URL = 'https://injera-two.vercel.app/';

export default function QRCodeSection() {
  const { t } = useLanguage();
  const [qrSize, setQrSize] = useState(200);

  useEffect(() => {
    const updateSize = () => {
      if (window.innerWidth < 360) { setQrSize(140); }
      else if (window.innerWidth < 480) { setQrSize(160); }
      else if (window.innerWidth < 768) { setQrSize(180); }
      else { setQrSize(200); }
    };
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const logoSize = Math.round(qrSize * 0.22);

  return (
    <section className="relative z-10 py-12 4xl:py-16 7xl:py-20 px-4 4xl:px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center px-4">

        <span className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-semibold uppercase tracking-widest bg-gold-500/10 text-gold-400 border border-gold-500/20 mb-4 sm:mb-6">
          <Smartphone className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
          {t('qr.badge')}
        </span>

        <h2 className="font-display text-xl sm:text-2xl 4xl:text-3xl font-extrabold mb-2 sm:mb-3 text-slate-100">
          {t('qr.heading1')}{' '}
          <span className="text-gold-500">{t('qr.headingGold')}</span>
        </h2>

        <p className="text-slate-400 max-w-md mb-6 sm:mb-8 4xl:mb-10 text-sm sm:text-base">
          {t('qr.subtitle')}
        </p>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-gold-500/30 via-gold-500/10 to-amber-600/30 rounded-2xl sm:rounded-3xl blur-xl sm:blur-2xl" />
          <div className="relative p-[1.5px] sm:p-[2px] rounded-2xl sm:rounded-3xl bg-gradient-to-br from-gold-500 via-gold-400 to-amber-600 shadow-xl sm:shadow-2xl shadow-gold-500/20">
            <div className="rounded-[18px] sm:rounded-[22px] bg-white p-4 sm:p-6">
              <QRCodeSVG
                value={SITE_URL}
                size={qrSize}
                bgColor="#ffffff"
                fgColor="#D4AF37"
                level="H"
                imageSettings={{
                  src: "/images/Logo.png",
                  height: logoSize,
                  width: logoSize,
                  excavate: true,
                }}
              />
            </div>
          </div>
        </div>

        <div className="mt-4 sm:mt-6 flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-black/10 dark:bg-white/5 border border-gold-500/20 text-[10px] sm:text-xs text-slate-500 dark:text-slate-400">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-lg shadow-green-500/50 animate-pulse" />
          <span className="text-gold-500 font-semibold">{t('qr.scanMe')}</span>
        </div>

      </div>
    </section>
  );
}
