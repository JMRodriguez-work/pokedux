import React from "react";
import useColorMode from "../hooks/useColorMode";

const Navbar = () => {
  const [colorMode, setColorMode] = useColorMode();

  const handleColorMode = () => {
    setColorMode(colorMode === "light" ? "dark" : "light");
  };
  return (
    <div className="flex justify-between overflow-hidden bg-stone-200 dark:bg-gray-800 dark:text-stone-200 w-screen px-10 w-ful py-2 h-[60px] items-center fixed top-0 shadow-md">
      <h1 className="font-bold text-2xl text-purple-600">Pokedux</h1>
      <button
        onClick={handleColorMode}
        className="bg-gray-500  text-white dark:text-black capitalize rounded-full px-3 py-2 hover:opacity-70 ease duration-100"
      >
        {colorMode === "dark" ? "☀" : "🌙"}
      </button>
    </div>
  );
};

export { Navbar };
