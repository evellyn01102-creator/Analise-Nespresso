import React from 'react';
import { Coffee, BookOpen, Users, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <Coffee className="h-8 w-8 text-amber-400" />
              <div>
                <h3 className="text-xl font-bold">Análise Nespresso</h3>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Análise aprofundada das cadeias produtiva, de suprimentos e de valor do café Nespresso 
              sob a perspectiva da Engenharia de Produção na indústria de alimentos.
            </p>
            <div className="flex items-center space-x-4">
              <BookOpen className="h-5 w-5 text-amber-400" />
              <span className="text-sm text-gray-300">Estudo Acadêmico - 2025</span>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Seções Principais</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#introduction" className="hover:text-amber-400 transition-colors">Introdução</a></li>
              <li><a href="#productive-chain" className="hover:text-amber-400 transition-colors">Cadeia Produtiva</a></li>
              <li><a href="#supply-chain" className="hover:text-amber-400 transition-colors">Cadeia de Suprimentos</a></li>
              <li><a href="#value-chain" className="hover:text-amber-400 transition-colors">Cadeia de Valor</a></li>
              <li><a href="#kpis" className="hover:text-amber-400 transition-colors">KPIs</a></li>
              <li><a href="#conclusions" className="hover:text-amber-400 transition-colors">Conclusões</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Conceitos Abordados</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Programa AAA Sustentável</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>Logística Reversa</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span>Cadeia de Valor Premium</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                <span>Economia Circular</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400 mb-4 md:mb-0">
              © 2025 Análise das Cadeias do Café Nespresso. Estudo acadêmico para fins educacionais.
            </p>
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Users className="h-4 w-4" />
                <span>Engenharia de Produção</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Mail className="h-4 w-4" />
                <span>Pesquisa Acadêmica</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
