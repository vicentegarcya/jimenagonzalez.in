import Head from "next/head";
import Header from "./header";
import Footer from "./footer";
import styles from "./layout.module.css";
import { useEffect, useRef } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function Layout({ children }) {
  gsap.registerPlugin(ScrollTrigger);
  const headerRef = useRef();
  const mainRef = useRef();

  useEffect(() => {
    gsap.to(headerRef.current, {
      top: 0,
      ease: "none",
      scrollTrigger: {
        trigger: headerRef.current,
        start: "bottom bottom",
        end: "bottom top",
        scrub: 0.05,
      }
    });
  }, []);

  return (
    <div className={styles.App}>
      <Head>
        <title>jimenagonzalez.in</title>
        <meta name="description" content="Your go-to app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, user-scalable=no"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      </Head>
      <Header ref={headerRef} />
      <main ref={mainRef} className={styles.App_main}>{children}</main>
      <Footer />
    </div>
  );
}
