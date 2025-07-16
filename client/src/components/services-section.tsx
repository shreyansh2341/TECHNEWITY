import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Settings, GraduationCap, Lightbulb, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Settings,
    title: "Engineering Solutions",
    description: "Our precision-driven engineering team delivers cutting-edge technology solutions with unmatched reliability. From system architecture to implementation, we ensure your projects are built to exceed expectations with robust, scalable, and future-proof designs.",
    color: "text-[hsl(221,83%,53%)]",
    bgColor: "bg-[hsl(221,83%,53%)]/10"
  },
  {
    icon: GraduationCap,
    title: "Coding Education",
    description: "Transform your career with comprehensive coding education tailored to industry demands. Our expert instructors provide hands-on learning experiences, real-world projects, and mentorship to accelerate your journey from beginner to professional developer.",
    color: "text-[hsl(199,89%,48%)]",
    bgColor: "bg-[hsl(199,89%,48%)]/10"
  },
  {
    icon: Lightbulb,
    title: "Innovation Consulting",
    description: "Stay ahead of the competition with our strategic innovation consulting services. We help businesses identify opportunities, implement future-ready solutions, and develop competitive advantages through data-driven insights and forward-thinking strategies.",
    color: "text-green-500",
    bgColor: "bg-green-500/10"
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
    <section id="services" className="py-20 bg-[hsl(210,20%,98%)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[hsl(215,25%,27%)] mb-6">What We Do</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            At TECHNEWITY LABS, we combine technical expertise with innovative thinking to deliver exceptional results that drive your business forward.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="service-card bg-white rounded-2xl shadow-lg hover:shadow-2xl border-0">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className={`inline-flex items-center justify-center w-16 h-16 ${service.bgColor} rounded-2xl mb-4`}>
                      <IconComponent className={`h-8 w-8 ${service.color}`} />
                    </div>
                    <h3 className="text-2xl font-bold text-[hsl(215,25%,27%)] mb-4">{service.title}</h3>
                  </div>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <Button
                    onClick={scrollToContact}
                    variant="ghost"
                    className="p-0 h-auto font-semibold text-[hsl(221,83%,53%)] hover:text-[hsl(221,83%,45%)] hover:bg-transparent"
                  >
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
