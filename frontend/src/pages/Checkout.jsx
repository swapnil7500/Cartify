import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import axiosInstance from "../api/axiosInstance";

function Checkout() {
  const { cartItems, cartTotal, removeFromCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [address, setAddress] = useState("");
  const [error, setError] = useState("");

  const handlePlaceOrder = async (e) => {
    e.preventDefault();
    setError("");

    if (!user) {
      navigate("/login");
      return;
    }

    try {
      const orderItems = cartItems.map((item) => ({
        product: item._id,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
      }));

      await axiosInstance.post("/orders", {
        items: orderItems,
        address,
        totalAmount: cartTotal,
      });

      cartItems.forEach((item) => removeFromCart(item._id));
      alert("Order placed successfully!");
      navigate("/");
    } catch (err) {
      setError(err.response?.data?.message || "Failed to place order");
    }
  };

  if (cartItems.length === 0) {
    return <p className="p-6 text-center text-gray-600">Your cart is empty.</p>;
  }

  return (
    <div className="max-w-lg mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>
      {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
      <form onSubmit={handlePlaceOrder} className="space-y-4">
        <textarea
          placeholder="Shipping Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="w-full border rounded-md px-3 py-2"
          rows="3"
          required
        />
        <div className="border-t pt-4">
          <p className="text-lg font-bold">Total: ₹{cartTotal}</p>
        </div>
        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800"
        >
          Place Order
        </button>
      </form>
    </div>
  );
}

export default Checkout;