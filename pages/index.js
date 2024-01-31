/* eslint-disable react/jsx-no-comment-textnodes */
import styles from "@/styles/Home.module.scss";
import Layout from "@/components/layout";
import { useContext, useEffect, useState } from "react";
import { isPlayingContext } from "../context/context";

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
          <section className={styles.hero}>

          </section>
        </main>
      </Layout>
    );
}
