import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <div className={styles.top}>
          <div>
            <p>Divergence</p>
            <p>
              01. Divergencia como exploración auténtica y disruptiva de la
              diferencia con respecto a la norma.
            </p>
            <p>04. Sensibilidad como capacidad creativa suprema.</p>
          </div>
          <div>
            <p>Alignment</p>
            <p>
              02. Estrategia como acción inspirada. Alineando visión y esencia
              con acción real.
            </p>
            <p style={{ marginTop: "36px" }}>
              05. Creación como manifestación física de una visión de propósito.
            </p>
          </div>
          <div>
            <p>Trascendence</p>
            <p>
              03. Sinergia creativa como forma de trabajo. 1+1=oo viviendo la
              emergencia en la colaboración.
            </p>
            <p>
              06. Escucha interna y externa como camino de trascendencia
              creativa.
            </p>
          </div>
        </div>
        <div className={styles.middle}>
          <p>
            Si quieres saber más sobre mi vida laboral, visita{" "}
            <a
              href="https://www.linkedin.com/in/jimena-gonzalez-collados/"
              target="_blank"
            >
              mi perfil de Linkedin.
            </a>{" "}
            Escucha aquí{" "}
            <a
              href="https://open.spotify.com/playlist/6nDnwvDJOvY1VebJWbVsd7?si=jF_EYQm5Qy6g8xk_RXPaeg&utm_source=copy-link&utm_medium=copy-link&nd=1&_branch_match_id=1182632066913753218&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXLy7IL8lMq9TLyczL1g82Ciz29C0rN3ZOAgDcFrbjIAAAAA%3D%3D"
              target="_blank"
            >
              mi playlist de Spotify
            </a>{" "}
            para entrar en flow creativo. Para cualquier otra cosa,{" "}
            <a href="mailto: hi@jimenagonzalez.in">
              ¡envíame un correo a hi@jimenagonzalez.in!
            </a>
            <p style={{ marginTop: "25px" }}>
              web x{" "}
              <a href="https://www.vicentegarcya.com/" target="_blank">
                Vicente Garcya
              </a>
            </p>
          </p>
        </div>
        <div className={styles.bottom}>
          <p><span style={{marginLeft: '32px'}}>{" "}</span>2024, JIMENA GONZALEZ</p>
          <p><span style={{marginLeft: '32px'}}>{" "}</span>2024, JIMENA GONZALEZ</p>
        </div>
        <div className={styles.copyright}>
          © 2024 Jimena Gonzalez, Todos los derechos
          reservados<br></br>Madrid, Spain
        </div>
      </div>
    </footer>
  );
}
