import React, { useState } from "react";
import { ShoppingCart, User, Menu, X, Search } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className='bg-white shadow-md'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          <div className='flex items-center'>
            <div className='flex-shrink-0'>
              <span className='text-2xl font-bold text-indigo-600'>
                Pussy21
              </span>
            </div>
            <div className='hidden md:block'>
              <div className='ml-10 flex items-baseline space-x-4'>
                <a
                  href='/'
                  className='text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium'
                >
                  Home
                </a>
                <a
                  href='#'
                  className='text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium'
                >
                  Products
                </a>
                <a
                  href='#'
                  className='text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium'
                >
                  Categories
                </a>
                <a
                  href='#'
                  className='text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium'
                >
                  Sell
                </a>
                <a
                  href='#'
                  className='text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium'
                >
                  About
                </a>
              </div>
            </div>
          </div>
          <div className='hidden md:block'>
            <div className='ml-4 flex items-center md:ml-6'>
              <div className='relative'>
                <input
                  type='text'
                  placeholder='Search...'
                  className='bg-gray-100 rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-indigo-500'
                />
                <Search className='absolute left-3 top-2.5 h-5 w-5 text-gray-400' />
              </div>
              <button className='ml-3 p-1 rounded-full text-gray-600 hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                <User className='h-6 w-6' />
              </button>
              <button className='ml-3 p-1 rounded-full text-gray-600 hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                <ShoppingCart className='h-6 w-6' />
              </button>
            </div>
          </div>
          <div className='-mr-2 flex md:hidden'>
            <button
              onClick={toggleMenu}
              className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'
            >
              <span className='sr-only'>Open main menu</span>
              {isMenuOpen ? (
                <X className='block h-6 w-6' aria-hidden='true' />
              ) : (
                <Menu className='block h-6 w-6' aria-hidden='true' />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className='md:hidden'>
          <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
            <a
              href='#'
              className='text-gray-600 hover:text-indigo-600 block px-3 py-2 rounded-md text-base font-medium'
            >
              Home
            </a>
            <a
              href='#'
              className='text-gray-600 hover:text-indigo-600 block px-3 py-2 rounded-md text-base font-medium'
            >
              Products
            </a>
            <a
              href='#'
              className='text-gray-600 hover:text-indigo-600 block px-3 py-2 rounded-md text-base font-medium'
            >
              Categories
            </a>
            <a
              href='#'
              className='text-gray-600 hover:text-indigo-600 block px-3 py-2 rounded-md text-base font-medium'
            >
              Sell
            </a>
            <a
              href='#'
              className='text-gray-600 hover:text-indigo-600 block px-3 py-2 rounded-md text-base font-medium'
            >
              About
            </a>
          </div>
          <div className='pt-4 pb-3 border-t border-gray-200'>
            <div className='flex items-center px-5'>
              <div className='relative w-full'>
                <input
                  type='text'
                  placeholder='Search...'
                  className='bg-gray-100 w-full rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-indigo-500'
                />
                <Search className='absolute left-3 top-2.5 h-5 w-5 text-gray-400' />
              </div>
            </div>
            <div className='mt-3 px-2 space-y-1'>
              <button className='flex items-center w-full px-3 py-2 text-base font-medium text-gray-600 hover:text-indigo-600 hover:bg-gray-100 rounded-md'>
                <User className='h-6 w-6 mr-3' />
                Account
              </button>
              <button className='flex items-center w-full px-3 py-2 text-base font-medium text-gray-600 hover:text-indigo-600 hover:bg-gray-100 rounded-md'>
                <ShoppingCart className='h-6 w-6 mr-3' />
                Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
