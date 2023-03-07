import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

const useColorMode = () => {
  const [colorMode, setColorMode] = useLocalStorage("color-mode", "light");

  useEffect(() => {
    const className = "dark";
    const htmlClasses = window.document.documentElement.classList;

    colorMode === "dark"
      ? htmlClasses.add(className)
      : htmlClasses.remove(className);
  }, [colorMode]);

  return [colorMode, setColorMode];
};

export default useColorMode;
