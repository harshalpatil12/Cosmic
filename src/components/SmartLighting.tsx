import { Smartphone, Clock, Leaf, Settings, Eye, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SmartLighting = () => {
  const features = [
    {
      icon: Clock,
      title: 'Lower Bills',
      description: 'Lights are turned on only when required with time-based schedules and sensors.'
    },
    {
      icon: Settings,
      title: 'Flexibility',
      description: 'Configure scenes on the go to control multiple luminaires with a single command.'
    },
    {
      icon: Leaf,
      title: 'Sustainability',
      description: 'Save energy and reduce materials with lesser wiring compared to traditional automation.'
    }
  ];

  const benefits = [
    { icon: Settings, label: 'Simple to use' },
    { icon: Eye, label: 'Access with ease' },
    { icon: Shield, label: 'Reliability and range' }
  ];

  return (
    <section id="smart" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Smart Lighting Solutions</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Wireless controls help in 3 main areas for your home or commercial space
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-6">
              Makes your lighting work for you
            </h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              ABBY Lighting brings tech expertise to its old art of manufacturing luminaires. 
              Wireless controls are no longer the future - they are the present. We've embraced 
              this technology wholeheartedly at our studio, which is fully configured on Smart Controls.
            </p>
            
            <div className="space-y-6 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">- {feature.title}:</h4>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button size="lg" className="bg-gradient-primary hover:opacity-90">
              SEE HOW IT WORKS
            </Button>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl p-8 text-center">
              <div className="bg-card rounded-full w-32 h-32 mx-auto mb-8 flex items-center justify-center border">
                <Smartphone className="h-16 w-16 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">SMART</h3>
              <p className="text-muted-foreground mb-8">intelligent solutions</p>
              
              <div className="grid grid-cols-3 gap-8 mt-12">
                {benefits.map((benefit, index) => (
                  <div key={index} className="text-center">
                    <div className="bg-card p-4 rounded-lg mb-4 border">
                      <benefit.icon className="h-8 w-8 text-primary mx-auto" />
                    </div>
                    <p className="text-sm text-muted-foreground font-medium">{benefit.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-card rounded-lg p-8 border text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">Tailor-made intelligent solutions</h3>
          <p className="text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            With scene programming, on tap does it all—multiple lights adjust instantly to your preset 
            dimness and color temperature. Effortlessly transform the ambience of any space to suit 
            your mood or purpose. Tap into the future of lighting control.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SmartLighting;