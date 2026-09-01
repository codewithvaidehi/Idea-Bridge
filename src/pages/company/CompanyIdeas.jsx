import { useState } from 'react'
import { useApp } from '../../context/AppContext'
import StatusBadge from '../../components/StatusBadge'

const STATUSES = ['New', 'Under Review', 'Shortlisted', 'Testing', 'Prototype', 'Launched', 'Rejected']

export default function CompanyIdeas() {
  const { ideas, setIdeaStatus, pushToast, auth } = useApp()
  const [statusFilter, setStatusFilter] = useState('All')

  const companyIdeas = ideas.filter((i) => i.companyId === (auth?.companyId || 'fizzco'))
  const filtered = statusFilter === 'All' ? companyIdeas : companyIdeas.filter((i) => i.status === statusFilter)

  const handleChange = (id, title, status) => {
    setIdeaStatus(id, status)
    pushToast(`"${title}" moved to ${status}.`)
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-bold mb-1">Consumer Ideas</h1>
        <p className="text-ink/50 text-sm">Review and manage every idea submitted to your company.</p>
      </div>

      <div className="flex flex-wrap gap-2">
        {['All', ...STATUSES].map((s) => (
          <button key={s} onClick={() => setStatusFilter(s)}
            className={`chip border font-medium ${statusFilter === s ? 'bg-ink text-white border-ink' : 'border-ink/10 text-ink/60 hover:border-ink/30'}`}>
            {s}
          </button>
        ))}
      </div>

      <div className="card overflow-x-auto">
        <table className="w-full text-sm min-w-[640px]">
          <thead>
            <tr className="border-b border-ink/[0.06] text-left text-ink/40 text-xs uppercase tracking-wide">
              <th className="p-4 font-medium">Idea</th>
              <th className="p-4 font-medium">Validation</th>
              <th className="p-4 font-medium">Purchase Intent</th>
              <th className="p-4 font-medium">Status</th>
              <th className="p-4 font-medium">Update</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((idea) => (
              <tr key={idea.id} className="border-b border-ink/[0.04] last:border-0">
                <td className="p-4">
                  <p className="font-medium">{idea.title}</p>
                  <p className="text-xs text-ink/40">{idea.creator} · {idea.category}</p>
                </td>
                <td className="p-4 font-semibold">{idea.validation}</td>
                <td className="p-4">{idea.wouldBuyPct}%</td>
                <td className="p-4"><StatusBadge status={idea.status} /></td>
                <td className="p-4">
                  <select
                    value={idea.status}
                    onChange={(e) => handleChange(idea.id, idea.title, e.target.value)}
                    className="border border-ink/10 rounded-lg px-2 py-1.5 text-xs focus:border-bridge-400"
                  >
                    {STATUSES.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr><td colSpan={5} className="p-8 text-center text-ink/40">No ideas match this status.</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
