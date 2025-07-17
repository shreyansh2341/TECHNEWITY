import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Settings, GraduationCap, Lightbulb, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Settings,
    title: "Engineering Solutions",
    description: "Enterprise-grade engineering solutions built with precision and excellence. We architect, develop, and deploy scalable systems that drive business transformation with unmatched reliability and performance.",
    color: "text-blue-400",
    bgColor: "bg-blue-400/10",
    borderColor: "border-blue-400/20"
  },
  {
    icon: GraduationCap,
    title: "Coding Education",
    description: "Industry-leading coding education programs designed for the modern developer. Master cutting-edge technologies through hands-on projects, expert mentorship, and real-world applications that accelerate career growth.",
    color: "text-purple-400",
    bgColor: "bg-purple-400/10",
    borderColor: "border-purple-400/20"
  },
  {
    icon: Lightbulb,
    title: "Innovation Consulting",
    description: "Strategic technology consulting that transforms businesses for the digital future. We identify opportunities, implement cutting-edge solutions, and build competitive advantages through data-driven innovation strategies.",
    color: "text-green-400",
    bgColor: "bg-green-400/10",
    borderColor: "border-green-400/20"
  }
];

export default function ServicesSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-20 bg-[hsl(240,3.7%,15.9%)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-sm font-medium mb-6">
            What We Do
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Comprehensive Technology Solutions</h2>
          <p className="text-xl text-[hsl(240,5%,64.9%)] max-w-3xl mx-auto">
            From enterprise-grade engineering to cutting-edge education platforms, we deliver transformative solutions that accelerate business growth and empower innovation across industries.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="bg-[hsl(240,10%,3.9%)] border-[hsl(240,3.7%,15.9%)] card-hover">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className={`inline-flex items-center justify-center w-16 h-16 ${service.bgColor} ${service.borderColor} border rounded-2xl mb-4`}>
                      <IconComponent className={`h-8 w-8 ${service.color}`} />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  </div>
                  <p className="text-[hsl(240,5%,64.9%)] mb-6 leading-relaxed">
                    {service.description}
                  </p>

                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
