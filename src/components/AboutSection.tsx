import React from 'react';
import { MapPin, Phone, ShieldCheck, CheckCircle2, Waves, Sparkles, Building2, Calendar } from 'lucide-react';
import { COMPANY_INFO, DIFFERENTIALS } from '../data/content';
import { createWhatsAppUrl } from '../utils/whatsapp';

export const AboutSection: React.FC = () => {
  return (
    <section id="sobre" className="py-20 bg-[#F7F7F7] border-b border-[#D9D9D9]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Narrative and Local Identity */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#3D7A60] uppercase mb-2">
              <span>Compromisso Local</span>
              <span aria-hidden="true">·</span>
              <span>Bertioga, Riviera & Boracéia</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A1128] font-display tracking-tight mb-5 [text-wrap:balance]">
              Sua Parceria de Confiança em Limpeza no Litoral
            </h2>

            <p className="text-base text-slate-700 leading-relaxed mb-4">
              Manter uma residência ou comércio à beira-mar exige muito mais do que uma faxina comum. O salitre da maresia, a areia microscópica que desgasta porcelanatos e a umidade que se acumula quando a casa permanece fechada exigem técnica, produtos adequados e profissionais pontuais.
            </p>

            <p className="text-sm text-slate-600 leading-relaxed mb-8">
              A <strong>NKW Serviços e Limpeza</strong> nasceu para atender com excelência famílias, proprietários de casas de veraneio e comércios em Bertioga, Riviera de São Lourenço e Boracéia. Nossa missão é proporcionar a tranquilidade de descer a serra para descansar e encontrar um refúgio verdadeiramente higienizado, perfumado e reluzente.
            </p>

            {/* 4 Differentials Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {DIFFERENTIALS.map((diff, i) => (
                <div key={i} className="bg-white rounded-xl p-4 border border-slate-200">
                  <span className="text-xs font-semibold text-[#3D7A60]">{diff.stat}</span>
                  <h4 className="text-sm font-bold text-[#0A1128] font-display mt-0.5 mb-1">
                    {diff.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {diff.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Address & Operations Card */}
            <div className="bg-white rounded-2xl p-5 border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#3D7A60] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Nossa Localização Física
                  </h4>
                  <p className="text-sm font-semibold text-[#0A1128]">
                    {COMPANY_INFO.address}
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {COMPANY_INFO.workingHours}
                  </p>
                </div>
              </div>

              <a
                href={COMPANY_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-xs font-semibold text-[#3D7A60] bg-emerald-50 hover:bg-emerald-100 rounded-lg whitespace-nowrap shrink-0 transition-colors"
              >
                Abrir Mapa
              </a>
            </div>
          </div>

          {/* Right: Regional Coverage Map & Protocol Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#0A1128] text-white rounded-2xl p-7 shadow-xl border border-slate-800">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-emerald-400 font-semibold mb-3">
                <Waves className="w-4 h-4" />
                <span>Raio de Atendimento Completo</span>
              </div>
              <h3 className="text-xl font-bold font-display text-white mb-2">
                Onde a NKW Atua
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-6">
                Equipes móveis prontas para deslocamento com pontualidade nos principais condomínios e bairros da costa:
              </p>

              <div className="grid grid-cols-2 gap-2.5 text-xs mb-6">
                {COMPANY_INFO.regions.map((region) => (
                  <div
                    key={region}
                    className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-200"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span className="truncate">{region}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-300">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  Protocolo com Portarias
                </span>
                <span className="text-emerald-300 font-semibold">100% Seguro</span>
              </div>
            </div>

            {/* Quick reassurance card */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200">
              <h4 className="text-sm font-bold text-[#0A1128] font-display flex items-center gap-2 mb-2">
                <Building2 className="w-4 h-4 text-[#3D7A60]" />
                Mora em São Paulo e desce no fim de semana?
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Você não precisa perder seu sábado limpando a casa. Avise nossa equipe na quinta-feira, deixe a autorização na portaria ou zeladoria e chegue com a casa impecavelmente pronta.
              </p>
              <a
                href={createWhatsAppUrl('Olá! Gostaria de agendar a limpeza da minha casa de veraneio antes de descer para a praia.')}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-[#3D7A60] hover:underline flex items-center gap-1"
              >
                <span>Combinar liberação de chaves pelo WhatsApp</span>
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
