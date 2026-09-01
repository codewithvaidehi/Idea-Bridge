import { useState } from 'react'
import { FlaskConical, Loader2, Sparkles } from 'lucide-react'
import { useApp } from '../../context/AppContext'

const presetConcept = {
  name: 'Lemon Mint Spark', price: '50', sugar: '40% less', package: '250ml can',
}

export default function ConceptLab() {
  const { pushToast } = useApp()
  const [concept, setConcept] = useState(presetConcept)
  const [testing, setTesting] = useState(false)
  const [results, setResults] = useState(null)

  const update = (key) => (e) => setConcept((c) => ({ ...c, [key]: e.target.value }))

  const handleTest = () => {
    setTesting(true)
    setResults(null)
    pushToast('Consumer test launched.')
    setTimeout(() => {
      setTesting(false)
      setResults({
        tested: 10000, positive: 72, medianPrice: 50, concern: 'Artificial sweeteners',
        recommendation: 'Proceed to prototype testing. Reduce artificial sweetener perception and emphasize natural ingredients.',
      })
    }, 2000)
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-display text-2xl font-bold mb-1">Concept Lab</h1>
        <p className="text-ink/50 text-sm">Turn a validated idea into a testable product concept.</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="card p-6">
          <h3 className="font-display font-semibold mb-4 flex items-center gap-2"><FlaskConical size={18} className="text-bridge-500" /> Product Concept</h3>
          <div className="space-y-3">
            <div>
              <label className="text-xs font-semibold text-ink/50 uppercase tracking-wide">Name</label>
              <input value={concept.name} onChange={update('name')} className="w-full border border-ink/10 rounded-xl px-3 py-2.5 text-sm mt-1 focus:border-bridge-400" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-semibold text-ink/50 uppercase tracking-wide">Price (₹)</label>
                <input value={concept.price} onChange={update('price')} className="w-full border border-ink/10 rounded-xl px-3 py-2.5 text-sm mt-1 focus:border-bridge-400" />
              </div>
              <div>
                <label className="text-xs font-semibold text-ink/50 uppercase tracking-wide">Sugar</label>
                <input value={concept.sugar} onChange={update('sugar')} className="w-full border border-ink/10 rounded-xl px-3 py-2.5 text-sm mt-1 focus:border-bridge-400" />
              </div>
            </div>
            <div>
              <label className="text-xs font-semibold text-ink/50 uppercase tracking-wide">Package</label>
              <input value={concept.package} onChange={update('package')} className="w-full border border-ink/10 rounded-xl px-3 py-2.5 text-sm mt-1 focus:border-bridge-400" />
            </div>
          </div>

          <div className="mt-6 pt-5 border-t border-ink/[0.06]">
            <p className="text-xs font-semibold text-ink/50 uppercase tracking-wide mb-2">Test With Customers</p>
            <div className="grid grid-cols-2 gap-3 text-sm text-ink/60 mb-4">
              <span>Audience: <strong className="text-ink">18–30</strong></span>
              <span>Location: <strong className="text-ink">India</strong></span>
            </div>
            <ul className="text-xs text-ink/50 space-y-1 mb-4 list-disc list-inside">
              <li>Would you buy this?</li>
              <li>What price would you pay?</li>
              <li>What would stop you from buying it?</li>
            </ul>
            <button onClick={handleTest} disabled={testing} className="btn-primary w-full flex items-center justify-center gap-1.5 disabled:opacity-60">
              {testing ? <Loader2 size={16} className="animate-spin" /> : <FlaskConical size={16} />}
              {testing ? 'Running test...' : 'Launch Consumer Test'}
            </button>
          </div>
        </div>

        <div className="card p-6">
          <h3 className="font-display font-semibold mb-4">Test Results</h3>
          {!results && !testing && <p className="text-sm text-ink/40">Launch a consumer test to see simulated results here.</p>}
          {testing && <div className="space-y-3"><div className="skeleton h-16" /><div className="skeleton h-16" /><div className="skeleton h-16" /></div>}
          {results && (
            <div className="space-y-5">
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-bridge-50/60 p-4">
                  <p className="font-display font-bold text-xl text-bridge-600">{results.tested.toLocaleString()}</p>
                  <p className="text-xs text-ink/50">consumers tested</p>
                </div>
                <div className="rounded-xl bg-signal-500/10 p-4">
                  <p className="font-display font-bold text-xl text-signal-600">{results.positive}%</p>
                  <p className="text-xs text-ink/50">positive purchase intent</p>
                </div>
                <div className="rounded-xl bg-ember-50 p-4">
                  <p className="font-display font-bold text-xl text-ember-600">₹{results.medianPrice}</p>
                  <p className="text-xs text-ink/50">median acceptable price</p>
                </div>
                <div className="rounded-xl bg-ink/[0.04] p-4">
                  <p className="font-display font-bold text-sm">{results.concern}</p>
                  <p className="text-xs text-ink/50">top concern</p>
                </div>
              </div>
              <div className="bg-ink text-white rounded-xl p-5 flex gap-3">
                <Sparkles size={18} className="text-signal-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-semibold text-signal-400 uppercase tracking-wide mb-1">AI Recommendation</p>
                  <p className="text-sm leading-relaxed">{results.recommendation}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
