import React, { useState } from 'react';
import { Calculator, MessageCircle, Sparkles, Check, Clock, Users, ArrowRight } from 'lucide-react';
import { createBudgetWhatsAppMessage, createWhatsAppUrl } from '../utils/whatsapp';

interface BudgetCalculatorProps {
  initialServiceId?: string;
}

export const BudgetCalculator: React.FC<BudgetCalculatorProps> = ({ initialServiceId }) => {
  const [propertyType, setPropertyType] = useState('Casa em Condomínio Fechado');
  const [sizeRange, setSizeRange] = useState('90 a 180 m²');
  const [serviceType, setServiceType] = useState(
    initialServiceId === 'pos-obra'
      ? 'Limpeza Pós-Obra / Reforma'
      : initialServiceId === 'externa-deck'
      ? 'Espaço Gourmet & Decks'
      : 'Limpeza Pré/Pós-Temporada (Veraneio)'
  );
  const [selectedExtras, setSelectedExtras] = useState<string[]>([
    'Tratamento de Panos de Vidro / Sacada'
  ]);
  const [frequency, setFrequency] = useState('Serviço Avulso');

  const toggleExtra = (extra: string) => {
    setSelectedExtras((prev) =>
      prev.includes(extra) ? prev.filter((item) => item !== extra) : [...prev, extra]
    );
  };

  // Calculation logic for estimated transparent range
  const calculateEstimate = () => {
    let baseMin = 280;
    let baseMax = 360;
    let hoursMin = 4;
    let hoursMax = 6;
    let staff = '2 profissionais qualificadas';

    // Size impact
    if (sizeRange === 'Até 90 m²') {
      baseMin = 220;
      baseMax = 290;
      hoursMin = 3;
      hoursMax = 5;
      staff = '1 a 2 profissionais';
    } else if (sizeRange === '90 a 180 m²') {
      baseMin = 320;
      baseMax = 420;
      hoursMin = 4;
      hoursMax = 6;
      staff = '2 profissionais';
    } else if (sizeRange === '180 a 300 m²') {
      baseMin = 450;
      baseMax = 600;
      hoursMin = 5;
      hoursMax = 7;
      staff = '2 a 3 profissionais';
    } else if (sizeRange === 'Acima de 300 m²') {
      baseMin = 650;
      baseMax = 890;
      hoursMin = 6;
      hoursMax = 8;
      staff = '3 a 4 profissionais';
    }

    // Service type impact
    if (serviceType.includes('Pós-Obra')) {
      baseMin = Math.round(baseMin * 1.35);
      baseMax = Math.round(baseMax * 1.45);
      hoursMin += 2;
      hoursMax += 3;
    } else if (serviceType.includes('Pesada')) {
      baseMin = Math.round(baseMin * 1.15);
      baseMax = Math.round(baseMax * 1.25);
    }

    // Extras impact
    const extrasCost = selectedExtras.length * 60;
    baseMin += extrasCost;
    baseMax += extrasCost + 20;

    // Frequency discount
    let frequencyNote = '';
    if (frequency === 'Quinzenal') {
      baseMin = Math.round(baseMin * 0.9);
      baseMax = Math.round(baseMax * 0.9);
      frequencyNote = ' (Inclui ~10% de desconto por recorrência)';
    }

    return {
      priceRange: `R$ ${baseMin} a R$ ${baseMax}${frequencyNote}`,
      timeRange: `${hoursMin} a ${hoursMax} horas`,
      staff
    };
  };

  const estimate = calculateEstimate();

  const handleSendToWhatsApp = () => {
    const message = createBudgetWhatsAppMessage({
      propertyType,
      sizeRange,
      serviceType,
      extras: selectedExtras,
      frequency,
      estimatedPrice: estimate.priceRange,
      estimatedTime: estimate.timeRange
    });
    window.open(createWhatsAppUrl(message), '_blank');
  };

  return (
    <section id="orcamento" className="py-20 bg-[#F7F7F7] border-b border-[#D9D9D9]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#3D7A60] uppercase mb-2">
            <span>Transparência Total</span>
            <span aria-hidden="true">·</span>
            <span>Sem Taxas Ocultas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A1128] font-display tracking-tight [text-wrap:balance]">
            Simulador de Orçamento Instantâneo
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Personalize as características do seu imóvel e receba uma estimativa precisa em tempo real. Você pode enviar a configuração diretamente para nosso WhatsApp para agendamento.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Matrix */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
            {/* Step 1: Tipo de Imóvel */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2.5">
                1. Tipo de Imóvel
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-2 gap-2.5">
                {[
                  'Casa em Condomínio Fechado',
                  'Apartamento / Cobertura',
                  'Casa de Rua / Villagio',
                  'Comercial / Consultório / Pousada'
                ].map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setPropertyType(item)}
                    className={`p-3 text-xs font-medium rounded-xl border text-left transition-all ${
                      propertyType === item
                        ? 'border-[#3D7A60] bg-emerald-50/60 text-[#0A1128] font-semibold'
                        : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Tamanho Aproximado */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2.5">
                2. Metragem Aproximada
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {['Até 90 m²', '90 a 180 m²', '180 a 300 m²', 'Acima de 300 m²'].map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setSizeRange(item)}
                    className={`p-2.5 text-xs text-center font-medium rounded-xl border transition-all ${
                      sizeRange === item
                        ? 'border-[#3D7A60] bg-emerald-50/60 text-[#0A1128] font-semibold'
                        : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Tipo de Serviço */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2.5">
                3. Tipo de Limpeza Necessária
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  'Limpeza Pré/Pós-Temporada (Veraneio)',
                  'Limpeza Pós-Obra / Reforma',
                  'Limpeza Residencial Periódica',
                  'Faxina Pesada & Higienização Completa'
                ].map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setServiceType(item)}
                    className={`p-3 text-xs font-medium rounded-xl border text-left transition-all ${
                      serviceType === item
                        ? 'border-[#3D7A60] bg-emerald-50/60 text-[#0A1128] font-semibold'
                        : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Adicionais Opcionais */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2.5">
                4. Adicionais Especiais (Opcional)
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  'Tratamento de Panos de Vidro / Sacada',
                  'Limpeza de Churrasqueira & Coifa Gourmet',
                  'Lavagem de Deck e Área de Piscina',
                  'Higienização Interna de Armários e Geladeira'
                ].map((extra) => {
                  const isChecked = selectedExtras.includes(extra);
                  return (
                    <button
                      key={extra}
                      type="button"
                      onClick={() => toggleExtra(extra)}
                      className={`p-3 text-xs rounded-xl border text-left flex items-center justify-between transition-all ${
                        isChecked
                          ? 'border-[#3D7A60] bg-emerald-50/50 text-[#0A1128] font-medium'
                          : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300'
                      }`}
                    >
                      <span>{extra}</span>
                      <div
                        className={`w-4 h-4 rounded flex items-center justify-center shrink-0 border ${
                          isChecked
                            ? 'bg-[#3D7A60] border-[#3D7A60] text-white'
                            : 'border-slate-300 bg-white'
                        }`}
                      >
                        {isChecked && <Check className="w-3 h-3" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 5: Frequência */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2.5">
                5. Frequência
              </label>
              <div className="grid grid-cols-3 gap-2">
                {['Serviço Avulso', 'Quinzenal', 'Mensal'].map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setFrequency(item)}
                    className={`p-2.5 text-xs text-center font-medium rounded-xl border transition-all ${
                      frequency === item
                        ? 'border-[#3D7A60] bg-emerald-50/60 text-[#0A1128] font-semibold'
                        : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Sticky Estimation Breakdown Card */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="bg-[#0A1128] text-white rounded-2xl p-6 sm:p-8 shadow-xl border border-slate-800">
              <div className="flex items-center justify-between gap-4 mb-4 pb-4 border-b border-slate-800">
                <span className="text-xs uppercase tracking-wider text-emerald-400 font-semibold flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  Resumo da Simulação
                </span>
                <span className="text-xs text-slate-400">Bertioga / Riviera</span>
              </div>

              {/* Price Estimate Highlight */}
              <div className="mb-6">
                <p className="text-xs text-slate-300 mb-1">Estimativa de Investimento:</p>
                <p className="text-2xl sm:text-3xl font-extrabold font-display text-white tabular-nums tracking-tight">
                  {estimate.priceRange}
                </p>
                <p className="text-[11px] text-slate-400 mt-1">
                  *Faixa indicativa média para o litoral. Valor final validado sem surpresas.
                </p>
              </div>

              {/* Spec Details */}
              <div className="space-y-3 pt-4 border-t border-slate-800/80 text-xs text-slate-300 mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-emerald-400" />
                    Tempo estimado:
                  </span>
                  <span className="font-semibold text-white tabular-nums">{estimate.timeRange}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-emerald-400" />
                    Equipe sugerida:
                  </span>
                  <span className="font-semibold text-white">{estimate.staff}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Produtos & Máquinas:</span>
                  <span className="font-semibold text-emerald-400">Inclusos pela NKW</span>
                </div>
              </div>

              {/* Summary Items Selected */}
              <div className="bg-slate-900/80 rounded-xl p-3.5 text-xs border border-slate-800 space-y-1 text-slate-300 mb-6">
                <p><strong className="text-white">Imóvel:</strong> {propertyType} ({sizeRange})</p>
                <p><strong className="text-white">Serviço:</strong> {serviceType}</p>
                {selectedExtras.length > 0 && (
                  <p><strong className="text-white">Extras:</strong> {selectedExtras.length} selecionado(s)</p>
                )}
              </div>

              {/* WhatsApp CTA with pre-filled message */}
              <button
                type="button"
                onClick={handleSendToWhatsApp}
                className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 text-sm font-semibold text-white bg-[#3D7A60] hover:bg-[#2F634E] rounded-xl shadow-lg transition-all active:scale-[0.98]"
              >
                <MessageCircle className="w-4 h-4 text-emerald-200" />
                <span>Agendar com Este Orçamento</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <p className="text-center text-[11px] text-slate-400 mt-3">
                Resposta rápida no WhatsApp da NKW · (13) 99732-6635
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
