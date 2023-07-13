import Link from "next/link";
import styles from "./service.module.css";
import { useState } from "react";
import { useSpring, animated } from "react-spring";

export default function Service({
  title,
  description,
  hashtags,
  price,
  calendlyUrl,
}) {
  const [desplegado, setDesplegado] = useState(false);

  const openAnimation = useSpring({
    from: { opacity: "0", maxHeight: "0px", marginBottom: "0rem" },
    to: {
      opacity: "1",
      maxHeight: desplegado ? "250px" : "0px",
      marginBottom: desplegado ? "1rem" : "0rem",
    },
    config: { duration: "300" },
  });

  const props = useSpring({
    from: {
      x: 0,
    },
    to: {
      x: 45,
    },
  });

  return (
    <div className={styles.servicio_detalle}>
      <div className={styles.servicio_detalle_titulo}>
        <p onClick={() => setDesplegado(!desplegado)}>→ {title}</p>
        <animated.button
          style={desplegado ? { transform: props.x.to(value => `rotate(${value}deg)`) } : undefined}
          onClick={() => setDesplegado(!desplegado)}
        >
          +
        </animated.button>
      </div>
      <animated.div
        style={openAnimation}
        className={styles.servicio_desplegable}
      >
        <p>{description}</p>
        <p>{hashtags}</p>
        <div className={styles.servicio_cta_div}>
          <p>{price}</p>
          <Link href={calendlyUrl}>AGENDAR</Link>
        </div>
      </animated.div>
    </div>
  );
}
