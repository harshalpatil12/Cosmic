import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import cosmicLogo from '@/assets/cosmic-logo.png'; // Add this import

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src={cosmicLogo} 
                alt="Cosmic Light Logo" 
                className="h-8 w-auto"
              />
              <div>
                <h3 className="text-xl font-bold">COSMIC</h3>
                <p className="text-sm text-primary-foreground/80">LIGHT</p>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/80">
              Premium lighting solutions for commercial and residential spaces.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['About Us', 'Products', 'Projects', 'Clients', 'Contact'].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase().replace(' ', '-')}`}
                    className="text-primary-foreground/80 hover:text-accent transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Products</h4>
            <ul className="space-y-3">
              {['Downlights', 'Track Lighting', 'Pendant Lights', 'Smart Lighting', 'Outdoor Lighting'].map((product) => (
                <li key={product}>
                  <a 
                    href="#products"
                    className="text-primary-foreground/80 hover:text-accent transition-colors duration-200"
                  >
                    {product}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                <p className="text-primary-foreground/80 text-sm">
                  123 Lighting Avenue<br />
                  Industrial District<br />
                  City, State 12345
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent flex-shrink-0" />
                <p className="text-primary-foreground/80 text-sm">+1 (555) 123-4567</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent flex-shrink-0" />
                <p className="text-primary-foreground/80 text-sm">info@abbylighting.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-light mt-8 pt-8 text-center">
          <p className="text-primary-foreground/80 text-sm">
            © 2024 Cosmic Light. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;