import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="bg-[#FAF6F1] min-h-screen flex flex-col items-center">
      {/* Logo */}
      <div className="mt-8 mb-2">
        <Image src="/logo.png" alt="Logo Road to Heaven" width={120} height={120} priority />
      </div>
      {/* Hero Section */}
      <section className="w-full flex flex-col items-center pt-10 pb-8 bg-gradient-to-b from-[#FAF6F1] to-white">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#2C4251] text-center mb-2">
          La Tua Azienda Ha un'Anima. È Ora di Svelare i Suoi Superpoteri.
        </h1>
        <h2 className="text-xl md:text-2xl font-serif text-[#2C4251] mb-4 text-center italic">
          Road to Heaven (RTH) è il percorso strategico-operativo che unisce successo esponenziale e felicità autentica, guidando la tua azienda a manifestare i suoi "Superpoteri Aziendali RTH™" e a intraprendere il ciclo SADS per diventare un'azienda supereroe.
        </h2>
        <a
          href="/manifesto-rth.pdf"
          download
          className="bg-[#2C4251] text-white px-8 py-4 rounded-full text-lg font-semibold shadow hover:bg-[#3a5a6b] transition mb-2 mt-4"
        >
          SCARICA IL MANIFESTO DEI SUPERPOTERI RTH™
        </a>
        <p className="text-[#2C4251] text-center mt-2 mb-4">
          <span className="font-semibold">Scopri i 7 Superpoteri Aziendali</span> che la tua impresa può sviluppare e come RTH guida il tuo percorso eroico.
        </p>
      </section>
      {/* Manifesto Section */}
      <section className="max-w-3xl w-full px-6 py-10">
        <h3 className="text-2xl font-bold text-[#2C4251] mb-4 text-center">
          Il Nostro Credo: I 7 Superpoteri RTH™ per un'Azienda Celestiale
        </h3>
        <ul className="space-y-3 text-lg text-[#2C4251] mb-4">
          <li>✨ <b>CHIAREZZA DI ROTTA CELESTIALE™:</b> La tua Visione diventa una forza che plasma la realtà.</li>
          <li>😊 <b>ALCHIMIA DI FELICITÀ PRODUTTIVA™:</b> La gioia del tuo team si trasforma nel tuo più grande vantaggio competitivo.</li>
          <li>🚀 <b>SINTONIA EMPATICA DI MERCATO™:</b> Connessioni autentiche con i clienti che generano lealtà infinita.</li>
          <li>🤝 <b>FLUSSO D'ECCELLENZA ARMONIOSA™:</b> Processi così fluidi ed efficienti da sembrare magia.</li>
          <li>💡 <b>PROSPERITÀ ETICA RIGENERANTE™:</b> Abbondanza che nutre l'azienda, le persone e il pianeta.</li>
          <li>🌍 <b>GENIO INNOVATIVO PERPETUO™:</b> Un flusso inesauribile di idee che ridefiniscono il futuro.</li>
          <li>💖 <b>MAESTRIA EVOLUTIVA COSMICA™:</b> Il potere di crescere, adattarsi e prosperare all'infinito, come un vero eroe.</li>
        </ul>
        <p className="text-center text-[#2C4251] font-semibold mb-2">
          Questo è solo l'inizio del tuo viaggio eroico. Nel Manifesto completo, scoprirai come RTH ti guida, passo dopo passo nel tuo ciclo SADS (Super Algoritmo di Sviluppo Supereroico), a sbloccare questi e altri poteri.
        </p>
        <a
          href="/manifesto-rth.pdf"
          download
          className="text-[#2C4251] underline font-semibold block text-center mt-2"
        >
          Scarica ora il tuo Manifesto dei Superpoteri RTH™ completo!
        </a>
      </section>
      {/* Autovalutazione */}
      <section className="max-w-3xl w-full px-6 py-10">
        <h3 className="text-2xl font-bold text-[#2C4251] mb-4 text-center">
          Sei Pronto a Sbloccare i Tuoi Superpoteri?
        </h3>
        <ul className="space-y-3 text-lg text-[#2C4251] mb-4">
          <li>Senti che la tua azienda potrebbe fare e essere molto di più, ma non sai come sbloccare quel potenziale "supereroico"?</li>
          <li>Desideri un successo che sia una manifestazione della tua Anima più autentica e dei tuoi talenti unici?</li>
          <li>Sogni un team che co-crei con la forza di una costellazione di eroi?</li>
          <li>Vuoi un metodo che ti alleni a sviluppare capacità straordinarie e durature, non solo a implementare tattiche temporanee?</li>
        </ul>
        <p className="text-center text-[#2C4251] font-semibold mb-2">
          Se la tua risposta è SÌ, la tua chiamata all'avventura eroica SADS è iniziata. RTH è qui per essere il tuo mentore e la tua guida.
        </p>
      </section>
      {/* Contatto Diretto */}
      <section className="max-w-3xl w-full px-6 py-10">
        <h3 className="text-2xl font-bold text-[#2C4251] mb-4 text-center">
          Parliamone. Il Tuo Percorso per Sviluppare i "Superpoteri RTH™" Inizia con una Conversazione.
        </h3>
        <p className="text-lg text-[#2C4251] text-center mb-6">
          Sono <b>Christian Del Luca</b>, fondatore di Road to Heaven. Ho dedicato la mia vita ad aiutare imprenditori come te a trasformare le loro visioni più audaci in realtà "cariche di felicità" e a svelare i loro incredibili "Superpoteri Aziendali". Credo profondamente nel potenziale "eroico" della tua azienda e sono qui per aiutarti a tracciare la mappa del tuo ciclo SADS personale.
        </p>
        <div className="flex flex-col items-center space-y-2 mb-4">
          <div>
            📞 <b>Chiamami per una prima chiacchierata "eroica":</b> <a href="tel:+393208080708" className="text-[#2C4251] underline">+39 320 8080708</a>
          </div>
          <div>
            📧 <b>Email:</b> <a href="mailto:rth.roadtoheaven@gmail.com" className="text-[#2C4251] underline">rth.roadtoheaven@gmail.com</a>
          </div>
        </div>
        <p className="text-center text-[#2C4251] text-sm">
          La prima conversazione è il tuo "primo passo nell'allenamento eroico". Nessuna pressione, solo la possibilità di aprire una porta verso un futuro straordinario.
        </p>
      </section>
      {/* Footer */}
      <footer className="w-full py-6 bg-[#2C4251] text-white text-center text-sm mt-8">
        © {currentYear} Road to Heaven di Christian Del Luca. Tutti i diritti riservati.
        <div className="mt-2">
          <Link href="/privacy" className="underline mr-2">Privacy Policy</Link>
          <Link href="/cookie" className="underline">Cookie Policy</Link>
        </div>
      </footer>
    </div>
  );
}
