import { product } from "@/lib/data";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductImageGallery from "@/components/ProductImageGallery";
import StarRating from "@/components/StarRating";
import SizeSelector from "@/components/SizeSelector";
import SizeGuideTable from "@/components/SizeGuideTable";
import ReviewsSection from "@/components/ReviewsSection";
import AddToCartBar from "@/components/AddToCartBar";
import RentalInfoBanner from "@/components/RentalInfoBanner";
import RelatedProducts from "@/components/RelatedProducts";

export default function ProductPage() {
  return (
    <main
      className="min-h-screen"
      style={{ background: "var(--parchment)", fontFamily: "var(--font-cormorant)" }}
    >
      <div className="mx-auto pb-32 w-[90%] md:w-[90%]">

        {/* Header */}
        <Header />

        {/* Image Gallery — overlaps behind header */}
        <div className="animate-fade-in" style={{ marginTop: -52 }}>
          <ProductImageGallery images={product.images} productName={product.name} />
        </div>

        {/* Content */}
        <div className="px-5 pt-5">

          {/* Title + Rating */}
          <div className="animate-fade-up">
            <h1 className="font-light leading-snug mb-3" style={{ color: "var(--ink)", fontSize: 26, letterSpacing: "-0.01em" }}>
              {product.name}
            </h1>
            <div className="flex items-center gap-2 mb-4">
              <StarRating rating={product.averageRating} size={16} />
              <span className="text-sm font-mono" style={{ color: "var(--ink)", fontWeight: 500 }}>
                {product.averageRating.toFixed(1)}
              </span>
              <span className="text-xs font-mono tracking-widest uppercase" style={{ color: "var(--warm-gray)" }}>
                {product.reviewCount} reviews
              </span>
            </div>
          </div>

          {/* Size Selector */}
          <div className="animate-fade-up delay-100">
            <SizeSelector sizes={product.sizes.map((s) => s.size)} defaultSize={product.selectedSize} />
          </div>

          <div style={{ height: "0.5px", background: "var(--border)", margin: "20px 0" }} />

          {/* Designer */}
          <div className="animate-fade-up delay-200">
            <div className="flex items-center justify-between mb-3">
              <p className="text-xs font-mono tracking-widest uppercase" style={{ color: "var(--warm-gray)" }}>Designer</p>
              <button className="text-xs font-mono tracking-widest uppercase underline underline-offset-2" style={{ color: "var(--warm-gray)", fontSize: 10 }}>
                View the Collection
              </button>
            </div>
            <div className="flex items-center justify-between p-4 rounded-lg" style={{ border: "0.5px solid var(--border)", background: "#fdfaf6" }}>
              <div>
                <span style={{ fontFamily: "var(--font-cormorant)", fontSize: 24, fontWeight: 400, letterSpacing: "-0.02em", color: "var(--ink)" }}>
                  {product.designer}
                </span>
                <p className="text-xs font-mono mt-1 tracking-widest uppercase" style={{ color: "var(--warm-gray)" }}>Est. Jakarta 2019</p>
              </div>
              <div className="w-14 h-14 rounded-full overflow-hidden flex items-end justify-center" style={{ background: "#2a2620" }}>
                <svg viewBox="0 0 56 56" width="56" height="56" xmlns="http://www.w3.org/2000/svg">
                  <rect width="56" height="56" fill="#2a2620" />
                  <ellipse cx="28" cy="20" rx="10" ry="11" fill="#4a4440" />
                  <path d="M8,58 Q10,38 28,35 Q46,38 48,58 Z" fill="#4a4440" />
                </svg>
              </div>
            </div>
          </div>

          <div style={{ height: "0.5px", background: "var(--border)", margin: "20px 0" }} />

          {/* Product Details */}
          <div className="animate-fade-up delay-300">
            <p className="text-xs font-mono tracking-widest uppercase mb-4" style={{ color: "var(--warm-gray)" }}>Product Detail</p>
            <div>
              {[
                { label: "Fabric", value: product.fabric },
                { label: "Fit", value: product.fit },
                { label: "Care", value: "Dry Clean Only" },
                { label: "Origin", value: "Jakarta, Indonesia" },
              ].map((row, i, arr) => (
                <div key={row.label} className="flex justify-between items-center py-3" style={{ borderBottom: i < arr.length - 1 ? "0.5px solid var(--border)" : "none" }}>
                  <span className="text-xs font-mono tracking-widest uppercase" style={{ color: "var(--warm-gray)" }}>{row.label}</span>
                  <span className="text-sm font-mono tracking-wide uppercase" style={{ color: "var(--ink)" }}>{row.value}</span>
                </div>
              ))}
            </div>
            <SizeGuideTable sizes={product.sizes} selectedSize={product.selectedSize} />
          </div>

          <div style={{ height: "0.5px", background: "var(--border)", margin: "24px 0" }} />

          {/* Reviews */}
          <div className="animate-fade-up delay-400">
            <ReviewsSection reviews={product.reviews} averageRating={product.averageRating} reviewCount={product.reviewCount} />
          </div>

          <div style={{ height: "0.5px", background: "var(--border)", margin: "28px 0 24px" }} />
        </div>

        {/* Rental Info */}
        <div className="animate-fade-up delay-500">
          <RentalInfoBanner />
        </div>

        {/* Related Products */}
        <div className="animate-fade-up delay-500">
          <RelatedProducts />
        </div>
      </div>

      {/* Sticky Cart Bar */}
      <AddToCartBar price={product.rentPrice} currency={product.currency} days={product.rentDays} productName={product.name} />
    </main>
  );
}
