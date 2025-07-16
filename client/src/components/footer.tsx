import { Github, Linkedin, Twitter, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[hsl(240,3.7%,15.9%)] text-white py-16 border-t border-[hsl(240,3.7%,15.9%)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="text-3xl font-bold mb-4 text-white">TECHNEWITY LABS</div>
            <p className="text-[hsl(240,5%,64.9%)] mb-6 max-w-md leading-relaxed">
              Engineering excellence through innovative technology solutions, comprehensive education, and strategic consulting services.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/technewity-labs/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[hsl(240,5%,64.9%)] hover:text-green-400 transition-colors p-2 rounded-lg hover:bg-green-500/10 glow-effect"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="font-semibold mb-6 text-white text-lg">Services</h4>
            <ul className="space-y-3 text-[hsl(240,5%,64.9%)]">
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="hover:text-green-400 transition-colors text-left"
                >
                  Engineering Solutions
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="hover:text-green-400 transition-colors text-left"
                >
                  Coding Education
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="hover:text-green-400 transition-colors text-left"
                >
                  Innovation Consulting
                </button>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-6 text-white text-lg">Contact</h4>
            <ul className="space-y-3 text-[hsl(240,5%,64.9%)]">
              <li className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-green-400" />
                <span>contact@technewity.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-green-400" />
                <span>+91 98216 79475</span>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-green-400" />
                <span>Mumbai, India</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-[hsl(240,3.7%,15.9%)] mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-[hsl(240,5%,64.9%)] text-sm">
              &copy; 2025 TECHNEWITY LABS. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0 text-sm">
              <a href="#" className="text-[hsl(240,5%,64.9%)] hover:text-green-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-[hsl(240,5%,64.9%)] hover:text-green-400 transition-colors">
                Terms of Service
              </a>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-[hsl(240,5%,64.9%)] hover:text-green-400 transition-colors"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
