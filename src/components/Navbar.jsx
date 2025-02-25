import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { FaShoppingCart } from "react-icons/fa";
import { CgMenuRight } from "react-icons/cg";
import { RxCross2 } from "react-icons/rx";
import { NavLink } from 'react-router-dom';


function Navbar() {
    const { cartItems } = useCart();
    const [menu, setMenu] = useState(false);

    const handleMenu = () => {
        setMenu(!menu);
    }

    const CancelMenu = () => {
        setMenu(false);
    }



    return (
        <div className='bg-[#f8f9fb] p-6 flex justify-between items-center text-black'>
            <h1 className="text-2xl font-bold">
                <NavLink to="/">Shopify</NavLink>
            </h1>

            <ul className={`lg:flex ${menu ? 'flex' : 'hidden'} lg:flex-row flex-col justify-center items-center gap-6 absolute lg:static top-20 left-0 right-0 bg-neutral-800 text-white lg:text-black lg:bg-transparent p-4 lg:p-0 z-10`}>
                <NavLink to="/"  onClick={CancelMenu} className='text-white lg:text-black cursor-pointer p-2' >Home</NavLink>
                <NavLink to="/list" onClick={CancelMenu} className='text-white lg:text-black cursor-pointer p-2'>Products</NavLink>
                <NavLink to="/about" onClick={CancelMenu} className='text-white lg:text-black cursor-pointer p-2'>About</NavLink>
                
            </ul>

            <div className='flex justify-between items-center gap-4'>
                <NavLink to="/cart"className='flex justify-around items-center border-[1px] hover:bg-white hover:text-black hover:border-neutral-800 hover:border-[1px] bg-neutral-800 text-white rounded-md py-1 px-3 gap-2'>
                    <FaShoppingCart />
                    <span>Cart ({cartItems.length})</span>
                </NavLink>

                <div className='lg:hidden gap-3 transition-all cursor-pointer' onClick={handleMenu} >
                    {menu ? <RxCross2 size={35} /> : <CgMenuRight size={35} />}
                </div>
            </div>
        </div>
    );
}

export default Navbar;
