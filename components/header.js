import styles from "./header.module.css";
import { inter } from "@/utils/fonts";
import Image from "next/image";

export default function Header() {
  return (
    <header className={styles.header + " " + inter.className}>
      <div className={styles.bso}>
        <h3>MI BSO</h3>
        <Image
          src={"/play-button.png"}
          width={18}
          height={18}
          alt="play button"
        />
      </div>
      <h3>SOBRE MI</h3>
    </header>
  );
}
