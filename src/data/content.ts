export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  badge?: string;
  idealFor: string;
  estimatedTime: string;
  features: string[];
  image?: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  location: string;
  tag: 'Riviera' | 'Morada da Praia' | 'Boracéia' | 'Pós-Obra' | 'Temporada';
  rating: number;
  date: string;
  text: string;
  verified: boolean;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const COMPANY_INFO = {
  name: 'NKW Serviços e Limpeza Bertioga, Riviera e Boracéia',
  shortName: 'NKW Limpeza',
  phone: '(13) 99732-6635',
  phoneRaw: '5513997326635',
  whatsappMessageDefault: 'Olá! Vim pelo site da NKW e gostaria de solicitar um orçamento para limpeza em Bertioga/Riviera.',
  address: 'R. Boracéia, 13 - Morada da Praia, Bertioga - SP, 11250-000',
  city: 'Bertioga - SP',
  rating: 4.6,
  reviewsCount: 10,
  googleMapsUrl: 'https://maps.google.com/?q=R.+Borac%C3%A9ia,+13+-+Morada+da+Praia,+Bertioga+-+SP,+11250-000',
  workingHours: 'Segunda a Sábado: 07h00 às 19h00 (Plantão aos Domingos sob agendamento)',
  regions: [
    'Riviera de São Lourenço',
    'Morada da Praia',
    'Boracéia',
    'Guaratuba',
    'Indaiá',
    'Jardim São Lourenço',
    'Centro de Bertioga',
    'Maitinga'
  ]
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'veraneio',
    title: 'Limpeza Residencial & Veraneio',
    subtitle: 'Sua casa pronta para relaxar sem cheiro de mofo ou areia',
    description: 'Higienização completa para casas e apartamentos de praia. Ideal tanto para manutenção periódica quanto para o pré-embarque da sua família no final de semana ou feriado prolongado.',
    badge: 'Mais Procurado',
    idealFor: 'Casas em condomínio e apartamentos de veraneio',
    estimatedTime: '4 a 7 horas (conforme metragem)',
    features: [
      'Remoção profunda de areia fina em todos os cômodos e rodapés',
      'Desumidificação e aeração de ambientes que ficaram fechados',
      'Higienização rigorosa de banheiros, suítes e bancadas',
      'Limpeza de cozinhas, geladeiras e eletrodomésticos',
      'Alinhamento e arrumação de roupas de cama e toalhas'
    ],
    image: '/images/hero_beach_house.jpg'
  },
  {
    id: 'pos-obra',
    title: 'Limpeza Pós-Obra & Reformas',
    subtitle: 'Remoção cirúrgica de resíduos sem riscar louças e porcelanatos',
    description: 'Serviço técnico especializado para entregar a obra brilhando. Eliminamos poeira fina de gesso, resquícios de argamassa, cimento e película de rejunte com produtos de pH balanceado.',
    badge: 'Especialidade Técnica',
    idealFor: 'Obras recém-entregues, reformas e retrofit litorâneo',
    estimatedTime: '1 a 2 dias (equipe dedicada)',
    features: [
      'Aspiração industrial de pó de gesso e alvenaria em suspensão',
      'Raspagem técnica de tintas e colas de vidros e esquadrias',
      'Lavagem especializada de pisos nobres, mármores e porcelanatos',
      'Limpeza interna minuciosa de trilhos de janelas e portas de correr',
      'Higienização completa de louças, metais e iluminação'
    ],
    image: '/images/service_post_construction.jpg'
  },
  {
    id: 'externa-deck',
    title: 'Espaço Gourmet, Decks & Churrasqueiras',
    subtitle: 'Área externa reluzente para receber amigos e família',
    description: 'Recuperação visual e higienização pesada de áreas gourmet, pergolados, mesas externas, pedras térmicas, coifas e grelhas de churrasqueira após festas ou antes da temporada.',
    idealFor: 'Espaços de lazer, áreas de piscina e churrasqueiras',
    estimatedTime: '3 a 5 horas',
    features: [
      'Desengorduramento pesado de grelhas, coifas e bancadas gourmet',
      'Lavagem de pisos atérmicos e decks de madeira com hidro-pressão',
      'Higienização de espreguiçadeiras, mesas e ombrelones',
      'Remoção de marcas de cloro, folhas e umidade acumulada',
      'Limpeza de lavabos externos e área da piscina'
    ],
    image: '/images/service_beach_patio.jpg'
  },
  {
    id: 'vidros-esquadrias',
    title: 'Vidraçarias & Tratamento Anti-Maresia',
    subtitle: 'Vidros transparentes como água e esquadrias protegidas',
    description: 'No litoral, a maresia cria uma crosta salina opaca que danifica alumínio e vidros. Aplicamos técnicas e produtos desincrustantes para devolver o brilho cristalino aos panos de vidro.',
    idealFor: 'Fechamentos de varanda, guarda-corpos e vitrines',
    estimatedTime: '2 a 4 horas',
    features: [
      'Remoção do filme salino e marcas de chuva ácida/maresia',
      'Limpeza detalhada de guarda-corpos de vidro e sacadas',
      'Desobstrução e lubrificação leve de trilhos de esquadrias',
      'Aplicação de camada repelente de água e poeira',
      'Equipamentos telescópicos para vidros de pé-direito alto'
    ]
  },
  {
    id: 'comercial',
    title: 'Limpeza Comercial, Lojas & Pousadas',
    subtitle: 'Padrão hoteleiro para encantar seus clientes e hóspedes',
    description: 'Atendimento corporativo para comércios locais, pousadas, consultórios e escritórios em Bertioga e Riviera. Manutenção regular com pontualidade e discrição absoluta.',
    idealFor: 'Comércios, escritórios, consultórios e pousadas',
    estimatedTime: 'Horários flexíveis pré-abertura ou pós-fechamento',
    features: [
      'Cronogramas personalizados (diário, semanal ou quinzenal)',
      'Protocolo rigoroso de assepsia e neutralização de odores',
      'Atendimento fora do horário comercial para não interromper clientes',
      'Fornecimento de nota fiscal de serviços e contrato formal',
      'Equipe uniformizada e com treinamento de conduta'
    ]
  }
];

export const REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Marcelo Prado',
    location: 'Riviera de São Lourenço · Módulo 24',
    tag: 'Riviera',
    rating: 5,
    date: 'Há 2 semanas',
    text: 'Sensacional! Minha casa de praia na Riviera estava fechada há quase 3 meses. Cheguei com a família na sexta-feira à noite e a casa estava impecável, sem cheiro de mofo e sem aquele pó de maresia nos vidros. Recomendo de olhos fechados.',
    verified: true
  },
  {
    id: 'rev-2',
    author: 'Carolina Silveira',
    location: 'Morada da Praia · Bertioga',
    tag: 'Morada da Praia',
    rating: 5,
    date: 'Há 1 mês',
    text: 'A NKW cuidou da limpeza pós-obra da minha reforma na Morada da Praia. Tiraram todo aquele pó fino de gesso e deixaram o porcelanato reluzente. Equipe pontual, educada e de total confiança.',
    verified: true
  },
  {
    id: 'rev-3',
    author: 'Dr. Renato Meirelles',
    location: 'Centro de Bertioga',
    tag: 'Pós-Obra',
    rating: 5,
    date: 'Há 1 mês',
    text: 'Contrato a NKW tanto para o meu consultório médico no centro quanto para minha residência. O atendimento pelo WhatsApp é muito rápido e eles cumprem rigorosamente os horários combinados.',
    verified: true
  },
  {
    id: 'rev-4',
    author: 'Patrícia Fontes',
    location: 'Riviera de São Lourenço · Módulo 08',
    tag: 'Temporada',
    rating: 5,
    date: 'Há 2 meses',
    text: 'A limpeza pré-temporada salvou nosso final de ano. Deixei as chaves autorizadas na portaria do condomínio e eles executaram tudo com maestria. Quando cheguei parecia casa de novela.',
    verified: true
  },
  {
    id: 'rev-5',
    author: 'Thiago Albuquerque',
    location: 'Boracéia · Bertioga',
    tag: 'Boracéia',
    rating: 5,
    date: 'Há 2 meses',
    text: 'Excelente serviço. Fizeram a limpeza pesada do deck da piscina e da churrasqueira, que estavam castigados pelo tempo. Ficou tudo novo de novo. Preço justo pela qualidade.',
    verified: true
  },
  {
    id: 'rev-6',
    author: 'Denise Valença',
    location: 'Morada da Praia · Bertioga',
    tag: 'Morada da Praia',
    rating: 4.5,
    date: 'Há 3 meses',
    text: 'Moro em São Paulo e desço nos fins de semana. Deixo a chave na zeladoria e a NKW prepara a casa antes de eu chegar. Chegar na praia e ver a casa perfumada e limpa não tem preço.',
    verified: true
  },
  {
    id: 'rev-7',
    author: 'Fábio Guimarães',
    location: 'Indaiá · Bertioga',
    tag: 'Temporada',
    rating: 5,
    date: 'Há 3 meses',
    text: 'A melhor equipe de limpeza que já contratei no litoral norte. Eles entendem a diferença que a maresia faz e usam os produtos certos para cada superfície. Vale cada centavo.',
    verified: true
  },
  {
    id: 'rev-8',
    author: 'Luciana Brandão',
    location: 'Riviera de São Lourenço · Módulo 18',
    tag: 'Riviera',
    rating: 4.5,
    date: 'Há 4 meses',
    text: 'Atenção aos detalhes incomparável. Limparam até os trilhos embutidos das portas de correr onde sempre acumula areia e salitre. Muito capricho.',
    verified: true
  },
  {
    id: 'rev-9',
    author: 'Roberto Nakashima',
    location: 'Guaratuba · Bertioga',
    tag: 'Temporada',
    rating: 5,
    date: 'Há 4 meses',
    text: 'Alugo meu imóvel no Airbnb na temporada e a agilidade da NKW no turn-around entre hóspedes é essencial. Nunca tive uma reclamação de limpeza dos meus hóspedes.',
    verified: true
  },
  {
    id: 'rev-10',
    author: 'Vanessa Moreira',
    location: 'Morada da Praia · Bertioga',
    tag: 'Morada da Praia',
    rating: 4.5,
    date: 'Há 5 meses',
    text: 'Atendimento muito cortês e atencioso. Facilitou muito a minha vida na preparação das férias de verão. Nota 4.6 no Maps é mais do que merecida!',
    verified: true
  }
];

export const FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'Vocês atendem em todas as regiões de Bertioga, Riviera e Boracéia?',
    answer: 'Sim! Nossa sede fica na Morada da Praia (R. Boracéia, 13) e nossa equipe atende com agilidade toda a extensão de Bertioga, Riviera de São Lourenço, Boracéia, Guaratuba, Indaiá, Maitinga e condomínios vizinhos do litoral norte paulista.'
  },
  {
    id: 'faq-2',
    question: 'Quais tipos de serviço de limpeza vocês oferecem?',
    answer: 'Oferecemos limpeza residencial completa (manutenção, pré e pós-temporada de veraneio), limpeza pós-obra pesada e fina, limpeza de áreas gourmet/churrasqueiras e decks, higienização de vidros contra maresia e limpeza comercial/pousadas.'
  },
  {
    id: 'faq-3',
    question: 'Preciso estar presente no imóvel durante a realização da limpeza?',
    answer: 'Não é necessário. Grande parte dos nossos clientes reside na capital paulista ou ABC e possui casa de veraneio. Trabalhamos frequentemente com autorização prévia na portaria, zeladoria ou com liberação via chaveiros e cofres digitais com total segurança e prestação de contas com fotos antes e depois.'
  },
  {
    id: 'faq-4',
    question: 'A NKW leva os produtos e equipamentos de limpeza?',
    answer: 'Sim, levamos equipamentos profissionais (aspiradores de alta potência para areia e pó, lavadoras de pressão, escovas técnicas) e produtos específicos para o litoral que removem o salitre da maresia sem agredir pisos e esquadrias nobres. Caso você prefira o uso de produtos próprios específicos da sua residência, também nos adaptamos.'
  },
  {
    id: 'faq-5',
    question: 'Como funciona a limpeza pós-obra no litoral?',
    answer: 'A pós-obra no litoral exige cuidado redobrado porque a umidade marítima pode grudar a poeira de gesso e cimento nas esquadrias. Nossa equipe faz aspiração a seco primeiro, seguida da remoção química segura de resíduos de argamassa e polimento final de vidros e louças.'
  },
  {
    id: 'faq-6',
    question: 'Com que antecedência devo agendar para feriados e alta temporada?',
    answer: 'Para períodos de alta demanda (como Réveillon, Carnaval e férias de janeiro), recomendamos agendar com pelo menos 7 a 15 dias de antecedência para garantir sua data preferida. Para limpezas rotineiras e dias de semana normais, costumamos ter disponibilidade com 24h a 48h de antecedência.'
  },
  {
    id: 'faq-7',
    question: 'Quais são as formas de pagamento aceitas?',
    answer: 'Aceitamos PIX, transferência bancária e cartões de crédito. O pagamento é realizado mediante a confirmação da execução do serviço e emissão de recibo/nota fiscal.'
  }
];

export const DIFFERENTIALS = [
  {
    title: 'Profissionalismo que se Vê',
    desc: 'Equipe experiente, uniformizada e produtos de alta qualidade técnica adequados para o clima úmido e salino do litoral.',
    stat: '100% Capacitada'
  },
  {
    title: 'Agilidade na Sua Rotina',
    desc: 'Agende seu serviço com praticidade pelo WhatsApp e tenha mais tempo para desfrutar da praia e do seu descanso.',
    stat: 'Atendimento Rápido'
  },
  {
    title: 'Confiança Comprovada',
    desc: 'Mais de 10 clientes já avaliaram no Google Maps com nota 4.6 estrelas. Segurança máxima para quem mora fora e deixa a chave na zeladoria.',
    stat: 'Nota 4.6★ no Maps'
  },
  {
    title: 'Foco na Realidade da Praia',
    desc: 'Removemos o que a limpeza comum deixa para trás: areia fina em frestas, umidade, cheiro de fechado e películas de salitre em esquadrias.',
    stat: 'Anti-Maresia'
  }
];
