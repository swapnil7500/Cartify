import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";



function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
      <Link to="/" className="text-xl font-bold text-gray-800">
      <img src={logo} alt="Cartify" className="h-15" />
      </Link>

      <div className="flex items-center gap-6">
        <Link to="/" className="text-gray-600 hover:text-black">Home</Link>
        <Link to="/cart" className="text-gray-600 hover:text-black">Cart (0)</Link>
        <Link to="/login" className="text-gray-600 hover:text-black">Login</Link>
      </div>
    </nav>
  );
}

export default Navbar;