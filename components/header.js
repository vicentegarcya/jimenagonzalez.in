import styles from "./header.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
import { isPlayingContext } from "../context/context";
import { useContext } from "react";

export default function Header({ currentPage }) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const {isPlaying, soundHandler, audio} = useContext(isPlayingContext);

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
    from: { opacity: "1", maxWidth: "0px", marginRight: "12px" },
    to: {
      opacity: scrollPosition < 15 ? "1" : "0",
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
              src={
                isPlaying
                  ? "/pause_psicodelico.png"
                  : "/play_btn_psicodelico.png"
              }
              alt="play button"
              onClick={soundHandler}
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
