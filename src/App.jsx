import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import TechStack from './components/TechStack';
import Statistics from './components/Statistics'; 
import WhyChooseUs from './components/WhyChooseUs'; 
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Preloader from './components/Preloader'; // 🔁 Import Preloader

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // 2 seconds
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Preloader />;

  return (
    <div className="pt-20 bg-white min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <TechStack /> 
      <Statistics />
      <WhyChooseUs /> 
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
