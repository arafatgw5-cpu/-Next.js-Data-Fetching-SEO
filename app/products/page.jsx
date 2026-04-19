import Image from "next/image";
import { ShoppingCart, Heart, Eye, Star } from "lucide-react";

const getProducts = async () => {
  const res = await fetch("http://localhost:4000/products", {
    cache: "no-store",
  });
  return res.json();
};

const page = async () => {
  const products = await getProducts();

  return (
    <div className="min-h-screen bg-[#F8FAFC] p-8">
      <h1 className="text-4xl font-extrabold text-center mb-10 text-gray-800">
        🛍️ Featured Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition duration-300 overflow-hidden group"
          >
            {/* Image Area */}
            <div className="relative bg-gray-100 h-48 flex items-center justify-center">
              
              {/* Discount Badge */}
              <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded-lg font-semibold">
                -20%
              </span>

              {/* Icons */}
              <div className="absolute right-3 top-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition">
                <button className="bg-white p-2 rounded-full shadow hover:bg-gray-100">
                  <Heart size={16} />
                </button>
                <button className="bg-white p-2 rounded-full shadow hover:bg-gray-100">
                  <Eye size={16} />
                </button>
              </div>

              <Image
                src={product.thumbnail}
                alt={product.title}
                fill
                className="object-contain p-4"
              />
            </div>

            {/* Content */}
            <div className="p-4">
              
              {/* Category */}
              <p className="text-xs text-gray-400 uppercase mb-1">
                Electronics
              </p>

              {/* Title */}
              <h2 className="text-sm font-semibold text-gray-800 line-clamp-2 mb-2">
                {product.title}
              </h2>

              {/* Rating */}
              <div className="flex items-center gap-1 text-yellow-500 text-sm mb-2">
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
                <Star size={14} className="text-gray-300" />
                <span className="text-gray-500 ml-1 text-xs">(4.0)</span>
              </div>

              {/* Price */}
              <div className="flex items-center gap-2 mb-4">
                <span className="text-lg font-bold text-blue-600">
                  ${product.price}
                </span>
                <span className="text-sm line-through text-gray-400">
                  ${product.price + 20}
                </span>
              </div>

              {/* Button */}
              <button className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-xl text-sm font-medium hover:bg-black hover:text-white transition">
                <ShoppingCart size={16} />
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;