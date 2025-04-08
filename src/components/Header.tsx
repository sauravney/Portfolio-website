import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 px-6 md:px-12 transition-all duration-300",
        scrolled ? "py-4 glass border-b" : "py-6"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a
          href="#home"
          className="text-xl md:text-2xl font-display font-bold tracking-tight"
        >
          Portfolio
        </a>

        {/* Desktop menu */}
        <nav className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8">
            {menuItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-foreground/80 hover:text-foreground font-medium text-sm tracking-wide transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center space-x-4">
          <ThemeToggle />
          <button
            className="p-2 rounded-md"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span
                className={cn(
                  "block h-0.5 bg-foreground transition-transform duration-300",
                  mobileMenuOpen ? "translate-y-2 rotate-45" : ""
                )}
              ></span>
              <span
                className={cn(
                  "block h-0.5 bg-foreground transition-opacity duration-300",
                  mobileMenuOpen ? "opacity-0" : "opacity-100"
                )}
              ></span>
              <span
                className={cn(
                  "block h-0.5 bg-foreground transition-transform duration-300",
                  mobileMenuOpen ? "-translate-y-2 -rotate-45" : ""
                )}
              ></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden absolute left-0 right-0 top-full glass border-b",
          "transition-all duration-300 overflow-hidden",
          mobileMenuOpen ? "max-h-64 py-6" : "max-h-0 py-0"
        )}
      >
        <nav className="px-6">
          <ul className="flex flex-col space-y-4">
            {menuItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-foreground/80 hover:text-foreground font-medium block py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
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
