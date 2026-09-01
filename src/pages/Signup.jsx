import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Waypoints, User, Building2 } from 'lucide-react'
import { useApp } from '../context/AppContext'
import { companies } from '../data/mockData'

export default function Signup() {
  const [role, setRole] = useState('customer')
  const [companyId, setCompanyId] = useState('fizzco')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const { login, pushToast } = useApp()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    login(role, name || undefined, companyId)
    pushToast('Account created. Welcome to IdeaBridge!')
    navigate(role === 'customer' ? '/customer' : '/company')
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-sm">
        <Link to="/" className="flex items-center justify-center gap-2 font-display font-bold text-lg mb-8">
          <Waypoints size={22} className="text-bridge-500" /> IdeaBridge
        </Link>
        <div className="card p-7">
          <h1 className="font-display font-bold text-xl mb-1">Create your account</h1>
          <p className="text-sm text-ink/50 mb-6">Your idea could become the next product.</p>

          <div className="mb-5">
            <p className="text-xs font-semibold text-ink/50 mb-2 uppercase tracking-wide">Continue as</p>
            <div className="grid grid-cols-2 gap-2">
              <button type="button" onClick={() => setRole('customer')}
                className={`flex items-center justify-center gap-2 py-3 rounded-xl border text-sm font-medium transition-colors ${role === 'customer' ? 'border-bridge-500 bg-bridge-50 text-bridge-700' : 'border-ink/10 text-ink/60'}`}>
                <User size={16} /> Customer
              </button>
              <button type="button" onClick={() => setRole('company')}
                className={`flex items-center justify-center gap-2 py-3 rounded-xl border text-sm font-medium transition-colors ${role === 'company' ? 'border-bridge-500 bg-bridge-50 text-bridge-700' : 'border-ink/10 text-ink/60'}`}>
                <Building2 size={16} /> Company
              </button>
            </div>
          </div>

          {role === 'company' && (
            <div className="mb-4">
              <label className="text-xs font-semibold text-ink/50 mb-1.5 block uppercase tracking-wide">Company</label>
              <select value={companyId} onChange={(e) => setCompanyId(e.target.value)}
                className="w-full border border-ink/10 rounded-xl px-3 py-2.5 text-sm focus:border-bridge-400">
                {companies.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}
              </select>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-3">
            <input required value={name} onChange={(e) => setName(e.target.value)} placeholder="Full name"
              className="w-full border border-ink/10 rounded-xl px-3 py-2.5 text-sm focus:border-bridge-400" />
            <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email"
              className="w-full border border-ink/10 rounded-xl px-3 py-2.5 text-sm focus:border-bridge-400" />
            <input type="password" required placeholder="Password"
              className="w-full border border-ink/10 rounded-xl px-3 py-2.5 text-sm focus:border-bridge-400" />
            <button type="submit" className="btn-primary w-full">Create account</button>
          </form>

          <p className="text-sm text-center text-ink/50 mt-5">
            Already have an account? <Link to="/login" className="text-bridge-600 font-medium hover:underline">Log in</Link>
          </p>
        </div>
      </div>
    </div>
  )
}
