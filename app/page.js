import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-[#FAF6F1] min-h-screen flex flex-col items-center">
      {/* Hero Section */}
      <div className="w-full flex flex-col items-center pt-10 pb-8 bg-gradient-to-b from-[#FAF6F1] to-white">
        <Image src="/logo.png" alt="Logo Road to Heaven" width={140} height={140} priority />
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#2C4251] mt-6 mb-2 text-center">
          La Tua Azienda è Pronta per il Paradiso?
        </h1>
        <h2 className="text-xl md:text-2xl font-serif text-[#2C4251] mb-4 text-center italic">
          Road to Heaven (RTH) – Anima e Stelle Divine Edition
        </h2>
        <p className="text-lg text-[#2C4251] max-w-2xl text-center mb-6">
          Road to Heaven (RTH) è il percorso rivoluzionario per Startup e PMI visionarie che aspirano a una crescita esponenziale, creativa, sostenibile e carica di autentica felicità.
        </p>
        <p className="text-base text-[#2C4251] max-w-2xl text-center mb-6">
          Abbiamo creato RTH "Anima e Stelle Divine Edition" perché crediamo che il vero successo nasca dall'unione tra la strategia più brillante e l'anima più profonda della tua azienda. Non devi scegliere tra profitto e scopo, tra performance e benessere. Puoi avere tutto.
        </p>
        <Link href="/contatti">
          <button className="bg-[#2C4251] text-white px-8 py-3 rounded-full text-lg font-semibold shadow hover:bg-[#3a5a6b] transition">
            INIZIA IL TUO VIAGGIO CELESTIALE
          </button>
        </Link>
      </div>

      {/* Sezione 2: Il Problema/Aspirazione */}
      <div className="max-w-3xl w-full px-6 py-12">
        <h3 className="text-2xl font-bold text-[#2C4251] mb-4 text-center">
          Stai Cercando Qualcosa di Più della Solita Crescita?
        </h3>
        <ul className="space-y-3 text-lg text-[#2C4251] mb-4">
          <li>✨ Senti che la tua azienda ha un potenziale inespresso, un' <b>anima</b> che fatica a manifestarsi?</li>
          <li>🌱 Desideri una crescita esponenziale che sia anche sostenibile e significativa?</li>
          <li>🌟 Sogni un team appassionato, coeso e genuinamente felice, dove ogni persona brilla come una stella?</li>
          <li>🏆 Vuoi costruire un business che non solo abbia successo, ma che lasci un'eredità di valore infinito?</li>
          <li>💔 Sei stanco di framework che ignorano il cuore e l'anima della tua impresa?</li>
        </ul>
        <p className="text-center text-[#2C4251] font-semibold mb-2">
          Se hai risposto sì anche a una sola di queste domande, sei nel posto giusto.
        </p>
      </div>

      {/* Sezione 3: La Soluzione RTH */}
      <div className="w-full bg-white/80 py-12 px-6 flex flex-col items-center">
        <h3 className="text-2xl font-bold text-[#2C4251] mb-4 text-center">
          Road to Heaven: Dove Anima e Strategia Danzano Insieme.
        </h3>
        <p className="text-lg text-[#2C4251] max-w-2xl text-center mb-6">
          Road to Heaven (RTH) è un framework strategico-operativo unico, co-creato e potenziato nella sua edizione "Anima e Stelle Divine". Non ti offriamo formule magiche, ma un percorso trasformativo e personalizzato che integra:
        </p>
        <ul className="space-y-2 text-lg text-[#2C4251] mb-4 max-w-2xl">
          <li>✨ <b>L'Anima Aziendale:</b> Riscopriamo insieme la tua Missione Profonda, Visione Celestiale, Valori Sacri e Scopo Trascendente.</li>
          <li>🚀 <b>Strategie "Overperformanti":</b> Attingiamo ai 7 Pilastri RTH e alla saggezza di oltre 180+ Esempi Iconici (EIRTH) per risultati straordinari.</li>
          <li>😊 <b>Felicità come KPI:</b> Mettiamo il benessere e la realizzazione delle tue persone al centro, perché un team felice è un team invincibile.</li>
          <li>🤝 <b>Co-Creazione Guidata:</b> Ti accompagniamo passo dopo passo, con Facilitatori RTH che sono veri "catalizzatori di potenziale divino".</li>
          <li>💡 <b>Innovazione Celestiale (con IA Etica):</b> Sblocchiamo la tua capacità di innovare in modo radicale e di utilizzare le nuove tecnologie con saggezza.</li>
        </ul>
        <p className="text-center text-[#2C4251] font-semibold mb-4">
          Con RTH, la tua azienda non si limita a crescere. Si eleva. Diventa un faro di successo, significato e felicità nel tuo settore.
        </p>
        <Link href="/questionario">
          <button className="bg-[#2C4251] text-white px-8 py-3 rounded-full text-lg font-semibold shadow hover:bg-[#3a5a6b] transition">
            ESPLORA I 7 PILASTRI DI RTH
          </button>
        </Link>
      </div>

      {/* Sezione 4: Target */}
      <div className="max-w-3xl w-full px-6 py-12">
        <h3 className="text-2xl font-bold text-[#2C4251] mb-4 text-center">
          RTH è Forgiato per Pionieri come Te.
        </h3>
        <p className="text-lg text-[#2C4251] text-center mb-4">
          Abbiamo una passione speciale per:
        </p>
        <ul className="space-y-2 text-lg text-[#2C4251] mb-4 text-center">
          <li>🌠 <b>Startup Visionarie:</b> Pronte a costruire un DNA "stellare" fin dal primo giorno.</li>
          <li>🌱 <b>PMI Coraggiose:</b> Desiderose di evolvere, innovare e infondere nuova linfa "animica" nel loro business.</li>
          <li>💫 <b>Imprenditori e Leader "Illuminati":</b> Che credono in un business che nutre l'anima e il mondo.</li>
        </ul>
        <p className="text-center text-[#2C4251] font-semibold">
          Se la tua azienda ha un cuore che batte forte e stelle negli occhi, RTH è il tuo alleato cosmico.
        </p>
      </div>

      {/* Sezione 5: Invito Finale */}
      <div className="w-full flex flex-col items-center py-12 bg-gradient-to-t from-[#FAF6F1] to-white">
        <h3 className="text-2xl font-bold text-[#2C4251] mb-4 text-center">
          Il Tuo Paradiso Aziendale ti Aspetta. Inizia Oggi la Tua Ascensione.
        </h3>
        <p className="text-lg text-[#2C4251] max-w-2xl text-center mb-6">
          Non accontentarti di un successo ordinario. La tua azienda è nata per brillare, per fare la differenza, per essere una fonte di gioia e abbondanza. Road to Heaven è la mappa e la bussola per questo viaggio straordinario.<br />
          Sei pronto a trasformare la tua visione in una realtà "overperformante" e "carica di felicità"?
        </p>
        <Link href="/contatti">
          <button className="bg-[#2C4251] text-white px-8 py-3 rounded-full text-lg font-semibold shadow hover:bg-[#3a5a6b] transition">
            INIZIA IL TUO VIAGGIO CON RTH
          </button>
        </Link>
      </div>
    </div>
  );
}