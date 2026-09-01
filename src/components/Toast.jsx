import { useApp } from '../context/AppContext'
import { CheckCircle2 } from 'lucide-react'

export default function ToastContainer() {
  const { toasts } = useApp()
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] flex flex-col gap-2 items-center px-4 w-full sm:w-auto">
      {toasts.map((t) => (
        <div key={t.id} className="bg-ink text-white text-sm font-medium px-4 py-3 rounded-xl shadow-lift flex items-center gap-2 animate-[fadeIn_0.2s_ease]">
          <CheckCircle2 size={16} className="text-signal-400 shrink-0" />
          <span>{t.message}</span>
        </div>
      ))}
    </div>
  )
}
