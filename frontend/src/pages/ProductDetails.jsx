import { useParams, Link } from "react-router-dom";
import dummyProducts from "../data/dummyProducts";
import { useCart } from "../context/CartContext";

function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = dummyProducts.find((p) => p.id === parseInt(id));

  if (!product) {
    return <p className="p-6">Product not found.</p>;
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <Link to="/" className="text-sm text-gray-500 hover:underline">← Back to products</Link>
      <div className="flex flex-col md:flex-row gap-8 mt-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-full md:w-1/2 h-80 object-cover rounded-lg"
        />
        <div className="flex-1">
          <h1 className="text-2xl font-bold text-gray-800">{product.name}</h1>
          <p className="text-sm text-gray-500 mt-1">{product.category}</p>
          <p className="text-2xl font-bold text-gray-900 mt-4">₹{product.price}</p>
          <button
            onClick={() => addToCart(product)}
            className="mt-6 bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;