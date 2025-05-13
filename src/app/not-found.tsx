'use client';

// src/app/not-found.tsx
export default function NotFound() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>404 - Página Não Encontrada</h1>
      <p>Desculpe, a página que você está procurando não existe.</p>
      <a href="/">Voltar para a Home</a>
    </div>
  );
}

