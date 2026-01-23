import React from 'react';
import { MessageCircle, Check } from 'lucide-react';

export default function Offer() {
    return (
        <section id="offer" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">

                    <div className="bg-gradient-to-br from-brand-surface to-white border border-gray-200 rounded-3xl shadow-xl hover:shadow-[0_30px_60px_-15px_rgba(1,16,159,0.25)] transition-all duration-500 overflow-hidden relative transform hover:-translate-y-2 hover:scale-[1.01] group">
                        <div className="absolute top-0 inset-x-0 h-2 bg-brand-blue"></div>
                        {/* 3D Shine Effect */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent translate-y-[100%] group-hover:translate-y-[-100%] transition-transform duration-1000 pointer-events-none z-0"></div>

                        <div className="p-8 md:p-12 text-center">
                            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-1.5 rounded-full font-medium text-sm mb-6">
                                <MessageCircle className="w-4 h-4" />
                                Condição especial via WhatsApp
                            </div>

                            <h2 className="text-3xl md:text-5xl font-bold text-brand-blue mb-2">
                                <span className="text-2xl align-top opacity-60 text-gray-500 line-through mr-2">R$ 497</span>
                                R$ 260,00
                            </h2>
                            <p className="text-gray-500 text-sm mb-8">Investimento único • Exclusivo para contato via WhatsApp</p>

                            <div className="bg-blue-50/50 rounded-xl p-6 mb-8 text-left max-w-lg mx-auto border border-blue-100/50">
                                <p className="font-semibold text-brand-text mb-4 text-center">Ao clicar no botão abaixo, você:</p>
                                <ul className="space-y-3">
                                    {[
                                        'Fala direto com a equipe',
                                        'Confirma sua vaga imediatamente',
                                        'Recebe todas as orientações de acesso'
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-gray-700">
                                            <div className="bg-green-100 p-1 rounded-full text-green-600 shrink-0">
                                                <Check className="w-3 h-3" />
                                            </div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <a
                                href="https://wa.me/5500000000000" // Replace
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative overflow-hidden block w-full max-w-md mx-auto bg-green-500 hover:bg-green-600 text-white font-bold text-xl py-5 px-8 rounded-xl border-b-4 border-green-700 hover:border-green-700 active:border-b-0 active:translate-y-1 shadow-[0_10px_20px_rgba(34,197,94,0.3)] hover:shadow-[0_15px_25px_rgba(34,197,94,0.4)] transition-all transform hover:-translate-y-1 hover:scale-[1.02] active:shadow-none mb-4"
                            >
                                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer md:animate-none md:-translate-x-full md:group-hover:translate-x-full md:transition-transform md:duration-1000 md:ease-in-out"></div>
                                <span className="relative z-10 flex items-center justify-center gap-2">
                                    <MessageCircle className="w-6 h-6 animate-pulse" />
                                    Falar com a equipe no WhatsApp
                                </span>
                            </a>

                            <p className="text-xs text-gray-400 font-medium">
                                ⏳ Vagas limitadas para manter a qualidade da aula ao vivo.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
