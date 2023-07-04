import Head from "next/head";
import Header from "./header";
import Footer from "./footer";
import styles from "./layout.module.css";

export default function Layout({ children }) {
  return (
    <div className={styles.App}>
      <Head>
        <title>Jimeneat</title>
        <meta name="description" content="Your go-to app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <main className={styles.App_main}>{children}</main>
      <Footer />
    </div>
  );
}

styles["projects-pd-subdetail"] + " " + styles["projects-pd-text"];
