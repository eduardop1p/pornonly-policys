import { Metadata } from 'next';
import Link from 'next/link';

import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Pornonly - Políticas',
};

export default function Page() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Políticas e diretrizes</h1>
      <p className={styles['paragraph-main']}>
        Estas são nossas diretrizes para incentivar uma experiência positiva.
      </p>
      <div className={styles['container-info-menus']}>
        <div className={styles['container-info']}>
          <h3>Termos de serviço</h3>
          <p>Termos com os quais você concorda ao usar a Pornonly</p>
          <Link href="/terms-service">Saiba mais</Link>
        </div>
        <div className={styles['container-info']}>
          <h3>Política de privacidade</h3>
          <p>Informações que coletamos, como usamos essas informações</p>
          <Link href="/privacy-policy">Saiba mais</Link>
        </div>
        <div className={styles['container-info']}>
          <h3>Política de cookies</h3>
          <p>
            Utilizamos cookies e tecnologias similares para coletar informações
            sobre suas preferências e atividades de navegação no nosso site.
          </p>
          <Link href="/cookies-policy">Saiba mais</Link>
        </div>
        <div className={styles['container-info']}>
          <h3>Termos de uso</h3>
          <p>
            Se você não concorda com os termos, por favor, não use nosso site.
          </p>
          <Link href="/terms-use">Saiba mais</Link>
        </div>
      </div>
    </main>
  );
}
