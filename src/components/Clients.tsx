import { Star, Quote } from 'lucide-react';

const Clients = () => {
  const testimonials = [
    {
      name: 'Rajesh Sharma',
      position: 'Homeowner',
      company: 'Luxury Villa Project',
      rating: 5,
      text: 'ABBY Lighting transformed our home with their smart lighting solutions. The wireless controls and automated scheduling have not only reduced our electricity bills but also enhanced our living experience significantly.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Priya Patel',
      position: 'Facilities Manager',
      company: 'TechCorp Solutions',
      rating: 5,
      text: 'The corporate office lighting project exceeded our expectations. The productivity-focused lighting zones and natural light integration have improved employee satisfaction and reduced energy costs by 40%.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b522?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Vikram Gupta',
      position: 'Restaurant Owner',
      company: 'The Spice Route',
      rating: 5,
      text: 'ABBY Lighting created the perfect ambiance for our restaurant. The smart lighting adapts throughout the day, creating intimate dinner settings and bright lunch environments automatically.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
    }
  ];

  const clients = [
    'TechCorp Solutions',
    'Mumbai Metropolitan Region',
    'Taj Hotels',
    'Phoenix Mills',
    'DLF Group',
    'Brigade Group',
    'Godrej Properties',
    'Mahindra Lifespaces'
  ];

  return (
    <section id="clients" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">What Our Clients Say</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Trusted by leading businesses and homeowners across India for exceptional lighting solutions
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card rounded-lg p-6 border shadow-sm">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              
              <Quote className="h-8 w-8 text-primary/50 mb-4" />
              
              <p className="text-muted-foreground mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.position}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Client Logos */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-foreground mb-8">Trusted by Leading Organizations</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {clients.map((client, index) => (
              <div key={index} className="bg-card rounded-lg p-6 border text-center hover:shadow-md transition-shadow">
                <p className="font-semibold text-foreground">{client}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-8 text-center mt-16">
          <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Transform Your Space?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join our satisfied clients and experience the future of lighting. 
            Let us create a customized solution for your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors">
              Get Free Consultation
            </button>
            <button className="border border-primary text-primary px-6 py-3 rounded-lg hover:bg-primary/10 transition-colors">
              View Portfolio
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;