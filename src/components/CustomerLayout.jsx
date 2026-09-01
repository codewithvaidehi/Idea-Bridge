import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { Home, Compass, Trophy, Lightbulb, Bell, User, LogOut, Waypoints } from 'lucide-react'
import { useApp } from '../context/AppContext'
import GlobalSearch from './GlobalSearch'

const NAV = [
  { to: '/customer', label: 'Home', icon: Home, end: true },
  { to: '/customer/explore', label: 'Explore', icon: Compass },
  { to: '/customer/challenges', label: 'Challenges', icon: Trophy },
  { to: '/customer/ideas', label: 'My Ideas', icon: Lightbulb },
]

export default function CustomerLayout() {
  const { auth, logout, notifications } = useApp()
  const navigate = useNavigate()
  const unread = notifications.filter((n) => !n.read).length

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-ink/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center gap-4">
          <NavLink to="/customer" className="flex items-center gap-2 font-display font-bold text-lg shrink-0">
            <Waypoints size={22} className="text-bridge-500" />
            IdeaBridge
          </NavLink>
          <nav className="hidden md:flex items-center gap-1 ml-2">
            {NAV.map((item) => (
              <NavLink
                key={item.to} to={item.to} end={item.end}
                className={({ isActive }) => `flex items-center gap-1.5 px-3 py-2 rounded-full text-sm font-medium transition-colors ${isActive ? 'bg-bridge-50 text-bridge-700' : 'text-ink/60 hover:text-ink'}`}
              >
                <item.icon size={16} /> {item.label}
              </NavLink>
            ))}
          </nav>
          <div className="hidden sm:block ml-auto">
            <GlobalSearch />
          </div>
          <div className="flex items-center gap-1 ml-auto sm:ml-3">
            <NavLink to="/customer/notifications" className="relative p-2 rounded-full hover:bg-ink/5" aria-label="Notifications">
              <Bell size={19} />
              {unread > 0 && <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-ember-500" />}
            </NavLink>
            <NavLink to="/customer/profile" className="p-2 rounded-full hover:bg-ink/5" aria-label="Profile">
              <User size={19} />
            </NavLink>
            <button onClick={() => { logout(); navigate('/') }} className="p-2 rounded-full hover:bg-ink/5 text-ink/50" aria-label="Log out">
              <LogOut size={19} />
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-6 pb-24 md:pb-8">
        <Outlet />
      </main>

      <nav className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-white border-t border-ink/[0.06] flex items-center justify-around py-2">
        {[...NAV, { to: '/customer/profile', label: 'Profile', icon: User }].map((item) => (
          <NavLink key={item.to} to={item.to} end={item.end}
            className={({ isActive }) => `flex flex-col items-center gap-0.5 px-2 py-1 text-[11px] font-medium ${isActive ? 'text-bridge-600' : 'text-ink/50'}`}>
            <item.icon size={20} />
            {item.label}
          </NavLink>
        ))}
      </nav>
    </div>
  )
}
