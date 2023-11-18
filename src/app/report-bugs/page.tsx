import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pornonly - Reportar bugs',
};

import ReportBugsForm from '@/components/form/report-bugs-form';

export default function Page() {
  return (
    <main className="main">
      <h1 className="title">Reportar bugs</h1>
      <ReportBugsForm />
    </main>
  );
}
