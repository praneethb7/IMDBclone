import React from "react";
import logo from "../assets/finalLogo.png";

function Navbar(){
    return(
        <nav className="flex items-center justify-start bg-[#111827] text-white px-6 py-3 space-x-6">
        
        <div className="flex items-center space-x-3">
        <a href="./"><img className="w-[40px] hover:"src={logo}></img></a>
        </div>

       
        <div className="flex space-x-6">
          <a href="#" className="text-sky-100 hover:text-white transition">Movies</a>
          <a href="#" className="text-sky-100 hover:text-white transition">Watch List</a>
          <a href="#" className="text-sky-100 hover:text-white transition">Movie Recommendations AI</a>
        </div>
      </nav>
    );
}

export default Navbar;
