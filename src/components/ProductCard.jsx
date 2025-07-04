import React from 'react';

const ProductCard = ({ title, description, image }) => {
  return (
    <div className="relative w-full h-96 overflow-hidden rounded-lg shadow-lg group">
      {/* Image and title (always visible) */}
      <div className="absolute inset-0">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
        <h3 className="absolute bottom-4 left-4 text-white text-xl font-bold">{title}</h3>
      </div>

      {/* Info section (slides up on hover) */}
      <div className="absolute inset-0 bg-blue-50 dark:bg-blue-900 p-4 transform translate-y-full transition-transform duration-500 ease-in-out group-hover:translate-y-1/4">
        <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-2">{title}</h3>
        <p className="text-blue-600 dark:text-blue-300 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default ProductCard;