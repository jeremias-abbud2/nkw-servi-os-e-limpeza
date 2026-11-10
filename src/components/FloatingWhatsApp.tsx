import React from 'react';
import { MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';
import { createWhatsAppUrl } from '../utils/whatsapp';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <aside aria-label="Atendimento rápido WhatsApp" className="fixed bottom-5 right-5 z-40">
      <a
        href={createWhatsAppUrl(COMPANY_INFO.whatsappMessageDefault)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com a NKW no WhatsApp"
        className="flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white px-4 py-3 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#25D366]"
      >
        <MessageCircle className="w-5 h-5 fill-current shrink-0" />
        <span className="hidden sm:inline-block text-xs font-bold tracking-wide whitespace-nowrap">
          Orçamento WhatsApp
        </span>
      </a>
    </aside>
  );
};
