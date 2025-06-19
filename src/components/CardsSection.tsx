import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, ShoppingCart, Heart } from 'lucide-react';
import RippleButton from './RippleButton';
import Modal from './Modal';

interface Product {
  id: number;
  name: string;
  price: string;
  originalPrice?: string;
  image: string;
  rating: number;
  reviews: number;
  category: string;
  description: string;
}

const CardsSection: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [favorites, setFavorites] = useState<Set<number>>(new Set());

  const products: Product[] = [
    {
      id: 1,
      name: "Urban Runner Pro",
      price: "$199",
      originalPrice: "$249",
      image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=600",
      rating: 4.8,
      reviews: 234,
      category: "Running",
      description: "Professional running shoes with advanced cushioning technology and breathable mesh upper."
    },
    {
      id: 2,
      name: "Classic Court",
      price: "$149",
      image: "https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg?auto=compress&cs=tinysrgb&w=600",
      rating: 4.6,
      reviews: 189,
      category: "Lifestyle",
      description: "Timeless court-inspired sneakers perfect for everyday wear with premium leather construction."
    },
    {
      id: 3,
      name: "Sport Elite",
      price: "$249",
      image: "https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=600",
      rating: 4.9,
      reviews: 312,
      category: "Performance",
      description: "High-performance athletic shoes designed for serious athletes with carbon fiber plate technology."
    },
    {
      id: 4,
      name: "Adventure Trail",
      price: "$179",
      originalPrice: "$199",
      image: "https://images.pexels.com/photos/1240892/pexels-photo-1240892.jpeg?auto=compress&cs=tinysrgb&w=600",
      rating: 4.7,
      reviews: 156,
      category: "Outdoor",
      description: "Rugged trail shoes built for outdoor adventures with waterproof protection and aggressive tread."
    },
    {
      id: 5,
      name: "Comfort Walk",
      price: "$129",
      image: "https://images.pexels.com/photos/267320/pexels-photo-267320.jpeg?auto=compress&cs=tinysrgb&w=600",
      rating: 4.5,
      reviews: 98,
      category: "Comfort",
      description: "All-day comfort shoes with memory foam insoles and supportive arch technology."
    },
    {
      id: 6,
      name: "Style Icon",
      price: "$189",
      image: "https://images.pexels.com/photos/336372/pexels-photo-336372.jpeg?auto=compress&cs=tinysrgb&w=600",
      rating: 4.4,
      reviews: 76,
      category: "Fashion",
      description: "Fashion-forward sneakers that make a statement with premium materials and unique design."
    }
  ];

  const toggleFavorite = (productId: number) => {
    setFavorites(prev => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(productId)) {
        newFavorites.delete(productId);
      } else {
        newFavorites.add(productId);
      }
      return newFavorites;
    });
  };

  return (
    <>
      <section id="products" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Featured <span className="text-blue-600">Collection</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Discover our handpicked selection of premium footwear designed for every lifestyle
            </p>
          </motion.div>

          <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden group"
              >
                <div className="relative overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover"
                  />
                  
                  {/* Favorite Button */}
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => toggleFavorite(product.id)}
                    className="absolute top-4 right-4 p-2 bg-white/80 dark:bg-gray-800/80 rounded-full shadow-lg backdrop-blur-sm"
                  >
                    <Heart
                      className={`w-5 h-5 ${
                        favorites.has(product.id)
                          ? 'text-red-500 fill-current'
                          : 'text-gray-600 dark:text-gray-300'
                      }`}
                    />
                  </motion.button>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-blue-600 text-white text-sm rounded-full">
                    {product.category}
                  </div>

                  {/* Discount Badge */}
                  {product.originalPrice && (
                    <div className="absolute bottom-4 left-4 px-3 py-1 bg-red-500 text-white text-sm rounded-full">
                      Sale
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {product.name}
                  </h3>
                  
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating)
                              ? 'fill-current'
                              : 'fill-current opacity-30'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-300">
                      {product.rating} ({product.reviews})
                    </span>
                  </div>

                  <div className="flex items-center space-x-2 mb-4">
                    <span className="text-2xl font-bold text-blue-600">
                      {product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-lg text-gray-500 line-through">
                        {product.originalPrice}
                      </span>
                    )}
                  </div>

                  <div className="flex space-x-3">
                    <RippleButton
                      onClick={() => setSelectedProduct(product)}
                      className="flex-1 py-2 px-4 text-sm"
                    >
                      View Details
                    </RippleButton>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                    >
                      <ShoppingCart className="w-5 h-5" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Detail Modal */}
      <Modal
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
        title={selectedProduct?.name || ''}
      >
        {selectedProduct && (
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-full h-80 object-cover rounded-xl"
              />
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(selectedProduct.rating)
                          ? 'fill-current'
                          : 'fill-current opacity-30'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-gray-600 dark:text-gray-300">
                  {selectedProduct.rating} ({selectedProduct.reviews} reviews)
                </span>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                {selectedProduct.description}
              </p>
              
              <div className="flex items-center space-x-3">
                <span className="text-3xl font-bold text-blue-600">
                  {selectedProduct.price}
                </span>
                {selectedProduct.originalPrice && (
                  <span className="text-xl text-gray-500 line-through">
                    {selectedProduct.originalPrice}
                  </span>
                )}
              </div>

              <div className="flex space-x-4 pt-4">
                <RippleButton className="flex-1">
                  Add to Cart
                </RippleButton>
                <RippleButton variant="secondary">
                  Buy Now
                </RippleButton>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </>
  );
};

export default CardsSection;