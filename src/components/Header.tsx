import { useState } from 'react';
import { Search, Menu, X, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import cosmicLogo from '@/assets/cosmic-logo.png'; // You'll need to add this image

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const navItems = [
    { name: 'About Us', href: '#about' },
    { name: 'Products', href: '#products', hasDropdown: true },
    { name: 'Smart Lighting', href: '#smart' },
    { name: 'Projects', href: '#projects' },
    { name: 'Clients', href: '#clients' },
    { name: 'Contact', href: '#contact' },
  ];

  const indoorProducts = [
    "Downlight",
    "Linear Light", 
    "Stripe Light",
    "Track Light"
  ];

  const outdoorProducts = [
    "Stripe Light",
    "Linear Grazer",
    "Flood Light", 
    "Inground",
    "Wall Light",
    "Bollard",
    "Post Tops",
    "Pole Tops",
    "Street Light",
    "Window Accent",
    "Under water Light"
  ];

  const controlOptions = [
    "Casambi",
    "DALI", 
    "DMX512",
    "Wireless DMX",
    "Magno Dim",
    "Local Dim",
    "1-10V Dimmable",
    "Mains Dim",
    "Roto Dim"
  ];

  const dimmingOptions = [
    "Analog Dimmable / CCR",
    "Hybrid Dimmable", 
    "PWM Dimmable"
  ];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Handle search functionality here
      console.log('Searching for:', searchQuery);
      // You can add your search logic here
      setSearchQuery('');
      setIsSearchOpen(false);
    }
  };

  const handleSearchKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  };

  return (
    <header className="bg-card/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src={cosmicLogo} 
              alt="Cosmic Light Logo" 
              className="h-10 w-auto"
            />
            <div>
              <h1 className="text-xl font-bold text-primary">COSMIC</h1>
              <p className="text-xs text-muted-foreground -mt-1">LIGHT</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <div
                    className="flex items-center space-x-1 cursor-pointer text-foreground hover:text-accent transition-colors duration-200 text-sm font-medium"
                    onMouseEnter={() => setIsProductsDropdownOpen(true)}
                    onMouseLeave={() => setIsProductsDropdownOpen(false)}
                  >
                    <span>{item.name}</span>
                    {isProductsDropdownOpen ? (
                      <ChevronUp className="h-4 w-4 transition-transform duration-200" />
                    ) : (
                      <ChevronDown className="h-4 w-4 transition-transform duration-200" />
                    )}
                    
                    {/* Products Dropdown */}
                    {isProductsDropdownOpen && (
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 z-50">
                        <div className="bg-card border border-border rounded-lg shadow-strong min-w-[800px] animate-fade-in relative overflow-hidden">
                          {/* Background Image Overlay */}
                          <div className="absolute inset-0 opacity-10">
                            <div className="w-full h-full bg-gradient-to-r from-primary/5 to-transparent"></div>
                          </div>
                          
                          <div className="relative p-8">
                            <div className="grid grid-cols-3 gap-8">
                              {/* Left Section - Centered Indoor & Outdoor */}
                              <div className="col-span-1 flex flex-col items-center">
                                <div className="w-full max-w-xs">
                                  {/* Indoor Section */}
                                  <div className="mb-8">
                                    <h3 className="text-lg font-semibold text-primary mb-4 pb-2 border-b border-border text-center">
                                      Indoor
                                    </h3>
                                    <ul className="space-y-2">
                                      {indoorProducts.map((product, index) => (
                                        <li key={index}>
                                          <a 
                                            href={`#${product.toLowerCase().replace(/\s+/g, '-')}`}
                                            className="text-muted-foreground hover:text-accent transition-colors duration-200 text-sm block py-1 text-center"
                                          >
                                            {product}
                                          </a>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>

                                  {/* Outdoor Section */}
                                  <div>
                                    <h3 className="text-lg font-semibold text-primary mb-4 pb-2 border-b border-border text-center">
                                      Outdoor
                                    </h3>
                                    <ul className="space-y-2">
                                      {outdoorProducts.map((product, index) => (
                                        <li key={index}>
                                          <a 
                                            href={`#${product.toLowerCase().replace(/\s+/g, '-')}`}
                                            className="text-muted-foreground hover:text-accent transition-colors duration-200 text-sm block py-1 text-center"
                                          >
                                            {product}
                                          </a>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                </div>
                              </div>

                              {/* Right Section - Control & Dimming Options */}
                              <div className="col-span-2 grid grid-cols-2 gap-8">
                                {/* Control Options */}
                                <div>
                                  <h3 className="text-lg font-semibold text-primary mb-4 pb-2 border-b border-border">
                                    Control Options
                                  </h3>
                                  <ul className="space-y-2">
                                    {controlOptions.map((option, index) => (
                                      <li key={index}>
                                        <a 
                                          href={`#${option.toLowerCase().replace(/\s+/g, '-')}`}
                                          className="text-muted-foreground hover:text-accent transition-colors duration-200 text-sm block py-1"
                                        >
                                          {option}
                                        </a>
                                      </li>
                                    ))}
                                  </ul>
                                </div>

                                {/* Dimming Options */}
                                <div>
                                  <h3 className="text-lg font-semibold text-primary mb-4 pb-2 border-b border-border">
                                    Dimming Options
                                  </h3>
                                  <ul className="space-y-2">
                                    {dimmingOptions.map((option, index) => (
                                      <li key={index}>
                                        <a 
                                          href={`#${option.toLowerCase().replace(/\s+/g, '-')}`}
                                          className="text-muted-foreground hover:text-accent transition-colors duration-200 text-sm block py-1"
                                        >
                                          {option}
                                        </a>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            </div>

                            {/* Call-to-Action Buttons */}
                            <div className="flex gap-4 mt-8 pt-6 border-t border-border">
                              <Button className="bg-accent hover:bg-accent-light text-accent-foreground">
                                Product Configurator
                              </Button>
                              <Button variant="outline">
                                View All Product Series
                              </Button>
                            </div>
                          </div>

                          {/* Arrow pointing up */}
                          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-card border-l border-t border-border rotate-45"></div>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                href={item.href}
                className="text-foreground hover:text-accent transition-colors duration-200 text-sm font-medium"
              >
                {item.name}
              </a>
                )}
              </div>
            ))}
          </nav>

          {/* Search & Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* <div className="relative">
              {isSearchOpen ? (
                <form onSubmit={handleSearchSubmit} className="flex items-center">
                  <Input
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={handleSearchKeyDown}
                    className="w-64 h-9 pr-8 animate-fade-in"
                    autoFocus
                  />
                  <Button
                    type="submit"
                    variant="ghost"
                    size="icon"
                    className="absolute right-1 h-7 w-7 text-muted-foreground hover:text-foreground"
                  >
                    <Search className="h-4 w-4" />
                  </Button>
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={() => {
                      setIsSearchOpen(false);
                      setSearchQuery('');
                    }}
                    className="ml-2 h-9 w-9 text-muted-foreground hover:text-foreground"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </form>
              ) : (
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-muted-foreground hover:text-foreground"
                  onClick={() => setIsSearchOpen(true)}
                  aria-label="Open search"
                >
              <Search className="h-5 w-5" />
            </Button>
              )}
            </div> */}
            
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-accent transition-colors duration-200 text-sm font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;