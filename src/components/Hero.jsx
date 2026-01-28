import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-brand-surface">
            {/* Background Image Placeholder */}
            <div className="absolute inset-0 z-0">
                <div className="w-full h-full bg-cover bg-center grayscale mix-blend-multiply opacity-50 bg-[url('https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')]"></div>
                {/* Brand Overlay */}
                <div className="absolute inset-0 bg-brand-blue/80 mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                {/* Subtle Background Shimmer */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer pointer-events-none opacity-30 z-10"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10 text-white">
                <div className="max-w-3xl space-y-8">
                    <div className="inline-block px-4 py-1.5 bg-brand-light/20 backdrop-blur-md border border-brand-light/30 rounded-full text-brand-light font-medium text-sm">
                        MEWS: Modified Early Warning Score
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight text-white drop-shadow-md">
                        MEWS não é protocolo.<br />
                        <span className="text-brand-light">É decisão no tempo certo.</span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-100 max-w-xl leading-relaxed font-bold">
                        Aprenda com quem atua na prática: <span className="text-brand-light font-bold">Professores que são Profissionais da Saúde atuantes!</span>
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <a
                            href="https://wa.me/5519996671304?text=Ol%C3%A1%2C%20vim%20pelo%20Instagram%20e%20quero%20informa%C3%A7%C3%B5es%20do%20Curso%20MEWS" // Replace with actual number
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative overflow-hidden flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all border-b-4 border-green-700 hover:border-green-700 active:border-b-0 active:translate-y-1 shadow-[0_10px_20px_rgba(34,197,94,0.3)] hover:shadow-[0_15px_25px_rgba(34,197,94,0.4)] transform hover:-translate-y-1 active:shadow-none"
                        >
                            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer md:animate-none md:-translate-x-full md:group-hover:translate-x-full md:transition-transform md:duration-1000 md:ease-in-out"></div>
                            <MessageCircle className="w-6 h-6 relative z-10 animate-pulse" />
                            <span className="relative z-10">Falar com a equipe no WhatsApp</span>
                        </a>
                    </div>

                    <p className="text-lg md:text-xl text-gray-100 max-w-xl leading-relaxed">
                        Curso online e ao vivo para profissionais de saúde que precisam identificar deterioração clínica antes que vire emergência
                    </p>
                </div>
            </div>
        </section>
    );
}
