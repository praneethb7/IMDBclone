import React from "react";
import logo from "../assets/finalLogo.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex items-center justify-start bg-[#111827] text-white px-6 py-3 space-x-6">

      <div className="flex items-center space-x-3">
        <a href="./"><img className="w-[40px] hover:scale-130 transition-transform duration-300" src={logo}></img></a>
      </div>


      <div className="flex space-x-6">
        <Link to="/mv" className="text-sky-100 bg-transparent hover:bg-blue-900 p-2 transition duration-500 rounded">Movies</Link>
        <Link to="/wL" className="text-sky-100 bg-transparent hover:bg-blue-900 p-2 transition duration-500 rounded">Watch List</Link>
        <Link to="/recc" className="text-sky-100 hbg-transparent hover:bg-blue-900 p-2 transition duration-500 rounded">Movie Recommendations AI</Link>
      </div>
    </nav>
  );
}

export default Navbar;
