import React from 'react';

const BeerGame: React.FC = () => {
  return (
    <section id="improvements" className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Dinâmica BeerGame
        </h2>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
         Principais questionamentos, reflexões e conclusões da dinâmica
        </p>
      </div>

      {/* BLOQUINHO DE REDIRECIONAMENTO */}
      <div className="mt-8 text-center">
        <div className="inline-block bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          <h4 className="text-lg font-semibold text-gray-900 mb-3">
            Acesse o consolidado da etapa 5 
          </h4>
          <div className="flex flex-col space-y-4"> {/* Adicionei flex e flex-col para alinhar verticalmente e space-y-4 para dar espaçamento entre eles */}
            <a
              href="https://docs.google.com/document/d/1vrcDe8ptsB8na9f30U4TQjpLhZPkd9QT/edit"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-5 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition-colors"
            >
              Acessar Documento Completo
            </a>
            <a
              href="https://docs.google.com/spreadsheets/d/11N-08KVRh4NeVZD-FG-RE2VUpmdqFmN8/edit?gid=1385181543#gid=1385181543"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-5 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition-colors"
            >
              Acessar Planilha Completa
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeerGame;