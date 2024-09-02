import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import MenuIcon from "@mui/icons-material/Menu";
import { Close } from "@mui/icons-material";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  /*   function showDropdown() { }

  function hideDropdown() { } */

  return (
    <nav className="bg-white shadow-lg text-secondary">
      <div className=" flex items-center justify-between py-2 container">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-12 w-auto" />
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link
              to="/"
              className="hover:text-primary hover:bg-secondary rounded-md px-2.5 py-1 transition ease-in duration-400"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-primary hover:bg-secondary rounded-md px-2.5 py-1 transition ease-in duration-400"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/menu"
              className=" hover:text-primary hover:bg-secondary rounded-md px-2.5 py-1 transition ease-in duration-400"
            >
              Menu
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-primary hover:bg-secondary rounded-md px-2.5 py-1 transition ease-in duration-400"
            >
              Reservation
            </Link>
          </li>
        </ul>

        {/* Buttons */}
        <div className="flex md:space-x-5">
          <button className="hover:text-primary hover:bg-secondary rounded-md p-1 px-2.5 py-1 transition ease-in duration-400">
            Login
          </button>
          <button className="hover:text-primary hover:bg-secondary rounded-md px-2.5 py-1 transition ease-in duration-400">
            <LocalMallIcon />
          </button>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="hover:text-primary hover:bg-secondary rounded-md px-2.5 py-1 transition ease-in duration-400"
          >
            <MenuIcon />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-white shadow-lg transition-transform transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="flex justify-between items-center p-4">
          <img src={logo} alt="Logo" className="h-10 w-auto" />
          <button
            onClick={() => setIsMenuOpen(false)}
            className="text-gray-500 hover:text-gray-800"
          >
            <Close />
          </button>
        </div>
        <ul className="flex flex-col items-center space-y-4 mt-4">
          <li>
            <Link
              to="/"
              className="hover:text-primary hover:bg-secondary rounded-md px-2.5 py-1 transition ease-in duration-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-primary hover:bg-secondary rounded-md px-2.5 py-1 transition ease-in duration-400"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/menu"
              className="hover:text-primary hover:bg-secondary rounded-md px-2.5 py-1 transition ease-in duration-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Menu
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-primary hover:bg-secondary rounded-md px-2.5 py-1 transition ease-in duration-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Reservation
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
