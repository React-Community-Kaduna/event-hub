import { useEffect } from "react";
import { useLocation } from "react-router-dom";
export function ScrollToTop() {
  const { pathname } = useLocation();
   //effect to makes component view start from the top of the page
   useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}
