import React, { useState } from 'react'
import { useCart } from '../context/CartContext'

function CheckoutForm() {
    const {cartItems} = useCart();

    const [formData,setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        country:'',
        state:'',
        zip:'',
        name: '',
        card: '',
        expiryDate: '',
        cvv: '',
        shippingMethod: "100",
    })
   

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
    <div className='w-4/5 lg:w-3/4 m-auto p-6 bg-white shadow-md rounded-lg mt-5 text-sm lg:text-base'>
                 <h2 className="text-3xl font-bold mb-6 text-center">Checkout</h2>
            <form onSubmit={handleSubmit}>
            <div className="mb-4">
               <h3 className="text-xl font-semibold mb-2">Shipping Information</h3>
            </div>
            <div className='flex gap-4'>
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
            <label className="block text-gray-700 mt-4">Email</label>
            <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder='ask@gmail.com'
                  required
               />
            <label className="block text-gray-700 mt-4">Address Line</label>
            <input
                  type="text"
                  name="address1"
                  value={formData.address1}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder='Newyork Street'
                  required
               />
               <div className='flex gap-4'>
                <div className="flex-1">
                <label className="block text-gray-700 mt-4">Country</label>

                <select
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
               >
                  
                  <option value="USA">United States</option>
                  <option value="India">India</option>
                  <option value="Uk">United Kingdom</option>
                  <option value="Australia">Australia</option>
               </select>
                </div>
                <div className="flex-1">
                <label className="block text-gray-700 mt-4">State</label>
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

              <label className="block text-gray-700 mt-4">ZIP</label>
                <input
                  type="text"
                  name="zip"
                  value={formData.zip}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                 
                  required
               />
               
               <div className="my-4">
               <h3 className="text-xl font-semibold mb-2">Payment</h3>
               </div>


            <div className='flex gap-4'>
                <div className="flex-1">
                <label className="block text-gray-700">Payment Information</label>
                <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-md"
                        required
                     />
                </div>
                <div className="flex-1">
                 <label className="block text-gray-700">Credit card number</label>
                <input
                        type="text"
                        name="card"
                        value={formData.card}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-md"
                        required
                     />

                </div>

            </div>

            <div className="flex gap-4 mt-4">
                  <div className="flex-1">
                     <label className="block text-gray-700">Expiry Date</label>
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
               className="w-full bg-neutral-800 my-4 text-white py-2 rounded-md hover:bg-neutral-700 transition-colors duration-200"
            >
               Place Order
            </button>



            </form>

     
    </div>
  )
}

export default CheckoutForm
