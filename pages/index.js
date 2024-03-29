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

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 8800);

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
      opacity: 1,
      visibility: "visible",
      ease: "none",
      scrollTrigger: {
        trigger: experienciaTitleRef.current,
        start: "top 14.65%",
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
          start: "bottom 50.65%",
          end: "+=0.01%",
          scrub: 0.01,
        },
      }
    );

    //SERVICIOS
    gsap.to(serviciosTitleRef.current, {
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
              Strategy is the key to manifesting purpose
            </h5>
            <div ref={metodologiaDivRef}>
              <p>
                Mi metodología combina estrategia de negocio pura con
                herramientas de diseño para acompañar a grandes empresas y
                proyectos emergentes en la creación de
                <span> valor, propósito y acción alineada </span>.
              </p>
              <div className={styles.cinta_transportadora}>
                <p>
                  Service Design · Pensamiento estratégico · Lean Start-up ·
                  Emprendimiento · Business Design · Finanzas · Investigación
                  cualitativa · Análisis de datos · Diseño estratégico ·
                  Análisis de mercado ·
                </p>
                <p>
                  Service Design · Pensamiento estratégico · Lean Start-up ·
                  Emprendimiento · Business Design · Finanzas · Investigación
                  cualitativa · Análisis de datos · Diseño estratégico ·
                  Análisis de mercado ·
                </p>
              </div>
              <p>
                Para cada proyecto, creo un marco metodológico ad hoc para dotar
                de coherencia y claridad a todo el proceso. Facilito la
                co-creación de una estrategia que permita hacer realidad la
                visión, apoyándome en mi expertise de negocio y diseño.
              </p>
              <div className={styles.cinta_transportadora}>
                <p>
                  Diseño de futuros · Marketing · Gestión de proyectos · User
                  Experience · Producto y servicio digital · Design Thinking ·
                  Facilitación · Liderazgo de equipos · Pensamiento sistémico ·
                </p>
                <p>
                  Diseño de futuros · Marketing · Gestión de proyectos · User
                  Experience · Producto y servicio digital · Design Thinking ·
                  Facilitación · Liderazgo de equipos · Pensamiento sistémico ·
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
                    title: "Visión ·",
                    text: "afinando la visión del negocio, su misión interna y su propósito innovador en el sistema como piedra angular del proyecto, en base a la cual se desarrolla la estrategia.",
                  },
                  {
                    title: "Investigación de futuros ·",
                    text: "percibiendo las señales y tendencias para crear estrategias coherentes de presente y futuro que se adelanten a los acontecimientos (Diseño de futuros).",
                  },
                  {
                    title: "Investigación sistémica ·",
                    text: "incorporando una visión holística para comprender las influencias de todos los factores y stakeholders relacionados para diseñar estrategias favorecidas por el propio contexto (Diseño sistémico).",
                  },
                  {
                    title: "Investigación de mercados ·",
                    text: "observando el mercado y su transformación para identificar las áreas de oportunidad clave.",
                  },
                  {
                    title: "Plan estratégico ·",
                    text: "alineando visión e insights con acción y objetivos gracias a la creación de un plan estratégico y táctico.",
                  },
                  {
                    title: "Modelo de negocio ·",
                    text: "creando un modelo de negocio viable y consistente, con una cartera de productos y servicios relevantes para el mundo.",
                  },
                ]}
              />
              <Service
                title={"Identidad y branding"}
                link={[
                  {
                    text: "con el equipo del studio SUPREME BEINGS",
                    url: "https://www.supremebeings.love/",
                  },
                ]}
                ctaText="¿NECESITAS BRANDING?"
                descriptions={[
                  {
                    text: "Descubriendo la identidad auténtica de tu proyecto para crear una experiencia de marca completa: naming, diseño de marca, dirección de arte y copywriting.",
                  },
                ]}
                onClick={() =>
                  contactFormRef.current.scrollIntoView({ behavior: "smooth" })
                }
              />
              <Service
                title={"Diseño de servicios y facilitación creativa"}
                explanation="Conocer profundamente el usuario es la base para diseñar una experiencia de cliente (física, digital o híbrida) fluida y diferencial alineada con la marca."
                ctaText="¿NECESITAS DISEÑO?"
                descriptions={[
                  {
                    title: "Facilitación de la co-creación en equipo ·",
                    text: "liderando el proceso de trabajo y creando una metodología ad hoc para facilitar la sinergia creativa del equipo del proyecto.",
                  },
                  {
                    title: "Investigación de diseño ·",
                    text: "comprendiendo la experiencia, necesidades e influencias de los usuarios para obtener insights relevantes para la creación de valor.",
                  },
                  {
                    title: "Ideación y conceptualización ·",
                    text: "generando disrupción innovadora para crear un concepto único.",
                  },
                  {
                    title: "Diseño de experiencia ·",
                    text: "creando una experiencia de usuario o cliente coherente y fluida, con una propuesta de valor diferencial.",
                  },
                ]}
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
              />
            </div>
          </section>
          <section ref={contactFormRef} className={styles.contact_form}>
            <div className={styles.contact_form_backpaper}></div>
            <div ref={contactFormMainRef} className={styles.contact_form_main}>
              <div className={styles.contact_form_data}>
                <h5>CONTACTO</h5>
                <div>
                  <div className={styles.top}>
                    <p>
                      Si quieres saber más sobre mi vida laboral, visita{" "}
                      <a
                        href="https://www.linkedin.com/in/jimena-gonzalez-collados/"
                        target="_blank"
                      >
                        mi perfil de Linkedin
                      </a>
                    </p>
                    <p>
                      {" "}
                      Escucha aquí{" "}
                      <a
                        href="https://open.spotify.com/playlist/6nDnwvDJOvY1VebJWbVsd7?si=jF_EYQm5Qy6g8xk_RXPaeg&utm_source=copy-link&utm_medium=copy-link&nd=1&_branch_match_id=1182632066913753218&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXLy7IL8lMq9TLyczL1g82Ciz29C0rN3ZOAgDcFrbjIAAAAA%3D%3D"
                        target="_blank"
                      >
                        mi playlist de Spotify
                      </a>{" "}
                      para entrar en flow creativo.
                    </p>
                    <p>
                      Para cualquier otra cosa,{" "}
                      <a href="mailto: hi@jimenagonzalez.in">
                        ¡envíame un correo a hi@jimenagonzalez.in!
                      </a>
                    </p>
                  </div>
                  <div className={styles.bottom}>
                    <p style={{ marginBottom: "12px" }}>
                      web x{" "}
                      <a href="https://www.vicentegarcya.com/" target="_blank">
                        Vicente Garcya
                      </a>
                    </p>
                    <p>x Jimena Gonzalez</p>
                    <p>
                      © 2023, Jimena Gonzalez, Todos los derechos reservados
                    </p>
                  </div>
                </div>
              </div>
              <PropuestaForm></PropuestaForm>
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
