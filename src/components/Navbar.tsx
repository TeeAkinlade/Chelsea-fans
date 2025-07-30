import { useState, useEffect } from "react";
import { overlay } from "../constants/media";
import { LuPanelRightOpen, LuPanelLeftOpen } from "react-icons/lu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }

      // Determine active section
      const sections = ['home', 'fixtures', 'shop', 'community'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
      setActiveSection(sectionId);
    }
  };

  const isActive = (section: string) => activeSection === section;

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isMenuOpen]);


  return (
    <nav 
      className={`sticky top-0 z-50 rounded transition-all duration-300 ${hasScrolled ? 'lg:pt-10' : 'lg:pt-10'}`}
      style={!hasScrolled ? { 
        backgroundImage: `url(${overlay})`, 
        backgroundRepeat: 'repeat', 
        backgroundSize: 'auto' 
      } : {}}
    >
      <div className="max-w-4xl mx-auto flex items-center justify-between h-16 px-4 md:px-8 shadow-sm shadow-[#0000000F] bg-white">
        <div className="text-xl tracking-widest font-Bebas">OCS NAJIA</div>
        <ul className="hidden md:flex gap-10 list-none">
          <li 
            className={`text-base cursor-pointer transition-colors duration-300 hover:scale-105 ${
              isActive('home') ? 'text-[#034694] font-medium' : 'text-gray-900 hover:text-[#034694]'
            }`}
            onClick={() => scrollToSection('home')}
          >
            Home
          </li>
          <li 
            className={`text-base cursor-pointer transition-colors duration-300 hover:scale-105 ${
              isActive('fixtures') ? 'text-[#034694] font-medium' : 'text-gray-900 hover:text-[#034694]'
            }`}
            onClick={() => scrollToSection('fixtures')}
          >
            Fixtures
          </li>
          <li 
            className={`text-base cursor-pointer transition-colors duration-300 hover:scale-105 ${
              isActive('shop') ? 'text-[#034694] font-medium' : 'text-gray-900 hover:text-[#034694]'
            }`}
            onClick={() => scrollToSection('shop')}
          >
            Shop
          </li>
          <li 
            className={`text-base cursor-pointer transition-colors duration-300 hover:scale-105 ${
              isActive('community') ? 'text-[#034694] font-medium' : 'text-gray-900 hover:text-[#034694]'
            }`}
            onClick={() => scrollToSection('community')}
          >
            Community
          </li>
        </ul>
        
        <button 
          className="md:hidden text-gray-900 focus:outline-none transition-transform duration-300 hover:scale-110"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
            {isMenuOpen ? (
              <LuPanelLeftOpen size={24} />
            ) : (
              <LuPanelRightOpen size={24} />
            )}
        </button>
        <div className={`
          absolute top-full left-0 right-0 bg-white shadow-md md:hidden 
          overflow-hidden transition-all duration-500 ease-in-out 
          ${isMenuOpen ? "max-h-screen h-screen opacity-100" : "max-h-0 h-0 opacity-0"}
        `}>

          <ul className="flex flex-col list-none mt-10">
            <li 
              className={`px-4 py-3 text-base hover:bg-gray-50 cursor-pointer transition-all duration-300 transform hover:translate-x-2 border-b border-gray-100 ${
                isActive('home') ? 'text-[#034694] font-medium' : 'text-gray-900 hover:text-[#034694]'
              }`}
              onClick={() => scrollToSection('home')}
            >
              Home
            </li>
            <li 
              className={`px-4 py-3 text-base hover:bg-gray-50 cursor-pointer transition-all duration-300 transform hover:translate-x-2 border-b border-gray-100 ${
                isActive('fixtures') ? 'text-[#034694] font-medium' : 'text-gray-900 hover:text-[#034694]'
              }`}
              onClick={() => scrollToSection('fixtures')}
            >
              Fixtures
            </li>
            <li 
              className={`px-4 py-3 text-base hover:bg-gray-50 cursor-pointer transition-all duration-300 transform hover:translate-x-2 border-b border-gray-100 ${
                isActive('shop') ? 'text-[#034694] font-medium' : 'text-gray-900 hover:text-[#034694]'
              }`}
              onClick={() => scrollToSection('shop')}
            >
              Shop
            </li>
            <li 
              className={`px-4 py-3 text-base hover:bg-gray-50 cursor-pointer transition-all duration-300 transform hover:translate-x-2 ${
                isActive('community') ? 'text-[#034694] font-medium' : 'text-gray-900 hover:text-[#034694]'
              }`}
              onClick={() => scrollToSection('community')}
            >
              Community
            </li>
            <li className="px-4 py-3 transform hover:scale-105 transition-transform duration-300 mt-10">
              <button className="w-full bg-[#034694] text-white rounded-full px-6 py-2 font-semibold text-sm hover:bg-blue-900 transition-colors duration-300 cursor-pointer">
                🔥 JOIN THE SQUAD
              </button>
            </li>
          </ul>
        </div>
        <button className="hidden md:block bg-[#034694] text-white rounded-full px-6 py-2 font-semibold text-sm hover:bg-blue-900 transition-all duration-300 hover:scale-105 cursor-pointer">
          🔥 JOIN THE SQUAD
        </button>
      </div>
    </nav>
  );
};

export default Navbar;