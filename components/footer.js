import { useIntl } from "react-intl";
import styles from "./footer.module.css";

export default function Footer() {
  const intl = useIntl();

  return (
    <footer className={styles.footer}>
      <div className={styles.copyright}>
        © 2024 Jimena Gonzalez, {intl.formatMessage({
            id: "ALL_RIGHTS_RESERVED",
          })}<br></br>Madrid,
        Spain
      </div>
    </footer>
  );
}
