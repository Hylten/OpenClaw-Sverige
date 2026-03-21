import React, { useEffect, useRef, useState, useCallback } from 'react';
import { blogPosts, BlogPost } from './blogData';

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
    <div className="logo-area" style={{ cursor: 'pointer' }} onClick={() => { window.location.hash = ''; }}>
      <span className="logo-text">OpenClaw</span>
      <div className="logo-dot" />
      <span className="logo-tag">Sverige</span>
    </div>

    <div style={{ marginTop: '48px', marginBottom: '24px' }}>
      <a href="#" style={{ fontSize: '13px', color: 'rgba(26,26,26,0.4)', textDecoration: 'none' }}>&larr; Tillbaka till startsidan</a>
    </div>

    <h1 className="headline" style={{ fontSize: '32px', marginTop: '16px' }}>Blogg</h1>
    <p className="subtitle" style={{ marginTop: '12px', marginBottom: '48px' }}>Artiklar om AI-agenter, automatisering och hur svenska företag kan arbeta smartare.</p>

    <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
      {blogPosts.map((post, i) => (
        <a
          key={post.slug}
          href={`#/blogg/${post.slug}`}
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
        <a href="#" className="footer-link">Integritet &amp; Säkerhet</a>
        <span className="footer-dot">·</span>
        <span>© 2025</span>
      </div>
    </footer>
  </div>
);

/* ═══════════════════════════════════════
   BLOG ARTICLE PAGE
   ═══════════════════════════════════════ */

const BlogArticle: React.FC<{ slug: string }> = ({ slug }) => {
  const post = blogPosts.find(p => p.slug === slug);
  const content = articleContent[slug];

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
        <a href="#/blogg">Tillbaka till bloggen</a>
      </div>
    );
  }

  const WHATSAPP_URL = `https://wa.me/46701619978?text=${encodeURIComponent('Hej! Jag läste er artikel om "' + post.title + '" och vill veta mer.')}`;

  return (
    <div className="page">
      <div className="logo-area" style={{ cursor: 'pointer' }} onClick={() => { window.location.hash = ''; }}>
        <span className="logo-text">OpenClaw</span>
        <div className="logo-dot" />
        <span className="logo-tag">Sverige</span>
      </div>

      <div style={{ marginTop: '48px', marginBottom: '24px' }}>
        <a href="#/blogg" style={{ fontSize: '13px', color: 'rgba(26,26,26,0.4)', textDecoration: 'none' }}>&larr; Alla artiklar</a>
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
  const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

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
      <div ref={logoRef} className="logo-area reveal">
        <span className="logo-text">OpenClaw</span>
        <div className="logo-dot" />
        <span className="logo-tag">Sverige</span>
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
        {blogPosts.slice(0, 3).map(post => (
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
          <a href="#" className="footer-link">Integritet &amp; Säkerhet</a>
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
  const route = useRoute();

  useEffect(() => {
    const alreadySeen = sessionStorage.getItem('openclaw_intro_seen');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (alreadySeen || reducedMotion) { setSkipIntro(true); setIntroComplete(true); }
  }, []);

  const handleIntroComplete = useCallback(() => {
    sessionStorage.setItem('openclaw_intro_seen', '1');
    setIntroComplete(true);
  }, []);

  // Route matching
  const blogArticleMatch = route.match(/^#\/blogg\/(.+)$/);

  return (
    <>
      {!skipIntro && !introComplete && route === '' && (
        <IntroSequence onComplete={handleIntroComplete} />
      )}

      {route === '#/blogg' ? (
        <BlogList />
      ) : blogArticleMatch ? (
        <BlogArticle slug={blogArticleMatch[1]} />
      ) : (
        <LandingPage />
      )}
    </>
  );
};

export default App;
