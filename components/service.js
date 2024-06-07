import { useIntl } from "react-intl";
import styles from "./service.module.css";

export default function Service({
  title,
  explanation,
  ctaText,
  description,
  bulletPoints,
  onClick,
  sprm,
  vicente,
}) {
  const intl = useIntl();

  return (
    <div className={styles.servicio_div}>
      <div className={styles.servicio_intro}>
        <div>
          <h5 className={styles.servicio_title}>{title}</h5>
          {explanation && (
            <p className={styles.servicio_explanation}>
              <div>
                {sprm && (
                  <p>
                    {intl.formatMessage({ id: "AS_PART_OF" })}{" "}
                    <a href="https://www.supremebeings.love/" target="_blank" style={{pointerEvents: 'none', cursor: 'default', textDecoration: 'none'}}>
                      supreme studio
                    </a>{" "}
                  </p>
                )}
                {vicente && (
                  <p>
                    {intl.formatMessage({ id: "WITH" })}{" "}
                    <a href="https://www.vicentegarcya.com/" target="_blank">
                      Vicente Garcya,
                    </a>{" "}
                  </p>
                )}
              </div>
              {explanation}
            </p>
          )}
        </div>
        <button onClick={() => onClick()}>{ctaText}</button>
      </div>
      <div className={styles.servicio_content}>
        {description && (
          <div className={styles.servicio_description}>{description}</div>
        )}
        {bulletPoints && (
          <div className={styles.servicio_text}>
            {bulletPoints.map((el, index) => {
              return (
                <div key={index} className={styles.servicio_bullet_point}>
                  {el.title}
                  <span>{el.description}</span>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
