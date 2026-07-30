const translations = {
  en: {
    site: { name: 'Zedagm', nameAm: 'ዘ፟-ዳግም', logoAlt: 'Zedagm Export', copyright: '© 2026 Your Company Name. All Rights Reserved.' },
    nav: {
      products: 'Products', about: 'About', process: 'Process', quality: 'Quality', contact: 'Contact',
      requestQuote: 'Request a Quote', switchLang: 'Switch language', langTitle: 'አማርኛ', toggleTheme: 'Toggle theme',
      homeAria: 'Home', faq: 'FAQ'
    },
    hero: {
      title1: 'Authentic Ethiopian', title2: 'Injera. Worldwide.',
      subtitle: 'Delivering the authentic taste of Ethiopia to international supermarkets, restaurants, wholesalers, and food distributors with premium quality, reliable supply, and export-ready packaging.',
      requestQuote: 'Request a Quote', viewProducts: 'View Products'
    },
    process: {
      badge: 'Our Process',
      heading: 'From Ethiopian Farms',
      headingGold: 'to Your Customers',
      steps: [
        { id: 'selection', step: '01', title: 'Premium Teff Selection', subtitle: 'Trusted farming communities', description: 'We source quality Ethiopian teff from trusted farming communities.', highlights: ['Quality Ethiopian Teff', 'Trusted Farming Communities'] },
        { id: 'fermentation', step: '02', title: 'Traditional Fermentation', subtitle: 'Natural authentic taste', description: 'Natural fermentation develops the authentic taste injera is known for.', highlights: ['Natural Fermentation', 'Authentic Injera Taste'] },
        { id: 'baking', step: '03', title: 'Fresh Daily Baking', subtitle: 'Precision baking process', description: 'Each injera is baked with precision to ensure consistent quality.', highlights: ['Fresh Daily Baking', 'Consistent Quality'] },
        { id: 'inspection', step: '04', title: 'Quality Inspection', subtitle: 'Careful batch review', description: 'Every batch is carefully checked before packaging.', highlights: ['Quality Inspection', 'Batch Review Process'] },
        { id: 'packaging', step: '05', title: 'Export Packaging', subtitle: 'Vacuum-sealed freshness', description: 'Vacuum-sealed and prepared for international transportation.', highlights: ['Vacuum-Sealed', 'Export-Ready Packaging'] },
        { id: 'delivery', step: '06', title: 'Worldwide Delivery', subtitle: 'Global market shipping', description: 'Safely shipped to customers across global markets.', highlights: ['Worldwide Shipping', 'Safe & Reliable Delivery'] }
      ]
    },
    whyChooseUs: {
      badge: 'Why Choose Us',
      heading: 'A Trusted Export',
      headingGold: 'Partner',
      pillars: [
        { icon: 'Leaf', title: 'Authentic Quality', desc: 'Made from premium Ethiopian teff using traditional recipes that preserve the authentic taste and texture of real injera.' },
        { icon: 'Ship', title: 'Export Ready', desc: 'Our products are professionally packaged for international shipping, maintaining freshness and quality throughout transit.' },
        { icon: 'Shield', title: 'Reliable Supply', desc: "Whether you're a restaurant, supermarket, or wholesale distributor, we provide consistent production and dependable delivery." },
        { icon: 'CheckCircle2', title: 'Food Safety', desc: 'Every batch follows strict quality control procedures to ensure safe, hygienic, and reliable products.' }
      ]
    },
    products: {
      badge: 'Our Products',
      heading: 'Premium Injera for',
      headingGold: 'Every Market',
      items: [
        { id: 'white', name: 'White Teff Injera', category: 'Premium', description: 'Light, soft, and crafted from premium white teff.' },
        { id: 'brown', name: 'Brown Teff Injera', category: 'Traditional', description: 'Traditional flavor with rich texture and authentic character.' },
        { id: 'mixed', name: 'Mixed Teff Injera', category: 'Everyday', description: 'A balanced blend designed for everyday dining and commercial kitchens.' },
        { id: 'custom', name: 'Custom Wholesale Orders', category: 'Wholesale', description: 'Private labeling and custom packaging solutions for distributors and retail partners.' }
      ],
      cta: 'Request Sample & Pricing'
    },
    baltena: {
      badge: 'Ethiopian Baltena Collection',
      heading1: 'Authentic Ethiopian',
      headingGold: 'Flavors',
      heading2: 'Ready for the World',
      subtitle: 'Experience the taste of Ethiopia with our traditional Baltena products, carefully prepared from authentic ingredients and traditional recipes.',
      items: [
        { id: 'berbere', name: 'Berbere (በርበሬ)', emoji: '🌶️', description: 'A bold and aromatic spice blend, essential to Ethiopian cuisine, crafted from chili peppers, garlic, ginger, and a symphony of traditional herbs.' },
        { id: 'white-shiro', name: 'White Shiro (ነጭ ሽሮ)', emoji: '🌾', description: 'Smooth and flavorful white shiro powder made from finely ground chickpeas and blended with traditional spices for a rich, hearty stew.' },
        { id: 'mitmita', name: 'Mitmita (ሚጥሚጣ)', emoji: '🔥', description: "An intense, fiery spice blend made from bird's eye chili, cardamom, and cloves — a must-have for those who crave heat." },
        { id: 'spice-blends', name: 'Traditional Spice Blends', emoji: '🌿', description: "Curated mixes of Ethiopia's finest spices, from turmeric and cumin to fenugreek and korarima, for authentic everyday cooking." },
        { id: 'mitn-shiro', name: 'Mitn Shiro (ምጥን ሽሮ)', emoji: '🫘', description: 'A flavorful blend of ground legumes and spices, simmered to perfection for a comforting and nutritious traditional meal.' },
        { id: 'beso', name: 'Beso (በሶ)', emoji: '🥣', description: 'Traditional roasted barley flour, finely milled and naturally nutritious — enjoyed as a porridge, snack, or energy mix.' },
        { id: 'kolo', name: 'Kolo (ቆሎ)', emoji: '🌰', description: 'Roasted barley or wheat kernels, lightly seasoned for a crunchy, wholesome snack enjoyed across Ethiopia.' }
      ],
      exportBadge: 'Export Ready',
      exportText: 'Packed with care to preserve freshness, flavor, and Ethiopian heritage — delivered to Ethiopian communities and food lovers worldwide.',
      cta: 'Request Wholesale Pricing'
    },
    cta: {
      heading1: 'Bring Authentic Injera',
      headingGold: 'to Your Market.',
      text: 'Looking for a reliable injera supplier? Partner with a manufacturer committed to quality, consistency, and long-term business relationships.',
      btnQuote: 'Request a Wholesale Quote',
      btnContact: 'Contact Our Export Team'
    },
    logistics: {
      badge: 'Global Reach',
      heading: 'Delivering Across',
      headingGold: 'Continents',
      text: "Our export network serves customers throughout North America, Europe, the Middle East, Africa, and beyond. Whether you need regular wholesale deliveries or customized export solutions, we're ready to support your business.",
      routes: [
        { destination: 'North America — East Coast', hubs: 'Washington Dulles (IAD) / New York (JFK)', mode: 'Daily Air Cargo', transit: '24 – 36 Hours', temp: '+4°C Chilled', frequency: '7 Flights / Week' },
        { destination: 'North America — West & Canada', hubs: 'Los Angeles (LAX) / Toronto Pearson (YYZ)', mode: 'Express Air Cargo', transit: '36 – 48 Hours', temp: '+4°C Chilled', frequency: '5 Flights / Week' },
        { destination: 'Europe — Central & UK', hubs: 'Frankfurt (FRA) / London Heathrow (LHR)', mode: 'Daily Air Cargo', transit: '18 – 24 Hours', temp: '+4°C Chilled', frequency: '7 Flights / Week' },
        { destination: 'Middle East & Gulf Region', hubs: 'Dubai (DXB) / Riyadh (RUH) / Doha (DOH)', mode: 'Direct Air Cargo', transit: '12 – 18 Hours', temp: '+4°C Chilled', frequency: '14 Flights / Week' },
        { destination: 'Global Seaports (Bulk Container)', hubs: 'Port of Djibouti → Global Reefers', mode: '20ft / 40ft Ocean Reefer', transit: '14 – 21 Days', temp: '-18°C Deep Frozen', frequency: 'Weekly Vessel Sailings' }
      ],
      transitLabel: 'Transit Time',
      tempLabel: 'Temp Regime',
      ctaTitle: 'Ready to Start Shipping?',
      ctaText: 'Contact our export team for pricing and delivery options.',
      ctaBtn: 'Contact Our Export Team'
    },
    customers: {
      badge: 'Who We Serve',
      heading: 'Built for',
      headingGold: 'Global Businesses',
      intro: 'We proudly partner with:',
      types: ['Supermarket Chains', 'Restaurants', 'Hotels', 'Food Importers', 'Wholesale Distributors', 'African Grocery Stores', 'Catering Companies', 'International Retailers']
    },
    testimonials: {
      badge: 'Testimonials',
      heading: 'Trusted by',
      headingGold: 'International Partners',
      items: [
        { quote: 'Consistent quality, excellent service, and dependable deliveries every time.', author: 'Food Distributor', title: 'International Partner', company: 'Europe' },
        { quote: 'Our customers love the authentic taste and freshness.', author: 'Restaurant Owner', title: 'Hospitality Partner', company: 'North America' },
        { quote: 'A reliable supplier for our growing business.', author: 'Wholesale Partner', title: 'Distribution Partner', company: 'Middle East' }
      ]
    },
    faq: {
      badge: 'Frequently Asked Questions',
      heading: 'Frequently Asked',
      headingGold: 'Questions',
      items: [
        { q: 'Do you export internationally?', a: 'Yes. We supply wholesale customers across multiple global markets.' },
        { q: 'Can I order samples?', a: 'Yes. Product samples are available for qualified wholesale inquiries.' },
        { q: 'Do you offer private labeling?', a: 'Yes. We provide customized packaging and private-label solutions.' },
        { q: 'How is freshness maintained?', a: 'Our export-grade packaging helps preserve freshness during international shipping.' }
      ]
    },
    contact: {
      badge: 'Contact Us',
      heading: 'Get in',
      headingGold: 'Touch',
      subtitle: 'Ready to partner with us? Reach out to our export team.',
      email: 'Email', phone: 'Phone', location: 'Location',
      emailVal: 'export@company.com', phoneVal: '+251 XXX XXX XXX', locationVal: 'Addis Ababa, Ethiopia',
      visitUs: 'Visit Us',
      mapTitle: 'Addis Ababa, Ethiopia',
      btn: 'Send Us a Message'
    },
    about: {
      badge: 'Who We Are',
      heading: "Bringing Ethiopia's Finest Injera",
      headingGold: 'to Global Markets',
      p1: "Rooted in Ethiopia's rich culinary heritage, we specialize in manufacturing premium injera for international markets. Every batch is made from carefully selected Ethiopian teff, prepared using traditional fermentation, and produced in a modern facility that meets global quality standards.",
      p2: 'From local farms to international shelves, our mission is simple: deliver authentic Ethiopian injera with consistent quality, freshness, and dependable service.',
      commitmentBadge: 'Our Commitment',
      commitmentHeading: 'More Than an Exporter',
      commitmentText: 'We believe authentic Ethiopian food deserves a place on tables around the world. By combining traditional craftsmanship with modern manufacturing, we help businesses serve genuine injera while supporting Ethiopian agriculture and local communities.',
      commitmentBtn: 'Contact Our Export Team'
    },
    footer: {
      quickLinks: 'Quick Links',
      location: 'Location',
      contact: 'Contact',
      addisAbaba: 'Addis Ababa, Ethiopia',
      emailLabel: 'Email:',
      phoneLabel: 'Phone:'
    },
    audio: {
      on: 'Audio On',
      off: 'Audio Ambient'
    },
    qr: {
      badge: 'Scan & Visit',
      heading1: 'Visit Our',
      headingGold: 'Site',
      subtitle: 'Scan the QR code to explore our products and services.'
    }
  },

  am: {
    site: { name: 'ዘ-ዳግም', nameAm: 'ዘ፟-ዳግም', logoAlt: 'ዘ-ዳግም', copyright: '© 2026 የኩባንያዎ ስም። መብቱ በህግ የተጠበቀ ነው።' },
    nav: {
      products: 'ምርቶች', about: 'ስለ እኛ', process: 'ሂደት', quality: 'ጥራት', contact: 'ግንኙነት',
      requestQuote: 'የዋጋ ጥያቄ ይላኩ', switchLang: 'ቋንቋ ቀይር', langTitle: 'English', toggleTheme: 'ጨለማ/ብርሃን ቀይር',
      homeAria: 'መነሻ', faq: 'ተደጋጋሚ ጥያቄዎች'
    },
    hero: {
      title1: 'እውነተኛ የኢትዮጵያ',
      title2: 'እንጀራ። ለመላው ዓለም።',
      subtitle: 'ከፍተኛ ጥራት ያለው፣ አስተማማኝ አቅርቦት እና ለላክ የተዘጋጀ ማሸግ በመጠቀም እውነተኛውን የኢትዮጵያ ጣዕም ለአለም አቀፍ ሱፐርማርኬቶች፣ ሬስቶራንቶች፣ አከፋፋዮች እና የምግብ አሰራጮች እናቀርባለን።',
      requestQuote: 'የዋጋ ጥያቄ ይላኩ',
      viewProducts: 'ምርቶችን ይመልከቱ'
    },
    process: {
      badge: 'የእኛ ሂደት',
      heading: 'ከኢትዮጵያ እርሻዎች',
      headingGold: 'እስከ ደንበኞችዎ',
      steps: [
        { id: 'selection', step: '01', title: 'ምርጥ የጤፍ መረጣ', subtitle: 'ታማኝ የአርሶ አደር ማህበረሰቦች', description: 'ታማኝ ከሆኑ የአካባቢ አርሶ አደሮች በጥራት የተመረጠ የኢትዮጵያ ጤፍ እንሰበስባለን።', image: '/images/teff_field.png', highlights: ['ጥራት ያለው የኢትዮጵያ ጤፍ', 'ታማኝ የአርሶ አደር ማህበረሰቦች'] },
        { id: 'fermentation', step: '02', title: 'ባህላዊ ኩፋይ (ቦካ)', subtitle: 'ተፈጥሯዊ እውነተኛ ጣዕም', description: 'ተፈጥሯዊ ኩፋይ (ሊጥ መቦካት) እንጀራ የሚታወቅበትን እውነተኛ ጣዕም እንዲያገኝ ያደርጋል።', image: '/images/Fermentation.jpg', highlights: ['ተፈጥሯዊ መቦካት', 'እውነተኛ የእንጀራ ጣዕም'] },
        { id: 'baking', step: '03', title: 'በየቀኑ የሚጋገር ትኩስ እንጀራ', subtitle: 'ትክክለኛ የመጋገር ሂደት', description: 'እያንዳንዱ እንጀራ ቋሚ ጥራቱን የጠበቀ እንዲሆን በጥንቃቄ ይጋገራል።', image: '/images/Baking.jpg', highlights: ['በየቀኑ የሚጋገር ትኩስ እንጀራ', 'ቋሚ ጥራት'] },
        { id: 'inspection', step: '04', title: 'የጥራት ቁጥጥር', subtitle: 'ጥንቃቄ የተሞላበት የባች ምርመራ', description: 'እያንዳንዱ ባች ከታሸገ በፊት በጥንቃቄ ይመረመራል።', image: '/images/Quality inspection.jpg', highlights: ['የጥራት ቁጥጥር', 'የባች ምርመራ ሂደት'] },
        { id: 'packaging', step: '05', title: 'ለወጪ ንግድ የተዘጋጀ ማሸግ', subtitle: 'አየር በማይስብ መልኩ የታሸገ ትኩስነት', description: 'አየር በሌለው (Vacuum-sealed) መንገድ ታሽጎ ለአለም አቀፍ ትራንስፖርት ይዘጋጃል።', image: '/images/vacuum_pack.png', highlights: ['አየር በማይስብ መልኩ የታሸገ', 'ለወጪ ንግድ የተዘጋጀ ማሸግ'] },
        { id: 'delivery', step: '06', title: 'አለም አቀፍ ስርጭት', subtitle: 'የአለም ገበያ ጭነት', description: 'በአለም ዙሪያ ላሉ ደንበኞች በሰላም እና በጥንቃቄ ይደርሳል።', image: '/images/warehouse.png', highlights: ['አለም አቀፍ ጭነት', 'ደህንነቱ የተጠበቀ እና አስተማማኝ አቅርቦት'] }
      ]
    },
    whyChooseUs: {
      badge: 'ለምን እኛን ይመርጣሉ?',
      heading: 'ታማኝ የኤክስፖርት',
      headingGold: 'አጋር',
      pillars: [
        { icon: 'Leaf', title: 'እውነተኛ ጥራት', desc: 'የእውነተኛ እንጀራን ጣዕም እና ይዘት በሚጠብቁ ባህላዊ አሰራሮች እና በምርጥ የኢትዮጵያ ጤፍ የተዘጋጀ።' },
        { icon: 'Ship', title: 'ለኤክስፖርት የተዘጋጀ', desc: 'ምርቶቻችን በአለም አቀፍ መጓጓዣ ወቅት ትኩስነታቸውን እና ጥራታቸውን በሚጠብቅ መልኩ በባለሙያዎች የተሸጉ ናቸው።' },
        { icon: 'Shield', title: 'አስተማማኝ አቅርቦት', desc: 'ሬስቶራንት፣ ሱፐርማርኬት ወይም የጅምላ አከፋፋይ ይሁኑ፣ ቋሚ ምርት እና አስተማማኝ አቅርቦት እናቀርባለን።' },
        { icon: 'CheckCircle2', title: 'የምግብ ደህንነት', desc: 'እያንዳንዱ ባች ደህንነቱ የተጠበቀ፣ ንፅህናው የተጠበቀ እና አስተማማኝ መሆኑን ለማረጋገጥ ጥብቅ የጥራት ቁጥጥር ሂደቶችን ይከተላል።' }
      ]
    },
    products: {
      badge: 'ምርቶቻችን',
      heading: 'ምርጥ እንጀራ ለሁሉም',
      headingGold: 'ገበያዎች',
      items: [
        { id: 'white', name: 'ፕሪሚየም ነጭ ጤፍ እንጀራ', category: 'ፕሪሚየም', description: 'ቀልጣፋ፣ ለስላሳ እና ከምርጥ ነጭ ጤፍ የተዘጋጀ።' },
        { id: 'brown', name: 'ባህላዊ ቀይ ጤፍ እንጀራ', category: 'ባህላዊ', description: 'ባህላዊ ጣዕም ያለው፣ በቂ ይዘት እና እውነተኛ ባህሪ ያለው።' },
        { id: 'mixed', name: 'የዘወትር ቅልቅል ጤፍ እንጀራ', category: 'ዕለታዊ', description: 'ለዘወትር ምግብ እና ለንግድ ማዕድ ቤቶች የተመጣጠነ ቅልቅል።' },
        { id: 'custom', name: 'የጅምላ እና ልዩ ትዕዛዞች', category: 'ጅምላ', description: 'ለአከፋፋዮች እና ለችርቻሮ አጋሮች ብጁ ማሸግ እና የግል ሌብሊንግ አገልግሎት።' }
      ],
      cta: 'ናሙና እና የዋጋ ጥያቄ ይላኩ'
    },
    baltena: {
      badge: 'የኢትዮጵያ ባልጠና ስብስብ',
      heading1: 'እውነተኛ የኢትዮጵያ',
      headingGold: 'ጣዕሞች',
      heading2: 'ለአለም የተዘጋጁ',
      subtitle: 'ከእውነተኛ ግብአቶች እና ባህላዊ አሰራር በጥንቃቄ በተዘጋጁት የባልጠና ምርቶቻችን የኢትዮጵያን ጣዕም ይለማመዱ።',
      items: [
        { id: 'berbere', name: 'በርበሬ', emoji: '🌶️', description: 'ከቃሪያ፣ ነጭ ሽንኩርት፣ ዝንጅብል እና ከተለያዩ ባህላዊ ቅመሞች የተዘጋጀ ለኢትዮጵያ ምግብ ወሳኝ የሆነ ጥሩ መዓዛ ያለው ቅመም።' },
        { id: 'white-shiro', name: 'ነጭ ሽሮ', emoji: '🌾', description: 'በጥሩ ሁኔታ ከተፈጨ ሽምብራ እና ከባህላዊ ቅመማ ቅመሞች የተቀላቀለ ለጣፋጭ ወጥ የሚሆን አልጫ ሽሮ።' },
        { id: 'mitmita', name: 'ሚጥሚጣ', emoji: '🔥', description: 'ከሚጥሚጣ ቃሪያ፣ ኮረሪማ እና ቅርንፉድ የተዘጋጀ የሚቃጠል የቅመም ቅልቅል — የሚያቃጥል ነገር ለሚወዱ አስፈላጊ።' },
        { id: 'spice-blends', name: 'ባህላዊ የቅመም ቅልቅሎች', emoji: '🌿', description: 'ከእርድ፣ ከከምባ፣ ከኦሞ እና ከኮረሪማ የተዘጋጁ የኢትዮጵያ ምርጥ ቅመሞች ለዕለት ተዕለት ምግብ ማብሰያ።' },
        { id: 'mitn-shiro', name: 'ምጥን ሽሮ', emoji: '🫘', description: 'ለጣፋጭ እና አልሚ ባህላዊ ምግብ በጥንቃቄ ተዘጋጅቶ የተፈጨ የጥራጥሬ እና ቅመም ቅልቅል።' },
        { id: 'beso', name: 'በሶ', emoji: '🥣', description: 'በባህላዊ መንገድ የተቆላ የገብስ ዱቄት፣ በጥሩ ሁኔታ የተፈጨ እና ተፈጥሯዊ አልሚ ምግብ — እንደ ገንፎ፣ ፈጣን ምግብ ወይም ሃይል ሰጪ መጠጥ የሚወሰድ።' },
        { id: 'kolo', name: 'ቆሎ', emoji: '🌰', description: 'ለተመጣጠነ ቆላፊ ምግብነት በቀሊሉ የተቀመመ የተቆላ ገብስ ወይም ስንዴ።' }
      ],
      exportBadge: 'ለኤክስፖርት የተዘጋጀ',
      exportText: 'ትኩስነቱን፣ ጣዕሙን እና የኢትዮጵያን ባህል በሚጠብቅ መልኩ በጥንቃቄ የታሸገ — በአለም ዙሪያ ላሉ የኢትዮጵያ ማህበረሰቦች እና የምግብ ወዳጆች የሚቀርብ።',
      cta: 'የጅምላ ዋጋ ጥያቄ ይላኩ'
    },
    cta: {
      heading1: 'እውነተኛ እንጀራን ወደ ገበያዎ',
      headingGold: 'ያምጡ',
      text: 'አስተማማኝ የእንጀራ አቅራቢ ይፈልጋሉ? ለጥራት፣ ለቋሚነት እና ለረጅም ጊዜ የንግድ ግንኙነት ከሚሰራ አምራች ጋር ይጣመሩ።',
      btnQuote: 'የጅምላ የዋጋ ጥያቄ ይላኩ',
      btnContact: 'የኤክስፖርት ቡድናችንን ያነጋግሩ'
    },
    logistics: {
      badge: 'አለም አቀፍ ተደራሽነት',
      heading: 'በአህጉራት መካከል',
      headingGold: 'ማድረስ',
      text: 'የእኛ የኤክስፖርት መዋቅር በሰሜን አሜሪካ፣ አውሮፓ፣ መካከለኛው ምስራቅ፣ አፍሪካ እና ከዚያም በላይ ላሉ ደንበኞች ያገለግላል። መደበኛ የጅምላ አቅርቦት ወይም ብጁ የኤክስፖርት መፍትሄዎች ቢፈልጉ፣ ንግድዎን ለመደገፍ ዝግጁ ነን።',
      routes: [
        { destination: 'ሰሜን አሜሪካ — ምስራቅ የባህር ዳርቻ', hubs: 'ዋሽንግተን ዱለስ (IAD) / ኒው ዮርክ (JFK)', mode: 'ዕለታዊ የአየር ጭነት', transit: '24 – 36 ሰዓታት', temp: '+4°C የተቀዘቀዘ', frequency: '7 በረራዎች / በሳምንት' },
        { destination: 'ሰሜን አሜሪካ — ምዕራብ እና ካናዳ', hubs: 'ሎስ አንጀለስ (LAX) / ቶሮንቶ ፒየርሰን (YYZ)', mode: 'ፈጣን የአየር ጭነት', transit: '36 – 48 ሰዓታት', temp: '+4°C የተቀዘቀዘ', frequency: '5 በረራዎች / በሳምንት' },
        { destination: 'አውሮፓ — ማዕከላዊ እና እንግሊዝ', hubs: 'ፍራንክፈርት (FRA) / ለንደን ሂትሮው (LHR)', mode: 'ዕለታዊ የአየር ጭነት', transit: '18 – 24 ሰዓታት', temp: '+4°C የተቀዘቀዘ', frequency: '7 በረራዎች / በሳምንት' },
        { destination: 'መካከለኛው ምስራቅ እና የገልፍ ቀጣና', hubs: 'ዱባይ (DXB) / ሪያድ (RUH) / ዶሃ (DOH)', mode: 'ቀጥታ የአየር ጭነት', transit: '12 – 18 ሰዓታት', temp: '+4°C የተቀዘቀዘ', frequency: '14 በረራዎች / በሳምንት' },
        { destination: 'አለም አቀፍ የባህር ወደቦች (የጅምላ ኮንቴይነር)', hubs: 'የጅቡቲ ወደብ → አለም አቀፍ ማቀዝቀዣዎች', mode: '20ft / 40ft የባህር ማቀዝቀዣ ኮንቴይነር', transit: '14 – 21 ቀናት', temp: '-18°C በጣም የቀዘቀዘ', frequency: 'ሳምንታዊ የመርከብ ጉዞዎች' }
      ],
      transitLabel: 'የማድረሻ ጊዜ',
      tempLabel: 'የሙቀት መጠን',
      ctaTitle: 'እቃዎችን መላክ ለመጀመር ዝግጁ ነዎት?',
      ctaText: 'ለዋጋ እና ለማድረሻ አማራጮች የኤክስፖርት ቡድናችንን ያነጋግሩ።',
      ctaBtn: 'የኤክስፖርት ቡድናችንን ያነጋግሩ'
    },
    customers: {
      badge: 'ለነማን እናገለግላለን?',
      heading: 'ለአለም አቀፍ ንግዶች',
      headingGold: 'የተገነባ',
      intro: 'ከሚከተሉት ጋር በጋራ ለመስራት እንኮራለን፡',
      types: ['የሱፐርማርኬት ሰንሰለቶች', 'ሬስቶራንቶች', 'ሆቴሎች', 'የምግብ አስመጪዎች', 'የጅምላ አከፋፋዮች', 'የአፍሪካ ግሮሰሪ ሱቆች', 'የኬተሪንግ ኩባንያዎች', 'አለም አቀፍ ቸርቻሪዎች']
    },
    testimonials: {
      badge: 'የደንበኞች አስተያየት',
      heading: 'በአለም አቀፍ አጋሮች',
      headingGold: 'የታመነ',
      items: [
        { quote: 'ቋሚ ጥራት፣ ጥሩ አገልግሎት እና ሁልጊዜ አስተማማኝ አቅርቦት።', author: 'የምግብ አከፋፋይ', title: 'አለም አቀፍ አጋር', company: 'አውሮፓ' },
        { quote: 'ደንበኞቻችን እውነተኛውን ጣዕም እና ትኩስነቱን ይወዱታል።', author: 'የሬስቶራንት ባለቤት', title: 'የሆስፒታሊቲ አጋር', company: 'ሰሜን አሜሪካ' },
        { quote: 'ለሚያድገው ንግዳችን አስተማማኝ አቅራቢ።', author: 'የጅምላ አጋር', title: 'የስርጭት አጋር', company: 'መካከለኛው ምስራቅ' }
      ]
    },
    faq: {
      badge: 'ተደጋግመው የሚጠየቁ ጥያቄዎች',
      heading: 'ተደጋጋሚ',
      headingGold: 'ጥያቄዎች',
      items: [
        { q: 'አለም አቀፍ ኤክስፖርት ታደርጋላችሁ?', a: 'አዎ። በበርካታ አለም አቀፍ ገበያዎች ላሉ የጅምላ ደንበኞች እናቀርባለን።' },
        { q: 'የምርት ናሙና ማዘዝ እችላለሁ?', a: 'አዎ። የምርት ናሙናዎች ለብቁ የጅምላ ጥያቄዎች ይገኛሉ።' },
        { q: 'የግል ሌብሊንግ አገልግሎት ትሰጣላችሁ?', a: 'አዎ። ብጁ ማሸግ እና የግል ሌብሊንግ መፍትሄዎችን እናቀርባለን።' },
        { q: 'ትኩስነቱ እንዴት ይጠበቃል?', a: 'የኤክስፖርት ደረጃችን ማሸጊያ በአለም አቀፍ ጭነት ወቅት ትኩስነትን ለመጠበቅ ይረዳል።' }
      ]
    },
    contact: {
      badge: 'ያግኙን',
      heading: 'ያግኙን',
      headingGold: 'ያግኙን',
      subtitle: 'ከእኛ ጋር ለመስራት ዝግጁ ነዎት? የኤክስፖርት ቡድናችንን ያነጋግሩ።',
      email: 'ኢሜይል', phone: 'ስልክ', location: 'አድራሻ',
      emailVal: 'export@company.com', phoneVal: '+251 XXX XXX XXX', locationVal: 'አዲስ አበባ፣ ኢትዮጵያ',
      visitUs: 'ይጎብኙን',
      mapTitle: 'አዲስ አበባ፣ ኢትዮጵያ',
      btn: 'መልእክት ይላኩ'
    },
    about: {
      badge: 'ማን ነን?',
      heading: 'የኢትዮጵያን ምርጥ እንጀራ ወደ አለም አቀፍ ገበያ',
      headingGold: 'ማቅረብ',
      p1: 'በኢትዮጵያ ሀብታም የምግብ ባህል ላይ በመመስረት፣ ለአለም አቀፍ ገበያዎች ፕሪሚየም እንጀራ በማምረት ላይ እንሰራለን። እያንዳንዱ ባች በጥንቃቄ ከተመረጠ የኢትዮጵያ ጤፍ፣ በባህላዊ አሰራር ተቦክቶ፣ እና አለም አቀፍ የጥራት ደረጃዎችን በሚያሟላ ዘመናዊ ተቋም ውስጥ ይዘጋጃል።',
      p2: 'ከአካባቢው እርሻዎች እስከ አለም አቀፍ መደርደሪያዎች፣ ተልዕኳችን ቀላል ነው፡ እውነተኛ የኢትዮጵያ እንጀራን በቋሚ ጥራት፣ ትኩስነት እና አስተማማኝ አገልግሎት ማቅረብ።',
      commitmentBadge: 'ቃላችን / ቁርጠኝነታችን',
      commitmentHeading: 'ከኤክስፖርተር በላይ',
      commitmentText: 'እውነተኛ የኢትዮጵያ ምግብ በአለም ዙሪያ በሚገኙ ማዕዶች ላይ ቦታ ይገባዋል ብለን እናምናለን። ባህላዊ ጥበብን ከዘመናዊ ማኑፋክቸሪንግ ጋር በማጣመር፣ ንግዶች እውነተኛ እንጀራ እንዲያቀርቡ እያገዝን የኢትዮጵያን እርሻ እና የአካባቢ ማህበረሰቦችን እንደግፋለን።',
      commitmentBtn: 'የኤክስፖርት ቡድናችንን ያነጋግሩ'
    },
    footer: {
      quickLinks: 'ፈጣን ማገናኛዎች',
      location: 'አድራሻ',
      contact: 'ግንኙነት',
      addisAbaba: 'አዲስ አበባ፣ ኢትዮጵያ',
      emailLabel: 'ኢሜይል፡',
      phoneLabel: 'ስልክ፡'
    },
    audio: {
      on: 'ድምጽ በርቷል',
      off: 'ድምጽ አካባቢ'
    },
    qr: {
      badge: 'እስካን ያድርጉ እና ይጎብኙ',
      heading1: 'ድረ-ገፃችንን',
      headingGold: 'ይጎብኙ',
      subtitle: 'ምርቶቻችንን እና አገልግሎቶቻችንን ለማየት ኪዩአር ኮዱን እስካን ያድርጉ።'
    }
  }
};

export default translations;
