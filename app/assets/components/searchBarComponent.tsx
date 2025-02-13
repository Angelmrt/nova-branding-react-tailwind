import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"; 

const SearchBar: React.FC = () => {
  return (
    <div className="relative w-full max-w-md my-5">
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
      <input
        type="text"
        placeholder="Search"
        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default SearchBar;
