export const personalInfo = {
  name: "Mehmet Eren Özden",
  titles: [
    "Yapay Zeka & Veri Mühendisi",
    "Ürün Lideri (Product Lead)",
    "YBS & CBS Uzmanı",
  ],
  bio: "Yapay zeka sistem tasarımı, veri mühendisliği, Vibe Coding ile 3 yılı aşkın deneyim. Hibrit LLM mimarileri ve büyük veri setleri ile bankacılık düzeyinde ürünler geliştiriyor, mobil girişimlere liderlik ediyorum.",
  email: "erennzden@gmail.com",
  linkedin: "https://www.linkedin.com/in/erennzden",
  github: "https://github.com/erennzden",
  resumeUrl: "C:/Users/eren/Downloads/Mehmet_Eren_Ozden_CV_TR.pdf",
};

export const education = [
  {
    id: 1,
    type: "Lisans",
    school: "Dokuz Eylül Üniversitesi",
    department: "Yönetim Bilişim Sistemleri (YBS)",
    gpa: "3.14 / 4.00",
    date: "Eyl 2022 - Haz 2026",
    icon: "🎓",
  },
  {
    id: 2,
    type: "Önlisans",
    school: "Anadolu Üniversitesi",
    department: "Coğrafi Bilgi Sistemleri (CBS)",
    gpa: "2.85 / 4.00",
    date: "Eyl 2023 - Haz 2025",
    icon: "🌍",
  },
  {
    id: 3,
    type: "Akademi",
    school: "Marmara Üniversitesi",
    subtitle: "ODTÜ, İTÜ, Boğaziçi Koordinasyonu",
    department: "Veri Analizi Okulu",
    date: "Eki 2025 - May 2026",
    icon: "📊",
    tags: ["Yapay Zeka ve Makine Öğrenmesi", "Hesaplamalı Sosyal Bilimler"],
  },
];

export const skills = {
  "Yapay Zeka & Veri": [
    "BERT (Transformers)",
    "NLP",
    "LangChain",
    "LLM Entegrasyonu",
    "Sentetik Veri Mühendisliği",
    "Benchmarking",
  ],
  "Yazılım & Çatılar": [
    "Python",
    "SQL",
    "Node.js",
    "JavaScript",
    "React Native",
    "Flutter",
  ],
  "CBS (GeoAI)": [
    "ArcGIS Pro",
    "QGIS",
    "Mekânsal Analiz",
    "Uzaktan Algılama",
  ],
};

export const experience = [
  {
    id: 1,
    company: "Kuveyt Türk Katılım Bankası",
    position: "Kaşif Satış Stajyeri",
    date: "Oca 2026 - Halen",
    detail:
      "Kaşif İnovasyon Kampı'nda \"Genç Katılım Ekosistemi\" ile 1.lik ödülü. Veri odaklı süreç optimizasyonu.",
    icon: "🏦",
    current: true,
  },
  {
    id: 2,
    company: "Kuveyt Türk Katılım Bankası",
    position: "Bankada Kampüs Satış Stajyeri",
    date: "Tem 2025 - Oca 2026",
    detail: "Üstün inisiyatif ve başarı ile banka bünyesinde terfi.",
    icon: "🏦",
  },
  {
    id: 3,
    company: "Frawell (Girişim)",
    position: "Kurucu Ortak & Ürün Lideri",
    date: "Oca 2025 - Halen",
    detail:
      "Çevik (Agile) metodolojilerle uçtan uca ürün yönetimi, duyarlı UX/UI tasarımı.",
    icon: "🚀",
    current: true,
  },
  {
    id: 4,
    company: "Scoutium",
    position: "Video Uzmanı & Futbol Maç Analisti",
    date: "Mar 2022 - Şub 2024",
    detail: "",
    icon: "⚽",
  },
  {
    id: 5,
    company: "Dokuz Eylül Üniversitesi",
    position: "Akıllı Kampüs Proje Ekip Üyesi",
    date: "May 2023 - Tem 2024",
    detail: "ArcGIS Pro ile mekânsal veri analizi.",
    icon: "🏫",
  },
];

export const projects = [
  {
    id: 1,
    title: "Selim AI — KDS",
    subtitle: "Yapay Zeka Destekli Kişisel Finans Yönetimi & Kurumsal KDS",
    badge: "Kuveyt Türk PoC",
    description:
      "Hibrit LLM (Gemini 2.5 Flash + Regex) mimarisi. Halüsinasyon riskini ortadan kaldıran Context Builder. ~85.000 satırlık sentetik RDBMS veri ambarı ve rol tabanlı veri izolasyonu.",
    tags: ["Python", "SQL", "Gemini", "RDBMS", "Data Eng."],
    featured: true,
  },
  {
    id: 2,
    title: "THY ABSA",
    subtitle: "Türk Hava Yolları Aspect-Based Sentiment Analysis",
    description:
      "50.000'den fazla YouTube yorumu üzerinde uçtan uca NLP hattı. BERT mimarisi ile makine öğrenmesi modellerinin karşılaştırmalı analizi.",
    tags: ["NLP", "BERT", "LangChain", "Python"],
  },
  {
    id: 3,
    title: "Spoonie Quest",
    subtitle: "DEHB Odaklı Kişisel Planlama Asistanı",
    description:
      "Kaşık Teorisi metaforunu kullanan mobil oyunlaştırılmış görev ve enerji yönetimi prototipi. Erişilebilirlik öncelikli UX/UI.",
    tags: ["React Native", "Flutter", "UX/UI", "Agile"],
  },
  {
    id: 4,
    title: "Fırın İşletmesi için Karar Destek Sistemi ve Anında Muhasebe Ekosistemi",
    subtitle: "Yerel İşletme Otomasyonu",
    description:
      "Operasyonel iş akışlarını optimize eden çift katmanlı yerel işletme otomasyonu.",
    tags: ["Node.js", "PHP", "MySQL", "Python"],
  },
];

export const research = [
  {
    title: "Akıllı Şehirlerde Büyük Veri: Enerji Yönetimi",
    detail: "Erasmus+ Cities4Youth Programı, Sakarya (2025)",
    icon: "📄",
  },
];

export const certifications = [
  { title: "Yapay Zeka Uzmanı", issuer: "Sanayi Bakanlığı", year: "2026" },
  { title: "SPK Eğitimi", issuer: "", year: "2026" },
  { title: "İleri Girişimcilik", issuer: "KOSGEB", year: "2022" },
  {
    title: "Profesyonel Satranç Oyuncusu",
    issuer: "TSF",
    year: "",
  },
];

export const navLinks = [
  { label: "Ana Sayfa", href: "#hero" },
  { label: "Eğitim", href: "#education" },
  { label: "Yetkinlikler", href: "#skills" },
  { label: "Deneyim", href: "#experience" },
  { label: "Projeler", href: "#projects" },
  { label: "Araştırma", href: "#research" },
];
