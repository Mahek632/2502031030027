import { Link } from "react-router";
import { Product } from "../data/products";
import { ShoppingCart, Star } from "lucide-react";
import { useCart } from "../context/CartContext";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product);
  };

  return (
    <Link
      to={`/products/${product.id}`}
      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow group"
    >
      <div className="aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div className="p-4 space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-xs text-purple-600 bg-purple-50 px-2 py-1 rounded-full">
            {product.category}
          </span>
          <div className="flex items-center space-x-1">
            <Star size={14} className="fill-yellow-400 text-yellow-400" />
            <span className="text-xs text-gray-600">{product.rating}</span>
          </div>
        </div>
        <h3 className="font-semibold text-gray-900">{product.name}</h3>
        <p className="text-sm text-gray-600">{product.ageRange}</p>
        <div className="flex items-center justify-between pt-2">
          <span className="text-xl font-bold text-purple-600">${product.price}</span>
          <button
            onClick={handleAddToCart}
            className="bg-gradient-to-r from-pink-500 to-purple-600 text-white p-2 rounded-full hover:shadow-lg transition-shadow"
          >
            <ShoppingCart size={18} />
          </button>
        </div>
      </div>
    </Link>
  );
}
