import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pornonly - Pedir pack de conteúdos',
};

import RequestContentPackForm from '@/components/form/request-content-pack';

export default function Page() {
  return (
    <main className="main">
      <h1 className="title" style={{ width: '70%' }}>
        Pedir pack de conteúdos
      </h1>
      <RequestContentPackForm />
    </main>
  );
}
