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
    name: 'Valentina',
    price: 450000,
    imageUrl: '/images/quinceañeras/quince0001.png',
    category: 'fifteenth',
    collection: 'Quinceañeras Edition',
    description: 'Corset de bordado floral en tono celeste sobre tul ilusión, con falda brillante de tajo pronunciado para una entrada llena de movimiento.',
    fabrics: ['Tul glitter', 'Encaje floral bordado', 'Bustier con ballenas'],
    details: ['Corset con bordado 3D', 'Tajo lateral pronunciado', 'Breteles finos ajustables']
  },
  {
    id: 'q2',
    name: 'Isabella',
    price: 430000,
    imageUrl: '/images/quinceañeras/quince0002.png',
    category: 'fifteenth',
    collection: 'Quinceañeras Edition',
    description: 'Vestido asimétrico en fucsia con cuello halter cruzado bordado en pedrería y falda de tul por capas, corta adelante y larga atrás para destacar en la pista.',
    fabrics: ['Tul plisado', 'Pedrería bordada a mano'],
    details: ['Cuello halter cruzado', 'Falda en capas asimétrica', 'Espalda descubierta']
  },
  {
    id: 'q3',
    name: 'Camila',
    price: 350000,
    imageUrl: '/images/quinceañeras/quince0003.png',
    category: 'fifteenth',
    collection: 'Quinceañeras Edition',
    description: 'Vestido corto strapless en celeste, con bordado de strass en el corpiño y falda de organza en capas con volados, ideal para la fiesta.',
    fabrics: ['Organza de seda', 'Strass bordado'],
    details: ['Escote corazón strapless', 'Falda corta con volados en capas', 'Cintura marcada con pedrería']
  },
  {
    id: 'q4',
    name: 'Antonella',
    price: 400000,
    imageUrl: '/images/quinceañeras/quince0004.png',
    category: 'fifteenth',
    collection: 'Quinceañeras Edition',
    description: 'Silueta princesa en tono lila con corpiño de encaje floral bordado y falda amplia de tul con aplicaciones, para una quinceañera de cuento.',
    fabrics: ['Tul princesa', 'Encaje floral con apliques'],
    details: ['Corpiño bordado con breteles finos', 'Falda amplia tipo princesa', 'Aplicaciones florales en la falda']
  },
  {
    id: 'q5',
    name: 'Martina',
    price: 400000,
    imageUrl: '/images/quinceañeras/quince0005.png',
    category: 'fifteenth',
    collection: 'Quinceañeras Edition',
    description: 'Vestido en tono champagne con corpiño bordado en pedrería y flores 3D sobre tul brillante, falda amplia estilo princesa para la gran entrada.',
    fabrics: ['Tul brillante', 'Pedrería y flores 3D bordadas'],
    details: ['Corpiño bordado con breteles finos', 'Falda princesa con brillo', 'Escote corazón']
  },
  {
    id: 'q6',
    name: 'Emilia',
    price: 350000,
    imageUrl: '/images/quinceañeras/quince0006.png',
    category: 'fifteenth',
    collection: 'Quinceañeras Edition',
    description: 'Conjunto de dos piezas en celeste con top halter bordado en strass y falda corta de tul, perfecto para el festejo y el after.',
    fabrics: ['Tul', 'Encaje bordado en strass'],
    details: ['Top crop con cuello halter', 'Cintura marcada con pedrería', 'Falda corta con vuelo']
  },

  // Novias
  {
    id: 'b1',
    name: 'Amelie',
    price: 460000,
    imageUrl: '/images/novias/novia001.png',
    category: 'novias',
    collection: 'Colección Exclusiva',
    description: 'Silueta envolvente con escote drapeado estilo cowl y finas tiras, pensada para una novia que busca sensualidad contenida y movimiento fluido al caminar.',
    fabrics: ['Satén de seda', 'Crepe fluido'],
    details: ['Escote drapeado tipo cowl', 'Tajo lateral pronunciado', 'Espalda descubierta con tiras cruzadas']
  },
  {
    id: 'b2',
    name: 'Juliette',
    price: 500000,
    imageUrl: '/images/novias/novia002.png',
    category: 'novias',
    collection: 'Colección Exclusiva',
    description: 'Silueta princesa con corpiño de encaje ilusión y falda amplia de satén, pensada para novias que buscan volumen y sofisticación clásica.',
    fabrics: ['Encaje de Alençon', 'Satén de seda', 'Tul rígido'],
    details: ['Corpiño bordado con escote corazón', 'Falda amplia con bolsillos ocultos', 'Breteles finos bordados']
  },
  {
    id: 'b3',
    name: 'Antoinette',
    price: 400000,
    imageUrl: '/images/novias/novia003.png',
    category: 'novias',
    collection: 'Colección Exclusiva',
    description: 'Conjunto de blazer estructurado y pantalón sastre sobre body de encaje, para la novia moderna que reinterpreta el traje de ceremonia clásico.',
    fabrics: ['Crepe estructurado', 'Encaje floral'],
    details: ['Blazer entallado de solapa', 'Bodice de encaje con escote corazón', 'Pantalón de tiro alto a medida']
  },
  {
    id: 'b4',
    name: 'Margarita',
    price: 460000,
    imageUrl: '/images/novias/novia004.png',
    category: 'novias',
    collection: 'Colección Exclusiva',
    description: 'Conjunto de dos piezas con top cropped de encaje de manga larga y falda amplia de satén con tajo, ideal para una ceremonia con aire contemporáneo.',
    fabrics: ['Encaje floral', 'Satén de seda'],
    details: ['Top cropped con mangas de encaje', 'Falda amplia con tajo frontal', 'Cierre invisible en la espalda']
  },
  {
    id: 'b5',
    name: 'Celestine',
    price: 370000,
    imageUrl: '/images/novias/novia005.png',
    category: 'novias',
    collection: 'Colección Exclusiva',
    description: 'Jumpsuit de un solo hombro con manga capa drapeada y pantalón palazzo, pensado para la novia que busca una silueta moderna sin perder elegancia.',
    fabrics: ['Crepe de seda', 'Gasa fluida'],
    details: ['Hombro único con manga capa', 'Pantalón palazzo de tiro alto', 'Bolsillos laterales ocultos']
  },
  {
    id: 'b6',
    name: 'Odette',
    price: 500000,
    imageUrl: '/images/novias/novia006.png',
    category: 'novias',
    collection: 'Colección Exclusiva',
    description: 'Silueta sirena envolvente con cuello alto de encaje floral y mangas largas ilusión, rematada en tajo frontal profundo sobre satén líquido.',
    fabrics: ['Encaje floral ilusión', 'Satén líquido'],
    details: ['Cuello alto con mangas de encaje', 'Silueta sirena ajustada', 'Tajo frontal profundo']
  },
  {
    id: 'b7',
    name: 'Seraphine',
    price: 340000,
    imageUrl: '/images/novias/novia007.png',
    category: 'novias',
    collection: 'Colección Exclusiva',
    description: 'Vestido corto de escote profundo en V y mangas abullonadas, pensado para la fiesta post-ceremonia o una boda civil íntima.',
    fabrics: ['Chiffon de seda'],
    details: ['Escote profundo en V', 'Mangas abullonadas tipo obispo', 'Falda corta con vuelo']
  },
  {
    id: 'b8',
    name: 'Elodie',
    price: 500000,
    imageUrl: '/images/novias/novia008.png',
    category: 'novias',
    collection: 'Colección Exclusiva',
    description: 'Vestido clásico de silueta amplia con escote cuadrado, mangas de encaje y cola catedral bordada, para la novia que sueña con una ceremonia tradicional.',
    fabrics: ['Encaje bordado', 'Satén de seda', 'Tul para velo'],
    details: ['Escote cuadrado con mangas de encaje', 'Falda amplia con bordado floral', 'Cola catedral a juego con el velo']
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
