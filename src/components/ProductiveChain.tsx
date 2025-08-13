import React from 'react';
import { MapPin, TrendingUp, Users, DollarSign } from 'lucide-react';

const ProductiveChain: React.FC = () => {
  const marketData = [
    { segment: 'Torrado e Moído', participation: '> 85%', growth: 'Recuperação para nível de 2012', trend: 'Queda na participação' },
    { segment: 'Solúvel', participation: 'Estável', growth: 'Estável', trend: 'Aumento na participação' },
    { segment: 'Cápsulas', participation: '1,7%', growth: '+55%', trend: 'Aumento na participação' },
  ];

  const chainSteps = [
    { title: 'Cultivo e Plantio', description: 'Seleção de sementes, desenvolvimento em viveiros, correção do solo' },
    { title: 'Colheita e Processamento', description: 'Colheita seletiva, processamento via seca ou úmida' },
    { title: 'Beneficiamento', description: 'Separação, secagem e categorização dos grãos' },
    { title: 'Torrefação e Moagem', description: 'Composição de blends, torra, moagem e embalagem' },
    { title: 'Comercialização', description: 'Distribuição através de atacadistas e exportadores' },
    { title: 'Consumo Final', description: 'Mercado doméstico e internacional' },
  ];

  return (
    <section id="productive-chain" className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Cadeia Produtiva do Café no Brasil
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Um ecossistema vasto e intrincado que se estende desde o cultivo inicial 
            até o produto final que chega ao consumidor
          </p>
        </div>

        {/* Key Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-white rounded-lg p-6 border border-green-200 hover:shadow-lg transition-shadow">
            <MapPin className="h-8 w-8 text-green-700 mb-4" />
            <h3 className="text-2xl font-bold text-gray-900">54,21M</h3>
            <p className="text-gray-600">Sacas produzidas em 2024</p>
          </div>

          <div className="bg-white rounded-lg p-6 border border-green-200 hover:shadow-lg transition-shadow">
            <Users className="h-8 w-8 text-green-700 mb-4" />
            <h3 className="text-2xl font-bold text-gray-900">8,4M</h3>
            <p className="text-gray-600">Empregos diretos e indiretos</p>
          </div>

          <div className="bg-white rounded-lg p-6 border border-green-200 hover:shadow-lg transition-shadow">
            <TrendingUp className="h-8 w-8 text-green-700 mb-4" />
            <h3 className="text-2xl font-bold text-gray-900">330K</h3>
            <p className="text-gray-600">Produtores envolvidos</p>
          </div>

          <div className="bg-white rounded-lg p-6 border border-green-200 hover:shadow-lg transition-shadow">
            <DollarSign className="h-8 w-8 text-green-700 mb-4" />
            <h3 className="text-2xl font-bold text-gray-900">R$ 42,6B</h3>
            <p className="text-gray-600">Contribuição para o PIB (2021)</p>
          </div>
        </div>

        {/* Chain Steps */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Etapas da Cadeia Produtiva
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {chainSteps.map((step, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg p-6 border border-green-200 hover:shadow-lg transition-all duration-300 hover:border-green-300"
              >
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-green-700 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                    {index + 1}
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900">{step.title}</h4>
                </div>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Market Segmentation */}
        <div className="bg-white rounded-2xl p-8 border border-green-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Segmentação do Mercado Brasileiro de Café
          </h3>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Segmento</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Participação (2014)</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Crescimento</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Tendência (2024)</th>
                </tr>
              </thead>
              <tbody>
                {marketData.map((item, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-green-50">
                    <td className="py-3 px-4 font-medium text-gray-900">{item.segment}</td>
                    <td className="py-3 px-4 text-gray-700">{item.participation}</td>
                    <td className="py-3 px-4 text-gray-700">{item.growth}</td>
                    <td className="py-3 px-4 text-gray-700">{item.trend}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
            <p className="text-sm text-gray-700">
              <strong>Inserção da Nespresso:</strong> A Nespresso atua no segmento de cápsulas, 
              que apesar de representar uma pequena fatia (1,7% em 2014), demonstrou crescimento 
              expressivo de 55% e continua em expansão, atingindo projeções de US$ 1,5-2,1 bilhões 
              no mercado brasileiro até 2030-2035.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductiveChain;