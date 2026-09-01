import { useState } from 'react'
import { Plus, Trophy, Users, FileText } from 'lucide-react'
import { challenges as seedChallenges } from '../../data/mockData'
import { useApp } from '../../context/AppContext'
import Modal from '../../components/Modal'

export default function CompanyChallenges() {
  const { auth, pushToast } = useApp()
  const [open, setOpen] = useState(false)
  const [title, setTitle] = useState('')
  const [reward, setReward] = useState('')
  const [created, setCreated] = useState([])

  const mine = seedChallenges.filter((c) => c.companyId === (auth?.companyId || 'fizzco'))

  const handleCreate = (e) => {
    e.preventDefault()
    if (!title.trim()) return
    setCreated((c) => [{ id: `custom-${Date.now()}`, title, reward: reward || '₹10,000', participants: 0, submitted: 0 }, ...c])
    pushToast('Challenge published to the community.')
    setTitle(''); setReward(''); setOpen(false)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-2xl font-bold mb-1">Challenges</h1>
          <p className="text-ink/50 text-sm">Innovation challenges you've launched to the community.</p>
        </div>
        <button onClick={() => setOpen(true)} className="btn-primary flex items-center gap-1.5 text-sm">
          <Plus size={16} /> New Challenge
        </button>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        {[...created, ...mine].map((c) => (
          <div key={c.id} className="card p-5">
            <h3 className="font-display font-semibold mb-2">{c.title}</h3>
            <div className="flex items-center gap-4 text-xs text-ink/50">
              <span className="flex items-center gap-1"><Trophy size={14} className="text-ember-500" /> {c.reward}</span>
              <span className="flex items-center gap-1"><Users size={14} /> {c.participants.toLocaleString()}</span>
              <span className="flex items-center gap-1"><FileText size={14} /> {c.submitted} ideas</span>
            </div>
          </div>
        ))}
      </div>

      <Modal open={open} onClose={() => setOpen(false)} title="Launch a new challenge">
        <form onSubmit={handleCreate} className="space-y-3">
          <input required value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Challenge title"
            className="w-full border border-ink/10 rounded-xl px-3 py-2.5 text-sm focus:border-bridge-400" />
          <input value={reward} onChange={(e) => setReward(e.target.value)} placeholder="Reward (e.g. ₹40,000)"
            className="w-full border border-ink/10 rounded-xl px-3 py-2.5 text-sm focus:border-bridge-400" />
          <button type="submit" className="btn-primary w-full">Publish Challenge</button>
        </form>
      </Modal>
    </div>
  )
}
