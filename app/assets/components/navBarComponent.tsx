import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-black py-4">
      <ul className="flex justify-center space-x-8 text-white font-bold uppercase tracking-wide">
        <li className="hover:text-gray-400 transition-colors cursor-pointer">Home</li>
        <li className="hover:text-gray-400 transition-colors cursor-pointer">Nosotros</li>
        <li className="hover:text-gray-400 transition-colors cursor-pointer">Servicios</li>
        <li className="hover:text-gray-400 transition-colors cursor-pointer">Contacto</li>
      </ul>
    </nav>
  );
};

export default Navbar;
