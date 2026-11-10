import React, { useState } from 'react';
import { ChevronDown, MessageCircle, HelpCircle } from 'lucide-react';
import { FAQS } from '../data/content';
import { createWhatsAppUrl } from '../utils/whatsapp';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-20 bg-[#F7F7F7] border-b border-[#D9D9D9]/70">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#3D7A60] uppercase mb-2">
            <HelpCircle className="w-4 h-4" />
            <span>Tire Suas Dúvidas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A1128] font-display tracking-tight [text-wrap:balance]">
            Perguntas Frequentes
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Respostas transparentes sobre nossa metodologia, atuação no litoral norte e segurança para casas de veraneio.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white rounded-xl border border-slate-200/90 shadow-sm overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggle(faq.id)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-slate-50/70 transition-colors"
                >
                  <span className="text-sm sm:text-base font-bold text-[#0A1128] font-display">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-[#EBF3EF] text-[#3D7A60]' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100 animate-in fade-in-50 duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Extra question helper */}
        <div className="mt-12 text-center bg-white rounded-2xl p-6 border border-slate-200">
          <p className="text-sm font-semibold text-[#0A1128]">
            Sua dúvida não foi respondida acima?
          </p>
          <p className="text-xs text-slate-500 mt-1 mb-4">
            Nossa equipe responde em instantes no WhatsApp para te ajudar.
          </p>
          <a
            href={createWhatsAppUrl('Olá! Tenho uma dúvida específica sobre o atendimento da NKW em Bertioga.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#3D7A60] hover:bg-[#2F634E] rounded-lg transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-200" />
            <span>Perguntar no WhatsApp Agora</span>
          </a>
        </div>
      </div>
    </section>
  );
};
