
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="py-12 px-6 md:px-12 border-t">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <p className="text-foreground/70 text-sm">
              © {new Date().getFullYear()} Portfolio. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center gap-8">
            <nav>
              <ul className="flex gap-6">
                <li>
                  <a 
                    href="#home" 
                    className="text-sm text-foreground/70 hover:text-foreground transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a 
                    href="#about" 
                    className="text-sm text-foreground/70 hover:text-foreground transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a 
                    href="#projects" 
                    className="text-sm text-foreground/70 hover:text-foreground transition-colors"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a 
                    href="#contact" 
                    className="text-sm text-foreground/70 hover:text-foreground transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
            
            <button
              onClick={scrollToTop}
              className="p-3 rounded-full bg-secondary hover:bg-secondary/70 transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
