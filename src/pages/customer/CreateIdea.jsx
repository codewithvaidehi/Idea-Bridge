import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CheckCircle2, ImagePlus } from 'lucide-react'
import { useApp } from '../../context/AppContext'
import { companies, categories } from '../../data/mockData'

const initial = {
  companyId: 'fizzco', category: 'Food & Beverage', title: '', description: '',
  problem: '', targetCustomer: '', price: '', whyBuy: '',
}

export default function CreateIdea() {
  const { submitIdea, pushToast } = useApp()
  const [form, setForm] = useState(initial)
  const [submittedId, setSubmittedId] = useState(null)
  const navigate = useNavigate()

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.title.trim() || !form.description.trim()) return
    const id = submitIdea(form)
    setSubmittedId(id)
    pushToast('Idea submitted and added to My Ideas.')
  }

  if (submittedId) {
    return (
      <div className="max-w-md mx-auto card p-8 text-center mt-10">
        <CheckCircle2 size={40} className="text-signal-500 mx-auto mb-4" />
        <h1 className="font-display text-xl font-bold mb-2">Your idea is now live.</h1>
        <p className="text-sm text-ink/60 mb-6">The community can start voting and validating it right away.</p>
        <div className="flex flex-col gap-2">
          <Link to={`/customer/ideas/${submittedId}`} className="btn-primary">View your idea</Link>
          <Link to="/customer/ideas" className="btn-secondary">Go to My Ideas</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="font-display text-2xl font-bold mb-1">Share an Idea</h1>
      <p className="text-ink/50 text-sm mb-6">Tell us what you'd want a company to build — the community and AI will do the rest.</p>

      <form onSubmit={handleSubmit} className="card p-6 sm:p-8 space-y-5">
        <div>
          <label className="text-sm font-medium block mb-1.5">What company is this idea for?</label>
          <select value={form.companyId} onChange={update('companyId')} className="w-full border border-ink/10 rounded-xl px-3 py-2.5 text-sm focus:border-bridge-400">
            {companies.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}
          </select>
        </div>

        <div>
          <label className="text-sm font-medium block mb-1.5">Category</label>
          <select value={form.category} onChange={update('category')} className="w-full border border-ink/10 rounded-xl px-3 py-2.5 text-sm focus:border-bridge-400">
            {categories.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>

        <div>
          <label className="text-sm font-medium block mb-1.5">Idea title</label>
          <input required value={form.title} onChange={update('title')} placeholder="e.g. High-Protein Mango Drink"
            className="w-full border border-ink/10 rounded-xl px-3 py-2.5 text-sm focus:border-bridge-400" />
        </div>

        <div>
          <label className="text-sm font-medium block mb-1.5">Describe your idea</label>
          <textarea required value={form.description} onChange={update('description')} rows={3} placeholder="What is it, and how does it work?"
            className="w-full border border-ink/10 rounded-xl px-3 py-2.5 text-sm focus:border-bridge-400" />
        </div>

        <div>
          <label className="text-sm font-medium block mb-1.5">What problem does it solve?</label>
          <textarea value={form.problem} onChange={update('problem')} rows={2}
            className="w-full border border-ink/10 rounded-xl px-3 py-2.5 text-sm focus:border-bridge-400" />
        </div>

        <div>
          <label className="text-sm font-medium block mb-1.5">Target customer</label>
          <input value={form.targetCustomer} onChange={update('targetCustomer')} placeholder="Who is this for?"
            className="w-full border border-ink/10 rounded-xl px-3 py-2.5 text-sm focus:border-bridge-400" />
        </div>

        <div>
          <label className="text-sm font-medium block mb-1.5">Suggested price (₹)</label>
          <input type="number" min="0" value={form.price} onChange={update('price')} placeholder="50"
            className="w-full border border-ink/10 rounded-xl px-3 py-2.5 text-sm focus:border-bridge-400" />
        </div>

        <div>
          <label className="text-sm font-medium block mb-1.5">Why would people buy it?</label>
          <textarea value={form.whyBuy} onChange={update('whyBuy')} rows={2}
            className="w-full border border-ink/10 rounded-xl px-3 py-2.5 text-sm focus:border-bridge-400" />
        </div>

        <div>
          <label className="text-sm font-medium block mb-1.5">Photo <span className="text-ink/40 font-normal">(optional)</span></label>
          <div className="border border-dashed border-ink/15 rounded-xl p-6 flex flex-col items-center gap-2 text-ink/40 text-sm">
            <ImagePlus size={22} />
            Drag an image here, or click to upload
          </div>
        </div>

        <button type="submit" className="btn-primary w-full">Submit Idea</button>
      </form>
    </div>
  )
}
