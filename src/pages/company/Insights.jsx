import { useState } from 'react'
import { Sparkles, Loader2 } from 'lucide-react'
import { aiInsights, trendClusters } from '../../data/mockData'
import AIInsightCard from '../../components/AIInsightCard'

export default function Insights() {
  const [generating, setGenerating] = useState(false)
  const [summary, setSummary] = useState(null)

  const handleGenerate = () => {
    setGenerating(true)
    setSummary(null)
    setTimeout(() => {
      setGenerating(false)
      setSummary('Customers increasingly want affordable beverages with lower sugar and regional fruit flavors. The strongest opportunity appears to be a ₹40–₹60 sparkling beverage targeted at consumers aged 18–30.')
    }, 1800)
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-display text-2xl font-bold mb-1">Consumer Intelligence</h1>
        <p className="text-ink/50 text-sm">Turn thousands of customer responses into actionable product opportunities.</p>
      </div>

      <div className="card p-6">
        <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
          <div>
            <h3 className="font-display font-semibold">AI Idea Clustering</h3>
            <p className="text-xs text-ink/50 mt-0.5">12,483 customer responses automatically grouped into themes.</p>
          </div>
          <button onClick={handleGenerate} disabled={generating} className="btn-primary flex items-center gap-1.5 text-sm disabled:opacity-60">
            {generating ? <Loader2 size={16} className="animate-spin" /> : <Sparkles size={16} />}
            {generating ? 'Analyzing...' : 'Generate AI Insight'}
          </button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
          {trendClusters.map((c) => (
            <div key={c.id} className="rounded-xl bg-bridge-50/60 p-4">
              <p className="font-display font-semibold text-sm">{c.name}</p>
              <p className="text-xs text-ink/50 mt-1">{c.responses.toLocaleString()} responses</p>
            </div>
          ))}
        </div>

        {generating && (
          <div className="skeleton h-20 w-full" />
        )}
        {summary && !generating && (
          <div className="bg-ink text-white rounded-xl p-5 flex gap-3">
            <Sparkles size={18} className="text-signal-400 shrink-0 mt-0.5" />
            <p className="text-sm leading-relaxed">{summary}</p>
          </div>
        )}
      </div>

      <div>
        <h2 className="font-display font-semibold text-lg mb-4">Emerging Trends</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {aiInsights.map((insight) => <AIInsightCard key={insight.id} insight={insight} />)}
        </div>
      </div>
    </div>
  )
}
