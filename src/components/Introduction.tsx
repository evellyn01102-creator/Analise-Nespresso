import React from 'react';
import { Award, Target, Leaf } from 'lucide-react';

const Introduction: React.FC = () => {
  return (
    <section id="introduction" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Introdução
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Uma análise aprofundada das interconexões entre as cadeias produtiva, de suprimentos 
            e de valor do café, com enfoque na marca Nespresso
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              A Nespresso como Caso de Estudo
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              A Nespresso, integrante do Grupo Nestlé, redefiniu o consumo de café ao introduzir 
              seu sistema inovador de cápsulas hermeticamente seladas e máquinas dedicadas. 
              Esta estratégia permitiu à marca posicionar-se de forma proeminente no mercado 
              de cafés especiais e de luxo.
            </p>
            <p className="text-gray-700 leading-relaxed">
              A diferenciação da Nespresso é multifacetada, fundamentada na qualidade intrínseca 
              do café, na conveniência oferecida ao consumidor, no design sofisticado de seus 
              produtos e na experiência premium proporcionada.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg border border-amber-200">
              <Award className="h-8 w-8 text-amber-700 mb-4" />
              <h4 className="font-semibold text-gray-900 mb-2">Qualidade Premium</h4>
              <p className="text-gray-600 text-sm">
                Seleção rigorosa de grãos de alta qualidade através do Programa AAA Sustainable Quality™
              </p>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border border-green-200">
              <Leaf className="h-8 w-8 text-green-700 mb-4" />
              <h4 className="font-semibold text-gray-900 mb-2">Sustentabilidade</h4>
              <p className="text-gray-600 text-sm">
                Compromisso robusto com práticas sustentáveis e responsabilidade social
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200">
              <Target className="h-8 w-8 text-blue-700 mb-4" />
              <h4 className="font-semibold text-gray-900 mb-2">Experiência Premium</h4>
              <p className="text-gray-600 text-sm">
                Design sofisticado e conveniência que proporcionam uma experiência diferenciada
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8 border border-amber-200">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Relevância para a Engenharia de Produção
          </h3>
          <p className="text-gray-700 leading-relaxed">
            A escolha da Nespresso como objeto de estudo oferece um exemplo exemplar para 
            compreender a complexidade e as oportunidades de otimização inerentes às cadeias 
            agroindustriais contemporâneas. A análise sob a perspectiva da Engenharia de Produção 
            busca desvendar as interconexões entre os diferentes tipos de cadeias e sua fundamental 
            relevância para a gestão estratégica e operacional no setor de alimentos.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Introduction;