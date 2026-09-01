export default function MetricCard({ label, value, sub, accent = 'bridge' }) {
  const accentText = {
    bridge: 'text-bridge-600',
    ember: 'text-ember-600',
    signal: 'text-signal-600',
  }[accent] || 'text-bridge-600'

  return (
    <div className="card p-5">
      <div className={`font-display text-3xl font-bold ${accentText}`}>{value}</div>
      <div className="text-sm text-ink/60 mt-1">{label}</div>
      {sub && <div className="text-xs text-ink/40 mt-1">{sub}</div>}
    </div>
  )
}
