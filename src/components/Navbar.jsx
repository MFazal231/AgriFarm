import { Link, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md shadow-md"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/assets/logo.jpg"
              alt="AgriFarm Logo"
              className="w-12 h-12 object-contain rounded-lg"
            />
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `font-medium transition-colors relative group ${
                  isActive ? 'text-agri-green' : 'text-white hover:text-agri-green'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  Home
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-agri-green transition-all ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </>
              )}
            </NavLink>
            <NavLink
              to="/farmer"
              className={({ isActive }) =>
                `font-medium transition-colors relative group ${
                  isActive ? 'text-agri-green' : 'text-white hover:text-agri-green'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  Farmer
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-agri-green transition-all ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </>
              )}
            </NavLink>
            <NavLink
              to="/consumer"
              className={({ isActive }) =>
                `font-medium transition-colors relative group ${
                  isActive ? 'text-agri-green' : 'text-white hover:text-agri-green'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  Consumer
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-agri-green transition-all ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </>
              )}
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white hover:text-agri-green transition-colors">
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;

