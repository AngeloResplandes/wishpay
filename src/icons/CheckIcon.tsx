interface CheckIconProps {
  stroke?: string
}

export function CheckIcon({ stroke = '#7B3FB5' }: CheckIconProps) {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10">
      <path
        d="M2 5l2.5 2.5L8 3"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  )
}
