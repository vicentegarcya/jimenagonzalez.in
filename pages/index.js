/* eslint-disable react/jsx-no-comment-textnodes */
import styles from "@/styles/Home.module.scss";
import Layout from "@/components/layout";
import { useContext, useEffect, useState } from "react";
import { isPlayingContext } from "../context/context";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  const { isDesktop } = useContext(isPlayingContext);

  function scrollTo(section) {
    section.scrollIntoView({ behavior: "smooth" });
  }

  useEffect(() => {
    if (isDesktop) {
      setTimeout(() => setIsLoading(false), 2500);
    } else {
      setIsLoading(false);
    }
  }, [isLoading, isDesktop]);

  if (!isLoading)
    return (
      <Layout>
        <main className={styles.main}>
          <h1 className={`${styles.jimena} ${styles.jimena_surname}`}>GONZALEZ</h1>
          <h1 className={`${styles.jimena} ${styles.jimena_name}`}>JIMENA</h1>
          <section className={styles.hero}>
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
              src="/jimena_business.png"
              width={0}
              height={0}
              sizes="50vw"
              style={{ width: "54vw", height: "auto" }}
              alt={"Service Designer Jimena picture of herself"}
            ></Image>
          </section>
          <section className={styles.metodologia}>
          </section>
        </main>
      </Layout>
    );
}
