import styles from "./header.module.css";
import Image from "next/image";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.bso}>
        <h3>explora con BSO</h3>
        <Image
          src={"/play_btn.png"}
          width={15}
          height={15}
          alt="play button"
        />
      </div>
      <h3>SOBRE MI</h3>
    </header>
  );
}
