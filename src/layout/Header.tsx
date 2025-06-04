import React from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "@/components/theme-provider";

interface HeaderProps {
  setIsOpen: (isOpen: boolean) => void;
  isOpen: boolean;
}

const Header: React.FC<HeaderProps> = ({ setIsOpen, isOpen }) => {
  const location = useLocation();

  const isActive = (path: string) => {
  return location.pathname === path
      ? "dark:text-annas-active text-annas-dark-blue font-semibold"
      : "text-foreground";
  };

  return (
    <header className="absolute w-full py-4 px-4 sm:px-6 md:px-25 text-black dark:text-white">
      <div className="mx-auto flex justify-between items-center animate-fade-left">
        {/* Logo */}
        <div className="text-xl font-bold">Annas's Portfolio</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {[{ path: "/", label: "Home" },
            { path: "/portofolio", label: "Portfolio" },
            { path: "/contact", label: "Contact" },
          ].map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative px-3 py-2 ${isActive(link.path)} transition-all duration-300 group`}
            >
              {link.label}
              <span className={`absolute inset-0 bg-primary/10 transition-transform duration-300 ease-in-out transform origin-left ${location.pathname === link.path ? 'scale-100' : 'scale-0'} group-hover:scale-100`} />
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <Button variant="ghost" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden bg-white/90 dark:bg-annas-dark-blue/90 backdrop-blur-md text-black dark:text-white py-4 flex flex-col gap-5 items-center transition-all">
          {[{ path: "/", label: "Home" },
            { path: "/portofolio", label: "Portfolio" },
            { path: "/contact", label: "Contact" },
          ].map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative px-6 py-2 rounded-md ${isActive(link.path)} w-4/5 text-center transition-all duration-300 group`}
            >
              <span className={`absolute inset-0 bg-primary/10 rounded-md transition-transform duration-300 ease-in-out ${location.pathname === link.path ? 'scale-100' : 'scale-0'} group-hover:scale-100`} />
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;