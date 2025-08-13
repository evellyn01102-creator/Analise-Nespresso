import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Introduction from './components/Introduction';
import ProductiveChain from './components/ProductiveChain';
import SupplyChain from './components/SupplyChain';
import ValueChain from './components/ValueChain';
import KPIs from './components/KPIs';
import ChainDifferences from './components/ChainDifferences';
import ImprovementOpportunities from './components/ImprovementOpportunities';
import Conclusions from './components/Conclusions';
import References from './components/References';
import Footer from './components/Footer';
import BeerGame from './components/BeerGame';

function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'introduction', 'productive-chain', 'supply-chain', 'value-chain', 'kpis', 'conclusions', 'references'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      <Header activeSection={activeSection} />
      <main>
        <Hero />
        <Introduction />
        <ProductiveChain />
        <SupplyChain />
        <ValueChain />
        <KPIs />
        <ChainDifferences />
        <ImprovementOpportunities />
        <BeerGame />
        <Conclusions />
        <References />
      </main>
      <Footer />
    </div>
  );
}

export default App;