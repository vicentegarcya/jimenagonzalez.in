import Layout from "@/components/layout";
import styles from "@/styles/Me.module.css";
import Image from "next/image";
import Subscribe from "@/components/subscribe";
import { isPlayingContext } from "../context/context";
import { useContext } from "react";

export default function Me() {
  const { isPlaying, soundHandler } = useContext(isPlayingContext);

  return (
    <Layout>
      <div className={styles.me}>
        <section className={styles.explora_con_bso}>
          <div className={styles.div1}>
            <p>Explora con BSO</p>
            <img
              src={isPlaying ? "/pause_black.png" : "/play_btn_black.png"}
              alt="play button"
              onClick={soundHandler}
            />
            <div className={styles.ondas}>
              <div className={isPlaying ? styles.onda2 : undefined}></div>
              <div className={isPlaying ? styles.onda3 : undefined}></div>
              <div className={isPlaying ? styles.onda1 : undefined}></div>
              <div className={isPlaying ? styles.onda4 : undefined}></div>
              <div className={isPlaying ? styles.onda5 : undefined}></div>
              <div className={isPlaying ? styles.onda1 : undefined}></div>
              <div className={isPlaying ? styles.onda2 : undefined}></div>
              <div className={isPlaying ? styles.onda3 : undefined}></div>
              <div className={isPlaying ? styles.onda4 : undefined}></div>
              <div className={isPlaying ? styles.onda5 : undefined}></div>
              <div className={isPlaying ? styles.onda5 : undefined}></div>
              <div className={isPlaying ? styles.onda3 : undefined}></div>
              <div className={isPlaying ? styles.onda1 : undefined}></div>
              <div className={isPlaying ? styles.onda3 : undefined}></div>
              <div className={isPlaying ? styles.onda5 : undefined}></div>
              <div className={isPlaying ? styles.onda1 : undefined}></div>
              <div className={isPlaying ? styles.onda4 : undefined}></div>
              <div className={isPlaying ? styles.onda3 : undefined}></div>
              <div className={isPlaying ? styles.onda2 : undefined}></div>
              <div className={isPlaying ? styles.onda1 : undefined}></div>
            </div>
            <p>
              x Cris Víboras <span className={styles.espacio}></span>
              {"//"}
            </p>
          </div>
          <div className={styles.div2}>
            <p>Explora con BSO</p>
            <img
              src={isPlaying ? "/pause_black.png" : "/play_btn_black.png"}
              alt="play button"
              onClick={soundHandler}
            />
            {/* <Image
              src={isPlaying ? "/pause_black.png" : "/play_btn_black.png"}
              width={20}
              height={20}
              onClick={() => setIsPlaying(!isPlaying)}
              priority
            /> */}
            <div className={styles.ondas}>
              <div className={isPlaying ? styles.onda2 : undefined}></div>
              <div className={isPlaying ? styles.onda3 : undefined}></div>
              <div className={isPlaying ? styles.onda1 : undefined}></div>
              <div className={isPlaying ? styles.onda4 : undefined}></div>
              <div className={isPlaying ? styles.onda5 : undefined}></div>
              <div className={isPlaying ? styles.onda1 : undefined}></div>
              <div className={isPlaying ? styles.onda2 : undefined}></div>
              <div className={isPlaying ? styles.onda3 : undefined}></div>
              <div className={isPlaying ? styles.onda4 : undefined}></div>
              <div className={isPlaying ? styles.onda5 : undefined}></div>
              <div className={isPlaying ? styles.onda5 : undefined}></div>
              <div className={isPlaying ? styles.onda3 : undefined}></div>
              <div className={isPlaying ? styles.onda1 : undefined}></div>
              <div className={isPlaying ? styles.onda3 : undefined}></div>
              <div className={isPlaying ? styles.onda5 : undefined}></div>
              <div className={isPlaying ? styles.onda1 : undefined}></div>
              <div className={isPlaying ? styles.onda4 : undefined}></div>
              <div className={isPlaying ? styles.onda3 : undefined}></div>
              <div className={isPlaying ? styles.onda2 : undefined}></div>
              <div className={isPlaying ? styles.onda1 : undefined}></div>
            </div>
            <p>
              x Cris Víboras <span className={styles.espacio}></span>
              {"//"}
            </p>
          </div>
        </section>
        <section className={styles.bullets}>
          <h3>MI PERFIL</h3>
          <p>
            Ingeniera industrial, diseñadora estratégica, profesora de
            innovación y mentora de emprendedorxs; también hago sesiones de
            facilitación creativa para creativxs, asesoramiento estratégico para
            emprendedorxs y coaching espiritual para personas en su camino de
            evolución espiritual.
          </p>
        </section>
        <section className={styles.bullets}>
          <h3>MI COMPROMISO</h3>
          <p>
            Es mi deseo y mi compromiso ofrecer desde un lugar de devoción
            profunda por lo que hago, con una autenticidad y responsabilidad
            impecables.
          </p>
        </section>
        <section className={styles.mi_esencia}>
          <h3>MI ESENCIA</h3>
          <div>
            <p className={styles.div1}>
              sensibilidad, autenticidad, espontaneidad, intuición, creatividad,
              sabiduría,<span className={styles.espacio}></span>
            </p>
            <p className={styles.div2}>
              sensibilidad, autenticidad, espontaneidad, intuición, creatividad,
              sabiduría,<span className={styles.espacio}></span>
            </p>
          </div>
        </section>
        <section className={styles.bullets}>
          <h3>MI EXPERTISE</h3>
          <div className={styles.expertise}>
            <p>#creatividad</p>
            <p>#arte</p>
            <p>#procesocreativo</p>
            <p>#facilitacion</p>
            <p>#estrategia</p>
            <p>#innovacion</p>
            <p>#emprendimiento</p>
            <p>#businessdesign</p>
            <p>#designthinking</p>
            <p>#servicedesign</p>
            <p>#futuresdesign</p>
            <p>#systemsdesign</p>
            <p>#experiencedesign</p>
            <p>#tarot</p>
            <p>#oraculos</p>
            <p>#registrosakasicos</p>
            <p>#astrologia</p>
            <p>#numerologia</p>
            <p>#diseñohumano</p>
            <p>+++</p>
          </div>
        </section>
        <section className={styles.bullets}>
          <h3>MI OTRO PERFIL</h3>
          <p>↑Leo ☉ Géminis ☽ Escorpio</p>
          <p>Generadora manifestante 4/6</p>
          <p>Alma 6, Misión 7</p>
        </section>
        <section className={styles.bullets}>
          <h3>MI HISTORIA “LABORAL”</h3>
          <p className={styles.laboral_text}>
            Estudié industriales y la carrera de piano, y un par de másteres:
            uno en negocio y otro en liderazgo internacional (para saber más, ve
            a mi{" "}
            <a
              href="https://www.linkedin.com/in/jimena-gonzalez-collados/"
              target="_blank"
            >
              perfil de Linkedin
            </a>
            ).
          </p>
          <p className={styles.laboral_text}>
            Trabajé durante años en consultoría estratégica, innovación y diseño
            en proyectos nacionales (BBVA, Acciona, Mapfre, Fundación Repsol) e
            internacionales (Verisure, IKEA, Fortum).{" "}
          </p>
          <p className={styles.laboral_text}>
            También he creado e imparto una asignatura de innovación y
            estrategia para Industriales Escuela de Negocios, y he sido mentora
            de start-ups en diferentes incubadoras, además de dar charlas y
            formaciones en diferentes universidades, escuelas y empresas.
          </p>
          <p className={styles.laboral_text}>
            Como persona muy sensible e intuitiva, desde siempre me llamó
            estudiar y experimentar cosas espirituales (filosofía, religiones,
            astrología, Tarot, Registros Akásicos, numerología…). Sin embargo,
            ha sido en los últimos 3 años que he experimentado el despertar
            espiritual más fuerte de mi vida (¡hasta ahora!), y también ha sido
            desde entonces que ofrezco sesiones con herramientas como Tarot o
            astrología.
          </p>
          <p className={styles.laboral_text}>
            Con este proyecto, estoy ofreciendo experiencias y acompañamientos
            que combinan mi conocimiento de negocio y expertise en metodologías
            creativas y de diseño con mis herramientas espirituales favoritas.
          </p>
        </section>
        <section className={styles.inspirate_cada_mes}>
          <h3>¡NO TE PIERDAS NADA!</h3>
          <p>
            Con la suscripción a mi Newsletter Despertar Creativo recibirás
            inspiración mensual y podrás estar al tanto de todos mis
            lanzamientos y promociones.
          </p>
          <Subscribe pageWhereLoaded={"me"} />
        </section>
      </div>
    </Layout>
  );
}
