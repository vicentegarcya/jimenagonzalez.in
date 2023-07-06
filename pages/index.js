import styles from "@/styles/Home.module.css";
import Layout from "@/components/layout";
import Service from "@/components/service";
import PropuestaForm from "@/components/propuestaForm";

export default function Home() {
  return (
    <Layout>
      <main className={styles.main}>
        <section className={styles.keywords}>
          <p className={styles.text_1}>
            INSPIRACIÓN // CREATIVIDAD // ALMA // EVOLUCIÓN // ESTRATEGIA //
            EXPANSIÓN //
          </p>
          <p className={styles.text_2}>
            INSPIRACIÓN // CREATIVIDAD // ALMA // EVOLUCIÓN // ESTRATEGIA //
            EXPANSIÓN //
          </p>
        </section>
        <section className={styles.inspirate}>
          <h3>INSPÍRATE</h3>
          <p>
            Inspiración (<span>def.</span>): Recibir guía divina, una
            iluminación creativa.
          </p>
        </section>
        <section className={styles.servicios}>
          <div className={styles.servicio}>
            <h3>SOY ARTISTA, CREATIV@ O DISEÑADORA</h3>
            <div className={styles.servicios_grupo}>
              <Service
                title="Descubre tus dones y tu voz creativa"
                description="Comprende tu huella creativa: misión creativa, energías principales, talentos, retos evolutivos de tu camino creativo, expresión creativa principal."
                price="77,00 €"
                hashtags="#astrologia #creatividad #tarot"
              />
              <Service
                title="Intenciona tu siguiente proyecto"
                description="Descubre la identidad de tu próximo proyecto: su naturaleza, su propósito, los aprendizajes que trae, los retos y los dones que te pide expresar. "
                price="55,00 €"
                hashtags="#creatividad #tarot"
              />
              <Service
                title="Supera bloqueos creativos"
                description="Comprende el origen de tu bloqueo creativo, los aprendizajes a integrar y las acciones para liberarlo."
                price="55,00 €"
                hashtags="#creatividad #tarot #registrosakasicos"
              />
              <Service
                title="Manifiesta (diseña tu estrategia)"
                description="Conecta con tu auténtica visión, intenciona tu expansión y diseña un plan guiado."
                price="111,00 €"
                hashtags="#estrategia #business #tarot"
              />
            </div>
          </div>
          <div className={styles.servicio}>
            <h3>SOY EMPRENDEDOR/A</h3>
            <div className={styles.servicios_grupo}>
              <Service
                title="Descubre tu misión y dones"
                description="Comprende tu huella creativa: misión, dones y talentos a expresar, retos evolutivos y naturaleza de los proyectos alineados."
                price="77,00 €"
                hashtags="#astrología #emprendimiento #tarot #creatividad"
              />
              <Service
                title="Conecta con el alma de tu negocio"
                description="Descubre la identidad de tu negocio: alma y naturaleza, misión individual y colectiva, propósito, tu rol en él, los dones y talentos que te pide expresar y los aprendizajes que trae para ti."
                price="55,00 €"
                hashtags="#estrategia #tarot #astrología"
              />
              <Service
                title="Supera bloqueos y dificultades"
                description="Comprende la naturaleza de tus bloqueos, los aprendizajes que traen y las acciones para liberarlos."
                price="55,00 €"
                hashtags="#estrategia #tarot "
              />
              <Service
                title="Manifiesta (diseña tu estrategia)"
                description="Conecta con tu auténtica visión, intenciona tu expansión y diseña un plan guiado."
                price="111,00 €"
                hashtags="#estrategia #tarot"
              />
            </div>
          </div>
          <div className={styles.servicio}>
            <h3>ESTOY EN MI CAMINO DE EVOLUCIÓN PERSONAL Y/O ESPIRITUAL</h3>
            <div className={styles.servicios_grupo}>
              <Service
                title="Descubre tu misión, dones y retos vitales"
                description="Comprende tu huella evolutiva: misión, dones y talentos a expresar, retos evolutivos y de sanación de tu alma."
                price="66,00 €"
                hashtags="#astrología #tarot"
              />
              <Service
                title="Comprende el sentido de tu reto actual"
                description="Descubre la perspectiva evolutiva y espiritual de tu dificultad actual (pareja, salud, trabajo, sanación…) y conecta con su propósito, aprendizajes y acciones a tomar."
                price="55,00 €"
                hashtags="#tarot #espiritualidad"
              />
              <Service
                title="Desvela el propósito de esta etapa vital"
                description="Comprende la energía de esta etapa de tu desarrollo, sus retos evolutivos y aprendizajes a integrar, las áreas de tu vida que son protagonistas y cómo hacerle frente de la mejor manera."
                price="77,00 €"
                hashtags="#astrologia #tarot"
              />
            </div>
          </div>
          <div className={styles.servicio}>
            <h3>HAZME UNA PROPUESTA</h3>
            <PropuestaForm />
          </div>
        </section>
      </main>
    </Layout>
  );
}
