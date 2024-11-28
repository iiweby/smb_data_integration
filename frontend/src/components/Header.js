import react from 'react';

// Updated menu options
const menuOptions = [
  { name: 'Tickets Dashboard', href: '/' },
  { name: 'Contact Us', href: '/contactUs' },
];

const Header = () => {
  return (
    <header className="bg-primary text-white sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center py-4 px-5">
         <img src="/smblogo.png" alt="SMB Logo"  style={{
            backgroundColor: 'white',
            borderRadius: ' 8px',
            padding: '8px',
            width: '180px',        
            height: 'auto',           
          }} ></img>

        {/* Regular Navigation Links */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {menuOptions.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="text-white hover:text-highlight font-montserrat"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
