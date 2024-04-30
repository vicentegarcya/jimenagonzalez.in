import styles from "./footer.module.css";
import psicodelico from "../public/PSICODELICO.jpeg";
import aura from "../public/GRADIENTE_AURA.jpeg";
import { isPlayingContext } from "@/context/context";
import { useContext } from "react";

export default function Footer({ currentPage }) {
  const { isDesktop } = useContext(isPlayingContext);

  return (
    <footer>
      <div>
        <div className={styles.top}>
          <p>
            Si quieres saber más sobre mi vida laboral, visita{" "}
            <a
              href="https://www.linkedin.com/in/jimena-gonzalez-collados/"
              target="_blank"
            >
              mi perfil de Linkedin
            </a>
          </p>
          <p>
            {" "}
            Escucha aquí{" "}
            <a
              href="https://open.spotify.com/playlist/6nDnwvDJOvY1VebJWbVsd7?si=jF_EYQm5Qy6g8xk_RXPaeg&utm_source=copy-link&utm_medium=copy-link&nd=1&_branch_match_id=1182632066913753218&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXLy7IL8lMq9TLyczL1g82Ciz29C0rN3ZOAgDcFrbjIAAAAA%3D%3D"
              target="_blank"
            >
              mi playlist de Spotify
            </a>{" "}
            para entrar en flow creativo.
          </p>
          <p>
            Para cualquier otra cosa,{" "}
            <a href="mailto: hi@jimenagonzalez.in">
              ¡envíame un correo a hi@jimenagonzalez.in!
            </a>
          </p>
        </div>
        <div className={styles.bottom}>
          <p style={{ marginBottom: "12px" }}>
            web x{" "}
            <a href="https://www.vicentegarcya.com/" target="_blank">
              Vicente Garcya
            </a>
          </p>
          <p>x Jimena Gonzalez</p>
          <p>© 2024, Jimena Gonzalez, Todos los derechos reservados</p>
        </div>
      </div>
    </footer>
  );
}
