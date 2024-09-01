import { useLocation, Link } from 'react-router-dom'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ButtonAction } from "@/components/ButtonAction"
import { navItems } from "@/config/navigation"

export default function BottomNav() {
  const location = useLocation()

  return (
    <div className="fixed bottom-0 left-0 right-0 border-t bg-background border-border">
      <nav className="flex items-center justify-around h-16 px-4">
        {navItems.map(({ icon: Icon, label, path }) => (
          <Button
            key={path}
            variant="ghost"
            className={cn(
              "flex-1 flex items-center justify-center h-full rounded-none",
              location.pathname === path && "bg-accent text-accent-foreground",
            )}
            asChild
          >
            <Link to={path}>
              <Icon className="w-6 h-6" />
              <span className="sr-only">{label}</span>
            </Link>
          </Button>
        ))}
        <ButtonAction activeTab={location.pathname.slice(1) || 'work'} />
      </nav>
    </div>
  )
}