import { useState } from 'react'
import { Briefcase, User, DollarSign, Heart } from 'lucide-react'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ButtonAction } from "@/components/ButtonAction"

type NavItem = {
  name: string;
  icon: React.ElementType;
  label: string;
};

const navItems: NavItem[] = [
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

type NavItemName = typeof navItems[number]['name'];

export default function BottomNav() {
  const [activeTab, setActiveTab] = useState<NavItemName>('work')

  return (
    <div className="fixed bottom-0 left-0 right-0 border-t bg-background border-border">
      <nav className="relative flex items-center justify-around h-16 px-4">
        {navItems.map(({ icon: Icon, label, name }) => (
          <Button
            key={name}
            variant="ghost"
            className={cn(
              "flex-1 flex items-center justify-center h-full rounded-none",
              activeTab === name && "bg-accent text-accent-foreground",
            )}
            onClick={() => setActiveTab(name)}
          >
            <Icon className="w-6 h-6" />
            <span className="sr-only">{label}</span>
          </Button>
        ))}
        <ButtonAction activeTab={activeTab} />
      </nav>
    </div>
  )
}