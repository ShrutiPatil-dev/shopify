import React, {useState,useEffect} from 'react';
import { productList } from '../assets/assets';
import { NavLink } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { IoIosSearch } from "react-icons/io";

function ProductList() {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');
    const { addToCart } = useCart();
    const navigate = useNavigate();

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
   

    const handleAddToCart = (product) => {
        addToCart(product);
        navigate('/cart');
    };

    const filteredProducts = productList.filter(product => {
        const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
        const matchesSearchTerm = product.name.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearchTerm;
    });

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    

    return (
        <>
            <h1 className='text-center text-xl lg:text-3xl text-neutral-800 m-2 font-semibold'>Clothing</h1>
            <hr className='m-10 mt-5' />
            <p className='flex justify-center items-center gap-2 m-4'>
                <IoIosSearch size={25} />
                <input
                    type="text"
                    className='bg-transparent border-b-[1px] outline-none mx-2'
                    placeholder='Search...'
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
            </p>
            <div className="text-center mb-6">
                <button onClick={() => setSelectedCategory('all')} className="text-neutral-800 hover:underline p-1 font-semibold m-2">All</button>
                <button onClick={() => setSelectedCategory('Woman')} className="text-neutral-800 hover:underline p-1 font-semibold m-2">Ladies</button>
                <button onClick={() => setSelectedCategory('Man')} className="text-neutral-800 hover:underline p-1 font-semibold m-2">Men</button>
                <button onClick={() => setSelectedCategory('Kids')} className="text-neutral-800 hover:underline p-1 font-semibold m-2">Kids</button>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                {filteredProducts.map((product) => (
                    <div key={product.id} className="flex flex-col items-center p-4 h-[450px] m-5 text-center bg-white border-gray-300 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                        <img className="w-48 h-72 object-cover" src={product.image} alt={product.name} />
                        <h3 className="text-md font-semibold mt-4">{product.name}</h3>
                        <p className="text-gray-600 mt-2">Rs. {product.price}</p>
                        <div className="flex">
                            <NavLink to={`/product/${product.id}`} className="bg-neutral-800 text-white px-3 text-sm py-2 m-1 rounded-md hover:bg-neutral-700 transition-colors duration-200">Buy Now</NavLink>
                            <NavLink to={'/cart'} onClick={() => handleAddToCart(product)} className="bg-neutral-800 text-white px-3 text-sm py-2 m-1 rounded-md hover:bg-neutral-700 transition-colors duration-200">Add to Cart</NavLink>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default ProductList;
