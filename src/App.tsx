import React, { useState, useEffect } from "react";

interface HeaderProps {
  activeSection: string;
}

const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { id: "hero", label: "Início" },
    { id: "introduction", label: "Introdução" },
    { id: "productive-chain", label: "Cadeia Produtiva" },
    { id: "supply-chain", label: "Cadeia de Suprimentos" },
    { id: "value-chain", label: "Cadeia de Valor" },
    { id: "kpis", label: "KPIs" },
    { id: "chain-differences", label: "Diferenças" },
    { id: "improvement-opportunities", label: "Melhorias" },
    { id: "stage-4", label: "Etapa 4" },
    { id: "beer-game", label: "BeerGame" },
    { id: "conclusions", label: "Conclusões" },
    { id: "references", label: "Referências" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? "bg-[#F5E6DA] shadow-md" : "bg-white"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        <h1 className="font-bold text-lg text-amber-800">☕ Análise Nespresso</h1>
        <ul className="flex space-x-6">
          {menuItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`transition-colors ${
                  activeSection === item.id
                    ? "bg-yellow-200 px-2 py-1 rounded"
                    : "hover:text-amber-700"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
