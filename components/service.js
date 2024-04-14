import { Link } from "react-router-dom";
import styles from "./service.module.css";

export default function Service({
  title,
  link,
  explanation,
  ctaText,
  descriptions,
  onClick,
}) {
  return (
    <div className={styles.servicio_div}>
      <div className={styles.servicio_intro}>
        <div>
          <h5 className={styles.servicio_title}>✺ {title}</h5>
          {explanation && <p>{explanation}</p>}
          {link && (
            <a href={link[0].url} target="_blank">
              {link[0].text}
            </a>
          )}
        </div>
        <button onClick={() => onClick()}>{ctaText}</button>
      </div>
      <div className={styles.servicio_content}>
        <div className={styles.servicio_text}>
          {descriptions.map((description, index) => {
            return (
              <div key={index} className={styles.servicio_description}>
                {description.title && (
                  <div className={styles.description_title}>
                    <p>
                      {description.title && <span>{description.title}</span>}
                    </p>
                  </div>
                )}
                <div className={styles.description_text}>
                  <p>{description.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
