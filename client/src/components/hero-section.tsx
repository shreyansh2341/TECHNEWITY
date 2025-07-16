import { Button } from "@/components/ui/button";
import { ArrowDown, ArrowRight } from "lucide-react";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative gradient-bg min-h-screen flex items-center">
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            TECHNEWITY LABS
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 font-light">
            Engineering Excellence
          </p>
          <p className="text-lg md:text-xl text-blue-50 mb-12 max-w-3xl mx-auto leading-relaxed">
            We combine technical expertise with innovative thinking to deliver exceptional results that drive your business forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => scrollToSection("services")}
              size="lg"
              className="bg-white text-[hsl(221,83%,53%)] hover:bg-blue-50 text-lg px-8 py-4"
            >
              Explore Our Services
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
            <Button
              onClick={() => scrollToSection("contact")}
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-[hsl(221,83%,53%)] text-lg px-8 py-4"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
