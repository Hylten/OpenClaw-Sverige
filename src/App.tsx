import React from 'react';
import { motion } from 'framer-motion';

const Reveal = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay, ease: [0.21, 0, 0.07, 1] }}
    viewport={{ once: true }}
  >
    {children}
  </motion.div>
);

const App: React.FC = () => {
  const WHATSAPP_NUMBER = "46701619978"; // Using existing contact for consistency
  const WHATSAPP_MESSAGE = "Hej! Jag är intresserad av OpenClaw.";
  const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <div className="flex-col gap-12">
      {/* 1. HERO */}
      <section className="flex-col gap-8 pt-32 md:pt-48">
        <Reveal>
          <div className="flex items-center gap-2 mb-4">
            <span className="semibold text-lg tracking-tight">OpenClaw</span>
            <span className="text-sm muted tracking-wide opacity-50 px-2 py-0.5 border border-black/10 rounded-sm">Sverige</span>
          </div>
        </Reveal>
        
        <Reveal delay={0.1}>
          <h1 className="text-4xl">En AI-agent som arbetar. Inte väntar.</h1>
        </Reveal>
        
        <Reveal delay={0.2}>
          <p className="text-lg muted max-w-lg">
            Vanliga AI-verktyg svarar när du frågar. OpenClaw agerar på egen hand — dygnet runt, med dina instruktioner som grund.
          </p>
        </Reveal>
        
        <Reveal delay={0.3}>
          <div className="flex items-center gap-3 py-4">
            <div className="pulse-dot" />
            <span className="text-[11px] uppercase tracking-[0.2em] semibold opacity-30">Active_Signal_Established</span>
          </div>
        </Reveal>
      </section>

      {/* 2. THREE CAPABILITIES */}
      <section id="capabilities" className="grid md:grid-cols-3 gap-12 py-32 border-t border-black/[0.04]">
        {[
          {
            title: "Rutinarbete försvinner",
            body: "Mejl, schemaläggning, kundtjänst, research — allt som tar tid men inte kräver ditt omdöme."
          },
          {
            title: "Autonom exekvering",
            body: "Ge den ett mål. Den planerar stegen, genomför dem och rapporterar tillbaka."
          },
          {
            title: "Din data. Ditt valv.",
            body: "OpenClaw körs i en privat, skyddad miljö. Ingen tredje part ser din information."
          }
        ].map((capability, i) => (
          <Reveal key={i} delay={i * 0.1}>
            <div className={`flex-col gap-4 ${i < 2 ? 'md:border-r border-black/[0.08] pr-8' : ''}`}>
              <h3 className="text-[18px] semibold">{capability.title}</h3>
              <p className="text-[15px] muted leading-relaxed">
                {capability.body}
              </p>
            </div>
          </Reveal>
        ))}
      </section>

      {/* 3. HOW IT WORKS */}
      <section className="bg-black/[0.02] -mx-6 px-6 py-12 rounded-sm border-y border-black/[0.03]">
        <Reveal>
          <div className="flex-col gap-4 max-w-xl">
            <h4 className="text-[13px] uppercase tracking-[0.1em] semibold opacity-60">Varför genom oss</h4>
            <p className="text-[17px] leading-relaxed">
              Att installera OpenClaw själv kräver servrar, konfiguration och teknisk kunskap. Vi levererar den färdigkonfigurerad — redo att använda direkt.
            </p>
          </div>
        </Reveal>
      </section>

      {/* 4. CTA — WHATSAPP */}
      <section id="contact" className="flex-col gap-12 py-32 items-center text-center">
        <Reveal>
          <div className="flex-col gap-4 mb-8">
            <h2 className="text-3xl semibold">Kontakta mig direkt</h2>
            <p className="muted text-lg">
              Har du frågor, eller vill du komma igång — skriv till mig på WhatsApp.
            </p>
          </div>
        </Reveal>
        
        <Reveal delay={0.2}>
          <div className="flex-col gap-4 w-full max-w-[340px] mx-auto">
            <a href={WHATSAPP_URL} className="btn-whatsapp">
              Skriv på WhatsApp →
            </a>
            <p className="text-sm muted italic">
              Personlig kontakt. Inga formulär. Inga dolda avgifter.
            </p>
          </div>
        </Reveal>
      </section>

      {/* 5. FOOTER */}
      <footer className="py-16 border-t border-black/[0.04] text-[12px] muted flex flex-col items-center gap-4 text-center">
        <div className="flex items-center gap-2">
          <span>OpenClaw Sverige</span>
          <span className="opacity-30">·</span>
          <a href="#" className="hover:text-black transition-colors">Integritet & Säkerhet</a>
          <span className="opacity-30">·</span>
          <span>© 2025</span>
        </div>
      </footer>
    </div>
  );
};

export default App;
