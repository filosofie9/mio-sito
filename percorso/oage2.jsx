import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

export default function Percorso() {
  return (
    <div className="bg-[#FAF6F1] min-h-screen flex flex-col items-center">
      <Head>
        <title>Il Tuo Percorso RTH – Superpoteri Aziendali</title>
        <meta name="description" content="Il viaggio Road to Heaven per sviluppare i Superpoteri Aziendali RTH™ e il ciclo SADS." />
      </Head>
      {/* Logo */}
      <div className="mt-8 mb-2">
        <Image src="/logo.png" alt="Logo Road to Heaven" width={120} height={120} priority />
      </div>
      {/* Hero Section */}
      <section className="w-full flex flex-col items-center pt-10 pb-8 bg-gradient-to-b from-[#FAF6F1] to-white">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#2C4251] text-center mb-2">
          Il Viaggio RTH: La Tua Mappa Stellare per Forgiare i "Superpoteri" della Tua Azienda.
        </h1>
        <h2 className="text-xl md:text-2xl font-serif text-[#2C4251] mb-4 text-center italic">
          Scopri le tappe del nostro percorso Road to Heaven "Anima e Stelle Divine". Un viaggio collaborativo e profondamente trasformativo, "cucito su misura" per attivare il tuo personale "Super Algoritmo di Crescita Eroica" (SADS) e manifestare i tuoi unici "Superpoteri Aziendali RTH™".
        </h2>
      </section>
      {/* Introduzione al Percorso */}
      <section className="max-w-3xl w-full px-6 py-10">
        <h3 className="text-2xl font-bold text-[#2C4251] mb-4 text-center">
          Più di una Consulenza: Il Tuo Addestramento da Supereroe Aziendale
        </h3>
        <p className="text-lg text-[#2C4251] text-center mb-6">
          Intraprendere la Road to Heaven con noi non significa ricevere un piano strategico preconfezionato. Significa imbarcarsi in un viaggio iniziatico SADS che risveglierà l'Anima della tua azienda e la guiderà a sviluppare capacità straordinarie – i tuoi Superpoteri RTH™ – per raggiungere vette di successo, felicità e significato mai immaginate prima.
        </p>
        <ul className="space-y-3 text-lg text-[#2C4251] mb-4">
          <li>✨ <b>Profondamente "Animico":</b> Partiamo sempre dalla tua unicità, la base di ogni autentico potere.</li>
          <li>🤝 <b>Radicalmente Co-Creativo:</b> Tu e il tuo team siete gli eroi. Il Facilitatore RTH è il vostro "mentore SADS", il vostro "Allenatore di Eroi Celesti".</li>
          <li>🚀 <b>Orientato all'"Overperformance Divina":</b> Ogni fase è progettata per sbloccare potenziale e generare risultati da "supereroe".</li>
          <li>🌱 <b>Un Ciclo SADS Personalizzato:</b> Il percorso si adatta al tuo ritmo e alle tue sfide, guidandoti attraverso le fasi di sviluppo di capacità, talenti e poteri.</li>
          <li>💖 <b>Carico di Felicità Eroica:</b> Il benessere e la crescita delle tue persone sono il carburante per i vostri superpoteri.</li>
        </ul>
      </section>
      {/* Fasi del Viaggio SADS */}
      <section className="max-w-3xl w-full px-6 py-10">
        <h3 className="text-2xl font-bold text-[#2C4251] mb-4 text-center">
          Le Fasi del Tuo Viaggio SADS con RTH – Una Spirale di Potenziamento Divino
        </h3>
        <div className="space-y-6 text-lg text-[#2C4251]">
          <div>
            <b>FASE 1: IMMERSIONE NELL'ANIMA E DIAGNOSI ILLUMINATA</b> <span className="italic">(Attivazione SADS Fasi 1 & 2: Raccolta Dati e Analisi Profonda)</span><br />
            Iniziamo il tuo "viaggio eroico" con una profonda "Raccolta e Notazione" di ciò che sei: interviste "animiche" e workshop co-creativi per svelare l'Anima autentica della tua azienda. Poi, passiamo all'"Analisi e Comprensione Profonda", identificando i tuoi "Fari di Luce" (potenziali talenti) e le "Ombre da Illuminare" (sfide per la tua crescita eroica).<br />
            <b>Il Tuo Beneficio "Supereroico":</b> Una mappa chiara del tuo attuale "stato eroico", dei tuoi poteri latenti e delle aree dove il tuo "allenamento SADS" dovrà concentrarsi per primi.<br />
            <b>Output Chiave:</b> "Documento dell'Anima Risvegliata", "Report Diagnostico Illuminato RTH" (che include i primi obiettivi del tuo ciclo SADS).
          </div>
          {/* Le altre fasi possono essere aggiunte qui seguendo la stessa logica */}
        </div>
      </section>
      {/* Ruolo del Facilitatore */}
      <section className="max-w-3xl w-full px-6 py-10">
        <h3 className="text-2xl font-bold text-[#2C4251] mb-4 text-center">
          Non Sei Solo in Questa Avventura: Incontra il Tuo "Allenatore di Eroi Aziendali RTH™"
        </h3>
        <p className="text-lg text-[#2C4251] text-center mb-6">
          Il Facilitatore RTH è il tuo partner strategico nell'attivare il tuo Super Algoritmo di Crescita Eroica (SADS). Ti aiuta a navigare ogni fase, dalla costruzione delle capacità di base alla manifestazione dei tuoi Superpoteri RTH™ più distintivi.
        </p>
      </section>
      {/* Call to Action Finale */}
      <section className="max-w-3xl w-full px-6 py-10">
        <h3 className="text-2xl font-bold text-[#2C4251] mb-4 text-center">
          La Tua Azienda è Pronta per Diventare un Supereroe del Mercato?
        </h3>
        <p className="text-lg text-[#2C4251] text-center mb-6">
          Ogni impresa ha in sé il seme di una grandezza straordinaria. Road to Heaven, con il suo approccio "Anima e Stelle Divine" e il suo metodo SADS per lo sviluppo dei Superpoteri Aziendali™, è la via per far germogliare quel seme e trasformarlo in una forza inarrestabile.<br /><br />
          Se senti che è il momento di andare oltre il business ordinario e di intraprendere un percorso di crescita eroica che sveli i veri poteri della tua organizzazione, contattaci.
        </p>
        <div className="flex flex-col items-center space-y-2 mb-4">
          <div>
            📞 <b>Parla con Christian Del Luca per iniziare il tuo "allenamento da Supereroe RTH":</b> <a href="tel:+393208080708" className="text-[#2C4251] underline">+39 320 8080708</a>
          </div>
          <div>
            📧 <b>Condividi i "superpoteri" che sogni per la tua azienda:</b> <a href="mailto:rth.roadtoheaven@gmail.com" className="text-[#2C4251] underline">rth.roadtoheaven@gmail.com</a>
          </div>
          <div>
            <a href="/manifesto-rth.pdf" download className="bg-[#2C4251] text-white px-8 py-3 rounded-full text-lg font-semibold shadow hover:bg-[#3a5a6b] transition mt-2">SCARICA IL MANIFESTO DEI SUPERPOTERI RTH™</a>
          </div>
          <div>
            <Link href="/questionario" className="bg-[#FAF6F1] border-2 border-[#2C4251] text-[#2C4251] px-8 py-3 rounded-full text-lg font-semibold shadow hover:bg-[#e5e0db] transition mt-2">DIALOGA CON L'ARCHITETTO STRATEGICO RTH-AI</Link>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="w-full py-6 bg-[#2C4251] text-white text-center text-sm mt-8">
        © {new Date().getFullYear()} Road to Heaven di Christian Del Luca. Tutti i diritti riservati.
        <div className="mt-2">
          <Link href="/privacy" className="underline mr-2">Privacy Policy</Link>
          <Link href="/cookie" className="underline">Cookie Policy</Link>
        </div>
      </footer>
    </div>
  );
}
