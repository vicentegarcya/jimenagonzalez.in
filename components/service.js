import Link from "next/link";
import styles from "./service.module.css";
import { useState } from "react";
import { useSpring, animated } from "react-spring";

export default function Service({ title, bubbles, descriptions }) {
  const [desplegado, setDesplegado] = useState(false);
  const [selectedService, setSelectedService] = useState(1);

  const openAnimation = useSpring({
    from: { opacity: "0", maxHeight: "80px", marginBottom: "0rem" },
    to: {
      opacity: "1",
      maxHeight: desplegado ? "500px" : "80px",
      marginBottom: desplegado ? "1rem" : "0rem",
    },
    config: { duration: "300" },
  });

  return (
    <div className={styles.servicio_div}>
      <h5
        className={styles.servicio_title}
        onClick={() => setDesplegado(!desplegado)}
      >
        ✺ {title}
      </h5>
      <animated.div style={openAnimation} className={styles.servicio_content}>
        <div className={styles.servicio_bubles}>
          {bubbles.map((bubble, index) => {
            return (
              <button
                key={index}
                className={
                  selectedService === index + 1 && desplegado
                    ? styles.button_selected
                    : undefined
                }
                onClick={() => setSelectedService(index + 1)}
              >
                {bubble}
              </button>
            );
          })}
        </div>
        <div className={styles.servicio_text}>
          {descriptions.map((description, index) => {
            return (
              <p
                key={index}
                className={
                  selectedService === index + 1
                    ? styles.button_selected
                    : undefined
                }
                style={{
                  display: selectedService === index + 1 ? "block" : "none",
                }}
                onClick={() => setSelectedService(index + 1)}
              >
                {description}
              </p>
            );
          })}
        </div>
      </animated.div>
    </div>
  );
}
