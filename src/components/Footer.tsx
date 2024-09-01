import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram } from "@mui/icons-material";
import logoFooter from "../assets/images/logo-footer.png";

export default function Footer() {
  return (
    <footer className="bg-secondary text-lightGray py-8">
      <div className="container">
        <div className="flex justify-center items-center sm:items-start sm:justify-between flex-col sm:flex-row text-center sm:text-left">
          <div className="mb-6 sm:mb-0">
            <img src={logoFooter} alt="Logo" className="p-0 w-32 mb-4" />
            <div className="space-x-2">
              <a
                href="https://www.facebook.com"
                target="_blank"
                className="hover:text-primary"
              >
                <Facebook />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                className="hover:text-primary"
              >
                <Twitter />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                className="hover:text-primary"
              >
                <Instagram />
              </a>
            </div>
          </div>

          <div className="mb-6 sm:mb-0">
            <h2 className="mb-2 font-semibold uppercase text-sm">
              Quick Links
            </h2>
            <ul className="text-sm space-y-1.5">
              <li className="hover:text-primary">
                <Link to="/home">Home</Link>
              </li>
              <li className="hover:text-primary">
                <Link to="/about">About Us</Link>
              </li>
              <li className="hover:text-primary">
                <Link to="/menu">Menu</Link>
              </li>
            </ul>
          </div>

          <div className="">
            <h2 className="mb-2 font-semibold uppercase text-sm">Contact us</h2>
            <div className="text-sm space-y-1.5">
              <p>123 Street Name</p>
              <p>Lisboa</p>
              <p>+351 7412 345 000</p>
              <p>info@healthydine.com</p>
            </div>
          </div>
        </div>
        <hr className="border-t-1 border-lightGray my-6 opacity-40" />
        <div className="flex justify-center sm:justify-between text-xs flex-col sm:flex-row  text-center sm:text-left">
          <p className="mb-2 sm:mb-0">&copy; 2024 Healthy Dine Restaurant</p>
          <p>Developed by Juned, Suhel, and Minhaj</p>
        </div>
      </div>
    </footer>
  );
}
