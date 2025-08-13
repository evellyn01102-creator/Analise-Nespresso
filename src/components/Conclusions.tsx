import React from 'react';
import { CheckCircle, Target, Zap, Users } from 'lucide-react';

const Conclusions: React.FC = () => {
  const keyFindings = [
    {
      icon: <Target className="h-6 w-6" />,
      title: 'Agente de Resegmentação',
      description: 'A Nespresso atua como agente de resegmentação e valorização na cadeia produtiva do café, impulsionando demanda por cafés de alta qualidade e práticas sustentáveis.'
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: 'Integração e Resiliência',
      description: 'A cadeia de suprimentos demonstra integração meticulosa e busca por resiliência através de inovações como o seguro paramétrico de safra.'
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: 'Criação de Valor Superior',
      description: 'A cadeia de valor evidencia habilidade em criar valor percebido superior através da sinergia entre qualidade, sustentabilidade e experiência premium.'
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Visão Sistêmica Essencial',
      description: 'Para o engenheiro de produção, a compreensão das três cadeias é indispensável para uma visão sistêmica e otimização holística.'
    }
  ];

  return (
    <section id="conclusions" className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Conclusões
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Síntese dos principais insights da análise das cadeias do café Nespresso 
            sob a perspectiva da Engenharia de Produção
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {keyFindings.map((finding, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-8 border border-amber-200 hover:shadow-lg transition-all duration-300 hover:border-amber-300"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <div className="text-amber-700">
                    {finding.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{finding.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{finding.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 border border-amber-200 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Principais Contribuições da Análise
          </h3>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-6">
              A análise das cadeias produtiva, de suprimentos e de valor do café Nespresso revela uma 
              intrincada teia de operações e estratégias que sustentam o sucesso da marca no mercado 
              global de cafés porcionados. A Nespresso não é apenas uma participante da vasta cadeia 
              produtiva do café brasileiro, mas um agente de resegmentação e valorização.
            </p>
            
            <p className="mb-6">
              A cadeia de suprimentos da Nespresso exemplifica integração e busca por resiliência, 
              desde o sourcing sustentável até os centros de produção de ponta na Suíça. A logística 
              reversa para reciclagem das cápsulas de alumínio constitui um pilar estratégico, embora 
              enfrente desafios operacionais relacionados ao engajamento do consumidor.
            </p>
            
            <p className="mb-6">
              A cadeia de valor da Nespresso demonstra habilidade excepcional em criar valor percebido 
              superior ao cliente. A sinergia entre qualidade do café, práticas sustentáveis e 
              experiência do cliente é o cerne de sua vantagem competitiva, com inovação contínua 
              impulsionando crescimento e adaptabilidade.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-2xl p-8 border border-amber-300">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Implicações para a Engenharia de Produção
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Perspectiva Sistêmica</h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                A compreensão das três cadeias é indispensável para uma visão sistêmica que capacita 
                a otimização de processos, gestão de riscos e identificação de oportunidades de 
                inovação em todos os níveis – do setorial ao operacional e estratégico.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Aplicação Prática</h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                A capacidade de analisar interdependências entre cultivo, fabricação, distribuição 
                e logística reversa, sempre com foco na criação de valor para o consumidor, 
                diferencia o engenheiro de produção na indústria de alimentos.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Sustentabilidade</h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                Ao aplicar essa perspectiva holística, é possível não apenas garantir eficiência 
                e rentabilidade, mas também promover sustentabilidade e responsabilidade social 
                em toda a cadeia.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Futuro do Setor</h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                Esta abordagem integrada assegura o futuro de produtos como o café Nespresso, 
                equilibrando performance econômica com impacto social e ambiental positivo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Conclusions;