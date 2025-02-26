import React, { useState } from 'react';
import { useCart } from '../context/CartContext';


function CheckoutForm() {
   const { cartItems } = useCart();

   const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      address1: '',
      city: '',
      state: '',
      zip: '',
      country: '',
      phone: '',
      email: '',
      shippingMethod: "100",
      cardNumber: '',
      expiryDate: '',
      cvv: '',
     
   });

   const total = cartItems.reduce((acc, item) => {
      const price = parseFloat(item.price.replace('Rs. ', '').replace(',', ''));
      return acc + price * item.quantity;
   }, 0);

   const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

   const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({
         ...prev,
         [name]: value,
      }));
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Order placed:', formData);
   };

   return (
      <div className="w-3/4 m-auto p-6 bg-white shadow-md rounded-lg">
         <h2 className="text-3xl font-bold mb-6 text-center">Checkout</h2>
         
      
         <form onSubmit={handleSubmit}>
            <div className="mb-4">
               <h3 className="text-xl font-semibold mb-2">Shipping Information</h3>
               <div className="flex gap-4">
                  <div className="flex-1">
                     <label className="block text-gray-700">First Name</label>
                     <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-md"
                        required
                     />
                  </div>
                  <div className="flex-1">
                     <label className="block text-gray-700">Last Name</label>
                     <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-md"
                        required
                     />
                  </div>
               </div>
               <label className="block text-gray-700 mt-4">Address Line </label>
               <input
                  type="text"
                  name="address1"
                  value={formData.address1}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
               />
            
               <div className="flex gap-4 mt-4">
                  <div className="flex-1">
                     <label className="block text-gray-700">City</label>
                     <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-md"
                        required
                     />
                  </div>
                  <div className="flex-1">
                     <label className="block text-gray-700">State</label>
                     <input
                        type="text"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-md"
                        required
                     />
                  </div>
               </div>
               <div className="flex gap-4 mt-4">
                  <div className="flex-1">
                     <label className="block text-gray-700">ZIP Code</label>
                     <input
                        type="text"
                        name="zip"
                        value={formData.zip}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-md"
                        required
                     />
                  </div>
                  <div className="flex-1">
                     <label className="block text-gray-700">Country</label>
                     <input
                        type="text"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-md"
                        required
                     />
                  </div>
               </div>
               <label className="block text-gray-700 mt-4">Phone Number</label>
               <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
               />
               <label className="block text-gray-700 mt-4">Email Address</label>
               <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
               />
            </div>

            

            
            <div className="mb-4">
               <h3 className="text-xl font-semibold mb-2">Payment Information</h3>
               <label className="block text-gray-700">Credit Card Number</label>
               <input
                  type="text"
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
               />
               <div className="flex gap-4 mt-4">
                  <div className="flex-1">
                     <label className="block text-gray-700">Expiry</label>
                     <input
                        type="text"
                        name="expiryDate"
                        value={formData.expiryDate}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-md"
                        required
                     />
                  </div>
                  <div className="flex-1">
                     <label className="block text-gray-700">CVV</label>
                     <input
                        type="text"
                        name="cvv"
                        value={formData.cvv}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-md"
                        required
                     />
                  </div>
               </div>
            </div>

           
           

           
            <div className="mb-6">
               <h3 className="text-xl font-semibold mb-2">Order Summary</h3>
               <p>Total Items: {totalItems}</p>
               <p>Total: Rs. {total.toFixed(2)}</p>
               <p>
                Shipping: Rs. {parseFloat(formData.shippingMethod).toFixed(2)}
                </p>
                <p>
                <strong>
                    Final Total: Rs.{' '}
                    { (total + parseFloat(formData.shippingMethod)).toFixed(2) }
                </strong>
                </p>

            </div>

            
            <button
               type="submit"
               className="w-full bg-neutral-800 text-white py-2 rounded-md hover:bg-neutral-700 transition-colors duration-200"
            >
               Place Order
            </button>
         </form>
      </div>
   );
}

export default CheckoutForm;
