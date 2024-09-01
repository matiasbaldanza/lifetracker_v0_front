import { Briefcase, User, DollarSign, Heart } from 'lucide-react'

type NavItem = {
  name: string;
  icon: React.ElementType;
  label: string;
};

export const navItems: NavItem[] = [
  {
    name: 'work',
    icon: Briefcase,
    label: 'Work'
  },
  {
    name: 'personal',
    icon: User,
    label: 'Personal'
  },
  {
    name: 'money',
    icon: DollarSign,
    label: 'Money'
  },
  {
    name: 'health',
    icon: Heart,
    label: 'Health'
  },
]

export type NavItemName = typeof navItems[number]['name'];