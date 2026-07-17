'use client'
import LilyFashion from '../../../public/lilyfashionlogo.png'
import NavLink from '../common/NavLink';
import Link from 'next/link';
import { useContext } from 'react';
import { CartContext } from '@/contex/CartProvider';
import { RiShoppingCartLine } from 'react-icons/ri';
import Image from 'next/image';

const Navbar = () => {
  const { cart } = useContext(CartContext);
  const links = <>
    <li><NavLink href={"/"}>Home</NavLink></li>
    <li><NavLink href={"/products"}>Products</NavLink></li>
  </>

  return (
    <div>
      <div className="navbar max-w-screen-2xl mx-auto fixed top-0 z-50 justify-between py-4 lg:px-26 bg-white/60 shadow-sm">
        <div className="flex ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              {
                links
              }
            </ul>
          </div>
          <Link href={"/"} className="btn btn-ghost  ">
            <Image className='h-14 w-20 object-cover' src={LilyFashion} alt='Lily fashion logo' />
          </Link>
         
        </div>
        <div className="flex gap-24">
           <div className='navbar-end lg:hidden'>
            <Link href={'/cart'} className="w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center  relative transition-colors">
              <RiShoppingCartLine size={26} />
              {
                cart?.length > 0 && <span className="absolute -top-1 -right-1 text-white bg-red-500  text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                  {cart?.length}
                </span>
              }
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex gap-8">
            <ul className="flex gap-8  menu-horizontal px-1">
              {
                links
              }
            </ul>
            <Link href={'/cart'} className="w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center  relative transition-colors">
              <RiShoppingCartLine size={26} />
              {
                cart?.length > 0 && <span className="absolute -top-1 -right-1 text-white bg-red-500  text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                  {cart?.length}
                </span>
              }
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;