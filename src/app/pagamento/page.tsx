"use client";
import { useEffect, useState } from "react";
import QRCode from "qrcode.react";

function gerarPixCopiaCola({ chave, nome, cidade, valor, mensagem }: any) {
  // Montagem código PIX simples demo. Integrar endpoint backend real depois (adaptação).
  let txt = `00020126580014BR.GOV.BCB.PIX01${chave.length.toString().padStart(2,"0")}${chave}520400005303986540${valor.toFixed(2).replace('.', '')}5802BR5912${nome.slice(0,12)}6008${cidade.slice(0,8)}62170503***6304`;
  return txt;
}

export default function Pagamento() {
  const [loading, setLoading] = useState(true);
  const [chavePix, setChavePix] = useState("");
  const [valor, setValor] = useState(49.90); // Default demo (conferir com endpoint depois)
  const [pixCopiaCola, setPixCopiaCola] = useState("");
  const [copied, setCopied] = useState(false);
  useEffect(() => {
    // Buscar chave PIX do backend
    fetch("/api/pix").then(async r => {
      const contentType = r.headers.get("content-type");
      if (r.ok && contentType && contentType.includes("application/json")) {
        const data = await r.json();
        setChavePix(data.key || "");
        // Montar código PIX
        const pix = gerarPixCopiaCola({
          chave: data.key || "00000000000",
          nome: "Servico CNH", // Poderia customizar se desejar
          cidade: "SAO PAULO",
          valor: valor,
          mensagem: "Pagamento Servico CNH"
        });
        setPixCopiaCola(pix);
      }
      setLoading(false);
    })
  },[valor]);

  return (
    <section className="py-8 min-h-[80vh] flex items-center justify-center bg-[#f7fbfb]">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8 flex flex-col items-center">
        <h1 className="text-2xl md:text-3xl font-bold text-[#092046] mb-6 text-center">Pagamento via PIX</h1>
        {loading ? (
          <div className="my-12 animate-pulse h-6 w-6 rounded-full bg-[#0550ae]" />
        ) : (
          <>
            <p className="mb-2 text-[#092046] font-medium text-lg text-center">Escaneie o QR Code abaixo ou copie o código PIX.</p>
            <div className="my-6 bg-white p-4 rounded shadow flex flex-col items-center gap-4">
              <QRCode value={pixCopiaCola} size={190} renderAs="svg" includeMargin={true} />
              <button onClick={() => {navigator.clipboard.writeText(pixCopiaCola);setCopied(true);setTimeout(()=>setCopied(false),1700);} } className="mt-2 px-5 py-2 rounded bg-[#0550ae] hover:bg-[#092046] text-white font-semibold transition">{copied ? "Copiado!" : "Copiar código"}</button>
              <input value={pixCopiaCola} readOnly className="w-full bg-gray-100 p-2 rounded text-xs text-[#092046] mt-2 select-all" />
            </div>
            <div className="text-center mt-8">
              <button className="bg-[#55a56b] hover:bg-[#086d3b] text-white px-8 py-3 rounded font-bold shadow transition">Já paguei!</button>
            </div>
            <p className="text-[#919db1] mt-4 text-sm">Após a confirmação do pagamento, sua solicitação será processada e você receberá um e-mail em até 48h úteis.</p>
          </>
        )}
      </div>
    </section>
  );
}
