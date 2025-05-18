export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`relative flex items-center ${className}`}>
      <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-purple-500 to-purple-700">
        <div className="absolute -left-1 -top-1 h-4 w-4 rounded-full bg-yellow-400"></div>
        <div className="absolute -right-1 -bottom-1 h-3 w-3 rounded-full bg-cyan-400"></div>
        <span className="text-lg font-bold text-white">NC</span>
      </div>
      <div className="ml-1 flex flex-col justify-center">
        <span className="text-[10px] font-semibold uppercase tracking-wider text-purple-700">NextGen</span>
        <span className="text-[8px] font-medium uppercase tracking-wider text-purple-600">Communicators</span>
      </div>
    </div>
  )
}
