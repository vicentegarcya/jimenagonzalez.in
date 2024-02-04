import styles from "./header.module.css";
import Link from "next/link";

export default function Header() {
  return (
    <div className={styles.header}>
      <h4>Jimena <span>González</span></h4>
      <div className={styles.header_links}>
        <h5>METODOLOGÍA</h5>
        <h5>PROYECTOS</h5>
        <h5>SERVICIOS</h5>
      </div>
      <Link href='mailto:jimenagonzalez.in@gmail.com'>CONTACTO</Link>
    </div>
  )
}
