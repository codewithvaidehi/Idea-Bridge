import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Waypoints, MailCheck } from 'lucide-react'

export default function ForgotPassword() {
  const [sent, setSent] = useState(false)
  const [email, setEmail] = useState('')

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <Link to="/" className="flex items-center justify-center gap-2 font-display font-bold text-lg mb-8">
          <Waypoints size={22} className="text-bridge-500" /> IdeaBridge
        </Link>
        <div className="card p-7">
          {sent ? (
            <div className="text-center py-4">
              <MailCheck size={36} className="text-signal-500 mx-auto mb-3" />
              <h1 className="font-display font-bold text-lg mb-1">Check your email</h1>
              <p className="text-sm text-ink/50">We sent a reset link to {email}.</p>
              <Link to="/login" className="btn-secondary inline-block mt-5">Back to log in</Link>
            </div>
          ) : (
            <>
              <h1 className="font-display font-bold text-xl mb-1">Reset your password</h1>
              <p className="text-sm text-ink/50 mb-6">Enter your email and we'll send you a reset link.</p>
              <form onSubmit={(e) => { e.preventDefault(); setSent(true) }} className="space-y-3">
                <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email"
                  className="w-full border border-ink/10 rounded-xl px-3 py-2.5 text-sm focus:border-bridge-400" />
                <button type="submit" className="btn-primary w-full">Send reset link</button>
              </form>
              <p className="text-sm text-center text-ink/50 mt-5">
                <Link to="/login" className="text-bridge-600 font-medium hover:underline">Back to log in</Link>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
