import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>web x <a href='https://www.vicentegarcya.com/' target="_blank">Vicente Garcya</a></p>
      <p>BSO x Cris Víboras</p>
      <p>Si quieres recibir inspiración cada mes, suscríbete a <a href='https://mailchi.mp/cad3bc2e7c34/despertar-creativo' target="_blank">Despertar Creativo</a>. Para ver mis publicaciones en Instagram, sígueme en <a href='https://www.instagram.com/jimenagonzalez.in/' target="_blank">@jimenagonzalez.in</a>. Puedes echar un ojo a mi futuro oráculo <a href='https://www.labellezadelaoscuridad.com/' target="_blank">La belleza de la oscuridad</a>. Si quieres cotillear mi vida laboral, visita <a href='https://www.linkedin.com/in/jimena-gonzalez-collados/' target="_blank">mi perfil de Linkedin</a>. Para cualquier otra cosa, <a href="mailto:jimenagonzalez.in@gmail.com">¡envíame un correo!</a></p>
      <p>x Jimena Gonzalez</p>
      <p>© 2023, Jimena Gonzalez, Todos los derechos reservados</p>
    </footer>
  );
}
