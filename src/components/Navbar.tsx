import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Fragrances', path: '/fragrances' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
        <div className="bg-white/95 backdrop-blur-sm border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex-shrink-0 relative h-8"
              >
                <Link to="/" className="block">
                  {/* Full logo for top of page */}
                  <motion.img
                    src="/TS LOGO CENTER BLACK.png"
                    alt="Thierry Logo"
                    className="h-8 w-auto"
                    animate={{ 
                      opacity: isScrolled ? 0 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Icon logo for scrolled state */}
                  <motion.img
                    src="/TS LOGO ICON 10CM BLACK.png"
                    alt="Thierry Icon"
                    className="h-8 w-auto absolute top-0 left-0"
                    animate={{ 
                      opacity: isScrolled ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`relative text-sm font-medium tracking-wide uppercase transition-colors duration-300 ${
                      location.pathname === item.path
                        ? 'text-gold'
                        : 'text-primary hover:text-gold'
                    }`}
                  >
                    {item.name}
                    {location.pathname === item.path && (
                      <motion.div
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gold"
                        layoutId="activeTab"
                        initial={false}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </Link>
                ))}
              </div>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden z-50 p-2"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
              >
                {isOpen ? (
                  <X className="w-6 h-6 text-primary" />
                ) : (
                  <Menu className="w-6 h-6 text-primary" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          className={`md:hidden fixed inset-0 bg-white z-40 ${
            isOpen ? 'pointer-events-auto' : 'pointer-events-none'
          }`}
          initial={{ opacity: 0 }}
          animate={{ opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 50 }}
                animate={{
                  opacity: isOpen ? 1 : 0,
                  y: isOpen ? 0 : 50,
                }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Link
                  to={item.path}
                  className={`text-2xl font-serif transition-colors duration-300 ${
                    location.pathname === item.path
                      ? 'text-gold'
                      : 'text-primary hover:text-gold'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </nav>
    </>
  );
};

export default Navbar;
