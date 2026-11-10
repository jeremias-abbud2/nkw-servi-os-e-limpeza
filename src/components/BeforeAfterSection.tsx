import React, { useState, useRef } from 'react';
import { Sparkles, MoveHorizontal, CheckCircle2, Eye } from 'lucide-react';
import { createWhatsAppUrl } from '../utils/whatsapp';

export const BeforeAfterSection: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    handleMove(e.clientX);
  };

  return (
    <section id="resultados" className="py-20 bg-white border-b border-[#D9D9D9]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#3D7A60] uppercase mb-2">
            <span>Prova Visual & Transparência</span>
            <span aria-hidden="true">·</span>
            <span>Padrão Litoral</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A1128] font-display tracking-tight [text-wrap:balance]">
            Resultados Que Você Vê e Sente
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Arraste o cursor para comparar o estado real de uma casa de praia antes e depois da higienização especializada da NKW.
          </p>
        </div>

        {/* Interactive Comparison Widget */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          <div className="lg:col-span-8">
            <div
              ref={containerRef}
              onMouseDown={() => (isDragging.current = true)}
              onMouseUp={() => (isDragging.current = false)}
              onMouseLeave={() => (isDragging.current = false)}
              onMouseMove={handleMouseMove}
              onTouchMove={handleTouchMove}
              className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden shadow-xl border border-slate-300 select-none cursor-ew-resize group"
            >
              {/* AFTER Image (Background) */}
              <img
                src="/images/hero_beach_house.jpg"
                alt="Ambiente depois da limpeza NKW"
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                referrerPolicy="no-referrer"
              />

              {/* BEFORE Image (Clipped Overlay) */}
              <div
                className="absolute inset-0 overflow-hidden pointer-events-none"
                style={{ width: `${sliderPosition}%` }}
              >
                <img
                  src="/images/before_beach_living.jpg"
                  alt="Ambiente antes da limpeza NKW"
                  className="absolute inset-0 w-full h-full object-cover max-w-none"
                  style={{
                    width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%',
                    height: '100%'
                  }}
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Central Divider Line */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] z-20 pointer-events-none"
                style={{ left: `${sliderPosition}%` }}
              >
                {/* Drag Handle Indicator */}
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white shadow-xl border-2 border-[#3D7A60] flex items-center justify-center text-[#3D7A60]">
                  <MoveHorizontal className="w-5 h-5" />
                </div>
              </div>

              {/* Badges on images */}
              <div className="absolute top-4 left-4 z-10 bg-black/75 backdrop-blur-sm text-white px-3 py-1 rounded text-xs font-semibold tracking-wide">
                ANTES: Areia, maresia e poeira
              </div>
              <div className="absolute top-4 right-4 z-10 bg-[#3D7A60]/95 backdrop-blur-sm text-white px-3 py-1 rounded text-xs font-semibold tracking-wide">
                DEPOIS: Padrão NKW Impecável
              </div>
            </div>

            {/* Range slider and Quick Preset Buttons */}
            <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setSliderPosition(100)}
                  className={`px-3 py-1.5 rounded-lg border text-xs font-medium transition-colors ${
                    sliderPosition === 100
                      ? 'bg-slate-900 text-white border-slate-900'
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  Ver Só Antes
                </button>
                <button
                  type="button"
                  onClick={() => setSliderPosition(50)}
                  className={`px-3 py-1.5 rounded-lg border text-xs font-medium transition-colors ${
                    sliderPosition === 50
                      ? 'bg-slate-900 text-white border-slate-900'
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  50% Divisão
                </button>
                <button
                  type="button"
                  onClick={() => setSliderPosition(0)}
                  className={`px-3 py-1.5 rounded-lg border text-xs font-medium transition-colors ${
                    sliderPosition === 0
                      ? 'bg-[#3D7A60] text-white border-[#3D7A60]'
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  Ver Só Depois
                </button>
              </div>

              <span className="hidden sm:inline-flex items-center gap-1.5">
                <Eye className="w-3.5 h-3.5 text-slate-400" />
                Arraste a linha central para qualquer lado
              </span>
            </div>
          </div>

          {/* Right Column: Key Details That Matter */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
              <h3 className="text-sm font-bold text-[#0A1128] font-display flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#3D7A60]" />
                Zero Risco em Porcelanatos Nobres
              </h3>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                A areia da praia age como uma lixa se esfregada incorretamente. Nossa equipe utiliza primeiro aspiradores industriais específicos para partículas e depois aplica lavagem neutra.
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
              <h3 className="text-sm font-bold text-[#0A1128] font-display flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#3D7A60]" />
                Eliminação de Salitre em Esquadrias
              </h3>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                As esquadrias de alumínio e trilhos das janelas sofrem corrosão silenciosa. Removemos todo o resíduo salino acumulado, restaurando o deslizamento suave das portas.
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
              <h3 className="text-sm font-bold text-[#0A1128] font-display flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#3D7A60]" />
                Casas Fechadas Prontas para Morar
              </h3>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                Ambientes de veraneio acumulam umidade e odor característico. Nossos protocolos incluem ventilação forçada, desinfecção de armários e perfumação leve e elegante.
              </p>
            </div>

            <div className="pt-2">
              <a
                href={createWhatsAppUrl('Olá! Vi os resultados no site e gostaria de agendar uma limpeza para a minha residência.')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-[#3D7A60] hover:bg-[#2F634E] rounded-xl transition-all shadow-sm"
              >
                <Sparkles className="w-4 h-4 text-emerald-200" />
                <span>Quero Minha Casa Assim</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
