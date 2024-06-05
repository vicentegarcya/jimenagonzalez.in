import Head from "next/head";
import Header from "./header";
import styles from "./layout.module.css";
import { useContext, useEffect, useRef, useState } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { isPlayingContext } from "@/context/context";

export default function Layout({ children }) {
  const [isTelon, setIsTelon] = useState(true);
  const {isDesktop} = useContext(isPlayingContext);
  gsap.registerPlugin(ScrollTrigger);
  const headerRef = useRef();
  const mainRef = useRef();
  const telonRef = useRef();
  const telonWrapperRef = useRef();

  useEffect(() => {
    gsap.to(headerRef.current, {
      top: 0,
      ease: "none",
      scrollTrigger: {
        trigger: headerRef.current,
        start: isDesktop ? "bottom bottom" : "bottom 80%",
        end: "bottom top",
        scrub: isDesktop ? 0.05 : true,
      },
    });

    const appearAnimation = gsap.fromTo(
      telonRef.current,
      { y: "100%", display: 'none' },
      { y: "0%", display: 'block' , duration: 1, ease: "power2.inOut" }
    );

    const disappearAnimation = gsap.fromTo(
      telonRef.current,
      { y: "0%" },
      { y: "-100%", duration: 1, ease: "power2.inOut", delay: 1 }
    );

    appearAnimation.eventCallback("onComplete", () => {
      telonWrapperRef.current.style.background = 'transparent';
      disappearAnimation.play();
    });

    setTimeout(() => {
      setIsTelon(false);
    }, 2000);
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
      <main ref={mainRef} className={styles.App_main}>
        {children}
      </main>
      {isTelon && (
        <div ref={telonWrapperRef} className={styles.telonWrapper}>
          <div ref={telonRef} className={styles.telon}></div>
        </div>
      )}
    </div>
  );
}
