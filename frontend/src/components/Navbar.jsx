import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { cartCount } = useCart();
  const { user, logout } = useAuth();

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-teal-700 to-teal-600 shadow-lg">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Cartify" className="h-9 brightness-0 invert" />
        </Link>

        <div className="flex items-center gap-2">
          <Link
            to="/"
            className="px-4 py-2 rounded-full text-white/90 font-medium text-sm hover:bg-white/15 transition-all duration-200"
          >
            Home
          </Link>
          <Link
            to="/cart"
            className="relative px-4 py-2 rounded-full text-white/90 font-medium text-sm hover:bg-white/15 transition-all duration-200"
          >
            Cart
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-amber-400 text-teal-900 text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
          {user ? (
            <button
              onClick={logout}
              className="ml-2 px-5 py-2 rounded-full bg-white text-teal-700 font-semibold text-sm hover:bg-amber-400 hover:text-teal-900 transition-all duration-200 hover:scale-105"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="ml-2 px-5 py-2 rounded-full bg-white text-teal-700 font-semibold text-sm hover:bg-amber-400 hover:text-teal-900 transition-all duration-200 hover:scale-105"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;