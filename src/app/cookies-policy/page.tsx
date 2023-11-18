import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pornonly - Política de cookies',
};

import Contact from '@/components/contact';

export default function Page() {
  return (
    <main className="main">
      <h1 className="title">Política de cookies</h1>
      <div className="container-text">
        <p className="date">Data de vigência: 16/11/2023</p>
        <p className="paragraph">
          Este site utiliza cookies. Ao continuar a utilizar este site, você
          concorda com a utilização de cookies de acordo com esta política.
        </p>
        <h2 className="sub-title">O que são cookies?</h2>
        <p className="paragraph">
          Cookies são pequenos arquivos de texto armazenados no seu dispositivo
          quando você visita um site. Eles são amplamente utilizados para fazer
          com que os sites funcionem ou funcionem de maneira mais eficiente, bem
          como fornecer informações aos proprietários do site.
        </p>
        <h2 className="sub-title">Como usamos cookies</h2>
        <p className="paragraph">
          Utilizamos cookies por diversos motivos, incluindo:
        </p>
        <ul className="container-ul">
          <li className="paragraph">
            Essenciais: Utilizamos cookies essenciais para autenticar usuários e
            prevenir o uso fraudulento de contas de usuários.
          </li>
          <li className="paragraph">
            Desempenho e Analytics: Utilizamos cookies para analisar como os
            visitantes usam nosso site e monitorar o desempenho do site. Isso
            nos permite fornecer uma experiência de alta qualidade,
            personalizando nossa oferta e identificando rapidamente e corrigindo
            quaisquer problemas que possam surgir.Desempenho e Analytics:
            Utilizamos cookies para analisar como os visitantes usam nosso site
            e monitorar o desempenho do site. Isso nos permite fornecer uma
            experiência de alta qualidade, personalizando nossa oferta e
            identificando rapidamente e corrigindo quaisquer problemas que
            possam surgir.
          </li>
          <li className="paragraph">
            Funcionalidade: Utilizamos cookies para lembrar suas preferências e
            facilitar a navegação em futuras visitas.
          </li>
        </ul>
        <h2 className="sub-title">Tipos de cookies que utilizamos</h2>
        <ul className="container-ul">
          <li className="paragraph">
            Cookies de Sessão: São cookies temporários que são excluídos
            automaticamente quando você fecha seu navegador.
          </li>
          <li className="paragraph">
            Cookies Persistentes: São cookies que permanecem no seu dispositivo
            até que você os exclua manualmente ou até que seu navegador os
            remova automaticamente após um determinado período.
          </li>
        </ul>
        <h2 className="sub-title">Controle de cookies</h2>
        <p className="paragraph">
          Você pode controlar e/ou excluir cookies conforme desejar. Para saber
          mais, visite
          <a
            className="text-link"
            href="https://support.google.com/chrome/answer/95647"
          >
            controle de cookies
          </a>
          .
        </p>
        <h2 className="sub-title">Cookies de terceiros</h2>
        <p className="paragraph">
          Podemos utilizar serviços de terceiros que também configuram cookies
          quando você visita nosso site. Os cookies de terceiros são utilizados
          para fornecer serviços adicionais, como análises de tráfego e mídias
          sociais.
        </p>
        <h2 className="sub-title">Alterações a esta política de cookies</h2>
        <p className="paragraph">
          Reservamo-nos o direito de atualizar esta política periodicamente para
          refletir as mudanças em nossas práticas de cookies. Recomendamos que
          reveja esta página regularmente para estar ciente de quaisquer
          alterações.
        </p>
        <Contact>
          Se tiver dúvidas sobre nossa política de cookies, entre em contato
          conosco em
        </Contact>
      </div>
    </main>
  );
}
