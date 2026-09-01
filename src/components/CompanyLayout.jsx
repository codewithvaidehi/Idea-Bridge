import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { LayoutDashboard, Lightbulb, Trophy, BrainCircuit, FlaskConical, BarChart3, LogOut, Waypoints, Menu } from 'lucide-react'
import { useState } from 'react'
import { useApp } from '../context/AppContext'
import { companies } from '../data/mockData'

const NAV = [
  { to: '/company', label: 'Overview', icon: LayoutDashboard, end: true },
  { to: '/company/ideas', label: 'Consumer Ideas', icon: Lightbulb },
  { to: '/company/challenges', label: 'Challenges', icon: Trophy },
  { to: '/company/insights', label: 'Market Insights', icon: BrainCircuit },
  { to: '/company/concept-lab', label: 'Concept Lab', icon: FlaskConical },
  { to: '/company/analytics', label: 'Analytics', icon: BarChart3 },
]

export default function CompanyLayout() {
  const { auth, logout } = useApp()
  const navigate = useNavigate()
  const [mobileOpen, setMobileOpen] = useState(false)
  const company = companies.find((c) => c.id === auth?.companyId) || companies[0]

  return (
    <div className="min-h-screen flex">
      <aside className={`fixed md:static inset-y-0 left-0 z-40 w-64 bg-white border-r border-ink/[0.06] flex flex-col transition-transform ${mobileOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}>
        <div className="h-16 flex items-center gap-2 px-5 border-b border-ink/[0.06] font-display font-bold text-lg">
          <Waypoints size={22} className="text-bridge-500" /> IdeaBridge
        </div>
        <div className="px-5 py-4 border-b border-ink/[0.06]">
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs font-bold" style={{ background: company.color }}>
              {company.name.slice(0, 2).toUpperCase()}
            </span>
            <div>
              <div className="text-sm font-semibold">{company.name}</div>
              <div className="text-xs text-ink/40">{company.category}</div>
            </div>
          </div>
        </div>
        <nav className="flex-1 px-3 py-4 space-y-1">
          {NAV.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.end} onClick={() => setMobileOpen(false)}
              className={({ isActive }) => `flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${isActive ? 'bg-bridge-50 text-bridge-700' : 'text-ink/60 hover:bg-ink/[0.03]'}`}>
              <item.icon size={17} /> {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="p-3 border-t border-ink/[0.06]">
          <button onClick={() => { logout(); navigate('/') }} className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm font-medium text-ink/50 hover:bg-ink/[0.03] w-full">
            <LogOut size={17} /> Log out
          </button>
        </div>
      </aside>

      {mobileOpen && <div className="fixed inset-0 bg-ink/30 z-30 md:hidden" onClick={() => setMobileOpen(false)} />}

      <div className="flex-1 min-w-0">
        <header className="md:hidden sticky top-0 z-20 bg-white border-b border-ink/[0.06] h-14 flex items-center px-4">
          <button onClick={() => setMobileOpen(true)} aria-label="Open menu"><Menu size={22} /></button>
          <span className="ml-3 font-display font-semibold">{company.name}</span>
        </header>
        <main className="max-w-6xl mx-auto px-4 sm:px-6 py-6">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
