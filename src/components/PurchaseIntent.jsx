export default function PurchaseIntent({ pct, compact = false }) {
  return (
    <div className={compact ? '' : 'w-full'}>
      <div className="flex items-center justify-between text-xs mb-1">
        <span className="text-ink/50">Would buy</span>
        <span className="font-semibold text-ink">{pct}%</span>
      </div>
      <div className="h-1.5 w-full bg-ink/[0.06] rounded-full overflow-hidden">
        <div className="h-full bg-signal-500 rounded-full transition-all duration-500" style={{ width: `${pct}%` }} />
      </div>
    </div>
  )
}
