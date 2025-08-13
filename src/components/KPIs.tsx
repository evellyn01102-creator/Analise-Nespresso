import React from 'react';
import { BarChart3, Factory, Truck, Store, Leaf } from 'lucide-react';

const KPIs: React.FC = () => {
  const kpiData = [
    {
      actor: 'Fornecedor',
      icon: <Leaf className="h-8 w-8" />,
      color: 'from-green-500 to-emerald-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      kpi: 'Porcentagem de Café AAA Sourced de Fazendas com Práticas Regenerativas',
      current: '85%',
      target: '95% até 2030',
      description: 'Este indicador mede a porcentagem do café Nespresso AAA que vem de fazendas com práticas de agricultura regenerativa. A meta da Nespresso é que 95% de seu café AAA venha dessas fazendas até 2030; em 2023, esse número foi de 85%.',
      importance: 'Este KPI é vital para a sustentabilidade ambiental, promovendo a saúde do solo, a biodiversidade e a captura de carbono. Ele também assegura a qualidade do café, aumenta a resiliência dos produtores frente às mudanças climáticas e fortalece a reputação da Nespresso como uma marca responsável.'
    },
    {
      actor: 'Fábricas',
      icon: <Factory className="h-8 w-8" />,
      color: 'from-blue-500 to-indigo-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      kpi: 'Consumo de Energia',
      current: 'Monitoramento contínuo',
      target: 'Redução progressiva',
      description: 'O Consumo de Energia é um indicador de desempenho que mede a eficiência com que uma empresa utiliza a energia em suas operações de fabricação.',
      importance: 'Avalia diretamente a eficiência energética de uma operação industrial, relacionando o consumo de energia (um custo primário) com a produção (a receita primária). É fundamental para a otimização de custos e para a redução do impacto ambiental.'
    },
    {
      actor: 'Fábricas',
      icon: <Factory className="h-8 w-8" />,
      color: 'from-purple-500 to-pink-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      kpi: 'Desperdício Zero',
      current: '100% das fábricas',
      target: 'Manter certificação',
      description: 'Este indicador demonstra o percentual de fábricas que alcançaram a certificação de "zero resíduo enviado para o aterro". Isso significa que 100% dos resíduos operacionais são desviados de aterros sanitários por meio de redução, reutilização, reciclagem e recuperação de energia.',
      importance: 'Além de sua importância para a sustentabilidade, o desperdício zero impacta diretamente a lucratividade e a resiliência do negócio. Essa prática resulta em redução de custos, potencial geração de novas receitas, eficiência operacional aprimorada e maior atração de clientes e investidores.'
    },
    {
      actor: 'CD (Centro de Distribuição / Logística)',
      icon: <Truck className="h-8 w-8" />,
      color: 'from-orange-500 to-red-600',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
      kpi: 'Capacidade de Coleta de Cápsulas Usadas',
      current: 'Variável por região',
      target: '60% global até 2030',
      description: 'Este KPI mede a porcentagem de cápsulas de café (principalmente de alumínio) vendidas que são efetivamente retornadas pelos consumidores ao ciclo de reciclagem – seja por coleta domiciliar, pontos de entrega ou boutiques.',
      importance: 'Ajuda a identificar pontos críticos na logística reversa, permitindo melhorias no processo de coleta. Ao aumentar a reciclagem, a empresa reduz custos operacionais e impactos ambientais, reforçando seu compromisso com a economia circular.'
    },
    {
      actor: 'Varejo',
      icon: <Store className="h-8 w-8" />,
      color: 'from-amber-500 to-yellow-600',
      bgColor: 'bg-amber-50',
      borderColor: 'border-amber-200',
      kpi: 'Crescimento Orgânico Real (RIG - Real Internal Growth)',
      current: '2.2%',
      target: 'Não Estabelecido',
      description: 'O Crescimento Orgânico Real (RIG) é um KPI da Nestlé que mede o crescimento do volume de vendas, isolando o efeito do aumento de preços. Ele mostra se a empresa está vendendo mais unidades de produto.',
      importance: 'Este é um dos indicadores de saúde financeira mais importantes para a empresa e para os investidores. Ele revela se a marca está crescendo e ganhando participação de mercado de forma "saudável" (baseada em mais pessoas comprando) e não apenas como reflexo da inflação. Um RIG forte é um sinal de grande vitalidade da marca.'
    }
  ];

  return (
    <section id="kpis" className="py-20 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-slate-100 px-4 py-2 rounded-full text-slate-800 font-medium mb-6">
            <BarChart3 className="h-5 w-5" />
            <span>Indicadores de Performance</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            KPIs da Cadeia de Suprimentos
          </h2>
          <img 
            src="/image copy copy.png" 
            alt="KPIs da Cadeia de Suprimentos da Nespresso" 
            className="w-full max-w-4xl mx-auto rounded-lg shadow-lg mb-8"
          />
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Principais indicadores de desempenho dos diferentes atores envolvidos 
            na cadeia de suprimentos da Nespresso e seu significado estratégico
          </p>
        </div>

        <div className="space-y-8">
          {kpiData.map((item, index) => (
            <div 
              key={index}
              className={`${item.bgColor} rounded-2xl p-8 border-2 ${item.borderColor} hover:shadow-xl transition-all duration-300`}
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                <div className="flex-shrink-0 text-center lg:text-left">
                  <div className={`w-20 h-20 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center text-white mb-4 mx-auto lg:mx-0`}>
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.actor}</h3>
                  <div className="flex flex-col sm:flex-row gap-2 justify-center lg:justify-start">
                    <span className="inline-block bg-white px-3 py-1 rounded-full text-sm font-medium text-gray-700">
                      Atual: {item.current}
                    </span>
                    <span className="inline-block bg-white px-3 py-1 rounded-full text-sm font-medium text-gray-700">
                      Meta: {item.target}
                    </span>
                  </div>
                </div>
                
                <div className="flex-grow">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">
                    {item.kpi}
                  </h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white rounded-lg p-4 border border-gray-200">
                      <h5 className="font-semibold text-gray-900 mb-2">Descrição:</h5>
                      <p className="text-gray-700 text-sm leading-relaxed">{item.description}</p>
                    </div>
                    
                    <div className="bg-white rounded-lg p-4 border border-gray-200">
                      <h5 className="font-semibold text-gray-900 mb-2">Importância:</h5>
                      <p className="text-gray-700 text-sm leading-relaxed">{item.importance}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 border border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Integração dos KPIs na Cadeia de Valor
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <Leaf className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Sustentabilidade</h4>
              <p className="text-sm text-gray-600">KPIs ambientais garantem práticas regenerativas e desperdício zero</p>
            </div>
            
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <Factory className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Eficiência</h4>
              <p className="text-sm text-gray-600">Monitoramento de energia e processos para otimização contínua</p>
            </div>
            
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <Store className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Crescimento</h4>
              <p className="text-sm text-gray-600">RIG e logística reversa impulsionam crescimento sustentável</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KPIs;