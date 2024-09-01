export function Container({
  children
}: { children: React.ReactNode }) {
  return (
    <div className="container p-4 mx-auto space-y-4">
      {children}
    </div>
  )
}