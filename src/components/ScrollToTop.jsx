import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Agar URL mein # (hash) nahi hai, toh top par scroll karo
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      // Agar hash hai (jaise #Phd), toh us element tak scroll hone do
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [pathname, hash]); // Jab bhi path ya hash badle, ye chale

  return null;
};

export default ScrollToTop;
