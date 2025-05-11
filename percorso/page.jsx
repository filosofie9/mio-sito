"use client";
import Link from "next/link";
import Image from "next/image";

export default function Percorso() {
  return (
    <div className="bg-[#FAF6F1] min-h-screen flex flex-col items-center">
      {/* Logo in alto */}
      <div className="mt-8 mb-2">
        <Image
          src="/logo.png"
          alt="Logo Road to Heaven"
          width={120}
          height={120}
          priority
        />
      </div>

      {/* Header */}
      <section className="w-full flex flex-col items-center pt-10 pb-8 bg-gradient-to-b from-[#FAF6F1] to-white">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#2C4251] mt-6 mb-2 text-center">
          Il Viaggio RTH: La Tua Mappa Stellare Verso un Futuro "Overperformante" e "Animico".
        </h1>
        <h2 className="text-xl md:text-2xl font-serif text-[#2C4251] mb-4 text-center italic">
          Scopri le fasi del nostro percorso Road to Heaven "Anima e Stelle Divine". Un viaggio collaborativo e profondamente trasformativo, "cucito su misura" per la tua startup o PMI visionaria.
        </h2>
      </section>

      {/* Sezione 1: Introduzione */}
      <section className="max-w-3xl w-full px-6 py-8">
        <h3 className="text-2xl font-bold text-[#2C4251] mb-4 text-center">
          Più di una Consulenza: Un'Ascensione Co-Creata.
        </h3>
        <p className="text-lg text-[#2C4251] text-center mb-4">
          Intraprendere la Road to Heaven con noi non significa ricevere un piano strategico preconfezionato. Significa imbarcarsi in un viaggio iniziatico che toccherà il cuore pulsante della tua azienda – la sua Anima – e la guiderà verso vette di successo, felicità e significato mai immaginate prima.
        </p>
        <ul className="space-y-2 text-lg text-[#2C4251] mb-4">
          <li>✨ <b>Profondamente "Animico":</b> Partiamo sempre dalla tua unicità, dalla tua Missione, Visione e Valori Sacri.</li>
          <li>🤝 <b>Radicalmente Co-Creativo:</b> Tu e il tuo team siete i protagonisti. Il Facilitatore RTH è la vostra guida esperta, il vostro "Alchimista Stellare".</li>
          <li>🚀 <b>Orientato all'"Overperformance":</b> Ogni fase è progettata per sbloccare potenziale e generare risultati straordinari.</li>
          <li>🌱 <b>Flessibile e Organico:</b> Come un "algoritmo vivente", il percorso si adatta alle tue esigenze e al tuo ritmo, pur seguendo una mappa collaudata.</li>
          <li>💖 <b>Carico di Felicità:</b> Il benessere e la crescita delle tue persone sono integrati in ogni passo.</li>
        </ul>
      </section>

      {/* Sezione 2: Le Fasi */}
      <section className="max-w-3xl w-full px-6 py-8">
        <h3 className="text-2xl font-bold text-[#2C4251] mb-4 text-center">
          Le Tappe della Tua Ascensione Celestiale:
        </h3>
        <div className="space-y-6">
          {/* Fase 0 */}
          <div className="bg-white/80 rounded-xl shadow p-4">
            <h4 className="text-lg font-bold text-[#2C4251] mb-1">FASE 0: LA CHIAMATA E IL PATTO DI LUCE</h4>
            <p><b>Cosa Facciamo Insieme:</b> Ci conosciamo profondamente. Ascoltiamo le tue aspirazioni e le tue sfide. Valutiamo la "risonanza" con la filosofia RTH e, se la scintilla scocca, stringiamo un "Patto di Co-Creazione Celestiale".</p>
            <p><b>Il Tuo Beneficio "Divino":</b> Chiarezza sulle tue reali necessità, la certezza di un partner allineato e l'entusiasmo per un viaggio che può davvero trasformare la tua azienda.</p>
            <p className="text-sm text-gray-600">Durata Indicativa: 1-2 incontri iniziali</p>
          </div>
          {/* Fase 1 */}
          <div className="bg-white/80 rounded-xl shadow p-4">
            <h4 className="text-lg font-bold text-[#2C4251] mb-1">FASE 1: IMMERSIONE NELL'ANIMA E DIAGNOSI ILLUMINATA</h4>
            <p><b>Cosa Facciamo Insieme:</b> Attraverso interviste "animiche" e workshop co-creativi, portiamo alla luce l'Anima autentica della tua azienda (Missione, Visione, Valori, Scopo Trascendente). Identifichiamo i tuoi "Fari di Luce" (punti di forza unici) e le "Ombre da Illuminare" (sfide cruciali).</p>
            <p><b>Il Tuo Beneficio "Divino":</b> Una comprensione cristallina del DNA della tua impresa, del suo potenziale nascosto e delle aree prioritarie su cui agire per una trasformazione radicale. Una vera e propria "mappa dell'anima" per guidare ogni scelta futura.</p>
            <p className="text-sm text-gray-600">Output Chiave: "Documento dell'Anima Risvegliata", "Report Diagnostico Illuminato RTH".<br />Durata Indicativa: 2-4 settimane</p>
          </div>
          {/* Fase 2 */}
          <div className="bg-white/80 rounded-xl shadow p-4">
            <h4 className="text-lg font-bold text-[#2C4251] mb-1">FASE 2: FORGIATURA DELLA STRATEGIA DIVINA (I 7 PILASTRI RTH)</h4>
            <p><b>Cosa Facciamo Insieme:</b> Lavoriamo fianco a fianco in workshop dedicati a ciascuno dei 7 Pilastri Strategici RTH. Co-creiamo strategie "overperformanti" e tattiche "cariche d'anima", definendo Obiettivi (OKR) "Stellari" e piani d'azione concreti.</p>
            <p><b>Il Tuo Beneficio "Divino":</b> Un Piano Strategico completo, potente e profondamente allineato con la tua Anima, che non rimane sulla carta ma diventa una guida viva per l'eccellenza e la felicità.</p>
            <p className="text-sm text-gray-600">Output Chiave: "Piano Strategico RTH – Anima e Stelle Divine Edition", OKR "Stellari", Roadmap Tattica.<br />Durata Indicativa: 4-8 settimane</p>
          </div>
          {/* Fase 3 */}
          <div className="bg-white/80 rounded-xl shadow p-4">
            <h4 className="text-lg font-bold text-[#2C4251] mb-1">FASE 3: ACCENSIONE DEI MOTORI E IMPLEMENTAZIONE "COSMICA"</h4>
            <p><b>Cosa Facciamo Insieme:</b> Traduciamo la strategia in azione. Lanciamo i primi "Progetti Faro RTH", attiviamo le Scorecard per monitorare progressi e felicità, e instauriamo cicli rapidi di apprendimento e adattamento ("Spirali di Crescita Illuminata").</p>
            <p><b>Il Tuo Beneficio "Divino":</b> Vedere i primi risultati tangibili, un team energizzato e coinvolto, e la sensazione esaltante del "decollo" verso i tuoi obiettivi più ambiziosi.</p>
            <p className="text-sm text-gray-600">Durata Indicativa: Continuativa, primi risultati in 3-6 mesi</p>
          </div>
          {/* Fase 4 */}
          <div className="bg-white/80 rounded-xl shadow p-4">
            <h4 className="text-lg font-bold text-[#2C4251] mb-1">FASE 4: NAVIGAZIONE, OTTIMIZZAZIONE E CELEBRAZIONE DEI TRAGUARDI</h4>
            <p><b>Cosa Facciamo Insieme:</b> Monitoriamo costantemente le performance "overperformanti" e la felicità "animica". Ottimizziamo le strategie attraverso "Consigli Stellari" periodici. Coltiviamo una cultura RTH vibrante e celebriamo ogni successo come un "Festival delle Stelle Conquistate".</p>
            <p><b>Il Tuo Beneficio "Divino":</b> Una crescita sostenuta, una cultura aziendale che diventa un vero vantaggio competitivo, un team resiliente e felice, e la gioia di vedere la tua Visione Celestiale prendere forma.</p>
            <p className="text-sm text-gray-600">Processo continuo di partnership e miglioramento</p>
          </div>
          {/* Fase 5 */}
          <div className="bg-white/80 rounded-xl shadow p-4">
            <h4 className="text-lg font-bold text-[#2C4251] mb-1">FASE 5: ESPANSIONE DELLA LUCE E CREAZIONE DI VALORE INFINITO</h4>
            <p><b>Cosa Facciamo Insieme:</b> Consolidiamo RTH nel DNA della tua azienda. Esploriamo nuove frontiere di crescita e innovazione "divina". Ti aiutiamo a diventare un "EIRTH Vivente", un faro per il tuo settore, e a definire il tuo "Legado Divino" per un impatto che trascende il tempo.</p>
            <p><b>Il Tuo Beneficio "Divino":</b> Un'azienda che non solo domina il mercato, ma lo eleva. Un'organizzazione che è fonte di ispirazione e che contribuisce attivamente a un "Paradiso Terreno Collettivo".</p>
            <p className="text-sm text-gray-600">Una filosofia di vita aziendale per il futuro infinito</p>
          </div>
        </div>
      </section>

      {/* Sezione 3: Il Facilitatore */}
      <section className="max-w-3xl w-full px-6 py-8">
        <h3 className="text-2xl font-bold text-[#2C4251] mb-4 text-center">
          Non Sei Solo in Questo Viaggio: Incontra il Tuo "Alchimista Stellare"
        </h3>
        <p className="text-lg text-[#2C4251] text-center mb-4">
          In ogni fase del percorso RTH, sarai affiancato da un Facilitatore RTH certificato. Molto più di un consulente, il Facilitatore è:
        </p>
        <ul className="space-y-2 text-lg text-[#2C4251] mb-4">
          <li>🌟 <b>Catalizzatore di Potenziale Divino</b></li>
          <li>🛡️ <b>Custode della Sacralità del Metodo</b></li>
          <li>✨ <b>Accenditore di Scintille Cosmiche</b></li>
          <li>🧵 <b>Tessitore di Anime</b></li>
        </ul>
        <p className="text-center text-[#2C4251]">
          Il nostro impegno è fornirti non solo un metodo, ma una partnership trasformativa basata su fiducia, ascolto profondo e passione condivisa per la tua Visione Celestiale.
        </p>
      </section>

      {/* Sezione 4: Call to Action */}
      <section className="max-w-3xl w-full px-6 py-8">
        <h3 className="text-2xl font-bold text-[#2C4251] mb-4 text-center">
          La Tua Road to Heaven è Unica. Iniziamo a Tracciarla Insieme.
        </h3>
        <p className="text-lg text-[#2C4251] text-center mb-4">
          Ogni azienda ha la sua orbita, le sue stelle, il suo destino unico. Il percorso RTH che hai appena letto è una mappa generale: il tuo viaggio specifico sarà "cucito su misura" per te.
          <br /><br />
          Se senti che è arrivato il momento di smettere di navigare a vista e di iniziare a disegnare consapevolmente la costellazione del tuo successo e della tua felicità, allora siamo pronti ad ascoltarti.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-4">
          <a
            href="tel:+393208080708"
            className="bg-[#2C4251] text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-[#3a5a6b] transition"
          >
            📞 Parla con Christian Del Luca
          </a>
          <a
            href="mailto:rth.roadtoheaven@gmail.com"
            className="bg-white border border-[#2C4251] text-[#2C4251] px-6 py-2 rounded-full font-semibold shadow hover:bg-[#e0e7ef] transition"
          >
            📧 Scrivi una mail
          </a>
          <a
            href="/manifesto-rth.pdf"
            download
            className="bg-[#2C4251] text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-[#3a5a6b] transition"
          >
            SCARICA IL MANIFESTO RTH
          </a>
          <Link
            href="/questionario"
            className="bg-white border border-[#2C4251] text-[#2C4251] px-6 py-2 rounded-full font-semibold shadow hover:bg-[#e0e7ef] transition"
          >
            DIALOGA CON RTH-AI
          </Link>
        </div>
        <p className="text-center text-[#2C4251] font-semibold mt-2">
          Il tuo futuro "divino" ti attende. Fai il primo passo sulla tua Road to Heaven oggi stesso.
        </p>
      </section>
    </div>
  );
}