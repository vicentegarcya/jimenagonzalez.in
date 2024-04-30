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
import LoadingPage from "@/components/loadingPage";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [service, setService] = useState("");
  const { isDesktop } = useContext(isPlayingContext);
  gsap.registerPlugin(ScrollTrigger);

  const mainRef = useRef();
  const heroRef = useRef();
  const gonzalezRef = useRef();
  const jimenaRef = useRef();

  const metodologiaTitleRef = useRef();
  const metodologiaDivRef = useRef();
  const experienciaTitleRef = useRef();
  const serviciosTitleRef = useRef();
  const serviciosDivRef = useRef();
  const serviciosSectionRef = useRef();

  const bigCompaniesTextRef = useRef();
  const pymesTextRef = useRef();
  const universityTextRef = useRef();
  const companiesLogosRef = useRef();

  const contactFormRef = useRef();
  const contactFormMainRef = useRef();

  const handleClickService = (service) => {
    setService(service);
    window.scrollTo(0, document.body.scrollHeight);
  };

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 6000);

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
    /* gsap.to(metodologiaTitleRef.current, {
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

    gsap.to(metodologiaDivRef.current, {
      marginTop: "37vh",
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
    }); */

    //EXPERIENCIA
    //MAIN TITLE
    /* gsap.to(experienciaTitleRef.current, {
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
    }); */

    //LOGOS
    gsap.to(companiesLogosRef.current, {
      opacity: 1,
      visibility: "visible",
      ease: "none",
      scrollTrigger: {
        trigger: experienciaTitleRef.current,
        start: "top 33%",
        end: "+=0.01%",
        scrub: 0.01,
      },
    });

    gsap.fromTo(
      companiesLogosRef.current,
      {
        opacity: 1,
      },
      {
        opacity: 0,
        visibility: "hidden",
        position: "absolute",
        scrollTrigger: {
          trigger: universityTextRef.current,
          start: "bottom 30%",
          end: "+=0.01%",
          scrub: 0.01,
        },
      }
    );

    //SERVICIOS
    /* gsap.to(serviciosTitleRef.current, {
      position: "fixed",
      top: "100px",
      left: "3rem",
      ease: "none",
      scrollTrigger: {
        trigger: serviciosTitleRef.current,
        start: "top 18.65%",
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

    gsap.to(serviciosDivRef.current, {
      marginTop: "37vh",
      ease: "none",
      scrollTrigger: {
        trigger: serviciosTitleRef.current,
        start: "top 18.65%",
        end: "+=0.01%",
        scrub: 0.01,
      },
    }); */

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

  if (isLoading) return <LoadingPage />;

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
                <button
                  onClick={() => window.scrollTo(0, document.body.scrollHeight)}
                  className={styles.contacto}
                >
                  CONTÁCTAME
                </button>
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
              Strategy is the key to manifesting purpose
            </h5>
            <div ref={metodologiaDivRef}>
              <p>
                Mi metodología combina estrategia de negocio pura con
                herramientas de diseño para acompañar a grandes empresas y
                proyectos emergentes en la creación de{" "}
                <span>valor, propósito y acción alineada </span>.
              </p>
              <p>
                Para cada proyecto, creo un marco metodológico ad hoc para dotar
                de coherencia y claridad a todo el proceso. Facilito la
                co-creación de una estrategia que permita hacer realidad la
                visión, apoyándome en mi expertise de negocio y diseño.
              </p>
              <div className={styles.cinta_transportadora}>
                <p>
                  <span className={styles.keyword}>
                    Strategy <span className={styles.emoji}>💻</span>
                  </span>
                  Diseño estratégico <span className={styles.emoji}>🎛</span>
                  Pensamiento sistémico <span className={styles.emoji}>💡</span>
                  Diseño de futuros <span className={styles.emoji}>🔭</span>
                  <span className={styles.keyword}>
                    Business Design <span className={styles.emoji}>💼</span>
                  </span>
                  Análisis de mercado <span className={styles.emoji}>🔍</span>
                </p>
                <p>
                  <span className={styles.keyword}>
                    Strategy <span className={styles.emoji}>💻</span>
                  </span>
                  Diseño estratégico <span className={styles.emoji}>🎛</span>
                  Pensamiento sistémico <span className={styles.emoji}>💡</span>
                  Diseño de futuros <span className={styles.emoji}>🔭</span>
                  <span className={styles.keyword}>
                    Business Design <span className={styles.emoji}>💼</span>
                  </span>
                  Análisis de mercado <span className={styles.emoji}>🔍</span>
                </p>
              </div>
              <div className={styles.cinta_transportadora_2}>
                <div>
                  <div>
                    <p>Investigación de usuarios</p>
                    <svg
                      viewBox="0 0 200 200"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="#BAE6FF"
                        d="M53,-57.8C66.5,-51.8,73.8,-33,70.3,-17.6C66.9,-2.1,52.8,10.2,42.9,22.3C33,34.5,27.2,46.7,17.4,52.2C7.5,57.7,-6.3,56.5,-20.5,52.9C-34.8,49.2,-49.4,43.1,-53.9,32.5C-58.4,21.9,-52.8,6.8,-51.3,-10.3C-49.8,-27.4,-52.5,-46.6,-44.6,-53.6C-36.8,-60.6,-18.4,-55.5,0.7,-56.3C19.7,-57.1,39.5,-63.8,53,-57.8Z"
                        transform="translate(100 100)"
                      />
                    </svg>
                  </div>
                  <div>
                    <p>User Experience</p>
                    <svg
                      viewBox="0 0 200 200"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="#A7F0BA"
                        d="M39.8,-60.6C52.7,-53.6,65.2,-44.5,73.8,-31.9C82.3,-19.3,86.8,-3.1,83.6,11.3C80.4,25.6,69.4,38.1,57.4,46.9C45.4,55.7,32.4,60.9,18.5,66.6C4.7,72.2,-10,78.3,-22,74.8C-34,71.4,-43.3,58.5,-50.2,46C-57.1,33.5,-61.7,21.5,-62.7,9.5C-63.7,-2.5,-61.1,-14.6,-56.1,-25.6C-51.1,-36.6,-43.6,-46.4,-33.9,-54.9C-24.1,-63.4,-12.1,-70.4,0.7,-71.4C13.4,-72.5,26.8,-67.5,39.8,-60.6Z"
                        transform="translate(100 100)"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className={styles.keyword}>Service Design</p>
                    <svg
                      viewBox="0 0 200 200"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="#E8DAFF"
                        d="M50.5,-65.2C64.2,-59.6,73.3,-43.2,70.9,-28.3C68.4,-13.4,54.5,-0.1,50.4,17.6C46.3,35.4,52.2,57.6,45.4,62.8C38.7,67.9,19.3,56,2.2,53C-15,50,-30,56,-43.2,52.9C-56.5,49.9,-68,37.9,-74.6,23C-81.1,8.1,-82.7,-9.6,-73.6,-19.7C-64.5,-29.7,-44.7,-32,-30.7,-37.5C-16.6,-43,-8.3,-51.7,5,-58.6C18.4,-65.6,36.8,-70.8,50.5,-65.2Z"
                        transform="translate(100 100)"
                      />
                    </svg>
                  </div>
                  <div>
                    <p>Design Thinking</p>
                    <svg
                      viewBox="0 0 200 200"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="#9EF0F0"
                        d="M40.9,-72.4C48.5,-66.4,47,-46.4,54.9,-32C62.8,-17.5,80.1,-8.8,85.4,3C90.6,14.9,83.9,29.7,74.1,40.8C64.3,51.9,51.4,59.3,38.5,62.6C25.6,65.9,12.8,65.3,-0.3,65.8C-13.3,66.2,-26.7,67.7,-37.7,63.3C-48.7,58.9,-57.4,48.5,-67.1,37C-76.7,25.5,-87.2,12.7,-87.5,-0.2C-87.8,-13.1,-77.9,-26.2,-68.9,-38.9C-60,-51.6,-52,-63.9,-40.6,-67.7C-29.3,-71.5,-14.7,-66.9,1,-68.6C16.6,-70.3,33.3,-78.4,40.9,-72.4Z"
                        transform="translate(100 100)"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className={styles.keyword}>Facilitación</p>
                    <svg
                      viewBox="0 0 200 200"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="#FFD6E8"
                        d="M27.1,-55.8C30.5,-45,25.4,-28.4,24.9,-18.1C24.4,-7.8,28.4,-3.9,38.8,6C49.2,15.9,66,31.9,66,41.1C65.9,50.3,48.9,52.8,35.1,61.2C21.3,69.5,10.7,83.7,1.8,80.6C-7.1,77.6,-14.3,57.3,-25.7,47.6C-37,37.9,-52.7,38.7,-63.9,32.5C-75,26.3,-81.7,13.2,-76.7,2.9C-71.7,-7.4,-55.1,-14.8,-46.6,-25.6C-38.1,-36.5,-37.8,-50.7,-31.4,-59.8C-25,-68.8,-12.5,-72.5,-0.3,-72C11.9,-71.4,23.7,-66.5,27.1,-55.8Z"
                        transform="translate(100 100)"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <div>
                    <p>Investigación de usuarios</p>
                    <svg
                      viewBox="0 0 200 200"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="#BAE6FF"
                        d="M53,-57.8C66.5,-51.8,73.8,-33,70.3,-17.6C66.9,-2.1,52.8,10.2,42.9,22.3C33,34.5,27.2,46.7,17.4,52.2C7.5,57.7,-6.3,56.5,-20.5,52.9C-34.8,49.2,-49.4,43.1,-53.9,32.5C-58.4,21.9,-52.8,6.8,-51.3,-10.3C-49.8,-27.4,-52.5,-46.6,-44.6,-53.6C-36.8,-60.6,-18.4,-55.5,0.7,-56.3C19.7,-57.1,39.5,-63.8,53,-57.8Z"
                        transform="translate(100 100)"
                      />
                    </svg>
                  </div>
                  <div>
                    <p>User Experience</p>
                    <svg
                      viewBox="0 0 200 200"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="#A7F0BA"
                        d="M39.8,-60.6C52.7,-53.6,65.2,-44.5,73.8,-31.9C82.3,-19.3,86.8,-3.1,83.6,11.3C80.4,25.6,69.4,38.1,57.4,46.9C45.4,55.7,32.4,60.9,18.5,66.6C4.7,72.2,-10,78.3,-22,74.8C-34,71.4,-43.3,58.5,-50.2,46C-57.1,33.5,-61.7,21.5,-62.7,9.5C-63.7,-2.5,-61.1,-14.6,-56.1,-25.6C-51.1,-36.6,-43.6,-46.4,-33.9,-54.9C-24.1,-63.4,-12.1,-70.4,0.7,-71.4C13.4,-72.5,26.8,-67.5,39.8,-60.6Z"
                        transform="translate(100 100)"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className={styles.keyword}>Service Design</p>
                    <svg
                      viewBox="0 0 200 200"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="#E8DAFF"
                        d="M50.5,-65.2C64.2,-59.6,73.3,-43.2,70.9,-28.3C68.4,-13.4,54.5,-0.1,50.4,17.6C46.3,35.4,52.2,57.6,45.4,62.8C38.7,67.9,19.3,56,2.2,53C-15,50,-30,56,-43.2,52.9C-56.5,49.9,-68,37.9,-74.6,23C-81.1,8.1,-82.7,-9.6,-73.6,-19.7C-64.5,-29.7,-44.7,-32,-30.7,-37.5C-16.6,-43,-8.3,-51.7,5,-58.6C18.4,-65.6,36.8,-70.8,50.5,-65.2Z"
                        transform="translate(100 100)"
                      />
                    </svg>
                  </div>
                  <div>
                    <p>Design Thinking</p>
                    <svg
                      viewBox="0 0 200 200"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="#9EF0F0"
                        d="M40.9,-72.4C48.5,-66.4,47,-46.4,54.9,-32C62.8,-17.5,80.1,-8.8,85.4,3C90.6,14.9,83.9,29.7,74.1,40.8C64.3,51.9,51.4,59.3,38.5,62.6C25.6,65.9,12.8,65.3,-0.3,65.8C-13.3,66.2,-26.7,67.7,-37.7,63.3C-48.7,58.9,-57.4,48.5,-67.1,37C-76.7,25.5,-87.2,12.7,-87.5,-0.2C-87.8,-13.1,-77.9,-26.2,-68.9,-38.9C-60,-51.6,-52,-63.9,-40.6,-67.7C-29.3,-71.5,-14.7,-66.9,1,-68.6C16.6,-70.3,33.3,-78.4,40.9,-72.4Z"
                        transform="translate(100 100)"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className={styles.keyword}>Facilitación</p>
                    <svg
                      viewBox="0 0 200 200"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="#FFD6E8"
                        d="M27.1,-55.8C30.5,-45,25.4,-28.4,24.9,-18.1C24.4,-7.8,28.4,-3.9,38.8,6C49.2,15.9,66,31.9,66,41.1C65.9,50.3,48.9,52.8,35.1,61.2C21.3,69.5,10.7,83.7,1.8,80.6C-7.1,77.6,-14.3,57.3,-25.7,47.6C-37,37.9,-52.7,38.7,-63.9,32.5C-75,26.3,-81.7,13.2,-76.7,2.9C-71.7,-7.4,-55.1,-14.8,-46.6,-25.6C-38.1,-36.5,-37.8,-50.7,-31.4,-59.8C-25,-68.8,-12.5,-72.5,-0.3,-72C11.9,-71.4,23.7,-66.5,27.1,-55.8Z"
                        transform="translate(100 100)"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className={styles.experiencia} id="experiencia">
            <h5 ref={experienciaTitleRef}>i looooooove business</h5>
            <div>
              <div className={styles.left}>
                <div className={styles.big_companies}>
                  <p ref={bigCompaniesTextRef}>
                    Originaria del mundo de la consultoría de
                    <span> negocio </span>, he acompañado a grandes empresas
                    nacionales e internacionales en proyectos de definición{" "}
                    <span>estratégica </span>, innovación,<span> diseño </span>{" "}
                    de servicios, investigación e intraemprendimiento.
                  </p>
                </div>
                <div className={styles.medium_companies}>
                  <p ref={pymesTextRef}>
                    También he trabajado en proyectos estratégicos para{" "}
                    <span>pequeñas y medianas </span> empresas, y mentorizado a
                    <span> startups </span> en fase semilla y de escalado en
                    diversas <span>incubadoras y aceleradoras </span>, aportando
                    la visión estratégica y el valor del diseño.
                  </p>
                </div>
                <div className={styles.universities}>
                  <p ref={universityTextRef}>
                    Por último (pero no menos importante, ¡esto me encanta!),
                    desde hace 4 años soy<span> docente </span>de innovación y
                    estrategia en UPM, y colaboradora con otras instituciones
                    universitarias como UV, UPV o Mondragon en actividades de
                    <span> emprendimiento </span> y <span>bootcamps </span> de
                    innovación social y ambiental.
                  </p>
                </div>
                <div>
                  <button
                    className={styles.hablemos}
                    onClick={() =>
                      window.scrollTo(0, document.body.scrollHeight)
                    }
                  >
                    HABLEMOS
                  </button>
                </div>
              </div>
            </div>
          </section>
          <section
            ref={serviciosSectionRef}
            className={styles.servicios}
            id="servicios"
          >
            <h5 ref={serviciosTitleRef}>
              creativity is life, life is creativity, sooo... let&apos;s create
              together!
            </h5>
            <div ref={serviciosDivRef} className={styles.servicios_main}>
              <Service
                title={"Estrategia y Business Design"}
                explanation="Todo comienza con una visión, que la estrategia traduce en un negocio viable a través de investigación del contexto, el diseño del negocio y la acción alineada."
                ctaText="¿NECESITAS ESTRATEGIA?"
                descriptions={[
                  {
                    title: "Visión",
                    text: "Afinando la visión del negocio, su misión interna y su propósito innovador en el sistema como piedra angular del proyecto, en base a la cual se desarrolla la estrategia.",
                  },
                  {
                    title: "Investigación de futuros",
                    text: "Percibiendo las señales y tendencias para crear estrategias coherentes de presente y futuro que se adelanten a los acontecimientos (Diseño de futuros).",
                  },
                  {
                    title: "Investigación sistémica",
                    text: "Incorporando una visión holística para comprender las influencias de todos los factores y stakeholders relacionados para diseñar estrategias favorecidas por el propio contexto (Diseño sistémico).",
                  },
                  {
                    title: "Investigación de mercados",
                    text: "observando el mercado y su transformación para identificar las áreas de oportunidad clave.",
                  },
                  {
                    title: "Plan estratégico",
                    text: "Alineando visión e insights con acción y objetivos gracias a la creación de un plan estratégico y táctico.",
                  },
                  {
                    title: "Modelo de negocio",
                    text: "Creando un modelo de negocio viable y consistente, con una cartera de productos y servicios relevantes para el mundo.",
                  },
                ]}
                onClick={() => {
                  handleClickService("estrategia");
                }}
              />
              <Service
                title={"Identidad y branding"}
                link={[
                  {
                    text: "con el studio SUPREME BEINGS",
                    url: "https://www.supremebeings.love/",
                  },
                ]}
                ctaText="¿NECESITAS BRANDING?"
                descriptions={[
                  {
                    text: "Descubriendo la identidad auténtica de tu proyecto para crear una experiencia de marca completa: naming, diseño de marca, dirección de arte y copywriting.",
                  },
                ]}
                onClick={() => handleClickService("branding")}
              />
              <Service
                title={"Diseño de servicios y facilitación creativa"}
                explanation="Conocer profundamente el usuario es la base para diseñar una experiencia de cliente (física, digital o híbrida) fluida y diferencial alineada con la marca."
                ctaText="¿NECESITAS DISEÑO?"
                descriptions={[
                  {
                    title: "Facilitación de la co-creación en equipo",
                    text: "Liderando el proceso de trabajo y creando una metodología ad hoc para facilitar la sinergia creativa del equipo del proyecto.",
                  },
                  {
                    title: "Investigación de diseño",
                    text: "Comprendiendo la experiencia, necesidades e influencias de los usuarios para obtener insights relevantes para la creación de valor.",
                  },
                  {
                    title: "Ideación y conceptualización",
                    text: "Generando disrupción innovadora para crear un concepto único.",
                  },
                  {
                    title: "Diseño de experiencia",
                    text: "Creando una experiencia de usuario o cliente coherente y fluida, con una propuesta de valor diferencial.",
                  },
                ]}
                onClick={() => handleClickService("diseño-de-servicios")}
              />
              <Service
                title={"Diseño y desarrollo web"}
                link={[
                  {
                    text: "con Vicente Garcya",
                    url: "https://www.vicentegarcya.com/",
                  },
                ]}
                ctaText={"¿NECESITAS WEB?"}
                descriptions={[
                  {
                    text: "Creando experiencias digitales con desarrollo front-end o full-stack, como Web Apps, landing pages, portfolios, webs corporativas, páginas e-commerce y más.",
                  },
                ]}
                onClick={() => handleClickService("web")}
              />
            </div>
          </section>
          <section ref={contactFormRef} className={styles.contact_form} id="contacto">
            <div className={styles.contact_form_backpaper}></div>
            <div ref={contactFormMainRef} className={styles.contact_form_main}>
              <div className={styles.contact_form_data}>
                <h5>CONTACTO</h5>
                <div>
                  <p>40°30`N 3°40`O / 40.500, -3.667</p>
                  <a href="tel:+34626457400">(34) 626 457 400</a>
                  <a href="mailto:hi@jimenagonzalez.in">hi@jimenagonzalez.in</a>
                </div>
              </div>
              <PropuestaForm
                service={service}
                setService={setService}
              ></PropuestaForm>
            </div>
          </section>
          <div className={styles.companies_logos} ref={companiesLogosRef}>
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
              style={{
                width: "10vw",
                height: "auto",
                visibility: "hidden",
              }}
              alt={"BBVA company logo"}
              className={styles.logo1}
            ></Image>
            <Image
              src="/pymes/frog.png"
              width={0}
              height={0}
              sizes="10vw"
              style={{ width: "7vw", height: "auto", visibility: "hidden" }}
              alt={"BBVA company logo"}
              className={styles.logo2}
            ></Image>
            <Image
              src="/pymes/norrsken.png"
              width={0}
              height={0}
              sizes="10vw"
              style={{
                width: "10vw",
                height: "auto",
                visibility: "hidden",
              }}
              alt={"BBVA company logo"}
              className={styles.logo3}
            ></Image>
            <Image
              src="/pymes/garajedeideas.png"
              width={0}
              height={0}
              sizes="10vw"
              style={{
                width: "14vw",
                height: "auto",
                visibility: "hidden",
              }}
              alt={"BBVA company logo"}
              className={styles.logo4}
            ></Image>
            <Image
              src="/pymes/SPRMBNGS.png"
              width={0}
              height={0}
              sizes="10vw"
              style={{ width: "7vw", height: "auto", visibility: "hidden" }}
              alt={"BBVA company logo"}
              className={styles.logo5}
            ></Image>
            <Image
              src="/pymes/escuela21.png"
              width={0}
              height={0}
              sizes="10vw"
              style={{
                width: "10vw",
                height: "auto",
                visibility: "hidden",
              }}
              alt={"BBVA company logo"}
              className={styles.logo6}
            ></Image>
            <Image
              src="/pymes/baobab.png"
              width={0}
              height={0}
              sizes="10vw"
              style={{
                width: "10vw",
                height: "auto",
                visibility: "hidden",
              }}
              alt={"BBVA company logo"}
              className={styles.logo7}
            ></Image>
            <Image
              src="/pymes/the-candy-toy-factory.png"
              width={0}
              height={0}
              sizes="10vw"
              style={{ width: "8vw", height: "auto", visibility: "hidden" }}
              alt={"BBVA company logo"}
              className={styles.logo8}
            ></Image>
            <Image
              src="/pymes/asm.png"
              width={0}
              height={0}
              sizes="10vw"
              style={{ width: "8vw", height: "auto", visibility: "hidden" }}
              alt={"BBVA company logo"}
              className={styles.logo9}
            ></Image>
            <Image
              src="/universities/upm.png"
              width={0}
              height={0}
              sizes="10vw"
              style={{
                width: "12vw",
                height: "auto",
                visibility: "hidden",
              }}
              alt={"BBVA company logo"}
              className={styles.logo1}
            ></Image>
            <Image
              src="/universities/mondragon.png"
              width={0}
              height={0}
              sizes="10vw"
              style={{ width: "12vw", height: "auto", display: "none" }}
              alt={"BBVA company logo"}
              className={styles.logo2}
            ></Image>
            <Image
              src="/universities/upv.png"
              width={0}
              height={0}
              sizes="10vw"
              style={{ width: "12vw", height: "auto", display: "none" }}
              alt={"BBVA company logo"}
              className={styles.logo3}
            ></Image>
            <Image
              src="/universities/uv.png"
              width={0}
              height={0}
              sizes="10vw"
              style={{ width: "12vw", height: "auto", display: "none" }}
              alt={"BBVA company logo"}
              className={styles.logo4}
            ></Image>
            <Image
              src="/universities/xiji.png"
              width={0}
              height={0}
              sizes="10vw"
              style={{ width: "12vw", height: "auto", display: "none" }}
              alt={"BBVA company logo"}
              className={styles.logo5}
            ></Image>
            <Image
              src="/universities/IEN.png"
              width={0}
              height={0}
              sizes="10vw"
              style={{ width: "12vw", height: "auto", display: "none" }}
              alt={"BBVA company logo"}
              className={styles.logo6}
            ></Image>
          </div>
        </main>
      </Layout>
    );
}
