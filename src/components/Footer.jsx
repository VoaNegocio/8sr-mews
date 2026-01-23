import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-brand-surface py-16 border-t border-gray-200">
            <div className="container mx-auto px-4 text-center">

                <div className="max-w-2xl mx-auto mb-12">
                    <img
                        src="/imgs/logo/logo-fundo-transparente.png"
                        alt="8SR Logo"
                        className="h-16 w-auto mx-auto mb-6 opacity-60 hover:opacity-100 transition-all grayscale hover:grayscale-0"
                    />
                    <div className="space-y-4">
                        <p className="text-xl md:text-2xl font-serif italic text-gray-700 leading-relaxed">
                            "A deterioração clínica raramente é súbita. Ela costuma ser ignorada, subestimada ou mal comunicada. O MEWS bem aplicado muda isso."
                        </p>
                    </div>
                </div>

                <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
                    <p>© {new Date().getFullYear()} 8SR Gestão & Valor em Saúde. Todos os direitos reservados.</p>
                    <div className="flex gap-4 mt-4 md:mt-0">
                        <a href="#" className="hover:text-brand-blue transition-colors">Termos de Uso</a>
                        <a href="#" className="hover:text-brand-blue transition-colors">Privacidade</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
