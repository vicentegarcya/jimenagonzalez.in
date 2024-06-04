import { forwardRef, useContext } from "react";
import styles from "./header.module.css";
import Link from "next/link";
import { useIntl } from "react-intl";
import { isPlayingContext } from "@/context/context";

const Header = forwardRef(function Header(props, headerRef) {
  const intl = useIntl();
  const { isDesktop } = useContext(isPlayingContext);

  return (
    <div ref={headerRef} className={styles.header}>
      <Link href={"/#main"} scroll={false}>
        JIMENA GONZALEZ
      </Link>
      {isDesktop ? (
        <div className={styles.header_links}>
          <h5>
            <Link href={"/#metodologia"} scroll={false}>
              {intl.formatMessage({ id: "METHOD" })}
            </Link>
          </h5>
          <h5>
            <Link href={"/#experiencia"} scroll={false}>
              {intl.formatMessage({ id: "PROJECTS" })}
            </Link>
          </h5>
          <h5>
            <Link href={"/#servicios"} scroll={false}>
              {intl.formatMessage({ id: "SERVICES" })}
            </Link>
          </h5>
        </div>
      ) : undefined}
      <button onClick={() => window.scrollTo(0, document.body.scrollHeight)}>
        {intl.formatMessage({ id: "CONTACT" })}
      </button>
    </div>
  );
});

export default Header;
