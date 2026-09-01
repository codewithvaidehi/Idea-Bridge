const STYLES = {
  New: 'bg-bridge-50 text-bridge-700',
  'Under Review': 'bg-ember-50 text-ember-700',
  Review: 'bg-ember-50 text-ember-700',
  Shortlisted: 'bg-signal-500/10 text-signal-600',
  Testing: 'bg-signal-500/10 text-signal-600',
  Prototype: 'bg-bridge-100 text-bridge-800',
  Launched: 'bg-green-100 text-green-700',
  Rejected: 'bg-ink/[0.06] text-ink/50',
}

export default function StatusBadge({ status }) {
  return (
    <span className={`chip ${STYLES[status] || 'bg-ink/5 text-ink/60'}`}>{status}</span>
  )
}
