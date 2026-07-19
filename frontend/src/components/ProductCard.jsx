import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <Link to={`/product/${product._id}`}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover rounded-lg mb-3"
        />
        <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
        <p className="text-xs text-teal-600 font-medium">{product.category}</p>
      </Link>
      <div className="flex items-center justify-between mt-3">
        <span className="font-bold text-gray-900">₹{product.price}</span>
        <button
          onClick={() => addToCart(product)}
          className="bg-teal-700 text-white text-sm px-3 py-1.5 rounded-full hover:bg-amber-500 hover:scale-105 transition-all duration-200"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;