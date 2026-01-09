"use client";
import { useState, useEffect, useRef } from 'react';
import Button from './Button';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownRef = useRef(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = (name) => {
    if (openDropdown === name) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(name);
    }
  };


  const menuItems = [
    {
      name: 'Solutions',
      hasDropdown: true,
      items: [
        'Personal Financing',
        'Business & SME',
        'Agricultural Finance',
        "Women's Banking"
      ]
    },
    {
      name: 'Islamic Finance',
      hasDropdown: true,
      items: [
        'Shariah Framework',
        'Knowledge Center',
        'Social Responsibility'
      ]
    },
    { name: 'Sahaypay', hasDropdown: false },
    {
      name: 'About Us',
      hasDropdown: true,
      items: [
        'Company Profile',
        'Our Reach',
        'Success Stories'
      ]
    },
    { name: 'Contact', hasDropdown: false },
  ];

  return (
    <nav className="bg-white w-full shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo Section */}
          <a href="/" className="flex items-center gap-3 z-50 relative">
            <div className="w-12 h-12 bg-[#4CAF50] rounded flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-base">RMFI</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[#333333] font-semibold text-base leading-tight">
                Rays Microfinance
              </span>
              <span className="text-[#4CAF50] text-xs leading-tight">
                Shariah-Compliant Banking
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2" ref={dropdownRef}>
            {menuItems.map((item) => (
              <div key={item.name} className="relative group">
                <button
                  onClick={() => item.hasDropdown ? toggleDropdown(item.name) : null}
                  className="flex items-center gap-1.5 text-[#333333] text-sm font-normal hover:text-[#6A3E9F] transition-colors py-2 outline-none focus:outline-none"
                >
                  {item.name}
                  {item.hasDropdown && (
                    <svg className={`w-3 h-3 transition-transform duration-200 ${openDropdown === item.name ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </button>

                {/* Dropdown Menu */}
                {item.hasDropdown && openDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-1 w-56 bg-white border border-gray-100 rounded-lg shadow-lg py-2 flex flex-col z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                    {item.items.map((subItem) => (
                      <a
                        key={subItem}
                        href="#"
                        className="px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#6A3E9F] transition-colors text-left"
                      >
                        {subItem}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            {/* Sign In Button (Hidden on Mobile) */}
            <div className="hidden lg:block">
              <Button variant="green" className="px-6 py-2.5 text-sm">
                Sign In / Register
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-gray-600 z-50 relative"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-white z-40 pt-24 px-6 overflow-y-auto">
          <div className="flex flex-col space-y-4">
            {menuItems.map((item) => (
              <div key={item.name} className="border-b border-gray-100 pb-4">
                <div
                  className="flex items-center justify-between text-lg font-medium text-[#333333] py-2"
                  onClick={() => item.hasDropdown && toggleDropdown('mobile-' + item.name)}
                >
                  {item.name}
                  {item.hasDropdown && (
                    <svg className={`w-5 h-5 transition-transform ${openDropdown === 'mobile-' + item.name ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </div>

                {/* Mobile Submenu */}
                {item.hasDropdown && openDropdown === 'mobile-' + item.name && (
                  <div className="flex flex-col mt-2 pl-4 space-y-3">
                    {item.items.map((subItem) => (
                      <a key={subItem} href="#" className="text-gray-500 hover:text-[#4CAF50] text-base">
                        {subItem}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div className="pt-4 pb-8">
              <Button variant="green" className="w-full py-3 justify-center text-base">
                Sign In / Register
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
