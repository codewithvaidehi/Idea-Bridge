import { useParams, useNavigate, Link } from 'react-router-dom'
import { useState } from 'react'
import { ArrowLeft, Trophy, Users, Clock, FileText, CheckCircle2 } from 'lucide-react'
import { challenges, companies } from '../../data/mockData'
import { useApp } from '../../context/AppContext'

export default function ChallengeDetail() {
  const { id } = useParams()
  const challenge = challenges.find((c) => c.id === id)
  const { pushToast } = useApp()
  const navigate = useNavigate()
  const [joined, setJoined] = useState(false)

  if (!challenge) {
    return (
      <div className="card p-10 text-center">
        <p className="text-ink/50 mb-4">This challenge could not be found.</p>
        <Link to="/customer/challenges" className="btn-secondary">Back to Challenges</Link>
      </div>
    )
  }

  const company = companies.find((c) => c.id === challenge.companyId)

  const handleJoin = () => {
    setJoined(true)
    pushToast(`Joined "${challenge.title}". Submit your idea to enter.`)
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <Link to="/customer/challenges" className="flex items-center gap-1.5 text-sm text-ink/50 hover:text-ink w-fit">
        <ArrowLeft size={16} /> Back to Challenges
      </Link>

      <div className="card p-6 sm:p-8">
        <span className="text-sm font-medium" style={{ color: company?.color }}>{company?.name}</span>
        <h1 className="font-display text-2xl sm:text-3xl font-bold mt-1 mb-4">{challenge.title}</h1>
        <div className="flex flex-wrap gap-5 text-sm text-ink/60 mb-6">
          <span className="flex items-center gap-1.5"><Trophy size={16} className="text-ember-500" /> {challenge.reward} reward</span>
          <span className="flex items-center gap-1.5"><Users size={16} /> {challenge.participants.toLocaleString()} participants</span>
          <span className="flex items-center gap-1.5"><Clock size={16} /> {challenge.deadline}</span>
          <span className="flex items-center gap-1.5"><FileText size={16} /> {challenge.submitted} ideas submitted</span>
        </div>

        <div className="bg-bridge-50 rounded-xl p-5 mb-6">
          <p className="text-sm font-semibold text-bridge-700 mb-1">Challenge brief</p>
          <p className="text-sm text-ink/70">{challenge.brief}</p>
        </div>

        <p className="text-sm font-semibold mb-2">Requirements</p>
        <ul className="space-y-1.5 mb-6">
          {challenge.requirements.map((r) => (
            <li key={r} className="flex items-center gap-2 text-sm text-ink/70">
              <CheckCircle2 size={14} className="text-signal-500" /> {r}
            </li>
          ))}
        </ul>

        {joined ? (
          <button onClick={() => navigate(`/customer/create?company=${challenge.companyId}`)} className="btn-primary w-full sm:w-auto">
            Submit Your Idea
          </button>
        ) : (
          <button onClick={handleJoin} className="btn-primary w-full sm:w-auto">Participate</button>
        )}
      </div>
    </div>
  )
}
