import { useState, useMemo, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Search, X } from 'lucide-react'
import { useApp } from '../context/AppContext'
import { companies, challenges } from '../data/mockData'

export default function GlobalSearch() {
  const { ideas } = useApp()
  const [query, setQuery] = useState('')
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()
  const ref = useRef(null)

  useEffect(() => {
    const handler = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false) }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return null
    return {
      ideas: ideas.filter((i) => i.title.toLowerCase().includes(q) || i.category.toLowerCase().includes(q)).slice(0, 4),
      challenges: challenges.filter((c) => c.title.toLowerCase().includes(q)).slice(0, 3),
      companies: companies.filter((c) => c.name.toLowerCase().includes(q) || c.category.toLowerCase().includes(q)).slice(0, 3),
    }
  }, [query, ideas])

  const hasResults = results && (results.ideas.length || results.challenges.length || results.companies.length)

  return (
    <div className="relative w-full max-w-sm" ref={ref}>
      <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-ink/40" />
      <input
        value={query}
        onChange={(e) => { setQuery(e.target.value); setOpen(true) }}
        onFocus={() => setOpen(true)}
        placeholder="Search ideas, companies, challenges..."
        className="w-full pl-9 pr-8 py-2 rounded-full border border-ink/10 bg-ink/[0.02] text-sm focus:border-bridge-400 focus:bg-white transition-colors"
      />
      {query && (
        <button onClick={() => setQuery('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-ink/30 hover:text-ink">
          <X size={14} />
        </button>
      )}
      {open && query && (
        <div className="absolute top-full mt-2 w-full bg-white rounded-2xl shadow-lift border border-ink/[0.06] p-3 z-50 max-h-96 overflow-y-auto">
          {!hasResults && <p className="text-sm text-ink/40 px-2 py-3">No results for "{query}"</p>}
          {results.ideas.length > 0 && (
            <div className="mb-2">
              <p className="text-xs font-semibold text-ink/40 px-2 mb-1 uppercase tracking-wide">Ideas</p>
              {results.ideas.map((i) => (
                <button key={i.id} onClick={() => { navigate(`/customer/ideas/${i.id}`); setOpen(false); setQuery('') }}
                  className="w-full text-left px-2 py-2 rounded-lg hover:bg-bridge-50 text-sm">
                  {i.title}
                </button>
              ))}
            </div>
          )}
          {results.challenges.length > 0 && (
            <div className="mb-2">
              <p className="text-xs font-semibold text-ink/40 px-2 mb-1 uppercase tracking-wide">Challenges</p>
              {results.challenges.map((c) => (
                <button key={c.id} onClick={() => { navigate(`/customer/challenges/${c.id}`); setOpen(false); setQuery('') }}
                  className="w-full text-left px-2 py-2 rounded-lg hover:bg-bridge-50 text-sm">
                  {c.title}
                </button>
              ))}
            </div>
          )}
          {results.companies.length > 0 && (
            <div>
              <p className="text-xs font-semibold text-ink/40 px-2 mb-1 uppercase tracking-wide">Companies</p>
              {results.companies.map((c) => (
                <div key={c.id} className="px-2 py-2 rounded-lg text-sm flex items-center justify-between">
                  <span>{c.name}</span>
                  <span className="text-xs text-ink/40">{c.category}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
