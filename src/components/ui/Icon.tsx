import {
  Home,
  UtensilsCrossed,
  Sofa,
  BedDouble,
  Building2,
  Hammer,
  LayoutGrid,
  Armchair,
  Sparkles,
  ListChecks,
  Gem,
  Users,
  Route,
  Focus,
  type LucideIcon,
} from 'lucide-react'

const iconMap: Record<string, LucideIcon> = {
  home: Home,
  utensils: UtensilsCrossed,
  sofa: Sofa,
  bed: BedDouble,
  building: Building2,
  hammer: Hammer,
  layout: LayoutGrid,
  armchair: Armchair,
  sparkles: Sparkles,
  'list-checks': ListChecks,
  gem: Gem,
  users: Users,
  route: Route,
  focus: Focus,
}

interface IconProps {
  name: string
  className?: string
  size?: number
  strokeWidth?: number
}

export function Icon({ name, className, size = 22, strokeWidth = 1.5 }: IconProps) {
  const Lucide = iconMap[name] ?? Sparkles
  return <Lucide className={className} size={size} strokeWidth={strokeWidth} aria-hidden />
}
