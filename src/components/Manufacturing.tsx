import { Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Manufacturing = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Video/Image Section */}
          <div className="relative group">
            <Card className="overflow-hidden border-0 shadow-medium">
              <div className="aspect-video bg-gradient-to-br from-muted to-secondary relative">
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button
                    size="lg"
                    className="rounded-full h-16 w-16 bg-accent hover:bg-accent-light shadow-strong group-hover:scale-110 transition-transform duration-300"
                  >
                    <Play className="h-6 w-6 ml-1" fill="currentColor" />
                  </Button>
                </div>
                
                {/* Video Thumbnail */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent" />
                
                {/* YouTube Icon */}
                <div className="absolute top-4 left-4 text-white/80">
                  <Play className="h-8 w-8" />
                </div>
              </div>
            </Card>
          </div>

          {/* Content Section */}
          <div className="animate-slide-in-right">
            <h2 className="text-4xl lg:text-5xl font-light text-primary mb-6">
              Manufacturing Facility
            </h2>
            
            <div className="space-y-6 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                We encourage you to visit our fully integrated ISO certified state-of-the-art factory so that 
                you have full confidence in our strength & competencies.
              </p>
              
              <p className="text-lg leading-relaxed">
                However, if you can't make time to visit, please view our company video that takes you through 
                our in-house production processes.
              </p>
            </div>

            <div className="mt-8">
              <Button size="lg" className="bg-accent hover:bg-accent-light text-accent-foreground">
                Learn More
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-6 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">ISO</div>
                <div className="text-sm text-muted-foreground">Certified Facility</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">100%</div>
                <div className="text-sm text-muted-foreground">In-house Production</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Manufacturing;