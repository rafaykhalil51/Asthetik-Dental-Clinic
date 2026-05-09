/**
 * ASTHETIK DENTAL — Partner Brands Strip
 * Design: White bg, brand logos row with subtle styling
 */

const brands = [
  { name: "Invisalign", color: "#0076CE" },
  { name: "Straumann", color: "#003087" },
  { name: "Dentium", color: "#1a5c8a" },
  { name: "Sensodyne", color: "#00529B" },
  { name: "Colgate", color: "#CC0000" },
  { name: "Oral-B", color: "#003087" },
];

export default function BrandsStrip() {
  return (
    <section
      className="py-10 border-t"
      style={{ backgroundColor: "white", borderColor: "#e8e0d0" }}
    >
      <div className="container">
        <p
          className="text-center text-xs font-semibold tracking-widest uppercase mb-6"
          style={{ color: "#9ca3af", fontFamily: "'Poppins', sans-serif" }}
        >
          Our Trusted Product Partners
        </p>
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="flex items-center justify-center px-6 py-3 rounded-xl border font-bold text-sm transition-all hover:shadow-md hover:scale-105"
              style={{
                borderColor: "#e8e0d0",
                backgroundColor: "white",
                color: brand.color,
                fontFamily: "'Poppins', sans-serif",
                minWidth: "110px",
                letterSpacing: "0.05em",
              }}
            >
              {brand.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
