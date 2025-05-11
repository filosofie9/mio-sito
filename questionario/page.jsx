"use client";
import { useState } from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

const steps = [
  // Step 0: Intro
  { type: "intro" },
  // Step 1: Pilastro 1
  {
    title: "Scopri la Tua Rotta Celestiale",
    questions: [
      {
        label: "Quali sono le 3 qualità più luminose della tua azienda?",
        type: "text",
        key: "qualita_azienda",
      },
      {
        label: "Qual è il problema più grande che la tua azienda risolve per i suoi clienti?",
        type: "text",
        key: "problema_cliente",
      },
      {
        label: "Quanto senti che la tua azienda ha uno Scopo Trascendente chiaro e condiviso? (1-10)",
        type: "scale",
        key: "scopo_trascendente",
      },
      {
        label: "Scrivi un motto 'animico' per la tua azienda oggi:",
        type: "text",
        key: "motto_animico",
      },
      {
        label: "Quale valore ritieni più sacro per la tua impresa?",
        type: "select",
        key: "valore_sacro",
        options: [
          "Integrità",
          "Innovazione",
          "Crescita",
          "Felicità",
          "Sostenibilità",
          "Empatia",
          "Altro",
        ],
      },
    ],
  },
  // Step 2: Pilastro 2
  {
    title: "La Tua Costellazione Umana",
    questions: [
      {
        label: "Descrivi la cultura attuale della tua azienda:",
        type: "text",
        key: "cultura_aziendale",
      },
      {
        label: "Qual è la sfida più grande nel motivare e rendere felice il tuo team?",
        type: "text",
        key: "sfida_team",
      },
      {
        label: "Quanto i tuoi leader incarnano una leadership 'illuminata'? (1-10)",
        type: "scale",
        key: "leadership_illuminata",
      },
      {
        label: "Quale iniziativa per la felicità organizzativa ti sembra più urgente?",
        type: "select",
        key: "iniziativa_felicita",
        options: [
          "Riconoscimento e premi",
          "Formazione e crescita",
          "Flessibilità oraria",
          "Team building",
          "Benessere psicologico",
          "Altro",
        ],
      },
    ],
  },
  // Step 3: Pilastri 3 & 4
  {
    title: "Obiettivi e Unicità Eroica",
    questions: [
      {
        label: "Qual è il tuo obiettivo di crescita più ambizioso per i prossimi 3 anni?",
        type: "text",
        key: "obiettivo_crescita",
      },
      {
        label: "Cosa rende la tua offerta unica rispetto ai concorrenti?",
        type: "text",
        key: "unicita_offerta",
      },
      {
        label: "Chi è il tuo 'cliente anima gemella' ideale?",
        type: "text",
        key: "cliente_ideale",
      },
      {
        label: "Quanto la tua comunicazione di marketing riflette l'anima della tua azienda? (1-10)",
        type: "scale",
        key: "marketing_anima",
      },
    ],
  },
  // Step 4: Pilastri 5 & 6
  {
    title: "Energia e Sostenibilità",
    questions: [
      {
        label: "Qual è il principale collo di bottiglia nei tuoi processi operativi?",
        type: "text",
        key: "collo_bottiglia",
      },
      {
        label: "Quanto le tue decisioni finanziarie sono guidate da principi etici e di sostenibilità? (1-10)",
        type: "scale",
        key: "finanza_etica",
      },
      {
        label: "Se avessi risorse illimitate, quale aspetto della tua azienda potenzieresti per primo?",
        type: "text",
        key: "risorse_illimitate",
      },
    ],
  },
  // Step 5: Pilastro 7
  {
    title: "Innovazione e Futuro Eroico",
    questions: [
      {
        label: "Qual è stata l'ultima vera innovazione introdotta dalla tua azienda?",
        type: "text",
        key: "ultima_innovazione",
      },
      {
        label: "Quanto la tua azienda è aperta a idee audaci e fuori dagli schemi? (1-10)",
        type: "scale",
        key: "apertura_innovazione",
      },
      {
        label: "Come vedi il ruolo dell'Intelligenza Artificiale per il futuro della tua impresa?",
        type: "text",
        key: "ruolo_ai",
      },
    ],
  },
];

export default function Questionario() {
  const [step, setStep] = useState(0);
  const [risposte, setRisposte] = useState({});
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState("");

  const handleChange = (key, value) => {
    setRisposte((prev) => ({ ...prev, [key]: value }));
  };

  const handleNext = () => {
    setStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setStep((prev) => prev - 1);
  };

  const handleSubmit = async () => {
    setLoading(true);
    setOutput("");
    const prompt = `Sei RTH-AI, l'architetto strategico animico. Ecco le risposte dell'utente al questionario Road to Heaven (RTH):\n${Object.entries(risposte).map(([k, v]) => `${k}: ${v}`).join("\n")}\nGenera una 'Scintilla Strategica RTH' personalizzata secondo la traccia: 1. Temi animici emergenti, 2. Motto animico, 3. Valori sacri, 4. Pilastri chiave e motivazione, 5. Idee tattiche, 6. Spunti per la felicità organizzativa, 7. Domanda celestiale per riflessione, 8. Invito al contatto umano.`;
    const res = await fetch("/api/ai", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ domanda: prompt }),
    });
    const data = await res.json();
    setOutput(data.risposta);
    setLoading(false);
    setStep(steps.length + 1); // Vai all'output
  };

  return (
    <div className="bg-[#FAF6F1] min-h-screen flex flex-col items-center">
      <Head>
        <title>Questionario Superpoteri RTH-AI</title>
        <meta name="description" content="Questionario strategico AI per scoprire i Superpoteri Aziendali RTH™ e il ciclo SADS." />
      </Head>
      {/* Logo */}
      <div className="mt-8 mb-2">
        <Image src="/logo.png" alt="Logo Road to Heaven" width={120} height={120} priority />
      </div>
      {/* Step 0: Intro */}
      {step === 0 && (
        <section className="max-w-2xl w-full px-6 py-8 text-[#2C4251]">
          <h1 className="text-4xl font-bold text-center mb-4">Scopri i Tuoi Superpoteri Aziendali con RTH-AI</h1>
          <h2 className="text-xl text-center mb-6 italic">Rispondi alle domande ispirate al metodo Road to Heaven e al ciclo SADS. L'IA RTH ti aiuterà a svelare i tuoi "Superpoteri Aziendali RTH™" e a tracciare il primo passo del tuo viaggio eroico.</h2>
          <ul className="list-disc ml-6 mb-4">
            <li><b>Rispondi con autenticità:</b> Più le tue risposte saranno sincere, più l'output sarà potente.</li>
            <li><b>L'IA RTH elabora:</b> L'intelligenza artificiale, addestrata sul framework RTH, analizzerà i tuoi input e li trasformerà in una "Scintilla Strategica" personalizzata.</li>
            <li><b>Ricevi la tua Scintilla Eroica:</b> Un documento con profilo animico, superpoteri chiave, idee tattiche e spunti per la felicità organizzativa.</li>
          </ul>
          <div className="bg-yellow-100 border-l-4 border-yellow-400 p-4 mb-4 rounded text-[#2C4251]">
            <b>Disclaimer:</b> Questa "Scintilla Strategica RTH" è un potente punto di partenza, generato dall'IA per ispirare la tua crescita eroica. Per un vero allenamento da supereroe, affidati anche a un Facilitatore RTH umano.
          </div>
          <button onClick={handleNext} className="bg-[#2C4251] text-white px-8 py-3 rounded-full text-lg font-semibold shadow hover:bg-[#3a5a6b] transition w-full mt-4">INIZIA IL TUO ALLENAMENTO DA SUPEREROE RTH-AI</button>
        </section>
      )}
      {/* Step 1-5: Questionario a step */}
      {step > 0 && step <= 5 && (
        <section className="max-w-2xl w-full px-6 py-8 text-[#2C4251]">
          <h2 className="text-2xl font-bold mb-4 text-center">{steps[step].title}</h2>
          <form onSubmit={e => { e.preventDefault(); handleNext(); }}>
            {steps[step].questions.map((q, idx) => (
              <div key={q.key} className="mb-6">
                <label className="block mb-2 font-semibold">{q.label}</label>
                {q.type === "text" && (
                  <textarea
                    className="border-2 border-[#2C4251] rounded-lg p-3 w-full text-lg bg-white text-[#2C4251]"
                    rows={2}
                    value={risposte[q.key] || ""}
                    onChange={e => handleChange(q.key, e.target.value)}
                    required
                  />
                )}
                {q.type === "scale" && (
                  <div className="flex items-center gap-2">
                    {[...Array(10)].map((_, i) => (
                      <label key={i} className="flex flex-col items-center text-xs">
                        <input
                          type="radio"
                          name={q.key}
                          value={i + 1}
                          checked={risposte[q.key] == i + 1}
                          onChange={e => handleChange(q.key, e.target.value)}
                          required
                        />
                        {i + 1}
                      </label>
                    ))}
                  </div>
                )}
                {q.type === "select" && (
                  <select
                    className="border-2 border-[#2C4251] rounded-lg p-3 w-full text-lg bg-white text-[#2C4251]"
                    value={risposte[q.key] || ""}
                    onChange={e => handleChange(q.key, e.target.value)}
                    required
                  >
                    <option value="">Seleziona...</option>
                    {q.options.map(opt => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                )}
              </div>
            ))}
            <div className="flex justify-between mt-8">
              {step > 1 && (
                <button type="button" onClick={handleBack} className="bg-gray-200 text-[#2C4251] px-6 py-2 rounded-full font-semibold shadow hover:bg-gray-300 transition">Indietro</button>
              )}
              <button type="submit" className="bg-[#2C4251] text-white px-8 py-2 rounded-full font-semibold shadow hover:bg-[#3a5a6b] transition">{step === 5 ? "GENERA LA MIA SCINTILLA STRATEGICA RTH" : "Avanti"}</button>
            </div>
          </form>
        </section>
      )}
      {/* Step 6: Loading */}
      {step === 6 && (
        <section className="max-w-2xl w-full px-6 py-8 text-[#2C4251] flex flex-col items-center">
          <div className="mb-6 animate-pulse">
            <Image src="/logo.png" alt="Logo Road to Heaven" width={80} height={80} />
          </div>
          <h2 className="text-2xl font-bold mb-4 text-center">L'Anima di RTH sta consultando le stelle per te...</h2>
          <p className="text-center">Elaborazione in corso. Attendi qualche secondo per ricevere la tua Scintilla Strategica personalizzata.</p>
        </section>
      )}
      {/* Step 7: Output */}
      {step === 7 && (
        <section className="max-w-2xl w-full px-6 py-8 text-[#2C4251]">
          <h2 className="text-2xl font-bold mb-4 text-center">La Tua "Scintilla Strategica RTH": Primi Bagliori per un Futuro Divino</h2>
          <div className="bg-white border-2 border-[#2C4251] rounded-lg p-6 shadow mb-6 whitespace-pre-line text-[#2C4251]">
            {output}
          </div>
          <div className="text-center mt-4">
            <p className="mb-2">Questa "Scintilla Strategica RTH" è un dono dell'intelligenza "animica" per te. Se desideri approfondire, contattaci:</p>
            <p>📞 <a href="tel:+393208080708" className="underline">+39 320 8080708</a> &nbsp;|&nbsp; 📧 <a href="mailto:rth.roadtoheaven@gmail.com" className="underline">rth.roadtoheaven@gmail.com</a></p>
          </div>
        </section>
      )}
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
