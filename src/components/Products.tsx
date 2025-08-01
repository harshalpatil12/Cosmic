import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import product1 from '@/assets/product-1.jpg';
import product2 from '@/assets/product-2.jpg';
import product3 from '@/assets/product-3.jpg';

const Products = () => {
  const newArrivals = [
    {
      id: 1,
      name: "Roa Deep MPD 240",
      image: product1,
      category: "Downlights"
    },
    {
      id: 2,
      name: "Twinline Track System",
      image: product2,
      category: "Track Lighting"
    },
    {
      id: 3,
      name: "Luna Pendant Series",
      image: product3,
      category: "Pendant Lights"
    }
  ];

  return (
    <section id="products" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-light text-primary mb-4">
            New Arrivals
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto"></div>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {newArrivals.map((product, index) => (
            <Card 
              key={product.id} 
              className="group overflow-hidden border-0 shadow-soft hover:shadow-medium transition-all duration-300 animate-scale-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6 text-center">
                <p className="text-muted-foreground text-sm mb-2">{product.category}</p>
                <h3 className="text-xl font-medium text-primary mb-4">{product.name}</h3>
                <Button variant="outline" size="sm">
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Products Button */}
        <div className="text-center">
          <Button size="lg" variant="outline" className="px-8">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Products;