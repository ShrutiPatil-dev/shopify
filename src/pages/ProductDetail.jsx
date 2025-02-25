import React from 'react'
import { useParams ,useNavigate, NavLink} from 'react-router-dom';
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
    <div className="flex flex-col text-center md:text-start p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">{product.name}</h2>
      <div className="flex flex-col md:flex-row items-center gap-6">
        <img className="w-52 h-80 object-cover" src={product.image} alt={product.name} />
        <div className="flex-1">
          <p className="text-gray-700 mb-4">{product.desc}</p>
          <p className="text-xl font-semibold text-gray-900">Rs.{product.price}</p>
          
          
          <div className='flex justify-center md:justify-start items-center gap-5'>

          <button
            onClick={handleAddToCart}
            className="mt-4 bg-neutral-800 text-white rounded-md w-36 h-10 hover:bg-neutral-700 transition-colors duration-200"
          >
            Add to Cart
          </button>
          <NavLink to="/list" >
           <button className="mt-4 bg-neutral-800 text-white  w-36  h-10 rounded-md hover:bg-neutral-700 transition-colors duration-200">Shop More</button>
           </NavLink>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Productdetail
