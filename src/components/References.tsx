import React from 'react';
import { BookOpen, ExternalLink, Globe, BarChart3, Building } from 'lucide-react';

const References: React.FC = () => {
  const references = {
    general: [
      {
        title: 'Cadeia Produtiva do Café - Fiep',
        url: 'https://www.fiepr.org.br/para-sua-empresa/ambiente-de-negocios/setores-industriais/cadeias-produtivas/cadeia-produtiva-do-cafe/'
      },
      {
        title: 'A produção do café no Brasil: informações econômicas - Consórcio Pesquisa Café',
        url: 'https://www.consorciopesquisacafe.com.br/arquivos/consorcio/publicacoes_tecnicas/A_producao_do_cafe_no_Brasil_informacoes_economicas.pdf'
      },
      {
        title: 'VBP 2021: Café é o 4º maior VBP das lavouras - Ministério da Agricultura',
        url: 'https://www.gov.br/agricultura/pt-br/assuntos/noticias/vbp-2021-cafe-e-o-4o-maior-vbp-das-lavouras'
      },
      {
        title: 'Brasil: a nação do café – CNC',
        url: 'https://cncafe.com.br/brasil-a-nacao-do-cafe/'
      }
    ],
    market: [
      {
        title: 'Consumo interno dos Cafés do Brasil segue em ascensão - ABIC',
        url: 'https://www.abic.com.br/consumo-interno-dos-cafes-do-brasil-segue-em-ascensao/'
      },
      {
        title: 'Relatórios de Exportação - Cecafé',
        url: 'https://www.cecafe.com.br/comex/relatorios-de-exportacao/'
      },
      {
        title: 'Coffee Pods Market Size, Share & Growth, 2024-2030 - Grand View Research',
        url: 'https://www.grandviewresearch.com/industry-analysis/coffee-pods-market'
      },
      {
        title: 'Coffee Pods And Capsules Market Size & Share Analysis - Mordor Intelligence',
        url: 'https://www.mordorintelligence.com/industry-reports/coffee-pods-and-capsules-market'
      },
      {
        title: 'Coffee Pods and Capsules Market - Straits Research',
        url: 'https://www.straitsresearch.com/report/coffee-pods-and-capsules-market'
      },
      {
        title: 'Brazil Coffee Pods Market Size & Outlook, 2024-2030 - Grand View Research',
        url: 'https://www.grandviewresearch.com/horizon/outlook/coffee-pods-market/brazil'
      },
      {
        title: 'Brazil Coffee Pods & Capsules Market Overview - MarketResearchFuture',
        url: 'https://www.marketresearchfuture.com/reports/brazil-coffee-pods-capsules-market-48826'
      },
      {
        title: 'Nestlé Three-Month Sales 2025 - nestle.com',
        url: 'https://www.nestle.com/media/pressreleases/allpressreleases/three-month-sales-2025'
      },
      {
        title: 'Q1 Sales 2025 for Nestle Group - Business Review Europe',
        url: 'https://business-review.eu/business/q1-sales-2025-for-nestle-group-delivering-broad-based-growth-executing-on-strategy-282484'
      },
      {
        title: 'Nespresso serves its Summer 2025 collection - Comunicaffe.com',
        url: 'https://www.comunicaffe.com/nespresso-serves-its-summer-2025-collection-with-the-new-limited-edition-iced-coffee-blends/'
      },
      {
        title: 'The Talk of the Town - Nespresso Serves its Summer 2025 Collection - GlobeNewswire.com',
        url: 'https://www.globenewswire.com/news-release/2025/05/20/3013892/0/en/The-Talk-of-the-Town-Nespresso-Serves-its-Summer-2025-Collection-with-the-New-Limited-Edition-Iced-Coffee-Blends.html'
      }
    ],
    nespresso: [
      {
        title: 'Nespresso AAA de Qualidade Sustentável™ - Nespresso.com.br',
        url: 'https://www.nespresso.com/br/pt/aaaprogram'
      },
      {
        title: 'Portugal recebe centro mundial de supply chain da Nespresso em 2019 - logisticamoderna.com',
        url: 'https://www.logiscool.com/pt/supply-chain-portugal-novo-centro-logistico-global-da-nespresso'
      },
      {
        title: 'Logística reversa Nespresso - nespresso.com/pro/br/pt',
        url: 'https://www.nespresso.com/pro/br/pt/servicos-para-o-seu-negocio/logistica-reversa'
      },
      {
        title: 'The value chain of the future is circular - sustainability.nespresso.com',
        url: 'https://www.nespresso.com/ncp/positive/br/pt/circularity/the-value-chain-of-the-future-is-circular'
      },
      {
        title: 'Our progress - sustainability.nespresso.com',
        url: 'https://www.nespresso.com/ncp/positive/br/pt/circularity/our-progress'
      },
      {
        title: 'Como a Nespresso usou o marketing de luxo - markesalq.com.br',
        url: 'https://markesalq.com.br/como-a-nespresso-usou-o-marketing-de-luxo/'
      },
      {
        title: 'Nespresso business model canvas - vizologi.com',
        url: 'https://www.vizologi.com/business-model-canvas/nespresso-business-model-canvas/'
      },
      
      {
        title: 'Nossas inovações - nespresso.com/ncp/positive/br/pt',
        url: 'https://www.nespresso.com/ncp/positive/br/pt/innovation/our-innovations'
      },
      {
        title: 'Nespresso B Corp - nespresso.com/pro/br/pt',
        url: 'https://www.nespresso.com/pro/br/pt/b-corp'
      }
    ]
  };

  const categories = [
    {
      key: 'general',
      title: 'A. Para Definições e Contexto Geral das Cadeias',
      icon: <Globe className="h-6 w-6" />,
      color: 'from-green-500 to-emerald-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200'
    },
    {
      key: 'market',
      title: 'B. Para Dados de Mercado (Market Share, Consumo, Projeções - incluindo 2024/2025)',
      icon: <BarChart3 className="h-6 w-6" />,
      color: 'from-blue-500 to-indigo-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200'
    },
    {
      key: 'nespresso',
      title: 'C. Para Cadeia de Suprimentos e Valor da Nespresso (Específico da Marca)',
      icon: <Building className="h-6 w-6" />,
      color: 'from-purple-500 to-pink-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200'
    }
  ];

  return (
    <section id="references" className="py-20 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-slate-100 px-4 py-2 rounded-full text-slate-800 font-medium mb-6">
            <BookOpen className="h-5 w-5" />
            <span>Bibliografia</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Referências
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Artigos, Relatórios e Notícias Consultados (Pesquisa Web)
          </p>
        </div>

        <div className="space-y-12">
          {categories.map((category) => (
            <div 
              key={category.key}
              className={`${category.bgColor} rounded-2xl p-8 border-2 ${category.borderColor}`}
            >
              <div className="flex items-center mb-8">
                <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center text-white mr-4`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {references[category.key as keyof typeof references].map((ref, index) => (
                  <div 
                    key={index}
                    className="bg-white rounded-lg p-4 border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-grow pr-4">
                        <h4 className="text-gray-900 font-medium mb-2 leading-relaxed">
                          {ref.title}
                        </h4>
                        <p className="text-sm text-gray-600 break-all">
                          {ref.url}
                        </p>
                      </div>
                      <a
                        href={ref.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-shrink-0 p-2 text-gray-400 hover:text-blue-600 transition-colors"
                        title="Abrir link externo"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 border border-gray-200">
          <div className="text-center">
            <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Nota Metodológica
            </h3>
            <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Esta análise foi desenvolvida com base em pesquisa bibliográfica abrangente, 
              incluindo fontes oficiais do governo brasileiro, relatórios de mercado 
              internacionais, documentos corporativos da Nespresso e estudos acadêmicos 
              especializados. Todas as fontes foram consultadas entre 2024 e 2025, 
              garantindo a atualidade das informações apresentadas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default References;