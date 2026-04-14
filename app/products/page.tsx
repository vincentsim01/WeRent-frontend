import CardProduct, { Product } from "@/components/CardProduct";

const MOCK_PRODUCTS: Product[] = [
    {
        id: 1,
        name: "Stripe Tunic & Wide Pants Set",
        brand: "WeRent Studio",
        rentFee: 300000,
        rentalDays: 4,
        size: ["XS", "S", "M", "L"],
        image: "/Dress1.webp",
    },
    {
        id: 2,
        name: "Floral Wrap Midi Dress",
        brand: "Seraphine",
        rentFee: 250000,
        rentalDays: 4,
        size: ["S", "M", "L"],
        image: "/images/products/floral-midi.jpg",
    },
    {
        id: 3,
        name: "Cream Linen Co-ord Set",
        brand: "Kaia Studio",
        rentFee: 275000,
        rentalDays: 4,
        size: ["XS", "S", "M"],
        image: "/images/products/linen-coord.jpg",
    },
    {
        id: 4,
        name: "Velvet Slip Evening Gown",
        brand: "Noir Maison",
        rentFee: 450000,
        rentalDays: 4,
        size: ["S", "M"],
        image: "/images/products/velvet-gown.jpg",
    },
    {
        id: 5,
        name: "Batik Modern Kemeja Dress",
        brand: "Tanah Air",
        rentFee: 200000,
        rentalDays: 4,
        size: ["S", "M", "L", "XL"],
        image: "/images/products/batik-dress.jpg",
    },
    {
        id: 6,
        name: "Tailored Blazer & Trouser Set",
        brand: "Atelier KL",
        rentFee: 380000,
        rentalDays: 4,
        size: ["XS", "S", "M", "L"],
        image: "/images/products/blazer-set.jpg",
    },
    {
        id: 7,
        name: "Embroidered Kaftan Dress",
        brand: "Archipelago",
        rentFee: 320000,
        rentalDays: 4,
        size: ["Free Size"],
        image: "/Dress2.png",
    },
    {
        id: 8,
        name: "Pleated Chiffon Maxi Skirt",
        brand: "Mira Collective",
        rentFee: 180000,
        rentalDays: 4,
        size: ["S", "M", "L"],
        image: "/images/products/maxi-skirt.jpg",
    },
];

export default function ProductsPage() {
    return (
        <main className="bg-[var(--parchment)] min-h-screen px-3 py-4 sm:px-6 sm:py-8">
            <div className="max-w-[1280px] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4">
                {MOCK_PRODUCTS.map((product) => (
                    <CardProduct key={product.id} product={product} />
                ))}
            </div>
        </main>
    );
}