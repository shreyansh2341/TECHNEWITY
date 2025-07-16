import { Button } from "@/components/ui/button";
import { ArrowDown, ArrowRight, Code, Cpu, Zap } from "lucide-react";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative dark-gradient-bg min-h-screen flex items-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 border border-green-500/20 rounded-lg floating-animation"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-green-500/10 rounded-full pulse-glow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 border border-green-500/30 rounded-full floating-animation" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-green-500/5 rounded-lg pulse-glow" style={{ animationDelay: '1.5s' }}></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-left">
            <div className="inline-block px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-sm font-medium mb-6">
              Engineering Excellence
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              TECHNEWITY
              <span className="block text-green-400">LABS</span>
            </h1>
            
            <h2 className="text-xl md:text-2xl text-[hsl(240,5%,64.9%)] mb-8 font-light">
              Engineering Solutions That Drive Innovation
            </h2>
            
            <p className="text-lg text-[hsl(240,5%,64.9%)] mb-12 max-w-2xl leading-relaxed">
              Empowering the next generation through cutting-edge coding education and professional engineering services.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => scrollToSection("services")}
                size="lg"
                className="tech-gradient text-white hover:bg-[hsl(142,76%,30%)] text-lg px-8 py-4 rounded-full glow-effect"
              >
                Explore Services
                <ArrowDown className="ml-2 h-5 w-5" />
              </Button>
              <Button
                onClick={() => scrollToSection("contact")}
                variant="outline"
                size="lg"
                className="border-2 border-green-500 text-green-400 hover:bg-green-500 hover:text-white text-lg px-8 py-4 rounded-full"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
          
          {/* Right Column - 3D Visual Elements */}
          <div className="relative hidden lg:block">
            <div className="relative w-full h-96">
              {/* Central floating element */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 tech-gradient rounded-2xl floating-animation glow-effect flex items-center justify-center">
                <Code className="w-16 h-16 text-white" />
              </div>
              
              {/* Orbiting elements */}
              <div className="absolute top-16 left-16 w-16 h-16 bg-[hsl(240,3.7%,15.9%)] border border-green-500/30 rounded-xl floating-animation flex items-center justify-center" style={{ animationDelay: '0.5s' }}>
                <Cpu className="w-8 h-8 text-green-400" />
              </div>
              
              <div className="absolute top-16 right-16 w-16 h-16 bg-[hsl(240,3.7%,15.9%)] border border-green-500/30 rounded-xl floating-animation flex items-center justify-center" style={{ animationDelay: '1s' }}>
                <Zap className="w-8 h-8 text-green-400" />
              </div>
              
              <div className="absolute bottom-16 left-24 w-12 h-12 bg-green-500/20 rounded-full floating-animation pulse-glow" style={{ animationDelay: '1.5s' }}></div>
              
              <div className="absolute bottom-16 right-24 w-20 h-20 border-2 border-green-500/20 rounded-lg floating-animation" style={{ animationDelay: '2s' }}></div>
              
              {/* Background grid */}
              <div className="absolute inset-0 opacity-20">
                <div className="grid grid-cols-6 grid-rows-6 gap-4 w-full h-full">
                  {Array.from({ length: 36 }).map((_, i) => (
                    <div key={i} className="border border-green-500/10 rounded"></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
