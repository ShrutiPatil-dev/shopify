import React from 'react';
import { NavLink } from 'react-router-dom';

function Product({ product, addToCart }) {
  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="flex flex-col items-center p-4 h-[450px] m-5">
      <img className="w-48 h-72 object-cover" src={product.image} alt={product.name} />
      <h3 className="text-md font-semibold mt-4">{product.name}</h3>
      <p className="text-gray-600 mt-2">Rs. {product.price}</p>
      <div className="flex">
        <NavLink to={`/product/${product.id}`} className="bg-neutral-800 text-white px-3 text-sm py-2 m-1 rounded-md hover:bg-neutral-700 transition-colors duration-200">
          Buy Now
        </NavLink>
        <NavLink to={'/cart'}
          onClick={handleAddToCart}
          className="bg-neutral-800 text-white px-3 text-sm py-2 m-1 rounded-md hover:bg-neutral-700 transition-colors duration-200"
        >
          Add to Cart
        </NavLink>
      </div>
    </div>
  );
}

export default Product;
