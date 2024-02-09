import styles from "@/styles/Home.module.scss";
import Layout from "@/components/layout";
import { useContext, useEffect, useRef, useState } from "react";
import { isPlayingContext } from "../context/context";
import Link from "next/link";
import Image from "next/image";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const { isDesktop } = useContext(isPlayingContext);
  gsap.registerPlugin(ScrollTrigger);

  const mainRef = useRef();
  const heroRef = useRef();
  const gonzalezRef = useRef();
  const jimenaRef = useRef();

  function scrollTo(section) {
    section.scrollIntoView({ behavior: "smooth" });
  }

  useEffect(() => {
    if (isDesktop) {
      setTimeout(() => setIsLoading(false), 2500);
    } else {
      setIsLoading(false);
    }

    //ANIMATIONS
    gsap
      .fromTo(
        gonzalezRef.current,
        { opacity: 1 },
        {
          opacity: 0.02,
          scrollTrigger: {
            trigger: heroRef.current,
            start: "40% top",
            end: "+=30%",
            scrub: 2,
          },
        }
      )
      .timeScale(5);

    gsap
      .fromTo(
        jimenaRef.current,
        { opacity: 1 },
        {
          opacity: 0.02,
          scrollTrigger: {
            trigger: heroRef.current,
            start: "10% top",
            end: "+=20%",
            scrub: 2,
          },
        }
      )
      .timeScale(5);
  }, [isLoading, isDesktop]);

  if (!isLoading)
    return (
      <Layout>
        <main ref={mainRef} className={styles.main}>
          <h1
            ref={gonzalezRef}
            className={`${styles.jimena} ${styles.jimena_surname}`}
          >
            GONZALEZ
          </h1>
          <h1
            ref={jimenaRef}
            className={`${styles.jimena} ${styles.jimena_name}`}
          >
            JIMENA
          </h1>
          <section ref={heroRef} className={styles.hero}>
            <div className={styles.hero_top}>
              <div className={styles.links}>
                <Link
                  href={"https://www.linkedin.com/in/jimena-gonzalez-collados/"}
                >
                  LINKEDIN →
                </Link>
                <Link
                  href={"https://www.linkedin.com/in/jimena-gonzalez-collados/"}
                >
                  STUDIO →
                </Link>
                <Link
                  href={"https://www.linkedin.com/in/jimena-gonzalez-collados/"}
                >
                  BLOG →
                </Link>
              </div>
              <p>(STRATEGIC MIND / SENSITIVE HEART)</p>
              <Link
                href={"mailto:hi@jimenagonzalez.in"}
                className={styles.contacto}
              >
                CONTÁCTAME
              </Link>
            </div>
            <div className={styles.hero_bottom}>
              <p className={styles.scroll}>
                SCROLL<br></br>↓
              </p>
              <p className={styles.text}>
                Creo en el poder de la estrategia para crear negocios con
                propósito, y en el del diseño para elevar el potencial de las
                sinergias creativas.
              </p>
            </div>
            <Image
              src="/jimena_hero.png"
              width={0}
              height={0}
              sizes="20vw"
              style={{ width: "27vw", height: "auto" }}
              alt={"Service Designer Jimena picture of herself"}
            ></Image>
          </section>
          <section className={styles.metodologia}>
            <h5>strategy is the key to manifesting purpose</h5>
            <p>
              Mi metodología combina estrategia de negocio pura con herramientas
              de diseño (service design, business design, futures design…)
            </p>
            <p>
              para acompañar a grandes empresas y proyectos emergentes en la
              creación de valor, propósito y acción alineada.
            </p>
          </section>
          <section className={styles.experiencia}></section>
        </main>
      </Layout>
    );
}
