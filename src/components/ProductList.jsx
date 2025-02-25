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
            <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4'>
                {filteredProducts.map((product) => (
                    <NavLink to={`/product/${product.id}`} key={product.id} className="flex flex-col items-center p-1 m-2 text-center">
                        <img className="w-56 h-64 md:w-48 md:h-72 object-cover" src={product.image} alt={product.name} />
                        <h3 className="mt-2 overflow-hidden text-center h-6 sm:h-auto font-semibold">{product.name}</h3>
                        <p className="text-gray-600 mt-2">Rs. {product.price}</p>
                        
                    </NavLink>
                ))}
            </div>
        </>
    );
}

export default ProductList;
