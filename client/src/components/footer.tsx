import { Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[hsl(215,25%,27%)] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="text-2xl font-bold mb-4">TECHNEWITY LABS</div>
            <p className="text-slate-300 mb-6 max-w-md">
              Engineering excellence through innovative technology solutions, comprehensive education, and strategic consulting services.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-slate-300 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-slate-300 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-slate-300 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-slate-300">
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="hover:text-white transition-colors text-left"
                >
                  Engineering Solutions
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="hover:text-white transition-colors text-left"
                >
                  Coding Education
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="hover:text-white transition-colors text-left"
                >
                  Innovation Consulting
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-slate-300">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="hover:text-white transition-colors text-left"
                >
                  Contact
                </button>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-600 mt-8 pt-8 text-center text-slate-300">
          <p>&copy; 2024 TECHNEWITY LABS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
