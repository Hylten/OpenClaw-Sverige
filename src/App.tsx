import React, { useEffect, useRef, useState, useCallback } from 'react';

/* ═══════════════════════════════════════
   SCROLL REVEAL HOOK
   ═══════════════════════════════════════ */

function useReveal(stagger = 0) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // prefers-reduced-motion check
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.classList.add('visible');
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.classList.add('visible');
          }, stagger);
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
   INTRO SEQUENCE COMPONENT
   ═══════════════════════════════════════ */

const IntroSequence: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [phase, setPhase] = useState<0 | 1 | 2 | 3>(0);
  const [typedText, setTypedText] = useState('');
  const [fadeOut, setFadeOut] = useState(false);
  const fullText = 'initierar_agent...';

  useEffect(() => {
    // Phase 0 → 1: Start boot
    setPhase(1);

    // Typing effect
    let i = 0;
    const typeInterval = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typeInterval);
      }
    }, 60);

    // Phase 2: Identity (at 1s)
    const phase2Timer = setTimeout(() => {
      setPhase(2);
    }, 1000);

    // Phase 3: Reveal (at 2s)
    const phase3Timer = setTimeout(() => {
      setPhase(3);
      setFadeOut(true);
    }, 2000);

    // Complete (at 3s)
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 2800);

    return () => {
      clearInterval(typeInterval);
      clearTimeout(phase2Timer);
      clearTimeout(phase3Timer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div className={`intro-overlay ${fadeOut ? 'fade-out' : ''}`}>
      <div className={`intro-dot ${phase === 1 ? 'pulse' : 'steady'}`} />
      
      <div className={`intro-typing ${phase >= 2 ? 'hidden' : ''}`}>
        {typedText}
      </div>

      <div className={`intro-logo ${phase >= 2 ? 'visible' : ''}`}>
        OpenClaw <span>Sverige</span>
      </div>

      <div className={`intro-line ${phase >= 2 ? 'expanded' : ''}`} />
    </div>
  );
};

/* ═══════════════════════════════════════
   MAIN APP
   ═══════════════════════════════════════ */

const App: React.FC = () => {
  const [introComplete, setIntroComplete] = useState(false);
  const [skipIntro, setSkipIntro] = useState(false);

  const WHATSAPP_NUMBER = '46701619978';
  const WHATSAPP_MESSAGE = 'Hej! Jag är intresserad av OpenClaw.';
  const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  useEffect(() => {
    // Skip intro if already seen this session, or if reduced motion preferred
    const alreadySeen = sessionStorage.getItem('openclaw_intro_seen');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (alreadySeen || reducedMotion) {
      setSkipIntro(true);
      setIntroComplete(true);
    }
  }, []);

  const handleIntroComplete = useCallback(() => {
    sessionStorage.setItem('openclaw_intro_seen', '1');
    setIntroComplete(true);
  }, []);

  // Scroll reveal refs with stagger
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
    {
      title: 'Rutinarbete försvinner',
      body: 'Mejl, schemaläggning, kundtjänst, research — allt som tar tid men inte kräver ditt omdöme.',
    },
    {
      title: 'Autonom exekvering',
      body: 'Ge den ett mål. Den planerar stegen, genomför dem och rapporterar tillbaka.',
    },
    {
      title: 'Din data. Ditt valv.',
      body: 'OpenClaw körs i en privat, skyddad miljö. Ingen tredje part ser din information.',
    },
  ];

  const cardRefs = [card1Ref, card2Ref, card3Ref];

  return (
    <>
      {/* Intro Sequence */}
      {!skipIntro && !introComplete && (
        <IntroSequence onComplete={handleIntroComplete} />
      )}

      {/* Page Content */}
      <div className="page">
        {/* Logo / Header */}
        <div ref={logoRef} className="logo-area reveal">
          <span className="logo-text">OpenClaw</span>
          <div className="logo-dot" />
          <span className="logo-tag">Sverige</span>
        </div>

        {/* Headline */}
        <h1 ref={headlineRef} className="headline reveal">
          En AI-agent som arbetar. Inte väntar.
        </h1>

        {/* Subtitle */}
        <p ref={subtitleRef} className="subtitle reveal">
          Vanliga AI-verktyg svarar när du frågar. OpenClaw agerar på egen hand — dygnet runt, med dina instruktioner som grund.
        </p>

        {/* Three Capability Cards */}
        <div className="capabilities">
          {capabilities.map((cap, i) => (
            <div
              key={i}
              ref={cardRefs[i]}
              className="capability reveal"
            >
              <h3>{cap.title}</h3>
              <p>{cap.body}</p>
            </div>
          ))}
        </div>

        {/* Varför genom oss */}
        <div className="varfor-section">
          <div ref={varforRef} className="varfor-inner reveal">
            <h4 className="varfor-heading">Varför genom oss</h4>
            <p className="varfor-body">
              Att installera OpenClaw själv kräver servrar, konfiguration och teknisk kunskap. Vi levererar den färdigkonfigurerad — redo att använda direkt.
            </p>
          </div>
        </div>

        {/* CTA / WhatsApp */}
        <div className="cta-section">
          <h2 ref={ctaHeadingRef} className="cta-heading reveal">
            Kontakta mig direkt
          </h2>
          <p ref={ctaBodyRef} className="cta-body reveal">
            Har du frågor, eller vill du komma igång — skriv till mig på WhatsApp.
          </p>
          <div ref={ctaBtnRef} className="reveal">
            <a href={WHATSAPP_URL} className="btn-whatsapp" target="_blank" rel="noopener noreferrer">
              Skriv på WhatsApp <span className="btn-arrow">→</span>
            </a>
          </div>
          <p ref={ctaSubRef} className="cta-subtext reveal">
            Personlig kontakt. Inga formulär. Inga dolda avgifter.
          </p>
        </div>

        {/* Footer */}
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
    </>
  );
};

export default App;
