import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Crown, Cpu, Code, Shield, Palette, Layers, Lock } from "lucide-react";

const leadershipTeam = [
  {
    id: 'ceo',
    name: 'Mr. Newprakash Chandra',
    role: 'Founder & Chief Executive Officer',
    description: 'Visionary leader driving strategic growth and market expansion with innovative business solutions',
    imageUrl: '',
    icon: Crown,
    color: 'text-yellow-400',
    bgColor: 'bg-yellow-400/10'
  },
  {
    id: 'cto',
    name: 'Mr. Prasanna Kolambkar',
    role: 'Chief Technology Officer',
    description: 'Technical architect and backend specialist leading cutting-edge engineering excellence',
    imageUrl: '',
    icon: Cpu,
    color: 'text-blue-400',
    bgColor: 'bg-blue-400/10'
  }
];

const developmentTeam = [
  {
    id: 'dev1',
    name: 'Vivek Pandey',
    role: 'ML | Backend Engineer',
    description: 'Machine learning specialist and full-stack engineer building intelligent solutions',
    imageUrl: 'https://i.postimg.cc/fbqSY9sp/Whats-App-Image-2025-07-15-at-19-43-47-8e3a80fd.jpg',
    icon: Code,
    color: 'text-green-400',
    bgColor: 'bg-green-400/10'
  },
  {
    id: 'dev2',
    name: 'Omkar Chandra',
    role: 'Frontend Specialist',
    description: 'Frontend specialist crafting exceptional user experiences and interface design',
    imageUrl: '',
    icon: Palette,
    color: 'text-pink-400',
    bgColor: 'bg-pink-400/10'
  },
  {
    id: 'dev3',
    name: 'Shreyansh Rai',
    role: 'Full Stack Engineer',
    description: 'Full-stack engineer delivering end-to-end application development excellence',
    imageUrl: '',
    icon: Layers,
    color: 'text-purple-400',
    bgColor: 'bg-purple-400/10'
  },
  {
    id: 'dev4',
    name: 'Sagar Gupta',
    role: 'Cybersecurity Specialist',
    description: 'Cybersecurity expert ensuring robust protection and security compliance across all platforms',
    imageUrl: 'https://i.postimg.cc/NFQRGwkk/Whats-App-Image-2025-07-15-at-19-13-31-017795ce.jpg',
    icon: Lock,
    color: 'text-red-400',
    bgColor: 'bg-red-400/10'
  }
];

export default function TeamSection() {
  return (
    <section id="team" className="py-20 bg-[hsl(240,3.7%,15.9%)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-sm font-medium mb-6">
            Our Team
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">World-Class Engineering Team</h2>
          <p className="text-xl text-[hsl(240,5%,64.9%)] max-w-3xl mx-auto">
            Meet the brilliant minds behind TECHNEWITY LABS - a diverse team of industry experts, innovative engineers, and visionary leaders committed to delivering exceptional results.
          </p>
        </div>

        {/* Leadership Team */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Leadership</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {leadershipTeam.map((member) => {
              const IconComponent = member.icon;
              return (
                <Card key={member.id} className="bg-[hsl(240,10%,3.9%)] border-[hsl(240,3.7%,15.9%)] card-hover">
                  <CardContent className="p-8 text-center">
                    <div className="relative mb-6">
                      <Avatar className="w-24 h-24 mx-auto border-2 border-green-500/20">
                        <AvatarImage src={member.imageUrl} alt={member.name} />
                        <AvatarFallback className="bg-[hsl(240,3.7%,15.9%)] text-white text-xl">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div className={`absolute -bottom-2 -right-2 w-12 h-12 ${member.bgColor} border border-green-500/20 rounded-full flex items-center justify-center`}>
                        <IconComponent className={`w-6 h-6 ${member.color}`} />
                      </div>
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2">{member.name}</h4>
                    <p className="text-green-400 font-medium mb-3">{member.role}</p>
                    <p className="text-[hsl(240,5%,64.9%)] leading-relaxed">{member.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Development Team */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Development Team</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {developmentTeam.map((member) => {
              const IconComponent = member.icon;
              return (
                <Card key={member.id} className="bg-[hsl(240,10%,3.9%)] border-[hsl(240,3.7%,15.9%)] card-hover">
                  <CardContent className="p-6 text-center">
                    <div className="relative mb-4">
                      <Avatar className="w-20 h-20 mx-auto border-2 border-green-500/20">
                        <AvatarImage src={member.imageUrl} alt={member.name} />
                        <AvatarFallback className="bg-[hsl(240,3.7%,15.9%)] text-white">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div className={`absolute -bottom-1 -right-1 w-8 h-8 ${member.bgColor} border border-green-500/20 rounded-full flex items-center justify-center`}>
                        <IconComponent className={`w-4 h-4 ${member.color}`} />
                      </div>
                    </div>
                    <h4 className="text-lg font-bold text-white mb-1">{member.name}</h4>
                    <p className="text-green-400 font-medium mb-2 text-sm">{member.role}</p>
                    <p className="text-[hsl(240,5%,64.9%)] text-sm leading-relaxed">{member.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}