import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pornonly - Sobre nós',
};

export default function Page() {
  return (
    <main className="main">
      <h1 className="title">Sobre nós</h1>
      <div className="container-text">
        <p className="date">Data de vigência: 19/11/2023</p>
        <h2 className="sub-title">Bem-vind@ a Pornonly!</h2>
        <p className="paragraph">página em manutenção</p>
      </div>
    </main>
  );
}
