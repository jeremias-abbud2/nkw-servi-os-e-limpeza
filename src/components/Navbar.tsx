import React, { useState } from 'react';
import { MessageCircle, Menu, X, Phone } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';
import { createWhatsAppUrl } from '../utils/whatsapp';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#D9D9D9]/70 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          {/* Zone 1: Brand Wordmark (Single text element in display face, no subtext per Top Bar Contract) */}
          <a
            href="#"
            className="text-2xl font-extrabold tracking-tight text-[#0A1128] font-display whitespace-nowrap shrink-0 flex items-center gap-2 group"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#3D7A60] group-hover:scale-125 transition-transform" />
            <span>NKW Limpeza</span>
          </a>

          {/* Zone 2: 4-5 clean single-line nav links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-700">
            <a
              href="#servicos"
              className="hover:text-[#3D7A60] transition-colors whitespace-nowrap shrink-0 relative py-1 hover:border-b-2 hover:border-[#3D7A60]"
            >
              Serviços
            </a>
            <a
              href="#resultados"
              className="hover:text-[#3D7A60] transition-colors whitespace-nowrap shrink-0 relative py-1 hover:border-b-2 hover:border-[#3D7A60]"
            >
              Resultados
            </a>
            <a
              href="#orcamento"
              className="hover:text-[#3D7A60] transition-colors whitespace-nowrap shrink-0 relative py-1 hover:border-b-2 hover:border-[#3D7A60]"
            >
              Calculadora
            </a>
            <a
              href="#avaliacoes"
              className="hover:text-[#3D7A60] transition-colors whitespace-nowrap shrink-0 relative py-1 hover:border-b-2 hover:border-[#3D7A60]"
            >
              Avaliações
            </a>
            <a
              href="#faq"
              className="hover:text-[#3D7A60] transition-colors whitespace-nowrap shrink-0 relative py-1 hover:border-b-2 hover:border-[#3D7A60]"
            >
              Dúvidas
            </a>
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href={createWhatsAppUrl(COMPANY_INFO.whatsappMessageDefault)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#3D7A60] hover:bg-[#2F634E] rounded-lg shadow-sm hover:shadow transition-all whitespace-nowrap shrink-0 active:scale-[0.98]"
            >
              <MessageCircle className="w-4 h-4 text-emerald-200" />
              <span>Agendar WhatsApp</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="p-2 text-[#0A1128] hover:text-[#3D7A60] transition-colors"
              aria-label="Ligar para NKW"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-800 hover:text-[#3D7A60] focus:outline-none focus:ring-2 focus:ring-[#3D7A60] rounded-lg"
              aria-label="Abrir menu de navegação"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-lg animate-in slide-in-from-top-2">
          <nav className="flex flex-col space-y-2 text-base font-medium text-slate-800">
            <a
              href="#servicos"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-50 hover:text-[#3D7A60] transition-colors"
            >
              Serviços de Brilho
            </a>
            <a
              href="#resultados"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-50 hover:text-[#3D7A60] transition-colors"
            >
              Antes e Depois (Resultados)
            </a>
            <a
              href="#orcamento"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-50 hover:text-[#3D7A60] transition-colors"
            >
              Simulador de Orçamento
            </a>
            <a
              href="#avaliacoes"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-50 hover:text-[#3D7A60] transition-colors"
            >
              Avaliações Google Maps (4.6★)
            </a>
            <a
              href="#sobre"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-50 hover:text-[#3D7A60] transition-colors"
            >
              Sobre a NKW & Região
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-50 hover:text-[#3D7A60] transition-colors"
            >
              Perguntas Frequentes
            </a>
          </nav>
          <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
            <a
              href={createWhatsAppUrl(COMPANY_INFO.whatsappMessageDefault)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-white bg-[#3D7A60] hover:bg-[#2F634E] rounded-lg shadow transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-emerald-200" />
              <span>Chamar no WhatsApp (13) 99732-6635</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
