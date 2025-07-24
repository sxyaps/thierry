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
    name: "Aqua di Luca",
    description: "A refreshing aquatic fragrance that captures the essence of pristine Mediterranean waters with crisp citrus and marine notes.",
    notes: {
      top: ["Sea Breeze", "Bergamot", "Lemon", "Mint"],
      middle: ["Marine Accord", "Jasmine", "Cyclamen"],
      base: ["White Musk", "Cedar", "Ambergris"]
    },
    price: 180,
    image: "/Acqua di Luca 2.png",
    featured: true
  },
  {
    id: 2,
    name: "Maximillian",
    description: "A bold and sophisticated masculine fragrance with powerful woody and spicy notes, embodying strength and elegance.",
    notes: {
      top: ["Black Pepper", "Cardamom", "Grapefruit"],
      middle: ["Lavender", "Geranium", "Nutmeg"],
      base: ["Sandalwood", "Vetiver", "Patchouli"]
    },
    price: 220,
    image: "/maximillliann.png",
    featured: true
  },
  {
    id: 3,
    name: "Classique",
    description: "A timeless and refined fragrance that epitomizes classic elegance with harmonious floral and oriental notes.",
    notes: {
      top: ["Rose Petals", "Orange Blossom", "Pink Pepper"],
      middle: ["Jasmine", "Ylang-Ylang", "Iris"],
      base: ["Vanilla", "Sandalwood", "White Musk"]
    },
    price: 195,
    image: "/classique.png",
    featured: true
  },
  {
    id: 4,
    name: "The Home Perfume",
    description: "A warm and inviting ambient fragrance designed to transform your living space into a luxurious sanctuary.",
    notes: {
      top: ["Bergamot", "Lemon", "Green Leaves"],
      middle: ["White Tea", "Jasmine", "Lily"],
      base: ["Cedar", "Soft Musk", "Amber"]
    },
    price: 155,
    image: "https://images.unsplash.com/photo-1615634260194-d425d3aba445?w=400&h=600&fit=crop&q=80",
    featured: true
  }
];

export const getFeaturedFragrances = () => {
  return fragrances.filter(fragrance => fragrance.featured);
};

export const getFragranceById = (id: number) => {
  return fragrances.find(fragrance => fragrance.id === id);
};
