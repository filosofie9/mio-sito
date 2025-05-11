export async function POST(request) {
  const { domanda } = await request.json();

  const response = await fetch("https://api-inference.huggingface.co/models/mistralai/Mistral-7B-Instruct-v0.2", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${process.env.HF_API_KEY}`,
    },
    body: JSON.stringify({
      inputs: domanda,
      parameters: { max_new_tokens: 200 }
    }),
  });

  const data = await response.json();
  // La risposta di Hugging Face può variare, ma di solito è un array con generated_text
  const risposta = data[0]?.generated_text || "Errore nella risposta AI gratuita.";

  return new Response(JSON.stringify({ risposta }), {
    headers: { "Content-Type": "application/json" },
  });
}