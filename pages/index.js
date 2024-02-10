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

  const metodologiaTitleRef = useRef();
  const metodologiaPrimerParrafoRef = useRef();
  const experienciaTitleRef = useRef();
  const serviciosTitleRef = useRef();

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
    //HERO
    gsap
      .fromTo(
        gonzalezRef.current,
        { opacity: 1 },
        {
          opacity: 0,
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
          opacity: 0,
          scrollTrigger: {
            trigger: heroRef.current,
            start: "10% top",
            end: "+=20%",
            scrub: 2,
          },
        }
      )
      .timeScale(5);

    //METODOLOGÍA
    gsap.to(metodologiaTitleRef.current, {
      position: "fixed",
      top: "100px",
      left: "3rem",
      ease: "none",
      scrollTrigger: {
        trigger: mainRef.current,
        start: "21.4%",
        end: "+0.01%",
        scrub: 0.01,
      },
    });

    gsap.to(metodologiaTitleRef.current, {
      y: "-140px",
      scrollTrigger: {
        trigger: mainRef.current,
        start: "37%",
        end: "+=1%",
        scrub: 1,
      },
    });

    gsap.to(experienciaTitleRef.current, {
      position: "fixed",
      top: "100px",
      left: "3rem",
      ease: "none",
      scrollTrigger: {
        trigger: mainRef.current,
        start: "39.25%",
        end: "+0.01%",
        scrub: 0.01,
      },
    });
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
            <h5 ref={metodologiaTitleRef}>
              strategy is the key to manifesting purpose
            </h5>
            <p ref={metodologiaPrimerParrafoRef}>
              Mi metodología combina estrategia de negocio pura con herramientas
              de diseño (service design, business design, futures design…)
            </p>
            <p>
              para acompañar a grandes empresas y proyectos emergentes en la
              creación de valor, propósito y acción alineada.
            </p>
          </section>
          <section className={styles.experiencia}>
            <h5 ref={experienciaTitleRef}>i looooooove business</h5>
            <div className={styles.big_companies}>
              <div className={styles.left}>
                <p>para grandes empresas</p>
                <p>
                  Originaria del mundo de la consultoría de <span>negocio</span>
                  , he acompañado a grandes empresas nacionales e
                  internacionales en proyectos de definición{" "}
                  <span>estratégica</span>, innovación, <span>diseño</span> de
                  servicios, investigación e intraemprendimiento.
                </p>
              </div>
              <div className={styles.right}>
                <Image
                  src="/big_companies/BBVA.png"
                  width={0}
                  height={0}
                  sizes="10vw"
                  style={{ width: "7vw", height: "auto" }}
                  alt={"BBVA company logo"}
                ></Image>
                <Image
                  src="/big_companies/ikea.png"
                  width={0}
                  height={0}
                  sizes="10vw"
                  style={{ width: "8vw", height: "auto" }}
                  alt={"BBVA company logo"}
                ></Image>
                <Image
                  src="/big_companies/acciona.png"
                  width={0}
                  height={0}
                  sizes="10vw"
                  style={{ width: "9vw", height: "auto" }}
                  alt={"BBVA company logo"}
                ></Image>
                <Image
                  src="/big_companies/repsol.png"
                  width={0}
                  height={0}
                  sizes="10vw"
                  style={{ width: "10vw", height: "auto" }}
                  alt={"BBVA company logo"}
                ></Image>
                <Image
                  src="/big_companies/mapfre.png"
                  width={0}
                  height={0}
                  sizes="10vw"
                  style={{ width: "10vw", height: "auto" }}
                  alt={"BBVA company logo"}
                ></Image>
                <Image
                  src="/big_companies/securitas.png"
                  width={0}
                  height={0}
                  sizes="10vw"
                  style={{ width: "7vw", height: "auto" }}
                  alt={"BBVA company logo"}
                ></Image>
                <Image
                  src="/big_companies/verisure.png"
                  width={0}
                  height={0}
                  sizes="10vw"
                  style={{ width: "10vw", height: "auto" }}
                  alt={"BBVA company logo"}
                ></Image>
                <Image
                  src="/big_companies/notpla.png"
                  width={0}
                  height={0}
                  sizes="10vw"
                  style={{ width: "10vw", height: "auto" }}
                  alt={"BBVA company logo"}
                ></Image>
                <Image
                  src="/big_companies/fortum.png"
                  width={0}
                  height={0}
                  sizes="10vw"
                  style={{ width: "10vw", height: "auto" }}
                  alt={"BBVA company logo"}
                ></Image>
              </div>
            </div>
            <div className={styles.medium_companies}>
              <div className={styles.left}>
                <p>para agencias y pymes</p>
                <p>
                  También he trabajado en proyectos estratégicos para{" "}
                  <span>pequeñas y medianas</span> empresas, y mentorizado a{" "}
                  <span>startups</span> en fase semilla y de escalado en
                  diversas <span>incubadoras y aceleradoras</span>, aportando la
                  visión estratégica y el valor del diseño.
                </p>
              </div>
              <div className={styles.right}>
                <Image
                  src="/pymes/capgemini.png"
                  width={0}
                  height={0}
                  sizes="10vw"
                  style={{ width: "10vw", height: "auto" }}
                  alt={"BBVA company logo"}
                ></Image>
                <Image
                  src="/pymes/frog.png"
                  width={0}
                  height={0}
                  sizes="10vw"
                  style={{ width: "7vw", height: "auto" }}
                  alt={"BBVA company logo"}
                ></Image>
                <Image
                  src="/pymes/norrsken.png"
                  width={0}
                  height={0}
                  sizes="10vw"
                  style={{ width: "10vw", height: "auto" }}
                  alt={"BBVA company logo"}
                ></Image>
                <Image
                  src="/pymes/garajedeideas.png"
                  width={0}
                  height={0}
                  sizes="10vw"
                  style={{ width: "14vw", height: "auto" }}
                  alt={"BBVA company logo"}
                ></Image>
                <Image
                  src="/pymes/SPRMBNGS.png"
                  width={0}
                  height={0}
                  sizes="10vw"
                  style={{ width: "7vw", height: "auto" }}
                  alt={"BBVA company logo"}
                ></Image>
                <Image
                  src="/pymes/escuela21.png"
                  width={0}
                  height={0}
                  sizes="10vw"
                  style={{ width: "10vw", height: "auto" }}
                  alt={"BBVA company logo"}
                ></Image>
                <Image
                  src="/pymes/baobab.png"
                  width={0}
                  height={0}
                  sizes="10vw"
                  style={{ width: "10vw", height: "auto" }}
                  alt={"BBVA company logo"}
                ></Image>
                <Image
                  src="/pymes/the-candy-toy-factory.png"
                  width={0}
                  height={0}
                  sizes="10vw"
                  style={{ width: "8vw", height: "auto" }}
                  alt={"BBVA company logo"}
                ></Image>
                <Image
                  src="/pymes/asm.png"
                  width={0}
                  height={0}
                  sizes="10vw"
                  style={{ width: "8vw", height: "auto" }}
                  alt={"BBVA company logo"}
                ></Image>
              </div>
            </div>
            <div className={styles.universities}>
              <div className={styles.left}>
                <p>para universidades</p>
                <p>
                  Por último (pero no menos importante, ¡esto me encanta!),
                  desde hace 4 años soy <span>docente</span> de innovación y
                  estrategia en UPM, y colaboradora con otras instituciones
                  universitarias como UV, UPV o Mondragon en actividades de{" "}
                  <span>emprendimiento</span> y <span>bootcamps</span> de
                  innovación social y ambiental.
                </p>
              </div>
              <div className={styles.right}>
                <Image
                  src="/universities/upm.png"
                  width={0}
                  height={0}
                  sizes="10vw"
                  style={{ width: "12vw", height: "auto" }}
                  alt={"BBVA company logo"}
                ></Image>
                <Image
                  src="/universities/mondragon.png"
                  width={0}
                  height={0}
                  sizes="10vw"
                  style={{ width: "12vw", height: "auto" }}
                  alt={"BBVA company logo"}
                ></Image>
                <Image
                  src="/universities/upv.png"
                  width={0}
                  height={0}
                  sizes="10vw"
                  style={{ width: "12vw", height: "auto" }}
                  alt={"BBVA company logo"}
                ></Image>
                <Image
                  src="/universities/uv.png"
                  width={0}
                  height={0}
                  sizes="10vw"
                  style={{ width: "12vw", height: "auto" }}
                  alt={"BBVA company logo"}
                ></Image>
                <Image
                  src="/universities/xiji.png"
                  width={0}
                  height={0}
                  sizes="10vw"
                  style={{ width: "12vw", height: "auto" }}
                  alt={"BBVA company logo"}
                ></Image>
                <Image
                  src="/universities/IEN.png"
                  width={0}
                  height={0}
                  sizes="10vw"
                  style={{ width: "12vw", height: "auto" }}
                  alt={"BBVA company logo"}
                ></Image>
              </div>
            </div>
          </section>
          <section className={styles.servicios}>
            <h5 ref={serviciosTitleRef}>creativity is life, life is creativity, sooo let&apos;s create together!</h5>
            <div></div>
          </section>
        </main>
      </Layout>
    );
}
