import React from 'react';
import { Lightbulb, Package, BarChart3, TrendingUp, FileSpreadsheet, FileText } from 'lucide-react';

const BeerGame: React.FC = () => {
  const strategies = [
    { round: 'Rodada 1', detail: 'Estratégia descentralizada baseada em demanda média (90–110 unidades). Fábrica criou estoque de segurança excessivo (10 meses).' },
    { round: 'Rodada 2', detail: 'Uso da previsão do varejista, mas falha de gestão do distribuidor gerou efeito chicote.' },
    { round: 'Rodada 3', detail: 'Estratégia colaborativa, com alinhamento entre todos os elos da cadeia.' },
  ];

  const serviceLevel = [
    { round: 'Rodada 1', detail: 'Atendimento mantido, mas com alto custo de estoque.' },
    { round: 'Rodada 2', detail: 'Nível insatisfatório, rupturas em vários pontos da cadeia.' },
    { round: 'Rodada 3', detail: 'Alto nível de serviço, com eficiência e equilíbrio de estoques.' },
  ];

  const costs = [
    { actor: 'Varejista', r1: 141, r2: 1414, r3: 72, total: 1.627 },
    { actor: 'Distribuidor', r1: 93, r2: 3789, r3: 9, total: 3.891 },
    { actor: 'Fábrica', r1: 4620, r2: 4200, r3: 24, total: 8.844 },
    { actor: 'Fornecedor', r1: 760, r2: 2430, r3: 37, total: 3.227 },
    { actor: 'TOTAL', r1: 5614, r2: 11833, r3: 142, total: 17.589 },
  ];

  return (
    <section id="beer-game" className="py-20 bg-[#f5f0e6]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Título principal */}
        <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-16">
          Beer Game – Dinâmica da Cadeia de Suprimentos
        </h2>

        {/* Estratégias */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Lightbulb className="mr-2" /> Estratégias Adotadas
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {strategies.map((s, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg border border-yellow-200 hover:shadow-md">
                <h4 className="font-semibold text-gray-900 mb-2">{s.round}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{s.detail}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Nível de Serviço */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Package className="mr-2" /> Nível de Serviço
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {serviceLevel.map((s, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg border border-yellow-200 hover:shadow-md">
                <h4 className="font-semibold text-gray-900 mb-2">{s.round}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{s.detail}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Custos */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <BarChart3 className="mr-2" /> Custos por Ator e por Rodada
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-yellow-100">
                  <th className="px-4 py-2 text-left">Ator</th>
                  <th className="px-4 py-2 text-left">Rodada 1</th>
                  <th className="px-4 py-2 text-left">Rodada 2</th>
                  <th className="px-4 py-2 text-left">Rodada 3</th>
                  <th className="px-4 py-2 text-left">Total</th>
                </tr>
              </thead>
              <tbody>
                {costs.map((c, idx) => (
                  <tr key={idx} className="border-b hover:bg-yellow-50">
                    <td className="px-4 py-2 font-medium text-gray-900">{c.actor}</td>
                    <td className="px-4 py-2">{c.r1}</td>
                    <td className="px-4 py-2">{c.r2}</td>
                    <td className="px-4 py-2">{c.r3}</td>
                    <td className="px-4 py-2 font-semibold">{c.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-600 mt-4">
            <strong>Rodada 1:</strong> Custos elevados pela decisão da Fábrica de manter estoque excessivo.<br />
            <strong>Rodada 2:</strong> Pior desempenho, efeito chicote disparou custos (67% do total).<br />
            <strong>Rodada 3:</strong> Custos mínimos com comunicação e alinhamento.
          </p>
        </div>

        {/* Reflexões Finais */}
        <div className="bg-white rounded-2xl p-8 border border-yellow-200 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <TrendingUp className="mr-2" /> Reflexões Finais
          </h3>
          <p className="text-gray-700 leading-relaxed">
            A dinâmica mostrou os desafios de gerir uma cadeia de suprimentos. O <strong>Efeito Chicote</strong> revelou o grande impacto da falta de comunicação e previsibilidade. A gestão de estoques se mostrou essencial para equilibrar custos e nível de atendimento.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            Para a indústria de alimentos, os desafios são ainda maiores devido à perecibilidade, validade, cadeia do frio e rastreabilidade. A lição central é clara: <strong>gerenciar informação é tão importante quanto gerenciar materiais</strong>.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            A colaboração e a visão sistêmica entre todos os elos da cadeia são fundamentais para garantir eficiência e competitividade.
          </p>
        </div>

        {/* Botões */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://docs.google.com/spreadsheets/d/11N-08KVRh4NeVZD-FG-RE2VUpmdqFmN8/edit?usp=sharing&ouid=101107061151666428165&rtpof=true&sd=true"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center px-6 py-3 bg-green-600 text-white rounded-xl shadow hover:bg-green-700 transition"
          >
            <FileSpreadsheet className="mr-2" /> Ver Planilha
          </a>
          <a
            href="https://docs.google.com/document/d/1vrcDe8ptsB8na9f30U4TQjpLhZPkd9QT/edit?usp=sharing&ouid=101107061151666428165&rtpof=true&sd=true"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition"
          >
            <FileText className="mr-2" /> Ver Relatório
          </a>
        </div>
      </div>
    </section>
  );
};

export default BeerGame;
