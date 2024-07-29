import React from 'react';
import { Link } from 'react-router-dom';
import imagePath from '../assets/home-hero-2.JPG'; // Import the image

// Example products with longer descriptions
const products = [
  {
    title: 'Product 1',
    description: 'This innovative product offers a unique solution for everyday challenges. Designed with user convenience in mind, it combines modern technology with practical features to enhance your daily life. From its sleek design to its advanced functionality, this product is a perfect blend of style and utility.',
    imageUrl: imagePath,
    cta: 'Buy Now',
  },
  {
    title: 'Product 2',
    description: 'Experience the next level of performance with this cutting-edge product. Built to exceed expectations, it provides exceptional quality and reliability. Ideal for those seeking top-notch performance and durability, this product stands out in its category for its unmatched capabilities and user-friendly design.',
    imageUrl: imagePath,
    cta: 'Learn More',
  },
  {
    title: 'Product 3',
    description: 'Elevate your experience with this high-quality product that combines innovation and excellence. Its thoughtful design and advanced features make it a must-have for anyone looking to enhance their lifestyle. With a focus on user satisfaction, this product delivers outstanding performance and value.',
    imageUrl: imagePath,
    cta: 'Purchase',
  },
  {
    title: 'Product 4',
    description: 'Discover the ultimate in convenience with this top-of-the-line product. Engineered to offer superior functionality and ease of use, it is perfect for those who demand the best. Featuring state-of-the-art technology and a sleek design, this product is a testament to excellence and innovation.',
    imageUrl: imagePath,
    cta: 'Get Yours',
  },
];

function Products() {
  return (
    <section className="px-4 py-8 mx-auto max-w-screen-xl">
      <h2 className="text-3xl font-semibold text-center mb-8">Our Products</h2>
      <div className="space-y-16">
        {products.map((product, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-8"
          >
            {/* Text Container */}
            <div className="flex flex-col items-center justify-center text-center md:text-left md:w-1/2 space-y-6 md:space-y-4">
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {product.title}
              </h5>
              <p className="text-gray-700 dark:text-gray-400">
                {product.description}
              </p>
              <div className="flex justify-center md:justify-start">
                <Link to="/booking">
                  <button
                    id="P-buttons"
                    className="p-3 text-white bg-blue-500 border-2 border-blue-500 rounded-md hover:bg-blue-600 duration-300"
                  >
                    {product.cta}
                  </button>
                </Link>
              </div>
            </div>

            {/* Image Container */}
            <div className="flex md:w-1/2">
              <img
                className="object-cover w-full h-96 md:h-auto rounded-lg"
                src={product.imageUrl}
                alt={product.title}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Products;
