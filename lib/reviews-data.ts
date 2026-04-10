export interface ReviewFull {
  id: string;
  name: string;
  initials: string;
  date: string;
  timestamp: string;
  rating: number;
  text: string;
  fullText?: string;
  avatarBg: string;
  avatarColor: string;
  verified: boolean;
  upvotes: number;
  heightCm: number;
  weightKg: number;
  bustCm: number;
  hipCm: number;
  sizeWorn: string;
  fitFeedback: "small" | "true" | "large";
  hasPhoto: boolean;
  photoColor?: string;
}

export const allReviews: ReviewFull[] = [
  {
    id: "r1",
    name: "Siti Amira",
    initials: "SA",
    date: "Nov 29, 2023",
    timestamp: "2023-11-29",
    rating: 5,
    text: "This black kaftan is a wardrobe staple for me now! The quality is outstanding, and it's incredibly versatile. I've worn it to brunch with friends, to the beach as a cover-up, and even to a formal dinner with the right accessories. It's so comfortable and",
    fullText: "This black kaftan is a wardrobe staple for me now! The quality is outstanding, and it's incredibly versatile. I've worn it to brunch with friends, to the beach as a cover-up, and even to a formal dinner with the right accessories. It's so comfortable and the silk feels absolutely divine against the skin. The embellishments add just the right amount of glamour. Highly recommend!",
    avatarBg: "#E8D8C4",
    avatarColor: "#7a5c3a",
    verified: true,
    upvotes: 5,
    heightCm: 165,
    weightKg: 65,
    bustCm: 88,
    hipCm: 110,
    sizeWorn: "M",
    fitFeedback: "true",
    hasPhoto: false,
  },
  {
    id: "r2",
    name: "Nurul Rahmah",
    initials: "NR",
    date: "Mar 25, 2024",
    timestamp: "2024-03-25",
    rating: 5,
    text: "This black kaftan exceeded my expectations! The fabric feels luxurious against my skin, and the craftsmanship is impeccable.",
    fullText: "This black kaftan exceeded my expectations! The fabric feels luxurious against my skin, and the craftsmanship is impeccable. The embellishments are beautifully sewn and haven't come loose even after careful hand washing. The length is perfect for my height.",
    avatarBg: "#C4D8E8",
    avatarColor: "#2a5a7a",
    verified: true,
    upvotes: 2,
    heightCm: 160,
    weightKg: 55,
    bustCm: 91,
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
    date: "Jan 14, 2024",
    timestamp: "2024-01-14",
    rating: 4,
    text: "Beautiful kaftan, true to size. Wore it to a formal dinner and received many compliments. The silk feels premium and the silhouette is very flattering.",
    fullText: "Beautiful kaftan, true to size. Wore it to a formal dinner and received many compliments. The silk feels premium and the silhouette is very flattering. Only minor issue was a small thread near the hem, easily trimmed. Would rent again.",
    avatarBg: "#D4C8E8",
    avatarColor: "#4a2a7a",
    verified: false,
    upvotes: 0,
    heightCm: 155,
    weightKg: 45,
    bustCm: 88,
    hipCm: 65,
    sizeWorn: "XS",
    fitFeedback: "large",
    hasPhoto: false,
  },
  {
    id: "r4",
    name: "Dewi Kartika",
    initials: "DK",
    date: "Dec 3, 2023",
    timestamp: "2023-12-03",
    rating: 4,
    text: "Stunning piece for the price. The embellishments catch the light beautifully under chandeliers. Would definitely rent again for special events.",
    fullText: "Stunning piece for the price. The embellishments catch the light beautifully under chandeliers. Would definitely rent again for special events. Delivery was prompt and the garment arrived in excellent condition, freshly dry cleaned.",
    avatarBg: "#C8E8D4",
    avatarColor: "#2a6a4a",
    verified: true,
    upvotes: 3,
    heightCm: 168,
    weightKg: 60,
    bustCm: 82,
    hipCm: 91,
    sizeWorn: "M",
    fitFeedback: "true",
    hasPhoto: true,
    photoColor: "#1a2030",
  },
  {
    id: "r5",
    name: "Fatimah Z.",
    initials: "FZ",
    date: "Nov 10, 2023",
    timestamp: "2023-11-10",
    rating: 3,
    text: "Good quality silk. Arrived in pristine condition. The length is perfect for my height at 165cm. The embellishments are slightly heavy but add elegance.",
    fullText: "Good quality silk. Arrived in pristine condition. The length is perfect for my height at 165cm. The embellishments are slightly heavy but add elegance. Fit runs a tiny bit small around the bust — I'd suggest sizing up if between sizes.",
    avatarBg: "#E8C8C8",
    avatarColor: "#7a2a2a",
    verified: false,
    upvotes: 1,
    heightCm: 165,
    weightKg: 58,
    bustCm: 90,
    hipCm: 96,
    sizeWorn: "M",
    fitFeedback: "small",
    hasPhoto: false,
  },
  {
    id: "r6",
    name: "Laila Hassan",
    initials: "LH",
    date: "Feb 18, 2024",
    timestamp: "2024-02-18",
    rating: 5,
    text: "Absolutely breathtaking. I wore this to a wedding and couldn't stop getting compliments. The silk is top quality and drapes like a dream.",
    fullText: "Absolutely breathtaking. I wore this to a wedding and couldn't stop getting compliments. The silk is top quality and drapes like a dream. The embellishments are exquisite — they look hand-placed and catch every light source in the room.",
    avatarBg: "#E8E4C4",
    avatarColor: "#6a5c2a",
    verified: true,
    upvotes: 7,
    heightCm: 162,
    weightKg: 52,
    bustCm: 84,
    hipCm: 88,
    sizeWorn: "S",
    fitFeedback: "true",
    hasPhoto: true,
    photoColor: "#2c2028",
  },
  {
    id: "r7",
    name: "Maya Indira",
    initials: "MI",
    date: "Apr 5, 2024",
    timestamp: "2024-04-05",
    rating: 2,
    text: "The kaftan itself is beautiful but the embellishments on mine were uneven and one section had a loose thread. Contacted support and they were helpful.",
    fullText: "The kaftan itself is beautiful but the embellishments on mine were uneven and one section had a loose thread. Contacted support and they were helpful — offered a partial refund. I'd still rent from them again but will inspect more carefully on arrival.",
    avatarBg: "#C8D4E8",
    avatarColor: "#2a3a6a",
    verified: true,
    upvotes: 4,
    heightCm: 170,
    weightKg: 70,
    bustCm: 94,
    hipCm: 102,
    sizeWorn: "L",
    fitFeedback: "true",
    hasPhoto: false,
  },
];

export const fitSummary = {
  small: 14,   // %
  true: 72,    // %
  large: 14,   // %
};
