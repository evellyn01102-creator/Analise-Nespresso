import React from 'react';
<div className="mb-16">
<h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center"><Lightbulb className="mr-2"/> Estratégias Adotadas</h3>
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
<h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center"><Package className="mr-2"/> Nível de Serviço</h3>
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
<h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center"><BarChart3 className="mr-2"/> Custos por Ator e por Rodada</h3>
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
<strong>Rodada 1:</strong> Custos elevados pela decisão da Fábrica de manter estoque excessivo.<br/>
<strong>Rodada 2:</strong> Pior desempenho, efeito chicote disparou custos (67% do total).<br/>
<strong>Rodada 3:</strong> Custos mínimos com comunicação e alinhamento.
</p>
</div>


{/* Reflexões Finais */}
<div className="bg-white rounded-2xl p-8 border border-yellow-200">
<h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center"><TrendingUp className="mr-2"/> Reflexões Finais</h3>
<p className="text-gray-700 leading-relaxed">
A dinâmica mostrou os desafios de gerir uma cadeia de suprimentos. O <strong>Efeito Chicote</strong> revelou o grande impacto da falta de comunicação e previsibilidade. A gestão de estoques se mostrou essencial para equilibrar custos e nível de atendimento.
<br/><br/>
Para a indústria de alimentos, os desafios são ainda maiores devido à perecibilidade, validade, cadeia do frio e rastreabilidade. A lição central é clara: <strong>gerenciar informação é tão importante quanto gerenciar materiais</strong>.
<br/><br/>
A colaboração e a visão sistêmica entre todos os elos da cadeia são fundamentais para garantir eficiência e competitividade.
</p>
</div>
</div>
</section>
);
};


export default BeerGame;
