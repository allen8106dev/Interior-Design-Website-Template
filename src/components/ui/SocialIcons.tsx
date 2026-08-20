import type { ReactNode, SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement> & { size?: number }

function Base({ size = 18, children, ...props }: IconProps & { children: ReactNode }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    >
      {children}
    </svg>
  )
}

export function InstagramIcon(props: IconProps) {
  return (
    <Base {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </Base>
  )
}

export function FacebookIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M14 8h2V5h-2c-2.2 0-4 1.8-4 4v2H8v3h2v7h3v-7h2.2l.8-3H13V9c0-.6.4-1 1-1z" fill="currentColor" stroke="none" />
    </Base>
  )
}

export function LinkedinIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M6.5 9.5H9v9H6.5v-9zM7.75 5a1.5 1.5 0 110 3 1.5 1.5 0 010-3z" fill="currentColor" stroke="none" />
      <path d="M11 9.5h2.4v1.3h.1c.3-.6 1.2-1.5 2.6-1.5 2.8 0 3.3 1.8 3.3 4.2v4.9H17v-4.4c0-1 0-2.4-1.5-2.4s-1.7 1.1-1.7 2.3v4.5H11v-9z" fill="currentColor" stroke="none" />
    </Base>
  )
}
