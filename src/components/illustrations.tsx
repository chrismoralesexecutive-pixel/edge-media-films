interface IllProps {
  className?: string;
}

/* Abstract cinematic illustration — filmmakers collaborating around a timeline */
export function CollaborationIllustration({ className }: IllProps) {
  return (
    <svg className={className} viewBox="0 0 480 320" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="colab-gold" x1="0" y1="0" x2="480" y2="320">
          <stop offset="0%" stopColor="#e8b04b" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#c9a227" stopOpacity="0.08" />
        </linearGradient>
        <linearGradient id="colab-line" x1="0" y1="160" x2="480" y2="160">
          <stop offset="0%" stopColor="#e8b04b" stopOpacity="0" />
          <stop offset="50%" stopColor="#e8b04b" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#e8b04b" stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* timeline line */}
      <line x1="40" y1="160" x2="440" y2="160" stroke="url(#colab-line)" strokeWidth="1.5" />
      {/* nodes */}
      {[80, 180, 280, 380].map((x, i) => (
        <g key={i}>
          <circle cx={x} cy="160" r="6" fill="#050506" stroke="#e8b04b" strokeWidth="1.5" />
          <circle cx={x} cy="160" r="2.5" fill="#e8b04b" />
          {/* vertical connector */}
          <line x1={x} y1={i % 2 === 0 ? "100" : "220"} x2={x} y2="160" stroke="#e8b04b" strokeWidth="1" strokeOpacity="0.3" />
          {/* figure circle */}
          <circle cx={x} cy={i % 2 === 0 ? 80 : 240} r="22" fill="url(#colab-gold)" stroke="#e8b04b" strokeWidth="1" strokeOpacity="0.4" />
          <circle cx={x} cy={i % 2 === 0 ? 74 : 234} r="8" fill="#e8b04b" fillOpacity="0.7" />
          <path d={`M${x - 12} ${i % 2 === 0 ? 92 : 252} q12 -10 24 0`} stroke="#e8b04b" strokeWidth="1.5" fill="none" strokeOpacity="0.5" />
        </g>
      ))}
      {/* camera icon center */}
      <g transform="translate(220, 130)">
        <rect x="0" y="0" width="40" height="28" rx="4" fill="none" stroke="#e8b04b" strokeWidth="1.2" strokeOpacity="0.5" />
        <circle cx="20" cy="14" r="8" fill="none" stroke="#e8b04b" strokeWidth="1.2" strokeOpacity="0.6" />
        <circle cx="20" cy="14" r="3" fill="#e8b04b" fillOpacity="0.4" />
      </g>
    </svg>
  );
}

/* Abstract storytelling illustration — narrative arc */
export function StorytellingIllustration({ className }: IllProps) {
  return (
    <svg className={className} viewBox="0 0 480 320" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="story-arc" x1="0" y1="320" x2="480" y2="0">
          <stop offset="0%" stopColor="#e8b04b" stopOpacity="0" />
          <stop offset="50%" stopColor="#e8b04b" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#e8b04b" stopOpacity="0.1" />
        </linearGradient>
      </defs>
      {/* narrative arc */}
      <path d="M40 260 Q120 60 240 100 Q360 140 440 40" stroke="url(#story-arc)" strokeWidth="2.5" fill="none" />
      {/* act markers */}
      {[{x: 100, y: 180, l: "Act I"}, {x: 240, y: 100, l: "Act II"}, {x: 380, y: 80, l: "Act III"}].map((m, i) => (
        <g key={i}>
          <circle cx={m.x} cy={m.y} r="5" fill="#e8b04b" fillOpacity="0.8" />
          <circle cx={m.x} cy={m.y} r="10" fill="none" stroke="#e8b04b" strokeWidth="1" strokeOpacity="0.3" />
          <text x={m.x} y={m.y - 18} textAnchor="middle" fill="#93939a" fontSize="10" fontFamily="JetBrains Mono" letterSpacing="0.1em">{m.l}</text>
        </g>
      ))}
      {/* axis line */}
      <line x1="40" y1="280" x2="440" y2="280" stroke="#93939a" strokeWidth="0.5" strokeOpacity="0.3" />
      {/* rising dots */}
      {[60, 120, 180, 240, 300, 360, 420].map((x, i) => (
        <circle key={i} cx={x} cy={280 - (i * 2.5)} r="1.5" fill="#e8b04b" fillOpacity={0.3 + i * 0.08} />
      ))}
    </svg>
  );
}

/* Abstract production pipeline illustration */
export function PipelineIllustration({ className }: IllProps) {
  return (
    <svg className={className} viewBox="0 0 480 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="pipe-line" x1="0" y1="0" x2="480" y2="0">
          <stop offset="0%" stopColor="#e8b04b" stopOpacity="0.1" />
          <stop offset="50%" stopColor="#e8b04b" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#e8b04b" stopOpacity="0.1" />
        </linearGradient>
      </defs>
      <line x1="40" y1="100" x2="440" y2="100" stroke="url(#pipe-line)" strokeWidth="2" />
      {[80, 170, 260, 350, 420].map((x, i) => (
        <g key={i}>
          <rect x={x - 20} y="80" width="40" height="40" rx="8" fill="none" stroke="#e8b04b" strokeWidth="1.2" strokeOpacity="0.4" />
          <circle cx={x} cy="100" r="6" fill="#e8b04b" fillOpacity={0.3 + i * 0.12} />
          <text x={x} y="140" textAnchor="middle" fill="#93939a" fontSize="8" fontFamily="JetBrains Mono" letterSpacing="0.1em">{["DISC", "DEV", "PROD", "EDIT", "DEL"][i]}</text>
        </g>
      ))}
    </svg>
  );
}

/* Abstract vision / purpose illustration — eye + light */
export function VisionIllustration({ className }: IllProps) {
  return (
    <svg className={className} viewBox="0 0 480 320" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="vision-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#e8b04b" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#e8b04b" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="240" cy="160" r="120" fill="url(#vision-glow)" />
      {/* eye shape */}
      <path d="M120 160 Q240 80 360 160 Q240 240 120 160 Z" fill="none" stroke="#e8b04b" strokeWidth="1.5" strokeOpacity="0.6" />
      <circle cx="240" cy="160" r="40" fill="none" stroke="#e8b04b" strokeWidth="1.2" strokeOpacity="0.5" />
      <circle cx="240" cy="160" r="18" fill="#e8b04b" fillOpacity="0.15" stroke="#e8b04b" strokeWidth="1" strokeOpacity="0.6" />
      <circle cx="240" cy="160" r="6" fill="#e8b04b" />
      {/* light rays */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((a, i) => {
        const r = (a * Math.PI) / 180;
        const x1 = 240 + Math.cos(r) * 60;
        const y1 = 160 + Math.sin(r) * 60;
        const x2 = 240 + Math.cos(r) * 90;
        const y2 = 160 + Math.sin(r) * 90;
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#e8b04b" strokeWidth="1" strokeOpacity={0.2 + (i % 2) * 0.2} />;
      })}
    </svg>
  );
}

/* Abstract award / achievement illustration */
export function AwardIllustration({ className }: IllProps) {
  return (
    <svg className={className} viewBox="0 0 480 320" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="award-gold" x1="0" y1="0" x2="0" y2="320">
          <stop offset="0%" stopColor="#e8b04b" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#c9a227" stopOpacity="0.1" />
        </linearGradient>
      </defs>
      {/* trophy */}
      <path d="M200 60 L280 60 L270 140 Q240 170 210 140 Z" fill="url(#award-gold)" stroke="#e8b04b" strokeWidth="1.2" />
      <rect x="220" y="170" width="40" height="10" fill="none" stroke="#e8b04b" strokeWidth="1.2" />
      <rect x="210" y="180" width="60" height="40" rx="4" fill="none" stroke="#e8b04b" strokeWidth="1.2" strokeOpacity="0.5" />
      <path d="M200 80 Q170 80 170 110 Q170 130 200 130" fill="none" stroke="#e8b04b" strokeWidth="1.2" />
      <path d="M280 80 Q310 80 310 110 Q310 130 280 130" fill="none" stroke="#e8b04b" strokeWidth="1.2" />
      {/* star */}
      <path d="M240 90 L244 100 L254 100 L246 106 L249 116 L240 110 L231 116 L234 106 L226 100 L236 100 Z" fill="#e8b04b" fillOpacity="0.7" />
      {/* orbiting dots */}
      {[0, 60, 120, 180, 240, 300].map((a, i) => {
        const r = (a * Math.PI) / 180;
        const x = 240 + Math.cos(r) * 130;
        const y = 160 + Math.sin(r) * 80;
        return <circle key={i} cx={x} cy={y} r="3" fill="#e8b04b" fillOpacity={0.4 + (i % 3) * 0.2} />;
      })}
    </svg>
  );
}

/* Abstract value illustration — diamond / facet */
export function ValueIllustration({ className }: IllProps) {
  return (
    <svg className={className} viewBox="0 0 480 320" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="val-gold" x1="0" y1="0" x2="480" y2="320">
          <stop offset="0%" stopColor="#e8b04b" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#c9a227" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      {/* faceted diamond */}
      <path d="M240 60 L340 140 L240 260 L140 140 Z" fill="url(#val-gold)" stroke="#e8b04b" strokeWidth="1.2" strokeOpacity="0.5" />
      <path d="M140 140 L340 140" stroke="#e8b04b" strokeWidth="1" strokeOpacity="0.4" />
      <path d="M240 60 L200 140 L240 260 L280 140 Z" fill="none" stroke="#e8b04b" strokeWidth="0.8" strokeOpacity="0.3" />
      <path d="M200 140 L240 60" stroke="#e8b04b" strokeWidth="0.8" strokeOpacity="0.3" />
      <path d="M280 140 L240 60" stroke="#e8b04b" strokeWidth="0.8" strokeOpacity="0.3" />
      {/* glow */}
      <circle cx="240" cy="140" r="60" fill="none" stroke="#e8b04b" strokeWidth="0.5" strokeOpacity="0.2" />
      <circle cx="240" cy="140" r="90" fill="none" stroke="#e8b04b" strokeWidth="0.5" strokeOpacity="0.1" />
    </svg>
  );
}

/* Abstract commitment illustration — linked rings */
export function CommitmentIllustration({ className }: IllProps) {
  return (
    <svg className={className} viewBox="0 0 480 320" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="com-gold" x1="0" y1="0" x2="480" y2="320">
          <stop offset="0%" stopColor="#e8b04b" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#c9a227" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      {/* interlocking rings */}
      <circle cx="180" cy="160" r="70" fill="none" stroke="#e8b04b" strokeWidth="2" strokeOpacity="0.5" />
      <circle cx="300" cy="160" r="70" fill="none" stroke="#e8b04b" strokeWidth="2" strokeOpacity="0.5" />
      <circle cx="240" cy="120" r="50" fill="none" stroke="#e8b04b" strokeWidth="1.5" strokeOpacity="0.3" />
      <circle cx="240" cy="200" r="50" fill="none" stroke="#e8b04b" strokeWidth="1.5" strokeOpacity="0.3" />
      {/* center node */}
      <circle cx="240" cy="160" r="12" fill="#e8b04b" fillOpacity="0.3" stroke="#e8b04b" strokeWidth="1.5" />
      <circle cx="240" cy="160" r="4" fill="#e8b04b" />
    </svg>
  );
}

/* Abstract industry illustration — network nodes */
export function IndustryIllustration({ className }: IllProps) {
  return (
    <svg className={className} viewBox="0 0 480 320" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="ind-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#e8b04b" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#e8b04b" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="240" cy="160" r="140" fill="url(#ind-glow)" />
      {/* nodes */}
      {[{x: 240, y: 80}, {x: 360, y: 130}, {x: 340, y: 240}, {x: 140, y: 240}, {x: 120, y: 130}, {x: 240, y: 240}].map((n, i) => (
        <g key={i}>
          <line x1="240" y1="160" x2={n.x} y2={n.y} stroke="#e8b04b" strokeWidth="0.8" strokeOpacity="0.25" />
          <circle cx={n.x} cy={n.y} r="10" fill="none" stroke="#e8b04b" strokeWidth="1.2" strokeOpacity="0.5" />
          <circle cx={n.x} cy={n.y} r="4" fill="#e8b04b" fillOpacity="0.6" />
        </g>
      ))}
      <circle cx="240" cy="160" r="14" fill="#e8b04b" fillOpacity="0.2" stroke="#e8b04b" strokeWidth="1.5" />
    </svg>
  );
}

/* Abstract creative process illustration — spiral */
export function SpiralIllustration({ className }: IllProps) {
  return (
    <svg className={className} viewBox="0 0 480 320" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="spiral-g" x1="0" y1="0" x2="480" y2="320">
          <stop offset="0%" stopColor="#e8b04b" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#e8b04b" stopOpacity="0.1" />
        </linearGradient>
      </defs>
      <path d="M240 160 m0 0 a20 20 0 1 1 40 0 a20 20 0 1 1 -40 0" stroke="url(#spiral-g)" strokeWidth="1.5" fill="none" />
      <path d="M240 160 m-40 0 a40 40 0 1 1 80 0 a40 40 0 1 1 -80 0" stroke="url(#spiral-g)" strokeWidth="1.5" fill="none" strokeOpacity="0.7" />
      <path d="M240 160 m-80 0 a80 80 0 1 1 160 0 a80 80 0 1 1 -160 0" stroke="url(#spiral-g)" strokeWidth="1.5" fill="none" strokeOpacity="0.5" />
      <path d="M240 160 m-120 0 a120 120 0 1 1 240 0 a120 120 0 1 1 -240 0" stroke="url(#spiral-g)" strokeWidth="1.5" fill="none" strokeOpacity="0.3" />
      <circle cx="240" cy="160" r="6" fill="#e8b04b" />
    </svg>
  );
}

/* Abstract service illustration — layered panels */
export function LayersIllustration({ className }: IllProps) {
  return (
    <svg className={className} viewBox="0 0 480 320" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="layer-g" x1="0" y1="0" x2="480" y2="320">
          <stop offset="0%" stopColor="#e8b04b" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#c9a227" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      {[0, 1, 2, 3].map((i) => (
        <rect key={i} x={120 + i * 20} y={60 + i * 30} width="240" height="160" rx="12"
          fill="url(#layer-g)" stroke="#e8b04b" strokeWidth="1" strokeOpacity={0.5 - i * 0.1}
          transform={`rotate(${-2 + i} 240 ${140 + i * 30})`} />
      ))}
      <rect x="180" y="100" width="120" height="80" rx="8" fill="none" stroke="#e8b04b" strokeWidth="1.5" strokeOpacity="0.6" />
      <line x1="200" y1="125" x2="280" y2="125" stroke="#e8b04b" strokeWidth="1" strokeOpacity="0.4" />
      <line x1="200" y1="145" x2="260" y2="145" stroke="#e8b04b" strokeWidth="1" strokeOpacity="0.3" />
      <line x1="200" y1="165" x2="270" y2="165" stroke="#e8b04b" strokeWidth="1" strokeOpacity="0.2" />
    </svg>
  );
}
