function iconProps(className, size = 18) {
  return {
    className,
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': 'true'
  }
}

export function SearchIcon({ className = '', size = 18 }) {
  return (
    <svg {...iconProps(className, size)}>
      <circle cx="11" cy="11" r="5.5" />
      <path d="M16 16L20 20" />
    </svg>
  )
}

export function UserIcon({ className = '', size = 18 }) {
  return (
    <svg {...iconProps(className, size)}>
      <circle cx="12" cy="8" r="3.5" />
      <path d="M5 18.5c1.4-2.8 4-4.2 7-4.2s5.6 1.4 7 4.2" />
    </svg>
  )
}

export function HeartIcon({ className = '', size = 18, filled = false }) {
  return (
    <svg {...iconProps(className, size)} fill={filled ? 'currentColor' : 'none'}>
      <path d="M12 20.5s-7.2-4.6-9.1-8.3C1.4 9.8 3.2 4.8 7.9 4.8c2.2 0 3.5 1.1 4.1 2.2.6-1.1 1.9-2.2 4.1-2.2 4.7 0 6.5 5 5 7.4-1.9 3.7-9.1 8.3-9.1 8.3Z" />
    </svg>
  )
}

export function CartIcon({ className = '', size = 18 }) {
  return (
    <svg {...iconProps(className, size)}>
      <circle cx="9" cy="18.5" r="1.5" />
      <circle cx="17" cy="18.5" r="1.5" />
      <path d="M3.5 4.5h2l2.2 9.1h9.6l2.2-6.6H7.3" />
    </svg>
  )
}

export function TruckIcon({ className = '', size = 18 }) {
  return (
    <svg {...iconProps(className, size)}>
      <path d="M2.5 7.5h10.5v8H2.5zM13 10h3l3 3v2.5h-6z" />
      <circle cx="7.5" cy="16.5" r="1.5" />
      <circle cx="17" cy="16.5" r="1.5" />
    </svg>
  )
}

export function RotateLeftIcon({ className = '', size = 18 }) {
  return (
    <svg {...iconProps(className, size)}>
      <path d="M3.5 9.5A8.5 8.5 0 0 1 18.3 6" />
      <path d="M5.5 5.5h5v5" />
      <path d="M20.5 14.5A8.5 8.5 0 0 1 5.7 18" />
      <path d="M18.5 18.5h-5v-5" />
    </svg>
  )
}

export function CheckIcon({ className = '', size = 18 }) {
  return (
    <svg {...iconProps(className, size)}>
      <path d="M5 12.5l4.2 4.2L19 2.8" />
    </svg>
  )
}

export function ShieldIcon({ className = '', size = 18 }) {
  return (
    <svg {...iconProps(className, size)}>
      <path d="M12 3.5 18.5 6v6.2c0 3.8-2.2 7.4-6.5 9.3-4.3-1.9-6.5-5.5-6.5-9.3V6L12 3.5Z" />
      <path d="M9.3 12.2 11 14l3.7-4.4" />
    </svg>
  )
}

export function ArrowRightIcon({ className = '', size = 18 }) {
  return (
    <svg {...iconProps(className, size)}>
      <path d="M5 12h14" />
      <path d="M13 5l7 7-7 7" />
    </svg>
  )
}

export function CloseIcon({ className = '', size = 18 }) {
  return (
    <svg {...iconProps(className, size)}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  )
}

export function StarIcon({ className = '', size = 18 }) {
  return (
    <svg {...iconProps(className, size)} fill="currentColor" stroke="none">
      <path d="M12 2.8 14.9 8l5.7.8-4.1 4 1 5.6L12 0.8 6.5 18.4l1-5.6-4.1-4 5.7-.8L12 2.8Z" />
    </svg>
  )
}
