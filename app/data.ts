export type ArtistProfile = {
  name: string;
  lifespan: string;
  role: string;
  statement: string;
  shortBio: string;
  biography: string[];
  facts: { label: string; value: string }[];
};

export type TimelineEntry = {
  year: string;
  title: string;
  description: string;
  place?: string;
};

export type Artwork = {
  id: string;
  title: string;
  frenchTitle: string;
  year: string;
  phase: "Divisionist origins" | "Mediterranean light" | "Mosaic ports";
  medium: string;
  dimensions: string;
  collection: string;
  image: string;
  alt: string;
  description: string;
  source: string;
  featured?: boolean;
};

export type ContactLink = {
  label: string;
  description: string;
  href: string;
};

export const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Journey", href: "/journey" },
  { label: "Works", href: "/works" },
  { label: "Contact", href: "/contact" },
] as const;

export const artist: ArtistProfile = {
  name: "Paul Signac",
  lifespan: "1863—1935",
  role: "Painter · Sailor · Theorist of Neo-Impressionism",
  statement: "Colour is not decoration. It is light, divided and set in motion.",
  shortBio:
    "A self-taught Parisian painter, Paul Signac helped turn the fleeting light of Impressionism into a deliberate architecture of colour. His ports, rivers and Mediterranean skies shimmer through separated strokes that mix in the viewer’s eye.",
  biography: [
    "Paul Victor Jules Signac was born in Paris on 11 November 1863. After seeing an exhibition by Claude Monet, he abandoned the study of architecture and began to paint, largely teaching himself through close observation of the Impressionists.",
    "In 1884 he helped establish the Société des Artistes Indépendants, an exhibition society without jury or awards. There he met Georges Seurat. Their friendship led Signac toward Divisionism: pure, adjacent touches of colour designed to create luminosity through optical mixture rather than blended pigment.",
    "An ardent sailor, Signac travelled the coasts and waterways of France and beyond. From Brittany and Cassis to Saint-Tropez, Venice and Constantinople, ports became both his subject and his way of life. After Seurat’s death in 1891, Signac became the movement’s leading advocate and a generous mentor to younger artists.",
    "His 1899 treatise, From Eugène Delacroix to Neo-Impressionism, articulated the movement’s history and colour theory. In mature paintings, the early disciplined dot expanded into a freer, rectangular stroke: luminous tesserae that give water, sky and architecture the rhythm of a mosaic.",
  ],
  facts: [
    { label: "Born", value: "11 November 1863 · Paris" },
    { label: "Movement", value: "Neo-Impressionism · Divisionism" },
    { label: "Base", value: "Paris & Saint-Tropez" },
    { label: "Died", value: "15 August 1935 · Paris" },
  ],
};

export const timeline: TimelineEntry[] = [
  {
    year: "1880",
    title: "A painter begins",
    description:
      "After encountering Monet’s work, Signac leaves architectural study and begins painting the riverbanks and suburbs of Paris.",
    place: "Paris",
  },
  {
    year: "1884",
    title: "Art without a jury",
    description:
      "He co-founds the Société des Artistes Indépendants and meets Georges Seurat, beginning a decisive artistic friendship.",
    place: "Paris",
  },
  {
    year: "1886",
    title: "The divided touch",
    description:
      "Signac adopts separated colour, placing complementary hues side by side so that light is completed in the viewer’s eye.",
    place: "Les Andelys",
  },
  {
    year: "1889",
    title: "Mediterranean revelation",
    description:
      "At Cassis, white cliffs, orange rocks and blue water become a measured symphony of complementary colour.",
    place: "Cassis",
  },
  {
    year: "1891",
    title: "After Seurat",
    description:
      "Following Seurat’s early death, Signac becomes Neo-Impressionism’s most visible organiser, writer and defender.",
    place: "Paris",
  },
  {
    year: "1892",
    title: "The harbour at Saint-Tropez",
    description:
      "He sails into the small Mediterranean port and soon makes it his southern home, studio and enduring motif.",
    place: "Saint-Tropez",
  },
  {
    year: "1899",
    title: "A theory of luminous colour",
    description:
      "From Eugène Delacroix to Neo-Impressionism is published, setting out a lineage for divided colour and modern painting.",
    place: "Paris",
  },
  {
    year: "1908",
    title: "A president for independents",
    description:
      "Signac becomes president of the Société des Artistes Indépendants, supporting experimental artists across generations.",
    place: "Paris",
  },
  {
    year: "1935",
    title: "A life in colour",
    description:
      "Signac dies in Paris, leaving paintings, watercolours and writings that carried Neo-Impressionism into modern art.",
    place: "Paris",
  },
];

export const artworks: Artwork[] = [
  {
    id: "cassis",
    title: "Cassis, Cap Lombard, Opus 196",
    frenchTitle: "Cassis, Cap Lombard, Opus 196",
    year: "1889",
    phase: "Divisionist origins",
    medium: "Oil on canvas",
    dimensions: "66 × 81 cm",
    collection: "Kunstmuseum Den Haag",
    image: "/artworks/cassis-cap-lombard.jpg",
    alt: "Pale cliffs and a blue Mediterranean bay built from small orange and blue Divisionist marks.",
    description:
      "A rigorously divided field of blue and orange turns the coast into a study of rhythm, heat and optical vibration.",
    source:
      "https://www.kunstmuseum.nl/en/collection/cassis-cap-lombard-opus-196",
    featured: true,
  },
  {
    id: "feneon",
    title: "Portrait of Félix Fénéon",
    frenchTitle:
      "Opus 217. Sur l’émail d’un fond rythmique de mesures et d’angles, de tons et de teintes, portrait de M. Félix Fénéon en 1890",
    year: "1890",
    phase: "Divisionist origins",
    medium: "Oil on canvas",
    dimensions: "73.5 × 92.5 cm",
    collection: "The Museum of Modern Art, New York",
    image: "/artworks/felix-feneon.jpg",
    alt: "Félix Fénéon in profile holding a flower against a vivid spiral of yellow, violet, green and red.",
    description:
      "Portraiture meets abstraction: the critic’s still profile is set against a kaleidoscopic rhythm of colour theory.",
    source: "https://www.moma.org/collection/works/78734",
  },
  {
    id: "saint-tropez",
    title: "The Port of Saint-Tropez",
    frenchTitle: "Le Port de Saint-Tropez",
    year: "1901–02",
    phase: "Mediterranean light",
    medium: "Oil on canvas",
    dimensions: "131 × 161.5 cm",
    collection: "The National Museum of Western Art, Tokyo",
    image: "/artworks/port-saint-tropez.jpg",
    alt: "Sailing boats crowd a luminous Saint-Tropez harbour beneath a pale pink and turquoise sky.",
    description:
      "Sails, reflections and quayside life open around a radiant centre, transforming the harbour into a theatre of colour.",
    source: "https://www.nmwa.go.jp/en/collection/1987-0003.html",
    featured: true,
  },
  {
    id: "venice",
    title: "Entrance to the Grand Canal, Venice",
    frenchTitle: "Entrée du Grand Canal, Venise",
    year: "1905",
    phase: "Mosaic ports",
    medium: "Oil on canvas",
    dimensions: "73.5 × 92.1 cm",
    collection: "Toledo Museum of Art",
    image: "/artworks/grand-canal-venice.jpg",
    alt: "Venice’s domes and gondolas glow in pink, gold and blue mosaic-like brushstrokes.",
    description:
      "Broad, tessellated strokes make the lagoon glitter; architecture and reflection are held together by a golden atmosphere.",
    source:
      "https://emuseum.toledomuseum.org/objects/54774/entrance-to-the-grand-canal-venice",
    featured: true,
  },
  {
    id: "avignon",
    title: "Avignon. Evening (The Papal Palace)",
    frenchTitle: "Avignon. Soir (le château des Papes)",
    year: "1909",
    phase: "Mosaic ports",
    medium: "Oil on canvas",
    dimensions: "73.3 × 91.9 cm",
    collection: "Musée d’Orsay, Paris",
    image: "/artworks/avignon-evening.jpg",
    alt: "The Papal Palace at Avignon glows coral and gold above a deep blue river under a lavender evening sky.",
    description:
      "The site’s visual key: coral architecture floats between a river of cobalt tesserae and a lavender sky made luminous by separated colour.",
    source:
      "https://www.musee-orsay.fr/en/artworks/avignon-soir-le-chateau-des-papes-7995",
    featured: true,
  },
];

export const contactLinks: ContactLink[] = [
  {
    label: "Exhibitions",
    description: "Curatorial proposals, institutional loans and programming.",
    href: "mailto:exhibitions@example.com?subject=Paul%20Signac%20Exhibition%20Enquiry",
  },
  {
    label: "Licensing",
    description: "Image use, publishing and reproduction enquiries.",
    href: "mailto:licensing@example.com?subject=Paul%20Signac%20Licensing%20Enquiry",
  },
  {
    label: "Collaboration",
    description: "Research, education and creative partnerships.",
    href: "mailto:studio@example.com?subject=Paul%20Signac%20Collaboration",
  },
];
