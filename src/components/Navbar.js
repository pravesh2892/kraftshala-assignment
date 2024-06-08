import React from "react";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import DarkModeToggle from "./DarkModeToggle";

const Navbar = ({ onSearch, darkMode, onToggle }) => {
  return (
    <nav className="navbar">
      <Logo />
      <SearchBar onSearch={onSearch} />
      <DarkModeToggle darkMode={darkMode} onToggle={onToggle} />
    </nav>
  );
};

export default Navbar;
