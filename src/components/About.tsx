import { Award, Users, Zap, Target } from 'lucide-react';
import cosmicLogo from '@/assets/cosmic-logo.png'; // Add this import

const About = () => {
  const stats = [
    { icon: Users, value: '500+', label: 'Happy Clients' },
    { icon: Zap, value: '15+', label: 'Years Experience' },
    { icon: Award, value: '200+', label: 'Projects Completed' },
    { icon: Target, value: '98%', label: 'Customer Satisfaction' },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-foreground mb-4">About Cosmic Light</h2>
          <p className="text-xl text-muted-foreground mb-12">
            Leading the future of intelligent lighting solutions with innovative design and cutting-edge technology
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground">Our Story</h3>
            <p className="text-muted-foreground leading-relaxed">
              Cosmic Light brings tech expertise to its old art of manufacturing luminaires.
              With over a decade of experience in smart lighting solutions, we've been at
              the forefront of lighting innovation.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              The Cosmic Light Studio won an award from Casambi - the global leader of wireless controls -
              for the best Smart Lighting design in a space. Our commitment to excellence and
              innovation has made us a trusted partner for lighting solutions across India.
            </p>
          </div>

          {/* ... rest of the component remains the same ... */}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-6">Our Mission</h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            To revolutionize the lighting industry by creating intelligent, sustainable, and beautiful
            lighting solutions that enhance people's lives while minimizing environmental impact.
            We believe that great lighting isn't just about illumination - it's about creating
            experiences that inspire and empower.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;