import { useParams, Link } from 'react-router-dom'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, PieChart, Pie } from 'recharts'
import { ArrowLeft, Bookmark, ShoppingCart, CheckCircle2 } from 'lucide-react'
import { useApp } from '../../context/AppContext'
import { companies } from '../../data/mockData'
import ValidationScore from '../../components/ValidationScore'
import StatusBadge from '../../components/StatusBadge'
import VoteButton from '../../components/VoteButton'
import CommentSection from '../../components/CommentSection'

export default function IdeaDetail() {
  const { id } = useParams()
  const { ideas, toggleSave, savedIdeaIds } = useApp()
  const idea = ideas.find((i) => i.id === id)

  if (!idea) {
    return (
      <div className="card p-10 text-center">
        <p className="text-ink/50 mb-4">This idea could not be found.</p>
        <Link to="/customer/explore" className="btn-secondary">Back to Explore</Link>
      </div>
    )
  }

  const company = companies.find((c) => c.id === idea.companyId)
  const saved = savedIdeaIds.includes(idea.id)

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <Link to="/customer/explore" className="flex items-center gap-1.5 text-sm text-ink/50 hover:text-ink w-fit">
        <ArrowLeft size={16} /> Back to Explore
      </Link>

      <div className="card p-6 sm:p-8">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            <div className="flex items-center gap-2 text-sm mb-2">
              <span className="font-medium" style={{ color: company?.color }}>{company?.name}</span>
              <span className="text-ink/30">·</span>
              <span className="text-ink/50">{idea.category}</span>
              <StatusBadge status={idea.status} />
            </div>
            <h1 className="font-display text-2xl sm:text-3xl font-bold">{idea.title}</h1>
            <p className="text-sm text-ink/50 mt-1">by {idea.creator}</p>
          </div>
          <ValidationScore score={idea.validation} size={64} />
        </div>

        <p className="text-ink/70 leading-relaxed mb-6">{idea.description}</p>

        <div className="grid sm:grid-cols-2 gap-4 mb-6 text-sm">
          <div>
            <p className="font-semibold text-ink/40 text-xs uppercase tracking-wide mb-1">Problem it solves</p>
            <p className="text-ink/70">{idea.problem}</p>
          </div>
          <div>
            <p className="font-semibold text-ink/40 text-xs uppercase tracking-wide mb-1">Target customer</p>
            <p className="text-ink/70">{idea.targetCustomer}</p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-ink/[0.06]">
          <div>
            <p className="text-xs text-ink/40 mb-2">Would you actually buy this?</p>
            <VoteButton ideaId={idea.id} />
          </div>
          <button onClick={() => toggleSave(idea.id)}
            className={`ml-auto flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-full border transition-colors ${saved ? 'border-ember-300 text-ember-600 bg-ember-50' : 'border-ink/10 text-ink/60 hover:border-ember-300'}`}>
            <Bookmark size={16} fill={saved ? 'currentColor' : 'none'} /> {saved ? 'Saved' : 'Save'}
          </button>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div className="card p-6">
          <h3 className="font-display font-semibold text-sm mb-4">Community Validation</h3>
          <ResponsiveContainer width="100%" height={180}>
            <PieChart>
              <Pie data={idea.intentData} dataKey="value" nameKey="label" innerRadius={45} outerRadius={70} paddingAngle={3}>
                {idea.intentData.map((d, i) => <Cell key={i} fill={d.color} />)}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="grid grid-cols-2 gap-2 mt-2">
            {idea.intentData.map((d) => {
              const total = idea.intentData.reduce((s, x) => s + x.value, 0) || 1
              const pct = Math.round((d.value / total) * 100)
              return (
                <div key={d.label} className="flex items-center gap-2 text-xs">
                  <span className="w-2 h-2 rounded-full" style={{ background: d.color }} />
                  <span className="text-ink/60">{d.label}</span>
                  <span className="ml-auto font-semibold">{pct}%</span>
                </div>
              )
            })}
          </div>
        </div>

        <div className="card p-6">
          <h3 className="font-display font-semibold text-sm mb-4">Preferred Price</h3>
          <ResponsiveContainer width="100%" height={180}>
            <BarChart data={idea.priceData}>
              <XAxis dataKey="label" tick={{ fontSize: 12 }} axisLine={false} tickLine={false} />
              <YAxis hide />
              <Tooltip cursor={{ fill: '#F1F1FE' }} />
              <Bar dataKey="value" fill="#5B5FEF" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
          <p className="text-xs text-ink/40 mt-2">Suggested by creator: ₹{idea.suggestedPrice}</p>
        </div>
      </div>

      <div className="card p-6">
        <h3 className="font-display font-semibold text-sm mb-4">AI-Detected Insights</h3>
        <p className="text-xs text-ink/50 mb-3">Emerging consumer needs found across votes and comments on this idea:</p>
        <div className="flex flex-wrap gap-2">
          {idea.needs.length > 0 ? idea.needs.map((n) => (
            <span key={n} className="chip bg-signal-500/10 text-signal-700">{n}</span>
          )) : <p className="text-sm text-ink/40">Not enough responses yet to detect a pattern.</p>}
        </div>
      </div>

      <div className="card p-6">
        <div className="flex items-center gap-4 mb-4">
          <ValidationScore score={idea.validation} size={48} />
          <div>
            <h3 className="font-display font-semibold text-sm">Validation Score: {idea.validation}/100</h3>
            <p className="text-xs text-ink/50 mt-1">Calculated from purchase intent (40%), vote volume relative to category (30%), comment engagement (15%), and price-fit confidence (15%).</p>
          </div>
        </div>
      </div>

      <div className="card p-6">
        <h3 className="font-display font-semibold text-sm mb-4">What Happened to This Idea?</h3>
        <div className="flex items-center gap-2 overflow-x-auto pb-2">
          {idea.journey.map((step, i) => (
            <div key={step} className="flex items-center gap-2 shrink-0">
              <div className={`flex items-center gap-1.5 chip ${i <= idea.journeyStage ? 'bg-signal-500/10 text-signal-700' : 'bg-ink/5 text-ink/30'}`}>
                <CheckCircle2 size={12} /> {step}
              </div>
              {i < idea.journey.length - 1 && <span className="w-6 h-px bg-ink/15" />}
            </div>
          ))}
        </div>
      </div>

      <div className="card p-6">
        <h3 className="font-display font-semibold text-sm mb-4">Community Feedback ({idea.comments})</h3>
        <CommentSection ideaId={idea.id} comments={idea.commentsList} />
      </div>
    </div>
  )
}
