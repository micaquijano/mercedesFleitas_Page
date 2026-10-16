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
    imageUrl: '/images/quinceaneras/quince0001.png',
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
    imageUrl: '/images/quinceaneras/quince0002.png',
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
    imageUrl: '/images/quinceaneras/quince0003.png',
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
    imageUrl: '/images/quinceaneras/quince0004.png',
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
    imageUrl: '/images/quinceaneras/quince0005.png',
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
    imageUrl: '/images/quinceaneras/quince0006.png',
    category: 'fifteenth',
    collection: 'Quinceañeras Edition',
    description: 'Conjunto de dos piezas en celeste con top halter bordado en strass y falda corta de tul, perfecto para el festejo y el after.',
    fabrics: ['Tul', 'Encaje bordado en strass'],
    details: ['Top crop con cuello halter', 'Cintura marcada con pedrería', 'Falda corta con vuelo']
  },
  {
    id: 'q7',
    name: 'Renata',
    price: 500000,
    imageUrl: '/images/quinceaneras/quince0007.png',
    category: 'fifteenth',
    collection: 'Quinceañeras Edition',
    description: 'Vestido en satén verde salvia con escote corazón drapeado y tajo alto que deja ver una cola fluida, para una silueta elegante y contemporánea.',
    fabrics: ['Satén de seda', 'Forro interior estructurado'],
    details: ['Escote corazón drapeado', 'Tajo lateral alto con cola', 'Bolsillos ocultos en la falda']
  },
  {
    id: 'q8',
    name: 'Catalina',
    price: 420000,
    imageUrl: '/images/quinceaneras/quince0008.png',
    category: 'fifteenth',
    collection: 'Quinceañeras Edition',
    description: 'Vestido dramático en negro y bordó con falda de tul en capas asimétrica, corta adelante y con cola atrás, para una entrada de alto impacto.',
    fabrics: ['Tul en capas', 'Satén bordó interior'],
    details: ['Escote corazón strapless', 'Falda asimétrica hi-lo', 'Capas de tul en contraste de color']
  },
  {
    id: 'q9',
    name: 'Constanza',
    price: 520000,
    imageUrl: '/images/quinceaneras/quince0009.png',
    category: 'fifteenth',
    collection: 'Quinceañeras Edition',
    description: 'Silueta princesa en negro y dorado con corpiño de terciopelo strapless y falda voluminosa cubierta de brillo, pensada para la gran entrada al salón.',
    fabrics: ['Tul glitter', 'Terciopelo en el corpiño'],
    details: ['Corpiño de terciopelo strapless', 'Falda amplia con brillo en degradé', 'Silueta princesa voluminosa']
  },
  {
    id: 'q10',
    name: 'Delfina',
    price: 410000,
    imageUrl: '/images/quinceaneras/quince0010.png',
    category: 'fifteenth',
    collection: 'Quinceañeras Edition',
    description: 'Vestido blanco de breteles finos con corset de encaje y apliques florales 3D, falda asimétrica de tul en capas para un look etéreo.',
    fabrics: ['Encaje con apliques 3D', 'Tul suave'],
    details: ['Corset con breteles finos', 'Falda asimétrica con apliques florales', 'Cola corta en capas']
  },
  {
    id: 'q11',
    name: 'Agustina',
    price: 340000,
    imageUrl: '/images/quinceaneras/quince0011.png',
    category: 'fifteenth',
    collection: 'Quinceañeras Edition',
    description: 'Vestido corto en rosa brillante con breteles anudados en moño y un moño decorativo en la cintura, ideal para una fiesta llena de dulzura.',
    fabrics: ['Tul glitter', 'Cinta de satén para los moños'],
    details: ['Breteles con moños decorativos', 'Moño aplicado en la cintura', 'Falda corta con vuelo']
  },
  {
    id: 'q12',
    name: 'Guadalupe',
    price: 440000,
    imageUrl: '/images/quinceaneras/quince0012.png',
    category: 'fifteenth',
    collection: 'Quinceañeras Edition',
    description: 'Conjunto de dos piezas en celeste con crop top de encaje strapless y falda asimétrica de satén con pedrería en degradé.',
    fabrics: ['Encaje bordado', 'Satén con pedrería en degradé'],
    details: ['Crop top de encaje strapless', 'Falda hi-lo con pedrería', 'Cintura marcada']
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
  {
    id: 'b9',
    name: 'Rosalie',
    price: 480000,
    imageUrl: '/images/novias/novia009.png',
    category: 'novias',
    collection: 'Colección Exclusiva',
    description: 'Vestido de breteles finos con corpiño de encaje floral bordado y falda princesa de tul asimétrica, corta adelante y con cola atrás, para una novia romántica y moderna.',
    fabrics: ['Encaje floral bordado', 'Tul princesa'],
    details: ['Escote corazón con breteles finos', 'Falda asimétrica hi-lo', 'Aplicaciones de encaje en la falda']
  },
  {
    id: 'b10',
    name: 'Vivienne',
    price: 320000,
    imageUrl: '/images/novias/novia010.png',
    category: 'novias',
    collection: 'Colección Exclusiva',
    description: 'Mini vestido de novia con cuello alto y mangas acampanadas de encaje, pensado para la ceremonia civil o la fiesta posterior, acompañado de velo corto.',
    fabrics: ['Encaje floral', 'Satén liviano'],
    details: ['Cuello alto estilo halter', 'Mangas acampanadas de encaje', 'Falda corta con vuelo']
  },

  // Fiesta Collection
  {
    id: 'fi1',
    name: 'Bianca',
    price: 500000,
    imageUrl: '/images/fiestaColletion/diseno001.png',
    category: 'fiesta-collection',
    collection: 'Fiesta Edition',
    description: 'Vestido midi off-shoulder en tono champagne con corset bordado en pedrería y falda de tul brillante con dobladillo contrastante.',
    fabrics: ['Tul glitter', 'Pedrería bordada sobre corset'],
    details: ['Escote off-shoulder drapeado', 'Corset estructurado con ballenas', 'Falda midi con dobladillo contrastante']
  },
  {
    id: 'fi2',
    name: 'Valeria',
    price: 480000,
    imageUrl: '/images/fiestaColletion/diseno002.png',
    category: 'fiesta-collection',
    collection: 'Fiesta Edition',
    description: 'Vestido midi en plata con breteles finos y corpiño bordado en pedrería sobre falda de tul brillante, ideal para una fiesta de gala.',
    fabrics: ['Tul glitter', 'Pedrería bordada'],
    details: ['Corpiño bordado con escote corazón', 'Breteles finos', 'Falda midi con vuelo']
  },
  {
    id: 'fi3',
    name: 'Gianna',
    price: 400000,
    imageUrl: '/images/fiestaColletion/diseno003.png',
    category: 'fiesta-collection',
    collection: 'Fiesta Edition',
    description: 'Jumpsuit negro con apliques de encaje floral 3D en todo el cuerpo y pantalón palazzo cubierto por una capa fluida de tul transparente.',
    fabrics: ['Encaje floral 3D', 'Tul transparente'],
    details: ['Breteles finos con escote corazón', 'Pantalón palazzo de tiro alto', 'Bolsillos laterales ocultos']
  },
  {
    id: 'fi4',
    name: 'Noelia',
    price: 400000,
    imageUrl: '/images/fiestaColletion/diseno004.png',
    category: 'fiesta-collection',
    collection: 'Fiesta Edition',
    description: 'Conjunto de dos piezas con crop top de encaje blanco de cuello alto y falda larga de tul malva con cinturón de pedrería.',
    fabrics: ['Encaje floral', 'Tul liviano'],
    details: ['Crop top de encaje con cuello alto', 'Cinturón de pedrería en la cintura', 'Falda larga con caída fluida']
  },
  {
    id: 'fi5',
    name: 'Ophelia',
    price: 380000,
    imageUrl: '/images/fiestaColletion/diseno005.png',
    category: 'fiesta-collection',
    collection: 'Fiesta Edition',
    description: 'Conjunto de dos piezas en verde salvia con crop top de escote cuadrado y falda sirena de caída fluida con tajo hi-lo.',
    fabrics: ['Crepe de seda'],
    details: ['Crop top con escote cuadrado', 'Falda sirena con tajo hi-lo', 'Cintura alta entallada']
  },
  {
    id: 'fi6',
    name: 'Renée',
    price: 350000,
    imageUrl: '/images/fiestaColletion/diseno006.png',
    category: 'fiesta-collection',
    collection: 'Fiesta Edition',
    description: 'Jumpsuit negro cruzado con escote en V y mangas acampanadas de encaje transparente, ceñido con cinturón a tono.',
    fabrics: ['Crepe fluido', 'Encaje transparente en mangas'],
    details: ['Escote cruzado en V', 'Mangas acampanadas de encaje', 'Cinturón anudado a tono']
  },
  {
    id: 'fi7',
    name: 'Serena',
    price: 280000,
    imageUrl: '/images/fiestaColletion/diseno007.png',
    category: 'fiesta-collection',
    collection: 'Fiesta Edition',
    description: 'Vestido midi en bordó con breteles finos y corpiño drapeado sobre falda amplia con vuelo, para una fiesta elegante y cómoda.',
    fabrics: ['Crepe de seda'],
    details: ['Corpiño drapeado con breteles finos', 'Falda midi con vuelo', 'Cierre invisible en la espalda']
  },
  {
    id: 'fi8',
    name: 'Mariana',
    price: 320000,
    imageUrl: '/images/fiestaColletion/diseno008.png',
    category: 'fiesta-collection',
    collection: 'Fiesta Edition',
    description: 'Vestido sirena negro con escote drapeado asimétrico off-shoulder y tajo lateral alto, para una silueta envolvente de alto impacto.',
    fabrics: ['Crepe de seda elastizado'],
    details: ['Escote drapeado asimétrico', 'Silueta sirena ajustada', 'Tajo lateral alto']
  }
];
