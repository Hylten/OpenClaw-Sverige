import React, { useEffect, useRef, useState, useCallback } from 'react';
import { blogPosts, BlogPost } from './blogData';
import { generatedBlogPosts, generatedArticleContent } from './generatedBlogs';

const WHATSAPP_NUMBER = '46701619978';
const WHATSAPP_MESSAGE = 'Hej Jonas, jag skulle vilja veta mer om OpenClaw Sverige.';
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

/* ═══════════════════════════════════════
   MARKDOWN CONTENT (inlined for zero-dep build)
   ═══════════════════════════════════════ */

const articleContent: Record<string, string> = {
  'vad-ar-en-ai-agent': `Att förstå vad en AI-agent är kan kännas svårt om man inte arbetar med teknik till vardags. Samtidigt börjar begreppet dyka upp överallt: i tidningar, på konferenser och i samtal på jobbet. Många svenska företag testar nu autonom AI, och intresset växer snabbt.

I den här artikeln får du en enkel och rak AI-agent förklaring, skriven för dig som är yrkesverksam och vill använda AI utan att behöva lära dig programmering.

## Vad är en AI-agent

Ett bra sätt att förklara en AI-agent är att se den som en digital assistent som kan ta emot ett uppdrag, planera hur det ska lösas och därefter genomföra arbetet självständigt.

En vanlig AI-chattbot svarar endast på en fråga i taget. En AI-agent kan däremot utföra en hel kedja av steg utan att du behöver detaljstyra varje moment.

En AI-agent har alltså två grundegenskaper:

- Den kan fatta enklare beslut inom ramarna du sätter.
- Den kan arbeta självständigt tills ett uppdrag är slutfört.

Man kan beskriva det som att du inte bara ger den ett svar att producera, utan snarare ett ansvar att ta hand om.

## Varför kallas det autonom AI

När man pratar om autonom AI syftar man på system som kan göra mer än att bara generera text. Autonom innebär inte att AI agerar fritt eller okontrollerat, utan att den kan:

- bryta ned ett mål i deluppgifter
- avgöra i vilken ordning uppgifterna ska göras
- kontrollera resultatet och rätta till misstag
- arbeta tills målet är uppnått eller tills du stoppar den

Det påminner om att ge instruktioner till en praktikant: du behöver vara tydlig med vad som ska göras, men praktikanten kan själv lista ut de praktiska stegen.

## Skillnaden mellan en chatbot och en AI-agent

Många blandar ihop chatbots och AI-agenter. För en vanlig användare ser de ibland likadana ut, eftersom båda kommunicerar genom text. Men deras sätt att arbeta skiljer sig tydligt.

### Chatbot
- Svarar på en fråga i taget
- Ingen minneshantering över tid
- Gör inga egna initiativ
- Passar för snabba frågor eller enkla formuleringar

### AI-agent
- Förstår målet med uppdraget
- Planerar arbetsgången själv
- Tar initiativ, kontrollerar och förbättrar
- Passar för längre processer, upprepade rutiner och strukturerat arbete

Ett enkelt sätt att tänka är så här: Chatboten är en konversation. AI-agenten är en arbetsprocess.

## Hur fungerar en AI-agent i praktiken

Det finns många tekniska detaljer, men man behöver inte kunna dem för att använda AI-agenter. Här är en förklaring för AI för nybörjare.

### 1. Du berättar målet
Du anger vad som ska göras, inte hur det ska göras. Exempel: Skapa ett förslag till en marknadsplan baserat på vår senaste kunddata.

### 2. AI-agenten planerar
Agenten bryter ned uppdraget i delmoment. Exempel: samla data, sortera, analysera, skriva, kontrollera.

### 3. Agenten genomför arbetet
Den använder AI-modellen, interna verktyg eller externa system för att lösa uppgifterna.

### 4. Den kontrollerar sitt eget resultat
I stället för att ge dig första utkastet kan agenten göra om och förbättra tills instruktionerna uppfylls.

## Vad kan en AI-agent hjälpa till med

En AI-agent kan användas i många typer av arbetssituationer, men det handlar oftast om uppgifter som är upprepade, administrativa, text- eller dataintensiva, tydligt definierade, och som inte kräver mänskliga relationer eller bedömning av känslor.

### Försäljning och marknad
- sammanställa kundanteckningar
- skriva första utkast till offerter
- analysera insamlad kundinformation
- uppdatera CRM-systemet med strukturerad data

### HR och administration
- skapa arbetsinstruktioner
- hålla koll på återkommande uppgifter
- skriva protokoll från mötesanteckningar
- rensa och kategorisera dokument

### Ekonomi och intern rapportering
- sammanställa siffror från flera källor
- skapa rapportutkast
- påminna teamet om saknade underlag

En AI-agent ersätter inte en kollega, men kan ofta ta hand om de delar av arbetet som ingen egentligen vill lägga tid på.

## Vad en AI-agent inte kan göra

Det är viktigt att ha realistiska förväntningar. En AI-agent är inte en magisk problemlösare. Den tar inte ansvar, saknar sunt förnuft vid otydliga instruktioner, och behöver tydliga ramar för att fungera bra.

## Integritet och datakontroll

På OpenClaw Sverige används isolerade miljöer där användaren själv bestämmer vilka filer, API-nycklar eller dokument agenten får komma åt. Du bestämmer exakt vilka mappar, dokument eller system agenten får använda. Den kommer inte åt något utanför dessa ramar.

Syftet är att ge kontroll utan att kräva avancerad teknisk kompetens.

## Hur OpenClaw Sverige arbetar med AI-agenter

OpenClaw Sverige erbjuder en plattform där svenska yrkesverksamma kan skapa och driva egna AI-agenter utan tekniska förkunskaper. Fokus ligger på enkelhet, kontroll och anpassning till vardagsarbete.

Du kan skapa en agent som sköter just dina rutiner, kopplad till dina dokument och dina verktyg.

Om du vill testa en AI-agent som är anpassad för svensk vardagspraktik kan du kontakta OpenClaw Sverige direkt via WhatsApp för ett enkelt samtal om vad du behöver.`,

  '5-arbetsuppgifter-ai-agent': `Digitaliseringen går snabbt, men många svenska företag arbetar fortfarande med arbetsuppgifter som tar mycket tid och ger lite värde tillbaka. Det som tidigare krävde en assistent, extra personal eller sena kvällar kan idag lösas av en AI-agent.

I den här artikeln går vi igenom fem konkreta arbetsuppgifter där en AI-agent inte bara kan stödja utan faktiskt ta över stora delar av processen.

## 1. Mejlhantering och sortering

Många företagare beskriver mejl som en av de mest tidskrävande delarna av arbetsdagen. Inkorgen fylls av kundfrågor, interna meddelanden, reklam, uppföljningar och fakturor.

### Hur en AI-agent hanterar det
Med en AI-agent kan man automatisera arbete genom att låta agenten sortera inkommande mejl i kategorier, markera brådskande ärenden, generera utkast på svar, sammanfatta långa mejltrådar och filtrera bort oönskade utskick.

### Realistiskt resultat
De flesta svenska användare rapporterar att de minskar sin tid i inkorgen med 30 till 60 procent.

## 2. Research och informationsinsamling

Många yrkesroller kräver att man snabbt tar fram underlag, statistik, svar på frågor eller marknadsinformation. Detta är tidsödande och ofta monotont.

### Hur en AI-agent hanterar det
En AI-agent kan sammanfatta stora datamängder, jämföra information från olika källor, söka efter fakta och presentera relevanta insikter, identifiera mönster eller avvikelser, och förbereda beslutsunderlag.

### Realistiskt resultat
De flesta företag beskriver att en arbetsuppgift som tidigare tog flera timmar nu kan lösas på några minuter.

## 3. Schemaläggning och påminnelser

Möten, deadlines, leveranser, intern planering och kunduppföljning kräver ständig uppmärksamhet. Här gör många fel utan att vilja det.

### Hur en AI-agent hanterar det
En AI-agent kan lägga in möten i kalendern, skicka påminnelser vid viktiga deadlines, föreslå lediga tider för kunder, skapa strukturerade arbetslistor och följa upp tidigare beslut eller mejl.

### Realistiskt resultat
Resultatet blir färre missade uppgifter och en mer förutsägbar arbetsdag.

## 4. Kundtjänst och förfrågningar

Svenska kunder förväntar sig snabba svar, raka besked och tillgänglighet. Detta är svårt för många småföretag som saknar en dedikerad kundtjänstavdelning.

### Hur en AI-agent hanterar det
En AI-agent kan svara på vanliga frågor, ge grundläggande information om tjänster och priser, ta emot och strukturera offertunderlag, triagera ärenden och skicka vidare mer komplexa frågor, och svara dygnet runt.

### Realistiskt resultat
Responstiderna blir kortare, kunder får tydligare information och företaget slipper avbrott.

## 5. Rapportering och sammanställning

Nästan varje företag behöver ta fram rapporter. Det kan vara ekonomiska sammanställningar, projektuppföljningar, kvalitetsrapporter, säljsiffror eller interna analyser.

### Hur en AI-agent hanterar det
En AI-agent kan hämta data från olika källor, strukturera och sammanfatta informationen, generera färdiga rapporter i textform, komplettera med analys och upptäckta mönster, och leverera rapporter på bestämda tider.

### Realistiskt resultat
Rapporteringen går från att vara ett manuellt återkommande moment till att i princip vara automatiserad.

## En AI-agent är inte magi, men den sparar tid

Det finns en tendens att överskatta AI som teknik och samtidigt underskatta dess praktiska nytta. För svenska företag handlar det sällan om futuristiska lösningar, utan om att frigöra tid och minska avbrott i arbetsdagen.

Om du vill diskutera hur en AI-agent kan hjälpa just din verksamhet går det bra att ta kontakt via WhatsApp.`,

  'openclaw-vs-chatgpt': `Digitaliseringen har gått från att handla om att automatisera enstaka steg till att skapa helt självständiga arbetsflöden. I centrum står två olika typer av AI-verktyg: de som svarar och de som agerar.

ChatGPT är i grunden en språkmodell. Den är mycket bra på att svara, formulera, sammanfatta, föreslå och presentera. OpenClaw fungerar annorlunda. Det är en plattform för autonoma AI-agenter som inte bara producerar text utan utför faktiska uppgifter.

## Reaktiv AI vs proaktiv AI

### ChatGPT som reaktiv assistent
ChatGPT är utmärkt som interaktiv partner. Den svarar på frågor, förtydligar komplexa ämnen, skriver text och hjälper användaren i dialogform. Men modellen är passiv. Den väntar på input och agerar inte förrän du ber om något.

### OpenClaw som proaktiv AI-agent
OpenClaw är byggt för att agera i stället för att bara svara. Plattformen låter användare skapa autonoma AI-agenter som kan fatta beslut stegvist, navigera system och databaser, schemalägga arbetsflöden och arbeta kontinuerligt utan mänsklig handpåläggning.

## Autonom AI i praktiken

Autonomi är inte alltid rätt. Många företag behöver bara bättre textproduktion eller snabbare svar. Men när arbetsuppgifter kräver kontinuitet eller flera steg uppstår ett behov som traditionella chattmodeller inte kan täcka.

## Integritet och dataskydd: lokal körning vs molnbaserad AI

### ChatGPT
Molnbaserat. Informationen skickas till OpenAI och bearbetas där. I sitt standardutförande är ChatGPT inte lokal, och data passerar alltid genom externa servrar.

### OpenClaw
Erbjuder lokal agentkörning, vilket innebär att företaget själv kan kontrollera var data lagras, vilka system som nås och hur åtkomstloggar lagras.

## Kostnadsjämförelse

ChatGPT är överlägset mest prisvärt för textproduktion och engångsuppgifter. OpenClaw blir billigare totalt när arbetsuppgifterna kräver kontinuerlig övervakning, schemalagda processer och integration med andra system.

## Användningsområden

### När ChatGPT är rätt val
Analys och idéproduktion, skrivande av text, skapa kodförslag, snabbt få en förklaring, kundtjänst i chattform.

### När OpenClaw är rätt val
Automatisering av administrativa processer, rapportering som återkommer regelbundet, integrationer mellan interna system, proaktiva agenter som tar ansvar för arbetsflöden.

Det är alltså inte ett alternativ till ChatGPT i textproduktion, utan ett komplement som hanterar helt andra typer av arbetsuppgifter.

Många svenska företag kommer i praktiken att använda båda.

Om du vill veta hur autonoma AI-agenter kan implementeras i din verksamhet kan du kontakta OpenClaw Sverige via WhatsApp för ett första samtal.`,

  'kan-ai-ersatta-anstalld': `När diskussionen om automatisering tar fart i svenska småföretagargrupper återkommer samma fråga gång på gång: kan en AI-agent ersätta en anställd, och är det i så fall värt det?

Här följer en ärligt hållen genomgång baserad på erfarenhet och de vanligaste frågorna som företagare ställer.

## Vad en AI-agent realistiskt kan ersätta

### Administrativa uppgifter
Här finns den största vinsten. De flesta småföretag har flera timmar i veckan av återkommande rutinuppgifter: sammanställa kundlistor, följ upp leads, kategorisera e-post, ta fram rapporter, uppdatera CRM, hålla koll på deadlines.

En AI-agent kan tränas att utföra detta med hög precision, dygnet runt och utan att tröttna.

### Repetitiva arbetsflöden med fasta regler
Skapa fakturautkast baserat på timrapporter, kontrollera att formulär är korrekt ifyllda, jämföra data mellan system, generera standardtexter. Här är AI både snabbare och billigare än en person.

## Vad AI inte kan ersätta

### Mänskligt omdöme och värdering
AI arbetar med sannolikheter och mönster. Den förstår inte sammanhang på samma sätt som en människa. Mänsklig kontroll behövs fortfarande för känsliga kundkonflikter, beslut som innebär risker, rekryteringsbedömningar och strategiska prioriteringar.

### Kreativitet av hög kvalitet
AI kan skapa texter och koncept, men resultatet saknar ofta originalitet, personlig tonalitet och förståelse för målgruppen på djupet.

### Relationer
Många småföretag bygger hela sin affär på personlig kontakt. En AI-agent kan inte skapa förtroende eller bygga relationer som utvecklas över tid.

## AI vs anställd: realistisk kostnadsjämförelse

### Kostnad för en anställd
Lön plus arbetsgivaravgifter: 40 000 kronor. Arbetsplats, system, försäkringar: 5 000 kronor. Total: cirka 48 000 kronor per månad.

### Kostnad för en AI-agent
Grundsystem: 3 000 till 7 000 kronor per månad. Anpassning: 1 000 till 4 000 kronor. API-kostnader: 200 till 900 kronor. Total: 4 200 till 11 900 kronor per månad.

### Vad siffrorna betyder
AI-agenten är billigare, men den ersätter inte allt en människa gör. Företagare som är mest nöjda tänker så här: AI ersätter inte en anställd, men AI gör att samma anställd kan göra mer.

## En ärlig sammanfattning

Kan AI ersätta en anställd? Delvis, men inte helt. Den kan ta över stora delar av repetitivt administrativt arbete. Men den kan inte ersätta omdöme, kreativitet på hög nivå eller relationsbyggande.

Du kan skriva till oss på WhatsApp om du vill ha en ärlig, kostnadsfri genomgång av vad som går att automatisera och vad som inte går.`,

  'datasakerhet-gdpr-ai': `AI har snabbt blivit en central del av hur svenska företag effektiviserar sina processer. Men samtidigt som tekniken öppnar dörrar till nya möjligheter ökar också kraven på datasäkerhet och integritet.

## Varför AI-datasäkerhet är en kritisk fråga i Sverige

Digitaliseringen har gjort att företag i allt större utsträckning samlar in, lagrar och analyserar kunddata. När AI-system integreras i verksamhetens kärnprocesser ökar riskerna om dataskyddet inte är korrekt hanterat.

## GDPR och AI: Vad företag behöver tänka på

GDPR reglerar hur personuppgifter får behandlas, lagras och överföras. Grundläggande krav som direkt berör AI-agenter:

- Dataminimering: AI-system får inte samla in mer persondata än nödvändigt.
- Tydligt syfte: Organisationen måste definiera varför AI får behandla viss data.
- Lagringsbegränsning: Personuppgifter får bara lagras så länge de behövs.
- Rätt till insyn och rättelse.
- Rätt att bli raderad.
- Automatiserat beslutsfattande kräver mänsklig kontroll.

## Lokal vs molnbaserad AI

### Lokal AI (local-first)
- Full kontroll över hela datakedjan
- All känslig data stannar innanför landets gränser
- Ökad säkerhet
- Förutsägbarhet i loggning och åtkomstkontroller

### Molnbaserad AI
Enkla att komma igång med, men för verksamhetskritiska processer, interna dokument, kunddata eller juridiskt skyddat material är riskerna betydande.

## Hur OpenClaw Sverige hanterar data

- Data behandlas lokalt när det är möjligt
- Ingen kunddata används för att träna modeller
- Inga externa parter får åtkomst till information
- All bearbetning sker inom EU eller lokalt hos kunden

## Praktisk checklista för AI-säkerhet

1. Var bearbetas data?
2. Använder leverantören kunddata för modellträning?
3. Kan du som kund styra retention och loggar?
4. Finns full dokumentation av datakedjan?
5. Stödjer aktören lokal-first eller lokal drift?
6. Efterlever aktören GDPR på ett verifierbart sätt?
7. Hur hanteras dokument, filer och kundspecifik information?

Om du vill diskutera hur säker lokal AI kan implementeras i din verksamhet kan du kontakta OpenClaw Sverige via WhatsApp.`,

  'enmansforetag-ai-agenter': `Att driva ett enmansföretag i Sverige har alltid krävt disciplin, bredd och ett visst mått av kreativt kaos. Men 2026 har spelplanen förändrats. Med moderna AI-agenter kan en egenföretagare hantera uppgifter som tidigare tog timmar, ibland dagar, på bara några minuter.

## Varför AI-agenter förändrar spelet för soloprenörer

AI-teknik 2026 handlar inte längre bara om att få snabba svar på frågor. Det handlar om kompletta arbetsflöden. En AI-agent kan följa instruktioner över tid, arbeta enligt processer du definierar, samarbeta med andra agenter och hantera system och verktyg åt dig.

## Hur AI-agenter används i svenska enmansföretag

### Administration: den största tidsvinnaren
Sortering av mejl och utkast till svar, påminnelser om deadlines, strukturering av kvitton och underlag för bokföring, förberedelse av månadsrapporter.

### Försäljning och prospektering
Identifiera relevanta företag, analysera behov, skriva skräddarsydda kontaktförslag, planera uppföljning och påminnelser.

### Kundservice och kundupplevelse
AI-agenter kan tränas på tidigare projekt, din tonalitet, dina tjänster och dina rutiner. De kan sköta enklare kundfrågor, tidsbokning och statusuppdateringar.

### Research och analys
Sammanfatta hundratals sidor, skapa marknadsbilder och föreslå strategier.

## Så här kan en arbetsdag se ut

### 07.30: Morgonrapport
Rapport med viktiga mejl, kunder som väntar på återkoppling, ekonomisk status och rekommendationer för dagens fokusområden.

### 10.00: Försäljningsunderlag färdigt
Tre nya potentiella kunder, förslag på kontaktmeddelanden och en plan för uppföljning.

### 13.00: Kundprojekt stött av AI
Research, textförslag, strukturering av leveranser och sammanfattningar av videomöten.

### 17.30: Dagens sammanfattning
Vad som är klart, vad som väntar i morgon och eventuella risker.

## Kostnadsanalys

Typisk tidsbesparing: 15 till 28 timmar per vecka. Kostnad: 300 till 2000 kronor per månad beroende på nivå.

## Hur du kommer igång

1. Bestäm ett tydligt syfte
2. Välj 1 till 2 tydliga arbetsflöden att automatisera
3. Skapa en enkel rutin
4. Låt agenten arbeta i bakgrunden
5. Utvärdera varje månad

Om du vill veta mer om hur du kan använda AI som egenföretagare är du välkommen att höra av dig via WhatsApp.`,
};

const allBlogPosts = [...blogPosts, ...generatedBlogPosts];
const allArticleContent = { ...articleContent, ...generatedArticleContent };

/* ═══════════════════════════════════════
   SIMPLE MARKDOWN RENDERER
   ═══════════════════════════════════════ */

function renderMarkdown(md: string): React.ReactNode[] {
  const lines = md.split('\n');
  const elements: React.ReactNode[] = [];
  let listItems: string[] = [];
  let key = 0;

  const flushList = () => {
    if (listItems.length > 0) {
      elements.push(
        <ul key={key++} style={{ paddingLeft: '20px', margin: '12px 0', color: 'rgba(26,26,26,0.7)' }}>
          {listItems.map((li, i) => <li key={i} style={{ marginBottom: '6px', fontSize: '15px', lineHeight: '1.6' }}>{li}</li>)}
        </ul>
      );
      listItems = [];
    }
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (line.startsWith('### ')) {
      flushList();
      elements.push(<h4 key={key++} style={{ fontSize: '16px', fontWeight: 600, margin: '28px 0 8px', color: '#1a1a1a' }}>{line.slice(4)}</h4>);
    } else if (line.startsWith('## ')) {
      flushList();
      elements.push(<h3 key={key++} style={{ fontSize: '20px', fontWeight: 600, margin: '40px 0 12px', color: '#1a1a1a', letterSpacing: '-0.01em' }}>{line.slice(3)}</h3>);
    } else if (line.startsWith('- ')) {
      listItems.push(line.slice(2));
    } else if (line.trim() === '') {
      flushList();
    } else {
      flushList();
      elements.push(<p key={key++} style={{ fontSize: '15px', lineHeight: '1.7', color: 'rgba(26,26,26,0.7)', margin: '12px 0' }}>{line}</p>);
    }
  }
  flushList();
  return elements;
}

/* ═══════════════════════════════════════
   SCROLL REVEAL HOOK
   ═══════════════════════════════════════ */

function useReveal(stagger = 0) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.classList.add('visible');
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add('visible'), stagger);
          observer.unobserve(el);
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [stagger]);
  return ref;
}

/* ═══════════════════════════════════════
   INTRO SEQUENCE
   ═══════════════════════════════════════ */

const IntroSequence: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [phase, setPhase] = useState<0 | 1 | 2 | 3>(0);
  const [typedText, setTypedText] = useState('');
  const [fadeOut, setFadeOut] = useState(false);
  const fullText = 'initierar_agent...';

  useEffect(() => {
    setPhase(1);
    let i = 0;
    const typeInterval = setInterval(() => {
      if (i < fullText.length) { setTypedText(fullText.slice(0, i + 1)); i++; }
      else clearInterval(typeInterval);
    }, 60);
    const t2 = setTimeout(() => setPhase(2), 1000);
    const t3 = setTimeout(() => { setPhase(3); setFadeOut(true); }, 2000);
    const t4 = setTimeout(() => onComplete(), 2800);
    return () => { clearInterval(typeInterval); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); };
  }, [onComplete]);

  return (
    <div className={`intro-overlay ${fadeOut ? 'fade-out' : ''}`}>
      <div className={`intro-dot ${phase === 1 ? 'pulse' : 'steady'}`} />
      <div className={`intro-typing ${phase >= 2 ? 'hidden' : ''}`}>{typedText}</div>
      <div className={`intro-logo ${phase >= 2 ? 'visible' : ''}`}>OpenClaw <span>Sverige</span></div>
      <div className={`intro-line ${phase >= 2 ? 'expanded' : ''}`} />
    </div>
  );
};

/* ═══════════════════════════════════════
   STAR TRANSITION ANIMATION
   ═══════════════════════════════════════ */

declare global {
  interface Window {
    triggerTransition: (url: string, isBlank?: boolean) => void;
  }
}

const StarTransition: React.FC<{ active: boolean; isFast: boolean }> = ({ active, isFast }) => {
  if (!active) return null;
  return (
    <div className={`intro-overlay fade-in ${isFast ? 'fast-anim' : 'slow-anim'}`}>
      <div className="star-container">
        <div className="star-line line1"></div>
        <div className="star-line line2"></div>
        <div className="star-line line3"></div>
        <div className="star-line line4"></div>
      </div>
    </div>
  );
};

/* ═══════════════════════════════════════
   SIMPLE HASH ROUTER
   ═══════════════════════════════════════ */

function useRoute() {
  const [hash, setHash] = useState(window.location.hash);
  useEffect(() => {
    const handler = () => setHash(window.location.hash);
    window.addEventListener('hashchange', handler);
    return () => window.removeEventListener('hashchange', handler);
  }, []);
  return hash;
}

/* ═══════════════════════════════════════
   BLOG LIST PAGE
   ═══════════════════════════════════════ */

const BlogList: React.FC = () => (
  <div className="page">
    <div className="site-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '48px', marginTop: '-48px', gap: '40px', flexWrap: 'wrap', width: '100%', position: 'relative', zIndex: 100, marginBottom: '24px' }}>
      <div className="logo-area" style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }} onClick={(e) => { e.preventDefault(); window.triggerTransition('#/', false); }}>
        <span className="logo-text">OpenClaw</span>
        <div className="logo-dot" />
        <span className="logo-tag">Sverige</span>
      </div>
      <div className="desktop-nav" style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
        <a href="https://wa.me/?text=https://hylten.github.io/OpenClaw-Sverige/" target="_blank" rel="noopener noreferrer">Dela kontakt</a>
        <span className="nav-sep">|</span>
        <a href="/OpenClaw-Sverige/contact.vcf" download>Spara kontakt</a>
        <span className="nav-sep">|</span>
        <a href="#qr" onClick={(e) => { e.preventDefault(); window.dispatchEvent(new Event('showQr')); }}>QR-kod</a>
        <span className="nav-sep">|</span>
        <a 
          href="https://wa.me/46701619978?text=Hej%20Jonas,%20jag%20skulle%20vilja%20veta%20mer%20om%20OpenClaw%20Sverige." 
          target="_blank" 
          rel="noopener noreferrer" 
          className="nav-bold whatsapp-premium"
          style={{ 
            color: '#0dbb41', 
            fontWeight: 700, 
            position: 'relative',
            animation: 'breathePulse 3s ease-in-out infinite'
          }}
        >
          Kontakt
          <span style={{
            position: 'absolute',
            top: '-8px',
            right: '-12px',
            background: '#11d24a',
            color: 'white',
            fontSize: '9px',
            padding: '2px 5px',
            borderRadius: '10px',
            animation: 'badgePulse 1.5s infinite ease-in-out'
          }}>1</span>
        </a>
      </div>
      <button className="mobile-hamburger" onClick={() => { if ((window as any).__openMobileMenu) (window as any).__openMobileMenu(); }} aria-label="Meny">
        <span></span><span></span><span></span>
      </button>
    </div>
      <a 
        href={WHATSAPP_URL} 
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '15px',
          backgroundColor: '#f5f5f5',
          width: '32px',
          height: '32px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
          zIndex: 1000,
          opacity: '0.4',
          transition: 'all 0.3s ease',
          textDecoration: 'none'
        }}
        onMouseEnter={e => e.currentTarget.style.opacity = '1'}
        onMouseLeave={e => e.currentTarget.style.opacity = '0.4'}
      >
        <svg fill="#999" width="16" height="16" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      </a>

    <div style={{ marginTop: '48px', marginBottom: '24px' }}>
      <a href="#" onClick={(e) => { e.preventDefault(); window.triggerTransition('#/', false); }} style={{ fontSize: '13px', color: 'rgba(26,26,26,0.4)', textDecoration: 'none' }}>&larr; Tillbaka till startsidan</a>
    </div>

    <h1 className="headline" style={{ fontSize: '32px', marginTop: '16px' }}>Blogg</h1>
    <p className="subtitle" style={{ marginTop: '12px', marginBottom: '48px' }}>Artiklar om AI-agenter, automatisering och hur svenska företag kan arbeta smartare.</p>

    <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
      {allBlogPosts.map((post, i) => (
        <a
          key={post.slug}
          href={`#/blogg/${post.slug}`}
          onClick={(e) => { e.preventDefault(); window.triggerTransition(`#/blogg/${post.slug}`, false); }}
          style={{
            display: 'block',
            padding: '32px 0',
            borderBottom: '1px solid rgba(26,26,26,0.06)',
            textDecoration: 'none',
            color: 'inherit',
            transition: 'background 200ms ease',
          }}
          onMouseEnter={e => (e.currentTarget.style.background = 'rgba(26,26,26,0.02)')}
          onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
        >
          <div style={{ display: 'flex', gap: '12px', fontSize: '13px', color: 'rgba(26,26,26,0.35)', marginBottom: '8px' }}>
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>
          <h2 style={{ fontSize: '19px', fontWeight: 600, color: '#1a1a1a', marginBottom: '6px', lineHeight: '1.3', letterSpacing: '-0.01em' }}>{post.title}</h2>
          <p style={{ fontSize: '15px', color: 'rgba(26,26,26,0.55)', lineHeight: '1.5' }}>{post.description}</p>
        </a>
      ))}
    </div>

    <footer className="site-footer">
      <div className="footer-content">
        <span>OpenClaw Sverige</span>
        <span className="footer-dot">·</span>
        <a href="#/integritet" className="footer-link">Integritet &amp; Säkerhet</a>
        <span className="footer-dot">·</span>
        <a href="https://hylten.github.io/Alpha/" target="_blank" rel="noopener noreferrer" className="footer-link">Roials Alpha</a>
        <span className="footer-dot">·</span>
        <a href="https://hylten.github.io/Venture-Studio/#apply" target="_blank" rel="noopener noreferrer" className="footer-link">Hyltén Venture Studio</a>
        <span className="footer-dot">·</span>
        <span>© 2025</span>
      </div>
    </footer>
  </div>
);

/* ═══════════════════════════════════════
   BLOG ARTICLE PAGE
   ═══════════════════════════════════════ */

const BlogArticle: React.FC<{ slug: string }> = ({ slug: encodedSlug }) => {
  const slug = decodeURIComponent(encodedSlug);
  const post = allBlogPosts.find(p => p.slug === slug);
  const content = allArticleContent[slug];

  useEffect(() => {
    window.scrollTo(0, 0);
    if (post) {
      // Dynamic title and meta
      document.title = `${post.title} | OpenClaw Sverige`;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) metaDesc.setAttribute('content', post.description);

      // JSON-LD structured data
      const existingLd = document.querySelector('script[data-blog-ld]');
      if (existingLd) existingLd.remove();
      const ldScript = document.createElement('script');
      ldScript.type = 'application/ld+json';
      ldScript.setAttribute('data-blog-ld', 'true');
      ldScript.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": post.title,
        "description": post.description,
        "author": { "@type": "Organization", "name": "OpenClaw Sverige" },
        "publisher": { "@type": "Organization", "name": "OpenClaw Sverige" },
        "datePublished": post.date,
        "dateModified": post.date,
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": `https://hylten.github.io/OpenClaw-Sverige/#/blogg/${post.slug}`
        },
        "inLanguage": "sv-SE"
      });
      document.head.appendChild(ldScript);

      return () => {
        document.title = 'OpenClaw Sverige — Din AI-agent';
        const ld = document.querySelector('script[data-blog-ld]');
        if (ld) ld.remove();
      };
    }
  }, [slug, post]);

  if (!post || !content) {
    return (
      <div className="page" style={{ paddingTop: '48px' }}>
        <p>Artikeln kunde inte hittas.</p>
        <a href="#/blogg" onClick={(e) => { e.preventDefault(); window.triggerTransition('#/blogg', false); }}>Tillbaka till bloggen</a>
      </div>
    );
  }

  const WHATSAPP_URL = `https://wa.me/46701619978?text=${encodeURIComponent('Hej! Jag läste er artikel om "' + post.title + '" och vill veta mer.')}`;

  return (
    <div className="page sticky-header-page" style={{ paddingTop: '48px', marginTop: '-48px' }}>
      {/* Site Header */}
      <div className="site-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '48px', marginTop: '-48px', gap: '40px', flexWrap: 'wrap', width: '100%', position: 'relative', zIndex: 100, marginBottom: '40px' }}>
        <div className="logo-area" style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }} onClick={(e) => { e.preventDefault(); window.triggerTransition('#/', false); }}>
          <span className="logo-text">OpenClaw</span>
          <div className="logo-dot" />
          <span className="logo-tag">Sverige</span>
        </div>
        <div className="desktop-nav" style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
          <a href="https://wa.me/?text=https://hylten.github.io/OpenClaw-Sverige/" target="_blank" rel="noopener noreferrer">Dela kontakt</a>
          <span className="nav-sep">|</span>
          <a href="/OpenClaw-Sverige/contact.vcf" download>Spara kontakt</a>
          <span className="nav-sep">|</span>
          <a href="#qr" onClick={(e) => { e.preventDefault(); window.dispatchEvent(new Event('showQr')); }}>QR-kod</a>
          <span className="nav-sep">|</span>
          <a 
            href="https://wa.me/46701619978?text=Hej%20Jonas,%20jag%20skulle%20vilja%20veta%20mer%20om%20OpenClaw%20Sverige." 
            target="_blank" 
            rel="noopener noreferrer" 
            className="nav-bold"
          >Kontakt</a>
        </div>
        <button className="mobile-hamburger" onClick={() => { if ((window as any).__openMobileMenu) (window as any).__openMobileMenu(); }} aria-label="Meny">
          <span></span><span></span><span></span>
        </button>
      </div>

      <a 
        href={WHATSAPP_URL} 
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: 'fixed',
          bottom: '30px',
          right: '30px',
          backgroundColor: '#f5f5f5',
          width: '36px',
          height: '36px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
          zIndex: 1000,
          opacity: '0.6',
          transition: 'all 0.3s ease',
          textDecoration: 'none'
        }}
        onMouseEnter={e => e.currentTarget.style.opacity = '1'}
        onMouseLeave={e => e.currentTarget.style.opacity = '0.6'}
      >
        <svg fill="#666" width="20" height="20" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      </a>

      <div style={{ marginTop: '48px', marginBottom: '24px' }}>
        <a href="#/blogg" onClick={(e) => { e.preventDefault(); window.triggerTransition('#/blogg', false); }} style={{ fontSize: '13px', color: 'rgba(26,26,26,0.4)', textDecoration: 'none' }}>&larr; Alla artiklar</a>
      </div>

      <article style={{ marginBottom: '80px' }}>
        <div style={{ display: 'flex', gap: '12px', fontSize: '13px', color: 'rgba(26,26,26,0.35)', marginBottom: '16px' }}>
          <span>{post.date}</span>
          <span>·</span>
          <span>{post.readTime}</span>
        </div>
        <h1 style={{ fontSize: '32px', fontWeight: 600, lineHeight: '1.2', color: '#1a1a1a', letterSpacing: '-0.025em', marginBottom: '32px' }}>{post.title}</h1>
        <div style={{ borderTop: '1px solid rgba(26,26,26,0.06)', paddingTop: '32px' }}>
          {renderMarkdown(content)}
        </div>
      </article>

      <div style={{ textAlign: 'center', padding: '48px 0', borderTop: '1px solid rgba(26,26,26,0.06)' }}>
        <p style={{ fontSize: '17px', color: 'rgba(26,26,26,0.55)', marginBottom: '20px' }}>Har du frågor om det du läste?</p>
        <a href={WHATSAPP_URL} className="btn-whatsapp" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex' }}>
          Skriv på WhatsApp <span className="btn-arrow">→</span>
        </a>
      </div>

      <footer className="site-footer">
        <div className="footer-content">
          <span>OpenClaw Sverige</span>
          <span className="footer-dot">·</span>
          <a href="#/blogg" className="footer-link">Blogg</a>
          <span className="footer-dot">·</span>
          <a href="#/integritet" className="footer-link">Integritet &amp; Säkerhet</a>
          <span className="footer-dot">·</span>
          <a href="https://hylten.github.io/Alpha/" target="_blank" rel="noopener noreferrer" className="footer-link">Roials Alpha</a>
          <span className="footer-dot">·</span>
          <a href="https://hylten.github.io/Venture-Studio/#apply" target="_blank" rel="noopener noreferrer" className="footer-link">Hyltén Venture Studio</a>
          <span className="footer-dot">·</span>
          <span>© 2025</span>
        </div>
      </footer>
    </div>
  );
};

/* ═══════════════════════════════════════
   LANDING PAGE
   ═══════════════════════════════════════ */

const LandingPage: React.FC = () => {
  const WHATSAPP_NUMBER = '46701619978';
  const WHATSAPP_MESSAGE = 'Hej! Jag är intresserad av OpenClaw.';

  const logoRef = useReveal(0);
  const headlineRef = useReveal(100);
  const subtitleRef = useReveal(200);
  const card1Ref = useReveal(0);
  const card2Ref = useReveal(150);
  const card3Ref = useReveal(300);
  const varforRef = useReveal(0);
  const ctaHeadingRef = useReveal(0);
  const ctaBodyRef = useReveal(100);
  const ctaBtnRef = useReveal(200);
  const ctaSubRef = useReveal(300);

  const capabilities = [
    { title: 'Rutinarbete försvinner', body: 'Mejl, schemaläggning, kundtjänst, research. Allt som tar tid men inte kräver ditt omdöme.' },
    { title: 'Autonom exekvering', body: 'Ge den ett mål. Den planerar stegen, genomför dem och rapporterar tillbaka.' },
    { title: 'Din data. Ditt valv.', body: 'OpenClaw körs i en privat, skyddad miljö. Ingen tredje part ser din information.' },
  ];
  const cardRefs = [card1Ref, card2Ref, card3Ref];

  return (
    <div className="page">
      <div className="site-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '48px', marginTop: '-48px', gap: '40px', flexWrap: 'wrap', width: '100%', position: 'relative', zIndex: 100, marginBottom: '24px' }}>
        <div ref={logoRef} className="logo-area reveal" style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }} onClick={(e) => { e.preventDefault(); window.triggerTransition('#/', false); }}>
          <span className="logo-text">OpenClaw</span>
          <div className="logo-dot" />
          <span className="logo-tag">Sverige</span>
        </div>
        <div className="desktop-nav" style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
          <a href="https://wa.me/?text=https://hylten.github.io/OpenClaw-Sverige/" target="_blank" rel="noopener noreferrer">Dela kontakt</a>
          <span className="nav-sep">|</span>
          <a href="/OpenClaw-Sverige/contact.vcf" download>Spara kontakt</a>
          <span className="nav-sep">|</span>
          <a href="#qr" onClick={(e) => { e.preventDefault(); window.dispatchEvent(new Event('showQr')); }}>QR-kod</a>
          <span className="nav-sep">|</span>
          <a href="https://wa.me/46701619978?text=Hej%20Jonas,%20jag%20skulle%20vilja%20veta%20mer%20om%20OpenClaw%20Sverige." target="_blank" rel="noopener noreferrer" className="nav-bold">Kontakt</a>
        </div>
        <button className="mobile-hamburger" onClick={() => { if ((window as any).__openMobileMenu) (window as any).__openMobileMenu(); }} aria-label="Meny">
          <span></span><span></span><span></span>
        </button>
      </div>
      <h1 ref={headlineRef} className="headline reveal">En AI-agent som arbetar. Inte väntar.</h1>
      <p ref={subtitleRef} className="subtitle reveal">
        Vanliga AI-verktyg svarar när du frågar. OpenClaw agerar på egen hand, dygnet runt, med dina instruktioner som grund.
      </p>
      <div className="capabilities">
        {capabilities.map((cap, i) => (
          <div key={i} ref={cardRefs[i]} className="capability reveal">
            <h3>{cap.title}</h3>
            <p>{cap.body}</p>
          </div>
        ))}
      </div>
      <div className="varfor-section">
        <div ref={varforRef} className="varfor-inner reveal">
          <h4 className="varfor-heading">Varför genom oss</h4>
          <p className="varfor-body">
            Att installera OpenClaw själv kräver servrar, konfiguration och teknisk kunskap. Vi levererar den färdigkonfigurerad, redo att använda direkt.
          </p>
        </div>
      </div>
      <div className="cta-section">
        <h2 ref={ctaHeadingRef} className="cta-heading reveal">Kontakta mig direkt</h2>
        <p ref={ctaBodyRef} className="cta-body reveal">Har du frågor, eller vill du komma igång? Skriv till mig på WhatsApp.</p>
        <div ref={ctaBtnRef} className="reveal">
          <a href={WHATSAPP_URL} className="btn-whatsapp" target="_blank" rel="noopener noreferrer">
            Skriv på WhatsApp <span className="btn-arrow">→</span>
          </a>
        </div>
        <p ref={ctaSubRef} className="cta-subtext reveal">Personlig kontakt. Inga formulär. Inga dolda avgifter.</p>
      </div>

      {/* Blog preview */}
      <div style={{ marginTop: '80px', paddingTop: '48px', borderTop: '1px solid rgba(26,26,26,0.06)' }}>
        <h3 style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(26,26,26,0.4)', marginBottom: '24px' }}>Från bloggen</h3>
        {allBlogPosts.slice(0, 3).map(post => (
          <a
            key={post.slug}
            href={`#/blogg/${post.slug}`}
            style={{ display: 'block', padding: '20px 0', borderBottom: '1px solid rgba(26,26,26,0.04)', textDecoration: 'none', color: 'inherit' }}
          >
            <div style={{ display: 'flex', gap: '8px', fontSize: '12px', color: 'rgba(26,26,26,0.3)', marginBottom: '4px' }}>
              <span>{post.date}</span><span>·</span><span>{post.readTime}</span>
            </div>
            <span style={{ fontSize: '15px', fontWeight: 600, color: '#1a1a1a' }}>{post.title}</span>
          </a>
        ))}
        <a href="#/blogg" style={{ display: 'inline-block', marginTop: '16px', fontSize: '14px', color: 'rgba(26,26,26,0.5)', textDecoration: 'none', fontWeight: 600 }}>
          Alla artiklar →
        </a>
      </div>

      <footer className="site-footer">
        <div className="footer-content">
          <span>OpenClaw Sverige</span>
          <span className="footer-dot">·</span>
          <a href="#/blogg" className="footer-link">Blogg</a>
          <span className="footer-dot">·</span>
          <a href="#/integritet" className="footer-link">Integritet &amp; Säkerhet</a>
          <span className="footer-dot">·</span>
          <a href="https://hylten.github.io/Alpha/" target="_blank" rel="noopener noreferrer" className="footer-link">Roials Alpha</a>
          <span className="footer-dot">·</span>
          <a href="https://hylten.github.io/Venture-Studio/#apply" target="_blank" rel="noopener noreferrer" className="footer-link">Hyltén Venture Studio</a>
          <span className="footer-dot">·</span>
          <span>© 2025</span>
        </div>
      </footer>
    </div>
  );
};

/* ═══════════════════════════════════════
   PRIVACY PAGE
   ═══════════════════════════════════════ */

const PrivacyPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page" style={{ paddingTop: '48px' }}>
      <div className="flex justify-between items-start pt-[48px] -mt-[48px]">
        <div className="logo-area" style={{ paddingTop: '48px', cursor: 'pointer' }} onClick={(e) => { e.preventDefault(); window.triggerTransition('#/', false); }}>
          <span className="logo-text">OpenClaw</span>
          <div className="logo-dot" />
          <span className="logo-tag">Sverige</span>
        </div>
        <div className="desktop-nav" style={{ marginTop: '54px' }}>
          <a href="https://wa.me/?text=https://hylten.github.io/OpenClaw-Sverige/" target="_blank" rel="noopener noreferrer">Dela kontakt</a>
          <span className="nav-sep">|</span>
          <a href="/OpenClaw-Sverige/contact.vcf" download>Spara kontakt</a>
          <span className="nav-sep">|</span>
          <a href="#qr" onClick={(e) => { e.preventDefault(); window.dispatchEvent(new Event('showQr')); }}>QR-kod</a>
          <span className="nav-sep">|</span>
          <a href="https://wa.me/46701619978?text=Hej%20Jonas,%20jag%20skulle%20vilja%20veta%20mer%20om%20OpenClaw%20Sverige." target="_blank" rel="noopener noreferrer" className="nav-bold">Kontakt</a>
        </div>
        <button className="mobile-hamburger" onClick={() => { if ((window as any).__openMobileMenu) (window as any).__openMobileMenu(); }} aria-label="Meny">
          <span></span><span></span><span></span>
        </button>
      </div>

      <div style={{ marginTop: '48px', marginBottom: '24px' }}>
        <a href="#" style={{ fontSize: '13px', color: 'rgba(26,26,26,0.4)', textDecoration: 'none' }}>&larr; Tillbaka</a>
      </div>

      <article style={{ marginBottom: '80px', maxWidth: '640px' }}>
        <h1 style={{ fontSize: '32px', fontWeight: 600, color: '#1a1a1a', marginBottom: '24px', letterSpacing: '-0.02em' }}>Integritet &amp; Säkerhet</h1>
        
        <h3 style={{ fontSize: '20px', fontWeight: 600, color: '#1a1a1a', marginTop: '40px', marginBottom: '12px' }}>GDPR och lokal data</h3>
        <p style={{ fontSize: '15px', color: 'rgba(26,26,26,0.7)', lineHeight: '1.7', marginBottom: '16px' }}>
          För oss på OpenClaw Sverige är din dataintegritet prioriterad. Våra system och AI-agenter driftsätts med lokal-först arkitektur (local-first), vilket minimerar risken att företagsdata läcker utanför din kontroll. All eventuell personuppgiftshantering vilar på den allmänna dataskyddsförordningens (GDPR) krav på transparens, minimering och datakontroll. Din konfidentiella information används aldrig för extern modellträning. Detta ger dig full suveränitet över affärskritiska flöden.
        </p>

        <h3 style={{ fontSize: '20px', fontWeight: 600, color: '#1a1a1a', marginTop: '40px', marginBottom: '12px' }}>Kontakt</h3>
        <p style={{ fontSize: '15px', color: 'rgba(26,26,26,0.7)', lineHeight: '1.7', marginBottom: '16px' }}>
          Har du frågor angående vår personuppgiftshantering, säkerhet eller hur vi tillämpar GDPR inom dina AI-arbetsflöden, tveka inte att kontakta oss direkt på:
        </p>
        <p style={{ fontSize: '15px', color: '#1a1a1a', fontWeight: 500 }}>
          <a href="mailto:jonas@roials.co" style={{ color: 'inherit', textDecoration: 'underline' }}>jonas@roials.co</a>
        </p>
      </article>

      <footer className="site-footer">
        <div className="footer-content">
          <span>OpenClaw Sverige</span>
          <span className="footer-dot">·</span>
          <span>© 2025</span>
        </div>
      </footer>
    </div>
  );
};

/* ═══════════════════════════════════════
   MAIN APP WITH ROUTING
   ═══════════════════════════════════════ */

const App: React.FC = () => {
  const [introComplete, setIntroComplete] = useState(false);
  const [skipIntro, setSkipIntro] = useState(false);
  const [transState, setTransState] = useState({ active: false, isFast: false });
  const route = useRoute();

  useEffect(() => {
    const alreadySeen = sessionStorage.getItem('openclaw_intro_seen');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (alreadySeen || reducedMotion) { setSkipIntro(true); setIntroComplete(true); }

    window.triggerTransition = (url, isBlank = false) => {
      setTransState({ active: true, isFast: true });
      setTimeout(() => {
        if (isBlank) { window.open(url, '_blank'); } else { window.location.href = url; window.location.reload(); }
        setTransState({ active: false, isFast: false });
      }, 1500);
    };
  }, []);

  const handleIntroComplete = useCallback(() => {
    sessionStorage.setItem('openclaw_intro_seen', '1');
    setIntroComplete(true);
  }, []);

  useEffect(() => {
    if (!skipIntro && !introComplete && route === '') {
      const timer = setTimeout(() => {
        handleIntroComplete();
      }, 2800);
      return () => clearTimeout(timer);
    }
  }, [skipIntro, introComplete, route, handleIntroComplete]);

  // Route matching
  const blogArticleMatch = route.match(/^#\/blogg\/(.+)$/);

  const [showQrModal, setShowQrModal] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  useEffect(() => {
    const h = () => setShowQrModal(true);
    window.addEventListener("showQr", h as any);
    return () => window.removeEventListener("showQr", h as any);
  }, []);

  // Expose mobile menu trigger globally so child components can use it
  (window as any).__openMobileMenu = () => setShowMobileMenu(true);

  return (
    <>
      <StarTransition active={transState.active} isFast={transState.isFast} />
      
      {/* Mobile Menu Drawer */}
      {showMobileMenu && (
        <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(255,255,255,0.97)', zIndex: 9998, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '32px' }} onClick={() => setShowMobileMenu(false)}>
          <button style={{ position: 'absolute', top: '24px', right: '24px', color: 'rgba(26,26,26,0.5)', cursor: 'pointer', border: 'none', background: 'none', fontSize: '20px' }} onClick={() => setShowMobileMenu(false)}>✕</button>
          <a href="https://wa.me/?text=https://hylten.github.io/OpenClaw-Sverige/" target="_blank" rel="noopener noreferrer" style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '6px', color: 'rgba(26,26,26,0.5)', textDecoration: 'none' }}>Share contact</a>
          <a href="/OpenClaw-Sverige/contact.vcf" download style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '6px', color: 'rgba(26,26,26,0.5)', textDecoration: 'none' }}>Save contact</a>
          <button onClick={() => { setShowMobileMenu(false); setShowQrModal(true); }} style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '6px', color: 'rgba(26,26,26,0.5)', border: 'none', background: 'none', cursor: 'pointer' }}>QR Code</button>
          <a href="https://wa.me/46701619978?text=Hej%20Jonas,%20jag%20skulle%20vilja%20veta%20mer%20om%20OpenClaw%20Sverige." target="_blank" rel="noopener noreferrer" style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '6px', color: '#1a1a1a', textDecoration: 'none', fontWeight: 'bold' }}>Contact</a>
          <div style={{ width: '48px', height: '1px', background: 'rgba(26,26,26,0.1)', margin: '8px 0' }}></div>
          <a href="#/blogg" onClick={() => setShowMobileMenu(false)} style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '6px', color: 'rgba(26,26,26,0.4)', textDecoration: 'none' }}>Blogg</a>
          <a href="#/integritet" onClick={() => setShowMobileMenu(false)} style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '6px', color: 'rgba(26,26,26,0.4)', textDecoration: 'none' }}>Integritet</a>
        </div>
      )}

      {showQrModal && (
        <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.9)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px', backdropFilter: 'blur(4px)' }} onClick={() => setShowQrModal(false)}>
           <div style={{ backgroundColor: '#fff', padding: '32px', borderRadius: '4px', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)', position: 'relative' }} onClick={e => e.stopPropagation()}>
              <button style={{ position: 'absolute', top: '16px', right: '16px', color: 'rgba(26,26,26,0.5)', cursor: 'pointer', border: 'none', background: 'none', fontSize: '16px' }} onClick={() => setShowQrModal(false)}>✕</button>
              <h3 style={{ textAlign: 'center', color: 'rgba(26,26,26,0.8)', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '12px', fontWeight: 'bold', marginBottom: '24px' }}>OpenClaw Sverige</h3>
              <div style={{ backgroundColor: '#fff', padding: '8px' }}>
                 <img src="https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=https://hylten.github.io/OpenClaw-Sverige/" alt="QR Code" />
              </div>
           </div>
        </div>
      )}

      {!skipIntro && !introComplete && route === '' && (
        <StarTransition active={true} isFast={false} />
      )}

      {route === '#/blogg' ? (
        <BlogList />
      ) : route === '#/integritet' ? (
        <PrivacyPage />
      ) : blogArticleMatch ? (
        <BlogArticle slug={blogArticleMatch[1]} />
      ) : (
        <LandingPage />
      )}
      {/* 
          Global floating button removed from here. 
          Discrete icons added directly inside BlogList and BlogArticle as requested.
      */}

      <style>{`
        @keyframes breathePulse {
          0% { text-shadow: 0 0 0px rgba(17,210,74,0.0); box-shadow: 0 0 0px rgba(17,210,74,0.0); }
          50% { text-shadow: 0 0 8px rgba(17,210,74,0.4); box-shadow: 0 0 20px rgba(17,210,74,0.4); }
          100% { text-shadow: 0 0 0px rgba(17,210,74,0.0); box-shadow: 0 0 0px rgba(17,210,74,0.0); }
        }
        @keyframes badgePulse {
          0% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.2); opacity: 1; }
          100% { transform: scale(1); opacity: 0.8; }
        }
      `}</style>
    </>
  );
};

export default App;
