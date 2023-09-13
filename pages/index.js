/* eslint-disable react/jsx-no-comment-textnodes */
import styles from "@/styles/Home.module.scss";
import Layout from "@/components/layout";
import Service from "@/components/service";
import PropuestaForm from "@/components/propuestaForm";
import Subscribe from "@/components/subscribe";
import { useLayoutEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, EffectCreative } from "swiper/modules";
import "swiper/css";

export default function Home() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const swiperRef = useRef();

  useLayoutEffect(() => {
    setIsDesktop(typeof window !== "undefined" && window.innerWidth > 768);
    /* if (isDesktop) {
        setIsLoading(true);
      } else {
        setIsLoading(false);
      }
      setTimeout(() => setIsLoading(false), 4000); */
  }, [isDesktop]);

  /* if (isLoading && isDesktop)
    return (
      <div className={styles.loading_div}>
        <h3>INSPÍRATE</h3>
        <p>
          Inspiración (<span>def.</span>): Recibir guía divina, una iluminación
          creativa.
        </p>
        <div className={styles.container}>
          <div
            id="water"
            className={
              styles.water +
              " " +
              styles.filter_active +
              " " +
              styles.flow_active
            }
          ></div>
        </div>
        <svg width="0" height="0" fillOpacity="20%">
          <filter id="water-filter">
            <feTurbulence
              id="feTurb"
              type="fractalNoise"
              baseFrequency="0.01 0.01"
              seed="2"
              numOctaves="1"
            />
            <animate
              xlinkHref="#feTurb"
              attributeName="baseFrequency"
              dur="40s"
              keyTimes="0;0.5;1"
              values="0.0034 0.006;0.0012 0.008;0.001 0.008"
              repeatCount="indefinite"
            />
            <feDisplacementMap id="feDisp" in="SourceGraphic" scale="150" />
          </filter>
        </svg>
      </div>
    ); */

  if (!isLoading)
    return (
      <Layout>
        <main className={styles.main}>
          <section className={styles.keywords}>
            {isDesktop ? (
              <>
                <p className={styles.text_1}>
                  INSPIRACIÓN // CREATIVIDAD // ALMA // EVOLUCIÓN // ESTRATEGIA
                  // EXPANSIÓN // INSPIRACIÓN // CREATIVIDAD // ALMA //
                  EVOLUCIÓN // ESTRATEGIA // EXPANSIÓN //{" "}
                  <span className={styles.espacio}></span>
                </p>
                <p className={styles.text_2}>
                  INSPIRACIÓN // CREATIVIDAD // ALMA // EVOLUCIÓN // ESTRATEGIA
                  // EXPANSIÓN // INSPIRACIÓN // CREATIVIDAD // ALMA //
                  EVOLUCIÓN // ESTRATEGIA // EXPANSIÓN //{" "}
                  <span className={styles.espacio}></span>
                </p>
              </>
            ) : (
              <>
                <p className={styles.text_1}>
                  INSPIRACIÓN // CREATIVIDAD // ALMA // EVOLUCIÓN // ESTRATEGIA
                  // EXPANSIÓN // <span className={styles.espacio}></span>
                </p>
                <p className={styles.text_2}>
                  INSPIRACIÓN // CREATIVIDAD // ALMA // EVOLUCIÓN // ESTRATEGIA
                  // EXPANSIÓN // <span className={styles.espacio}></span>
                </p>
              </>
            )}
          </section>
          {!isDesktop && (
            <section className={styles.inspirate}>
              <h3>INSPÍRATE</h3>
              <p>
                Inspiración (<span>def.</span>): Recibir guía divina, una
                iluminación creativa.
              </p>
            </section>
          )}
          {isDesktop && (
            <section className={styles.inspirate_cada_mes}>
              <div>
                <h3>RECIBE INSPIRACIÓN CADA MES</h3>
                <p>
                  Despertar Creativo es una Newsletter mensual gratuita con
                  píldoras de inspiración para tu vida y tus creaciones.
                  Diseñada para artistas, creativ@s y personas en su camino de
                  evolución personal.
                  <span> ¡Welcoming you, creative soul!</span>
                </p>
              </div>
              <Subscribe pageWhereLoaded={"home"} />
            </section>
          )}
          {isDesktop && (
            <Swiper
              ref={swiperRef}
              effect={"cards"}
              cardsEffect={{
                perSlideRotate: 0, // Rotation of cards in degrees
                perSlideOffset: 45, // Space between cards in px
                slideShadows: false,
              }}
              slidesPerView={1}
              modules={[EffectCards]}
              grabCursor={true}
              initialSlide={1}
              className={styles.servicios}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
            >
              <SwiperSlide onClick={() => swiperRef.current.slideTo(0)}>
                <div className={styles.servicio}>
                  <h3>SOY ARTISTA, CREATIV@ O DISEÑADORA</h3>
                  <div className={styles.servicios_grupo}>
                    <Service
                      title="Descubre tus dones y tu voz creativa"
                      description="Comprende tu huella creativa: misión creativa, energías principales, talentos, retos evolutivos de tu camino creativo, expresión creativa principal, en una sesión híbrida de coaching creativo, astrología evolutiva y tarot."
                      price="111,00 €"
                      hashtags="#despertarcreativo #astrología #creatividad #tarot"
                      calendlyUrl="https://calendly.com/jimenagonzalez-in/descubre-mision-dones"
                    />
                    <Service
                      title="Intenciona tu siguiente proyecto"
                      description="Descubre la identidad de tu próximo proyecto: su naturaleza, su propósito, los aprendizajes que trae, los retos y los dones que te pide expresar, en una sesión híbrida de facilitación creativa y tarot."
                      price="77,00 €"
                      hashtags="#despertarcreativo #creatividad #tarot"
                      calendlyUrl="https://calendly.com/jimenagonzalez-in/sesion-intenciona-tu-siguiente-proyecto-x-jimena-gonzalez"
                    />
                    <Service
                      title="Supera bloqueos creativos"
                      description="Comprende el origen de tu bloqueo creativo, los aprendizajes a integrar y las acciones para liberarlo, en una sesión de coaching creativo y canalización con tarot."
                      price="77,00 €"
                      hashtags="#despertarcreativo #procesocreativo #tarot"
                      calendlyUrl="https://calendly.com/jimenagonzalez-in/sesion-supera-tu-bloqueo-creativo-x-jimena-gonzalez"
                    />
                    <Service
                      title="Manifiesta (diseña tu estrategia)"
                      description="Conecta con tu auténtica visión, intenciona tu expansión y diseña un plan guiado, en una sesión de asesoramiento estratégico."
                      price="111,00 € *"
                      hashtags="#estrategia #diseño #despertarcreativo"
                      calendlyUrl="https://calendly.com/jimenagonzalez-in/sesion-manifiesta-estrategia-x-jimena-gonzalez"
                      asterisco="* Las sesiones de asesoramiento estratégico posteriores tienen un valor de 95€."
                    />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide onClick={() => swiperRef.current.slideTo(1)}>
                <div className={styles.servicio}>
                  <h3>TENGO UN NEGOCIO O PROYECTO</h3>
                  <div className={styles.servicios_grupo}>
                    <Service
                      title="Manifiesta (diseña tu estrategia)"
                      description="Crea o revisa la estrategia de tu proyecto o negocio con esta sesión de asesoramiento estratégico, adaptada a su necesidad y momento actual, con diseño de estrategia y business coaching."
                      price="111,00 € *"
                      hashtags="#estrategia #businessdesign"
                      calendlyUrl="https://calendly.com/jimenagonzalez-in/sesion-manifiesta-disena-tu-estrategia-x-jimena-gonzalez"
                      asterisco="* Bono de 5 sesiones de asesoramiento estratégico · 444€"
                    />
                    <Service
                      title="Eleva la experiencia de tus clientes"
                      description="Crea o rediseña la experiencia física y/o digital de los usuarios de tus servicios con esta sesión de acompañamiento estratégico. Eleva la oferta de tu negocio usando diseño de experiencia y diseño de servicios. "
                      price="111,00 € *"
                      hashtags="#estrategia #experiencedesign #servicedesign"
                      calendlyUrl="https://calendly.com/jimenagonzalez-in/sesion-eleva-x-jimena-gonzalez"
                      asterisco="* Bono de 5 sesiones de asesoramiento estratégico · 444€"
                    />
                    <Service
                      title="Descubre tu misión y dones"
                      description="Comprende tu huella creativa: misión, dones y talentos a expresar, retos evolutivos y naturaleza de los proyectos alineados, en una sesión híbrida de coaching estratégico, astrología evolutiva y tarot."
                      price="111,00 €"
                      hashtags="#emprendimiento #tarot #despertarcreativo #astrología"
                      calendlyUrl="https://calendly.com/jimenagonzalez-in/sesion-descubre-tu-mision-y-dones-x-jimena-gonzalez"
                    />
                    <Service
                      title="Conecta con el alma de tu negocio o proyecto"
                      description="Descubre la identidad de tu negocio: alma y naturaleza, misión individual y colectiva, propósito, tu rol en él, los dones y talentos que te pide expresar y los aprendizajes que trae para ti; en una sesión híbrida de diseño de negocios y coaching estratégico combinada con canalización y tarot."
                      price="77,00 €"
                      hashtags="#estrategia #despertarcreativo #tarot"
                      calendlyUrl="https://calendly.com/jimenagonzalez-in/sesion-conecta-con-el-alma-de-tu-negocio-x-jimena-gonzalez"
                    />
                    <Service
                      title="Supera bloqueos y dificultades"
                      description="Comprende la naturaleza de tus bloqueos, los aprendizajes que traen y las acciones para liberarlos, en una sesión de coaching estratégico combinada con tarot."
                      price="77,00 €"
                      hashtags="#estrategia #despertarcreativo #tarot"
                      calendlyUrl="https://calendly.com/jimenagonzalez-in/sesion-supera-bloqueos-y-dificultades-x-jimena-gonzalez"
                    />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide onClick={() => swiperRef.current.slideTo(2)}>
                <div className={styles.servicio}>
                  <h3>
                    ESTOY EN MI CAMINO DE EVOLUCIÓN PERSONAL Y/O ESPIRITUAL
                  </h3>
                  <div className={styles.servicios_grupo}>
                    <Service
                      title="Descubre tu misión, dones y retos vitales"
                      description="Comprende tu huella evolutiva: misión, dones y talentos a expresar, retos evolutivos y de sanación de tu alma, en una sesión de lectura de tu carta astral combinada con una tirada de tarot evolutivo."
                      price="99,00 €"
                      hashtags="#astrología #tarot"
                      calendlyUrl="https://calendly.com/jimenagonzalez-in/sesion-descubre-tu-mision-y-evolucion-x-jimena-gonzalez"
                    />
                    <Service
                      title="Comprende el sentido de tu reto actual"
                      description="Descubre la perspectiva evolutiva y espiritual de tu dificultad actual (pareja, salud, trabajo, sanación…) y conecta con su propósito, aprendizajes y acciones a tomar, en una sesión de tarot evolutivo."
                      price="55,00 €"
                      hashtags="#tarot #espiritualidad"
                      calendlyUrl="https://calendly.com/jimenagonzalez-in/sesion-comprende-tu-reto-x-jimena-gonzalez"
                    />
                    <Service
                      title="Desvela el propósito de esta etapa vital"
                      description="Comprende la energía de esta etapa de tu desarrollo, sus retos evolutivos y aprendizajes a integrar, las áreas de tu vida que son protagonistas y la energía disponible para ti; en una sesión de lectura de tu revolución solar, tránsitos del año y el clima astral aplicado combinado con una tirada de tarot evolutivo. Especialmente recomendada para cumpleaños, comienzos de año o cambios vitales."
                      price="222,00 €"
                      hashtags="#astrologia #tarot"
                      calendlyUrl="https://calendly.com/jimenagonzalez-in/sesion-desvela-esta-etapa-vital-x-jimena-gonzalez"
                    />
                    <Service
                      title="Crea tu propia sesión"
                      description="Explora cualquier temática en esta sesión, con la técnica o técnicas que mejor se adapten a ella: una tirada personalizada de Tarot, información astrológica, Registros Akáshicos, numerología, diseño humano, coaching, etc."
                      price="55,00 €"
                      calendlyUrl="https://calendly.com/jimenagonzalez-in/crea-tu-sesion-x-jimena-gonzalez"
                    />
                    <Service
                      title="Resuelve tu duda (express)"
                      description="Aclara una consulta rápida en esta sesión de 10 minutos con Tarot y/o otras técnicas."
                      price="25,00 €"
                      calendlyUrl="https://calendly.com/jimenagonzalez-in/sesion-consulta-express-x-jimena-gonzalez-clone"
                    />
                  </div>
                </div>
              </SwiperSlide>
              {isDesktop && (
                <SwiperSlide onClick={() => swiperRef.current.slideTo(3)}>
                  <div className={styles.servicio + " " + styles.regala_sesion}>
                    <h3>QUIERO REGALAR UNA SESIÓN</h3>
                    <p>
                      Todas las sesiones incluyen un bono regalo digital
                      personalizado, un ejercicio de Despertar Creativo® previo
                      a la sesión y una sesión online en directo. La fecha de la
                      sesión y su temática podrá ser elegida después por la
                      persona a la que envíes el bono regalo.
                    </p>
                    <p>
                      Elige la técnica principal de la sesión para empezar a
                      personalizar tu regalo:
                    </p>
                    <div className={styles.servicios_grupo}>
                      <Service
                        title="TAROT"
                        description="Sesión a elegir entre “Comprende el sentido de tu reto actual”, “Supera bloqueos y dificultades” (especial emprendedor@s), “Conecta con el alma de tu negocio” (especial emprendedor@s), “Supera bloqueos creativos” (especial creativ@s) e “Intenciona tu siguiente proyecto” (especial creativ@s)."
                        price="55,00 €"
                        calendlyUrl="https://buy.stripe.com/dR69B34GFd2ud7G004"
                        cta="SELECCIONAR"
                      />
                      <Service
                        title="ASTROLOGÍA"
                        description="Sesión de lectura de su carta astral: energías principales, dones y talentos, retos evolutivos y de sanación y misión personal."
                        price="88,00 €"
                        calendlyUrl="https://buy.stripe.com/00gdRj6ONe6y9VueV1"
                        cta="SELECCIONAR"
                      />
                      <Service
                        title="ASTROLOGÍA + TAROT"
                        description="Sesión a elegir entre “Descubre tu misión, dones y retos vitales”, “Desvela el propósito de esta etapa vital”, “Descubre tu misión y dones” (especial emprendedor@s) y “Descubre tus dones y tu voz creativa” (especial creativ@s)."
                        price="99,00 €"
                        calendlyUrl="https://buy.stripe.com/4gw00t6ON5A2gjS4gm"
                        cta="SELECCIONAR"
                      />
                      <Service
                        title="MANI(FEST)"
                        description="Una sesión con asesoramiento espiritual y estratégico para conectar con su auténtica visión, intencionar su expansión y diseñar un plan guiado para manifestarla."
                        price="111,00 €"
                        calendlyUrl="https://buy.stripe.com/5kA00tc97faC9VubIK"
                        cta="SELECCIONAR"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              )}
            </Swiper>
          )}
          {!isDesktop && (
            <section className={styles.servicios}>
              <div className={styles.servicio}>
                <h3>TENGO UN NEGOCIO O PROYECTO</h3>
                <div className={styles.servicios_grupo}>
                  <Service
                    title="Manifiesta (diseña tu estrategia)"
                    description="Crea o revisa la estrategia de tu proyecto o negocio con esta sesión de asesoramiento estratégico, adaptada a su necesidad y momento actual, con diseño de estrategia y business coaching."
                    price="111,00 € *"
                    hashtags="#estrategia #businessdesign"
                    calendlyUrl="https://calendly.com/jimenagonzalez-in/sesion-manifiesta-disena-tu-estrategia-x-jimena-gonzalez"
                    asterisco="* Bono de 5 sesiones de asesoramiento estratégico · 444€"
                  />
                  <Service
                    title="Eleva la experiencia de tus clientes"
                    description="Crea o rediseña la experiencia física y/o digital de los usuarios de tus servicios con esta sesión de acompañamiento estratégico. Eleva la oferta de tu negocio usando diseño de experiencia y diseño de servicios. "
                    price="111,00 € *"
                    hashtags="#estrategia #experiencedesign #servicedesign"
                    calendlyUrl="https://calendly.com/jimenagonzalez-in/sesion-eleva-x-jimena-gonzalez"
                    asterisco="* Bono de 5 sesiones de asesoramiento estratégico · 444€"
                  />
                  <Service
                    title="Descubre tu misión y dones"
                    description="Comprende tu huella creativa: misión, dones y talentos a expresar, retos evolutivos y naturaleza de los proyectos alineados, en una sesión híbrida de coaching estratégico, astrología evolutiva y tarot."
                    price="111,00 €"
                    hashtags="#emprendimiento #tarot #despertarcreativo #astrología"
                    calendlyUrl="https://calendly.com/jimenagonzalez-in/sesion-descubre-tu-mision-y-dones-x-jimena-gonzalez"
                  />
                  <Service
                    title="Conecta con el alma de tu negocio o proyecto"
                    description="Descubre la identidad de tu negocio: alma y naturaleza, misión individual y colectiva, propósito, tu rol en él, los dones y talentos que te pide expresar y los aprendizajes que trae para ti; en una sesión híbrida de diseño de negocios y coaching estratégico combinada con canalización y tarot."
                    price="77,00 €"
                    hashtags="#estrategia #despertarcreativo #tarot"
                    calendlyUrl="https://calendly.com/jimenagonzalez-in/sesion-conecta-con-el-alma-de-tu-negocio-x-jimena-gonzalez"
                  />
                  <Service
                    title="Supera bloqueos y dificultades"
                    description="Comprende la naturaleza de tus bloqueos, los aprendizajes que traen y las acciones para liberarlos, en una sesión de coaching estratégico combinada con tarot."
                    price="77,00 €"
                    hashtags="#estrategia #despertarcreativo #tarot"
                    calendlyUrl="https://calendly.com/jimenagonzalez-in/sesion-supera-bloqueos-y-dificultades-x-jimena-gonzalez"
                  />
                </div>
              </div>
              <div className={styles.servicio}>
                <h3>SOY ARTISTA, CREATIV@ O DISEÑADORA</h3>
                <div className={styles.servicios_grupo}>
                  <Service
                    title="Descubre tus dones y tu voz creativa"
                    description="Comprende tu huella creativa: misión creativa, energías principales, talentos, retos evolutivos de tu camino creativo, expresión creativa principal, en una sesión híbrida de coaching creativo, astrología evolutiva y tarot."
                    price="111,00 €"
                    hashtags="#despertarcreativo #astrología #creatividad #tarot"
                    calendlyUrl="https://calendly.com/jimenagonzalez-in/descubre-mision-dones"
                  />
                  <Service
                    title="Intenciona tu siguiente proyecto"
                    description="Descubre la identidad de tu próximo proyecto: su naturaleza, su propósito, los aprendizajes que trae, los retos y los dones que te pide expresar, en una sesión híbrida de facilitación creativa y tarot."
                    price="77,00 €"
                    hashtags="#despertarcreativo #creatividad #tarot"
                    calendlyUrl="https://calendly.com/jimenagonzalez-in/sesion-intenciona-tu-siguiente-proyecto-x-jimena-gonzalez"
                  />
                  <Service
                    title="Supera bloqueos creativos"
                    description="Comprende el origen de tu bloqueo creativo, los aprendizajes a integrar y las acciones para liberarlo, en una sesión de coaching creativo y canalización con tarot."
                    price="77,00 €"
                    hashtags="#despertarcreativo #procesocreativo #tarot"
                    calendlyUrl="https://calendly.com/jimenagonzalez-in/sesion-supera-tu-bloqueo-creativo-x-jimena-gonzalez"
                  />
                  <Service
                    title="Manifiesta (diseña tu estrategia)"
                    description="Conecta con tu auténtica visión, intenciona tu expansión y diseña un plan guiado, en una sesión de asesoramiento estratégico."
                    price="111,00 € *"
                    hashtags="#estrategia #diseño #despertarcreativo"
                    calendlyUrl="https://calendly.com/jimenagonzalez-in/sesion-manifiesta-estrategia-x-jimena-gonzalez"
                    asterisco="* Las sesiones de asesoramiento estratégico posteriores tienen un valor de 95€."
                  />
                </div>
              </div>
              <div className={styles.servicio}>
                <h3>ESTOY EN MI CAMINO DE EVOLUCIÓN PERSONAL Y/O ESPIRITUAL</h3>
                <div className={styles.servicios_grupo}>
                  <Service
                    title="Descubre tu misión, dones y retos vitales"
                    description="Comprende tu huella evolutiva: misión, dones y talentos a expresar, retos evolutivos y de sanación de tu alma, en una sesión de lectura de tu carta astral combinada con una tirada de tarot evolutivo."
                    price="99,00 €"
                    hashtags="#astrología #tarot"
                    calendlyUrl="https://calendly.com/jimenagonzalez-in/sesion-descubre-tu-mision-y-evolucion-x-jimena-gonzalez"
                  />
                  <Service
                    title="Comprende el sentido de tu reto actual"
                    description="Descubre la perspectiva evolutiva y espiritual de tu dificultad actual (pareja, salud, trabajo, sanación…) y conecta con su propósito, aprendizajes y acciones a tomar, en una sesión de tarot evolutivo."
                    price="55,00 €"
                    hashtags="#tarot #espiritualidad"
                    calendlyUrl="https://calendly.com/jimenagonzalez-in/sesion-comprende-tu-reto-x-jimena-gonzalez"
                  />
                  <Service
                    title="Desvela el propósito de esta etapa vital"
                    description="Comprende la energía de esta etapa de tu desarrollo, sus retos evolutivos y aprendizajes a integrar, las áreas de tu vida que son protagonistas y la energía disponible para ti; en una sesión de lectura de tu revolución solar, tránsitos del año y el clima astral aplicado combinado con una tirada de tarot evolutivo. Especialmente recomendada para cumpleaños, comienzos de año o cambios vitales."
                    price="222,00 €"
                    hashtags="#astrologia #tarot"
                    calendlyUrl="https://calendly.com/jimenagonzalez-in/sesion-desvela-esta-etapa-vital-x-jimena-gonzalez"
                  />
                  <Service
                    title="Crea tu propia sesión"
                    description="Explora cualquier temática en esta sesión, con la técnica o técnicas que mejor se adapten a ella: una tirada personalizada de Tarot, información astrológica, Registros Akáshicos, numerología, diseño humano, coaching, etc."
                    price="55,00 €"
                    calendlyUrl="https://calendly.com/jimenagonzalez-in/crea-tu-sesion-x-jimena-gonzalez"
                  />
                  <Service
                    title="Resuelve tu duda (express)"
                    description="Aclara una consulta rápida en esta sesión de 10 minutos con Tarot y/o otras técnicas."
                    price="25,00 €"
                    calendlyUrl="https://calendly.com/jimenagonzalez-in/sesion-consulta-express-x-jimena-gonzalez-clone"
                  />
                </div>
              </div>
              <div className={styles.servicio}>
                <h3>HAZME UNA PROPUESTA</h3>
                <PropuestaForm pageWhereLoaded={"home"} />
              </div>
            </section>
          )}
          {!isDesktop && (
            <section className={styles.inspirate_cada_mes}>
              <h3>RECIBE INSPIRACIÓN CADA MES</h3>
              <p>
                Despertar Creativo es una Newsletter mensual gratuita con
                píldoras de inspiración para tu vida y tus creaciones. Diseñada
                para artistas, creativ@s y personas en su camino de evolución
                personal.
                <span> ¡Welcoming you, creative soul!</span>
              </p>
              <Subscribe pageWhereLoaded={"home"} />
            </section>
          )}
          {!isDesktop && (
            <section className={styles.servicios}>
              <div className={styles.servicio + " " + styles.regala_sesion}>
                <h3>QUIERO REGALAR UNA SESIÓN</h3>
                <p>
                  Todas las sesiones incluyen un bono regalo digital
                  personalizado, un ejercicio de Despertar Creativo® previo a la
                  sesión y una sesión online en directo. La fecha de la sesión y
                  su temática podrá ser elegida después por la persona a la que
                  envíes el bono regalo.
                </p>
                <p>
                  Elige la técnica principal de la sesión para empezar a
                  personalizar tu regalo:
                </p>
                <div className={styles.servicios_grupo}>
                  <Service
                    title="TAROT"
                    description="Sesión a elegir entre “Comprende el sentido de tu reto actual”, “Supera bloqueos y dificultades” (especial emprendedor@s), “Conecta con el alma de tu negocio” (especial emprendedor@s), “Supera bloqueos creativos” (especial creativ@s) e “Intenciona tu siguiente proyecto” (especial creativ@s)."
                    price="55,00 €"
                    calendlyUrl="https://buy.stripe.com/dR69B34GFd2ud7G004"
                    cta="SELECCIONAR"
                  />
                  <Service
                    title="ASTROLOGÍA"
                    description="Sesión de lectura de su carta astral: energías principales, dones y talentos, retos evolutivos y de sanación y misión personal."
                    price="88,00 €"
                    calendlyUrl="https://buy.stripe.com/00gdRj6ONe6y9VueV1"
                    cta="SELECCIONAR"
                  />
                  <Service
                    title="ASTROLOGÍA + TAROT"
                    description="Sesión a elegir entre “Descubre tu misión, dones y retos vitales”, “Desvela el propósito de esta etapa vital”, “Descubre tu misión y dones” (especial emprendedor@s) y “Descubre tus dones y tu voz creativa” (especial creativ@s)."
                    price="99,00 €"
                    calendlyUrl="https://buy.stripe.com/4gw00t6ON5A2gjS4gm"
                    cta="SELECCIONAR"
                  />
                  <Service
                    title="MANI(FEST)"
                    description="Una sesión con asesoramiento espiritual y estratégico para conectar con su auténtica visión, intencionar su expansión y diseñar un plan guiado para manifestarla."
                    price="111,00 €"
                    calendlyUrl="https://buy.stripe.com/5kA00tc97faC9VubIK"
                    cta="SELECCIONAR"
                  />
                </div>
              </div>
            </section>
          )}
          <section className={styles.servicios + " " + styles.faq_section}>
            {isDesktop && (
              <div className={styles.servicio}>
                <h3>HAZME UNA PROPUESTA</h3>
                <PropuestaForm pageWhereLoaded={"home"} />
              </div>
            )}
            <div className={styles.servicio + " " + styles.regala_sesion}>
              <h3>FAQ</h3>
              <div className={styles.faq}>
                <Service
                  title="¿Qué es Despertar Creativo®?"
                  description=<>
                    Despertar Creativo® es el nombre de mi metodología, que
                    combina elementos de estrategia de negocios, procesos
                    creativos y de diseño y espiritualidad, facilitando la
                    conexión con la inspiración auténtica y la acción alineada.
                    {
                      <>
                        <br></br>
                        <br></br>
                      </>
                    }
                    También es el nombre de mi Newsletter mensual, que contiene
                    ejercicios gratuitos, el clima energético del mes,técnicas
                    creativas, recomendaciones, pre-lanzamientos y promociones,
                    meditaciones y mucho más.
                  </>
                />
                <Service
                  title="¿Cómo funcionan las sesiones?"
                  description=<>
                    Al adquirir la sesión, eliges el día y la hora que mejor te
                    venga para nuestro encuentro. Inmediatamente después
                    recibirás un evento en tu correo electrónico con los
                    detalles de la videollamada.
                    {
                      <>
                        <br></br>
                        <br></br>
                      </>
                    }
                    Previo a la sesión, recibirás un ejercicio de Despertar
                    Creativo®, diseñado para guiarte en una reflexión intuitiva
                    sobre la temática de la sesión. Esta propuesta es
                    completamente opcional, pero suele permitir una mayor
                    profundización y foco en la sesión.
                    {
                      <>
                        <br></br>
                        <br></br>
                      </>
                    }
                    En la sesión en directo, después de una pequeña
                    presentación, enmarcaremos la temática y nos sumergiremos en
                    el tema para alcanzar mayor perspectiva y claridad.
                    Mientras, podrás hacer cualquier pregunta.
                  </>
                />
                <Service
                  title="¿Cómo es una sesión conmigo?"
                  description=<>
                    Sea la sesión que sea, mi compromiso es sensibilidad,
                    honestidad y excelencia. Sensibilidad, como empatía, alta
                    percepción y escucha; honestidad, como transparencia
                    absoluta; y excelencia, como máxima calidad y entrega de
                    valor en toda la experiencia.
                  </>
                />
                <Service
                  title="¿Cómo funcionan los bonos regalo?"
                  description=<>
                    Al comprar un bono regalo, recibirás en tu correo
                    electrónico (en el día laboral siguiente), una tarjeta
                    regalo digital personalizada con el nombre de la persona a
                    la que regales.
                    {
                      <>
                        <br></br>
                        <br></br>
                      </>
                    }
                    Con ella, podrá agendar directamente su sesión. Al hacerlo,
                    recibirá un correo electrónico para elegir el tema de su
                    sesión, enviarme los datos necesarios (en caso de que la
                    sesión tenga astrología) y recibir el ejercicio de{" "}
                    <a
                      href="https://mailchi.mp/cad3bc2e7c34/despertar-creativo"
                      target="_blank"
                    >
                      Despertar Creativo
                    </a>
                    ®.
                  </>
                />
                <Service
                  title="Tengo un negocio, ¿cómo me puedes ayudar?"
                  description=<>
                    Tras más de 8 años de experiencia en consultoría estratégica
                    para grandes empresas y más de 5 de asesoramiento de
                    start-ups, mi especialidad es la estrategia: definición e
                    iteración de modelo de negocio, cartera de productos y
                    servicios, conceptualización de marca, planes estratégicos y
                    tácticos y diseño de experiencia de cliente; así como
                    investigación de mercado y de usuarios.
                    {
                      <>
                        <br></br>
                        <br></br>
                      </>
                    }
                    Además, mi metodología de Despertar Creativo incluye
                    facilitación espiritual, para que la estrategia de tu
                    negocio esté alineada con tu misión personal.
                    {
                      <>
                        <br></br>
                        <br></br>
                      </>
                    }
                    Si no tienes claro si te puedo ayudar o quieres un servicio
                    personalizado{" "}
                    {
                      <a href="mailto:jimenagonzalez.in@gmail.com">
                        ¡escríbeme
                      </a>
                    }{" "}
                    y vemos si somos match!
                  </>
                />
                <Service
                  title="Estoy emprendiendo, ¿cómo me puedes ayudar?"
                  description=<>
                    Tras 8 años de experiencia en proyectos de innovación e
                    intraemprendimiento y 5 de asesoramiento estratégico de
                    start-ups, además del lanzamiento de mi propio negocio, mi
                    especialidad son las metodologías ágiles para emprender:
                    lean start-up, diseño de negocios y diseño estratégico. Mi
                    expertise abarca la definición del modelo de negocio, la
                    conceptualización de identidad, el plan estratégico y
                    táctico y el diseño de productos y servicios; así como la
                    investigación de mercado y usuarios.
                    {
                      <>
                        <br></br>
                        <br></br>
                      </>
                    }
                    Con mi metodología Despertar Creativo®, incorporo
                    facilitación espiritual para dotar a tu negocio de alma y
                    alinearlo con tu misión personal.
                    {
                      <>
                        <br></br>
                        <br></br>
                      </>
                    }
                    Si no tienes clara todavía tu necesidad, no sabes si te
                    puedo ayudar o quieres un servicio personalizado,{" "}
                    {
                      <a href="mailto:jimenagonzalez.in@gmail.com">
                        ¡escríbeme
                      </a>
                    }{" "}
                    y vemos si somos match!
                  </>
                />
                <Service
                  title="Soy artista o creativ@, ¿cómo me puedes ayudar?"
                  description=<>
                    Después de más de 5 años haciendo facilitación creativa en
                    procesos de diseño en equipos de grandes empresas, artistas
                    emergentes y emprendedor@s, me he especializado en
                    metodologías para impulsar el proceso creativo, facilitando
                    procesos individuales o de equipo.{" "}
                    {
                      <>
                        <br></br>
                        <br></br>
                      </>
                    }
                    Mi metodología (Despertar Creativo®) está basada en los
                    cuatro ejes divergencia-convergencia, interno-externo;
                    cimentada en conceptos de metodologías de diseño, técnicas
                    creativas y facilitación espiritual, para alinear tus
                    creaciones con tu misión personal y tu auténtica esencia.
                    {
                      <>
                        <br></br>
                        <br></br>
                      </>
                    }
                    Si tienes dudas, no sabes si te puedo ayudar o quieres un
                    servicio personalizado,{" "}
                    {
                      <a href="mailto:jimenagonzalez.in@gmail.com">
                        ¡escríbeme
                      </a>
                    }{" "}
                    y vemos si somos match!
                  </>
                />
                <Service
                  title="Estoy en mi camino de evolución personal, ¿cómo me puedes ayudar?"
                  description=<>
                    Tras mi propio camino de sanación y evolución personal que
                    comenzó hace más de 10 años, hace 3 experimenté el mayor
                    proceso de despertar espiritual hasta la fecha. Entonces
                    comencé a hacer sesiones de Tarot y astrología a otras
                    personas; y desde entonces he acompañado a más de 150.
                    {
                      <>
                        <br></br>
                        <br></br>
                      </>
                    }
                    Aunque mi camino espiritual y de aprendizaje está en
                    constante evolución, y voy aprendiendo más de otras
                    herramientas, como numerología, diseño humano o registros
                    akásicos, el core de mi oferta es Tarot y astrología, que
                    uso con un enfoque evolutivo-espiritual.
                    {
                      <>
                        <br></br>
                        <br></br>
                      </>
                    }
                    Es decir, mi intención es ampliar tu perspectiva, ayudarte a
                    comprender el propósito de tus experiencias y la energía
                    disponible para ti, de modo que puedas tomar acción de
                    manera más consciente y alineada.
                    {
                      <>
                        <br></br>
                        <br></br>
                      </>
                    }
                    Si quieres una sesión diferente a las que tengo disponibles,{" "}
                    {
                      <a href="mailto:jimenagonzalez.in@gmail.com">
                        ¡escríbeme!
                      </a>
                    }
                  </>
                />
                <Service
                  title="Quiero algo distinto"
                  description=<>
                    Si tienes alguna otra necesidad o idea (sesiones con tu
                    equipo, formaciones, charlas, acompañamiento a medio plazo),
                    puedes usar la sección “Hazme una propuesta” en la home o{" "}
                    {
                      <a href="mailto:jimenagonzalez.in@gmail.com">
                        escribirme
                      </a>
                    }{" "}
                    un correo.
                    {
                      <>
                        <br></br>
                        <br></br>
                      </>
                    }
                    Te responderé a la mayor brevedad posible para conversar
                    sobre tu necesidad y pasarte un presupuesto. En caso de no
                    poder ayudarte, quizá pueda recomendarte otr@s profesional@s
                    que sí puedan.
                  </>
                />
              </div>
            </div>
          </section>
        </main>
      </Layout>
    );
}
