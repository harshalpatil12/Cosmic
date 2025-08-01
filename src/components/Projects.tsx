import { ExternalLink, Calendar, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Luxury Residential Villa',
      location: 'Mumbai, Maharashtra',
      year: '2024',
      category: 'Residential',
      description: 'Complete smart lighting solution for a 5000 sq ft luxury villa with automated mood lighting, security integration, and energy-efficient LED systems.',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop',
      features: ['Smart Controls', 'Energy Efficient', 'Security Integration']
    },
    {
      id: 2,
      title: 'Corporate Office Complex',
      location: 'Bangalore, Karnataka',
      year: '2024',
      category: 'Commercial',
      description: 'Modern office lighting design featuring wireless controls, natural light integration, and productivity-focused lighting zones.',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop',
      features: ['Wireless Controls', 'Natural Light Integration', 'Productivity Zones']
    },
    {
      id: 3,
      title: 'Boutique Hotel Lighting',
      location: 'Goa, India',
      year: '2023',
      category: 'Hospitality',
      description: 'Atmospheric lighting design for a beachfront boutique hotel featuring dynamic color changing systems and guest room automation.',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop',
      features: ['Dynamic Color Systems', 'Guest Automation', 'Atmospheric Design']
    },
    {
      id: 4,
      title: 'Shopping Mall Illumination',
      location: 'Delhi, NCR',
      year: '2023',
      category: 'Retail',
      description: 'Large-scale retail lighting project with smart scheduling, accent lighting for displays, and energy-efficient solutions.',
      image: 'https://images.unsplash.com/photo-1567449303035-b93c9a12e19a?w=800&h=600&fit=crop',
      features: ['Smart Scheduling', 'Accent Lighting', 'Energy Efficient']
    },
    {
      id: 5,
      title: 'Restaurant Chain Lighting',
      location: 'Chennai, Tamil Nadu',
      year: '2023',
      category: 'F&B',
      description: 'Ambient lighting design for a premium restaurant chain focusing on dining experience enhancement and brand consistency.',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop',
      features: ['Ambient Design', 'Brand Consistency', 'Dining Experience']
    },
    {
      id: 6,
      title: 'Smart City Street Lighting',
      location: 'Pune, Maharashtra',
      year: '2022',
      category: 'Infrastructure',
      description: 'Municipal street lighting upgrade with IoT sensors, adaptive brightness, and remote monitoring capabilities.',
      image: 'https://images.unsplash.com/photo-1519951043264-389b7c9e5129?w=800&h=600&fit=crop',
      features: ['IoT Sensors', 'Adaptive Brightness', 'Remote Monitoring']
    }
  ];

  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Our Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcasing our expertise across diverse lighting projects, from luxury residences to smart city infrastructure
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="flex items-center gap-4 text-sm">
                  <span className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {project.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {project.year}
                  </span>
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.features.map((feature, index) => (
                    <span 
                      key={index}
                      className="bg-secondary text-secondary-foreground px-2 py-1 rounded text-xs"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                
                <Button variant="outline" size="sm" className="w-full">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-gradient-primary hover:opacity-90">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;