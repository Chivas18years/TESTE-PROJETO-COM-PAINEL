'use client';

// src/app/error.tsx
export default function Error({ error, reset }: { error: Error & { digest?: string }, reset: () => void }) {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Algo deu errado!</h2>
      <p>{error.message}</p>
      <button onClick={() => reset()}>Tentar novamente</button>
    </div>
  );
}

