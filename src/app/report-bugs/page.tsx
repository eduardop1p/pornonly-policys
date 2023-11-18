import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pornonly - Reportar bugs',
};

import FormReportBugs from '@/components/form/report-bugs';

export default function Page() {
  return (
    <main className="main">
      <h1 className="title">Reportar bugs</h1>
      <FormReportBugs />
    </main>
  );
}
