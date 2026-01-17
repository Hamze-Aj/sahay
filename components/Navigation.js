"use client";
import { useState, useEffect, useRef } from 'react';
import Button from './Button';
import Image from 'next/image';
import { Home, Building2, Package, Cpu, Globe, Users, Headset, ChevronDown, FileText, Handshake, ChevronRight, Smartphone, Wallet } from 'lucide-react';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const dropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        (!mobileMenuRef.current || !mobileMenuRef.current.contains(event.target))
      ) {
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
      setActiveSubMenu(null);
    } else {
      setOpenDropdown(name);
      setActiveSubMenu(null);
    }
  };


  const menuItems = [
    { name: 'Home', icon: Home, href: '/', hasDropdown: false },
    {
      name: 'About Us',
      icon: Building2,
      hasDropdown: true,
      items: [
        {
          label: 'Who We Are',
          description: 'Mission, Vision & Values',
          icon: FileText,
          href: '/#company-profile'
        },
        {
          label: 'Governance & Management',
          description: 'Our Team',
          icon: Users,
          href: '/#governance'
        },
        {
          label: 'Partners & Affiliations',
          description: '',
          icon: null,
          href: '/#partners'
        }
      ]
    },
    {
      name: 'Products & Services',
      icon: Package,
      hasDropdown: true,
      items: [
        {
          label: 'Banking Services',
          href: '#',
          subItems: [
            { label: 'Savings Accounts (Wadiah)', href: '/#savings' },
            { label: 'Current Accounts', href: '/#current' },
            { label: 'Islamic Financing Services', href: '/#islamic-finance' }
          ]
        },
        {
          label: 'Financial Products',
          href: '#',
          subItems: [
            { label: 'Sahay Pay Wallet', icon: Smartphone, href: '/#sahaypay' },
            { label: 'E-Murabaha', href: '/#murabaha' }
          ]
        },
        {
          label: 'Business Development Tools',
          href: '/#business-tools'
        }
      ]
    },
    {
      name: 'Technology',
      icon: Cpu,
      hasDropdown: true,
      items: [
        { label: 'Core Banking System', href: '/#core-banking' },
        { label: 'Wallet System', href: '/#wallet-system' },
        { label: 'Mobile Banking System', href: '/#mobile-banking' },
        { label: 'Digital Loan System', href: '/#digital-loan' },
        { label: 'Sahaypay Solutions (B2B)', href: '/#sahaypay', badge: 'New' }
      ]
    },
    {
      name: 'Projects & Impact',
      icon: Globe,
      hasDropdown: true,
      items: [
        { label: 'Financed Projects', href: '/#financed-projects' },
        { label: 'Sector Focus', href: '/#financed-projects' },
        { label: 'Impact & Outcomes', href: '/#impact' }
      ]
    },
    {
      name: 'Get Involved',
      icon: Users,
      hasDropdown: true,
      items: [
        { label: 'Partnership Opportunities', href: '/#partners' },
        { label: 'Investor & Donor Engagement', href: '/#partners' },
        { label: 'Careers', href: '/#contact' }
      ]
    },
    {
      name: 'Support',
      icon: Headset,
      hasDropdown: true,
      items: [
        { label: 'Contact Us', href: '/#contact' },
        { label: 'FAQs', href: '/#faqs' },
        { label: 'Branch Locations', href: '/#locations' },
        { label: 'Feedback & Complaints', href: '/#feedback' }
      ]
    },
  ];

  return (
    <nav className="bg-white w-full shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-32">

          {/* Logo Section */}
          <a href="/" className="flex items-center gap-3 z-50 relative">
            <Image
              src="/logo-full.png"
              alt="Rays Microfinance"
              width={400}
              height={130}
              className="h-32 w-auto object-contain"
              priority
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-8 justify-center flex-1 px-4" ref={dropdownRef}>
            {menuItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.hasDropdown ? (
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className="flex items-center gap-1.5 text-[#333333] text-sm font-normal hover:text-[#4CAF50] transition-colors py-2 outline-none focus:outline-none"
                  >
                    <item.icon className="w-4 h-4 text-[#6A3E9F]" />
                    {item.name}
                    <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${openDropdown === item.name ? 'rotate-180' : ''}`} />
                  </button>
                ) : (
                  <a
                    href={item.href}
                    className="flex items-center gap-1.5 text-[#333333] text-sm font-normal hover:text-[#4CAF50] transition-colors py-2"
                  >
                    <item.icon className="w-4 h-4 text-[#6A3E9F]" />
                    {item.name}
                  </a>
                )}

                {/* Dropdown Menu */}
                {item.hasDropdown && openDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-2 w-72 bg-white border border-gray-100 rounded-xl shadow-xl py-2 flex flex-col z-50 animate-in fade-in slide-in-from-top-2 duration-200 ring-1 ring-black/5">
                    {item.items.map((subItem, index) => (
                      <div
                        key={subItem.label}
                        className="relative"
                        onMouseEnter={() => setActiveSubMenu(subItem.label)}
                        onMouseLeave={() => setActiveSubMenu(null)}
                      >
                        <a
                          href={subItem.href}
                          className={`group px-4 py-3 flex items-center justify-between hover:bg-gray-50 transition-colors ${index !== item.items.length - 1 ? 'border-b border-gray-50' : ''}`}
                        >
                          <div className="flex items-center gap-3">
                            {subItem.icon && (
                              <div className="p-1.5 bg-gray-50 rounded-lg group-hover:bg-white group-hover:shadow-sm transition-all">
                                <subItem.icon className="w-4 h-4 text-[#6A3E9F]" />
                              </div>
                            )}
                            <div className="flex items-center gap-2">
                              {subItem.badge && (
                                <span className="px-2 py-0.5 text-[10px] font-bold text-yellow-800 bg-yellow-400 rounded-full uppercase tracking-wider">
                                  {subItem.badge}
                                </span>
                              )}
                              <div className="flex flex-col">
                                <span className="text-[15px] font-medium text-[#333333] group-hover:text-[#4CAF50] transition-colors leading-tight">
                                  {subItem.label}
                                </span>
                                {subItem.description && (
                                  <span className="text-xs text-gray-500 mt-0.5 font-normal">
                                    {subItem.description}
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>
                          {subItem.subItems && (
                            <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-[#4CAF50]" />
                          )}
                        </a>

                        {/* Nested Sub-menu */}
                        {subItem.subItems && activeSubMenu === subItem.label && (
                          <div className="absolute top-0 left-full ml-2 w-64 bg-white border border-gray-100 rounded-xl shadow-xl py-2 flex flex-col z-50 animate-in fade-in slide-in-from-left-2 duration-200 ring-1 ring-black/5">
                            {subItem.subItems.map((nestedItem, nestedIndex) => (
                              <a
                                key={nestedItem.label}
                                href={nestedItem.href}
                                className={`group px-4 py-2.5 flex items-center gap-3 hover:bg-gray-50 transition-colors ${nestedIndex !== subItem.subItems.length - 1 ? 'border-b border-gray-50' : ''}`}
                              >
                                {nestedItem.icon && (
                                  <div className="p-1.5 bg-gray-50 rounded-lg group-hover:bg-white group-hover:shadow-sm transition-all">
                                    <nestedItem.icon className="w-4 h-4 text-[#6A3E9F]" />
                                  </div>
                                )}
                                <span className="text-sm font-medium text-[#333333] group-hover:text-[#4CAF50] transition-colors">
                                  {nestedItem.label}
                                </span>
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
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
              <a href="/login">
                <Button variant="green" className="px-6 py-2.5 text-sm">
                  Sign In / Register
                </Button>
              </a>
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
        <div ref={mobileMenuRef} className="lg:hidden fixed inset-0 bg-white z-40 pt-24 px-6 overflow-y-auto">
          <div className="flex flex-col space-y-4">
            {menuItems.map((item) => (
              <div key={item.name} className="border-b border-gray-100 pb-4">
                {item.hasDropdown ? (
                  <div
                    className="flex items-center justify-between text-lg font-medium text-[#333333] py-2"
                    onClick={() => toggleDropdown('mobile-' + item.name)}
                  >
                    <div className="flex items-center gap-2">
                      <item.icon className="w-5 h-5 text-[#6A3E9F]" />
                      {item.name}
                    </div>
                    <ChevronDown className={`w-5 h-5 transition-transform ${openDropdown === 'mobile-' + item.name ? 'rotate-180' : ''}`} />
                  </div>
                ) : (
                  <a
                    href={item.href}
                    className="flex items-center justify-between text-lg font-medium text-[#333333] py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <div className="flex items-center gap-2">
                      <item.icon className="w-5 h-5 text-[#6A3E9F]" />
                      {item.name}
                    </div>
                  </a>
                )}

                {/* Mobile Submenu */}
                {item.hasDropdown && openDropdown === 'mobile-' + item.name && (
                  <div className="flex flex-col mt-2 pl-4 space-y-3">
                    {item.items.map((subItem) => (
                      <div key={subItem.label} className="flex flex-col">
                        {subItem.subItems ? (
                          <>
                            <div className="text-[#333333] font-medium text-base py-1">
                              {subItem.label}
                            </div>
                            <div className="flex flex-col pl-4 mt-1 space-y-2 mb-2">
                              {subItem.subItems.map((nestedItem) => (
                                <a
                                  key={nestedItem.label}
                                  href={nestedItem.href}
                                  className="text-gray-500 hover:text-[#4CAF50] text-sm py-1"
                                  onClick={() => setMobileMenuOpen(false)}
                                >
                                  {nestedItem.label}
                                </a>
                              ))}
                            </div>
                          </>
                        ) : (
                          <a
                            href={subItem.href}
                            className="text-gray-500 hover:text-[#4CAF50] text-base py-1"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {subItem.label}
                          </a>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div className="pt-4 pb-8">
              <a href="/login" className="flex w-full">
                <Button variant="green" className="w-full py-3 justify-center text-base">
                  Sign In / Register
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
