import React from 'react';
import { Calendar, Clock, CheckCircle } from 'lucide-react';

export default function CourseFormat() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-5xl mx-auto bg-brand-blue text-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">

                    <div className="p-10 md:p-16 md:w-2/3 space-y-8">
                        <div className="space-y-2">
                            <span className="inline-block bg-brand-light/20 text-brand-light px-3 py-1 rounded text-sm font-medium tracking-wider">FORMATO</span>
                            <h2 className="text-3xl md:text-4xl font-bold">Aulas online e ao vivo</h2>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <Calendar className="w-6 h-6 text-brand-light" />
                                    <span className="font-bold text-xl">Datas:</span>
                                </div>
                                <ul className="pl-9 space-y-2 text-gray-200">
                                    <li className="font-semibold text-white">26/02/2026</li>
                                    <li className="font-semibold text-white">05/03/2026</li>
                                    <li className="font-semibold text-white">12/03/2026</li>
                                </ul>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <Clock className="w-6 h-6 text-brand-light" />
                                    <span className="font-bold text-xl">Horário:</span>
                                </div>
                                <p className="pl-9 text-xl text-white font-medium">20h às 22h</p>
                            </div>
                        </div>

                        <div className="pt-6 border-t border-white/10 grid sm:grid-cols-2 gap-4">
                            {['Interação ao vivo', 'Perguntas respondidas na hora', 'Gravação por tempo limitado', 'Certificado incluído'].map((item, i) => (
                                <div key={i} className="flex items-center gap-2">
                                    <CheckCircle className="w-5 h-5 text-green-400" />
                                    <span className="text-sm md:text-base text-gray-100">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-brand-blue md:w-1/3 relative overflow-hidden flex flex-col">
                        {/* Certificate Background */}
                        <div className="absolute inset-0">
                            <img
                                src="/certificate.png"
                                alt="Certificado Oficial"
                                className="w-full h-full object-cover opacity-30 mix-blend-overlay"
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-brand-blue/90 to-brand-blue/60"></div>
                        </div>

                        <div className="relative z-10 p-10 flex flex-col justify-center items-center text-center h-full">
                            <div className="w-full max-w-[340px] aspect-[4/3] md:w-64 md:h-48 md:aspect-auto bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center mb-6 border border-white/20 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)] hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.6)] transform -translate-y-2 hover:scale-105 transition-all duration-500 overflow-hidden relative">
                                <img
                                    src="/certificate.png"
                                    alt="Preview Certificado"
                                    className="w-full h-full object-cover opacity-90"
                                />
                                {/* Shine Effect */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out z-10"></div>
                            </div>

                            <h3 className="text-2xl font-bold mb-2">Certificado Incluso</h3>
                            <p className="text-brand-light/90 text-sm mb-6 font-medium">Reconhecido pela 8SR Gestão & Valor em Saúde</p>

                            <a href="https://wa.me/5516992206074?text=Ol%C3%A1%20quero%20me%20inscrever%20no%20curso%20de%20MEWS" target="_blank" rel="noopener noreferrer" className="group relative overflow-hidden inline-block w-full bg-white text-brand-blue font-bold py-4 px-6 rounded-xl border-b-4 border-gray-300 hover:border-gray-400 active:border-b-0 active:translate-y-1 transition-all shadow-[0_10px_20px_rgba(0,0,0,0.2)] hover:shadow-[0_15px_25px_rgba(0,0,0,0.3)] animate-pulse-scale active:shadow-none">
                                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-brand-blue/10 to-transparent animate-shimmer md:animate-none md:-translate-x-full md:group-hover:translate-x-full md:transition-transform md:duration-1000 md:ease-in-out"></div>
                                <span className="relative z-10">Garantir minha vaga</span>
                            </a>
                            <p className="mt-4 text-xs text-brand-light/60">Vagas estritamente limitadas</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
