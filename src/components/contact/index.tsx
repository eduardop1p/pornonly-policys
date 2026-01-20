import type { ReactNode } from 'react';

export default function Contact({ children }: { children: ReactNode }) {
  return (
    <>
      <h2 className="sub-title">Contato</h2>
      <p className="paragraph">
        {children}
        <a className="text-link" href="mailto:pornonly@pornonly.xyz">
          pornonly@pornonly.xyz
        </a>
        ou pelo instagram
        <a
          className="text-link"
          href="https://www.instagram.com/po.rnonly506/"
          target="_blank"
        >
          @po.rnonly506
        </a>
        .
      </p>
    </>
  );
}
