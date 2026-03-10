import { Link } from "react-router";
import { products } from "../data/products";
import { ProductCard } from "./ProductCard";
import { Star, Truck, Shield, HeadphonesIcon } from "lucide-react";

export function Home() {
  const featuredProducts = products.slice(0, 4);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
                Welcome to{" "}
                <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                  ToyWorld
                </span>
              </h1>
              <p className="text-xl text-gray-700">
                Discover amazing toys that spark imagination and bring endless joy to children of all ages!
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/products"
                  className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-3 rounded-full hover:shadow-lg transition-shadow"
                >
                  Shop Now
                </Link>
                <Link
                  to="/products"
                  className="bg-white text-purple-600 px-8 py-3 rounded-full border-2 border-purple-600 hover:bg-purple-50 transition-colors"
                >
                  Browse Categories
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1553158399-3796bdbc82fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMHRveXMlMjBjaGlsZHJlbnxlbnwxfHx8fDE3NzMxMzQ5NzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Colorful toys"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                <Truck className="text-purple-600" size={32} />
              </div>
              <h3 className="font-semibold text-gray-900">Free Shipping</h3>
              <p className="text-sm text-gray-600">On orders over $50</p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto">
                <Shield className="text-pink-600" size={32} />
              </div>
              <h3 className="font-semibold text-gray-900">Safe & Tested</h3>
              <p className="text-sm text-gray-600">All toys are safety certified</p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <Star className="text-blue-600" size={32} />
              </div>
              <h3 className="font-semibold text-gray-900">Top Quality</h3>
              <p className="text-sm text-gray-600">Premium materials only</p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <HeadphonesIcon className="text-green-600" size={32} />
              </div>
              <h3 className="font-semibold text-gray-900">24/7 Support</h3>
              <p className="text-sm text-gray-600">We're here to help</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Products</h2>
            <p className="text-xl text-gray-600">Check out our most popular toys!</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/products"
              className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-3 rounded-full hover:shadow-lg transition-shadow"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Shop by Category</h2>
            <p className="text-xl text-gray-600">Find the perfect toy for every occasion</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {["Plush Toys", "Educational", "Action Figures", "Puzzles", "Vehicles", "Dolls"].map(
              (category) => (
                <Link
                  key={category}
                  to="/products"
                  className="bg-gradient-to-br from-pink-50 to-purple-50 p-6 rounded-xl text-center hover:shadow-lg transition-shadow border border-purple-100"
                >
                  <div className="text-4xl mb-2">
                    {category === "Plush Toys" && "🧸"}
                    {category === "Educational" && "📚"}
                    {category === "Action Figures" && "🦸"}
                    {category === "Puzzles" && "🧩"}
                    {category === "Vehicles" && "🚗"}
                    {category === "Dolls" && "👧"}
                  </div>
                  <h3 className="font-semibold text-gray-900">{category}</h3>
                </Link>
              )
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
