import React from 'react';
import { Truck, Factory, Globe, Recycle, Shield, Users } from 'lucide-react';

const SupplyChain: React.FC = () => {
  const supplySteps = [
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Sourcing Sustentável',
      description: 'Programa AAA com 150k+ agricultores em 18 países',
      details: '93% do café é certificado AAA, 100% das fazendas brasileiras certificadas'
    },
    {
      icon: <Truck className="h-6 w-6" />,
      title: 'Logística de Entrada',
      description: '100% do café verde transportado por ferrovia na Suíça',
      details: 'Priorização de transporte sustentável e otimização de rotas'
    },
    {
      icon: <Factory className="h-6 w-6" />,
      title: 'Produção',
      description: 'Três centros de excelência na Suíça',
      details: 'Avenches, Orbe e Romont com mais de 40 verificações de qualidade'
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: 'Distribuição Global',
      description: 'Exportação para 62 países',
      details: 'Modelo push com gestão centralizada de inventário'
    },
    {
      icon: <Recycle className="h-6 w-6" />,
      title: 'Logística Reversa',
      description: 'Reciclagem de cápsulas de alumínio',
      details: 'Meta de 60% de reciclagem global até 2030'
    }
  ];

  const productionCenters = [
    {
      name: 'Avenches',
      year: '2009',
      investment: 'CHF 500M',
      employees: '700+',
      features: 'Maior instalação e centro de distribuição global'
    },
    {
      name: 'Orbe',
      year: '2002',
      investment: 'CHF 215M',
      employees: '350+',
      features: 'Primeiro centro dedicado, uso de água do rio'
    },
    {
      name: 'Romont',
      year: '2015',
      investment: 'CHF 300M',
      employees: '100+',
      features: 'Mais recente, busca certificação LEED'
    }
  ];

  const risks = [
    { risk: 'Volatilidade do mercado de café', mitigation: 'Seguro paramétrico de safra para agricultores' },
    { risk: 'Dependência de pequenos produtores', mitigation: 'Programa AAA de suporte técnico e financeiro' },
    { risk: 'Mudanças climáticas', mitigation: 'Agricultura regenerativa e diversificação' },
    { risk: 'Baixa taxa de reciclagem', mitigation: 'Expansão de pontos de coleta e campanhas' }
  ];

  return (
    <section id="supply-chain" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            Cadeia de Suprimentos da Nespresso
          </h2>
          <div className="mb-8">
            <img 
              src="/cadeia de suprimentos.png" 
              alt="Cadeia de Suprimentos da Nespresso" 
              className="w-full max-w-4xl mx-auto rounded-xl shadow-2xl border border-blue-200"
            />
          </div>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Gestão meticulosa dos fluxos de materiais e informações com forte pilar na sustentabilidade
          </p>
        </div>

        {/* Supply Chain Steps */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Etapas da Cadeia de Suprimentos
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {supplySteps.map((step, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg p-6 border border-blue-200 hover:shadow-lg transition-all duration-300 hover:border-blue-300"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-700 text-white rounded-lg flex items-center justify-center mr-4">
                    {step.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900">{step.title}</h4>
                </div>
                <p className="text-gray-700 mb-3">{step.description}</p>
                <p className="text-sm text-gray-600">{step.details}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Production Centers */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Centros de Produção na Suíça
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {productionCenters.map((center, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg p-6 border border-blue-200 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-xl font-bold text-gray-900">{center.name}</h4>
                  <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">{center.year}</span>
                </div>
                <div className="space-y-2 mb-4">
                  <p className="text-sm text-gray-600">
                    <strong>Investimento:</strong> {center.investment}
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Funcionários:</strong> {center.employees}
                  </p>
                </div>
                <p className="text-sm text-gray-700">{center.features}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Sustainability Features */}
        <div className="bg-white rounded-2xl p-8 border border-blue-200 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Sustentabilidade na Produção
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Tecnologias Sustentáveis</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Economia de energia de 16-20% na torra</li>
                <li>• Recuperação de calor para aquecimento</li>
                <li>• 100% energia renovável certificada</li>
                <li>• Zero resíduo para aterro</li>
                <li>• Painéis solares para geração elétrica</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Gestão Hídrica</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Coleta e reciclagem de água da chuva</li>
                <li>• Uso de água do rio para resfriamento</li>
                <li>• Economia de 230.000 m³ de gás/ano</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Risk Management */}
        <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-8 border border-red-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Shield className="h-8 w-8 text-red-700 mr-3" />
            Gestão de Riscos e Mitigação
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {risks.map((item, index) => (
              <div key={index} className="bg-white rounded-lg p-4 border border-red-200">
                <h4 className="font-semibold text-gray-900 mb-2">
                  <span className="text-red-600">Risco:</span> {item.risk}
                </h4>
                <p className="text-sm text-gray-700">
                  <span className="text-green-600 font-medium">Mitigação:</span> {item.mitigation}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupplyChain;