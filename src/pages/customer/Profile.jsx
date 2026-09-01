import { Trophy, Lightbulb, FlaskConical, Flame } from 'lucide-react'
import { useApp } from '../../context/AppContext'
import { currentCustomer } from '../../data/mockData'

const ICONS = { Trophy, Lightbulb, FlaskConical, Flame }

export default function Profile() {
  const { auth } = useApp()

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="card p-6 sm:p-8 flex items-center gap-5">
        <div className="w-16 h-16 rounded-full bg-bridge-500 text-white flex items-center justify-center font-display font-bold text-xl">
          {currentCustomer.initials}
        </div>
        <div>
          <h1 className="font-display text-xl font-bold">{auth?.name || currentCustomer.name}</h1>
          <p className="text-sm text-ink/50">Customer innovator</p>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[
          ['Ideas submitted', currentCustomer.ideasSubmitted],
          ['Shortlisted', currentCustomer.ideasShortlisted],
          ['Implemented', currentCustomer.ideasImplemented],
          ['Votes received', currentCustomer.votesReceived.toLocaleString()],
        ].map(([label, value]) => (
          <div key={label} className="card p-4 text-center">
            <div className="font-display font-bold text-2xl text-bridge-600">{value}</div>
            <div className="text-xs text-ink/50 mt-1">{label}</div>
          </div>
        ))}
      </div>

      <div className="card p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-display font-semibold">Innovation Score</h3>
          <span className="font-display font-bold text-2xl text-bridge-600">{currentCustomer.innovationScore}</span>
        </div>
        <div className="space-y-3">
          {currentCustomer.scoreBreakdown.map((b) => (
            <div key={b.label}>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-ink/60">{b.label}</span>
                <span className="font-semibold">{b.value}</span>
              </div>
              <div className="h-1.5 bg-ink/[0.06] rounded-full overflow-hidden">
                <div className="h-full bg-bridge-500 rounded-full" style={{ width: `${b.value}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="card p-6">
        <h3 className="font-display font-semibold mb-4">Badges</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {currentCustomer.badges.map((b) => {
            const Icon = ICONS[b.icon]
            return (
              <div key={b.label} className="flex flex-col items-center gap-2 p-4 rounded-xl bg-bridge-50/60 text-center">
                <Icon size={22} className="text-bridge-600" />
                <span className="text-xs font-medium text-ink/70">{b.label}</span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
