export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  keywords: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'vad-ar-en-ai-agent',
    title: 'Vad är en AI-agent? En enkel förklaring för dig som inte är teknisk',
    description: 'Förstå vad en AI-agent är, hur den skiljer sig från en chatbot och vad den kan göra för dig i arbetet. Skriven för dig som inte arbetar med teknik.',
    date: '2026-03-20',
    readTime: '8 min',
    keywords: ['vad är AI-agent', 'AI-agent förklaring', 'hur fungerar AI-agent', 'AI för nybörjare'],
  },
  {
    slug: 'vad-ar-en-ai-agent-excalidraw',
    title: 'Vad är en AI-agent? (Med illustrationer)',
    description: 'En visuell förklaring av AI-agenter med illustrationer skapade i Excalidraw. Lär dig skillnaden mellan chatbot och AI-agent.',
    date: '2026-03-27',
    readTime: '10 min',
    keywords: ['AI-agent illustration', 'vad är AI-agent', 'AI-agent visualisering'],
  },
  {
    slug: '5-arbetsuppgifter-ai-agent',
    title: '5 arbetsuppgifter som en AI-agent kan ta över redan idag',
    description: 'Mejl, research, schemaläggning, kundtjänst och rapportering. Konkreta exempel på hur AI-agenter sparar tid för svenska företagare.',
    date: '2026-03-19',
    readTime: '7 min',
    keywords: ['AI-agent arbetsuppgifter', 'automatisera arbete AI', 'spara tid med AI'],
  },
  {
    slug: 'openclaw-vs-chatgpt',
    title: 'OpenClaw vs ChatGPT: Skillnaden mellan AI som svarar och AI som agerar',
    description: 'En saklig jämförelse av reaktiv och autonom AI. Vilken typ passar bäst för ditt arbete?',
    date: '2026-03-18',
    readTime: '9 min',
    keywords: ['OpenClaw vs ChatGPT', 'AI-agent jämförelse', 'bästa AI-verktyg företag'],
  },
  {
    slug: 'kan-ai-ersatta-anstalld',
    title: 'Kan en AI-agent verkligen ersätta en anställd? Ärlig analys',
    description: 'Vad AI-agenter faktiskt kan och inte kan göra. Realistisk kostnadsjämförelse och vanliga misstag att undvika.',
    date: '2026-03-17',
    readTime: '8 min',
    keywords: ['AI ersätta anställd', 'AI-agent värt det', 'automatisering småföretag'],
  },
  {
    slug: 'datasakerhet-gdpr-ai',
    title: 'Datasäkerhet och AI: Vad svenska företag behöver veta om GDPR och AI-agenter',
    description: 'Praktisk guide till GDPR-efterlevnad vid användning av AI-agenter. Lokal vs molnbaserad hantering, datakontroll och checklista.',
    date: '2026-03-16',
    readTime: '7 min',
    keywords: ['AI datasäkerhet Sverige', 'GDPR AI-agent', 'integritet AI'],
  },
  {
    slug: 'enmansforetag-ai-agenter',
    title: 'Hur du driver ett enmansföretag med AI-agenter 2026',
    description: 'Konkreta tips för egenföretagare och konsulter som vill automatisera admin, försäljning och kundhantering med AI.',
    date: '2026-03-15',
    readTime: '9 min',
    keywords: ['enmansföretag AI', 'AI egenföretagare Sverige', 'automatisera enskild firma'],
  },
];
