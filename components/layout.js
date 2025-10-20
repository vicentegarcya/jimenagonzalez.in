import Head from "next/head";
import Header from "./header";
import styles from "./layout.module.css";
import { useContext, useEffect, useRef, useState } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function Layout({ children }) {
  gsap.registerPlugin(ScrollTrigger);
  const headerRef = useRef();
  const mainRef = useRef();

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
      <main ref={mainRef} className={styles.App_main}>
        {children}
      </main>
    </div>
  );
}
