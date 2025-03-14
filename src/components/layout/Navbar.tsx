import React, { useState, useEffect } from 'react';
import { ChevronDown, Layout, Users, BookOpen, DollarSign, FileText, LifeBuoy, MessageCircle, Boxes, Workflow, Search, Building2, Building } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    {
      name: 'Platform',
      icon: <Layout className="w-5 h-5" />,
      items: [
        { name: 'Overview', icon: <Search className="w-4 h-4" />, description: 'See how our platform works' },
        { name: 'Features', icon: <Boxes className="w-4 h-4" />, description: 'Explore our powerful features' },
        { name: 'Integration', icon: <Workflow className="w-4 h-4" />, description: 'Connect with your tools' }
      ]
    },
    {
      name: 'Solutions',
      icon: <Users className="w-5 h-5" />,
      items: [
        { name: 'Executive Search', icon: <Building2 className="w-4 h-4" />, description: 'High-level recruitment' },
        { name: 'Professional Recruiting', icon: <Building className="w-4 h-4" />, description: 'Talent acquisition' },
        { name: 'Staffing Agencies', icon: <Users className="w-4 h-4" />, description: 'Temporary staffing' },
        { name: 'RPO', icon: <Workflow className="w-4 h-4" />, description: 'Recruitment process outsourcing' }
      ]
    },
    {
      name: 'Resources',
      icon: <BookOpen className="w-5 h-5" />,
      items: [
        { name: 'Blog', icon: <FileText className="w-4 h-4" />, description: 'Latest insights and news' },
        { name: 'Documentation', icon: <BookOpen className="w-4 h-4" />, description: 'Guides and tutorials' },
        { name: 'Support', icon: <LifeBuoy className="w-4 h-4" />, description: 'Get help when you need it' }
      ]
    },
    { 
      name: 'Pricing',
      icon: <DollarSign className="w-5 h-5" />
    }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-colors duration-300 ${isScrolled ? 'bg-white shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
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
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <button className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors px-3 py-2 group">
                  {item.icon}
                  {item.name}
                  {item.items && (
                    <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-transform duration-200 group-hover:-rotate-180" />
                  )}
                </button>
                
                {item.items && (
                  <div className="absolute top-full left-0 w-64 py-3 bg-white rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 -translate-y-2 group-hover:translate-y-0">
                    <div className="relative">
                      {/* Dropdown arrow */}
                      <div className="absolute -top-2 left-6 w-4 h-4 bg-white transform rotate-45" />
                      
                      {/* Dropdown content */}
                      <div className="relative bg-white rounded-xl">
                        {item.items.map((subItem) => (
                          <a
                            key={subItem.name}
                            href={`#${subItem.name.toLowerCase().replace(' ', '-')}`}
                            className="flex items-start gap-3 px-4 py-3 hover:bg-gray-50 group/item"
                          >
                            <div className="mt-1 p-1.5 rounded-lg bg-gray-100 text-gray-600 group-hover/item:bg-blue-100 group-hover/item:text-blue-600 transition-colors">
                              {subItem.icon}
                            </div>
                            <div>
                              <div className="text-gray-900 font-medium group-hover/item:text-blue-600 transition-colors">
                                {subItem.name}
                              </div>
                              <div className="text-sm text-gray-500">
                                {subItem.description}
                              </div>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden lg:flex lg:items-center lg:gap-4">
            <button className="px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors">
              Sign In
            </button>
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-sm hover:shadow-md">
              Start free
            </button>
            <button className="px-4 py-2 border border-gray-200 rounded-lg text-gray-700 hover:border-blue-600 hover:text-blue-600 transition-colors">
              Book a demo
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-600 hover:text-blue-600 hover:bg-gray-100"
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
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden ${
          isOpen ? 'block' : 'hidden'
        } bg-white border-t border-gray-200`}
      >
        <div className="px-4 py-2 space-y-1">
          {navigation.map((item) => (
            <div key={item.name} className="py-2">
              <button className="w-full flex items-center gap-2 px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">
                {item.icon}
                {item.name}
              </button>
              {item.items && (
                <div className="pl-4 mt-1 space-y-1">
                  {item.items.map((subItem) => (
                    <a
                      key={subItem.name}
                      href={`#${subItem.name.toLowerCase().replace(' ', '-')}`}
                      className="flex items-center gap-2 px-3 py-2 text-gray-600 hover:text-blue-600"
                    >
                      {subItem.icon}
                      <span>{subItem.name}</span>
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="pt-4 space-y-2">
            <button className="w-full px-4 py-2 text-gray-700 hover:text-blue-600">
              Sign In
            </button>
            <button className="w-full px-4 py-2 bg-indigo-700 text-white rounded-lg hover:bg-blue-700 shadow-sm hover:shadow-md">
              Start free
            </button>
            <button className="w-full px-4 py-2 border border-gray-200 rounded-lg text-gray-700 hover:border-blue-600 hover:text-blue-600">
              Book a demo
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;