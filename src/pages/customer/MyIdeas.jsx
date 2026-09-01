import { Link } from 'react-router-dom'
import { Lightbulb, CheckCircle2 } from 'lucide-react'
import { useApp } from '../../context/AppContext'
import IdeaCard from '../../components/IdeaCard'
import StatusBadge from '../../components/StatusBadge'

export default function MyIdeas() {
  const { ideas, savedIdeaIds } = useApp()
  const mine = ideas.filter((i) => i.creator === 'You')
  const saved = ideas.filter((i) => savedIdeaIds.includes(i.id))

  return (
    <div className="space-y-10">
      <div>
        <h1 className="font-display text-2xl font-bold mb-1">My Ideas</h1>
        <p className="text-ink/50 text-sm">Track what happens to every idea you submit.</p>
      </div>

      <section>
        <h2 className="font-display font-semibold text-lg mb-4">What Happened to Your Ideas?</h2>
        {mine.length === 0 ? (
          <div className="card p-10 text-center">
            <Lightbulb size={28} className="mx-auto text-ink/20 mb-3" />
            <p className="text-ink/50 mb-4">You haven't submitted an idea yet. Your first one could shape a real product.</p>
            <Link to="/customer/create" className="btn-primary">Share an Idea</Link>
          </div>
        ) : (
          <div className="space-y-4">
            {mine.map((idea) => (
              <div key={idea.id} className="card p-5">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <Link to={`/customer/ideas/${idea.id}`} className="font-display font-semibold hover:text-bridge-600">{idea.title}</Link>
                    <p className="text-xs text-ink/40 mt-0.5">{idea.category}</p>
                  </div>
                  <StatusBadge status={idea.status} />
                </div>
                <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
                  {idea.journey.map((step, i) => (
                    <div key={step} className="flex items-center gap-1.5 shrink-0">
                      <span className={`chip text-[11px] flex items-center gap-1 ${i <= idea.journeyStage ? 'bg-signal-500/10 text-signal-700' : 'bg-ink/5 text-ink/30'}`}>
                        <CheckCircle2 size={10} /> {step}
                      </span>
                      {i < idea.journey.length - 1 && <span className="w-4 h-px bg-ink/15" />}
                    </div>
                  ))}
                </div>
                <p className="text-xs text-ink/40 mt-3">Your community idea contributed to this product concept.</p>
              </div>
            ))}
          </div>
        )}
      </section>

      <section>
        <h2 className="font-display font-semibold text-lg mb-4">Saved Ideas</h2>
        {saved.length === 0 ? (
          <div className="card p-8 text-center text-ink/40 text-sm">You haven't saved any ideas yet.</div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {saved.map((idea) => <IdeaCard key={idea.id} idea={idea} />)}
          </div>
        )}
      </section>
    </div>
  )
}
