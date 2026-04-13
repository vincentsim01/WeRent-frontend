export interface SizeEntry {
  size: string;
  bust: string;
  length: string;
}

export interface Review {
  id: string;
  name: string;
  initials: string;
  date: string;
  rating: number;
  text: string;
  avatarBg: string;
  avatarColor: string;
  verified: boolean;
}

export interface Product {
  id: string;
  name: string;
  designer: string;
  fabric: string;
  fit: string;
  rentPrice: number;
  rentDays: number;
  currency: string;
  averageRating: number;
  reviewCount: number;
  selectedSize: string;
  sizes: SizeEntry[];
  reviews: Review[];
  images: string[];
}

export const product: Product = {
  id: "kaftan-black-embellishment",
  name: "Black Kaftan with Embellishment",
  designer: "n atelier",
  fabric: "Silk",
  fit: "True to Size",
  rentPrice: 300000,
  rentDays: 4,
  currency: "Rp",
  averageRating: 3.7,
  reviewCount: 7,
  selectedSize: "M",
  sizes: [
    { size: "XS", bust: "72 cm", length: "85 cm" },
    { size: "S",  bust: "76 cm", length: "87 cm" },
    { size: "M",  bust: "78 cm", length: "89 cm" },
    { size: "L",  bust: "82 cm", length: "91 cm" },
    { size: "XL", bust: "86 cm", length: "93 cm" },
  ],
  reviews: [
    {
      id: "r1",
      name: "Siti Amira",
      initials: "SA",
      date: "March 2025",
      rating: 5,
      text: "The fabric is incredibly luxurious — the silk drapes beautifully and the embellishments are delicate. Sizing is spot on for M. Perfect for special occasions.",
      avatarBg: "#E8D8C4",
      avatarColor: "#7a5c3a",
      verified: true,
    },
    {
      id: "r2",
      name: "Nurul Rahmah",
      initials: "NR",
      date: "February 2025",
      rating: 4,
      text: "Loved the design but found the embellishments slightly uneven near the neckline. Still a gorgeous piece worth every penny.",
      avatarBg: "#C4D8E8",
      avatarColor: "#2a5a7a",
      verified: true,
    },
    {
      id: "r3",
      name: "Aisyah Putri",
      initials: "AP",
      date: "January 2025",
      rating: 3,
      text: "Beautiful kaftan, true to size. Wore it to a formal dinner and received many compliments. The silk feels premium.",
      avatarBg: "#D4C8E8",
      avatarColor: "#4a2a7a",
      verified: false,
    },
    {
      id: "r4",
      name: "Dewi Kartika",
      initials: "DK",
      date: "December 2024",
      rating: 4,
      text: "Stunning piece for the price. The embellishments catch the light beautifully. Would definitely rent again.",
      avatarBg: "#C8E8D4",
      avatarColor: "#2a6a4a",
      verified: true,
    },
    {
      id: "r5",
      name: "Fatimah Z.",
      initials: "FZ",
      date: "November 2024",
      rating: 3,
      text: "Good quality silk. Arrived in pristine condition. The length is perfect for my height at 165cm.",
      avatarBg: "#E8C8C8",
      avatarColor: "#7a2a2a",
      verified: false,
    },
  ],
  images: ["/Dress1.webp","/Dress2.png","/Dress3.png"],
};
