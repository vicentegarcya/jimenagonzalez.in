import styles from "@/styles/Home.module.css";
import Layout from "@/components/layout";
import { useState } from "react";
import { inter } from "@/utils/fonts";
import { useSpring, animated } from "react-spring";

export default function Home() {
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

  return (
    <Layout>
      <main className={styles.main}>
        <section className={styles.keywords}>
          <p className={styles.text_1}>
            INSPIRACIÓN // CREATIVIDAD // ALMA // EVOLUCIÓN // ESTRATEGIA //
            EXPANSIÓN //
          </p>
          <p className={styles.text_2}>
            INSPIRACIÓN // CREATIVIDAD // ALMA // EVOLUCIÓN // ESTRATEGIA //
            EXPANSIÓN //
          </p>
        </section>
        <section className={styles.inspirate}>
          <h3>INSPÍRATE</h3>
          <p>
            Inspiración (<span>def.</span>): Recibir guía divina, una
            iluminación creativa.
          </p>
        </section>
        <section className={styles.servicios}>
          <div className={styles.servicio}>
            <h3>SOY ARTISTA, CREATIV@ O DISEÑADORA</h3>
            <div className={styles.servicios_grupo}>
              <div className={styles.servicio_detalle}>
                <div className={styles.servicio_detalle_titulo}>
                  <p>→ Descubre tus dones y tu voz creativa</p>
                  <button
                    className={inter.className}
                    onClick={() => setDesplegado(!desplegado)}
                  >
                    {!desplegado ? "+" : "-"}
                  </button>
                </div>
                <animated.div
                  style={openAnimation}
                  className={styles.servicio_desplegable}
                >
                  <p>
                    Comprende tu huella creativa: misión creativa, energías
                    principales, talentos, retos evolutivos de tu camino
                    creativo, expresión creativa principal.
                  </p>
                  <p>#astrologia #creatividad #tarot</p>
                  <div className={styles.servicio_cta_div}>
                    <p>66,00 €</p>
                    <button className={inter.className}>AGENDAR</button>
                  </div>
                </animated.div>
              </div>
              <div className={styles.servicio_detalle}>
                <div className={styles.servicio_detalle_titulo}>
                  <p>→ Intenciona tu siguiente proyecto</p>
                  <button
                    className={inter.className}
                    onClick={() => setDesplegado(!desplegado)}
                  >
                    {!desplegado ? "+" : "-"}
                  </button>
                </div>
                <animated.div
                  style={openAnimation}
                  className={styles.servicio_desplegable}
                >
                  <p>
                    Descubre la identidad de tu próximo proyecto: su naturaleza,
                    su propósito, los aprendizajes que trae, los retos y los
                    dones que te pide expresar.
                  </p>
                  <p>#creatividad #tarot</p>
                  <div className={styles.servicio_cta_div}>
                    <p>55,00 €</p>
                    <button className={inter.className}>AGENDAR</button>
                  </div>
                </animated.div>
              </div>
              <div className={styles.servicio_detalle}>
                <div className={styles.servicio_detalle_titulo}>
                  <p>→ Supera bloqueos creativos</p>
                  <button
                    className={inter.className}
                    onClick={() => setDesplegado(!desplegado)}
                  >
                    {!desplegado ? "+" : "-"}
                  </button>
                </div>
                <animated.div
                  style={openAnimation}
                  className={styles.servicio_desplegable}
                >
                  <p>
                    Comprende el origen de tu bloqueo creativo, los aprendizajes
                    a integrar y las acciones para liberarlo.
                  </p>
                  <p>#creatividad #tarot #registrosakasicos</p>
                  <div className={styles.servicio_cta_div}>
                    <p>55,00 €</p>
                    <button className={inter.className}>AGENDAR</button>
                  </div>
                </animated.div>
              </div>
              <div className={styles.servicio_detalle}>
                <div className={styles.servicio_detalle_titulo}>
                  <p>→ Manifiesta (diseña tu estrategia)</p>
                  <button
                    className={inter.className}
                    onClick={() => setDesplegado(!desplegado)}
                  >
                    {!desplegado ? "+" : "-"}
                  </button>
                </div>
                <animated.div
                  style={openAnimation}
                  className={styles.servicio_desplegable}
                >
                  <p>
                    Conecta con tu auténtica visión, intenciona tu expansión y diseña un plan guiado.
                  </p>
                  <p>#estrategia #business #tarot</p>
                  <div className={styles.servicio_cta_div}>
                    <p>77,00 €</p>
                    <button className={inter.className}>AGENDAR</button>
                  </div>
                </animated.div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
