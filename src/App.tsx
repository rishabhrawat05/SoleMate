import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Carousel from './components/Carousel';
import StatsSection from './components/StatsSection';
import CardsSection from './components/CardsSection';
import ChartSection from './components/ChartSection';
import Footer from './components/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Smooth scrolling for the entire page
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <AnimatePresence>
        {isLoading && <Loader isLoading={isLoading} />}
      </AnimatePresence>
      
      {!isLoading && (
        <>
          <Navbar />
          <main>
            <Hero />
            <About />
            <section className="py-20 bg-gray-50 dark:bg-gray-800">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                    Popular <span className="text-blue-600">Products</span>
                  </h2>
                  <p className="text-xl text-gray-600 dark:text-gray-300">
                    Discover what our customers love most
                  </p>
                </div>
                <Carousel />
              </div>
            </section>
            <StatsSection />
            <CardsSection />
            <ChartSection />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;