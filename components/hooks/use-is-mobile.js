import { useState, useEffect } from "react";

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth <= 900) {
      setIsMobile(true);
    } else if (window.innerWidth > 900) {
      setIsMobile(false);
    }

    const changeMobileView = () => {
      if (window.innerWidth <= 900) {
        setIsMobile(true);
      } else if (window.innerWidth > 900) {
        setIsMobile(false);
      }
    };

    window.addEventListener("resize", changeMobileView);

    return () => {
      window.removeEventListener("resize", changeMobileView);
    };
  }, []);

  return { isMobile };
};

export default useIsMobile;
