import type { ReviewFull } from "./reviews-data";

export type { ReviewFull };

export interface SizeEntry {
  size: string;
  bust: string;
  length: string;
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
  reviews: ReviewFull[];
  images: string[];
}

function computeAverageRating(reviews: ReviewFull[]): number {
  if (reviews.length === 0) return 0;
  const sum = reviews.reduce((s, r) => s + r.rating, 0);
  return Math.round((sum / reviews.length) * 10) / 10;
}

/** Single source for PDP and any review UI */
const productReviews: ReviewFull[] = [
  {
    id: "r1",
    name: "Siti Amira",
    initials: "SA",
    memberSince: "2019",
    date: "March 2025",
    timestamp: "2025-03-12",
    rating: 5,
    title: "Perfect for special occasions",
    text: "The fabric is incredibly luxurious — the silk drapes beautifully and the embellishments are delicate. Sizing is spot on for M.",
    fullText:
      "The fabric is incredibly luxurious — the silk drapes beautifully and the embellishments are delicate. Sizing is spot on for M. Perfect for special occasions. I rented this for a spring wedding and received compliments all evening. The team pressed it beautifully before delivery.",
    avatarBg: "#E8D8C4",
    avatarColor: "#7a5c3a",
    verified: true,
    upvotes: 14,
    heightCm: 165,
    weightKg: 62,
    bustCm: 88,
    hipCm: 96,
    sizeWorn: "M",
    fitFeedback: "true",
    hasPhoto: true,
    photoColor: "#3d3530",
  },
  {
    id: "r2",
    name: "Nurul Rahmah",
    initials: "NR",
    memberSince: "2016",
    date: "February 2025",
    timestamp: "2025-02-08",
    rating: 4,
    title: "Gorgeous with a small caveat",
    text: "Loved the design but found the embellishments slightly uneven near the neckline. Still a gorgeous piece worth every penny.",
    avatarBg: "#C4D8E8",
    avatarColor: "#2a5a7a",
    verified: true,
    upvotes: 9,
    heightCm: 162,
    weightKg: 54,
    bustCm: 90,
    hipCm: 94,
    sizeWorn: "S",
    fitFeedback: "true",
    hasPhoto: true,
    photoColor: "#2a2620",
  },
  {
    id: "r3",
    name: "Aisyah Putri",
    initials: "AP",
    memberSince: "2021",
    date: "January 2025",
    timestamp: "2025-01-20",
    rating: 3,
    title: "True to size",
    text: "Beautiful kaftan, true to size. Wore it to a formal dinner and received many compliments. The silk feels premium.",
    avatarBg: "#D4C8E8",
    avatarColor: "#4a2a7a",
    verified: false,
    upvotes: 3,
    heightCm: 158,
    weightKg: 48,
    bustCm: 86,
    hipCm: 90,
    sizeWorn: "XS",
    fitFeedback: "large",
    hasPhoto: false,
  },
  {
    id: "r4",
    name: "Dewi Kartika",
    initials: "DK",
    memberSince: "2018",
    date: "December 2024",
    timestamp: "2024-12-05",
    rating: 4,
    title: "Stunning in person",
    text: "Stunning piece for the price. The embellishments catch the light beautifully. Would definitely rent again.",
    avatarBg: "#C8E8D4",
    avatarColor: "#2a6a4a",
    verified: true,
    upvotes: 11,
    heightCm: 168,
    weightKg: 58,
    bustCm: 84,
    hipCm: 92,
    sizeWorn: "M",
    fitFeedback: "true",
    hasPhoto: true,
    photoColor: "#1a2030",
  },
  {
    id: "r5",
    name: "Fatimah Z.",
    initials: "FZ",
    memberSince: "2020",
    date: "November 2024",
    timestamp: "2024-11-18",
    rating: 3,
    title: "Good quality",
    text: "Good quality silk. Arrived in pristine condition. The length is perfect for my height at 165cm.",
    avatarBg: "#E8C8C8",
    avatarColor: "#7a2a2a",
    verified: false,
    upvotes: 5,
    heightCm: 165,
    weightKg: 60,
    bustCm: 92,
    hipCm: 98,
    sizeWorn: "M",
    fitFeedback: "small",
    hasPhoto: false,
  },
  {
    id: "r6",
    name: "Laila Hassan",
    initials: "LH",
    memberSince: "2017",
    date: "October 2024",
    timestamp: "2024-10-22",
    rating: 3,
    title: "Smooth rental",
    text: "Elegant silhouette and the rental process was smooth. Would love slightly more padding on the hanger for heavy embellishments.",
    avatarBg: "#E8E4C4",
    avatarColor: "#6a5c2a",
    verified: true,
    upvotes: 7,
    heightCm: 160,
    weightKg: 53,
    bustCm: 87,
    hipCm: 93,
    sizeWorn: "S",
    fitFeedback: "true",
    hasPhoto: false,
  },
  {
    id: "r7",
    name: "Maya Indira",
    initials: "MI",
    memberSince: "2022",
    date: "September 2024",
    timestamp: "2024-09-14",
    rating: 4,
    title: "Photographs beautifully",
    text: "Received many compliments at the event. Fabric photographs beautifully. True to the listing photos.",
    avatarBg: "#C8D4E8",
    avatarColor: "#2a3a6a",
    verified: false,
    upvotes: 6,
    heightCm: 172,
    weightKg: 64,
    bustCm: 91,
    hipCm: 99,
    sizeWorn: "L",
    fitFeedback: "true",
    hasPhoto: false,
  },
];

export const product: Product = {
  id: "kaftan-black-embellishment",
  name: "Black Kaftan with Embellishment",
  designer: "n atelier",
  fabric: "Silk",
  fit: "True to Size",
  rentPrice: 300000,
  rentDays: 4,
  currency: "Rp",
  averageRating: computeAverageRating(productReviews),
  reviewCount: productReviews.length,
  selectedSize: "M",
  sizes: [
    { size: "XS", bust: "72 cm", length: "85 cm" },
    { size: "S", bust: "76 cm", length: "87 cm" },
    { size: "M", bust: "78 cm", length: "89 cm" },
    { size: "L", bust: "82 cm", length: "91 cm" },
    { size: "XL", bust: "86 cm", length: "93 cm" },
  ],
  reviews: productReviews,
  images: ["/Dress1.webp", "/Dress2.png"],
};
