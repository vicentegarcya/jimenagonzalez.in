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
  const claimRef = useRef();

  const metodologiaTitleRef = useRef();
  const metodologiaSpan = useRef();
  const experienciaTitleRef = useRef();
  const experienciaTextRef = useRef();
  const serviciosTitleRef = useRef();
  const serviciosDivRef = useRef();
  const serviciosSectionRef = useRef();

  const contactFormRef = useRef();
  const contactFormMainRef = useRef();
  const contactFormBackRef = useRef();
  const footerRef = useRef();
  const fakeDivRef = useRef();

  const handleClickService = (service) => {
    setService(service);
    window.scrollTo(0, document.body.scrollHeight);
  };

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 4700);

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
    //Meter aquí animación de claim
    gsap.to(metodologiaSpan.current, {
      width: "100%",
      duration: 1,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: metodologiaTitleRef.current,
        start: "top 33%",
      },
    });

    //CLAIM
    gsap.to(claimRef.current?.querySelector("h3"), {
      transform: "scale(1)",
      scrollTrigger: {
        trigger: claimRef.current,
        start: "top 25%",
        end: "+=20%",
        scrub: 1.5,
      },
    });

    //EXPERIENCIA
    gsap.to(`.${styles.highlighter}`, {
      width: "100%",
      duration: 1,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: experienciaTitleRef.current,
        start: "top 25%",
      },
    });

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
        end: "+25%",
        scrub: 2.25,
      },
    });

    /* gsap.to(footerRef.current, {
      display: 'block',
      maxHeight: "100dvh",
      scrollTrigger: {
        trigger: document.body,
        start: "bottom bottom",
        end: "+40%",
        scrub: 2.25,
        markers: true,
      },
    }); */
  }, [isLoading, isDesktop]);

  if (isLoading) return <LoadingPage />;

  if (!isLoading)
    return (
      <Layout>
        <div ref={mainRef} className={styles.main} id="main">
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
              <p className={styles.text}>Strategy is alignment.</p>
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
            <h5 ref={metodologiaTitleRef} className={styles.section_title}>
              <p>Strategy is</p>
              <p>THE KEY</p>
              <p>to manifesting purpose.</p>
            </h5>
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
                <span className={styles.keyword}>Strategy</span>
                <span className={styles.emoji}>➔</span>
                Diseño estratégico <span className={styles.emoji}>❉</span>
                Pensamiento sistémico <span className={styles.emoji}>▶▶</span>
                Diseño de futuros <span className={styles.emoji}>◖</span>
                <span className={styles.keyword}>Business Design</span>
                <span className={styles.emoji}>◗</span>
                Análisis de mercado <span className={styles.emoji}>❋</span>
                Investigación de usuarios
                <span className={styles.emoji}>✖</span>
                User Experience <span className={styles.emoji}>♠</span>
                <span className={styles.keyword}>Service Design</span>
                <span className={styles.emoji}>☛</span>
                Design Thinking <span className={styles.emoji}>✚</span>
                <span className={styles.keyword}>Facilitación</span>
              </p>
            </div>
            <div className={styles.metodologia_text}>
              <p>
                Reivindicando el poder de la<br></br> estrategia y el diseño
                para crear el<br></br> futuro del valor y la belleza, en forma
                de negocios disruptivos y servicios diferenciales.
              </p>
              <p>
                Combino pensamiento<br></br> estratégico, herramientas de
                <br></br> diseño y expertise de negocio para crear y elevar
                proyectos emergentes y en evolución.
              </p>
              <p>
                Para cada proyecto, creo un<br></br> marco metodológico ad hoc
                para acompañar a visionarios, equipos creativos y grandes
                empresas.
              </p>
            </div>
          </section>
          <section ref={claimRef} className={styles.claim}>
            <h3>
              SUCCESS IS THE RESULT OF A<br></br> GOOD STRATEGY.
            </h3>
          </section>
          <section className={styles.experiencia} id="experiencia">
            <h5 ref={experienciaTitleRef} className={styles.section_title}>
              <p>Strategy is the</p>
              <p>MARRIAGE</p>
              <p>of vision and action.</p>
            </h5>
            <div className={styles.cinta_transportadora_logos}>
              <p>
                <div style={{ width: "80px" }}>
                  <Image
                    src="/big_companies/BBVA.png"
                    layout="fill"
                    objectFit="contain"
                    alt="BBVA logo"
                  />
                </div>
                <div>
                  <Image
                    src="/big_companies/ikea.png"
                    layout="fill"
                    objectFit="contain"
                    alt="Ikea logo"
                  />
                </div>
                <div>
                  <Image
                    src="/big_companies/repsol.png"
                    layout="fill"
                    objectFit="contain"
                    alt="Repsol logo"
                  />
                </div>
                <div>
                  <Image
                    src="/big_companies/mapfre.png"
                    layout="fill"
                    objectFit="contain"
                    alt="Mapfre logo"
                  />
                </div>
                <div>
                  <Image
                    src="/big_companies/acciona.png"
                    layout="fill"
                    objectFit="contain"
                    alt="Acciona logo"
                  />
                </div>
                <div>
                  <Image
                    src="/big_companies/fortum.png"
                    layout="fill"
                    objectFit="contain"
                    alt="Fortum logo"
                  />
                </div>
                <div>
                  <Image
                    src="/pymes/capgemini.png"
                    layout="fill"
                    objectFit="contain"
                    alt="Capgemini logo"
                  />
                </div>
                <div>
                  <Image
                    src="/pymes/frog.png"
                    layout="fill"
                    objectFit="contain"
                    alt="Frog logo"
                  />
                </div>
                <div>
                  <Image
                    src="/pymes/norrsken.png"
                    layout="fill"
                    objectFit="contain"
                    alt="Norrsken logo"
                  />
                </div>
                <div>
                  <Image
                    src="/pymes/garajedeideas.png"
                    layout="fill"
                    objectFit="contain"
                    alt="Garaje de Ideas logo"
                  />
                </div>
                <div>
                  <Image
                    src="/pymes/escuela21.png"
                    layout="fill"
                    objectFit="contain"
                    alt="Escuela 21 logo"
                  />
                </div>
                <div>
                  <Image
                    src="/universities/xiji.png"
                    layout="fill"
                    objectFit="contain"
                    alt="Xiji logo"
                  />
                </div>
                <div>
                  <Image
                    src="/universities/upm.png"
                    layout="fill"
                    objectFit="contain"
                    alt="UPM logo"
                  />
                </div>
                <div>
                  <Image
                    src="/universities/upv.png"
                    layout="fill"
                    objectFit="contain"
                    alt="UPV logo"
                  />
                </div>
                <div>
                  <Image
                    src="/universities/IEN.png"
                    layout="fill"
                    objectFit="contain"
                    alt="IEN logo"
                  />
                </div>
                <div>
                  <Image
                    src="/universities/mondragon.png"
                    layout="fill"
                    objectFit="contain"
                    alt="Mondragon logo"
                  />
                </div>
              </p>
              <p>
                <div style={{ width: "80px" }}>
                  <Image
                    src="/big_companies/BBVA.png"
                    layout="fill"
                    objectFit="contain"
                    alt="BBVA logo"
                  />
                </div>
                <div>
                  <Image
                    src="/big_companies/ikea.png"
                    layout="fill"
                    objectFit="contain"
                    alt="Ikea logo"
                  />
                </div>
                <div>
                  <Image
                    src="/big_companies/repsol.png"
                    layout="fill"
                    objectFit="contain"
                    alt="Repsol logo"
                  />
                </div>
                <div>
                  <Image
                    src="/big_companies/mapfre.png"
                    layout="fill"
                    objectFit="contain"
                    alt="Mapfre logo"
                  />
                </div>
                <div>
                  <Image
                    src="/big_companies/acciona.png"
                    layout="fill"
                    objectFit="contain"
                    alt="Acciona logo"
                  />
                </div>
                <div>
                  <Image
                    src="/big_companies/fortum.png"
                    layout="fill"
                    objectFit="contain"
                    alt="Fortum logo"
                  />
                </div>
                <div>
                  <Image
                    src="/pymes/capgemini.png"
                    layout="fill"
                    objectFit="contain"
                    alt="Capgemini logo"
                  />
                </div>
                <div>
                  <Image
                    src="/pymes/frog.png"
                    layout="fill"
                    objectFit="contain"
                    alt="Frog logo"
                  />
                </div>
                <div>
                  <Image
                    src="/pymes/norrsken.png"
                    layout="fill"
                    objectFit="contain"
                    alt="Norrsken logo"
                  />
                </div>
                <div>
                  <Image
                    src="/pymes/garajedeideas.png"
                    layout="fill"
                    objectFit="contain"
                    alt="Garaje de Ideas logo"
                  />
                </div>
                <div>
                  <Image
                    src="/pymes/escuela21.png"
                    layout="fill"
                    objectFit="contain"
                    alt="Escuela 21 logo"
                  />
                </div>
                <div>
                  <Image
                    src="/universities/xiji.png"
                    layout="fill"
                    objectFit="contain"
                    alt="Xiji logo"
                  />
                </div>
                <div>
                  <Image
                    src="/universities/upm.png"
                    layout="fill"
                    objectFit="contain"
                    alt="UPM logo"
                  />
                </div>
                <div>
                  <Image
                    src="/universities/upv.png"
                    layout="fill"
                    objectFit="contain"
                    alt="UPV logo"
                  />
                </div>
                <div>
                  <Image
                    src="/universities/IEN.png"
                    layout="fill"
                    objectFit="contain"
                    alt="IEN logo"
                  />
                </div>
                <div>
                  <Image
                    src="/universities/mondragon.png"
                    layout="fill"
                    objectFit="contain"
                    alt="Mondragon logo"
                  />
                </div>
              </p>
            </div>
            <div ref={experienciaTextRef} className={styles.experiencia_text}>
              <p>
                Originaria del mundo de la consultoría de negocio, he acompañado
                a grandes{" "}
                <div className={styles.highlight}>
                  <div className={styles.highlighter}></div>empresas
                </div>{" "}
                nacionales e internacionales en proyectos de definición
                estratégica, innovación, diseño de servicios, investigación e
                intraemprendimiento.
              </p>
              <p>
                También he trabajado en proyectos estratégicos para pequeñas y
                medianas empresas, y mentorizado a{" "}
                <div className={styles.highlight}>
                  <div className={styles.highlighter}></div>startups
                </div>{" "}
                en fase semilla y de escalado en diversas incubadoras y
                aceleradoras, aportando la visión estratégica y el valor del
                diseño.
              </p>
              <p>
                Además, desde hace 4 años doy{" "}
                <div className={styles.highlight}>
                  <div className={styles.highlighter}></div>clases y talleres
                </div>{" "}
                de innovación y estrategia en UPM, y colaboro con otras
                instituciones universitarias como UV, UPV o Mondragon en
                actividades de emprendimiento, bootcamps y hackathones de
                innovación.
              </p>
            </div>
          </section>
          <section
            ref={serviciosSectionRef}
            className={styles.servicios}
            id="servicios"
          >
            <h5 ref={serviciosTitleRef} className={styles.section_title}>
              <p style={{ marginLeft: "24px" }}>Let&rsquo;s</p>
              <p>CREATE</p>
              <p style={{ marginRight: 0 }}>together!</p>
            </h5>
            <div ref={serviciosDivRef} className={styles.servicios_main}>
              <Service
                title={"Estrategia y Business Design"}
                explanation="Crear, desarrollar y expandir un negocio es un proceso iterativo en espiral."
                ctaText="¿NECESITAS ESTRATEGIA?"
                description="Visión, propósito e identidad de marca, objetivos y roadmap estratégico, investigación de mercado y usuarios, client persona y propuesta de valor, diseño de experiencia, productos y servicios, modelo de negocio."
                bulletPoints={[
                  {
                    title: "01. BETA BUSINESS, de idea a MVP.",
                    description: ""
                  },
                  {
                    title: "02. BUSINESS, de MVP a negocio.",
                    description: ""
                  },
                  {
                    title: "03. BUSINESS LEAP, expandiendo el negocio.",
                    description: ""
                  }
                ]}
                onClick={() => {
                  handleClickService("estrategia");
                }}
              />
              <Service
                title={"Facilitación y service design"}
                explanation="La filosofía de diseño es la clave de la creación de valor y belleza."
                ctaText="¿NECESITAS DISEÑO?"
                bulletPoints={[
                  {
                    title: "01. FACILITACIÓN,",
                    description: " diseñando una metodología ad-hoc para facilitar la sinergia creativa del equipo del proyecto en sesiones online o presenciales."
                  },
                  {
                    title: "02. INVESTIGACIÓN DE DISEÑO,",
                    description: " comprendiendo la experiencia, necesidades e influencias de los usuarios para obtener insights relevantes para la creación de valor."
                  },
                  {
                    title: "03. DISEÑO DE SERVICIOS,",
                    description: " creando una experiencia de usuario o cliente coherente y fluida, con una propuesta de valor diferencial."
                  }
                ]}
                onClick={() => handleClickService("diseño-de-servicios")}
              />
              <Service
                title={"Identidad y branding"}
                ctaText="¿NECESITAS BRANDING?"
                explanation="descubriendo la identidad auténtica de tu proyecto para crear la experiencia de marca."
                onClick={() => handleClickService("branding")}
                sprm={true}
              />
              <Service
                title={"Diseño y desarrollo web"}
                ctaText={"¿NECESITAS WEB?"}
                explanation="creando experiencias digitales con desarrollo front-end o full-stack, como Web Apps, landing pages, portfolios, webs corporativas, páginas e-commerce y más."
                onClick={() => handleClickService("web")}
                vicente={true}
              />
            </div>
          </section>
          <section
            ref={contactFormRef}
            className={styles.contact_form}
            id="contacto"
          >
            <div
              className={styles.contact_form_backpaper}
              ref={contactFormBackRef}
            >
              <div
                ref={contactFormMainRef}
                className={styles.contact_form_main}
              >
                <div className={styles.contact_form_data}>
                  <h5 className={styles.section_title}>
                    <p>Let&rsquo;s</p>
                    <p>CONNECT</p>
                  </h5>
                  <div>
                    <p>40°30`N 3°40`O / 40.500, -3.667</p>
                    <a href="tel:+34626457400">(34) 626 457 400</a>
                    <a href="mailto:hi@jimenagonzalez.in">
                      hi@jimenagonzalez.in
                    </a>
                  </div>
                </div>
                <PropuestaForm
                  service={service}
                  setService={setService}
                ></PropuestaForm>
              </div>
              <div ref={fakeDivRef} className={styles.fake_div}></div>
              <div className={styles.footer_home} ref={footerRef}>
                <Footer />
              </div>
            </div>
          </section>
        </div>
      </Layout>
    );
}
