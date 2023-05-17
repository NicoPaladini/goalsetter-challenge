import * as React from "react";
import logo from "../images/logo.png";
import logoColor from "../images/logoColor.png";

interface HeaderProps {
  isOnbording?: boolean;
}

const Header: React.FC<HeaderProps> = ({ isOnbording }) => {
  return (
    <header
      className={`flex justify-center px-4 py-5 ${
        isOnbording ? "bg-goalsetter-blue" : "bg-white"
      }`}
    >
      <img src={isOnbording ? logo : logoColor} className="" alt="logo" />
    </header>
  );
};

export default Header;
