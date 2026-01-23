import React from 'react';
import { Brain, AlertCircle, TrendingUp, MessageCircle, Shield } from 'lucide-react';

export default function LearningOutcomes() {
    const outcomes = [
        {
            icon: <Brain className="w-6 h-6 text-brand-blue" />,
            title: "Entender a lógica do MEWS",
            desc: "Quando usar, por que usar e o que realmente importa na pontuação."
        },
        {
            icon: <AlertCircle className="w-6 h-6 text-brand-blue" />,
            title: "Identificar deterioração clínica precocemente",
            desc: "Reconhecer padrões de risco antes do evento grave acontecer."
        },
        {
            icon: <TrendingUp className="w-6 h-6 text-brand-blue" />,
            title: "Aplicar o MEWS na rotina do plantão",
            desc: "Integração com sinais vitais, registro e tomada de decisão."
        },
        {
            icon: <MessageCircle className="w-6 h-6 text-brand-blue" />,
            title: "Melhorar comunicação e escalonamento",
            desc: "Usar o MEWS como linguagem comum entre equipe assistencial e médica."
        },
        {
            icon: <Shield className="w-6 h-6 text-brand-blue" />,
            title: "Evitar eventos adversos evitáveis",
            desc: "Reduzir atrasos, retrabalho e decisões reativas."
        }
    ];

    return (
        <section className="py-20 bg-brand-surface">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4">O que você vai aprender e aplicar na prática</h2>
                    <p className="text-xl text-gray-600">
                        <span className="font-bold text-brand-blue">Nada de teoria longa</span> ou discussão acadêmica.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto grid gap-6">
                    {outcomes.map((item, index) => (
                        <div key={index} className="bg-white p-6 rounded-xl shadow-[0_4px_20px_-5px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2)] transition-all duration-300 flex gap-6 items-start border border-gray-100 hover:border-brand-blue/30 transform hover:-translate-y-2 hover:scale-[1.01] relative overflow-hidden group">
                            {/* Subtle 3D Shine on Hover */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/50 to-transparent translate-y-[100%] group-hover:translate-y-[-100%] transition-transform duration-700 pointer-events-none"></div>
                            <div className="bg-brand-light/20 p-3 rounded-lg shrink-0">
                                {item.icon}
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-1">{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
