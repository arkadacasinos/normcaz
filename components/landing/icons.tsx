type IconProps = {
  className?: string
}

function Stroke({ className, children }: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  )
}

export function IconBurger({ className }: IconProps) {
  return (
    <Stroke className={className}>
      <path d="M4 6h16M4 12h16M4 18h16" />
    </Stroke>
  )
}

export function IconClose({ className }: IconProps) {
  return (
    <Stroke className={className}>
      <path d="M6 6l12 12M18 6L6 18" />
    </Stroke>
  )
}

export function IconSearch({ className }: IconProps) {
  return (
    <Stroke className={className}>
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4.3-4.3" />
    </Stroke>
  )
}

export function IconGift({ className }: IconProps) {
  return (
    <Stroke className={className}>
      <path d="M4 8h16v4H4z" />
      <path d="M6 12v8h12v-8" />
      <path d="M12 8v12" />
      <path d="M12 8c-1.5-3.5-6.5-3.5-6.5 0H12z" />
      <path d="M12 8c1.5-3.5 6.5-3.5 6.5 0H12z" />
    </Stroke>
  )
}

export function IconCards({ className }: IconProps) {
  return (
    <Stroke className={className}>
      <rect x="3" y="7" width="10" height="14" rx="2" />
      <rect x="11" y="3" width="10" height="14" rx="2" />
    </Stroke>
  )
}

export function IconLive({ className }: IconProps) {
  return (
    <Stroke className={className}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="3" fill="currentColor" stroke="none" />
    </Stroke>
  )
}

export function IconBolt({ className }: IconProps) {
  return (
    <Stroke className={className}>
      <path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" />
    </Stroke>
  )
}

export function IconCrown({ className }: IconProps) {
  return (
    <Stroke className={className}>
      <path d="M4 17l1.5-8L10 13l2-6 2 6 4.5-4L20 17H4z" />
      <path d="M6 21h12" />
    </Stroke>
  )
}

export function IconTrophy({ className }: IconProps) {
  return (
    <Stroke className={className}>
      <path d="M8 21h8" />
      <path d="M12 17v4" />
      <path d="M7 4h10v6a5 5 0 0 1-10 0V4z" />
      <path d="M7 6H4c0 3 1.5 4.5 3 4.5" />
      <path d="M17 6h3c0 3-1.5 4.5-3 4.5" />
    </Stroke>
  )
}

export function IconGrid({ className }: IconProps) {
  return (
    <Stroke className={className}>
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" />
    </Stroke>
  )
}

export function IconSlot({ className }: IconProps) {
  return (
    <Stroke className={className}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M8 9v6M12 9v6M16 9v6" />
    </Stroke>
  )
}

export function IconArrowUpRight({ className }: IconProps) {
  return (
    <Stroke className={className}>
      <path d="M7 17L17 7" />
      <path d="M9 7h8v8" />
    </Stroke>
  )
}

export function IconChevronRight({ className }: IconProps) {
  return (
    <Stroke className={className}>
      <path d="M9 6l6 6-6 6" />
    </Stroke>
  )
}

export function IconStar({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.6 7-6.2-3.7-6.2 3.7 1.6-7L2 9.2l7.1-.6L12 2z" />
    </svg>
  )
}
