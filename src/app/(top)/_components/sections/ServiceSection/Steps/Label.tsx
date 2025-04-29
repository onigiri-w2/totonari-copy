export default function Label({ step }: { step: number }) {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40">
      <circle
        cx="20"
        cy="20"
        r="20"
        mask={`url(#stepmask-${step})`}
        className="fill-accent"
      />
      <mask id={`stepmask-${step}`}>
        <rect width="100%" height="100%" fill="white" />
        <text
          x="20"
          y="14"
          textAnchor="middle"
          className="font-cabin text-[7px] font-bold tracking-100"
        >
          step
        </text>
        <text
          x="20"
          y="30"
          textAnchor="middle"
          className="font-cabin text-[15px] font-bold tracking-100"
        >
          {step}
        </text>
      </mask>
    </svg>
  )
}

