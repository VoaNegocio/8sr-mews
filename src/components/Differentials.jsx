import React from 'react';
import { User, BookOpen, MessageCircle, Users, Video } from 'lucide-react';

export default function Differentials() {
    const differentials = [
        { icon: <User className="w-5 h-5" />, text: "Professor atuante na área, com experiência real de plantão" },
        { icon: <BookOpen className="w-5 h-5" />, text: "Aplicação prática — não só explicação de protocolo" },
        { icon: <MessageCircle className="w-5 h-5" />, text: "Estudo de caso e discussão real" },
        { icon: <Users className="w-5 h-5" />, text: "Troca direta durante a aula" },
        { icon: <Video className="w-5 h-5" />, text: "Aulas 100% online e ao vivo" },
    ];

    return (
        <section className="py-20 bg-brand-surface">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">

                    <div className="space-y-8">
                        <div>
                            <h2 className="text-3xl font-bold text-brand-blue mb-6">Por que este curso é diferente?</h2>
                            <div className="h-1 w-20 bg-brand-blue/30 rounded"></div>
                        </div>

                        <div className="grid gap-4">
                            {differentials.map((diff, index) => (
                                <div key={index} className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                                    <div className="bg-brand-blue/10 p-2 rounded-full text-brand-blue">
                                        {diff.icon}
                                    </div>
                                    <span className="font-medium text-gray-700">{diff.text}</span>
                                </div>
                            ))}
                        </div>


                    </div>

                    <div>
                        {/* Certificate Card */}
                        <div className="bg-white p-3 rounded-xl shadow-[0_4px_20px_-5px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2)] transition-all duration-500 border border-gray-100 hover:border-brand-blue/30 transform hover:-translate-y-2 hover:scale-[1.01] relative group overflow-hidden">
                            {/* 3D Shine Effect */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent translate-y-[100%] group-hover:translate-y-[-100%] transition-transform duration-1000 pointer-events-none z-10"></div>

                            <div className="aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden relative group-hover:shadow-inner transition-all">
                                <img
                                    src="/certificate.png"
                                    alt="Certificado 8SR"
                                    className="w-full h-full object-contain bg-slate-50"
                                />
                            </div>
                            <div className="p-4 text-center">
                                <div className="flex items-center justify-center gap-2 mb-2">
                                    <div className="w-3 h-3 bg-brand-blue rounded-full animate-pulse"></div>
                                    <span className="text-sm font-bold text-brand-blue">Certificado Incluso</span>
                                </div>
                                <p className="text-gray-500 text-sm">Válido em todo território nacional.</p>
                            </div>
                        </div>

                        <div className="mt-6 pt-6 border-t border-gray-200">
                            <p className="text-sm text-gray-500 uppercase tracking-widest font-semibold mb-2">Promovido por</p>
                            <div className="flex items-center gap-3 opacity-90">
                                <img src="/imgs/logo/logo-fundo-transparente.png" alt="8SR" className="h-8 w-auto object-contain filter grayscale hover:grayscale-0 transition-all opacity-80 hover:opacity-100" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
