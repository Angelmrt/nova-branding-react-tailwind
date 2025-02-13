import React from "react";
import Navbar from "./navBarComponent";
import SearchBar from "./searchBarComponent";

const Header: React.FC = () => {
  return (
    <header className="bg-black py-4 px-6 flex items-center justify-between">
    
      <div className="flex-shrink-0">
        <img src="/logo.png" alt="Logo" className="w-12 h-12 rounded-full" />
      </div>

      
      <div className="flex-grow max-w-md mx-4">
        <SearchBar />
      </div>

     
      <div className="flex-shrink-0">
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
