import { forwardRef, useContext } from "react";
import styles from "./header.module.css";
import { useIntl } from "react-intl";
import { appContext } from "@/context/context";

const Header = forwardRef(function Header(props, headerRef) {
  const intl = useIntl();

  return (
    <div ref={headerRef} className={styles.header}>
      Jimena González
    </div>
  );
});

export default Header;
