import React, { useState } from 'react';
import { Star, ShieldCheck, ExternalLink, MapPin, MessageCircle } from 'lucide-react';
import { REVIEWS, COMPANY_INFO } from '../data/content';
import { createWhatsAppUrl } from '../utils/whatsapp';

export const ReviewsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('Todas');

  const filteredReviews =
    activeFilter === 'Todas'
      ? REVIEWS
      : REVIEWS.filter((r) => r.tag === activeFilter);

  return (
    <section id="avaliacoes" className="py-20 bg-white border-b border-[#D9D9D9]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Google Maps Rating Proof */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#3D7A60] uppercase mb-2">
              <span>Reputação Verificada</span>
              <span aria-hidden="true">·</span>
              <span>Google Maps Local</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A1128] font-display tracking-tight [text-wrap:balance]">
              O Que Nossos Clientes Dizem
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              Depoimentos reais de quem confia na NKW para manter casas de veraneio, apartamentos e empresas sempre impecáveis em Bertioga e Riviera.
            </p>
          </div>

          {/* Google Maps Score Card */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 flex items-center gap-5 shrink-0">
            <div className="text-center pr-4 border-r border-slate-200">
              <span className="text-3xl font-extrabold text-[#0A1128] font-display tabular-nums">4.6</span>
              <div className="flex items-center justify-center gap-0.5 mt-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs font-bold text-[#0A1128] flex items-center gap-1.5">
                <span>Google Maps Oficial</span>
                <ShieldCheck className="w-4 h-4 text-[#3D7A60]" />
              </p>
              <p className="text-xs text-slate-500 mt-0.5">10 avaliações de clientes reais</p>
              <a
                href={COMPANY_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-[#3D7A60] hover:underline font-medium mt-1"
              >
                <span>Ver no Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Filter Controls (Allowed functional button tabs per section 1.A) */}
        <div className="flex flex-wrap items-center gap-2 mb-8 p-1.5 bg-slate-100 rounded-xl max-w-fit">
          {['Todas', 'Riviera', 'Morada da Praia', 'Boracéia', 'Pós-Obra', 'Temporada'].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                activeFilter === filter
                  ? 'bg-white text-[#0A1128] shadow-sm'
                  : 'text-slate-600 hover:text-[#0A1128]'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredReviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between hover:border-slate-300 transition-colors"
            >
              <div>
                {/* Header: Stars & Date */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(review.rating)
                            ? 'fill-amber-400'
                            : i < review.rating
                            ? 'fill-amber-300'
                            : 'text-slate-200'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-[11px] text-slate-400">{review.date}</span>
                </div>

                {/* Review Text */}
                <p className="text-sm text-slate-700 leading-relaxed mb-6 italic">
                  "{review.text}"
                </p>
              </div>

              {/* Author & Context */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-[#0A1128]">
                    {review.author}
                  </h4>
                  <p className="text-xs text-slate-500 flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3 text-[#3D7A60]" />
                    <span>{review.location}</span>
                  </p>
                </div>
                {review.verified && (
                  <span className="text-[11px] text-[#3D7A60] font-medium flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Verificado</span>
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Callout action */}
        <div className="text-center pt-4">
          <p className="text-sm text-slate-600 mb-4">
            Quer a mesma tranquilidade e padrão impecável para sua casa de praia?
          </p>
          <a
            href={createWhatsAppUrl('Olá! Li os depoimentos no site e gostaria de agendar uma limpeza com a equipe da NKW.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#3D7A60] hover:bg-[#2F634E] rounded-xl shadow transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-emerald-200" />
            <span>Agendar Meu Atendimento no WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
