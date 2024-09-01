import { Briefcase, User, DollarSign, Heart } from 'lucide-react'

type NavItem = {
  path: string;
  icon: React.ElementType;
  label: string;
};

export const navItems: NavItem[] = [
  {
    path: '/work',
    icon: Briefcase,
    label: 'Work',
  },
  {
    path: '/personal',
    icon: User,
    label: 'Personal',
  },
  {
    path: '/money',
    icon: DollarSign,
    label: 'Money',
  },
  {
    path: '/health',
    icon: Heart,
    label: 'Health',
  },
]

export type NavItemName = typeof navItems[number]['path'];