import { createContext, useState, useEffect } from "react";

export const appContext = createContext(null);

function Context({ children }) {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    setIsDesktop(typeof window !== "undefined" && window.innerWidth > 1024);

    function handleResize() {
      setIsDesktop(window.innerWidth > 1024);
    }

    if (typeof window !== 'undefined') {
      handleResize();
    }

    window.addEventListener('resize', handleResize);
  }, [isDesktop]);

  return (
    <appContext.Provider value={{ isDesktop }}>
      {children}
    </appContext.Provider>
  );
}

export default Context;
