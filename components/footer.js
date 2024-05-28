import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <div className={styles.top}></div>
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
          <p>-© 2024, JIMENA GONZALEZ</p>
          <p>-© 2024, JIMENA GONZALEZ</p>
        </div>
      </div>
    </footer>
  );
}
