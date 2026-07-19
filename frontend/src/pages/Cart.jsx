import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Cart() {
  const { cartItems, removeFromCart, updateQuantity, cartTotal } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="p-6 text-center">
        <p className="text-gray-600">Your cart is empty.</p>
        <Link to="/" className="text-black underline mt-2 inline-block">Continue shopping</Link>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
      <div className="space-y-4">
        {cartItems.map((item) => (
          <div key={item._id} className="flex items-center gap-4 border-b pb-4">
            <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-md" />
            <div className="flex-1">
              <h3 className="font-semibold text-gray-800">{item.name}</h3>
              <p className="text-sm text-gray-500">₹{item.price}</p>
              <div className="flex items-center gap-2 mt-2">
                <button onClick={() => updateQuantity(item._id, item.quantity - 1)} className="border px-2 rounded">-</button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item._id, item.quantity + 1)} className="border px-2 rounded">+</button>
              </div>
            </div>
            <button onClick={() => removeFromCart(item._id)} className="text-red-500 text-sm hover:underline">
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-between">
        <span className="text-xl font-bold">Total: ₹{cartTotal}</span>
        <Link to="/checkout" className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800">
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
}

export default Cart;