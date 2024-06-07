import { useIntl } from "react-intl";
import styles from "./footer.module.css";

export default function Footer() {
  const intl = useIntl();

  return (
    <footer className={styles.footer}>
      <div>
        <div className={styles.top}>
          <div>
            <p>Divergence</p>
            <p>
              <span>01.</span>{" "}
              {intl.formatMessage({
                id: "DIVERGENCE_AS_AUTHENTIC_EXPLORATION_OF_DISRUPTIVE",
              })}
            </p>
            <p>
              <span>04.</span>{" "}
              {intl.formatMessage({
                id: "SENSITIVITY_AS_SUPREME_CREATIVE_GIFT",
              })}
            </p>
          </div>
          <div>
            <p>Alignment</p>
            <p>
              <span>02.</span>{" "}
              {intl.formatMessage({
                id: "STRATEGY_AS_INSPIRED_ACTION",
              })}
            </p>
            <p>
              <span>05.</span>{" "}
              {intl.formatMessage({
                id: "CREATIVITY_AS_PHYSICAL_MANIFESTATION",
              })}
            </p>
          </div>
          <div>
            <p>Transcendence</p>
            <p>
              <span>03.</span>{" "}
              {intl.formatMessage({
                id: "CREATIVE_SYNERGY_AS_WAY_OF_WORKING",
              })}
            </p>
            <p>
              <span>06.</span>{" "}
              {intl.formatMessage({
                id: "INNER_AND_OUTER_LISTENING_AS_PATH_TO_CREATIVE_TRASCENDENCE",
              })}
            </p>
          </div>
        </div>
        <div className={styles.middle}>
          <p>
            {intl.formatMessage({
              id: "FOR_MORE_INFO_ABOUT_MY_BACKGROUND",
            })}{" "}
            <a
              href="https://www.linkedin.com/in/jimena-gonzalez-collados/"
              target="_blank"
            >
              {intl.formatMessage({
              id: "LINKEDIN_PROFILE",
            })}
            </a>{". "}
            {intl.formatMessage({
              id: "LISTEN_TO_MY",
            })}{" "}
            <a
              href="https://open.spotify.com/playlist/6nDnwvDJOvY1VebJWbVsd7?si=jF_EYQm5Qy6g8xk_RXPaeg&utm_source=copy-link&utm_medium=copy-link&nd=1&_branch_match_id=1182632066913753218&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXLy7IL8lMq9TLyczL1g82Ciz29C0rN3ZOAgDcFrbjIAAAAA%3D%3D"
              target="_blank"
            >
              {intl.formatMessage({
              id: "SPOTIFY_PLAYLIST",
            })}{" "}
            </a>{" "}
            {intl.formatMessage({
              id: "ARE_YOU_INSPIRED",
            })}{" "}
            <a href="mailto: hi@jimenagonzalez.in">{intl.formatMessage({
              id: "SEND_ME_AN_EMAIL",
            })}</a>
            <p style={{ marginTop: "6px" }}>
              web x{" "}
              <a href="https://www.vicentegarcya.com/" target="_blank">
                Vicente Garcya
              </a>
            </p>
          </p>
        </div>
        <div className={styles.bottom}>
          <p>
            <span style={{ marginLeft: "32px" }}> </span>2024, JIMENA GONZALEZ
          </p>
          <p>
            <span style={{ marginLeft: "32px" }}> </span>2024, JIMENA GONZALEZ
          </p>
        </div>
        <div className={styles.copyright}>
          © 2024 Jimena Gonzalez, {intl.formatMessage({
              id: "ALL_RIGHTS_RESERVED",
            })}<br></br>Madrid,
          Spain
        </div>
      </div>
    </footer>
  );
}
