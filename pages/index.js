/* eslint-disable react/jsx-no-comment-textnodes */
import styles from "@/styles/Home.module.scss";
import Layout from "@/components/layout";
import { useContext, useEffect, useState } from "react";
import { isPlayingContext } from "../context/context";
import Link from "next/link";

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
          <h1 className={styles.jimena}>GONZALEZ<br></br>JIMENA</h1>
          <section className={styles.hero}>
            <div className={styles.hero_top}>
              <div className={styles.links}>
                <Link href={"https://www.linkedin.com/in/jimena-gonzalez-collados/"}>LINKEDIN →</Link>
              </div>
            </div>
            <div className={styles.hero_bottom}></div>
          </section>
        </main>
      </Layout>
    );
}
