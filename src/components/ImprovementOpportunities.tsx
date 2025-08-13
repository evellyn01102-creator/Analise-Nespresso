import React from 'react';
import { Lightbulb, Wrench, Trophy } from 'lucide-react';

const ImprovementOpportunities: React.FC = () => {
  const opportunities = [
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: 'Cadeia Produtiva',
      subtitle: 'Desenvolvimento Setorial',
      color: 'from-green-500 to-emerald-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      improvements: [
        'Promoção de práticas agrícolas mais eficientes e sustentáveis',
        'Desenvolvimento de tecnologias que aumentem produtividade e resiliência',
        'Implementação de sistemas de rastreabilidade robustos',
        'Formulação de políticas públicas de modernização da produção',
        'Otimização da infraestrutura logística setorial'
      ]
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      title: 'Cadeia de Suprimentos',
      subtitle: 'Otimização Operacional',
      color: 'from-blue-500 to-indigo-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      improvements: [
        'Redução de custos através de otimização de rotas e negociação estratégica',
        'Integração logística com sistemas avançados (ERP, SCM)',
        'Automação em processos de produção e armazenamento',
        'Previsão de demanda aprimorada com análises avançadas',
        'Construção de resiliência contra choques externos'
      ]
    },
    {
      icon: <Trophy className="h-8 w-8" />,
      title: 'Cadeia de Valor',
      subtitle: 'Vantagem Competitiva',
      color: 'from-purple-500 to-pink-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      improvements: [
        'Alinhamento das operações com estratégia de posicionamento da marca',
        'Diferenciação através de inovação em produtos e serviços',
        'Melhoria da experiência do cliente em todos os pontos de contato',
        'Análise do ciclo de vida para identificar oportunidades de economia circular',
        'Colaboração com marketing e P&D para criar valor tangível'
      ]
    }
  ];

  const examples = [
    {
      chain: 'Produtiva',
      example: 'Programa AAA da Nespresso',
      description: 'Apoio à agricultura regenerativa e disseminação de tecnologias sustentáveis entre produtores',
      impact: 'Melhoria de 22% nas condições sociais, 52% nas ambientais e 41% nas econômicas dos agricultores'
    },
    {
      chain: 'Suprimentos',
      example: 'Seguro Paramétrico de Safra',
      description: 'Inovação financeira para mitigar riscos climáticos usando dados de satélite',
      impact: 'Estabilização da base de fornecimento e proteção financeira dos pequenos produtores'
    },
    {
      chain: 'Valor',
      example: 'Logística Reversa Premium',
      description: 'Transformação da reciclagem em valor agregado e diferencial competitivo',
      impact: 'Meta de 60% de reciclagem até 2030 e reforço do compromisso sustentável da marca'
    }
  ];

  return (
    <section id="improvements" className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Possibilidades de Melhoria
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Identificação e implementação de oportunidades de gestão e otimização 
            em cada tipo de cadeia sob a perspectiva da Engenharia de Produção
          </p>
        </div>

        <div className="space-y-12 mb-16">
          {opportunities.map((opp, index) => (
            <div 
              key={index}
              className={`${opp.bgColor} rounded-2xl p-8 border-2 ${opp.borderColor} hover:shadow-xl transition-all duration-300`}
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                <div className="flex-shrink-0 text-center lg:text-left">
                  <div className={`w-20 h-20 bg-gradient-to-r ${opp.color} rounded-2xl flex items-center justify-center text-white mb-4 mx-auto lg:mx-0`}>
                    {opp.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{opp.title}</h3>
                  <p className="text-gray-600 font-medium">{opp.subtitle}</p>
                </div>
                
                <div className="flex-grow">
                  <h4 className="text-xl font-semibold text-gray-900 mb-6">
                    Oportunidades de Melhoria:
                  </h4>
                  <div className="space-y-3">
                    {opp.improvements.map((improvement, impIndex) => (
                      <div 
                        key={impIndex}
                        className="flex items-start space-x-3 p-4 bg-white rounded-lg border border-gray-200 hover:border-gray-300 transition-colors"
                      >
                        <div className="w-6 h-6 bg-gray-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-white text-xs font-bold">{impIndex + 1}</span>
                        </div>
                        <p className="text-gray-700">{improvement}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 border border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Exemplos Práticos da Nespresso
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {examples.map((example, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-gray-50 to-slate-100 rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="mb-4">
                  <span className="inline-block bg-indigo-100 text-indigo-800 text-xs px-3 py-1 rounded-full font-medium mb-2">
                    {example.chain}
                  </span>
                  <h4 className="text-lg font-bold text-gray-900">{example.example}</h4>
                </div>
                
                <p className="text-gray-700 mb-4 text-sm">{example.description}</p>
                
                <div className="bg-indigo-50 rounded-lg p-3 border border-indigo-200">
                  <p className="text-xs text-indigo-900">
                    <strong>Impacto:</strong> {example.impact}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImprovementOpportunities;