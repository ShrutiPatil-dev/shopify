import React from 'react'
import { useParams ,useNavigate} from 'react-router-dom';
import { productList } from '../assets/assets';
import { useCart } from '../context/CartContext';

function Productdetail() {

    const { id } = useParams();
    const {addToCart} = useCart();
    const navigate = useNavigate();

    const product = productList[id];

    const handleAddToCart = () => {
      addToCart(product);
      navigate('/cart');
    };
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">{product.name}</h2>
      <div className="flex gap-6">
        <img className="w-52 h-80 object-cover" src={product.image} alt={product.name} />
        <div className="flex-1">
          <p className="text-gray-700 mb-4">{product.desc}</p>
          <p className="text-xl font-semibold text-gray-900">Rs.{product.price}</p>
          <button
            onClick={handleAddToCart}
            className="mt-4 bg-neutral-800 text-white px-4 py-1 rounded-md hover:bg-neutral-700 transition-colors duration-200"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default Productdetail
