import { Link } from "react-router-dom";
import logo from "../assets/images/placeholder-logo.png";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className=" flex items-center justify-between py-2 container">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-12 w-auto" />
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-6">
          <li>
            <Link
              to="/home"
              className="text-gray-700 hover:text-gray-900 transition duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-gray-700 hover:text-gray-900 transition duration-300"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/menu"
              className="text-gray-700 hover:text-gray-900 transition duration-300"
            >
              Menu
            </Link>
          </li>
        </ul>

        {/* Buttons */}
        <div className="flex space-x-4">
          <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 transition duration-300">
            Reservation
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
            Profile
          </button>
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300">
            Cart
          </button>
        </div>
      </div>
    </nav>
  );
}
