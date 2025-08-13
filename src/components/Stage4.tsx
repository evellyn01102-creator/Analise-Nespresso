import React from 'react';
import { Cpu, Shield, TrendingUp, Recycle, GraduationCap } from 'lucide-react';

const Stage4: React.FC = () => {
  const blocks = [
    {
      icon: <Cpu className="h-8 w-8" />,
      title: 'Tendências e Tecnologias da Indústria 5.0',
      subtitle: 'Relação com a Nespresso',
      color: 'from-blue-500 to-indigo-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      content: 'A Indústria 5.0 foca no ser humano, utilizando a tecnologia para empoderá-lo e valorizar habilidades cognitivas e criativas através da colaboração entre humanos e máquinas/IA. Outras tendências incluem IA e IoT. A Nespresso se alinha a essas tendências ao focar na sustentabilidade e na redução de desperdícios em toda a sua cadeia de produção, desde o uso de energia renovável e reutilização de água nas fábricas até a reciclagem de cápsulas com o consumidor final.'
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Consciência na Indústria Alimentícia',
      subtitle: 'Validação pela Palestra',
      color: 'from-green-500 to-emerald-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      content: 'É crucial na indústria alimentícia ter atenção aos processos de qualidade para evitar contaminação e garantir a durabilidade dos produtos, incluindo a embalagem. A palestra se relaciona com o material "Futuro da Alimentação: Inovações e Sustentabilidade", concretizando as tendências da Indústria 5.0, fornecendo exemplos de sustentabilidade e resiliência na indústria de alimentos, como proteínas alternativas e agricultura vertical, e o uso de IA para otimizar processos. O artigo amplia as oportunidades para o engenheiro de produção, mostrando a relevância da disciplina para moldar o futuro da alimentação de forma sustentável e eficiente.'
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: 'Tendências e Desafios para a Indústria do Café',
      subtitle: 'Perspectivas da Nespresso',
      color: 'from-amber-500 to-orange-600',
      bgColor: 'bg-amber-50',
      borderColor: 'border-amber-200',
      content: 'As tendências incluem a sustentabilidade como imperativo (práticas agrícolas regenerativas e uso eficiente de recursos), a conscientização do consumidor (demanda por produtos orgânicos, de comércio justo e com menor impacto ambiental), e a economia circular (valorização da redução e reaproveitamento de subprodutos). Os desafios envolvem o crescimento populacional versus produção sustentável, mudanças climáticas impactando a oferta de café, desperdício de alimentos em várias fases da cadeia, e o impacto ambiental das embalagens de uso único.'
    },
    {
      icon: <Recycle className="h-8 w-8" />,
      title: 'Cadeia Sustentável e Logística Reversa',
      subtitle: 'Sistema Estruturado da Nespresso',
      color: 'from-purple-500 to-pink-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      content: 'A Nespresso possui uma cadeia sustentável estruturada. No sourcing, o Programa AAA envolve mais de 150.000 agricultores, garantindo que 93% do café verde venha de fazendas com práticas sustentáveis. O transporte de café verde por via férrea é uma prática sustentável. Na logística reversa, há um sistema de coleta com mais de 200 pontos no Brasil. As cápsulas são recicladas, separando o alumínio para novos produtos e transformando a borra de café em adubo orgânico. A meta é atingir 60% de taxa de reciclagem global até 2030.'
    },
    {
      icon: <GraduationCap className="h-8 w-8" />,
      title: 'Preparação do Engenheiro de Gestão',
      subtitle: 'Competências para a Indústria',
      color: 'from-red-500 to-rose-600',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200',
      content: 'Para atuar na indústria de alimentos, um engenheiro de gestão deve se especializar em sustentabilidade e economia circular, dominar ferramentas de análise de dados e IA para otimizar processos, ter expertise em gestão de cadeias de suprimentos resilientes, estar atualizado em inovação de produtos e processos, ter visão estratégica e colaborativa, e focar no consumidor consciente. O profissional deve ser analítico, inovador, com consciência ambiental e social, e capaz de liderar transformações em cadeias de valor.'
    }
  ];

  return (
    <section id="stage4" className="py-20 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-slate-100 px-4 py-2 rounded-full text-slate-800 font-medium mb-6">
            <Cpu className="h-5 w-5" />
            <span>Análise Avançada</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Etapa 4
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Tendências da Indústria 5.0, sustentabilidade e preparação profissional 
            na perspectiva da engenharia de produção aplicada ao setor alimentício
          </p>
        </div>

        <div className="space-y-8">
          {blocks.map((block, index) => (
            <div 
              key={index}
              className={`${block.bgColor} rounded-2xl p-8 border-2 ${block.borderColor} hover:shadow-xl transition-all duration-300`}
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                <div className="flex-shrink-0 text-center lg:text-left">
                  <div className={`w-20 h-20 bg-gradient-to-r ${block.color} rounded-2xl flex items-center justify-center text-white mb-4 mx-auto lg:mx-0`}>
                    {block.icon}
                  </div>
                  <div className="mb-4">
                    <span className="inline-block bg-white px-3 py-1 rounded-full text-sm font-medium text-gray-700 mb-2">
                      Bloco {index + 1}
                    </span>
                  </div>
                </div>
                
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {block.title}
                  </h3>
                  <p className="text-lg font-medium text-gray-700 mb-6">
                    {block.subtitle}
                  </p>
                  
                  <div className="bg-white rounded-lg p-6 border border-gray-200">
                    <p className="text-gray-700 leading-relaxed">
                      {block.content}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 border border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Síntese da Etapa 4
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <Cpu className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Indústria 5.0</h4>
              <p className="text-sm text-gray-600">Colaboração humano-máquina e foco na sustentabilidade</p>
            </div>
            
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Qualidade</h4>
              <p className="text-sm text-gray-600">Processos rigorosos e inovação na indústria alimentícia</p>
            </div>
            
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Competências</h4>
              <p className="text-sm text-gray-600">Preparação profissional para os desafios futuros</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stage4;