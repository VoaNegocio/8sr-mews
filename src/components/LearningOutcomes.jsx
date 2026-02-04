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
            desc: "Reduzir ao máximo eventos adversos previsíveis."
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

                <div className="mt-12 text-center">
                    <a
                        href="https://wa.me/5516992206074?text=Ol%C3%A1%20quero%20me%20inscrever%20no%20curso%20de%20MEWS"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative overflow-hidden inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold text-lg py-4 px-8 rounded-xl border-b-4 border-green-700 hover:border-green-700 active:border-b-0 active:translate-y-1 shadow-[0_10px_20px_rgba(34,197,94,0.3)] hover:shadow-[0_15px_25px_rgba(34,197,94,0.4)] transition-all animate-pulse-scale active:shadow-none w-full md:w-auto"
                    >
                        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer md:animate-none md:-translate-x-full md:group-hover:translate-x-full md:transition-transform md:duration-1000 md:ease-in-out"></div>
                        <MessageCircle className="w-6 h-6 animate-pulse relative z-10" />
                        <span className="relative z-10">Fale com nossa equipe agora</span>
                    </a>
                </div>
            </div>
        </section>
    );
}
