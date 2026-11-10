import React from 'react';
import { MessageCircle, Calculator, Star, ShieldCheck, MapPin, Sparkles, Clock } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';
import { createWhatsAppUrl } from '../utils/whatsapp';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-white border-b border-[#D9D9D9]/60">
      {/* Subtle beach sun & luxury backdrop glow */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-emerald-50/40 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16 lg:pt-14 lg:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Value Proposition & Conversion */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Unboxed Social Proof & Location Tag (Zero-Pill Rule) */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold tracking-wide text-slate-700 uppercase mb-4">
              <span className="flex items-center gap-1 text-[#3D7A60]">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <span>4.6 no Google Maps</span>
              </span>
              <span className="text-slate-300" aria-hidden="true">·</span>
              <span className="text-slate-600">10 Avaliações Verificadas</span>
              <span className="text-slate-300" aria-hidden="true">·</span>
              <span className="flex items-center gap-1 text-slate-600">
                <MapPin className="w-3.5 h-3.5 text-[#3D7A60]" />
                <span>Bertioga, Riviera & Boracéia</span>
              </span>
            </div>

            {/* H1 (Exact copy from PRD with text-wrap: balance) */}
            <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#0A1128] font-display leading-[1.15] tracking-tight mb-5 [text-wrap:balance]">
              Seu Espaço Impecável na Praia: Agende a Limpeza Premium Agora.
            </h1>

            {/* H2 (Exact subtitle from PRD) */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 max-w-2xl">
              Conforto e brilho para sua casa em Bertioga, Riviera e Boracéia. Qualidade que você vê, sente e confia. ★ 4.6 no Google Maps.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-10">
              <a
                href={createWhatsAppUrl(COMPANY_INFO.whatsappMessageDefault)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 text-base font-semibold text-white bg-[#3D7A60] hover:bg-[#2F634E] rounded-xl shadow-md hover:shadow-lg transition-all active:scale-[0.99] text-center"
              >
                <MessageCircle className="w-5 h-5 text-emerald-200 shrink-0" />
                <span>Agendar Limpeza Pelo WhatsApp</span>
              </a>

              <a
                href="#orcamento"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 text-base font-semibold text-[#0A1128] bg-slate-100 hover:bg-slate-200/80 rounded-xl transition-all text-center border border-slate-200"
              >
                <Calculator className="w-5 h-5 text-[#3D7A60] shrink-0" />
                <span>Simular Orçamento</span>
              </a>
            </div>

            {/* Immediate Proof & Security Guarantees */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-200/80 text-left">
              <div>
                <p className="text-2xl font-bold font-display text-[#0A1128] tabular-nums">4.6★</p>
                <p className="text-xs text-slate-500 mt-0.5">Google Maps oficial</p>
              </div>
              <div>
                <p className="text-2xl font-bold font-display text-[#0A1128] tabular-nums">100%</p>
                <p className="text-xs text-slate-500 mt-0.5">Equipe qualificada</p>
              </div>
              <div>
                <p className="text-2xl font-bold font-display text-[#0A1128] tabular-nums">Zero</p>
                <p className="text-xs text-slate-500 mt-0.5">Complicação para agendar</p>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Asset */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200/90 aspect-[4/3] lg:aspect-[16/13] bg-slate-100 group">
              <img
                src="/images/hero_beach_house.jpg"
                alt="Ambiente limpo e impecável de casa de veraneio em Bertioga e Riviera"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
              
              {/* Subtle glass reflection caption */}
              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 bg-gradient-to-t from-[#0A1128]/85 via-[#0A1128]/50 to-transparent text-white">
                <p className="text-sm font-semibold tracking-wide flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                  Padrão Residencial Riviera & Morada da Praia
                </p>
                <p className="text-xs text-slate-300 mt-1">
                  Porcelanatos polidos, esquadrias sem maresia e arejamento total.
                </p>
              </div>
            </div>

            {/* Floating verification badge */}
            <div className="absolute -bottom-4 -left-4 sm:left-4 bg-white/95 backdrop-blur-md rounded-xl p-3.5 shadow-xl border border-slate-200 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#EBF3EF] flex items-center justify-center text-[#3D7A60] shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="text-left pr-2">
                <p className="text-xs font-bold text-[#0A1128]">Chaves Seguras & Portaria</p>
                <p className="text-[11px] text-slate-500">Autorização via condomínio</p>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Item Horizontal Trust Strip below Hero */}
        <div className="mt-14 pt-8 border-t border-slate-200 grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-lg bg-emerald-50 text-[#3D7A60] flex items-center justify-center shrink-0 mt-0.5">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <p className="text-sm font-bold text-[#0A1128]">Profissionalismo que se Vê</p>
              <p className="text-xs text-slate-500 mt-0.5">Equipe capacitada e produtos profissionais para o litoral.</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-lg bg-emerald-50 text-[#3D7A60] flex items-center justify-center shrink-0 mt-0.5">
              <Clock className="w-4 h-4" />
            </div>
            <div>
              <p className="text-sm font-bold text-[#0A1128]">Agilidade na Sua Rotina</p>
              <p className="text-xs text-slate-500 mt-0.5">Agendamento direto pelo WhatsApp sem burocracia.</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-lg bg-emerald-50 text-[#3D7A60] flex items-center justify-center shrink-0 mt-0.5">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            </div>
            <div>
              <p className="text-sm font-bold text-[#0A1128]">Confiança Comprovada</p>
              <p className="text-xs text-slate-500 mt-0.5">Nota 4.6 no Google Maps com depoimentos reais.</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-lg bg-emerald-50 text-[#3D7A60] flex items-center justify-center shrink-0 mt-0.5">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <p className="text-sm font-bold text-[#0A1128]">Base Local em Bertioga</p>
              <p className="text-xs text-slate-500 mt-0.5">Sede na Morada da Praia com atendimento em toda a região.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
