import React, { useState, useEffect, useRef } from 'react';

// Updated menu options
const menuOptions = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/' },
  { name: 'Contact', href: '#' },
  { name: 'Tickets Dashboard', href: '/dashboard' },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null); // Reference for the dropdown menu
  const buttonRef = useRef(null); // Reference for the hamburger button

  // Toggle the menu open or close
  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState); // Toggle the menu
  };

  // Close the menu if the screen is resized to a larger size (desktop)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false); // Close the mobile menu on larger screens
      }
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Handle clicks outside the menu or on the button to close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if click happened outside the menu and the button
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setMenuOpen(false); // Close menu if clicked outside both menu and button
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuRef, buttonRef]);

  return (
    <header className="bg-primary text-white sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center py-4 px-5 relative">
        {/* Brand or Logo */}
        <h1 className="text-2xl font-bold">SMB</h1>

        {/* Hamburger Menu Button for mobile */}
        <button
          ref={buttonRef} // Attach ref to the hamburger button
          className="block md:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          <div className="w-6 h-4 flex flex-col justify-between items-center">
            <span className="block w-full h-0.5 bg-white"></span>
            <span className="block w-full h-0.5 bg-white"></span>
            <span className="block w-full h-0.5 bg-white"></span>
          </div>
        </button>

        {/* Regular Navigation Links - visible on larger screens */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {menuOptions.map((item, index) => (
              <li key={index}>
                <a href={item.href} className="text-accent hover:text-highlight">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Dropdown Menu for Hamburger - floating menu */}
        {menuOpen && (
          <div
            ref={menuRef} // Attach ref to the dropdown menu container
            className="absolute top-full right-0 mt-2 w-48 bg-primary shadow-lg rounded-md"
          >
            <ul className="flex flex-col space-y-2 p-4 text-center">
              {menuOptions.map((item, index) => (
                <li key={index}>
                  <a href={item.href} className="text-accent hover:text-highlight">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
