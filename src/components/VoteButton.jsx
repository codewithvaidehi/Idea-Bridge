import { useApp } from '../context/AppContext'

const OPTIONS = [
  { key: 'Definitely', label: 'Definitely', dot: '#14B8A6' },
  { key: 'Probably', label: 'Probably', dot: '#5B5FEF' },
  { key: 'Maybe', label: 'Maybe', dot: '#D8DAE5' },
  { key: 'No', label: 'No', dot: '#FF8A3D' },
]

export default function VoteButton({ ideaId, size = 'md' }) {
  const { votesCast, voteIntent, pushToast } = useApp()
  const current = votesCast[ideaId]
  const padding = size === 'sm' ? 'px-2.5 py-1 text-xs' : 'px-3.5 py-1.5 text-sm'

  const handleVote = (choice) => {
    voteIntent(ideaId, choice)
    if (choice !== current) pushToast(`Marked "${choice}" — thanks for validating this idea.`)
  }

  return (
    <div className="flex flex-wrap gap-1.5">
      {OPTIONS.map((opt) => (
        <button
          key={opt.key}
          onClick={() => handleVote(opt.key)}
          className={`${padding} rounded-full border font-medium transition-all flex items-center gap-1.5 ${
            current === opt.key
              ? 'border-transparent bg-ink text-white'
              : 'border-ink/10 text-ink/70 hover:border-ink/30'
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: current === opt.key ? '#fff' : opt.dot }} />
          {opt.label}
        </button>
      ))}
    </div>
  )
}
