import React from 'react';
import { Star, Settings, Truck, Megaphone, HeadphonesIcon, Building, Users, Zap, Monitor } from 'lucide-react';

const ValueChain: React.FC = () => {
  const primaryActivities = [
    {
      icon: <Truck className="h-6 w-6" />,
      title: 'Logística de Entrada',
      subtitle: 'Sourcing Sustentável',
      description: 'Seleção de grãos de alta qualidade de terroirs específicos através do Programa AAA',
      value: 'Garantia de matéria-prima de excelência e fortalecimento da imagem sustentável'
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: 'Operações',
      subtitle: 'Produção de Excelência',
      description: 'Processamento rigoroso com mais de 40 verificações de qualidade',
      value: 'Consistência, sabor e aroma dos Grand Crus, consolidando compromisso ambiental'
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: 'Logística de Saída',
      subtitle: 'Distribuição Exclusiva',
      description: 'Distribuição global através de canais próprios e parcerias estratégicas',
      value: 'Conveniência e exclusividade, controle sobre a experiência de compra'
    },
    {
      icon: <Megaphone className="h-6 w-6" />,
      title: 'Marketing & Vendas',
      subtitle: 'Posicionamento de Luxo',
      description: 'Estratégia focada no luxo, exclusividade e experiência diferenciada',
      value: 'Percepção de valor superior, justificando preço premium e lealdade'
    },
    {
      icon: <HeadphonesIcon className="h-6 w-6" />,
      title: 'Serviço Pós-Venda',
      subtitle: 'Suporte Abrangente',
      description: 'Atendimento multicanal e logística reversa para reciclagem',
      value: 'Satisfação do cliente e reforço do compromisso com economia circular'
    }
  ];

  const supportActivities = [
    {
      icon: <Building className="h-6 w-6" />,
      title: 'Infraestrutura',
      description: 'Centros de produção sustentáveis, boutiques exclusivas e certificação B Corp™'
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Recursos Humanos',
      description: 'Atração e desenvolvimento de especialistas em café e profissionais qualificados'
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: 'P&D e Tecnologia',
      description: 'Inovação contínua em máquinas, cápsulas e agricultura regenerativa'
    },
    {
      icon: <Monitor className="h-6 w-6" />,
      title: 'Gestão de TI',
      description: 'Coordenação da cadeia global e aprimoramento da experiência do cliente'
    }
  ];

  return (
    <section id="value-chain" className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Cadeia de Valor da Nespresso
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Conjunto interligado de atividades que geram e entregam valor superior ao cliente, 
            estabelecendo vantagem competitiva distintiva
          </p>
        </div>

        {/* Support Activities */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Atividades de Apoio
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportActivities.map((activity, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg p-6 border-2 border-purple-200 hover:border-purple-300 transition-all duration-300 hover:shadow-lg"
              >
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <div className="text-purple-700">
                    {activity.icon}
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">{activity.title}</h4>
                <p className="text-sm text-gray-600">{activity.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Primary Activities */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Atividades Primárias
          </h3>
          <div className="space-y-6">
            {primaryActivities.map((activity, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-8 border border-purple-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-purple-700 rounded-xl flex items-center justify-center text-white">
                      {activity.icon}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-bold text-gray-900">{activity.title}</h4>
                        <p className="text-purple-700 font-medium">{activity.subtitle}</p>
                      </div>
                      <div className="mt-2 md:mt-0">
                        <span className="inline-block bg-purple-100 text-purple-800 text-xs px-3 py-1 rounded-full">
                          Atividade {index + 1}
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4">{activity.description}</p>
                    <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                      <p className="text-sm text-purple-900">
                        <strong>Valor Agregado:</strong> {activity.value}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Competitive Advantage */}
        <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-8 border border-purple-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Diferencial Competitivo Central
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Qualidade</h4>
              <p className="text-gray-600 text-sm">
                Grãos de alta qualidade inseparáveis das práticas sustentáveis do Programa AAA
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Settings className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Sustentabilidade</h4>
              <p className="text-gray-600 text-sm">
                Logística reversa como valor agregado para uma solução sustentável
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <HeadphonesIcon className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Experiência</h4>
              <p className="text-gray-600 text-sm">
                Conveniência das cápsulas complementada pela exclusividade das boutiques
              </p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p className="text-gray-700 max-w-4xl mx-auto">
              A sinergia entre qualidade, sustentabilidade e experiência do cliente é o diferencial 
              competitivo central da Nespresso. A empresa não apenas vende café, mas uma experiência 
              completa que começa no campo e termina na xícara, com forte apelo à consciência ambiental.
            </p>
          </div>
        </div>
        {/* Imagem adicionada */}
        <div className="mt-16 text-center">
          <img 
            src="/image.png" 
            alt="Descrição da imagem" 
            className="w-full max-w-4xl mx-auto rounded-xl shadow-2xl border border-blue-200"
 
          />
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Logística reversa como valor agregado para uma solução sustentável
          </p>
        </div>
      </div>
    </section>
  );
};

export default ValueChain;