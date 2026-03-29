/**
 * CSSilk — A pure-CSS replacement for the WebGL Silk background.
 * Uses layered animated gradients to produce a flowing, silk-like effect
 * without any WebGL/Three.js dependency, ensuring zero GPU context crashes.
 */

interface CSSilkProps {
  color?: string;
  speed?: number;
}

const CSSilk = ({ color = "#ffaa00", speed = 4 }: CSSilkProps) => {
  const dur = `${20 / speed}s`;

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Base colour wash */}
      <div
        className="absolute inset-0"
        style={{ background: color, opacity: 0.15 }}
      />

      {/* Layer 1 – slow diagonal sweep */}
      <div
        className="absolute inset-[-50%] w-[200%] h-[200%]"
        style={{
          background: `repeating-linear-gradient(
            135deg,
            transparent 0%,
            ${color}22 10%,
            transparent 20%,
            ${color}11 30%,
            transparent 40%
          )`,
          animation: `silkDrift1 ${dur} ease-in-out infinite alternate`,
        }}
      />

      {/* Layer 2 – medium vertical wave */}
      <div
        className="absolute inset-[-50%] w-[200%] h-[200%]"
        style={{
          background: `repeating-linear-gradient(
            45deg,
            transparent 0%,
            ${color}18 15%,
            transparent 30%,
            ${color}0d 45%,
            transparent 60%
          )`,
          animation: `silkDrift2 ${parseFloat(dur) * 1.3}s ease-in-out infinite alternate-reverse`,
        }}
      />

      {/* Layer 3 – fast subtle radial pulse */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse at 30% 50%, ${color}20 0%, transparent 70%),
                       radial-gradient(ellipse at 70% 50%, ${color}15 0%, transparent 60%)`,
          animation: `silkPulse ${parseFloat(dur) * 0.8}s ease-in-out infinite alternate`,
        }}
      />

      {/* Inline keyframes – scoped to this component */}
      <style>{`
        @keyframes silkDrift1 {
          0%   { transform: translate(0, 0) rotate(0deg); }
          100% { transform: translate(-15%, -10%) rotate(3deg); }
        }
        @keyframes silkDrift2 {
          0%   { transform: translate(0, 0) rotate(0deg); }
          100% { transform: translate(10%, 15%) rotate(-4deg); }
        }
        @keyframes silkPulse {
          0%   { opacity: 0.6; }
          100% { opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default CSSilk;
