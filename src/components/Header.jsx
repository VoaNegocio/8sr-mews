import React from 'react';
import { Menu } from 'lucide-react';

export default function Header() {
    return (
        <header className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                {/* Logo Placeholder */}
                <div className="flex items-center gap-2">
                    <img src="/imgs/logo/logo-fundo-transparente.png" alt="8SR Gestão & Valor em Saúde" className="h-14 w-auto object-contain" />
                </div>

                {/* CTA Button / Navigation */}
                <div className="hidden md:flex">
                    <a href="#offer" className="group relative overflow-hidden bg-brand-blue hover:bg-blue-800 text-white px-6 py-2.5 rounded-xl font-medium transition-all text-sm border-b-4 border-blue-900 active:border-b-0 active:translate-y-1 shadow-md hover:shadow-lg active:shadow-none animate-pulse-scale">
                        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer md:animate-none md:-translate-x-full md:group-hover:translate-x-full md:transition-transform md:duration-1000 md:ease-in-out"></div>
                        <span className="relative z-10">Garantir minha vaga</span>
                    </a>
                </div>
            </div>
        </header>
    );
}
