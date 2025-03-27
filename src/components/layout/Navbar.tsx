import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronDown, 
  Layout, 
  Users, 
  BookOpen, 
  DollarSign, 
  FileText, 
  LifeBuoy, 
  Boxes, 
  Workflow, 
  Search, 
  Building2, 
  Building,
  LucideIcon
} from 'lucide-react';

interface NavItem {
  name: string;
  icon: React.ReactNode;
  href?: string;
  items?: {
    name: string;
    icon: React.ReactNode;
    description: string;
    href: string;
  }[];
}

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation: NavItem[] = [
    {
      name: 'Platform',
      icon: <Layout className="w-5 h-5" />,
      items: [
        { 
          name: 'Overview', 
          icon: <Search className="w-4 h-4" />, 
          description: 'See how our platform works',
          href: '#overview'
        },
        { 
          name: 'Features', 
          icon: <Boxes className="w-4 h-4" />, 
          description: 'Explore our powerful features',
          href: '#features'
        },
        { 
          name: 'Integration', 
          icon: <Workflow className="w-4 h-4" />, 
          description: 'Connect with your tools',
          href: '#integration'
        }
      ]
    },
    {
      name: 'Solutions',
      icon: <Users className="w-5 h-5" />,
      items: [
        { 
          name: 'Executive Search', 
          icon: <Building2 className="w-4 h-4" />, 
          description: 'High-level recruitment',
          href: '#executive-search'
        },
        { 
          name: 'Professional Recruiting', 
          icon: <Building className="w-4 h-4" />, 
          description: 'Talent acquisition',
          href: '#professional-recruiting'
        },
        { 
          name: 'Staffing Agencies', 
          icon: <Users className="w-4 h-4" />, 
          description: 'Temporary staffing',
          href: '#staffing-agencies'
        },
        { 
          name: 'RPO', 
          icon: <Workflow className="w-4 h-4" />, 
          description: 'Recruitment process outsourcing',
          href: '#rpo'
        }
      ]
    },
    {
      name: 'Resources',
      icon: <BookOpen className="w-5 h-5" />,
      items: [
        { 
          name: 'Blog', 
          icon: <FileText className="w-4 h-4" />, 
          description: 'Latest insights and news',
          href: '#blog'
        },

        { 
          name: 'Support', 
          icon: <LifeBuoy className="w-4 h-4" />, 
          description: 'Get help when you need it',
          href: '#support'
        }
      ]
    },
    { 
      name: 'Pricing',
      icon: <DollarSign className="w-5 h-5" />,
      href: '#pricing'
    }
  ];

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-sm py-0' : 'bg-transparent py-2'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div 
            className="flex-shrink-0"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <a href="/" className="flex items-center">
              <svg
                className="w-8 h-8"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20z"
                  fill="#000"
                />
                <circle cx="16" cy="15" r="3" fill="#fff" />
                <circle cx="24" cy="15" r="3" fill="#fff" />
              </svg>
              <span className="ml-2 text-xl font-bold text-black">TalentMatch</span>
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-6">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.items ? (
                  <>
                    <motion.button 
                      className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors px-3 py-2 group"
                      whileHover={{ scale: 1.05 }}
                      onClick={() => toggleDropdown(item.name)}
                    >
                      {item.icon}
                      {item.name}
                      <motion.span
                        animate={{ rotate: activeDropdown === item.name ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-blue-600" />
                      </motion.span>
                    </motion.button>

                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 w-64 mt-1 bg-white rounded-xl shadow-lg overflow-hidden"
                        >
                          <div className="py-2">
                            {item.items.map((subItem) => (
                              <motion.a
                                key={subItem.name}
                                href={subItem.href}
                                className="flex items-start gap-3 px-4 py-3 hover:bg-gray-50 group"
                                whileHover={{ x: 5 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                              >
                                <div className="mt-1 p-1.5 rounded-lg bg-gray-100 text-gray-600 group-hover:bg-blue-100 group-hover:text-blue-600 transition-colors">
                                  {subItem.icon}
                                </div>
                                <div>
                                  <div className="text-gray-900 font-medium group-hover:text-blue-600 transition-colors">
                                    {subItem.name}
                                  </div>
                                  <div className="text-sm text-gray-500">
                                    {subItem.description}
                                  </div>
                                </div>
                              </motion.a>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <motion.a
                    href={item.href}
                    className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors px-3 py-2"
                    whileHover={{ scale: 1.05 }}
                  >
                    {item.icon}
                    {item.name}
                  </motion.a>
                )}
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <motion.div 
            className="hidden lg:flex lg:items-center lg:gap-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.button 
              className="px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              Sign In
            </motion.button>
            <motion.button 
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-sm hover:shadow-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start free
            </motion.button>
            <motion.button 
              className="px-4 py-2 border border-gray-200 rounded-lg text-gray-700 hover:border-blue-600 hover:text-blue-600 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book a demo
            </motion.button>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-600 hover:text-blue-600 hover:bg-gray-100"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-16 6h16"
                />
              )}
            </svg>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-gray-200 overflow-hidden"
          >
            <div className="px-4 py-2 space-y-1">
              {navigation.map((item) => (
                <div key={item.name} className="py-2">
                  {item.items ? (
                    <>
                      <button 
                        className="w-full flex items-center justify-between gap-2 px-3 py-2 text-gray-700 hover:text-blue-600 font-medium"
                        onClick={() => toggleDropdown(item.name)}
                      >
                        <div className="flex items-center gap-2">
                          {item.icon}
                          {item.name}
                        </div>
                        <motion.span
                          animate={{ rotate: activeDropdown === item.name ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronDown className="w-4 h-4" />
                        </motion.span>
                      </button>
                      <AnimatePresence>
                        {activeDropdown === item.name && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="pl-4"
                          >
                            {item.items.map((subItem) => (
                              <motion.a
                                key={subItem.name}
                                href={subItem.href}
                                className="flex items-center gap-2 px-3 py-2 text-gray-600 hover:text-blue-600"
                                whileHover={{ x: 5 }}
                              >
                                {subItem.icon}
                                <span>{subItem.name}</span>
                              </motion.a>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <motion.a
                      href={item.href}
                      className="flex items-center gap-2 px-3 py-2 text-gray-700 hover:text-blue-600 font-medium"
                      whileHover={{ x: 5 }}
                    >
                      {item.icon}
                      {item.name}
                    </motion.a>
                  )}
                </div>
              ))}
              <div className="pt-4 space-y-2">
                <motion.button 
                  className="w-full px-4 py-2 text-gray-700 hover:text-blue-600"
                  whileHover={{ x: 5 }}
                >
                  Sign In
                </motion.button>
                <motion.button 
                  className="w-full px-4 py-2 bg-indigo-700 text-white rounded-lg hover:bg-blue-700 shadow-sm hover:shadow-md"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Start free
                </motion.button>
                <motion.button 
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg text-gray-700 hover:border-blue-600 hover:text-blue-600"
                  whileHover={{ x: 5 }}
                >
                  Book a demo
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;