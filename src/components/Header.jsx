import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { SidebarContext } from '../contexts/SidebarContext';
import { CartContext } from '../contexts/CartContext';
import { BsBag } from 'react-icons/bs';
import Logo from '/public/img/Logo.webp';

const Header = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(false);
  const { setIsOpen, isOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem('isAuthenticated') === 'true'
  );

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      setIsActive(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll); // Cleanup
  }, []);

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    setIsAuthenticated(false);
    navigate('/login');
  };

  // Handle login
  const handleLogin = () => {
    navigate('/login');
  };

  // Handle signup
  const handleSignup = () => {
    navigate('/signup');
  };

  return (
    <header
      className={`${
        isActive ? 'bg-white py-4 shadow-md' : 'bg-none py-6'
      } fixed w-full z-10 transition-all h-[60px] flex items-center`}
      role="banner"
    >
      <div className="container mx-auto flex items-center justify-between h-full px-4">
        {/* Logo */}
        <Link to="/" aria-label="Home">
          <img className="w-[80px]" src={Logo} alt="Logo" />
        </Link>

        {/* Navigation Links */}
        <nav className="flex items-center gap-6">
          <NavLink to="/product">Product</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/categories">Categories</NavLink>
        </nav>

        {/* Auth Buttons */}
        <div className="flex items-center gap-4">
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
                onClick={handleSignup}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
                aria-label="Sign Up"
              >
                Sign Up
              </button>
              <button
                onClick={handleLogin}
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
    className="text-gray-700 hover:text-gray-900 transition-colors"
    aria-label={children}
  >
    {children}
  </Link>
);

export default Header;