import styles from "@/styles/Home.module.scss";
import Layout from "@/components/layout";
import { useContext, useEffect, useRef, useState } from "react";
import { isPlayingContext } from "../context/context";
import Link from "next/link";
import Image from "next/image";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Service from "@/components/service";
import PropuestaForm from "@/components/propuestaForm";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const { isDesktop } = useContext(isPlayingContext);
  gsap.registerPlugin(ScrollTrigger);

  const mainRef = useRef();
  const heroRef = useRef();
  const gonzalezRef = useRef();
  const jimenaRef = useRef();

  const metodologiaTitleRef = useRef();
  const experienciaTitleRef = useRef();
  const serviciosTitleRef = useRef();
  const serviciosSectionRef = useRef();

  const bigCompaniesTextRef = useRef();
  const pymesTextRef = useRef();
  const universityTextRef = useRef();
  const companiesLogosRef = useRef();

  const contactFormRef = useRef();
  const contactFormMainRef = useRef();

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
        trigger: metodologiaTitleRef.current,
        start: "top 14.65%",
        end: "+=0.01%",
        scrub: 0.01,
      },
    });

    gsap.to(metodologiaTitleRef.current, {
      y: "-140px",
      scrollTrigger: {
        trigger: experienciaTitleRef.current,
        start: "top 25%",
        end: "+=2%",
        scrub: 1,
      },
    });

    //EXPERIENCIA
    //MAIN TITLE
    gsap.to(experienciaTitleRef.current, {
      position: "fixed",
      top: "100px",
      left: "3rem",
      ease: "none",
      scrollTrigger: {
        trigger: experienciaTitleRef.current,
        start: "top 14.65%",
        end: "+=0.01%",
        scrub: 0.01,
      },
    });

    gsap.to(experienciaTitleRef.current, {
      y: "-140px",
      scrollTrigger: {
        trigger: serviciosTitleRef.current,
        start: "top 25%",
        end: "+=2%",
        scrub: 1,
      },
    });

    //LOGOS
    gsap.to(companiesLogosRef.current, {
      position: "fixed",
      top: "100px",
      right: "3rem",
      ease: "none",
      scrollTrigger: {
        trigger: experienciaTitleRef.current,
        start: "top 14.65%",
        end: "+=0.01%",
        scrub: 0.01,
      },
    });

    gsap.to(companiesLogosRef.current, {
      position: "absolute",
      scrollTrigger: {
        trigger: serviciosTitleRef.current,
        start: "top 98.65%",
        end: "+=0.01%",
        scrub: 0.01,
      },
    });

    //SERVICIOS
    gsap.to(serviciosTitleRef.current, {
      position: "fixed",
      top: "100px",
      left: "3rem",
      ease: "none",
      scrollTrigger: {
        trigger: serviciosTitleRef.current,
        start: "top 14.65%",
        end: "+=0.01%",
        scrub: 0.01,
      },
    });

    gsap.to(serviciosTitleRef.current, {
      y: "-140px",
      scrollTrigger: {
        trigger: serviciosSectionRef.current,
        start: "bottom 99%",
        end: "+=2%",
        scrub: 1,
      },
    });

    //CONTACT FORM
    gsap.to(contactFormRef.current, {
      top: 0,
      left: 0,
      transform: "scale(1)",
      scrollTrigger: {
        trigger: serviciosSectionRef.current,
        start: "bottom 99%",
        end: "+=20%",
        scrub: 1.5,
      },
    });

    gsap.to(contactFormMainRef.current, {
      top: "4.5rem",
      transform: "scale(1)",
      scrollTrigger: {
        trigger: serviciosSectionRef.current,
        start: "bottom 99%",
        end: "+=25%",
        scrub: 2.25,
      },
    });
  }, [isLoading, isDesktop]);

  if (!isLoading)
    return (
      <Layout>
        <main ref={mainRef} className={styles.main} id="main">
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
          <section ref={heroRef} className={styles.hero} id="hero">
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
              <div>
                <Link
                  href={"mailto:hi@jimenagonzalez.in"}
                  className={styles.contacto}
                >
                  CONTÁCTAME
                </Link>
              </div>
            </div>
            <div className={styles.hero_bottom}>
              <p className={styles.scroll}>
                SCROLL<br></br>↓
              </p>
              <p className={styles.text}>
                Success is the result of a good strategy
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
          <section className={styles.metodologia} id="metodologia">
            <h5 ref={metodologiaTitleRef}>
              strategy is the key to manifesting purpose
            </h5>
            <p>
              Mi metodología combina estrategia de negocio pura con herramientas
              de diseño (service design, business design, futures design…)
            </p>
            <p>
              para acompañar a grandes empresas y proyectos emergentes en la
              creación de valor, propósito y acción alineada.
            </p>
          </section>
          <section className={styles.experiencia} id="experiencia">
            <h5 ref={experienciaTitleRef}>i looooooove business</h5>
            <div className={styles.left}>
              <div className={styles.big_companies}>
                <p ref={bigCompaniesTextRef}>
                  Originaria del mundo de la consultoría de <span>negocio</span>
                  , he acompañado a grandes empresas nacionales e
                  internacionales en proyectos de definición{" "}
                  <span>estratégica</span>, innovación, <span>diseño</span> de
                  servicios, investigación e intraemprendimiento.
                </p>
              </div>
              <div className={styles.medium_companies}>
                <p ref={pymesTextRef}>
                  También he trabajado en proyectos estratégicos para{" "}
                  <span>pequeñas y medianas</span> empresas, y mentorizado a{" "}
                  <span>startups</span> en fase semilla y de escalado en
                  diversas <span>incubadoras y aceleradoras</span>, aportando la
                  visión estratégica y el valor del diseño.
                </p>
              </div>
              <div className={styles.universities}>
                <p ref={universityTextRef}>
                  Por último (pero no menos importante, ¡esto me encanta!),
                  desde hace 4 años soy <span>docente</span> de innovación y
                  estrategia en UPM, y colaboradora con otras instituciones
                  universitarias como UV, UPV o Mondragon en actividades de{" "}
                  <span>emprendimiento</span> y <span>bootcamps</span> de
                  innovación social y ambiental.
                </p>
              </div>
            </div>
            <div className={styles.right} ref={companiesLogosRef}>
              <Image
                src="/big_companies/BBVA.png"
                width={0}
                height={0}
                sizes="10vw"
                style={{ width: "7vw", height: "auto" }}
                alt={"BBVA company logo"}
                className={styles.logo1}
              ></Image>
              <Image
                src="/big_companies/ikea.png"
                width={0}
                height={0}
                sizes="10vw"
                style={{ width: "8vw", height: "auto" }}
                alt={"BBVA company logo"}
                className={styles.logo2}
              ></Image>
              <Image
                src="/big_companies/acciona.png"
                width={0}
                height={0}
                sizes="10vw"
                style={{ width: "9vw", height: "auto" }}
                alt={"BBVA company logo"}
                className={styles.logo3}
              ></Image>
              <Image
                src="/big_companies/repsol.png"
                width={0}
                height={0}
                sizes="10vw"
                style={{ width: "10vw", height: "auto" }}
                alt={"BBVA company logo"}
                className={styles.logo4}
              ></Image>
              <Image
                src="/big_companies/mapfre.png"
                width={0}
                height={0}
                sizes="10vw"
                style={{ width: "10vw", height: "auto" }}
                alt={"BBVA company logo"}
                className={styles.logo5}
              ></Image>
              <Image
                src="/big_companies/securitas.png"
                width={0}
                height={0}
                sizes="10vw"
                style={{ width: "7vw", height: "auto" }}
                alt={"BBVA company logo"}
                className={styles.logo6}
              ></Image>
              <Image
                src="/big_companies/verisure.png"
                width={0}
                height={0}
                sizes="10vw"
                style={{ width: "10vw", height: "auto" }}
                alt={"BBVA company logo"}
                className={styles.logo7}
              ></Image>
              <Image
                src="/big_companies/notpla.png"
                width={0}
                height={0}
                sizes="10vw"
                style={{ width: "10vw", height: "auto" }}
                alt={"BBVA company logo"}
                className={styles.logo8}
              ></Image>
              <Image
                src="/big_companies/fortum.png"
                width={0}
                height={0}
                sizes="10vw"
                style={{ width: "10vw", height: "auto" }}
                alt={"BBVA company logo"}
                className={styles.logo9}
              ></Image>
              <Image
                src="/pymes/capgemini.png"
                width={0}
                height={0}
                sizes="10vw"
                style={{ width: "10vw", height: "auto" }}
                alt={"BBVA company logo"}
                className={styles.logo1}
              ></Image>
              <Image
                src="/pymes/frog.png"
                width={0}
                height={0}
                sizes="10vw"
                style={{ width: "7vw", height: "auto" }}
                alt={"BBVA company logo"}
                className={styles.logo2}
              ></Image>
              <Image
                src="/pymes/norrsken.png"
                width={0}
                height={0}
                sizes="10vw"
                style={{ width: "10vw", height: "auto" }}
                alt={"BBVA company logo"}
                className={styles.logo3}
              ></Image>
              <Image
                src="/pymes/garajedeideas.png"
                width={0}
                height={0}
                sizes="10vw"
                style={{ width: "14vw", height: "auto" }}
                alt={"BBVA company logo"}
                className={styles.logo4}
              ></Image>
              <Image
                src="/pymes/SPRMBNGS.png"
                width={0}
                height={0}
                sizes="10vw"
                style={{ width: "7vw", height: "auto" }}
                alt={"BBVA company logo"}
                className={styles.logo5}
              ></Image>
              <Image
                src="/pymes/escuela21.png"
                width={0}
                height={0}
                sizes="10vw"
                style={{ width: "10vw", height: "auto" }}
                alt={"BBVA company logo"}
                className={styles.logo6}
              ></Image>
              <Image
                src="/pymes/baobab.png"
                width={0}
                height={0}
                sizes="10vw"
                style={{ width: "10vw", height: "auto" }}
                alt={"BBVA company logo"}
                className={styles.logo7}
              ></Image>
              <Image
                src="/pymes/the-candy-toy-factory.png"
                width={0}
                height={0}
                sizes="10vw"
                style={{ width: "8vw", height: "auto" }}
                alt={"BBVA company logo"}
                className={styles.logo8}
              ></Image>
              <Image
                src="/pymes/asm.png"
                width={0}
                height={0}
                sizes="10vw"
                style={{ width: "8vw", height: "auto" }}
                alt={"BBVA company logo"}
                className={styles.logo9}
              ></Image>
              <Image
                src="/universities/upm.png"
                width={0}
                height={0}
                sizes="10vw"
                style={{ width: "12vw", height: "auto" }}
                alt={"BBVA company logo"}
                className={styles.logo1}
              ></Image>
              <Image
                src="/universities/mondragon.png"
                width={0}
                height={0}
                sizes="10vw"
                style={{ width: "12vw", height: "auto" }}
                alt={"BBVA company logo"}
                className={styles.logo2}
              ></Image>
              <Image
                src="/universities/upv.png"
                width={0}
                height={0}
                sizes="10vw"
                style={{ width: "12vw", height: "auto" }}
                alt={"BBVA company logo"}
                className={styles.logo3}
              ></Image>
              <Image
                src="/universities/uv.png"
                width={0}
                height={0}
                sizes="10vw"
                style={{ width: "12vw", height: "auto" }}
                alt={"BBVA company logo"}
                className={styles.logo4}
              ></Image>
              <Image
                src="/universities/xiji.png"
                width={0}
                height={0}
                sizes="10vw"
                style={{ width: "12vw", height: "auto" }}
                alt={"BBVA company logo"}
                className={styles.logo5}
              ></Image>
              <Image
                src="/universities/IEN.png"
                width={0}
                height={0}
                sizes="10vw"
                style={{ width: "12vw", height: "auto" }}
                alt={"BBVA company logo"}
                className={styles.logo6}
              ></Image>
            </div>
          </section>
          <section
            ref={serviciosSectionRef}
            className={styles.servicios}
            id="servicios"
          >
            <h5 ref={serviciosTitleRef}>
              creativity is life, life is creativity, sooo let&apos;s create
              together!
            </h5>
            <div className={styles.servicios_main}>
              <Service
                title={"Estrategia y Business Design"}
                bubbles={[
                  "Visión",
                  "Plan estratégico",
                  "Diseño de futuros",
                  "Modelo de negocio",
                ]}
                descriptions={[
                  "Afinando la visión del negocio, su misión interna y su propósito innovador en el sistema.",
                  "Alineando visión con acción y objetivos gracias a la creación de un plan estratégico y táctico.",
                  "Percibiendo las señales y tendencias para diseñar diferentes estrategias de presente y futuro.",
                  "Creando un modelo de negocio viable y consistente, con una cartera de productos y servicios relevantes para el mundo.",
                ]}
                isDesplegado={true}
              />
              <Service
                title={"Diseño de servicios y facilitación creativa"}
                bubbles={[
                  "Investigación cuali-cuanti",
                  "Diseño de experiencia",
                  "Ideación y conceptualización",
                  "Facilitación de co-creación",
                ]}
                descriptions={[
                  "Indagando en las necesidades de los usuarios (investigación de usuarios) y comprendiendo el mercado (investigación de mercado) para una creación basada en insights.",
                  "Creando una experiencia de cliente fluida y con un valor supremo.",
                  "Generando disrupción y creatividad innovadora para lograr un concepto único.",
                  "Creando la metodología y facilitando la sinergia creativa entre todos los participantes del proyecto.",
                ]}
              />
              <Service
                title={"Diseño y desarrollo web"}
                bubbles={[
                  "Web corporativa",
                  "Portfolio creativo",
                  "Aplicación web",
                  "Consultoría web",
                ]}
                descriptions={[
                  "Afinando la visión del negocio, su misión interna y su propósito innovador en el sistema.",
                  "Alineando visión con acción y objetivos gracias a la creación de un plan estratégico y táctico.",
                  "Percibiendo las señales y tendencias para diseñar diferentes estrategias de presente y futuro.",
                  "Creando un modelo de negocio viable y consistente, con una cartera de productos y servicios relevantes para el mundo.",
                ]}
              />
            </div>
          </section>
          <section ref={contactFormRef} className={styles.contact_form}>
            <div className={styles.contact_form_backpaper}></div>
            <div ref={contactFormMainRef} className={styles.contact_form_main}>
              <div className={styles.contact_form_data}>
                <h5>CONTACTO</h5>
                <p>Loren ipsum</p>
                <p>Loren ipsum</p>
                <p>Loren ipsum</p>
              </div>
              <PropuestaForm></PropuestaForm>
            </div>
          </section>
        </main>
      </Layout>
    );
}
