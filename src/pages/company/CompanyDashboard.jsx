import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useApp } from '../../context/AppContext'
import { companyOverview, trendClusters } from '../../data/mockData'
import MetricCard from '../../components/MetricCard'
import StatusBadge from '../../components/StatusBadge'
import ValidationScore from '../../components/ValidationScore'

export default function CompanyDashboard() {
  const { auth, ideas } = useApp()
  const recent = [...ideas].sort((a, b) => b.validation - a.validation).slice(0, 5)

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-display text-2xl font-bold mb-1">Consumer Innovation Overview</h1>
        <p className="text-ink/50 text-sm">A live snapshot of everything your customers are telling you.</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
        <MetricCard label="Consumer responses" value={companyOverview.responses.toLocaleString()} />
        <MetricCard label="Ideas submitted" value={companyOverview.ideasSubmitted.toLocaleString()} accent="ember" />
        <MetricCard label="Avg. purchase intent" value={`${companyOverview.avgPurchaseIntent}%`} accent="signal" />
        <MetricCard label="Emerging trends" value={companyOverview.emergingTrends} />
        <MetricCard label="Est. research value" value={companyOverview.researchValue} accent="ember" />
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 card p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-display font-semibold">Highest-Validated Ideas</h3>
            <Link to="/company/ideas" className="text-sm text-bridge-600 font-medium hover:underline flex items-center gap-1">
              Manage all <ArrowRight size={14} />
            </Link>
          </div>
          <div className="space-y-3">
            {recent.map((idea) => (
              <div key={idea.id} className="flex items-center gap-3 p-3 rounded-xl hover:bg-ink/[0.02]">
                <ValidationScore score={idea.validation} size={38} />
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium truncate">{idea.title}</p>
                  <p className="text-xs text-ink/40">{idea.wouldBuyPct}% purchase intent · {idea.votes.toLocaleString()} votes</p>
                </div>
                <StatusBadge status={idea.status} />
              </div>
            ))}
          </div>
        </div>

        <div className="card p-6">
          <h3 className="font-display font-semibold mb-4">AI Idea Clusters</h3>
          <div className="space-y-3">
            {trendClusters.map((c) => (
              <div key={c.id} className="flex items-center justify-between text-sm">
                <span className="text-ink/70">{c.name}</span>
                <span className="font-semibold text-bridge-600">{c.responses.toLocaleString()}</span>
              </div>
            ))}
          </div>
          <Link to="/company/insights" className="btn-secondary w-full text-center mt-5 text-sm">View Consumer Intelligence</Link>
        </div>
      </div>
    </div>
  )
}
