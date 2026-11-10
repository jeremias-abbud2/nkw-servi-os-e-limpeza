import React from 'react';
import { COMPANY_INFO } from '../data/content';
import { createWhatsAppUrl } from '../utils/whatsapp';
import { MessageCircle, Phone, MapPin, Star } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0A1128] text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          {/* Brand & Mission */}
          <div className="lg:col-span-5 space-y-4">
            <a
              href="#"
              className="text-2xl font-extrabold tracking-tight text-white font-display flex items-center gap-2"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#3D7A60]" />
              <span>NKW Limpeza</span>
            </a>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Serviços especializados de limpeza residencial, comercial e pós-obra para Bertioga, Riviera de São Lourenço e Morada da Praia.
            </p>

            <div className="flex items-center gap-2 text-xs text-slate-400">
              <span className="flex items-center gap-1 text-amber-400 font-semibold">
                <Star className="w-3.5 h-3.5 fill-current" />
                <span>4.6★</span>
              </span>
              <span>·</span>
              <span>Google Maps Oficial</span>
              <span>·</span>
              <span>10 Avaliações</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navegação
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#servicos" className="hover:text-emerald-400 transition-colors">
                  Serviços de Brilho
                </a>
              </li>
              <li>
                <a href="#resultados" className="hover:text-emerald-400 transition-colors">
                  Antes e Depois (Resultados)
                </a>
              </li>
              <li>
                <a href="#orcamento" className="hover:text-emerald-400 transition-colors">
                  Calculadora de Orçamento
                </a>
              </li>
              <li>
                <a href="#avaliacoes" className="hover:text-emerald-400 transition-colors">
                  Depoimentos de Clientes
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-emerald-400 transition-colors">
                  Sobre a NKW no Litoral
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-emerald-400 transition-colors">
                  Perguntas Frequentes
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Location Info */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Contato & Localização
            </h4>
            <div className="space-y-2.5 text-sm">
              <p className="flex items-start gap-2.5 text-slate-400">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}</span>
              </p>
              <p className="flex items-center gap-2.5 text-slate-400">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="hover:text-white transition-colors">
                  {COMPANY_INFO.phone}
                </a>
              </p>
              <p className="flex items-center gap-2.5 text-slate-400">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={createWhatsAppUrl(COMPANY_INFO.whatsappMessageDefault)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp: {COMPANY_INFO.phone}
                </a>
              </p>
            </div>

            <div className="pt-2">
              <a
                href={COMPANY_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-xs text-emerald-400 hover:underline"
              >
                Ver localização no Google Maps →
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Terms Notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} NKW Serviços e Limpeza Bertioga, Riviera e Boracéia. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4">
            <a href="#contato" className="hover:text-slate-400 transition-colors">
              Fale Conosco
            </a>
            <span>·</span>
            <a href="#faq" className="hover:text-slate-400 transition-colors">
              Dúvidas
            </a>
            <span>·</span>
            <span>Bertioga - SP</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
