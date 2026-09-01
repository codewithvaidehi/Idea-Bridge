import { Sparkles } from 'lucide-react'

export default function AIInsightCard({ insight }) {
  return (
    <div className="card p-5">
      <div className="flex items-center justify-between mb-3">
        <span className="chip bg-bridge-50 text-bridge-700 flex items-center gap-1">
          <Sparkles size={12} /> Emerging Trend #{insight.rank}
        </span>
        <span className="text-xs font-semibold text-signal-600">{insight.confidence}% confidence</span>
      </div>
      <h3 className="font-display font-semibold text-lg mb-1">{insight.title}</h3>
      <p className="text-xs text-ink/40 mb-3">{insight.responses.toLocaleString()} related responses</p>
      <ul className="space-y-1.5">
        {insight.points.map((p, i) => (
          <li key={i} className="text-sm text-ink/70 flex gap-2">
            <span className="text-bridge-400 mt-1">—</span>
            <span>{p}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
