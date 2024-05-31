import "@/styles/globals.css";
import Context from "../context/context";
import { IntlProvider } from "react-intl";
import { useLocale } from "@/hooks/useLocale";

export default function App({ Component, pageProps }) {
  const { locale, messages } = useLocale();

  return (
    <>
      <Context>
        <IntlProvider locale={locale} messages={messages[locale]}>
          <Component {...pageProps} />
        </IntlProvider>
      </Context>
    </>
  );
}
