import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pornonly - Política de privacidade',
};

import Contact from '@/components/contact';

export default function Page() {
  return (
    <main className="main">
      <h1 className="title">Política de privacidade</h1>
      <div className="container-text">
        <p className="date">Data de vigência: 16/11/2023</p>
        <p className="paragraph">
          Esta Política de Privacidade descreve como a Pornonly coleta, usa e
          compartilha informações pessoais quando você utiliza nosso site
          <a
            className="text-link"
            target="_blank"
            href={`${process.env.NEXT_PUBLIC_URL_PORNONLY}`}
          >
            pornonly.xyz
          </a>
          . Ao utilizar nosso site, você concorda com a coleta e uso das
          informações de acordo com esta política.
        </p>
        <h2 className="sub-title">Informações que coletamos</h2>
        <p className="paragraph">Informações pessoais</p>
        <p className="paragraph">
          Podemos coletar informações pessoais, tais como:
        </p>
        <ul className="container-ul">
          <li className="paragraph">Nome de usuário</li>
          <li className="paragraph">Endereço de email</li>
        </ul>
        <p className="paragraph">Informações de navegação</p>
        <p className="paragraph">
          Podemos coletar informações sobre o seu dispositivo e o seu
          comportamento de navegação, tais como:
        </p>
        <ul className="container-ul">
          <li className="paragraph">Páginas visitadas</li>
          <li className="paragraph">Tipo de navegador</li>
          <li className="paragraph">Tempo gasto em páginas</li>
        </ul>
        <h2 className="sub-title">Como utilizamos as informações</h2>
        <p className="paragraph">Utilizamos as informações coletadas para:</p>
        <ul className="container-ul">
          <li className="paragraph">Personalizar sua experiência no site</li>
          <li className="paragraph">Fornecer conteúdo relevante</li>
          <li className="paragraph">Melhorar nosso site e serviços</li>
        </ul>
        <h2 className="sub-title">Cookies</h2>
        <p className="paragraph">
          Utilizamos cookies e tecnologias similares para coletar informações
          sobre suas preferências e atividades de navegação no nosso site.
        </p>
        <h2 className="sub-title">Compartilhamento de informações</h2>
        <p className="paragraph">
          Não compartilhamos suas informações pessoais com terceiros, exceto
          quando exigido por lei ou com o seu consentimento.
        </p>
        <h2 className="sub-title">Segurança</h2>
        <p className="paragraph">
          Empregamos medidas de segurança para proteger suas informações contra
          acesso não autorizado ou divulgação.
        </p>
        <h2 className="sub-title">Links para sites de terceiros</h2>
        <p className="paragraph">
          Nosso site pode conter links para sites de terceiros. Não somos
          responsáveis pelas práticas de privacidade desses sites. Recomendamos
          que você leia as políticas de privacidade de cada site que visita.
        </p>
        <h2 className="sub-title">Seus direitos</h2>
        <p className="paragraph">Você tem o direito de:</p>
        <ul className="container-ul">
          <li className="paragraph">Acessar suas informações pessoais</li>
          <li className="paragraph">Corrigir informações imprecisas</li>
          <li className="paragraph">Excluir suas informações pessoais</li>
        </ul>
        <h2 className="sub-title">Alterações a esta política de privacidade</h2>
        <p className="paragraph">
          Reservamo-nos o direito de atualizar esta política periodicamente.
          Recomendamos que reveja esta página regularmente para estar ciente de
          quaisquer alterações.
        </p>
        <Contact>
          Se tiver dúvidas sobre esta política de privacidade, entre em contato
          conosco em
        </Contact>
      </div>
    </main>
  );
}
