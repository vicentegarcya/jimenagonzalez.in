import Head from "next/head";
import Header from "./header";
import Footer from "./footer";
import styles from "./layout.module.css";

export default function Layout({ children }) {
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
      <Header />
      <main className={styles.App_main}>{children}</main>
      <Footer />
    </div>
  );
}
