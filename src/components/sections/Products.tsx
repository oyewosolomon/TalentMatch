import React from 'react';
import { motion } from 'framer-motion';

const Products = () => {
  const products = [
    {
      title: "Assembly Line Robots",
      description: "Our assembly line robots are designed for high-precision tasks, ensuring seamless integration into manufacturing processes. With advanced AI capabilities, they optimize productivity and maintain consistent quality standards.",
      features: [
        "High precision and speed",
        "Easy integration into existing systems",
        "Customizable for specific tasks"
      ],
      image: "https://source.unsplash.com/random/400x300?robotics,technology",
    },
    {
      title: "Quality Control Systems",
      description: "AI-powered quality control systems that perform real-time inspections, reducing defects and enhancing product reliability. These systems utilize machine learning to continuously improve inspection accuracy.",
      features: [
        "Real-time quality inspection",
        "Defect detection with AI algorithms",
        "Adaptable to various industries"
      ],
      image: "https://source.unsplash.com/random/400x300?ai,technology",
    },
    {
      title: "Warehouse Automation Solutions",
      description: "Robust robotic systems for efficient inventory management, order fulfillment, and warehouse optimization. These solutions enhance productivity while minimizing human error and operational costs.",
      features: [
        "Efficient inventory management",
        "Automated order fulfillment",
        "Scalable to warehouse size and needs"
      ],
      image: "https://source.unsplash.com/random/400x300?warehouse,automation",
    },
  ];

  return (
    <div className="bg-gray-100 dark:bg-gray-900 py-16">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-gray-100"
        >
          Our Products
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center transition-transform duration-300"
            >
              <img 
                src={product.image} 
                alt={product.title} 
                className="w-full h-48 object-cover mb-4 rounded-lg" 
              />
              <h3 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-gray-100">{product.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{product.description}</p>
              <ul className="text-left mb-4 text-gray-600 dark:text-gray-400">
                {product.features.map((feature, i) => (
                  <li key={i} className="flex items-center mb-2">
                    <span className="bg-primary text-white rounded-full h-4 w-4 flex items-center justify-center mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="bg-primary hover:bg-primary-dark text-white font-semibold py-2 px-4 rounded transition-colors duration-300">
                Learn More
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
