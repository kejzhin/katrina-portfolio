export const BackgroundEffects = () => {
  return (
    <div className="bg-canvas-container" aria-hidden="true">
      <div className="ambient-orb orb-rose-top" />
      <div className="ambient-orb orb-peach-top" />
      <div className="ambient-orb orb-blush-mid" />
      <div className="ambient-orb orb-champagne-mid" />
      <div className="ambient-orb orb-rose-bottom" />

      <svg
        className="bg-vector-arc bg-vector-arc-top"
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="250" cy="250" r="220" stroke="rgba(184, 123, 112, 0.12)" strokeWidth="1.5" strokeDasharray="6 6" />
        <circle cx="250" cy="250" r="170" stroke="rgba(184, 123, 112, 0.08)" strokeWidth="1" />
        <path
          d="M 50 250 Q 250 80 450 250"
          stroke="rgba(184, 123, 112, 0.15)"
          strokeWidth="1.2"
          fill="none"
        />
      </svg>

      <svg
        className="bg-vector-arc bg-vector-arc-bottom"
        viewBox="0 0 600 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="300" cy="300" r="260" stroke="rgba(184, 123, 112, 0.1)" strokeWidth="1.5" strokeDasharray="8 8" />
        <circle cx="300" cy="300" r="200" stroke="rgba(184, 123, 112, 0.08)" strokeWidth="1" />
        <path
          d="M 80 300 Q 300 480 520 300"
          stroke="rgba(184, 123, 112, 0.12)"
          strokeWidth="1.2"
          fill="none"
        />
      </svg>

      <span className="bg-floating-sparkle sparkle-1">✦</span>
      <span className="bg-floating-sparkle sparkle-2">✧</span>
      <span className="bg-floating-sparkle sparkle-3">✦</span>
      <span className="bg-floating-sparkle sparkle-4">✧</span>
    </div>
  );
};
