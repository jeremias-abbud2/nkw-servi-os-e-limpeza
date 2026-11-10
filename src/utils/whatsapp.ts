import { COMPANY_INFO } from '../data/content';

export function createWhatsAppUrl(message: string): string {
  const encoded = encodeURIComponent(message.trim());
  return `https://wa.me/${COMPANY_INFO.phoneRaw}?text=${encoded}`;
}

export function createBudgetWhatsAppMessage(details: {
  propertyType: string;
  sizeRange: string;
  serviceType: string;
  extras: string[];
  frequency: string;
  estimatedPrice: string;
  estimatedTime: string;
}): string {
  const extrasText = details.extras.length > 0 ? details.extras.join(', ') : 'Nenhum adicional selecionado';
  return `Olá, equipe NKW! Vim pelo simulador do site e gostaria de agendar/confirmar este orçamento:

📍 *Tipo de Imóvel:* ${details.propertyType}
📐 *Metragem aproximada:* ${details.sizeRange}
✨ *Tipo de Serviço:* ${details.serviceType}
🛠️ *Adicionais:* ${extrasText}
🔄 *Frequência:* ${details.frequency}
⏱️ *Tempo Estimado:* ${details.estimatedTime}
💰 *Estimativa do Site:* ${details.estimatedPrice}

Gostaria de verificar a disponibilidade de datas para Bertioga / Riviera / Boracéia.`;
}

export function createContactFormWhatsAppMessage(data: {
  name: string;
  phone: string;
  location: string;
  serviceType: string;
  datePreference: string;
  notes?: string;
}): string {
  return `Olá, equipe NKW! Solicito orçamento e agendamento pelo site:

👤 *Nome:* ${data.name}
📱 *Telefone/WhatsApp:* ${data.phone}
📍 *Localização:* ${data.location}
🧹 *Serviço:* ${data.serviceType}
📅 *Data Preferencial:* ${data.datePreference || 'A combinar'}
${data.notes ? `📝 *Observações:* ${data.notes}` : ''}

Poderiam me passar os detalhes e confirmar a data? Obrigado!`;
}
