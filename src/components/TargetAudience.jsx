import React from 'react';
import { UserCheck, Activity, Stethoscope, ShieldCheck, Siren } from 'lucide-react';

export default function TargetAudience() {
    const audienceList = [
        { icon: <Stethoscope className="w-5 h-5" />, text: "Enfermeiros assistenciais e líderes" },
        { icon: <UserCheck className="w-5 h-5" />, text: "Médicos" },
        { icon: <Activity className="w-5 h-5" />, text: "Fisioterapeutas" },
        { icon: <ShieldCheck className="w-5 h-5" />, text: "Profissionais da qualidade e segurança do paciente" },
        { icon: <Siren className="w-5 h-5" />, text: "Equipes envolvidas em resposta rápida" }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Visual/Image Placeholder */}
                    <div className="h-full min-h-[400px] bg-gray-100 rounded-2xl flex items-center justify-center relative overflow-hidden group">
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center grayscale opacity-80 group-hover:grayscale-0 transition-all duration-700"></div>
                        <div className="absolute inset-0 bg-brand-blue/60 mix-blend-multiply"></div>
                        <div className="relative z-10 text-white text-center p-8">
                            <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-4 border border-white/30">
                                <UserCheck className="w-10 h-10 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold">Clareza Profissional</h3>
                            <p className="mt-2 text-blue-100">Focado em quem está na linha de frente</p>
                        </div>
                    </div>

                    <div>
                        <div className="bg-brand-surface rounded-2xl p-8 md:p-12 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-light/20 rounded-full blur-3xl -mr-16 -mt-16"></div>

                            <h2 className="text-3xl font-bold text-brand-blue mb-8">Para quem é este curso?</h2>

                            <ul className="space-y-4 mb-8">
                                {audienceList.map((item, index) => (
                                    <li key={index} className="flex items-center gap-3 text-lg font-medium text-gray-700">
                                        <span className="bg-green-100 text-green-600 p-1 rounded-full">
                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                            </svg>
                                        </span>
                                        {item.text}
                                    </li>
                                ))}
                            </ul>

                            <div className="bg-white p-6 rounded-xl border border-blue-100 shadow-sm space-y-3">
                                <div className="flex items-start gap-3">
                                    <span className="text-2xl">👉</span>
                                    <p className="font-semibold text-brand-blue">Ideal para quem atua em enfermarias, UTIs, pronto atendimento ou unidades críticas</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="text-2xl">👉</span>
                                    <p className="font-semibold text-brand-blue">Ideal para quem precisa detectar risco antes da piora</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
