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
    <nav className="bg-white/95 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-[hsl(221,83%,53%)]">
              TECHNEWITY LABS
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <button
                onClick={() => scrollToSection("home")}
                className="text-slate-600 hover:text-[hsl(221,83%,53%)] px-3 py-2 text-sm font-medium transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-slate-600 hover:text-[hsl(221,83%,53%)] px-3 py-2 text-sm font-medium transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-slate-600 hover:text-[hsl(221,83%,53%)] px-3 py-2 text-sm font-medium transition-colors"
              >
                Contact
              </button>
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-[hsl(221,83%,53%)] text-white hover:bg-[hsl(221,83%,45%)]"
              >
                Get Started
              </Button>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-600 hover:text-[hsl(221,83%,53%)] p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-2">
            <button
              onClick={() => scrollToSection("home")}
              className="block w-full text-left text-slate-600 hover:text-[hsl(221,83%,53%)] px-3 py-2 text-sm font-medium transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="block w-full text-left text-slate-600 hover:text-[hsl(221,83%,53%)] px-3 py-2 text-sm font-medium transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left text-slate-600 hover:text-[hsl(221,83%,53%)] px-3 py-2 text-sm font-medium transition-colors"
            >
              Contact
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
              className="w-full mt-2 bg-[hsl(221,83%,53%)] text-white hover:bg-[hsl(221,83%,45%)]"
            >
              Get Started
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
