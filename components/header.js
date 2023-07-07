import styles from "./header.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";

export default function Header() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  const openAnimation = useSpring({
    from: { maxWidth: "0px", marginRight: "12px" },
    to: {
      maxWidth: scrollPosition < 15 ? "200px" : "0px",
      marginRight: scrollPosition < 15 ? "12px" : "0px",
    },
    config: { duration: "300" },
  });

  return (
    <header className={styles.header}>
      <div className={styles.bso}>
        <animated.h3 style={openAnimation}>explora con BSO</animated.h3>
        <Image
          src={scrollPosition > 15 ? "/play_btn_black.png" : "/play_btn_psicodelico.png"}
          width={20}
          height={20}
          alt="play button"
        />
      </div>
      <h3>SOBRE MI</h3>
    </header>
  );
}
