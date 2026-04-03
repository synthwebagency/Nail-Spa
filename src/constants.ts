import { Service, Review, GalleryImage } from './types';

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Manicure',
    description: 'Cuidado especializado das unhas, tratamento de cutículas e aplicação de verniz premium para mãos perfeitamente cuidadas.',
    icon: 'Hand',
  },
  {
    id: '2',
    title: 'Pedicure',
    description: 'Banho relaxante para os pés, esfoliação e cuidado das unhas para o máximo conforto e estilo.',
    icon: 'Footprints',
  },
  {
    id: '3',
    title: 'Unhas em Gel',
    description: 'Aplicação de gel duradoura e resistente com um acabamento de alto brilho que permanece impecável por semanas.',
    icon: 'Sparkles',
  },
  {
    id: '4',
    title: 'Nail Art',
    description: 'Designs personalizados que variam desde detalhes minimalistas até obras-primas pintadas à mão.',
    icon: 'Palette',
  },
];

export const REVIEWS: Review[] = [
  {
    id: '1',
    name: 'The Nail Spa',
    rating: 5,
    comment: 'Prestamos serviços de unhas de alto nível com precisão, cuidado e um ambiente relaxante.',
  },
  {
    id: '2',
    name: 'Aki Koba',
    rating: 5,
    comment: 'Funcionárias muito atenciosas, boa comunicação e flexibilidade no atendimento.',
  },
  {
    id: '3',
    name: 'ChrisCross',
    rating: 5,
    comment: 'Melhor experiência de manicure e pedicure em Maputo. Qualidade e serviço excelentes.',
  },
];

// Generate 8 mock gallery images
export const GALLERY_IMAGES: GalleryImage[] = Array.from({ length: 8 }, (_, i) => ({
  id: `${i + 1}`,
  url: `/images/gallery-${i + 1}.jpg`,
  alt: `Imagem da Galeria The Nail Spa ${i + 1}`,
}));

export const MENU_CATEGORIES = [
  {
    id: 'standard',
    name: 'Manicure & Pedicure',
    icon: 'Hand',
    type: 'table',
    headers: ['Serviço', 'Verniz', 'Verniz de Gel'],
    items: [
      { service: 'Pedicure Clássico', polish: '650', gel: '1450' },
      { service: 'Pedicure Spa', polish: '1000', gel: '1800' },
      { service: 'Formato, Buff & Brilho/Pintura', polish: '500', gel: '500' },
      { service: 'Pintura Francesa', polish: '200+', gel: '-' },
      { service: 'Remover Gel + Pintura', polish: '700', gel: '1250' },
      { service: 'Remover Gel + Tratamento', polish: '350+', gel: '-' },
      { service: 'Remover Gel', polish: '500', gel: '-' },
    ]
  },
  {
    id: 'men',
    name: 'Para Ele',
    icon: 'User',
    type: 'list',
    items: [
      { name: 'Manicure Clássico', price: '250' },
      { name: 'Spa Manicure', price: '500' },
      { name: 'Pedicure Clássico', price: '450' },
      { name: 'Spa Pedicure', price: '1000' },
      { name: 'Aparar, Buff & Brilho', price: '450' },
    ]
  },
  {
    id: 'children',
    name: 'Crianças',
    icon: 'Baby',
    type: 'table',
    headers: ['Serviço', 'Verniz', 'Verniz de Gel'],
    items: [
      { service: 'Mini Manicure', polish: '400', gel: '1100' },
      { service: 'Mini Pedicure', polish: '550', gel: '1200' },
      { service: 'Formato, Buff & Pintar', polish: '350', gel: '700' },
      { service: 'Remover Gel + Tratamento', polish: '350+', gel: '-' },
      { service: 'Remover Gel', polish: '400', gel: '-' },
    ]
  },
  {
    id: 'massage',
    name: 'Massagem',
    icon: 'Wind',
    type: 'massage-grid',
    note: 'Duração: 15 / 30 / 45 minutos. Extra Hot Stone: +150',
    headers: ['Tipo', 'Mão', 'Pé', 'Pescoço/Ombros'],
    items: [
      { type: 'De-stress Clássico', hand: '250 / 450', foot: '500 / 700', neck: '600 / 800' },
      { type: 'Aromaterapia', hand: '600', foot: '650 / 850', neck: '750 / 900' },
      { type: 'Vela de Soja', hand: '750', foot: '800 / 950', neck: '900 / 1100' },
    ]
  },
  {
    id: 'art',
    name: 'Nail Art & Extras',
    icon: 'Palette',
    type: 'grid',
    items: [
      { name: 'Diamante', price: '30 / 40 / 50' },
      { name: 'Stickers', price: '30' },
      { name: 'Mão Livre', price: '30 / 50 / 80' },
      { name: 'Francesa', price: '30' },
      { name: 'Brilhantes', price: '30–100' },
      { name: 'Cromo', price: '50' },
      { name: 'Estampagem', price: '50' },
    ]
  },
  {
    id: 'additional',
    name: 'Tratamentos Adicionais',
    icon: 'PlusCircle',
    type: 'list',
    items: [
      { name: 'Remover Cutículas', price: '310' },
      { name: 'Esfoliação', price: '200' },
      { name: 'Diminuir Calos', price: '350' },
      { name: 'Máscara Hidratante', price: '350' },
      { name: 'Parafina (Fria/Quente)', price: '350 / 450' },
    ]
  }
];
