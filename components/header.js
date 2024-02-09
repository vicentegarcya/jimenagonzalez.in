import { forwardRef } from "react";
import styles from "./header.module.css";
import Link from "next/link";

const Header = forwardRef(function Header(props, headerRef) {
  return (
    <div ref={headerRef} className={styles.header}>
      <h4>Jimena <span>González</span></h4>
      <div className={styles.header_links}>
        <h5>METODOLOGÍA</h5>
        <h5>PROYECTOS</h5>
        <h5>SERVICIOS</h5>
      </div>
      <Link href='mailto:jimenagonzalez.in@gmail.com'>CONTACTO</Link>
    </div>
  )
});

export default Header;
