import styles from "./header.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";

export default function Header({ currentPage }) {
  const [scrollPosition, setScrollPosition] = useState(0);

  console.log(currentPage);

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

  const blackAnimation = useSpring({
    from: { filter: "brightness(100%)" },
    to: {
      filter: scrollPosition < 15 ? "brightness(100%)" : "brightness(0%)",
    },
    config: { duration: "300" },
  });

  return (
    <header className={styles.header}>
      {currentPage === "/me" ? (
        <Link href="/">
          <h3 className={styles.volver}>{"<"} VOLVER</h3>
        </Link>
      ) : (
        <>
          <div className={styles.bso}>
            <animated.h3 style={openAnimation}>explora con BSO</animated.h3>
            <animated.img
              style={blackAnimation}
              src={"/play_btn_psicodelico.png"}
              alt="play button"
            />
          </div>
          <Link href="/me">
            <h3>SOBRE MI</h3>
          </Link>
        </>
      )}
    </header>
  );
}
