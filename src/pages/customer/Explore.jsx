import { useMemo, useState } from 'react'
import { useApp } from '../../context/AppContext'
import { categories } from '../../data/mockData'
import IdeaCard from '../../components/IdeaCard'

const FILTERS = ['Trending', 'Most Validated', 'New', 'Most Discussed', 'High Purchase Intent']

export default function Explore() {
  const { ideas } = useApp()
  const [filter, setFilter] = useState('Trending')
  const [category, setCategory] = useState('All')

  const filtered = useMemo(() => {
    let list = [...ideas]
    if (category !== 'All') list = list.filter((i) => i.category === category)
    switch (filter) {
      case 'Most Validated': list.sort((a, b) => b.validation - a.validation); break
      case 'New': list.sort((a, b) => a.createdDaysAgo - b.createdDaysAgo); break
      case 'Most Discussed': list.sort((a, b) => b.comments - a.comments); break
      case 'High Purchase Intent': list.sort((a, b) => b.wouldBuyPct - a.wouldBuyPct); break
      default: list.sort((a, b) => b.votes - a.votes)
    }
    return list
  }, [ideas, filter, category])

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-bold mb-1">Explore Ideas</h1>
        <p className="text-ink/50 text-sm">Discover what other customers want companies to build.</p>
      </div>

      <div className="flex flex-wrap gap-2">
        {FILTERS.map((f) => (
          <button key={f} onClick={() => setFilter(f)}
            className={`chip border font-medium ${filter === f ? 'bg-ink text-white border-ink' : 'border-ink/10 text-ink/60 hover:border-ink/30'}`}>
            {f}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap gap-2">
        {['All', ...categories].map((c) => (
          <button key={c} onClick={() => setCategory(c)}
            className={`text-xs px-3 py-1.5 rounded-full transition-colors ${category === c ? 'bg-bridge-50 text-bridge-700 font-semibold' : 'text-ink/50 hover:text-ink'}`}>
            {c}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="card p-10 text-center text-ink/40">No ideas match these filters yet. Try a different category.</div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((idea) => <IdeaCard key={idea.id} idea={idea} />)}
        </div>
      )}
    </div>
  )
}
