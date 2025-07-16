import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-[hsl(240,10%,3.9%)]/95 backdrop-blur-lg border-b border-[hsl(240,3.7%,15.9%)] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-white tracking-tight">
              TECHNEWITY LABS
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <div className="bg-[hsl(240,3.7%,15.9%)] rounded-full p-1 mr-8">
              <div className="flex items-center space-x-1">
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-[hsl(240,5%,64.9%)] hover:text-white px-4 py-2 text-sm font-medium transition-colors rounded-full hover:bg-[hsl(240,10%,3.9%)]"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection("projects")}
                  className="text-[hsl(240,5%,64.9%)] hover:text-white px-4 py-2 text-sm font-medium transition-colors rounded-full hover:bg-[hsl(240,10%,3.9%)]"
                >
                  Projects
                </button>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-[hsl(240,5%,64.9%)] hover:text-white px-4 py-2 text-sm font-medium transition-colors rounded-full hover:bg-[hsl(240,10%,3.9%)]"
                >
                  Services
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-[hsl(240,5%,64.9%)] hover:text-white px-4 py-2 text-sm font-medium transition-colors rounded-full hover:bg-[hsl(240,10%,3.9%)]"
                >
                  Contact
                </button>
              </div>
            </div>
            <Button
              onClick={() => scrollToSection("contact")}
              className="tech-gradient text-white hover:bg-[hsl(142,76%,30%)] px-6 py-2 rounded-full glow-effect"
            >
              Get Started
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[hsl(240,5%,64.9%)] hover:text-white p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-2 bg-[hsl(240,3.7%,15.9%)] rounded-lg mt-2 mb-4">
            <button
              onClick={() => scrollToSection("home")}
              className="block w-full text-left text-[hsl(240,5%,64.9%)] hover:text-white px-4 py-3 text-sm font-medium transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="block w-full text-left text-[hsl(240,5%,64.9%)] hover:text-white px-4 py-3 text-sm font-medium transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="block w-full text-left text-[hsl(240,5%,64.9%)] hover:text-white px-4 py-3 text-sm font-medium transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left text-[hsl(240,5%,64.9%)] hover:text-white px-4 py-3 text-sm font-medium transition-colors"
            >
              Contact
            </button>
            <div className="px-4 pt-2">
              <Button
                onClick={() => scrollToSection("contact")}
                className="w-full tech-gradient text-white hover:bg-[hsl(142,76%,30%)] rounded-full"
              >
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
