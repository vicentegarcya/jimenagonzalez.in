import Layout from "@/components/layout";
import styles from "@/styles/Me.module.css";
import Image from 'next/image';

export default function Me() {
  return (
    <Layout>
      <div className={styles.me}>
        <section className={styles.explora_con_bso}>
          <div className={styles.div1}>
            <p>Explora con BSO</p>
            <Image
              src={"/play_btn_black.png"}
              width={20}
              height={20}
              alt="play button"
            />
            <div className={styles.ondas}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <p>x Cris Víboras //</p>
          </div>
          <div className={styles.div2}>
            <p>Explora con BSO</p>
            <Image
              src={"/play_btn_black.png"}
              width={20}
              height={20}
              alt="play button"
            />
            <div className={styles.ondas}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <p>x Cris Víboras //</p>
          </div>
        </section>
      </div>
    </Layout>
  );
}
