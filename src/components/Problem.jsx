import React from 'react';
import { AlertTriangle, Clock, MessageSquareWarning } from 'lucide-react';

export default function Problem() {
    const problems = [
        {
            icon: <Clock className="w-8 h-8 text-brand-blue" />,
            title: "Leitura tardia dos sinais",
            description: "Sinais vitais alterados que passam despercebidos até ser tarde demais."
        },
        {
            icon: <MessageSquareWarning className="w-8 h-8 text-brand-blue" />,
            title: "Comunicação ineficiente",
            description: "Dificuldade em transmitir a gravidade do caso para a equipe médica."
        },
        {
            icon: <AlertTriangle className="w-8 h-8 text-brand-blue" />,
            title: "Sem critério para escalar",
            description: "Dúvida sobre quando e como chamar a resposta rápida."
        }
    ];

    return (
        <section className="py-20 bg-brand-surface">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4">
                        O problema não é falta de conhecimento clínico.<br />
                        É atraso na percepção do risco.
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
                        Na rotina hospitalar, sinais de deterioração aparecem antes da parada, antes da transferência e antes do evento adverso.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {problems.map((item, index) => (
                        <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                            <div className="bg-brand-light/20 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold text-brand-text mb-3 text-center">{item.title}</h3>
                            <p className="text-gray-600 text-center">{item.description}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-16 bg-white p-8 rounded-xl border-l-4 border-brand-blue max-w-3xl mx-auto shadow-sm">
                    <p className="text-xl font-medium text-brand-text text-center italic">
                        "O MEWS existe para resolver isso — quando é bem aplicado. Este curso foi criado para quem está no plantão e precisa agir com mais segurança e menos improviso."
                    </p>
                </div>
            </div>
        </section>
    );
}
