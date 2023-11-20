'use client';

import Link from 'next/link';
import { useMediaQuery } from 'react-responsive';
import { useState } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import { Menu, Close } from '@mui/icons-material';

import styles from './styles.module.css';

import Logo from '../logo';

export default function Header() {
  const maxWidth1000 = useMediaQuery({ maxWidth: 1000 });

  return (
    <header className={styles.header}>
      <Link href="/" className={styles['container-logo']}>
        <Logo />
        <h2>Políticas</h2>
      </Link>

      {maxWidth1000 ? (
        <MenuMobile />
      ) : (
        <nav className={styles['container-menus']}>
          <Link href="/terms-service">Termos</Link>
          <Link href="/privacy-policy">Privacidade</Link>
          <Link href="/cookies-policy">Cookies</Link>
          <Link href="/report-bugs">Reportar bugs</Link>
          <Link href="/compliments-improvements">
            Elogios e sugestões de melhorias
          </Link>
          <Link href="/request-content-pack">Pedir pack de conteúdos</Link>
        </nav>
      )}
    </header>
  );
}

function MenuMobile() {
  const [showMenu, setShowMenu] = useState(false);
  const maxWidth450 = useMediaQuery({ maxWidth: 450 });

  return !maxWidth450 ? (
    <div className={styles['container-menu-mobile']}>
      <HambuguerMenu setShowMenu={setShowMenu} showMenu={showMenu} />
      <NavMobile setShowMenu={setShowMenu} showMenu={showMenu} />
    </div>
  ) : (
    <>
      <HambuguerMenu setShowMenu={setShowMenu} showMenu={showMenu} />
      <NavMobile setShowMenu={setShowMenu} showMenu={showMenu} />
    </>
  );
}

function NavMobile({
  showMenu,
  setShowMenu,
}: {
  showMenu: boolean;
  setShowMenu: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <div
      data-show-menu-mobile={showMenu}
      className={styles['container-nav-links']}
    >
      <nav className={styles['container-menus-mobile']}>
        <Link href="/terms-service" onClick={() => setShowMenu(!showMenu)}>
          Termos
        </Link>
        <Link href="/privacy-policy" onClick={() => setShowMenu(!showMenu)}>
          Privacidade
        </Link>
        <Link href="/cookies-policy" onClick={() => setShowMenu(!showMenu)}>
          Cookies
        </Link>
        <Link href="/report-bugs" onClick={() => setShowMenu(!showMenu)}>
          Reportar bugs
        </Link>
        <Link
          href="/compliments-improvements"
          onClick={() => setShowMenu(!showMenu)}
        >
          Elogios e sugestões de melhorias
        </Link>
        <Link
          href="/request-content-pack"
          onClick={() => setShowMenu(!showMenu)}
        >
          Pedir pack de conteúdos
        </Link>
      </nav>
    </div>
  );
}

function HambuguerMenu({
  showMenu,
  setShowMenu,
}: {
  showMenu: boolean;
  setShowMenu: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <button
      type="button"
      className={styles['menu-mobile']}
      onClick={() => setShowMenu(!showMenu)}
    >
      {!showMenu ? (
        <Menu style={{ fill: 'var(--g-colored-9c0343)' }} />
      ) : (
        <Close style={{ fill: 'var(--g-colored-9c0343)' }} />
      )}
    </button>
  );
}
