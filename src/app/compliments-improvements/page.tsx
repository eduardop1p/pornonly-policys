import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pornonly - Elogios e sugestões de melhorias',
};

import ComplimentsImprovementsForm from '@/components/form/compliments-improvements-form';

export default function Page() {
  return (
    <main className="main">
      <h1 className="title">Elogios e sugestões de melhorias</h1>
      <ComplimentsImprovementsForm />
    </main>
  );
}
