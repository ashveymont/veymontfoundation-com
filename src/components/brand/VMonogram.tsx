interface VMonogramProps {
  size?:      number
  color?:     string
  opacity?:   number
  className?: string
}

export default function VMonogram({
  size      = 24,
  color     = 'currentColor',
  opacity   = 1,
  className,
}: VMonogramProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      className={className}
      style={{ color, opacity }}
      aria-hidden="true"
    >
      <path
        d="M 10 8 L 24 38 L 24 38"
        stroke="currentColor"
        strokeWidth="1.25"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M 38 8 L 24 38"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  )
}
