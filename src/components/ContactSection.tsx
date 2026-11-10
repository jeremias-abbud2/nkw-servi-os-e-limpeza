import React, { useState } from 'react';
import { MessageCircle, Phone, MapPin, Clock, Send, CheckCircle2, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';
import { createContactFormWhatsAppMessage, createWhatsAppUrl } from '../utils/whatsapp';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: 'Riviera de São Lourenço',
    serviceType: 'Limpeza Residencial & Veraneio',
    datePreference: '',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      setErrorMsg('Por favor, informe seu nome e telefone/WhatsApp.');
      return;
    }
    setErrorMsg('');
    setSubmitted(true);
  };

  const handleOpenWhatsAppFromForm = () => {
    const message = createContactFormWhatsAppMessage(formData);
    window.open(createWhatsAppUrl(message), '_blank');
  };

  return (
    <section id="contato" className="py-20 bg-white border-b border-[#D9D9D9]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#3D7A60] uppercase mb-2">
            <span>Atendimento Ágil</span>
            <span aria-hidden="true">·</span>
            <span>Sem Burocracia</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A1128] font-display tracking-tight [text-wrap:balance]">
            Pronto para um Espaço Impecável?
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Fale conosco diretamente pelo WhatsApp para agendamento imediato ou envie os detalhes do seu imóvel pelo formulário abaixo.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Form */}
          <div className="lg:col-span-7 bg-[#F7F7F7] rounded-2xl p-6 sm:p-8 border border-slate-200">
            {submitted ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-[#3D7A60] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-[#0A1128] font-display">
                  Solicitação Recebida com Sucesso!
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  Obrigado, <strong>{formData.name}</strong>. Para agilizar seu orçamento e garantir a data em Bertioga/Riviera, clique no botão abaixo para nos enviar os detalhes diretamente no WhatsApp.
                </p>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    type="button"
                    onClick={handleOpenWhatsAppFromForm}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#3D7A60] hover:bg-[#2F634E] rounded-xl shadow transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-200" />
                    <span>Concluir pelo WhatsApp Agora</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="w-full sm:w-auto px-4 py-3 text-xs font-semibold text-slate-600 hover:text-slate-900"
                  >
                    Editar Informações
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-lg font-bold text-[#0A1128] font-display mb-1">
                  Solicitar Orçamento Personalizado
                </h3>
                <p className="text-xs text-slate-500 mb-4">
                  Preencha os campos para receber uma proposta sem compromisso.
                </p>

                {errorMsg && (
                  <div className="p-3 bg-red-50 text-red-700 text-xs rounded-lg border border-red-200">
                    {errorMsg}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Seu Nome Completo *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Ex: Ana Clara Medeiros"
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#3D7A60]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Telefone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="Ex: (11) 98765-4321"
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#3D7A60]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Localização do Imóvel
                    </label>
                    <select
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#3D7A60]"
                    >
                      <option value="Riviera de São Lourenço">Riviera de São Lourenço</option>
                      <option value="Morada da Praia (Bertioga)">Morada da Praia (Bertioga)</option>
                      <option value="Boracéia">Boracéia</option>
                      <option value="Guaratuba">Guaratuba</option>
                      <option value="Indaiá / Cantão">Indaiá / Cantão</option>
                      <option value="Centro de Bertioga">Centro de Bertioga</option>
                      <option value="Maitinga">Maitinga</option>
                      <option value="Outro Condomínio / Região">Outro Condomínio / Região</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Tipo de Serviço
                    </label>
                    <select
                      value={formData.serviceType}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#3D7A60]"
                    >
                      <option value="Limpeza Residencial & Veraneio">Limpeza Residencial & Veraneio</option>
                      <option value="Limpeza Pós-Obra & Reformas">Limpeza Pós-Obra & Reformas</option>
                      <option value="Espaço Gourmet, Decks & Churrasqueiras">Espaço Gourmet, Decks & Churrasqueiras</option>
                      <option value="Tratamento Anti-Maresia de Vidros">Tratamento Anti-Maresia de Vidros</option>
                      <option value="Limpeza Comercial / Pousadas">Limpeza Comercial / Pousadas</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Data ou Período Preferencial
                  </label>
                  <input
                    type="text"
                    value={formData.datePreference}
                    onChange={(e) => setFormData({ ...formData, datePreference: e.target.value })}
                    placeholder="Ex: Próxima quinta-feira, ou antes do dia 20"
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#3D7A60]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Detalhes do Imóvel ou Necessidade
                  </label>
                  <textarea
                    rows={3}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Ex: Casa com 4 quartos e churrasqueira. Ficou fechada 2 meses. Chave estará na portaria."
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#3D7A60]"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#3D7A60] hover:bg-[#2F634E] rounded-xl shadow transition-all active:scale-[0.99]"
                  >
                    <Send className="w-4 h-4 text-emerald-200" />
                    <span>Enviar Solicitação de Orçamento</span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Direct Contact Info & Maps */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#0A1128] text-white rounded-2xl p-6 sm:p-8 shadow-xl border border-slate-800">
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
                Canais Diretos
              </span>
              <h3 className="text-2xl font-bold font-display text-white mt-1 mb-6">
                Fale Diretamente com a NKW
              </h3>

              <div className="space-y-5">
                <a
                  href={createWhatsAppUrl(COMPANY_INFO.whatsappMessageDefault)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-emerald-500/50 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#3D7A60] flex items-center justify-center text-white shrink-0 group-hover:scale-105 transition-transform">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">WhatsApp Comercial</p>
                    <p className="text-sm font-bold text-white">{COMPANY_INFO.phone}</p>
                    <p className="text-[11px] text-emerald-400 mt-0.5">Resposta rápida durante o dia</p>
                  </div>
                </a>

                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="flex items-center gap-4 p-3.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-emerald-500/50 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-emerald-400 shrink-0 group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">Ligação Telefônica</p>
                    <p className="text-sm font-bold text-white">{COMPANY_INFO.phone}</p>
                    <p className="text-[11px] text-slate-400 mt-0.5">Atendimento das 07h às 19h</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                  <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-emerald-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">Endereço (Sede Física)</p>
                    <p className="text-sm font-semibold text-white leading-snug">
                      {COMPANY_INFO.address}
                    </p>
                    <a
                      href={COMPANY_INFO.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-emerald-400 hover:underline font-medium inline-block mt-1"
                    >
                      Abrir no Google Maps →
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                  <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-emerald-400 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">Horário de Funcionamento</p>
                    <p className="text-xs font-medium text-white leading-relaxed mt-0.5">
                      {COMPANY_INFO.workingHours}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
