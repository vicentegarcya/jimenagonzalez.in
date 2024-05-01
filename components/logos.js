import Image from "next/image";
import styles from "./logos.module.css";
import { useEffect, useState } from "react";
import { gsap } from "gsap";

const descriptions = [];

const Logos = () => {
  const [currentImages, setCurrentImages] = useState([]);
  const [description, setDescription] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      /* showImages(); */
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.logos}>
      <div className={styles.logo1}>
        <Image
          src="/big_companies/BBVA.png"
          width={0}
          height={0}
          sizes="10vw"
          style={{ width: "7vw", height: "auto" }}
          alt={"BBVA company logo"}
          onClick={() => setDescription(1)}
        ></Image>
        <p
          style={{ display: description === 1 ? "block" : "none" }}
          onClick={() => setDescription(0)}
        >
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
          onClick={() => setDescription(2)}
        ></Image>
        <p
          style={{ display: description === 2 ? "block" : "none" }}
          onClick={() => setDescription(0)}
        >
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
          onClick={() => setDescription(3)}
        ></Image>
        <p
          style={{ display: description === 3 ? "block" : "none" }}
          onClick={() => setDescription(0)}
        >
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
          onClick={() => setDescription(4)}
        ></Image>
        <p
          style={{ display: description === 4 ? "block" : "none" }}
          onClick={() => setDescription(0)}
        >
          desarrollando el cambio de organigrama estratégico de la compañía
        </p>
      </div>
      <div className={styles.logo5}>
        <Image
          src="/big_companies/mapfre.png"
          width={0}
          height={0}
          sizes="10vw"
          style={{ width: "10vw", height: "auto" }}
          alt={"mapfre company logo"}
          onClick={() => setDescription(5)}
        ></Image>
        <p
          style={{ display: description === 5 ? "block" : "none" }}
          onClick={() => setDescription(0)}
        >
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
          onClick={() => setDescription(6)}
        ></Image>
        <p
          style={{ display: description === 6 ? "block" : "none" }}
          onClick={() => setDescription(0)}
        >
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
          onClick={() => setDescription(7)}
        ></Image>
        <p
          style={{ display: description === 7 ? "block" : "none" }}
          onClick={() => setDescription(0)}
        >
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
          onClick={() => setDescription(8)}
        ></Image>
        <p
          style={{ display: description === 8 ? "block" : "none" }}
          onClick={() => setDescription(0)}
        >
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
          onClick={() => setDescription(9)}
        ></Image>
        <p
          style={{ display: description === 9 ? "block" : "none" }}
          onClick={() => setDescription(0)}
        >
          creando un plan de comunicación para clientes para acompañar la
          renovación de la experiencia digital
        </p>
      </div>
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
  );
};

export default Logos;
