import { product } from "@/lib/data";
import Header from "@/components/Header";
import ProductImageGallery from "@/components/ProductImageGallery";
import StarRating from "@/components/StarRating";
import SizeSelector from "@/components/SizeSelector";
import SizeGuideTable from "@/components/SizeGuideTable";
import ReviewsSection from "@/components/ReviewsSection";
import AddToCartBar from "@/components/AddToCartBar";
import RentalInfoBanner from "@/components/RentalInfoBanner";
import RelatedProducts from "@/components/RelatedProducts";

export const metadata = {
  title: `${product.name} — WeRent`,
  description: `Rent the ${product.name} by ${product.designer}. Premium fashion rental for every occasion.`,
};

export default function ProductPage() {
  return (
    <main
      className="min-h-screen relative"
      style={{ fontFamily: "var(--font-cormorant)" }}
    >


      {/* ── Header ── */}
      <Header />

      {/* ── Main content wrapper ── */}
      <div
        className="relative z-10 mx-auto px-4 sm:px-6 lg:px-8 pb-32"
        style={{ maxWidth: 1200 }}
      >

        {/* ══ Desktop 2-col / Mobile 1-col product section ══ */}
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 xl:gap-24 pt-8 lg:pt-12">

          {/* LEFT — Image Gallery (sticky on desktop) */}
          <div className="lg:sticky lg:top-24 lg:self-start animate-fade-in">
            <ProductImageGallery images={product.images} productName={product.name} />
          </div>

          {/* RIGHT — Product Info */}
          <div className="mt-8 lg:mt-0">

            {/* Breadcrumb / brand tag */}
            <div className="animate-fade-up flex items-center gap-2 mb-5">
              <span
                className="px-3 py-1 rounded-full"
                style={{
                  fontFamily: "var(--font-montserrat)",
                  fontSize: 9,
                  fontWeight: 600,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "var(--gold)",
                  background: "linear-gradient(135deg, #f7fdfb, var(--gold-pale))",
                  border: "1px solid var(--gold-border)",
                }}
              >
                {product.designer}
              </span>
              <span
                className="px-3 py-1 rounded-full"
                style={{
                  fontFamily: "var(--font-montserrat)",
                  fontSize: 9,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "var(--text-muted)",
                  background: "var(--ivory)",
                  border: "1px solid var(--border-soft)",
                }}
              >
                New Collection
              </span>
            </div>

            {/* Product title */}
            <div className="animate-fade-up delay-100">
              <h1
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "clamp(28px, 4vw, 42px)",
                  fontWeight: 300,
                  color: "var(--text-primary)",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.15,
                  marginBottom: 16,
                }}
              >
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-3 mb-2">
                <StarRating rating={product.averageRating} size={16} />
                <span
                  style={{
                    fontFamily: "var(--font-dm-mono)",
                    fontSize: 14,
                    fontWeight: 500,
                    color: "var(--text-primary)",
                  }}
                >
                  {product.averageRating.toFixed(1)}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-montserrat)",
                    fontSize: 10,
                    letterSpacing: "0.1em",
                    color: "var(--text-muted)",
                    textTransform: "uppercase",
                  }}
                >
                  {product.reviewCount} reviews
                </span>
              </div>
            </div>

            {/* Price highlight */}
            <div
              className="animate-fade-up delay-200 flex items-center gap-3 my-5 px-4 py-3 rounded-xl"
              style={{
                background: "linear-gradient(135deg, #f7fdfb, var(--gold-pale))",
                border: "1px solid var(--gold-border)",
                display: "inline-flex",
              }}
            >
              <p
                className="gold-shimmer"
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: 28,
                  fontWeight: 400,
                  lineHeight: 1,
                }}
              >
                {product.currency} {new Intl.NumberFormat("id-ID").format(product.rentPrice)}
              </p>
              <span
                style={{
                  fontFamily: "var(--font-montserrat)",
                  fontSize: 10,
                  color: "var(--text-muted)",
                  letterSpacing: "0.08em",
                }}
              >
                / {product.rentDays} days
              </span>
            </div>

            {/* Luxury divider */}
            <div className="luxury-divider animate-fade-up delay-200" />

            {/* Size Selector */}
            <div className="animate-fade-up delay-300">
              <SizeSelector sizes={product.sizes.map((s) => s.size)} defaultSize={product.selectedSize} />
            </div>

            {/* Divider */}
            <div className="luxury-divider animate-fade-up delay-300" />

            {/* Designer */}
            <div className="animate-fade-up delay-400">
              <div className="flex items-center justify-between mb-4">
                <span className="section-label">Designer</span>
                <button
                  style={{
                    fontFamily: "var(--font-montserrat)",
                    fontSize: 9,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "var(--gold)",
                    borderBottom: "1px solid var(--gold-border)",
                    paddingBottom: 1,
                  }}
                >
                  View Collection
                </button>
              </div>

              <div className="flex items-center justify-between p-5 rounded-2xl hover-lift glass-card">
                <div>
                  <p
                    style={{
                      fontFamily: "var(--font-cormorant)",
                      fontSize: 28,
                      fontWeight: 300,
                      letterSpacing: "-0.02em",
                      color: "var(--text-primary)",
                      marginBottom: 4,
                    }}
                  >
                    {product.designer}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-montserrat)",
                      fontSize: 9,
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: "var(--text-muted)",
                    }}
                  >
                    Est. Jakarta 2019
                  </p>
                </div>

                <div
                  className="flex items-center justify-center rounded-full"
                  style={{
                    width: 54,
                    height: 54,
                    background: "linear-gradient(135deg, var(--gold-pale), #f7fdfb)",
                    border: "1.5px solid var(--gold-border)",
                    boxShadow: "0 4px 16px rgba(27,122,90,0.15)",
                  }}
                >
                  <span
                    className="gold-shimmer"
                    style={{
                      fontFamily: "var(--font-cormorant)",
                      fontSize: 24,
                      fontWeight: 300,
                    }}
                  >
                    {product.designer.charAt(0).toUpperCase()}
                  </span>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="luxury-divider animate-fade-up delay-400" />

            {/* Product Details */}
            <div className="animate-fade-up delay-500">
              <p className="section-label mb-5">Product Details</p>

              <div className="rounded-2xl overflow-hidden glass-card">
                {[
                  { label: "Fabric", value: product.fabric },
                  { label: "Fit", value: product.fit },
                  { label: "Care", value: "Dry Clean Only" },
                  { label: "Origin", value: "Jakarta, Indonesia" },
                ].map((row, i, arr) => (
                  <div
                    key={row.label}
                    className="flex justify-between items-center px-5 py-4 transition-colors duration-200 hover:bg-[var(--gold-subtle)]"
                    style={{
                      background: i % 2 === 0 ? "var(--white)" : "var(--cream)",
                      borderBottom: i < arr.length - 1 ? "1px solid var(--border-soft)" : "none",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-montserrat)",
                        fontSize: 9,
                        fontWeight: 600,
                        letterSpacing: "0.16em",
                        textTransform: "uppercase",
                        color: "var(--text-muted)",
                      }}
                    >
                      {row.label}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-cormorant)",
                        fontSize: 17,
                        fontWeight: 400,
                        color: "var(--text-secondary)",
                      }}
                    >
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>

              <SizeGuideTable sizes={product.sizes} selectedSize={product.selectedSize} />
            </div>
          </div>
        </div>

        {/* ══ Full-width sections below ══ */}

        {/* Divider */}
        <div className="luxury-divider mt-16" />

        {/* Reviews — full width */}
        <div className="animate-fade-up delay-100 mb-12">
          <ReviewsSection
            reviews={product.reviews}
            averageRating={product.averageRating}
            reviewCount={product.reviewCount}
          />
        </div>

        {/* Divider */}
        <div className="luxury-divider" />

        {/* Rental Info Banner */}
        <div className="animate-fade-up delay-200">
          <RentalInfoBanner />
        </div>

        {/* Related Products */}
        <div className="animate-fade-up delay-300 pb-8">
          <RelatedProducts />
        </div>

      </div>

      {/* Sticky bottom bar */}
      <AddToCartBar
        price={product.rentPrice}
        currency={product.currency}
        days={product.rentDays}
        productName={product.name}
      />
    </main>
  );
}
