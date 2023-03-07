import React from "react";

const Searcher = () => {
  return (
    <div className="flex justify-center  mt-[60px] pt-20">
      <input
        className="dark:bg-red w-80 p-2 rounded-lg outline-none placeholder:text-gray-600 border-violet-600 border-solid border-2"
        placeholder="Search pokemon..."
        type="search"
      />
    </div>
  );
};

export { Searcher };
