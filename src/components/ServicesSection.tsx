import React from 'react';
import { SERVICES, COMPANY_INFO } from '../data/content';
import { createWhatsAppUrl } from '../utils/whatsapp';
import { Check, MessageCircle, ArrowRight, Sparkles, Building, Home, Sun, Droplets } from 'lucide-react';

interface ServicesSectionProps {
  onSelectServiceForCalculator?: (serviceId: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceForCalculator }) => {
  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'veraneio':
        return <Home className="w-5 h-5 text-[#3D7A60]" />;
      case 'pos-obra':
        return <Sparkles className="w-5 h-5 text-[#3D7A60]" />;
      case 'externa-deck':
        return <Sun className="w-5 h-5 text-[#3D7A60]" />;
      case 'vidros-esquadrias':
        return <Droplets className="w-5 h-5 text-[#3D7A60]" />;
      case 'comercial':
        return <Building className="w-5 h-5 text-[#3D7A60]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#3D7A60]" />;
    }
  };

  return (
    <section id="servicos" className="py-20 bg-[#F7F7F7] border-b border-[#D9D9D9]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#3D7A60] uppercase mb-2">
            <span>Excelência & Cuidado</span>
            <span aria-hidden="true">·</span>
            <span>Atendimento Personalizado</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A1128] font-display tracking-tight [text-wrap:balance]">
            Nossos Serviços de Brilho
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Soluções completas com produtos de alta tecnologia e métodos específicos para vencer o salitre, a areia e a umidade litorânea.
          </p>
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => {
            const hasImage = Boolean(service.image);
            const isLarge = index === 0 || index === 1;

            return (
              <div
                key={service.id}
                className={`bg-white rounded-2xl border border-slate-200 overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300 ${
                  isLarge && index === 0 ? 'lg:col-span-2' : ''
                }`}
              >
                {/* Optional Image */}
                {hasImage && (
                  <div className="relative h-56 sm:h-64 overflow-hidden bg-slate-100 border-b border-slate-100">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded text-xs font-semibold text-[#0A1128]">
                      {service.idealFor}
                    </div>
                  </div>
                )}

                {/* Content */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-4 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center shrink-0">
                        {getServiceIcon(service.id)}
                      </div>
                      <span className="text-xs font-medium text-slate-500 tabular-nums">
                        {service.estimatedTime}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-[#0A1128] font-display mb-1.5">
                      {service.title}
                    </h3>
                    <p className="text-sm font-medium text-[#3D7A60] mb-3">
                      {service.subtitle}
                    </p>
                    <p className="text-sm text-slate-600 leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Deliverables checklist */}
                    <div className="space-y-2 mb-6 pt-4 border-t border-slate-100">
                      <p className="text-xs font-semibold text-slate-800 uppercase tracking-wider mb-2">
                        O que inclui:
                      </p>
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                          <Check className="w-3.5 h-3.5 text-[#3D7A60] shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
                    <a
                      href={createWhatsAppUrl(`Olá! Gostaria de um orçamento para o serviço de *${service.title}* em Bertioga/Riviera.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-[#3D7A60] hover:bg-[#2F634E] rounded-lg transition-colors text-center"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Agendar no WhatsApp</span>
                    </a>

                    <a
                      href="#orcamento"
                      onClick={() => onSelectServiceForCalculator && onSelectServiceForCalculator(service.id)}
                      className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors text-center"
                    >
                      <span>Simular</span>
                      <ArrowRight className="w-3 h-3 text-slate-500" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner for Custom Inquiries */}
        <div className="mt-12 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-lg font-bold text-[#0A1128] font-display">
              Precisa de um atendimento especial ou personalizado?
            </h4>
            <p className="text-sm text-slate-600 mt-1">
              Atendemos condomínios inteiros, pós-festas de família e demandas sob medida para proprietários na capital.
            </p>
          </div>
          <a
            href={createWhatsAppUrl('Olá! Tenho uma necessidade especial de limpeza e gostaria de conversar com a equipe NKW.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-[#0A1128] bg-slate-100 hover:bg-slate-200 border border-slate-300 rounded-xl whitespace-nowrap shrink-0 transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-[#3D7A60]" />
            <span>Falar com Especialista</span>
          </a>
        </div>
      </div>
    </section>
  );
};
