import Link from 'next/link';

import styles from './styles.module.css';

import Logo from '../logo';

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles['container-logo']}>
        <Logo />
        <h2>Políticas</h2>
      </Link>

      <div className={styles['container-menus']}>
        <Link href="/terms-service">Termos</Link>
        <Link href="/privacy-policy">Privacidade</Link>
        <Link href="/cookies-policy">Cookies</Link>
        <Link href="/report-bugs">Reportar bugs</Link>
        <Link href="/compliments-improvements">
          Elogios e sugestões de melhorias
        </Link>
        <Link href="/request-content-pack">Pedir pack de conteúdos</Link>
      </div>
    </header>
  );
}
