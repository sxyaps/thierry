export interface Fragrance {
  id: number;
  name: string;
  description: string;
  notes: {
    top: string[];
    middle: string[];
    base: string[];
  };
  price: number;
  image: string;
  featured?: boolean;
}

export const fragrances: Fragrance[] = [
  {
    id: 1,
    name: "Noir Élégance",
    description: "A sophisticated blend of dark florals and warm woods, embodying the essence of Parisian nights.",
    notes: {
      top: ["Bergamot", "Black Pepper", "Pink Grapefruit"],
      middle: ["Rose Noir", "Jasmine", "Violet"],
      base: ["Sandalwood", "Vanilla", "Musk"]
    },
    price: 180,
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=600&fit=crop&q=80",
    featured: true
  },
  {
    id: 2,
    name: "Lumière Dorée",
    description: "Radiant and luminous, this fragrance captures the golden hour with citrus brightness and warm amber.",
    notes: {
      top: ["Sweet Orange", "Mandarin", "Lemon Zest"],
      middle: ["Neroli", "Tuberose", "White Tea"],
      base: ["Amber", "Cedar", "White Musk"]
    },
    price: 165,
    image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59d75?w=400&h=600&fit=crop&q=80",
    featured: true
  },
  {
    id: 3,
    name: "Bois Mystique",
    description: "Deep and enigmatic, featuring rare woods and exotic spices for the discerning connoisseur.",
    notes: {
      top: ["Cardamom", "Cinnamon", "Clove"],
      middle: ["Oud", "Rose Petals", "Saffron"],
      base: ["Sandalwood", "Patchouli", "Benzoin"]
    },
    price: 220,
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=400&h=600&fit=crop&q=80"
  },
  {
    id: 4,
    name: "Fleur Sauvage",
    description: "Wild and untamed, this fragrance celebrates the beauty of nature with fresh florals and green notes.",
    notes: {
      top: ["Green Leaves", "Petitgrain", "Cucumber"],
      middle: ["Wild Jasmine", "Lily of the Valley", "Peony"],
      base: ["White Cedar", "Moss", "Soft Musk"]
    },
    price: 155,
    image: "https://images.unsplash.com/photo-1615634260194-d425d3aba445?w=400&h=600&fit=crop&q=80",
    featured: true
  },
  {
    id: 5,
    name: "Velours Rouge",
    description: "Opulent and sensual, with rich red florals and luxurious oriental notes that leave a lasting impression.",
    notes: {
      top: ["Black Cherry", "Pink Pepper", "Mandarin"],
      middle: ["Red Rose", "Geranium", "Clary Sage"],
      base: ["Velvet Woods", "Tonka Bean", "Labdanum"]
    },
    price: 195,
    image: "https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=400&h=600&fit=crop&q=80"
  }
];

export const getFeaturedFragrances = () => {
  return fragrances.filter(fragrance => fragrance.featured);
};

export const getFragranceById = (id: number) => {
  return fragrances.find(fragrance => fragrance.id === id);
};
