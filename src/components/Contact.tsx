import { useState } from 'react';
import { Send, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    position: '',
    website: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: '+91 9356747516',
      description: 'Call us for immediate assistance'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'sales.cosmiclight@gmail.com',
      description: 'Send us your questions anytime'
    },
    {
      icon: MapPin,
      title: 'Studio Address',
      details: 'Mumbai, Maharashtra, India',
      description: 'Visit our award-winning studio'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'Mon - Sat: 9:00 AM - 6:00 PM',
      description: 'We\'re here to help during business hours'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Say hi, & we will get back to you shortly!</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Send us an email with your question or concerns. If you would like to discuss your 
            current or potential project with us, please complete the enquiry form provided or 
            contact the Studio directly at +91 9833645212.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Get in Touch</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-medium text-foreground mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="companyName" className="block text-sm font-medium text-foreground mb-2">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        id="companyName"
                        name="companyName"
                        required
                        value={formData.companyName}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
                        placeholder="Your company name"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
                        placeholder="+91 XXXXXXXXXX"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="position" className="block text-sm font-medium text-foreground mb-2">
                        Position
                      </label>
                      <input
                        type="text"
                        id="position"
                        name="position"
                        value={formData.position}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
                        placeholder="Your job title"
                      />
                    </div>
                    <div>
                      <label htmlFor="website" className="block text-sm font-medium text-foreground mb-2">
                        Company Website
                      </label>
                      <input
                        type="url"
                        id="website"
                        name="website"
                        value={formData.website}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
                        placeholder="https://www.example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent resize-none"
                      placeholder="Tell us about your project requirements..."
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-gradient-primary hover:opacity-90">
                    <Send className="h-5 w-5 mr-2" />
                    SUBMIT FORM
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl">Contact Information</CardTitle>
                <CardDescription>
                  Get in touch with our team directly
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                      <info.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{info.title}</h4>
                      <p className="text-foreground font-medium mb-1">{info.details}</p>
                      <p className="text-sm text-muted-foreground">{info.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardContent className="p-6">
                <h4 className="font-semibold text-foreground mb-3">Why Choose ABBY Lighting?</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Award-winning smart lighting designs</li>
                  <li>• 15+ years of industry experience</li>
                  <li>• Wireless control expertise</li>
                  <li>• Energy-efficient solutions</li>
                  <li>• 24/7 customer support</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;