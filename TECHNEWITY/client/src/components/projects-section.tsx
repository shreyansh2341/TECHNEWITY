import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Globe, GraduationCap } from "lucide-react";

const projects = [
  {
    id: 'accu-design',
    title: 'ACCU Design',
    description: 'Modern enterprise website featuring responsive design, advanced digital solutions, and scalable architecture for optimal performance.',
    category: 'Enterprise Web Development',
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Tailwind CSS', 'Vercel'],
    icon: Globe,
    color: 'text-blue-400',
    bgColor: 'bg-blue-400/10',
    borderColor: 'border-blue-400/20'
  },
  {
    id: 'engineering-hub',
    title: 'Engineering Hub',
    description: 'Comprehensive learning management system designed specifically for Mumbai University engineering students with interactive features and real-time collaboration.',
    category: 'EdTech Platform',
    technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Redis', 'AWS'],
    icon: GraduationCap,
    color: 'text-purple-400',
    bgColor: 'bg-purple-400/10',
    borderColor: 'border-purple-400/20'
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-16 bg-[hsl(240,10%,3.9%)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-sm font-medium mb-4">
            Our Work
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-lg text-[hsl(240,5%,64.9%)] max-w-2xl mx-auto">
            Delivering enterprise-grade solutions with advanced technology stacks that drive innovation and business transformation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {projects.map((project) => {
            const IconComponent = project.icon;
            return (
              <Card key={project.id} className="bg-[hsl(240,3.7%,15.9%)] border-[hsl(240,3.7%,15.9%)] tech-hover-effect overflow-hidden">
                <div className="relative h-32 bg-gradient-to-br from-green-500/10 to-green-600/5 flex items-center justify-center">
                  <div className={`w-16 h-16 ${project.bgColor} ${project.borderColor} border rounded-xl flex items-center justify-center floating-3d`}>
                    <IconComponent className={`w-8 h-8 ${project.color}`} />
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs font-medium rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-[hsl(240,5%,64.9%)] mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-[hsl(240,10%,3.9%)] text-[hsl(240,5%,64.9%)] text-xs rounded-full border border-[hsl(240,3.7%,15.9%)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

      </div>
    </section>
  );
}