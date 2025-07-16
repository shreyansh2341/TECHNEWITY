import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Globe, GraduationCap } from "lucide-react";

const projects = [
  {
    id: 'accu-design',
    title: 'ACCU Design',
    description: 'A comprehensive company website built for ACCU, featuring modern design principles and responsive architecture. Complete digital presence solution with advanced functionality.',
    category: 'Web Development',
    image: '/api/placeholder/400/250',
    technologies: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    icon: Globe,
    color: 'text-blue-400',
    bgColor: 'bg-blue-400/10',
    borderColor: 'border-blue-400/20'
  },
  {
    id: 'engineering-hub',
    title: 'Engineering Hub',
    description: 'Educational platform designed specifically for Mumbai University engineering students. Comprehensive learning management system with interactive features and course materials.',
    category: 'Education Platform',
    image: '/api/placeholder/400/250',
    technologies: ['React', 'Express.js', 'PostgreSQL', 'WebRTC'],
    icon: GraduationCap,
    color: 'text-purple-400',
    bgColor: 'bg-purple-400/10',
    borderColor: 'border-purple-400/20'
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-[hsl(240,10%,3.9%)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-sm font-medium mb-6">
            Our Work
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Featured Projects</h2>
          <p className="text-xl text-[hsl(240,5%,64.9%)] max-w-3xl mx-auto">
            Showcasing our expertise through successful implementations and innovative solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project) => {
            const IconComponent = project.icon;
            return (
              <Card key={project.id} className="bg-[hsl(240,3.7%,15.9%)] border-[hsl(240,3.7%,15.9%)] card-hover overflow-hidden">
                <div className="relative h-48 bg-gradient-to-br from-green-500/10 to-green-600/5 flex items-center justify-center">
                  <div className={`w-20 h-20 ${project.bgColor} ${project.borderColor} border rounded-2xl flex items-center justify-center`}>
                    <IconComponent className={`w-10 h-10 ${project.color}`} />
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs font-medium rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                  <p className="text-[hsl(240,5%,64.9%)] mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-[hsl(240,10%,3.9%)] text-[hsl(240,5%,64.9%)] text-sm rounded-full border border-[hsl(240,3.7%,15.9%)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <Button
                    variant="ghost"
                    className="p-0 h-auto font-semibold text-green-400 hover:text-green-300 hover:bg-transparent"
                  >
                    View Project
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="text-center mt-12">
          <Button
            className="tech-gradient text-white hover:bg-[hsl(142,76%,30%)] px-8 py-3 rounded-full glow-effect"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
}