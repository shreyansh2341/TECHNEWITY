import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, Send } from "lucide-react";
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
    <section id="contact" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[hsl(215,25%,27%)] mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-slate-600">
              Let's discuss how TECHNEWITY LABS can drive your business forward with engineering excellence.
            </p>
          </div>

          <Card className="bg-white rounded-2xl shadow-xl border-0">
            <CardContent className="p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="text-sm font-semibold text-slate-700 mb-2">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      placeholder="Your full name"
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-sm font-semibold text-slate-700 mb-2">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="your.email@company.com"
                      className="mt-2"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="company" className="text-sm font-semibold text-slate-700 mb-2">
                      Company
                    </Label>
                    <Input
                      id="company"
                      type="text"
                      value={formData.company}
                      onChange={(e) => handleInputChange("company", e.target.value)}
                      placeholder="Your company name"
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="service" className="text-sm font-semibold text-slate-700 mb-2">
                      Service Interest
                    </Label>
                    <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="engineering">Engineering Solutions</SelectItem>
                        <SelectItem value="education">Coding Education</SelectItem>
                        <SelectItem value="consulting">Innovation Consulting</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-sm font-semibold text-slate-700 mb-2">
                    Project Details *
                  </Label>
                  <Textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    placeholder="Tell us about your project, goals, and how we can help..."
                    className="mt-2 resize-vertical"
                  />
                </div>
                
                <div className="flex items-center justify-center">
                  <Button
                    type="submit"
                    disabled={submitInquiry.isPending}
                    size="lg"
                    className="bg-[hsl(221,83%,53%)] text-white hover:bg-[hsl(221,83%,45%)] px-8 py-4 text-lg"
                  >
                    {submitInquiry.isPending ? "Sending..." : "Send Inquiry"}
                    <Send className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <Card className="bg-white rounded-xl shadow-lg border-0">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-[hsl(221,83%,53%)]/10 rounded-xl mb-4">
                  <Mail className="h-6 w-6 text-[hsl(221,83%,53%)]" />
                </div>
                <h4 className="font-semibold text-[hsl(215,25%,27%)] mb-2">Email Us</h4>
                <p className="text-slate-600">contact@technewity.com</p>
              </CardContent>
            </Card>
            <Card className="bg-white rounded-xl shadow-lg border-0">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-[hsl(199,89%,48%)]/10 rounded-xl mb-4">
                  <Phone className="h-6 w-6 text-[hsl(199,89%,48%)]" />
                </div>
                <h4 className="font-semibold text-[hsl(215,25%,27%)] mb-2">Call Us</h4>
                <p className="text-slate-600">+1 (555) 123-4567</p>
              </CardContent>
            </Card>
            <Card className="bg-white rounded-xl shadow-lg border-0">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-green-500/10 rounded-xl mb-4">
                  <MapPin className="h-6 w-6 text-green-500" />
                </div>
                <h4 className="font-semibold text-[hsl(215,25%,27%)] mb-2">Visit Us</h4>
                <p className="text-slate-600">San Francisco, CA</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
