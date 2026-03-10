export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
  ageRange: string;
  rating: number;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Cuddly Teddy Bear",
    price: 24.99,
    category: "Plush Toys",
    image: "https://images.unsplash.com/photo-1560128382-af550cccf1aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWRkeSUyMGJlYXIlMjBwbHVzaCUyMHRveXxlbnwxfHx8fDE3NzMwOTQxMDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Super soft and huggable teddy bear perfect for bedtime cuddles. Made with premium materials for extra comfort.",
    ageRange: "0-3 years",
    rating: 4.8,
  },
  {
    id: 2,
    name: "Building Blocks Set",
    price: 39.99,
    category: "Educational",
    image: "https://images.unsplash.com/photo-1558907353-ceb54f3882ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidWlsZGluZyUyMGJsb2NrcyUyMGVkdWNhdGlvbmFsJTIwdG95c3xlbnwxfHx8fDE3NzMxNTg4NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Colorful building blocks set with 150+ pieces. Promotes creativity, motor skills, and spatial awareness.",
    ageRange: "3-6 years",
    rating: 4.9,
  },
  {
    id: 3,
    name: "Action Hero Figure",
    price: 19.99,
    category: "Action Figures",
    image: "https://images.unsplash.com/photo-1700825073852-1913b3886584?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY3Rpb24lMjBmaWd1cmUlMjBzdXBlcmhlcm8lMjB0b3l8ZW58MXx8fHwxNzczMDY1Mzk4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Detailed superhero action figure with moveable joints and accessories. Perfect for imaginative play.",
    ageRange: "4-8 years",
    rating: 4.7,
  },
  {
    id: 4,
    name: "Puzzle Adventure",
    price: 14.99,
    category: "Puzzles & Games",
    image: "https://images.unsplash.com/photo-1574492909706-09f2b2f0d909?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwdXp6bGUlMjBnYW1lJTIwa2lkc3xlbnwxfHx8fDE3NzMxNTg4NTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "100-piece jigsaw puzzle featuring vibrant artwork. Develops problem-solving skills and patience.",
    ageRange: "5-10 years",
    rating: 4.6,
  },
  {
    id: 5,
    name: "Racing Car Collection",
    price: 29.99,
    category: "Vehicles",
    image: "https://images.unsplash.com/photo-1760836205749-00f4fefa276f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b3klMjBjYXIlMjB2ZWhpY2xlfGVufDF8fHx8MTc3MzEyNjc5NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Set of 5 die-cast racing cars with realistic details. Great for racing and collecting.",
    ageRange: "3-7 years",
    rating: 4.5,
  },
  {
    id: 6,
    name: "Deluxe Doll Set",
    price: 34.99,
    category: "Dolls",
    image: "https://images.unsplash.com/photo-1573484557564-8eb466c767ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2xsJTIwdG95JTIwaGFwcHklMjBjaGlsZHxlbnwxfHx8fDE3NzMxNTg4NTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Beautiful doll with changeable outfits and accessories. Encourages nurturing play and creativity.",
    ageRange: "3-8 years",
    rating: 4.8,
  },
  {
    id: 7,
    name: "Family Board Game",
    price: 27.99,
    category: "Puzzles & Games",
    image: "https://images.unsplash.com/photo-1673547357683-9d49ea082f38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib2FyZCUyMGdhbWUlMjBmYW1pbHklMjBmdW58ZW58MXx8fHwxNzczMTU4ODU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Fun strategy board game for the whole family. 2-6 players, ages 6+. Hours of entertainment!",
    ageRange: "6-12 years",
    rating: 4.9,
  },
  {
    id: 8,
    name: "Creative Art Set",
    price: 22.99,
    category: "Educational",
    image: "https://images.unsplash.com/photo-1553158399-3796bdbc82fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMHRveXMlMjBjaGlsZHJlbnxlbnwxfHx8fDE3NzMxMzQ5NzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Complete art supplies set with crayons, markers, colored pencils, and paper. Unleash creativity!",
    ageRange: "4-10 years",
    rating: 4.7,
  },
];

export const categories = [
  "All",
  "Plush Toys",
  "Educational",
  "Action Figures",
  "Puzzles & Games",
  "Vehicles",
  "Dolls",
];
