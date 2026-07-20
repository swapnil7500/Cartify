import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import axiosInstance from "../api/axiosInstance";

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axiosInstance.get("/products");
        setProducts(res.data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div>
      {/* Hero banner */}
      <div
        className="relative h-72 md:h-80 flex items-center justify-center text-center bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(6, 78, 59, 0.75), rgba(6, 78, 59, 0.6)), url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600&h=600&fit=crop')",
        }}
      >
        <div className="px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-md">
            Our Products
          </h1>
          <p className="text-teal-100 mt-3 text-lg">
            Quality picks, handpicked for you.
          </p>
        </div>
      </div>

      {/* Product grid */}
      <div className="max-w-6xl mx-auto p-6">
        {loading ? (
          <p className="text-center text-gray-500 py-10">Loading products...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
            {products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;