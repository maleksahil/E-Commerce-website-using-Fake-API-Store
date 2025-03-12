import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { SidebarContext } from '../contexts/SidebarContext';
import { CartContext } from '../contexts/CartContext';
import { BsBag } from 'react-icons/bs';
import { FiMenu, FiX } from 'react-icons/fi';
import Logo from '/public/img/Logo.webp';

const Header = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(false);
  const { setIsOpen, isOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);
  const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem('isAuthenticated') === 'true');
  const [menuOpen, setMenuOpen] = useState(false);

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      setIsActive(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    setIsAuthenticated(false);
    navigate('/login');
  };

  return (
    <header
      className={`${
        isActive ? 'bg-white py-4 shadow-md' : 'bg-transparent py-6'
      } fixed w-full z-10 transition-all flex items-center`}
    >
      <div className="container mx-auto flex items-center justify-between h-full px-4 md:px-8">
        {/* Logo */}
        <Link to="/" aria-label="Home">
          <img className="w-[80px]" src={Logo} alt="Logo" />
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 text-2xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Navigation Links */}
        <nav
          className={`${
            menuOpen ? 'block' : 'hidden'
          } absolute top-20 left-0 w-full bg-white md:bg-transparent md:static md:flex md:items-center md:gap-6 transition-all duration-300`}
        >
          <NavLink to="/product">Product</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/categories">Categories</NavLink>
        </nav>

        {/* Auth & Cart Section */}
        <div className="hidden md:flex items-center gap-4">
          {isAuthenticated ? (
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors"
              aria-label="Logout"
            >
              Logout
            </button>
          ) : (
            <>
              <button
                onClick={() => navigate('/signup')}
                className="bg-blue-500 text-white px-4 py-2 w-[100px] rounded-md hover:bg-blue-600 transition-colors"
                aria-label="Sign Up"
              >
                Sign Up
              </button>
              <button
                onClick={() => navigate('/login')}
                className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors"
                aria-label="Login"
              >
                Login
              </button>
            </>
          )}

          {/* Cart Icon */}
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer flex relative"
            aria-label="Cart"
          >
            <BsBag className="text-2xl" />
            {itemAmount > 0 && (
              <div className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">
                {itemAmount}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

// Reusable NavLink Component
const NavLink = ({ to, children }) => (
  <Link
    to={to}
    className="block md:inline-block text-gray-700 px-4 py-2 md:px-0 hover:text-gray-900 transition-colors"
    aria-label={children}
  >
    {children}
  </Link>
);

export default Header;