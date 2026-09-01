import { Bell, BellRing } from 'lucide-react'
import { useApp } from '../../context/AppContext'

export default function Notifications() {
  const { notifications, markAllRead } = useApp()

  return (
    <div className="max-w-2xl mx-auto space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="font-display text-2xl font-bold">Notifications</h1>
        <button onClick={markAllRead} className="text-sm text-bridge-600 font-medium hover:underline">Mark all as read</button>
      </div>

      {notifications.length === 0 ? (
        <div className="card p-10 text-center text-ink/40">
          <Bell size={26} className="mx-auto mb-3 text-ink/20" />
          You're all caught up.
        </div>
      ) : (
        <div className="card divide-y divide-ink/[0.05]">
          {notifications.map((n) => (
            <div key={n.id} className={`p-4 flex items-start gap-3 ${!n.read ? 'bg-bridge-50/40' : ''}`}>
              <BellRing size={16} className={`mt-0.5 shrink-0 ${!n.read ? 'text-bridge-500' : 'text-ink/25'}`} />
              <div>
                <p className="text-sm text-ink/80">{n.text}</p>
                <p className="text-xs text-ink/40 mt-0.5">{n.time}</p>
              </div>
              {!n.read && <span className="ml-auto w-2 h-2 rounded-full bg-ember-500 mt-1.5 shrink-0" />}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
