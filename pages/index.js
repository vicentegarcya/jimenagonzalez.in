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
import { useIntl } from "react-intl";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [service, setService] = useState("");
  const { isDesktop } = useContext(isPlayingContext);
  gsap.registerPlugin(ScrollTrigger);
  const intl = useIntl();

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
    setTimeout(() => setIsLoading(false), 4500);

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
        start: isDesktop ? "top 25%" : "top 75%",
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
                  {intl.formatMessage({ id: "CONTACT_ME" })}
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
                Concept <span className={styles.emoji}>❉</span>
                {intl.formatMessage({ id: "RESEARCH" })}{" "}
                <span className={styles.emoji}>▶▶</span>
                {intl.formatMessage({ id: "FUTURES_DESIGN" })}{" "}
                <span className={styles.emoji}>◖</span>
                <span className={styles.keyword}>Business Design</span>
                <span className={styles.emoji}>◗</span>
                User Experience <span className={styles.emoji}>♠</span>
                <span className={styles.keyword}>Service Design</span>
                <span className={styles.emoji}>☛</span>
                Design Thinking <span className={styles.emoji}>✚</span>
                <span className={styles.keyword}>
                  {intl.formatMessage({ id: "FACILITATION" })}
                </span>
                <span className={styles.emoji}>☻</span>
              </p>
              <p>
                <span className={styles.keyword}>Strategy</span>
                <span className={styles.emoji}>➔</span>
                Concept <span className={styles.emoji}>❉</span>
                {intl.formatMessage({ id: "RESEARCH" })}{" "}
                <span className={styles.emoji}>▶▶</span>
                {intl.formatMessage({ id: "FUTURES_DESIGN" })}{" "}
                <span className={styles.emoji}>◖</span>
                <span className={styles.keyword}>Business Design</span>
                <span className={styles.emoji}>◗</span>
                User Experience <span className={styles.emoji}>♠</span>
                <span className={styles.keyword}>Service Design</span>
                <span className={styles.emoji}>☛</span>
                Design Thinking <span className={styles.emoji}>✚</span>
                <span className={styles.keyword}>
                  {intl.formatMessage({ id: "FACILITATION" })}
                </span>
                <span className={styles.emoji}>☻</span>
              </p>
            </div>
            <div className={styles.metodologia_text}>
              <p>
                {intl.formatMessage({ id: "CLAIMING_THE_POWER_OF_STRATEGY" })}
              </p>
              <p>{intl.formatMessage({ id: "I_COMBINE_STRATEGY_THINKING" })}</p>
              <p>{intl.formatMessage({ id: "FOR_EACH_PROJECT_I_CREATE" })}</p>
            </div>
          </section>
          <section ref={claimRef} className={styles.claim}>
            {isDesktop ? (
              <h3>
                SUCCESS IS THE RESULT OF A<br></br> GOOD STRATEGY.
              </h3>
            ) : (
              <h3>
                SUCCESS IS THE RESULT OF<br></br>A GOOD STRATEGY.
              </h3>
            )}
          </section>
          <section className={styles.experiencia} id="experiencia">
            <h5 ref={experienciaTitleRef} className={styles.section_title}>
              <p>Strategy is the</p>
              <p>MARRIAGE</p>
              <p>of vision and action.</p>
            </h5>
            <div className={styles.cinta_transportadora_logos}>
              <p>
                <div style={{ width: isDesktop ? "80px" : "60px" }}>
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
                {intl.formatMessage({
                  id: "COMING_FROM_CORPORATE_AND_BUSINESS",
                })}{" "}
                <div className={styles.highlight}>
                  <div className={styles.highlighter}></div>
                  {intl.formatMessage({ id: "ENTERPRISES" })}
                </div>{" "}
                {intl.formatMessage({
                  id: "IN_DESIGN_RESEARCH_SERVICE_DESIGN",
                })}
              </p>
              <p>
                {intl.formatMessage({
                  id: "I_HAVE_ALSO_WORKED_FOR_SMES",
                })}{" "}
                <div className={styles.highlight}>
                  <div className={styles.highlighter}></div>startups
                </div>{" "}
                {intl.formatMessage({
                  id: "IN_SEED_AND_SCALING_PHASES",
                })}
              </p>
              <p>
                {intl.formatMessage({
                  id: "IN_ADDITION_I_HAVE_BEEN_TEACHING_AND_FACILITATING",
                })}{" "}
                <div className={styles.highlight}>
                  <div className={styles.highlighter}></div>
                  {intl.formatMessage({ id: "CLASSES_AND_BOOTCAMPS" })}
                </div>{" "}
                {intl.formatMessage({
                  id: "WORKSHOPS_AND_HACKATONS_ON_INNOVATION_AND_STRATEGY",
                })}
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
                title={intl.formatMessage({
                  id: "STRATEGY_AND_BUSINESS_DESIGN",
                })}
                explanation={intl.formatMessage({
                  id: "CREATING_DEVELOPING_AND_EXPANDING",
                })}
                ctaText={intl.formatMessage({ id: "NEED_STRATEGY" })}
                description={intl.formatMessage({
                  id: "STRATEGIC_VISIONING_PURPOSE",
                })}
                bulletPoints={[
                  {
                    title: "01. BETA BUSINESS,",
                    description: intl.formatMessage({ id: "FROM_IDEA_TO_MVP" }),
                  },
                  {
                    title: "02. BUSINESS,",
                    description: intl.formatMessage({
                      id: "FROM_MVP_TO_BUSINESS",
                    }),
                  },
                  {
                    title: "03. BUSINESS LEAP,",
                    description: intl.formatMessage({
                      id: "EXPANDING_THE_BUSINESS",
                    }),
                  },
                ]}
                onClick={() => {
                  handleClickService("estrategia");
                }}
              />
              <Service
                title={intl.formatMessage({
                  id: "FACILITATION_AND_SERVICE_DESIGN",
                })}
                explanation={intl.formatMessage({
                  id: "DESIGN_PHILOSOPHY_IS_THE_KEY_TO_CREATING",
                })}
                ctaText={intl.formatMessage({ id: "NEED_DESIGN" })}
                bulletPoints={[
                  {
                    title: intl.formatMessage({ id: "1_FACILITATION" }),
                    description: intl.formatMessage({
                      id: "DESIGNING_AN_ADHOC_METHODOLOGY_TO_FACILITATE",
                    }),
                  },
                  {
                    title: intl.formatMessage({ id: "DESIGN_RESEARCH" }),
                    description: intl.formatMessage({
                      id: "UNDERSTANDING_USER_EXPERIENCE_NEEDS_AND_INFLUENCES",
                    }),
                  },
                  {
                    title: intl.formatMessage({ id: "3_SERVICE_DESIGN" }),
                    description: intl.formatMessage({
                      id: "CREATING_A_COHERENT_AND_FLUID_USER_EXPERIENCE",
                    }),
                  },
                ]}
                onClick={() => handleClickService("diseño-de-servicios")}
              />
              <Service
                title={intl.formatMessage({ id: "BRAND_IDENTITY" })}
                ctaText={intl.formatMessage({ id: "NEED_BRANDING" })}
                explanation={intl.formatMessage({
                  id: "DISCOVERING_YOUR_PROJECTS_AUTHENTIC_IDENTITY_AMD_CRAFTING",
                })}
                onClick={() => handleClickService("branding")}
                sprm={true}
              />
              <Service
                title={intl.formatMessage({ id: "DESIGN_AND_WEB_DEVELOPMENT" })}
                ctaText={intl.formatMessage({ id: "NEED_WEB" })}
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
