import { QRCodeSVG } from 'qrcode.react';
import { useLanguage } from '../context/LanguageContext';
import { Smartphone } from 'lucide-react';
import { useState, useEffect } from 'react';

const SITE_URL = 'https://injera-two.vercel.app/';

export default function QRCodeSection() {
  const { t } = useLanguage();
  const [qrSize, setQrSize] = useState(220);
  const [logoSize, setLogoSize] = useState(48);

  useEffect(() => {
    const updateSize = () => {
      if (window.innerWidth < 360) {
        setQrSize(140);
        setLogoSize(32);
      } else if (window.innerWidth < 640) {
        setQrSize(160);
        setLogoSize(36);
      } else {
        setQrSize(220);
        setLogoSize(48);
      }
    };

    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return (
    <section className="relative z-10 py-12 xs:py-14 sm:py-16 md:py-18 lg:py-20 px-4 xs:px-5 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center px-2 xs:px-3 sm:px-4">

        <span className="inline-flex items-center gap-1.5 xs:gap-2 px-3 xs:px-4 py-1 xs:py-1.5 rounded-full text-[10px] xs:text-xs font-semibold uppercase tracking-widest bg-gold-500/10 text-gold-400 border border-gold-500/20 mb-4 xs:mb-5 sm:mb-6">
          <Smartphone className="w-3 h-3 xs:w-3.5 xs:h-3.5" />
          {t('qr.badge')}
        </span>

        <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-extrabold mb-2 xs:mb-3">
          {t('qr.heading1')}{' '}
          <span className="text-gold-500">{t('qr.headingGold')}</span>
        </h2>

        <p className="text-slate-400 max-w-md mb-6 xs:mb-8 sm:mb-10 text-sm xs:text-base">
          {t('qr.subtitle')}
        </p>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-gold-500/30 via-gold-500/10 to-amber-600/30 rounded-2xl xs:rounded-3xl blur-xl xs:blur-2xl" />
          <div className="relative p-[1.5px] xs:p-[2px] rounded-2xl xs:rounded-3xl bg-gradient-to-br from-gold-500 via-gold-400 to-amber-600 shadow-xl xs:shadow-2xl shadow-gold-500/20">
            <div className="rounded-[18px] xs:rounded-[22px] bg-white p-4 xs:p-5 sm:p-6 shadow-inner">
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

        <div className="mt-4 xs:mt-5 sm:mt-6 flex items-center gap-1.5 xs:gap-2 px-3 xs:px-4 py-1.5 xs:py-2 rounded-full bg-black/10 dark:bg-white/5 border border-gold-500/20 text-[10px] xs:text-xs text-slate-500 dark:text-slate-400">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-lg shadow-green-500/50 animate-pulse" />
          <span className="hidden xs:inline">{SITE_URL}</span>
          <span className="xs:hidden">injera-two.vercel.app</span>
          <span className="text-gold-500 font-semibold">Scan me</span>
        </div>

      </div>
    </section>
  );
}
