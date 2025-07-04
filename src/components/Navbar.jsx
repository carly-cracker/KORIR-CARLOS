import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Always show navbar if cursor is near the top (within 100px)
      if (window.scrollY < 100) {
        setShowNavbar(true);
      } else if (currentScrollY > lastScrollY) {
        // scrolling down
        setShowNavbar(false);
      } else {
        // scrolling up
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 w-full bg-gray-950 text-white shadow-md z-50 transform transition-transform duration-300 ${
        showNavbar ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
        <Link
          className="text-xl font-bold text-orange-500 hover:text-orange-400"
          to="/"
        >
          MyPortfolio
        </Link>
        <div className="hidden md:flex md:items-center md:space-x-6">
          <Link className="hover:text-orange-400" to="/">Home</Link>
          <Link className="hover:text-orange-400" to="/about">About</Link>
          <Link className="hover:text-orange-400" to="/projects">Works</Link>
          <Link className="hover:text-orange-400" to="/contacts">Contact</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
