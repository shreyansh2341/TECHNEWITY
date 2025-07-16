import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, Send, Linkedin } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

interface ContactForm {
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
}

export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactForm>({
    name: "",
    email: "",
    company: "",
    service: "",
    message: ""
  });

  const submitInquiry = useMutation({
    mutationFn: async (data: ContactForm) => {
      const response = await apiRequest("POST", "/api/inquiries", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Success!",
        description: "Thank you for your inquiry! We will get back to you soon.",
      });
      setFormData({
        name: "",
        email: "",
        company: "",
        service: "",
        message: ""
      });
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to submit inquiry. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Required Fields",
        description: "Please fill in all required fields (Name, Email, and Message).",
        variant: "destructive",
      });
      return;
    }

    submitInquiry.mutate(formData);
  };

  const handleInputChange = (field: keyof ContactForm, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-20 bg-[hsl(240,10%,3.9%)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-sm font-medium mb-6">
              Get In Touch
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-[hsl(240,5%,64.9%)] mb-4">
              Let's discuss how TECHNEWITY LABS can drive your business forward with engineering excellence.
            </p>
            <div className="text-sm text-green-400 bg-green-500/10 border border-green-500/20 rounded-lg px-4 py-2 inline-block">
              📧 Form submissions are logged and ready for email setup with your Gmail credentials
            </div>
          </div>

          <Card className="bg-[hsl(240,3.7%,15.9%)] border-[hsl(240,3.7%,15.9%)] rounded-2xl shadow-xl">
            <CardContent className="p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="text-sm font-semibold text-white mb-2">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      placeholder="Your full name"
                      className="mt-2 bg-[hsl(240,10%,3.9%)] border-[hsl(240,3.7%,15.9%)] text-white placeholder:text-[hsl(240,5%,64.9%)]"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-sm font-semibold text-white mb-2">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="your.email@company.com"
                      className="mt-2 bg-[hsl(240,10%,3.9%)] border-[hsl(240,3.7%,15.9%)] text-white placeholder:text-[hsl(240,5%,64.9%)]"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="company" className="text-sm font-semibold text-white mb-2">
                      Company
                    </Label>
                    <Input
                      id="company"
                      type="text"
                      value={formData.company}
                      onChange={(e) => handleInputChange("company", e.target.value)}
                      placeholder="Your company name"
                      className="mt-2 bg-[hsl(240,10%,3.9%)] border-[hsl(240,3.7%,15.9%)] text-white placeholder:text-[hsl(240,5%,64.9%)]"
                    />
                  </div>
                  <div>
                    <Label htmlFor="service" className="text-sm font-semibold text-white mb-2">
                      Service Interest
                    </Label>
                    <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
                      <SelectTrigger className="mt-2 bg-[hsl(240,10%,3.9%)] border-[hsl(240,3.7%,15.9%)] text-white">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent className="bg-[hsl(240,10%,3.9%)] border-[hsl(240,3.7%,15.9%)]">
                        <SelectItem value="engineering" className="text-white hover:bg-[hsl(240,3.7%,15.9%)]">Engineering Solutions</SelectItem>
                        <SelectItem value="education" className="text-white hover:bg-[hsl(240,3.7%,15.9%)]">Coding Education</SelectItem>
                        <SelectItem value="consulting" className="text-white hover:bg-[hsl(240,3.7%,15.9%)]">Innovation Consulting</SelectItem>
                        <SelectItem value="other" className="text-white hover:bg-[hsl(240,3.7%,15.9%)]">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-sm font-semibold text-white mb-2">
                    Project Details *
                  </Label>
                  <Textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    placeholder="Tell us about your project, goals, and how we can help..."
                    className="mt-2 resize-vertical bg-[hsl(240,10%,3.9%)] border-[hsl(240,3.7%,15.9%)] text-white placeholder:text-[hsl(240,5%,64.9%)]"
                  />
                </div>
                
                <div className="flex items-center justify-center">
                  <Button
                    type="submit"
                    disabled={submitInquiry.isPending}
                    size="lg"
                    className="tech-gradient text-white hover:bg-[hsl(142,76%,30%)] px-8 py-4 text-lg rounded-full glow-effect"
                  >
                    {submitInquiry.isPending ? "Sending..." : "Send Inquiry"}
                    <Send className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="mt-16 grid md:grid-cols-4 gap-6">
            <Card className="bg-[hsl(240,10%,3.9%)] border-[hsl(240,3.7%,15.9%)] rounded-xl shadow-lg card-hover">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-green-500/10 border border-green-500/20 rounded-xl mb-4">
                  <Mail className="h-6 w-6 text-green-400" />
                </div>
                <h4 className="font-semibold text-white mb-2">Email Us</h4>
                <p className="text-[hsl(240,5%,64.9%)]">contact@technewity.com</p>
              </CardContent>
            </Card>
            <Card className="bg-[hsl(240,10%,3.9%)] border-[hsl(240,3.7%,15.9%)] rounded-xl shadow-lg card-hover">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-500/10 border border-blue-500/20 rounded-xl mb-4">
                  <Phone className="h-6 w-6 text-blue-400" />
                </div>
                <h4 className="font-semibold text-white mb-2">Call Us</h4>
                <p className="text-[hsl(240,5%,64.9%)]">+91 98216 79475</p>
              </CardContent>
            </Card>
            <Card className="bg-[hsl(240,10%,3.9%)] border-[hsl(240,3.7%,15.9%)] rounded-xl shadow-lg card-hover">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-500/10 border border-purple-500/20 rounded-xl mb-4">
                  <MapPin className="h-6 w-6 text-purple-400" />
                </div>
                <h4 className="font-semibold text-white mb-2">Visit Us</h4>
                <p className="text-[hsl(240,5%,64.9%)]">Mumbai, India</p>
              </CardContent>
            </Card>
            <Card className="bg-[hsl(240,10%,3.9%)] border-[hsl(240,3.7%,15.9%)] rounded-xl shadow-lg card-hover">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-cyan-500/10 border border-cyan-500/20 rounded-xl mb-4">
                  <Linkedin className="h-6 w-6 text-cyan-400" />
                </div>
                <h4 className="font-semibold text-white mb-2">LinkedIn</h4>
                <a 
                  href="https://www.linkedin.com/company/technewity-labs/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[hsl(240,5%,64.9%)] hover:text-cyan-400 transition-colors"
                >
                  Connect with us
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
