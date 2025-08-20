import React, { useState } from 'react';
import { Coffee, Menu, X } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
}

const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { id: 'hero', label: 'Início' },
    { id: 'introduction', label: 'Introdução' },
    { id: 'productive-chain', label: 'Cadeia Produtiva' },
    { id: 'supply-chain', label: 'Cadeia de Suprimentos' },
    { id: 'value-chain', label: 'Cadeia de Valor' },
    { id: 'kpis', label: 'KPIs' },
    { id: 'differences', label: 'Diferenças' },
    { id: 'improvements', label: 'Melhorias' },
    { id: 'stage4', label: 'Etapa 4' },
    { id: 'beer-game', label: 'BeerGame' },
    { id: 'conclusions', label: 'Conclusões' },
    { id: 'references', label: 'Referências' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-amber-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <Coffee className="h-8 w-8 text-amber-700" />
            <div className="hidden md:block">
              <h1 className="text-lg font-bold text-gray-900">Análise Nespresso</h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  activeSection === item.id
                    ? 'bg-amber-100 text-amber-900'
                    : 'text-gray-700 hover:bg-amber-50 hover:text-amber-800'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-amber-50"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-amber-200 bg-white">
            <nav className="px-2 pt-2 pb-3 space-y-1">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    activeSection === item.id
                      ? 'bg-amber-100 text-amber-900'
                      : 'text-gray-700 hover:bg-amber-50 hover:text-amber-800'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
