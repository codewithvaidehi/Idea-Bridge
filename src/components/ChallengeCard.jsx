import { Link } from 'react-router-dom'
import { Users, Trophy, Clock } from 'lucide-react'
import { companies } from '../data/mockData'

export default function ChallengeCard({ challenge }) {
  const company = companies.find((c) => c.id === challenge.companyId)
  return (
    <div className="card p-5 flex flex-col gap-3 hover:shadow-lift transition-all duration-200">
      <div className="flex items-center gap-2 text-xs font-medium" style={{ color: company?.color }}>
        <span className="w-2 h-2 rounded-full" style={{ background: company?.color }} />
        {company?.name}
      </div>
      <h3 className="font-display font-semibold leading-snug">{challenge.title}</h3>
      <p className="text-sm text-ink/60 line-clamp-2">{challenge.brief}</p>
      <div className="flex items-center gap-4 text-xs text-ink/50 pt-1">
        <span className="flex items-center gap-1"><Trophy size={14} className="text-ember-500" /> {challenge.reward}</span>
        <span className="flex items-center gap-1"><Users size={14} /> {challenge.participants.toLocaleString()}</span>
        <span className="flex items-center gap-1"><Clock size={14} /> {challenge.daysLeft}d left</span>
      </div>
      <Link to={`/customer/challenges/${challenge.id}`} className="btn-primary text-center text-sm mt-1">
        Participate
      </Link>
    </div>
  )
}
