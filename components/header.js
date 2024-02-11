import { forwardRef } from "react";
import styles from "./header.module.css";
import Link from "next/link";

const Header = forwardRef(function Header(props, headerRef) {
  return (
    <div ref={headerRef} className={styles.header}>
      <h4>
        <Link href={"/#main"} scroll={false}>
          Jimena <span>González</span>
        </Link>
      </h4>
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
      <Link href="mailto:jimenagonzalez.in@gmail.com">CONTACTO</Link>
    </div>
  );
});

export default Header;
