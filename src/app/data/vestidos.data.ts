export type VestidoCategory = 'collection-2026' | 'fifteenth' | 'novias' | 'fiesta-collection';

export interface Vestido {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  category: VestidoCategory;
  featured?: boolean;
  collection?: string;
  description?: string;
  fabrics?: string[];
  details?: string[];
}

export const CATEGORY_META: Record<VestidoCategory, { title: string; tag: string; path: string }> = {
  'collection-2026': { title: 'Collection 2026', tag: 'Nocturne Collection', path: 'collection' },
  fifteenth: { title: 'Quinceañeras', tag: 'Quinceañeras Edition', path: 'fifteenth' },
  novias: { title: 'Novias Collection', tag: 'Colección Exclusiva', path: 'novias' },
  'fiesta-collection': { title: 'Fiesta Collection', tag: 'Fiesta Edition', path: 'fiesta-collection' }
};

export const VESTIDOS: Vestido[] = [
  // Collection 2026
  {
    id: 'c1',
    name: 'Aurora',
    price: 2400,
    imageUrl: '/images/VestidoAurora.png',
    category: 'collection-2026',
    featured: true,
    collection: 'Nocturne Collection',
    description: 'Un diseño etéreo de silueta sirena que evoca el romanticismo oscuro. Confeccionado artesanalmente para envolver la figura con gracia dramática.',
    fabrics: ['Seda rasada premium', 'Encaje de Chantilly importado', 'Tul nupcial ultra suave'],
    details: ['Mangas de encaje desmontables', 'Bustier estructurado con ballenas', 'Cola catedral de 1.5 metros']
  },
  {
    id: 'c2',
    name: 'Amelie',
    price: 3100,
    imageUrl: '/images/VestidoAmelie.png',
    category: 'collection-2026',
    featured: true,
    collection: 'Nocturne Collection',
    description: 'Una pieza escultural de hombros caídos que celebra las líneas puras y el minimalismo sofisticado, ideal para una presencia imponente y memorable.',
    fabrics: ['Crepe de seda pesado', 'Forrería de satén elastizado'],
    details: ['Escote drapeado fluido', 'Ajuste corsetero interno invisible', 'Cierre oculto en espalda']
  },
  {
    id: 'c3',
    name: 'Victoria',
    price: 4200,
    imageUrl: '/images/VestidoVictoria.png',
    category: 'collection-2026',
    featured: true,
    collection: 'Atelier 2026',
    description: 'Inspirado en la dualidad y el misterio teatral. Destaca por su impactante tajo lateral y un delicado juego de cintas entrelazadas en la espalda descubierta.',
    fabrics: ['Raso de seda italiano', 'Gasa de seda flotante'],
    details: ['Espalda abierta con lazo regulable', 'Tajo profundo estilizado', 'Falda con movimiento etéreo']
  },

  // Quinceañeras
  {
    id: 'q1',
    name: 'Amelie',
    price: 150000,
    imageUrl: '/images/VestidoAmelie.png',
    category: 'fifteenth',
    collection: 'Quinceañeras Edition',
    description: 'Un diseño romántico y atemporal que combina delicadeza y elegancia en cada detalle de su confección.',
    fabrics: ['Encaje francés', 'Tul bordado', 'Satén de seda'],
    details: ['Escote corazón', 'Espalda semi-abierta', 'Cola capilla']
  },
  {
    id: 'q2',
    name: 'Juliette',
    price: 175000,
    imageUrl: '/images/VestidoAurora.png',
    category: 'fifteenth',
    collection: 'Quinceañeras Edition',
    description: 'Silueta princesa con un toque moderno, pensada para quinceañeras que buscan volumen y sofisticación.',
    fabrics: ['Organza de seda', 'Encaje de Alençon', 'Tul rígido'],
    details: ['Corpiño bordado a mano', 'Falda con múltiples capas', 'Cierre de botones forrados']
  },
  {
    id: 'q3',
    name: 'Antoinette',
    price: 190000,
    imageUrl: '/images/VestidoVictoria.png',
    category: 'fifteenth',
    collection: 'Quinceañeras Edition',
    description: 'Una pieza de inspiración clásica con líneas depuradas y un diseño que resalta la elegancia natural.',
    fabrics: ['Mikado de seda', 'Encaje de Chantilly', 'Crepe satinado'],
    details: ['Escote bardot', 'Cintura marcada', 'Falda estructurada con cola']
  },

  // Novias
  {
    id: 'b1',
    name: 'Amelie',
    price: 150000,
    imageUrl: '/images/VestidoAmelie.png',
    category: 'novias',
    collection: 'Colección Exclusiva',
    description: 'Un diseño romántico y atemporal que combina delicadeza y elegancia en cada detalle de su confección.',
    fabrics: ['Encaje francés', 'Tul bordado', 'Satén de seda'],
    details: ['Escote corazón', 'Espalda semi-abierta', 'Cola capilla']
  },
  {
    id: 'b2',
    name: 'Juliette',
    price: 175000,
    imageUrl: '/images/VestidoAurora.png',
    category: 'novias',
    collection: 'Colección Exclusiva',
    description: 'Silueta princesa con un toque moderno, pensada para novias que buscan volumen y sofisticación.',
    fabrics: ['Organza de seda', 'Encaje de Alençon', 'Tul rígido'],
    details: ['Corpiño bordado a mano', 'Falda con múltiples capas', 'Cierre de botones forrados']
  },
  {
    id: 'b3',
    name: 'Antoinette',
    price: 190000,
    imageUrl: '/images/VestidoVictoria.png',
    category: 'novias',
    collection: 'Colección Exclusiva',
    description: 'Una pieza de inspiración clásica con líneas depuradas y un diseño que resalta la elegancia natural.',
    fabrics: ['Mikado de seda', 'Encaje de Chantilly', 'Crepe satinado'],
    details: ['Escote bardot', 'Cintura marcada', 'Falda estructurada con cola']
  },

  // Fiesta Collection
  {
    id: 'fi1',
    name: 'Amelie',
    price: 150000,
    imageUrl: '/images/VestidoAmelie.png',
    category: 'fiesta-collection',
    collection: 'Fiesta Edition',
    description: 'Un diseño romántico y atemporal que combina delicadeza y elegancia en cada detalle de su confección.',
    fabrics: ['Encaje francés', 'Tul bordado', 'Satén de seda'],
    details: ['Escote corazón', 'Espalda semi-abierta', 'Cola capilla']
  },
  {
    id: 'fi2',
    name: 'Juliette',
    price: 175000,
    imageUrl: '/images/VestidoAurora.png',
    category: 'fiesta-collection',
    collection: 'Fiesta Edition',
    description: 'Silueta moderna de movimiento fluido, pensada para brillar en pista con sofisticación.',
    fabrics: ['Organza de seda', 'Encaje de Alençon', 'Tul rígido'],
    details: ['Corpiño bordado a mano', 'Falda con múltiples capas', 'Cierre de botones forrados']
  },
  {
    id: 'fi3',
    name: 'Antoinette',
    price: 190000,
    imageUrl: '/images/VestidoVictoria.png',
    category: 'fiesta-collection',
    collection: 'Fiesta Edition',
    description: 'Una pieza de inspiración clásica con líneas depuradas y un diseño que resalta la elegancia natural.',
    fabrics: ['Mikado de seda', 'Encaje de Chantilly', 'Crepe satinado'],
    details: ['Escote bardot', 'Cintura marcada', 'Falda estructurada con cola']
  }
];
