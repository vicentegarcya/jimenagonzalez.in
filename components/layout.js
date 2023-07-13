import Head from "next/head";
import Header from "./header";
import Footer from "./footer";
import styles from "./layout.module.css";
import { useEffect, useState } from "react";
import { isPlayingContext } from "../context/context";
import { useContext } from "react";

export default function Layout({ children }) {
  const [page, setPage] = useState("");

  useEffect(() => {
    setPage(window.location.pathname);
  }, [setPage]);

  return (
    <div className={styles.App}>
      <Head>
        <title>jimenagonzalez.in</title>
        <meta name="description" content="Your go-to app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no"/>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Header currentPage={page} />
      <main className={styles.App_main}>{children}</main>
      <Footer currentPage={page} />
    </div>
  );
}
