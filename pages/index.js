import styles from "@/styles/Home.module.scss";
import Layout from "@/components/layout";
import { useContext, useEffect, useRef, useState } from "react";
import { appContext } from "../context/context";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import LoadingPage from "@/components/loadingPage";
import Footer from "@/components/footer";
import { useIntl } from "react-intl";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const { isDesktop } = useContext(appContext);
  gsap.registerPlugin(ScrollTrigger);
  const intl = useIntl();

  const mainRef = useRef();
  const gonzalezRef = useRef();
  const jimenaRef = useRef();
  const footerRef = useRef();

  useEffect(() => {
    setTimeout(() => setIsLoading(false), isDesktop ? 4500 : 4300);
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
        </div>
        <div className={styles.footer_home} ref={footerRef}>
          <Footer />
        </div>
      </Layout>
    );
}
