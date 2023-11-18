import Link from 'next/link';

import Logo from '../logo';

import styles from './styles.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles['container-logo']}>
        <Logo />
        <h2>Pornonly</h2>
      </div>
      <div className={styles['container-footer-menus']}>
        <h3>Sobre nós</h3>
        <Link href="/about-us">O que é a Pornonly</Link>
        <Link href={`${process.env.NEXT_PUBLIC_URL_PORNONLY}`}>Nosso site</Link>
      </div>
      <div className={styles['container-footer-menus']}>
        <h3>Nossas políticas</h3>
        <Link href="/terms-service">Termos de serviço</Link>
        <Link href="/privacy-policy">Política de privacidade</Link>
        <Link href="/cookies-policy">Política de cookies</Link>
      </div>
      <div className={styles['container-footer-menus']}>
        <h3>Mias+</h3>
        <Link href="/report-bugs">Reportar bugs</Link>
        <Link href="/compliments-improvements" target="_blank">
          Elogios e sugestões de melhorias
        </Link>
        <Link href="/request-content-pack" target="_blank">
          Pedir pack de conteúdos
        </Link>
      </div>
    </footer>
  );
}
