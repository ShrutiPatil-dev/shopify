import React from 'react';
import { NavLink } from 'react-router-dom';

function Product({ product}) {
 

  return (
    <NavLink to={`/product/${product.id}`} className="flex flex-col justify-center items-center p-2 mb-4">
       <img className=" w-56 h-64 md:w-48 md:h-72 object-cover" src={product.image} alt={product.name} />
       <h2 className="mt-2 overflow-hidden text-center h-6 sm:h-auto font-semibold">{product.name}</h2>
      <p className="text-gray-600 mt-2">Rs. {product.price}</p>
      
      </NavLink>

      
    
  );
}

export default Product;
        