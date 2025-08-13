import React from 'react';
import { ArrowDown, Coffee, Globe, Recycle, BarChart2, Layers, Wrench, CheckCircle, ChevronDownCircle, FileSliders } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToIntroduction = () => {
    const element = document.getElementById('introduction');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-amber-900/20 via-orange-800/10 to-red-900/20"></div>
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <div className="inline-flex items-center space-x-2 bg-amber-100 px-4 py-2 rounded-full text-amber-800 font-medium mb-6">
            <Coffee className="h-5 w-5" />
            <span>Engenharia de Produção</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Análise das Cadeias do
            <span className="block text-amber-700">Café Nespresso</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed">
            Uma perspectiva da Engenharia de Produção na análise das cadeias produtiva, 
            de suprimentos e de valor, incluindo KPIs, comparações, melhorias e conclusões
          </p>
        </div>

        {/* Grid com 7 tópicos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 border border-amber-200 hover:border-amber-300 transition-all duration-300 hover:shadow-lg">
            <Globe className="h-12 w-12 text-amber-700 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Cadeia Produtiva</h3>
            <p className="text-gray-600">Análise do ecossistema cafeeiro brasileiro e inserção da Nespresso</p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 border border-amber-200 hover:border-amber-300 transition-all duration-300 hover:shadow-lg">
            <Coffee className="h-12 w-12 text-amber-700 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Cadeia de Suprimentos</h3>
            <p className="text-gray-600">Fluxos integrados e gestão sustentável da rede Nespresso</p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 border border-amber-200 hover:border-amber-300 transition-all duration-300 hover:shadow-lg">
            <Recycle className="h-12 w-12 text-amber-700 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Cadeia de Valor</h3>
            <p className="text-gray-600">Criação de valor percebido e vantagem competitiva premium</p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 border border-amber-200 hover:border-amber-300 transition-all duration-300 hover:shadow-lg">
            <BarChart2 className="h-12 w-12 text-amber-700 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">KPIs</h3>
            <p className="text-gray-600">Indicadores-chave para medir eficiência, sustentabilidade e performance</p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 border border-amber-200 hover:border-amber-300 transition-all duration-300 hover:shadow-lg">
            <Layers className="h-12 w-12 text-amber-700 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Diferenças entre as Cadeias</h3>
            <p className="text-gray-600">Comparação estrutural e estratégica das três cadeias analisadas</p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 border border-amber-200 hover:border-amber-300 transition-all duration-300 hover:shadow-lg">
            <Wrench className="h-12 w-12 text-amber-700 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Melhorias</h3>
            <p className="text-gray-600">Oportunidades para otimizar processos e fortalecer a cadeia</p>
          </div>

           <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 border border-amber-200 hover:border-amber-300 transition-all duration-300 hover:shadow-lg">
            <ChevronDownCircle className="h-12 w-12 text-amber-700 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Etapa 4</h3>
            <p className="text-gray-600">Tendências da Indústria 5.0, sustentabilidade e preparação profissional</p>
          </div>

           <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 border border-amber-200 hover:border-amber-300 transition-all duration-300 hover:shadow-lg">
            <FileSliders className="h-12 w-12 text-amber-700 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">BeerGame</h3>
            <p className="text-gray-600">Principais conclusões da dinâmica</p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 border border-amber-200 hover:border-amber-300 transition-all duration-300 hover:shadow-lg">
            <CheckCircle className="h-12 w-12 text-amber-700 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Conclusões</h3>
            <p className="text-gray-600">Síntese dos principais insights e aprendizados do estudo</p>
          </div>
        </div>

        <button
          onClick={scrollToIntroduction}
          className="inline-flex items-center space-x-2 bg-amber-700 hover:bg-amber-800 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
        >
          <span>Explorar Análise</span>
          <ArrowDown className="h-5 w-5" />
        </button>
      </div>
    </section>
  );
};

export default Hero;