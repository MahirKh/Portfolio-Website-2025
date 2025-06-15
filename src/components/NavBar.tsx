import React, { useEffect, useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinks = [{
    name: 'Home',
    href: '#home'
  }, {
    name: 'About',
    href: '#about'
  }, {
    name: 'Experience',
    href: '#experience'
  }, {
    name: 'Contact',
    href: '#contact'
  }];
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };
  return <nav className={`fixed w-full z-10 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-sm shadow-sm border-b border-gray-200/20 py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <div className={`text-xl font-bold ${scrolled ? 'text-gray-900' : 'text-gray-800'}`}>
          <a href="#home" onClick={e => {
          e.preventDefault();
          scrollToSection('#home');
        }}>
            Portfolio
          </a>
        </div>
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map(link => <a key={link.name} href={link.href} onClick={e => {
          e.preventDefault();
          scrollToSection(link.href);
        }} className={`${scrolled ? 'text-gray-700 hover:text-gray-900' : 'text-gray-600 hover:text-gray-800'} transition-colors`}>
              {link.name}
            </a>)}
          <a href="#resume" onClick={e => {
          e.preventDefault();
          window.open('/resume.pdf', '_blank');
        }} className="text-blue-600 hover:text-blue-700 font-medium transition-colors">
            Resume
          </a>
        </div>
        {/* Mobile Navigation Toggle */}
        <button className="md:hidden text-gray-600 focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>
      {/* Mobile Navigation Menu */}
      {isOpen && <div className="md:hidden bg-white/90 backdrop-blur-sm w-full shadow-lg">
          <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
            {navLinks.map(link => <a key={link.name} href={link.href} onClick={e => {
          e.preventDefault();
          scrollToSection(link.href);
        }} className="text-gray-700 hover:text-gray-900 py-2 transition-colors">
                {link.name}
              </a>)}
            <a href="#resume" onClick={e => {
          e.preventDefault();
          window.open('/resume.pdf', '_blank');
        }} className="text-blue-600 hover:text-blue-700 font-medium py-2 transition-colors">
              Resume
            </a>
          </div>
        </div>}
    </nav>;
};