import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Products from '@/components/Products';
import SmartLighting from '@/components/SmartLighting';
import Projects from '@/components/Projects';
import Clients from '@/components/Clients';
import Manufacturing from '@/components/Manufacturing';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <Products />
      <SmartLighting />
      <Projects />
      <Clients />
      <Manufacturing />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
