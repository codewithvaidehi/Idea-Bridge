import { Link } from 'react-router-dom'
import { ArrowBigUp, MessageCircle, Bookmark, ShoppingCart } from 'lucide-react'
import { useApp } from '../context/AppContext'
import { companies } from '../data/mockData'
import ValidationScore from './ValidationScore'
import StatusBadge from './StatusBadge'

export default function IdeaCard({ idea }) {
  const { upvote, toggleSave, savedIdeaIds, votesCast, voteIntent, pushToast } = useApp()
  const company = companies.find((c) => c.id === idea.companyId)
  const saved = savedIdeaIds.includes(idea.id)
  const voted = votesCast[idea.id] === 'Definitely'

  return (
    <div className="card p-5 flex flex-col gap-3 hover:shadow-lift hover:-translate-y-0.5 transition-all duration-200">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="flex items-center gap-2 text-xs text-ink/50 mb-1">
            <span className="font-medium" style={{ color: company?.color }}>{company?.name}</span>
            <span>·</span>
            <span>{idea.category}</span>
          </div>
          <Link to={`/customer/ideas/${idea.id}`} className="font-display font-semibold text-base leading-snug hover:text-bridge-600 transition-colors">
            {idea.title}
          </Link>
          <p className="text-sm text-ink/60 mt-1 line-clamp-2">{idea.pitch}</p>
        </div>
        <ValidationScore score={idea.validation} size={48} />
      </div>

      <div className="flex items-center gap-4 text-xs text-ink/50">
        <span>by {idea.creator}</span>
        <StatusBadge status={idea.status} />
      </div>

      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center gap-1 text-ink/60">
          <ShoppingCart size={14} />
          <span className="font-semibold text-ink">{idea.wouldBuyPct}%</span>
          <span>would buy</span>
        </div>
        <span className="text-ink/40 text-xs">{idea.comments} comments</span>
      </div>

      <div className="flex items-center gap-2 pt-2 border-t border-ink/[0.05]">
        <button
          onClick={() => upvote(idea.id)}
          className="flex items-center gap-1 text-sm px-3 py-1.5 rounded-full border border-ink/10 hover:border-bridge-300 hover:text-bridge-600 transition-colors"
        >
          <ArrowBigUp size={16} /> {idea.votes.toLocaleString()}
        </button>
        <button
          onClick={() => { voteIntent(idea.id, 'Definitely'); if (!voted) pushToast("Marked \"I'd buy this\" — thanks for validating!") }}
          className={`flex items-center gap-1 text-sm px-3 py-1.5 rounded-full transition-colors ${voted ? 'bg-signal-500 text-white' : 'border border-ink/10 hover:border-signal-400 hover:text-signal-600'}`}
        >
          I'd Buy This
        </button>
        <Link to={`/customer/ideas/${idea.id}`} className="flex items-center gap-1 text-sm px-3 py-1.5 rounded-full border border-ink/10 hover:border-bridge-300 hover:text-bridge-600 transition-colors">
          <MessageCircle size={16} />
        </Link>
        <button
          onClick={() => toggleSave(idea.id)}
          className={`ml-auto flex items-center gap-1 text-sm p-1.5 rounded-full transition-colors ${saved ? 'text-ember-600' : 'text-ink/40 hover:text-ember-600'}`}
          aria-label="Save idea"
        >
          <Bookmark size={18} fill={saved ? 'currentColor' : 'none'} />
        </button>
      </div>
    </div>
  )
}
