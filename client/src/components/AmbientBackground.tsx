/**
 * AmbientBackground
 * Reusable cinematic background layer for all pages.
 * Drop inside any section/page wrapper as a direct child.
 * Uses pointer-events-none so it never blocks interaction.
 *
 * Props:
 *  variant   – "light" | "dark" | "navy"
 *  orbs      – show floating colour orbs (default true)
 *  grid      – show subtle dot-grid overlay (default true)
 *  particles – show floating micro-dots (default true)
 */
import { motion } from "framer-motion";

type Variant = "light" | "dark" | "navy";

interface Props {
  variant?: Variant;
  orbs?: boolean;
  grid?: boolean;
  particles?: boolean;
  className?: string;
}

// Orb palette per variant
const orbPalette: Record<Variant, { color: string; opacity: [number, number] }[]> = {
  light: [
    { color: "#0EA5E9", opacity: [0.06, 0.13] },
    { color: "#C9A84C", opacity: [0.05, 0.10] },
    { color: "#6366F1", opacity: [0.04, 0.08] },
  ],
  dark: [
    { color: "#0EA5E9", opacity: [0.10, 0.20] },
    { color: "#C9A84C", opacity: [0.07, 0.14] },
    { color: "#6366F1", opacity: [0.06, 0.12] },
  ],
  navy: [
    { color: "#38BDF8", opacity: [0.12, 0.22] },
    { color: "#C9A84C", opacity: [0.08, 0.16] },
    { color: "#818CF8", opacity: [0.07, 0.14] },
  ],
};

const orbPositions = [
  { top: "-15%", right: "-10%",  size: 700, duration: 14 },
  { bottom: "-20%", left: "-8%", size: 580, duration: 18 },
  { top: "35%",  right: "20%",  size: 400, duration: 11 },
];

const particleDots = [
  { top: "12%",  left: "6%",   size: 4, d: 0   },
  { top: "68%",  left: "3%",   size: 3, d: 1.4 },
  { top: "22%",  right: "5%",  size: 5, d: 0.7 },
  { top: "82%",  right: "8%",  size: 3, d: 2.0 },
  { top: "48%",  left: "48%",  size: 2, d: 0.9 },
  { top: "55%",  right: "22%", size: 3, d: 1.8 },
  { top: "88%",  left: "30%",  size: 2, d: 0.4 },
];

export default function AmbientBackground({
  variant = "light",
  orbs = true,
  grid = true,
  particles = true,
  className = "",
}: Props) {
  const palette = orbPalette[variant];
  const dotColor = variant === "light" ? "rgba(14,165,233,0.5)" : "rgba(56,189,248,0.6)";

  return (
    <div
      className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {/* ── Animated gradient orbs ── */}
      {orbs &&
        orbPositions.map((pos, i) => {
          const pal = palette[i % palette.length];
          return (
            <motion.div
              key={i}
              animate={{
                scale:   [1, 1.15, 1],
                opacity: [pal.opacity[0], pal.opacity[1], pal.opacity[0]],
              }}
              transition={{
                duration: pos.duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 2.5,
              }}
              className="absolute rounded-full"
              style={{
                top:    (pos as any).top,
                bottom: (pos as any).bottom,
                left:   (pos as any).left,
                right:  (pos as any).right,
                width:  pos.size,
                height: pos.size,
                background: `radial-gradient(circle, ${pal.color} 0%, transparent 68%)`,
                filter: "blur(1px)",
              }}
            />
          );
        })}

      {/* ── Dot-grid overlay ── */}
      {grid && (
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle, ${
              variant === "light"
                ? "rgba(12,27,46,0.055)"
                : "rgba(255,255,255,0.055)"
            } 1px, transparent 1px)`,
            backgroundSize: "44px 44px",
          }}
        />
      )}

      {/* ── Floating micro-particle dots ── */}
      {particles &&
        particleDots.map((dot, i) => (
          <motion.div
            key={i}
            animate={{ y: [0, -14, 0], opacity: [0.2, 0.55, 0.2] }}
            transition={{
              duration: 4.5 + i * 0.6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: dot.d,
            }}
            className="absolute rounded-full"
            style={{
              top:    dot.top,
              left:   (dot as any).left,
              right:  (dot as any).right,
              width:  dot.size,
              height: dot.size,
              background: dotColor,
            }}
          />
        ))}

      {/* ── Subtle vignette edges ── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            variant === "light"
              ? "radial-gradient(ellipse 120% 100% at 50% 50%, transparent 55%, rgba(12,27,46,0.04) 100%)"
              : "radial-gradient(ellipse 120% 100% at 50% 50%, transparent 55%, rgba(0,0,0,0.15) 100%)",
        }}
      />
    </div>
  );
}
