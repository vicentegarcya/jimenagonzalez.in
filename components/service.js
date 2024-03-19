import { Link } from "react-router-dom";
import styles from "./service.module.css";

export default function Service({ title, link, explanation, ctaText, descriptions }) {
  return (
    <div className={styles.servicio_div}>
      <div className={styles.servicio_intro}>
        <div>
          <h5 className={styles.servicio_title}>✺ {title}</h5>
          {explanation && <p>{explanation}</p>}
          {link && <a href={link[0].url} target="_blank">{link[0].text}</a>}
        </div>
        <button>{ctaText}</button>
      </div>
      <div className={styles.servicio_content}>
        <div className={styles.servicio_text}>
          {descriptions.map((description, index) => {
            return (
              <p key={index} className={styles.servicio_description}>
                {description.title && <span>{description.title}</span>}
                {description.text}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
}
