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
    <section
      id="home"
      className="relative bg-[#0c0c0c] min-h-screen flex items-center overflow-hidden tech-grid-bg"
    >
      {/* Dynamic Background Tech Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-32 left-1/4 w-16 h-16 border border-green-500/30 rounded-xl floating-3d neon-border"></div>
        <div className="absolute top-48 right-1/3 w-12 h-12 bg-green-500/20 rounded-full pulse-glow" style={{ animationDelay: "1s" }}></div>
        <div className="absolute bottom-32 left-1/3 w-20 h-20 border border-green-500/20 rounded-lg floating-3d" style={{ animationDelay: "2s" }}></div>
        <div className="absolute bottom-48 right-1/4 w-14 h-14 bg-green-500/15 rounded-xl pulse-glow" style={{ animationDelay: "1.5s" }}></div>

        <div className="absolute top-64 left-16 text-green-500/30 font-mono text-sm code-animation">&lt;/&gt;</div>
        <div className="absolute bottom-64 right-16 text-green-500/30 font-mono text-sm code-animation" style={{ animationDelay: "3s" }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="text-left">
            <div className="inline-block px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-sm font-medium mb-6">
              Engineering Excellence
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
              TECHNEWITY
              <span className="block text-green-400">LABS</span>
            </h1>

            <h2 className="text-xl md:text-2xl text-neutral-400 mb-8 font-light">
              Transforming Ideas Into Digital Excellence
            </h2>

            <p className="text-lg text-neutral-400 mb-12 max-w-2xl leading-relaxed">
              We deliver world-class engineering solutions, innovative education platforms, and strategic technology consulting that accelerates business growth and drives sustainable success.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => scrollToSection("services")}
                size="lg"
                className="tech-gradient text-white hover:bg-green-600 text-lg px-8 py-4 rounded-full glow-effect"
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

          {/* Right Column - Enhanced 3D Tech Element */}
          <div className="relative hidden lg:block">
            <div className="relative w-full h-96">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 modern-glass rounded-3xl floating-3d neon-border flex items-center justify-center">
                <div className="relative">
                  <Code className="w-20 h-20 text-green-400" />
                  <div className="absolute inset-0 w-20 h-20 border border-green-500/50 rounded-xl animate-pulse"></div>
                </div>
              </div>

              <div className="absolute top-12 left-12 w-18 h-18 tech-panel rounded-2xl floating-3d flex items-center justify-center" style={{ animationDelay: "0.5s" }}>
                <Cpu className="w-10 h-10 text-green-400" />
              </div>
              <div className="absolute top-12 right-12 w-18 h-18 tech-panel rounded-2xl floating-3d flex items-center justify-center" style={{ animationDelay: "1s" }}>
                <Zap className="w-10 h-10 text-green-400" />
              </div>

              <div className="absolute bottom-20 left-20 w-14 h-14 bg-green-500/30 rounded-full floating-3d pulse-glow" style={{ animationDelay: "1.5s" }}></div>
              <div className="absolute bottom-20 right-20 w-16 h-16 border-2 border-green-500/40 rounded-xl floating-3d" style={{ animationDelay: "2s" }}></div>

              <div className="absolute inset-0 opacity-30">
                <svg className="w-full h-full" viewBox="0 0 400 400">
                  <defs>
                    <linearGradient id="techGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="hsl(142, 76%, 36%)" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="hsl(142, 76%, 36%)" stopOpacity="0.1" />
                    </linearGradient>
                  </defs>
                  <circle cx="200" cy="200" r="150" fill="none" stroke="url(#techGradient)" strokeWidth="1" className="code-animation" />
                  <circle cx="200" cy="200" r="100" fill="none" stroke="url(#techGradient)" strokeWidth="1" className="code-animation" style={{ animationDelay: "2s" }} />
                  <circle cx="200" cy="200" r="50" fill="none" stroke="url(#techGradient)" strokeWidth="1" className="code-animation" style={{ animationDelay: "4s" }} />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
