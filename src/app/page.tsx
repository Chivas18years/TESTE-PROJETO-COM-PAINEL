'use client';
import React from "react";

export default function HomePage() {
  return (
    <main className="bg-[#f7fbfb] min-h-screen text-[#092046]">
      {/* HEADER */}
      <header className="bg-white shadow-md">
        <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
          <img
            src="/images/govbr-logo.png"
            alt="gov.br logo"
            className="h-8"
          />
          <div className="hidden md:flex space-x-8">
            <a
              href="#"
              className="text-[#919db1] hover:text-[#092046] transition py-2"
            >
              Início
            </a>
            <a
              href="#servicos"
              className="text-[#919db1] hover:text-[#092046] transition py-2"
            >
              Serviços
            </a>
            <a
              href="#sobre"
              className="text-[#919db1] hover:text-[#092046] transition py-2"
            >
              Sobre
            </a>
            <a
              href="#contato"
              className="text-[#919db1] hover:text-[#092046] transition py-2"
            >
              Contato
            </a>
          </div>
        </nav>
      </header>

      {/* SERVIÇOS DISPONÍVEIS */}
      <section className="py-16" id="servicos">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-12">
            Serviços Disponíveis
          </h1>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-6">
                  Selecione o serviço desejado
                </h2>
                <ul className="divide-y divide-gray-200">
                  <li>
                    <a
                      href="#"
                      className="flex items-center justify-between py-4 group transition"
                    >
                      <div>
                        <h3 className="text-xl text-[#375eab] group-hover:text-[#092046] transition">
                          CNH - Primeira Habilitação
                        </h3>
                        <p className="text-[#919db1] mt-1">
                          Solicite sua primeira Carteira Nacional de Habilitação
                        </p>
                      </div>
                      <span className="text-[#375eab] group-hover:translate-x-2 transition-transform">
                        →
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center justify-between py-4 group transition"
                    >
                      <div>
                        <h3 className="text-xl text-[#375eab] group-hover:text-[#092046] transition">
                          CNH - Renovação
                        </h3>
                        <p className="text-[#919db1] mt-1">
                          Renove sua Carteira Nacional de Habilitação
                        </p>
                      </div>
                      <span className="text-[#375eab] group-hover:translate-x-2 transition-transform">
                        →
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center justify-between py-4 group transition"
                    >
                      <div>
                        <h3 className="text-xl text-[#375eab] group-hover:text-[#092046] transition">
                          CNH - Adição de Categoria
                        </h3>
                        <p className="text-[#919db1] mt-1">
                          Adicione novas categorias à sua habilitação
                        </p>
                      </div>
                      <span className="text-[#375eab] group-hover:translate-x-2 transition-transform">
                        →
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center justify-between py-4 group transition"
                    >
                      <div>
                        <h3 className="text-xl text-[#375eab] group-hover:text-[#092046] transition">
                          CNH - Segunda Via
                        </h3>
                        <p className="text-[#919db1] mt-1">
                          Solicite a segunda via da sua Carteira Nacional de
                          Habilitação
                        </p>
                      </div>
                      <span className="text-[#375eab] group-hover:translate-x-2 transition-transform">
                        →
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMO SOLICITAR */}
      <section className="py-16 bg-[#f7fbfb]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Como solicitar o agendamento online?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex justify-center mb-4">
                <img
                  src="/images/icon-form.svg"
                  alt="Formulario"
                  className="h-10"
                />
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">
                Preencha o formulário
              </h3>
              <p className="text-[#919db1] text-center">
                Clique no botão inicial para ter acesso ao formulário. Preencha
                os dados até o fim para chegar na tela de pagamento.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex justify-center mb-4">
                <img
                  src="/images/icon-payment.svg"
                  alt="Pagamento"
                  className="h-10"
                />
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">
                Realize o pagamento
              </h3>
              <p className="text-[#919db1] text-center">
                Realize o pagamento do pedido. Após compensado o pagamento,
                irá receber um e-mail de confirmação.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex justify-center mb-4">
                <img
                  src="/images/icon-email.svg"
                  alt="E-mail"
                  className="h-10"
                />
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">
                Receba tudo por e-mail
              </h3>
              <p className="text-[#919db1] text-center">
                Após o confirmado seu pagamento, iremos entrar em contato por
                e-mail em até 48 horas úteis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Dúvidas Frequentes
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {/* FAQ Items, pode ser componente com lógica de accordion depois */}
              <AccordionItem
                question="Quanto tempo demora para receber a confirmação do protocolo de agendamento por e-mail?"
                answer="O e-mail com a confirmação do protocolo de seu atendimento chega em até 48 horas após a confirmação de pagamento."
              />
              <AccordionItem
                question="Depois que agendei já posso ir ao posto de atendimento?"
                answer="Não. Só vá ao posto de atendimento com o protocolo de atendimento que enviaremos ao seu e-mail. Este protocolo é a confirmação de que o dia e horário desejado foi devidamente agendado com o posto."
              />
              <AccordionItem
                question="Além da taxa de serviço será cobrado mais algum valor?"
                answer="Para emissão de 1ª via não há outras taxas. Entretando, se for emissão de 2ª via do documento, será cobrado uma taxa de emissão."
              />
              <AccordionItem
                question="Posso desistir após pagar?"
                answer="Sim! Caso o serviço ainda não tenha sido realizado, basta entrar em contato em nossos canais de atendimento que faremos o estorno."
              />
              <AccordionItem
                question="Posso realizar o agendamento sem a assessoria do site?"
                answer="Não. Este é o único canal oficial para realizar o agendamento dos seus documentos. Para sua segurança e garantia do serviço, realize o agendamento somente através deste portal governamental."
              />
            </div>
          </div>
        </div>
      </section>

      {/* RODAPÉ */}
      <footer className="bg-[#092046] text-white py-12 mt-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            <div>
              <p className="text-lg mb-2">Portal Oficial do Governo Federal</p>
              <p className="text-sm opacity-80">
                Ministério da Gestão e da Inovação em Serviços Públicos
              </p>
            </div>
          </div>
          <div className="border-t border-blue-400 mt-8 pt-8 text-center">
            <p>Governo Federal - 2024. Todos os direitos reservados</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

function AccordionItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="border rounded-lg overflow-hidden">
      <button
        className="w-full text-left p-4 bg-white hover:bg-[#f7fbfb] focus:outline-none flex justify-between items-center"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        <span className="text-[#375eab] font-medium">{question}</span>
        <span>{open ? "▲" : "▼"}</span>
      </button>
      {open && (
        <div className="bg-white px-4 pb-4">
          <p className="text-[#919db1]">{answer}</p>
        </div>
      )}
    </div>
  );
}
