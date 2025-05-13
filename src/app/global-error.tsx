
'use client';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    // As tags <html> e <body> foram removidas conforme as boas práticas do Next.js App Router.
    // O conteúdo de erro deve ser renderizado dentro da estrutura de layout fornecida pelo Next.js.
    <div>
      <h2>Ocorreu um erro inesperado</h2>
      <p>
        Pedimos desculpas pelo inconveniente. Por favor, tente novamente mais tarde.
      </p>
      <p>
        {error?.message && (
          <em>Detalhes do erro: {error.message}</em>
        )}
      </p>
      <button onClick={() => reset()}>Tentar novamente</button>
    </div>
  );
}

