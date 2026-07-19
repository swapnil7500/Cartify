import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import axiosInstance from "../api/axiosInstance";

function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axiosInstance.get(`/products/${id}`);
        setProduct(res.data);
      } catch (error) {
        console.error("Failed to fetch product:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  if (loading) return <p className="p-6 text-center text-gray-500">Loading...</p>;
  if (!product) return <p className="p-6 text-center text-gray-500">Product not found.</p>;

  return (
    <div className="max-w-5xl mx-auto p-6">
      <Link to="/" className="text-sm text-teal-700 hover:underline font-medium">
        ← Back to products
      </Link>

      <div className="mt-6 bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
        <div className="md:w-1/2 bg-gray-50 flex items-center justify-center p-8">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-80 object-cover rounded-xl shadow-md"
          />
        </div>

        <div className="md:w-1/2 p-8 flex flex-col justify-between bg-gradient-to-br from-teal-50 to-white">
          <div>
            <span className="inline-block bg-teal-100 text-teal-700 text-xs font-semibold px-3 py-1 rounded-full mb-3">
              {product.category}
            </span>
            <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
            <p className="text-gray-600 mt-4 leading-relaxed">{product.description}</p>

            <div className="mt-6 flex items-center gap-3">
              <span className="text-3xl font-extrabold text-teal-700">₹{product.price}</span>
              {product.stock > 0 ? (
                <span className="text-green-600 text-sm font-medium">In Stock</span>
              ) : (
                <span className="text-red-500 text-sm font-medium">Out of Stock</span>
              )}
            </div>
          </div>

          <button
            onClick={handleAddToCart}
            disabled={product.stock === 0}
            className={`mt-8 w-full py-3 rounded-xl font-semibold text-white transition-all duration-300 ${
              added
                ? "bg-green-600"
                : "bg-teal-700 hover:bg-teal-800 hover:shadow-lg hover:scale-[1.02]"
            } disabled:bg-gray-300 disabled:cursor-not-allowed`}
          >
            {added ? "✓ Added to Cart" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;