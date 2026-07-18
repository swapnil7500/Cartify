import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { cartCount } = useCart();
  const { user, logout } = useAuth();

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
      <Link to="/" className="flex items-center">
        <img src={logo} alt="Cartify" className="h-10" />
      </Link>

      <div className="flex items-center gap-6">
        <Link to="/" className="text-gray-600 hover:text-black">Home</Link>
        <Link to="/cart" className="text-gray-600 hover:text-black">Cart ({cartCount})</Link>
        {user ? (
          <button onClick={logout} className="text-gray-600 hover:text-black">
            Logout
          </button>
        ) : (
          <Link to="/login" className="text-gray-600 hover:text-black">Login</Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;