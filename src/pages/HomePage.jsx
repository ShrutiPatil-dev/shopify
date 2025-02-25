import React, {useState,useEffect}from 'react';
import { assets, productData} from '../assets/assets';
import Product from '../components/Product';
import { useCart } from '../context/CartContext';



function HomePage() {
    const { addToCart } = useCart();
    

    const [loading, setLoading] = useState(true); 

    useEffect(() => {
      
        setTimeout(() => {
            setLoading(false); 
        }, 1000);
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="spinner-border animate-spin w-16 h-16 border-t-4 border-neutral-800 rounded-full"></div> {/* Custom Spinner */}
            </div>
        );
    }
     
  
  return (
    <div>
       <div className='flex items-center justify-center p-2 relative'>
      <img src={assets.Home_icon} alt="home" />
      <span className='absolute text-white text-2xl  bottom-5 font-bold p-5'>
        <h1 className='text-xl md:text-3xl lg:text-4xl'>The denim destination</h1>
        <h2 className='text-sm md:text-lg lg:text-xl font-semibold text-center'>Explore the latest in denim fashion.</h2>
      </span>
    </div>
    <h1 className='text-center text-xl lg:text-3xl text-neutral-800 font-semibold m-2'>Latest Product</h1>
    <hr className='m-12 mt-5'/>
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        
    {
        productData.map((product) =>(
            <div key={product.id}>
                 <Product  product={product} addToCart={addToCart} />
                 
            </div>
        ))
    }

    </div>
   
    </div>
    
  );
}

export default HomePage