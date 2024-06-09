import React from "react";
import { ReactComponent as Sun } from "../assets/Sun.svg";
import { ReactComponent as Moon } from "../assets/Moon.svg";

const DarkModeToggle = ({ darkMode, onToggle }) => {
  return (
    <div className="dark_mode">
      <input
        className="dark_mode_input"
        type="checkbox"
        id="darkmode-toggle"
        checked={darkMode}
        onChange={onToggle}
      />
      <label className="dark_mode_label" htmlFor="darkmode-toggle">
        {darkMode ? <Sun /> : <Moon />}
      </label>
    </div>
  );
};

export default DarkModeToggle;
