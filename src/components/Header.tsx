import { useRouter } from "./Router";
import { useEffect, useState } from "react";

export function Header() {
  const { currentRoute, navigateTo } = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { name: "О НАС", href: "#about" },
    { name: "ПРОЕКТЫ", href: "#projects" },
    { name: "КОНТАКТЫ", href: "#contact" },
  ];

  const handleNavClick = (item: any) => {    
    if (item.href && currentRoute === 'home') {
      // Smooth scroll to section if on home page
      const element = document.querySelector(item.href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (item.href) {
      // Navigate to home then scroll
      navigateTo('home');
      setTimeout(() => {
        const element = document.querySelector(item.href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 py-4 md:py-8 px-4 md:px-8 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <nav className="flex justify-center space-x-6 md:space-x-12">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavClick(item)}
              className="text-xs md:text-sm font-medium text-foreground hover:opacity-60 transition-opacity duration-200 tracking-wide"
            >
              {item.name}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}