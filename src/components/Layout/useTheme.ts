import { useLayoutEffect } from "react";

const useTheme = (theme: any) => {
  useLayoutEffect(() => {
    for (const key in theme) {
      document.documentElement.style.setProperty(`--${key}`, theme[key]);
    }
  }, [theme]);
};

export default useTheme;
