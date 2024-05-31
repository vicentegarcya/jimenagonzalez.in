import { useRouter } from "next/router";
import { useCallback } from "react";
import en from "@/../lang/en.json";
import es from "@/../lang/es.json";

// a Record is an object wich we can pass union types to it as key.
const messages = {
  en,
  es,
};

export const useLocale = () => {
  const router = useRouter();

  const switchLocale = useCallback(
    (locale) => {
      // if we already have /en and we choose english for example we just return!
      if (locale === router.locale) {
        return;
      }

      // This is how we change locale in NextJS.
      const path = router.asPath;
      return router.push(path, path, { locale });
    },
    [router]
  );
  return { locale: router.locale, switchLocale, messages: messages };
};