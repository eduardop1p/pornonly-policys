import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pornonly - Termos de serviço',
};

import Contact from '@/components/contact';

export default function Page() {
  return (
    <main className="main">
      <h1 className="title">Termos de Serviço</h1>

      <div className="container-text">
        <h2 className="sub-title">Obrigado por usar a Pornonly!</h2>
        <p className="date">Data de vigência: 16/11/2023</p>
        <p className="paragraph">
          Bem-vind@ a Pornonly! Ao utilizar nosso site, você concorda com os
          seguintes termos e condições. Se você não concorda com estes termos,
          por favor, não use nosso site.
        </p>
        <h2 className="sub-title">Uso dos serviços</h2>
        <ol className="container-ol">
          <li className="paragraph">
            Condições Gerais: Ao utilizar a Pornonly, você concorda em obedecer
            a estes Termos de Serviço e todas as leis e regulamentos aplicáveis.
          </li>
          <li className="paragraph">
            Idade Mínima: Você declara ter pelo menos 18 anos de idade ou ter a
            permissão de um responsável legal para usar este site.
          </li>
          <li className="paragraph">
            Registro: Ao se registrar em nosso site, você concorda em fornecer
            informações precisas e atualizadas. Você é responsável por manter a
            confidencialidade de sua conta.
          </li>
        </ol>
        <h2 className="sub-title">Conteúdo do usuário</h2>
        <ol className="container-ol">
          <li className="paragraph">
            Responsabilidade: Você é totalmente responsável por qualquer
            conteúdo que você postar em nosso site.
          </li>
          <li className="paragraph">
            Moderação: Reservamo-nos o direito de moderar, editar ou remover
            qualquer conteúdo que considerarmos inadequado, a nosso critério.
          </li>
        </ol>
        <h2 className="sub-title">Propriedade intelectual</h2>
        <ol className="container-ol">
          <li className="paragraph">
            Direitos Autorais: Todo o conteúdo presente no site, incluindo
            texto, gráficos, logotipos, ícones e imagens, é propriedade
            exclusiva da Pornonly.
          </li>
          <li className="paragraph">
            Uso Não Autorizado: Não é permitido copiar, reproduzir, distribuir
            ou utilizar qualquer conteúdo do site sem permissão expressa.
          </li>
        </ol>
        <h2 className="sub-title">Limitação de responsabilidade</h2>
        <ol className="container-ol">
          <li className="paragraph">
            Precisão do Conteúdo: Não garantimos a precisão, integridade ou
            atualidade do conteúdo do site.
          </li>
          <li className="paragraph">
            Uso por Sua Conta e Risco: O uso do site é por sua conta e risco.
            Não nos responsabilizamos por quaisquer danos diretos, indiretos,
            incidentais, especiais ou consequentes resultantes do uso ou
            incapacidade de usar nosso site.
          </li>
        </ol>
        <h2 className="sub-title">Alterações nos termos</h2>
        <p className="paragraph">
          Reservamo-nos o direito de atualizar ou modificar estes Termos de
          Serviço a qualquer momento, sem aviso prévio. O uso contínuo do site
          após alterações constitui aceitação dos novos termos.
        </p>
        <Contact>
          Se tiver dúvidas sobre estes Termos de Serviço, entre em contato
          conosco em
        </Contact>
      </div>
    </main>
  );
}
