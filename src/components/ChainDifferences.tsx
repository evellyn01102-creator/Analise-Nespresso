import React from 'react';
import { Network, Link, Award } from 'lucide-react';

const ChainDifferences: React.FC = () => {
  const chainTypes = [
    {
      icon: <Network className="h-8 w-8" />,
      title: 'Cadeia Produtiva',
      color: 'from-green-500 to-emerald-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      scope: 'Setor Inteiro',
      focus: 'Macroambiente',
      description: 'Conjunto de etapas técnicas e econômicas que transformam a matéria-prima em produto final em todo o setor cafeeiro brasileiro.',
      coverage: 'Desde o cultivo (plantio, florada, colheita) até beneficiamento, torrefação, moagem, produção de solúveis e comercialização em larga escala.',
      example: 'Todo o setor cafeeiro brasileiro, onde a Nespresso representa um segmento específico de cafés especiais e porcionados.'
    },
    {
      icon: <Link className="h-8 w-8" />,
      title: 'Cadeia de Suprimentos',
      color: 'from-blue-500 to-indigo-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      scope: 'Rede Específica',
      focus: 'Fluxos Operacionais',
      description: 'Rede integrada de organizações que colaboram para mover produtos, informações e recursos até o consumidor.',
      coverage: 'Sourcing de café AAA, transporte ferroviário, centros de produção suíços, distribuição global e logística reversa para reciclagem.',
      example: 'Rede específica da Nespresso: do Programa AAA até a reciclagem das cápsulas, incluindo todos os fluxos logísticos.'
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Cadeia de Valor',
      color: 'from-purple-500 to-pink-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      scope: 'Empresa Individual',
      focus: 'Vantagem Competitiva',
      description: 'Conjunto de atividades que agregam valor percebido pelo cliente dentro de uma empresa específica.',
      coverage: 'Atividades primárias (logística, operações, marketing) e de apoio (P&D, RH, infraestrutura) que criam diferenciação premium.',
      example: 'Como a Nespresso cria valor através da qualidade AAA, produção sustentável, marketing de luxo e experiência premium.'
    }
  ];

  return (
    <section id="differences" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Diferenças entre as Cadeias
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Compreendendo as distinções fundamentais entre cadeia produtiva, 
            cadeia de suprimentos e cadeia de valor
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {chainTypes.map((chain, index) => (
            <div 
              key={index}
              className={`${chain.bgColor} rounded-2xl p-8 border-2 ${chain.borderColor} hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${chain.color} rounded-xl flex items-center justify-center text-white mb-6`}>
                {chain.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{chain.title}</h3>
              
              <div className="space-y-4 mb-6">
                <div>
                  <span className="inline-block bg-white px-3 py-1 rounded-full text-sm font-medium text-gray-700 mr-2">
                    {chain.scope}
                  </span>
                  <span className="inline-block bg-white px-3 py-1 rounded-full text-sm font-medium text-gray-700">
                    {chain.focus}
                  </span>
                </div>
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed">{chain.description}</p>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Cobertura:</h4>
                  <p className="text-sm text-gray-600">{chain.coverage}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Exemplo Nespresso:</h4>
                  <p className="text-sm text-gray-600">{chain.example}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8 border border-amber-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Síntese Conceitual
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold">1</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Cadeia Produtiva</h4>
              <p className="text-sm text-gray-600">Descreve o setor como um todo</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold">2</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Cadeia de Suprimentos</h4>
              <p className="text-sm text-gray-600">Delineia os fluxos operacionais específicos</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold">3</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Cadeia de Valor</h4>
              <p className="text-sm text-gray-600">Explica como criar e capturar valor</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChainDifferences;