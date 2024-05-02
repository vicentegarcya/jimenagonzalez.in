import Image from "next/image";
import styles from "./logos.module.css";
import { useEffect, useRef } from "react";

const Logos = () => {
  const logosRef = useRef();

  useEffect(() => {
    const interval = setInterval(() => {
      handleImages();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleImages = () => {
    logosRef.current
      ?.querySelector("div:nth-child(2)")
      .classList.toggle(`${styles.hide}`);

    logosRef.current
      ?.querySelector("div:nth-child(10)")
      .classList.toggle(`${styles.hide}`);
  };

  return (
    <div ref={logosRef} className={styles.logos}>
      <div className={styles.logo1}>
        <Image
          src="/big_companies/BBVA.png"
          width={0}
          height={0}
          sizes="10vw"
          style={{ width: "7vw", height: "auto" }}
          alt={"BBVA company logo"}
        ></Image>
        <p>
          desarrollando la estrategia de la disciplina de diseño, liderando
          proyectos transversales y lanzando iniciativas estratégicas para el
          equipo de España
        </p>
      </div>
      <div className={styles.logo2}>
        <Image
          src="/big_companies/ikea.png"
          width={0}
          height={0}
          sizes="10vw"
          style={{ width: "8vw", height: "auto" }}
          alt={"ikea company logo"}
        ></Image>
        <p>
          diseñando la experiencia híbrida (phygital) de la tienda del futuro
        </p>
      </div>
      <div className={styles.logo3}>
        <Image
          src="/big_companies/acciona.png"
          width={0}
          height={0}
          sizes="10vw"
          style={{ width: "9vw", height: "auto" }}
          alt={"acciona company logo"}
        ></Image>
        <p>
          diseñando el hub de aplicaciones para la gestión y experiencia del
          campus Mesena
        </p>
      </div>
      <div className={styles.logo4}>
        <Image
          src="/big_companies/repsol.png"
          width={0}
          height={0}
          sizes="10vw"
          style={{ width: "10vw", height: "auto" }}
          alt={"Repsol company logo"}
        ></Image>
        <p>desarrollando el cambio de organigrama estratégico de la compañía</p>
      </div>
      <div className={styles.logo5}>
        <Image
          src="/big_companies/mapfre.png"
          width={0}
          height={0}
          sizes="10vw"
          style={{ width: "10vw", height: "auto" }}
          alt={"mapfre company logo"}
        ></Image>
        <p>
          formando a los equipos de la compañía en investigación de usuarios y
          llevando a cabo investigación cualitativa de usuarios de seguros de
          hogar y coche
        </p>
      </div>
      <div className={styles.logo6}>
        <Image
          src="/big_companies/fortum.png"
          width={0}
          height={0}
          sizes="10vw"
          style={{ width: "10vw", height: "auto" }}
          alt={"fortum company logo"}
        ></Image>
        <p>
          creando un intraemprendimiento en el sector eléctrico, desde la
          investigación de mercado y usuarios, la conceptualización del
          servicio, la creación del modelo de negocio, el plan de lanzamiento y
          el seguimiento post-lanzamiento
        </p>
      </div>
      <div className={styles.logo7}>
        <Image
          src="/big_companies/verisure.png"
          width={0}
          height={0}
          sizes="10vw"
          style={{ width: "10vw", height: "auto" }}
          alt={"verisure company logo"}
        ></Image>
        <p>
          investigando nuevas alternativas de innovación en usuarios del mercado
          español
        </p>
      </div>
      <div className={styles.logo8}>
        <Image
          src="/big_companies/notpla.png"
          width={0}
          height={0}
          sizes="10vw"
          style={{ width: "10vw", height: "auto" }}
          alt={"notpla company logo"}
        ></Image>
        <p>
          innovando en las aplicaciones del producto para crear nuevas líneas de
          negocio
        </p>
      </div>
      <div className={styles.logo9}>
        <Image
          src="/big_companies/securitas.png"
          width={0}
          height={0}
          sizes="10vw"
          style={{ width: "7vw", height: "auto" }}
          alt={"securitas company logo"}
        ></Image>
        <p>
          creando un plan de comunicación para clientes para acompañar la
          renovación de la experiencia digital
        </p>
      </div>
      <div className={`${styles.logo2} ${styles.hide}`}>
        <Image
          src="/pymes/capgemini.png"
          width={0}
          height={0}
          sizes="10vw"
          style={{
            width: "10vw",
            height: "auto"
          }}
          alt={"capgemini company logo"}
        ></Image>
        <p>
          consultora estratégica y de innovación en proyectos nacionales e
          internacionales
        </p>
      </div>
      <div className={`${styles.logo4} ${styles.hide}`}>
        <Image
          src="/pymes/frog.png"
          width={0}
          height={0}
          sizes="10vw"
          style={{ width: "7vw", height: "auto"}}
          alt={"frog company logo"}
        ></Image>
        <p>
          diseñadora estratégica, investigadora y diseñadora de servicios en
          proyectos nacionales e internacionales
        </p>
      </div>
      <div className={`${styles.logo6} ${styles.hide}`}>
        <Image
          src="/pymes/garajedeideas.png"
          width={0}
          height={0}
          sizes="10vw"
          style={{
            width: "14vw",
            height: "auto"
          }}
          alt={"garajde de ideas company logo"}
        ></Image>
        <p>
          como strategist y service designer en proyectos con grandes empresas y
          liderazgo de iniciativas de marketing y proyectos internos
        </p>
      </div>
      <div className={`${styles.logo7} ${styles.hide}`}>
        <Image
          src="/universities/upm.png"
          width={0}
          height={0}
          sizes="10vw"
          style={{
            width: "12vw",
            height: "auto"
          }}
          alt={"upm university logo"}
        ></Image>
        <p>
          ofreciendo mentorías de asesoría estratégica a start-ups emergentes
          del ecosistema de esta incubadora
        </p>
      </div>
      <div className={`${styles.logo3} ${styles.hide}`}>
        <Image
          src="/universities/xiji.png"
          width={0}
          height={0}
          sizes="10vw"
          style={{ width: "12vw", height: "auto" }}
          alt={"xiji university logo"}
        ></Image>
        <p>
          impartiendo clases magistrales de estrategia, investigación de diseño
          y modelo de negocio para integrantes de la incubadora china
        </p>
      </div>
    </div>
  );
};

export default Logos;
