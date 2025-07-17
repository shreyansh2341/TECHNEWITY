import { Shield, Rocket, Users, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Reliability",
    description: "Robust, scalable solutions built to last",
    color: "text-[hsl(221,83%,53%)]",
    bgColor: "bg-[hsl(221,83%,53%)]/10"
  },
  {
    icon: Rocket,
    title: "Innovation",
    description: "Cutting-edge technology and forward-thinking",
    color: "text-[hsl(199,89%,48%)]",
    bgColor: "bg-[hsl(199,89%,48%)]/10"
  },
  {
    icon: Users,
    title: "Expertise",
    description: "Industry-leading professionals and mentors",
    color: "text-green-500",
    bgColor: "bg-green-500/10"
  },
  {
    icon: TrendingUp,
    title: "Results",
    description: "Proven track record of business success",
    color: "text-purple-500",
    bgColor: "bg-purple-500/10"
  }
];

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[hsl(215,25%,27%)] mb-6">Why Choose TECHNEWITY LABS</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Our commitment to engineering excellence sets us apart in delivering world-class solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="text-center">
                <div className={`inline-flex items-center justify-center w-12 h-12 ${feature.bgColor} rounded-xl mb-4`}>
                  <IconComponent className={`h-6 w-6 ${feature.color}`} />
                </div>
                <h4 className="text-lg font-semibold text-[hsl(215,25%,27%)] mb-2">{feature.title}</h4>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
