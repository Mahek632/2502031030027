import { useParams, Link, useNavigate } from "react-router";
import { products } from "../data/products";
import { Star, ShoppingCart, ArrowLeft } from "lucide-react";
import { useCart } from "../context/CartContext";

export function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Product Not Found</h1>
        <Link
          to="/products"
          className="text-purple-600 hover:text-purple-700"
        >
          Back to Products
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
    navigate("/cart");
  };

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          to="/products"
          className="inline-flex items-center space-x-2 text-purple-600 hover:text-purple-700 mb-8"
        >
          <ArrowLeft size={20} />
          <span>Back to Products</span>
        </Link>

        {/* Product Detail */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-2xl shadow-lg p-8">
          {/* Image */}
          <div className="aspect-square overflow-hidden rounded-xl">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Details */}
          <div className="space-y-6">
            <div>
              <span className="text-sm text-purple-600 bg-purple-50 px-3 py-1 rounded-full">
                {product.category}
              </span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900">{product.name}</h1>
            
            <div className="flex items-center space-x-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className={
                      i < Math.floor(product.rating)
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-300"
                    }
                  />
                ))}
              </div>
              <span className="text-gray-600">({product.rating} rating)</span>
            </div>

            <p className="text-gray-700 text-lg">{product.description}</p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <span className="text-gray-600">Age Range:</span>
                <span className="font-semibold text-gray-900">{product.ageRange}</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-gray-600">Category:</span>
                <span className="font-semibold text-gray-900">{product.category}</span>
              </div>
            </div>

            <div className="border-t pt-6">
              <div className="flex items-center justify-between mb-6">
                <span className="text-4xl font-bold text-purple-600">
                  ${product.price}
                </span>
                <span className="text-green-600 font-semibold">In Stock</span>
              </div>

              <button
                onClick={handleAddToCart}
                className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-4 rounded-full hover:shadow-lg transition-shadow flex items-center justify-center space-x-2"
              >
                <ShoppingCart size={24} />
                <span className="text-lg">Add to Cart</span>
              </button>
            </div>

            <div className="bg-purple-50 p-4 rounded-lg space-y-2">
              <p className="text-sm text-gray-700">✓ Free shipping on orders over $50</p>
              <p className="text-sm text-gray-700">✓ Safety tested and certified</p>
              <p className="text-sm text-gray-700">✓ 30-day return policy</p>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              You May Also Like
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  to={`/products/${relatedProduct.id}`}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow group"
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {relatedProduct.name}
                    </h3>
                    <span className="text-xl font-bold text-purple-600">
                      ${relatedProduct.price}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
