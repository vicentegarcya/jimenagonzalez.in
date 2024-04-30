import { forwardRef } from "react";
import styles from "./header.module.css";
import Link from "next/link";

const Header = forwardRef(function Header(props, headerRef) {
  return (
    <div ref={headerRef} className={styles.header}>
      <Link href={"/#main"} scroll={false}>
        JIMENA GONZALEZ
      </Link>
      <div className={styles.header_links}>
        <h5>
          <Link href={"/#metodologia"} scroll={false}>
            METODOLOGÍA
          </Link>
        </h5>
        <h5>
          <Link href={"/#experiencia"} scroll={false}>
            PROYECTOS
          </Link>
        </h5>
        <h5>
          <Link href={"/#servicios"} scroll={false}>
            SERVICIOS
          </Link>
        </h5>
      </div>
      <button onClick={() => window.scrollTo(0, document.body.scrollHeight)}>
        CONTACTO
      </button>
    </div>
  );
});

export default Header;
