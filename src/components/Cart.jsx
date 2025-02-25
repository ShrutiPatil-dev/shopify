import React from 'react';
import { useCart } from '../context/CartContext';
import { NavLink } from 'react-router-dom';

function Cart() {
   const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity } = useCart();

   const total = cartItems.reduce((acc, item) => {
      const price = parseFloat(item.price.replace('Rs. ', '').replace(',', ''));
      return acc + price * item.quantity;
   }, 0);

   const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

   if (cartItems.length === 0) {
      return (
         <div className='flex flex-col justify-center items-center bg-gray-100 w-3/4 p-10 m-auto mt-10 rounded-md'>
           
            <h2 className="text-4xl text-center p-3  m-6">Your Cart is Empty</h2>

            <NavLink  
            to={'/list'}
            className="mt-4 bg-neutral-800 text-white rounded-md w-58 h-10 px-7 py-2  hover:bg-neutral-700 transition-colors duration-200"
            >
            Continue Shopping
          </NavLink>
         </div>
      );
   }

   return (
      <div className="w-3/4 m-auto">
         <h2 className="text-3xl font-bold mb-6 text-center m-2">Your Cart</h2>
         <div>
            {cartItems.map((item) => (
               <div key={item.id} className="flex flex-col md:flex-row text-center items-center bg-white p-2 m-2 border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className='flex-shrink-0'>
                     <img className="w-24 lg:h-24 object-cover" src={item.image} alt={item.name} />
                  </div>
                  <div className="m-4 flex-1">
                      <h3 className="text-base md:text-xl font-semibold">{item.name}</h3>
                      <p className="text-gray-600 text-sm md:text-base">Rs. {item.price}</p>
                      <p className="text-gray-600 text-sm md:text-base">Quantity: {item.quantity}</p>
                      <p className="text-gray-600 text-sm md:text-base">Total: Rs. {(parseFloat(item.price.replace('Rs. ', '').replace(',', '')) * item.quantity).toFixed(2)}</p>
                </div>

                <div className="flex justify-center items-start space-x-2">
                     <button
                        onClick={() => decreaseQuantity(item.id)}
                        className="bg-neutral-800 w-8 h-8 text-white rounded-full"
                     >
                        -
                     </button>
                     <span>{item.quantity}</span>
                     <button
                        onClick={() => increaseQuantity(item.id)}
                        className="bg-neutral-800 w-8 h-8 text-white rounded-full"
                     >
                        +
                     </button>
                  </div>
                  <button
                        onClick={() => removeFromCart(item.id)}
                        className="bg-red-500 m-4 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors duration-200"
                     >
                        Remove
                     </button>
               </div>
            ))}
         </div>

         <div className="mt-6 flex flex-col md:flex-row justify-between items-center p-4 bg-gray-100 border-t-2 border-gray-300">
            <div className="text-center mb-4 md:mb-0">
               <h3 className="text-xl font-semibold">Order Summary</h3>
               <p className="text-sm text-gray-600">Total Items: {totalItems}</p>
            </div>
            <div className="text-center mb-4 md:mb-0">
               <h3 className="text-xl font-semibold">Total</h3>
               <p className="text-xl font-bold text-neutral-800">Rs. {total.toFixed(2)}</p>
            </div>
         </div>

         <div className="flex flex-col md:flex-row gap-2 md:gap-3 justify-center items-center my-6">
            <button className="mt-4 bg-neutral-800  text-white rounded-md px-7 py-2  hover:bg-neutral-700 transition-colors duration-200">
               Proceed to Checkout
            </button>
            <NavLink  
            to={'/list'}
            className="mt-4 bg-neutral-800  text-white text-center rounded-md px-7 py-2  hover:bg-neutral-700 transition-colors duration-200"
            >
            Continue Shopping
          </NavLink>
         </div>
      </div>
   );
}

export default Cart;
