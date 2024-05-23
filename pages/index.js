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
import Logos from "@/components/logos";
import Footer from "@/components/footer";

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
  const metodologiaSpan = useRef();
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
  const footerRef = useRef();

  const handleClickService = (service) => {
    setService(service);
    window.scrollTo(0, document.body.scrollHeight);
  };

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 4600);

    //ANIMATIONS
    //HERO
    gsap
      .fromTo(
        gonzalezRef.current,
        { opacity: 0.9 },
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
        { opacity: 0.9 },
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

    //METODOLOGIA
    gsap.to(metodologiaSpan.current, {
      width: "100%",
      duration: 1,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: metodologiaTitleRef.current,
        start: "top 33%",
      },
    });

    //EXPERIENCIA
    gsap.to(bigCompaniesTextRef.current?.querySelector("div > div"), {
      width: "100%",
      duration: 1,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: bigCompaniesTextRef.current,
        start: "top 50%",
      },
    });

    gsap.to(pymesTextRef.current?.querySelectorAll("div > div"), {
      width: "100%",
      duration: 1,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: pymesTextRef.current,
        start: "top 50%",
      },
    });

    gsap.to(universityTextRef.current?.querySelectorAll("div > div"), {
      width: "100%",
      duration: 1,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: universityTextRef.current,
        start: "top 50%",
      },
    });

    //LOGOS
    gsap.fromTo(
      companiesLogosRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        visibility: "visible",
        ease: "none",
        scrollTrigger: {
          trigger: experienciaTitleRef.current,
          start: "top 33%",
          end: "+=0.01%",
          scrub: 0.01,
        },
      }
    );

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

    //CONTACT FORM
    gsap.to(contactFormRef.current, {
      top: 0,
      left: 0,
      transform: "scale(1)",
      scrollTrigger: {
        trigger: serviciosSectionRef.current,
        start: "bottom 90%",
        end: "+=20%",
        scrub: 1.5,
      },
    });

    gsap.to(contactFormMainRef.current, {
      top: "4.5rem",
      transform: "scale(1)",
      scrollTrigger: {
        trigger: serviciosSectionRef.current,
        start: "bottom 80%",
        end: "+=25%",
        scrub: 2.25,
      },
    });

    gsap.fromTo(
      footerRef.current,
      {
        maxHeight: "0",
        display: "none",
      },
      {
        display: "block",
        maxHeight: "100dvh",
        scrollTrigger: {
          trigger: document.body,
          start: "bottom bottom",
          end: "+40%",
          scrub: 2,
        },
      }
    );
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
                  target="_blank"
                >
                  LINKEDIN →
                </Link>
                <Link href={"https://www.supremebeings.love/"} target="_blank">
                  STUDIO →
                </Link>
                <Link
                  href={"https://jimena-gonzalez.medium.com/"}
                  target="_blank"
                >
                  BLOG →
                </Link>
              </div>
              <p>(divergent mind / sensitive heart)</p>
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
                scroll<br></br>
                <div>
                  <p>🡒</p>
                </div>
              </p>
              <p className={styles.text}>
                Strategy is alignment.
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
            <div>
              <p>
                Mi metodología combina estrategia de negocio pura con
                herramientas de diseño para acompañar a grandes empresas y
                proyectos emergentes en la creación de{" "}
                <div className={styles.highlight}>
                  <span>valor, propósito y acción alineada.</span>
                  <div
                    ref={metodologiaSpan}
                    className={styles.highlighter}
                  ></div>
                </div>
              </p>
              <p>
                Para cada proyecto, creo un marco metodológico ad hoc para dotar
                de coherencia y claridad a todo el proceso. Facilito la
                co-creación de una estrategia que permita hacer realidad la
                visión, apoyándome en mi expertise de negocio y diseño.
              </p>
              <div className={styles.cinta_transportadora}>
                <p>
                  <span className={styles.keyword}>Strategy</span>
                  <span className={styles.emoji}>➔</span>
                  Diseño estratégico <span className={styles.emoji}>❉</span>
                  Pensamiento sistémico <span className={styles.emoji}>▶▶</span>
                  Diseño de futuros <span className={styles.emoji}>◖</span>
                  <span className={styles.keyword}>Business Design</span>
                  <span className={styles.emoji}>◗</span>
                  Análisis de mercado <span className={styles.emoji}>❋</span>
                </p>
                <p>
                  <span className={styles.keyword}>Strategy</span>
                  <span className={styles.emoji}>➔</span>
                  Diseño estratégico <span className={styles.emoji}>❉</span>
                  Pensamiento sistémico <span className={styles.emoji}>▶▶</span>
                  Diseño de futuros <span className={styles.emoji}>◖</span>
                  <span className={styles.keyword}>Business Design</span>
                  <span className={styles.emoji}>◗</span>
                  Análisis de mercado <span className={styles.emoji}>❋</span>
                </p>
              </div>
              <div className={styles.cinta_transportadora_2}>
                <p>
                  Investigación de usuarios
                  <span className={styles.emoji}>✖</span>
                  User Experience <span className={styles.emoji}>♠</span>
                  <span className={styles.keyword}>Service Design</span>
                  <span className={styles.emoji}>☛</span>
                  Design Thinking <span className={styles.emoji}>✚</span>
                  <span className={styles.keyword}>Facilitación</span>
                  <span className={styles.emoji}>☻</span>
                </p>
                <p>
                  Investigación de usuarios
                  <span className={styles.emoji}>✖</span>
                  User Experience <span className={styles.emoji}>♠</span>
                  <span className={styles.keyword}>Service Design</span>
                  <span className={styles.emoji}>☛</span>
                  Design Thinking <span className={styles.emoji}>✚</span>
                  <span className={styles.keyword}>Facilitación</span>
                  <span className={styles.emoji}>☻</span>
                </p>
              </div>
            </div>
          </section>
          <section className={styles.experiencia} id="experiencia">
            <h5 ref={experienciaTitleRef}>i looooooove business</h5>
            <div>
              <div className={styles.left}>
                <div className={styles.big_companies}>
                  <p ref={bigCompaniesTextRef}>
                    Originaria del mundo de la consultoría de negocio, he
                    acompañado a{" "}
                    <div className={styles.highlight}>
                      <span>grandes empresas</span>
                      <div className={styles.highlighter}></div>
                    </div>{" "}
                    nacionales e internacionales en proyectos de definición
                    estratégica, innovación, diseño de servicios, investigación
                    e intraemprendimiento.
                  </p>
                </div>
                <div className={styles.medium_companies}>
                  <p ref={pymesTextRef}>
                    También he trabajado en proyectos estratégicos para{" "}
                    <div className={styles.highlight}>
                      <span>pequeñas y mediandas empresas</span>
                      <div className={styles.highlighter}></div>
                    </div>
                    , y mentorizado a{" "}
                    <div className={styles.highlight}>
                      <span>startups</span>
                      <div className={styles.highlighter}></div>
                    </div>{" "}
                    en fase semilla y de escalado en diversas incubadoras y
                    aceleradoras, aportando la visión estratégica y el valor del
                    diseño.
                  </p>
                </div>
                <div className={styles.universities}>
                  <p ref={universityTextRef}>
                    Además, desde hace 4 años soy{" "}
                    <div className={styles.highlight}>
                      <span>docente</span>
                      <div className={styles.highlighter}></div>
                    </div>{" "}
                    de innovación y estrategia en UPM, y colaboradora con otras
                    instituciones universitarias como UV, UPV o Mondragon en{" "}
                    <div className={styles.highlight}>
                      <span>actividades de emprendimiento y </span>
                      <div className={styles.highlighter}></div>
                    </div>{" "}
                    <div className={styles.highlight}>
                      <span>bootcamps</span>
                      <div className={styles.highlighter}></div>
                    </div>{" "}
                    de innovación social y ambiental.
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
          <section
            ref={contactFormRef}
            className={styles.contact_form}
            id="contacto"
          >
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
            <Logos />
          </div>
          <div className={styles.footer_home} ref={footerRef}>
            <Footer />
          </div>
        </main>
      </Layout>
    );
}
