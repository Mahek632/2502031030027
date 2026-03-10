import { Link } from "react-router";
import { useCart } from "../context/CartContext";
import { Trash2, Plus, Minus, ShoppingBag } from "lucide-react";

export function Cart() {
  const { items, removeFromCart, updateQuantity, getTotalPrice } = useCart();

  if (items.length === 0) {
    return (
      <div className="bg-gray-50 min-h-screen py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
            <ShoppingBag size={64} className="mx-auto text-gray-400 mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Your cart is empty
            </h2>
            <p className="text-gray-600 mb-8">
              Start shopping to add items to your cart!
            </p>
            <Link
              to="/products"
              className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-3 rounded-full hover:shadow-lg transition-shadow"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-md p-6 flex flex-col sm:flex-row gap-6"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full sm:w-32 h-32 object-cover rounded-lg"
                />
                <div className="flex-1 space-y-2">
                  <h3 className="font-semibold text-gray-900 text-lg">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-600">{item.category}</p>
                  <p className="text-lg font-bold text-purple-600">
                    ${item.price}
                  </p>
                </div>
                <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between sm:justify-start gap-4">
                  <div className="flex items-center space-x-3 bg-gray-100 rounded-full px-3 py-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="text-gray-600 hover:text-purple-600"
                    >
                      <Minus size={16} />
                    </button>
                    <span className="font-semibold w-8 text-center">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="text-gray-600 hover:text-purple-600"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-600 p-2"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24 space-y-6">
              <h2 className="text-2xl font-bold text-gray-900">Order Summary</h2>
              
              <div className="space-y-3">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>${getTotalPrice().toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span className="text-green-600">
                    {getTotalPrice() >= 50 ? "FREE" : "$5.99"}
                  </span>
                </div>
                <div className="border-t pt-3 flex justify-between text-xl font-bold text-gray-900">
                  <span>Total</span>
                  <span className="text-purple-600">
                    ${(getTotalPrice() + (getTotalPrice() >= 50 ? 0 : 5.99)).toFixed(2)}
                  </span>
                </div>
              </div>

              {getTotalPrice() < 50 && (
                <div className="bg-purple-50 p-4 rounded-lg">
                  <p className="text-sm text-purple-700">
                    Add ${(50 - getTotalPrice()).toFixed(2)} more to get free shipping!
                  </p>
                </div>
              )}

              <button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-4 rounded-full hover:shadow-lg transition-shadow">
                Proceed to Checkout
              </button>

              <Link
                to="/products"
                className="block text-center text-purple-600 hover:text-purple-700"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
