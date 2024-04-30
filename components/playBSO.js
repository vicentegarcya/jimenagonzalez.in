import { useSpring, animated } from "react-spring";
import { isPlayingContext } from "../context/context";
import { useContext } from "react";

export default function PlayBSO() {
  const { isPlaying, soundHandler } = useContext(isPlayingContext);

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
      <>
        <div className={styles.bso}>
          <animated.h3 style={openAnimation}>explora con BSO</animated.h3>
          <animated.img
            style={blackAnimation}
            src={
              isPlaying ? "/pause_psicodelico.png" : "/play_btn_psicodelico.png"
            }
            alt="play button"
            onClick={soundHandler}
          />
        </div>
      </>
    </header>
  );
}
